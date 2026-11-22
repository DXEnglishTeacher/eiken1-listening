#!/usr/bin/env python3
"""Verify lesson-data.js audio URL, clip/transcript timestamps, and text against official YouTube captions."""

import html
import json
import pathlib
import re
import subprocess
import sys
import urllib.request
import xml.etree.ElementTree as ET


def load_lesson_data(js_path: pathlib.Path) -> dict:
    """Evaluate lesson-data.js via macOS JavaScriptCore (osascript) into JSON."""
    script = (
        f'ObjC.import("Foundation");'
        f'var txt = $.NSString.stringWithContentsOfFileEncodingError("{js_path}", $.NSUTF8StringEncoding, null).js;'
        f'eval(txt.replace("const LESSON_DATA", "var LESSON_DATA"));'
        f'JSON.stringify(LESSON_DATA);'
    )
    out = subprocess.check_output(["osascript", "-l", "JavaScript", "-e", script], text=True)
    return json.loads(out.strip())


def verify_audio_url(audio_url: str) -> tuple[bool, str]:
    """Verify audioUrl responds 200 with audio/* Content-Type and byte-range seeking support."""
    req = urllib.request.Request(
        audio_url,
        method="HEAD",
        headers={"User-Agent": "Mozilla/5.0"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        status = resp.status
        ctype = (resp.headers.get("Content-Type") or "").lower()
        ranges = (resp.headers.get("Accept-Ranges") or "").lower()
        length = resp.headers.get("Content-Length") or "?"
        if status != 200:
            return False, f"audioUrl HTTP {status} != 200"
        if not ctype.startswith("audio/"):
            return False, f"audioUrl Content-Type={ctype!r} is not audio/*"
        if ranges != "bytes":
            return False, f"audioUrl Accept-Ranges={ranges!r} != 'bytes' (seeking unreliable)"
        return True, f"{ctype}, {length} bytes, Accept-Ranges={ranges}"


def fetch_youtube_captions(video_id: str) -> list[tuple[float, float, str]]:
    """Fetch official English caption segments (start, end, text) via Android Innertube API."""
    payload = json.dumps({
        "context": {"client": {"clientName": "ANDROID", "clientVersion": "20.10.38"}},
        "videoId": video_id,
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://www.youtube.com/youtubei/v1/player",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "User-Agent": "com.google.android.youtube/20.10.38",
        },
    )
    data = json.loads(urllib.request.urlopen(req, timeout=15).read().decode("utf-8"))
    tracks = (
        data.get("captions", {})
        .get("playerCaptionsTracklistRenderer", {})
        .get("captionTracks", [])
    )
    if not tracks:
        raise RuntimeError(f"No caption tracks found for video {video_id}")

    en_track = next(
        (t for t in tracks if t.get("languageCode") == "en" and t.get("kind") != "asr"),
        None,
    ) or next(
        (t for t in tracks if t.get("languageCode", "").startswith("en")),
        None,
    )
    if not en_track:
        raise RuntimeError(f"No English caption track found for video {video_id}")

    xml_text = urllib.request.urlopen(en_track["baseUrl"], timeout=15).read().decode("utf-8")
    root = ET.fromstring(xml_text)
    segs: list[tuple[float, float, str]] = []
    for node in root.iter():
        if node.tag in ("text", "p") and ("start" in node.attrib or "t" in node.attrib):
            t_raw = node.attrib.get("start") or node.attrib.get("t")
            d_raw = node.attrib.get("dur") or node.attrib.get("d") or "0"
            scale = 1000.0 if "t" in node.attrib else 1.0
            start = float(t_raw) / scale
            dur = float(d_raw) / scale
            txt = html.unescape("".join(node.itertext())).replace("\n", " ").strip()
            if txt:
                segs.append((start, start + dur, txt))
    return segs


def fmt_time(sec: float) -> str:
    s = int(sec + 0.5)
    return f"{s // 60}:{s % 60:02d}"


def tokenize(text: str) -> list[str]:
    return re.findall(r"[a-z0-9]+", text.lower())


def is_stage_direction(text: str) -> bool:
    stripped = text.strip()
    return (stripped.startswith("(") and stripped.endswith(")")) or (
        stripped.startswith("[") and stripped.endswith("]")
    )


def verify(lesson_path: pathlib.Path) -> int:
    lesson = load_lesson_data(lesson_path)
    video_id = lesson["youtubeId"]
    audio_url = lesson.get("audioUrl")
    offset = float(lesson.get("audioOffset", 0.0))

    errors: list[str] = []

    if not audio_url:
        errors.append("Missing 'audioUrl' in LESSON_DATA")
        audio_summary = "missing"
    else:
        ok, audio_summary = verify_audio_url(audio_url)
        if not ok:
            errors.append(audio_summary)

    segs = fetch_youtube_captions(video_id)
    speech_segs = [(s, e, t) for s, e, t in segs if not is_stage_direction(t)]
    first_speech_start = speech_segs[0][0] if speech_segs else segs[0][0]

    total_lines = 0

    for clip in lesson["clips"]:
        cid = clip["id"]
        c_start = float(clip["start"])
        c_end = float(clip["end"])
        yt_c_start = c_start - offset
        expected_label = f"{fmt_time(c_start)} \u2013 {fmt_time(c_end)}"

        if yt_c_start < first_speech_start - 3.0:
            errors.append(
                f"[{cid}] audio start={c_start}s (YT {yt_c_start:.1f}s) is >3s before first speech ({first_speech_start:.1f}s; likely includes BGM/intro)"
            )

        if clip.get("durationLabel") != expected_label:
            errors.append(
                f"[{cid}] durationLabel={clip.get('durationLabel')!r} != expected {expected_label!r}"
            )

        if c_end <= c_start:
            errors.append(f"[{cid}] end ({c_end}) <= start ({c_start})")

        lines = clip.get("transcript", [])
        prev_start = -1.0
        full_transcript_tokens = set()

        for idx, line in enumerate(lines, start=1):
            total_lines += 1
            if "start" not in line:
                errors.append(f"[{cid} line {idx}] missing 'start' timestamp")
                continue
            l_start = float(line["start"])
            if not (c_start <= l_start < c_end):
                errors.append(
                    f"[{cid} line {idx}] start={l_start}s outside clip range [{c_start}, {c_end})"
                )
            if l_start <= prev_start:
                errors.append(
                    f"[{cid} line {idx}] start={l_start}s not strictly ascending (prev={prev_start}s)"
                )
            prev_start = l_start

            yt_l_start = l_start - offset
            next_start = float(lines[idx]["start"]) if idx < len(lines) else c_end
            yt_next_start = next_start - offset
            window_text = " ".join(
                t for s, e, t in segs if e >= yt_l_start - 2.0 and s <= yt_next_start + 2.0
            )
            window_tokens = set(tokenize(window_text))
            line_tokens = tokenize(line["en"])
            full_transcript_tokens.update(line_tokens)

            major_tokens = [w for w in line_tokens if len(w) >= 3] or line_tokens
            matched = sum(1 for w in major_tokens if w in window_tokens)
            ratio = matched / max(1, len(major_tokens))
            if ratio < 0.80:
                missing = [w for w in major_tokens if w not in window_tokens]
                errors.append(
                    f"[{cid} line {idx}] caption match {ratio:.0%} (<80%) at audio [{l_start:.1f}..{next_start:.1f}] / YT [{yt_l_start:.1f}..{yt_next_start:.1f}]; missing={missing}"
                )

        for seg in clip.get("dictation", {}).get("segments", []):
            blank = seg.get("blank")
            if blank and blank.lower() not in full_transcript_tokens:
                errors.append(
                    f"[{cid}] dictation blank {blank!r} not found in clip transcript"
                )

    if errors:
        print("FAIL:")
        for err in errors:
            print(" -", err)
        return 1

    print(
        f"PASS: Verified audio ({audio_summary}), {len(lesson['clips'])} clips, and {total_lines} transcript lines "
        f"(audioOffset={offset}s, first YT speech={first_speech_start:.1f}s)."
    )
    return 0


if __name__ == "__main__":
    default_path = pathlib.Path(__file__).resolve().parent.parent / "lesson-data.js"
    target = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else default_path
    raise SystemExit(verify(target))
