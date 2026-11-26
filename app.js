(function () {
  "use strict";

  const ALL_LESSONS =
    typeof LESSONS !== "undefined" && Array.isArray(LESSONS) && LESSONS.length
      ? LESSONS
      : [LESSON_DATA];
  const ACTIVE_LESSON_KEY = "eiken1_listening_lab_active_lesson";
  const THEME_KEY = "eiken1_listening_lab_theme";
  const SPEED_STEPS = [1, 1.25, 0.75];

  function getStorageKey(lessonId) {
    return "eiken1_listening_lab_v2_" + lessonId;
  }

  function getActiveLesson() {
    return ALL_LESSONS[state.activeLessonIndex] || ALL_LESSONS[0];
  }

  const PLAY_ICON =
    '<svg class="ico-sm" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>';
  const PAUSE_ICON =
    '<svg class="ico-sm" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>';

  const state = {
    activeLessonIndex: 0,
    activeClipIndex: 0,
    activeTab: "script",
    subtitleMode: "both", // "none" | "en" | "both"
    dictationMode: "tap", // "tap" | "type"
    dictationValues: [],
    activeBlankIndex: 0,
    dictationChoices: [],
    loopEnabled: true,
    speedIndex: 0,
    completedClips: new Set(),
    masteredVocab: new Set(),
    quizAnswers: {},
    theme: "light"
  };

  let audio = null;
  let pendingSeek = null;
  let isSeeking = false;
  let pollTimer = null;
  let blurTimer = null;

  // --- Persistence ---
  function resolveInitialLessonIndex() {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("lesson");
      if (q) {
        const byId = ALL_LESSONS.findIndex((l) => l.id === q);
        if (byId !== -1) return byId;
        const num = Number(q);
        if (Number.isInteger(num) && num >= 1 && num <= ALL_LESSONS.length) {
          return num - 1;
        }
      }
      const savedId = localStorage.getItem(ACTIVE_LESSON_KEY);
      if (savedId) {
        const idx = ALL_LESSONS.findIndex((l) => l.id === savedId);
        if (idx !== -1) return idx;
      }
    } catch (_) {
      // Ignore query/storage errors
    }
    return 0;
  }

  function readLessonProgress(lessonId) {
    try {
      const raw = localStorage.getItem(getStorageKey(lessonId));
      if (!raw) return { completedClips: [], masteredVocab: [], theme: null };
      const saved = JSON.parse(raw);
      return {
        completedClips: Array.isArray(saved.completedClips) ? saved.completedClips : [],
        masteredVocab: Array.isArray(saved.masteredVocab) ? saved.masteredVocab : [],
        theme: saved.theme === "dark" || saved.theme === "light" ? saved.theme : null
      };
    } catch (_) {
      return { completedClips: [], masteredVocab: [], theme: null };
    }
  }

  function loadLessonProgress() {
    const lesson = getActiveLesson();
    const prog = readLessonProgress(lesson.id);
    state.completedClips = new Set(prog.completedClips);
    state.masteredVocab = new Set(prog.masteredVocab);
  }

  function loadState() {
    state.activeLessonIndex = resolveInitialLessonIndex();
    loadLessonProgress();
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "dark" || savedTheme === "light") {
        state.theme = savedTheme;
        return;
      }
      const prog = readLessonProgress(getActiveLesson().id);
      if (prog.theme) {
        state.theme = prog.theme;
        return;
      }
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        state.theme = "dark";
      }
    } catch (_) {
      // Ignore storage errors
    }
  }

  function saveState() {
    try {
      const lesson = getActiveLesson();
      localStorage.setItem(
        getStorageKey(lesson.id),
        JSON.stringify({
          completedClips: Array.from(state.completedClips),
          masteredVocab: Array.from(state.masteredVocab),
          theme: state.theme
        })
      );
      localStorage.setItem(THEME_KEY, state.theme);
    } catch (_) {
      // Ignore storage errors
    }
  }

  // --- Helpers ---
  function formatTime(sec) {
    const s = Math.max(0, Math.floor(sec));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ":" + String(r).padStart(2, "0");
  }

  function getActiveClip() {
    return getActiveLesson().clips[state.activeClipIndex];
  }

  function getPlaybackRate() {
    return SPEED_STEPS[state.speedIndex];
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // --- Theme ---
  const MOON_SVG =
    '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const SUN_SVG =
    '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.innerHTML = state.theme === "dark" ? SUN_SVG : MOON_SVG;
    }
  }

  // --- Progress Header ---
  function updateProgress() {
    const lesson = getActiveLesson();
    document.getElementById("progress-clips").textContent =
      state.completedClips.size + "/" + lesson.clips.length;
    document.getElementById("progress-vocab").textContent =
      state.masteredVocab.size + "/" + lesson.vocab.length;
  }

  // --- Lesson Switcher ---
  function renderLessonSwitcher() {
    const container = document.getElementById("lesson-switcher");
    if (!container) return;
    container.innerHTML = "";
    ALL_LESSONS.forEach((lesson, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lesson-pill" + (idx === state.activeLessonIndex ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(idx === state.activeLessonIndex));
      const prog =
        idx === state.activeLessonIndex
          ? state.completedClips.size
          : readLessonProgress(lesson.id).completedClips.length;
      const total = lesson.clips.length;
      const progText = prog >= total ? "✓" : prog + "/" + total;
      btn.innerHTML =
        '<span class="lesson-pill-num">L' + String(idx + 1).padStart(2, "0") + "</span>" +
        '<span class="lesson-pill-title">' + escapeHtml(lesson.shortTitle || lesson.title) + "</span>" +
        '<span class="lesson-pill-prog">' + progText + "</span>";
      btn.addEventListener("click", () => selectLesson(idx));
      container.appendChild(btn);

      if (idx === state.activeLessonIndex) {
        requestAnimationFrame(() => {
          const target = btn.offsetLeft - (container.clientWidth - btn.offsetWidth) / 2;
          container.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
        });
      }
    });
  }

  function selectLesson(index) {
    if (index === state.activeLessonIndex || index < 0 || index >= ALL_LESSONS.length) return;
    state.activeLessonIndex = index;
    state.activeClipIndex = 0;
    state.quizAnswers = {};

    const lesson = getActiveLesson();
    try {
      localStorage.setItem(ACTIVE_LESSON_KEY, lesson.id);
      const url = new URL(window.location.href);
      url.searchParams.set("lesson", lesson.id);
      window.history.replaceState(null, "", url.toString());
    } catch (_) {
      // Ignore history/storage errors
    }

    loadLessonProgress();
    document.title = "EIKEN 1 Listening Lab — " + lesson.lessonNumber;
    loadAudioForActiveLesson();
    renderLessonSwitcher();
    renderHero();
    updateProgress();
    renderActiveClip();
    renderVocab();
    renderQuiz();
  }

  // --- Render Lesson Info ---
  function renderHero() {
    const lesson = getActiveLesson();
    document.getElementById("lesson-number").textContent = lesson.lessonNumber;
    document.getElementById("lesson-level").textContent = lesson.level;
    document.getElementById("lesson-time").textContent = lesson.estimatedMinutes + " min";
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-subtitle").textContent =
      lesson.originalTitle + " — " + lesson.speaker;
    document.getElementById("lesson-summary").textContent = lesson.summary;

    const creditHtml =
      "<span>" +
      escapeHtml(lesson.credit || "") +
      "</span>" +
      '<a href="' +
      escapeHtml(lesson.sourceUrl || "#") +
      '" target="_blank" rel="noopener noreferrer">TED公式ページで動画を見る ↗</a>';

    const deskCredit = document.getElementById("source-credit");
    if (deskCredit) deskCredit.innerHTML = creditHtml;
    const mobCredit = document.getElementById("mobile-credit");
    if (mobCredit) mobCredit.innerHTML = creditHtml;
  }

  // --- Audio UI Helpers ---
  function syncPlayButtonUI() {
    const isPlaying = Boolean(audio && !audio.paused && !audio.ended);
    const btn = document.getElementById("btn-play-clip");
    if (btn) {
      btn.innerHTML = isPlaying
        ? PAUSE_ICON + "<span>一時停止</span>"
        : PLAY_ICON + "<span>再生</span>";
    }
    const dot = document.getElementById("player-status-dot");
    if (dot) {
      dot.classList.toggle("is-playing", isPlaying);
    }
  }

  function updateSeekUI(absoluteSec) {
    const clip = getActiveClip();
    const clipDuration = Math.max(1, clip.end - clip.start);
    const rel = Math.max(0, Math.min(clipDuration, absoluteSec - clip.start));

    const seekEl = document.getElementById("audio-seek");
    if (seekEl && !isSeeking) {
      seekEl.max = String(clipDuration);
      seekEl.value = rel.toFixed(1);
    }
    const curEl = document.getElementById("current-time-display");
    if (curEl) curEl.textContent = formatTime(rel);
    const durEl = document.getElementById("clip-duration-display");
    if (durEl) durEl.textContent = formatTime(clipDuration);
  }

  // --- Render Horizontal Clip Strip ---
  function renderClipList() {
    const strip = document.getElementById("clip-list");
    strip.innerHTML = "";
    getActiveLesson().clips.forEach((clip, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "option");
      const isDone = state.completedClips.has(clip.id);
      const isActive = idx === state.activeClipIndex;
      btn.setAttribute("aria-selected", String(isActive));
      btn.className = "clip-chip" + (isActive ? " active" : "") + (isDone ? " done" : "");
      btn.innerHTML =
        '<span class="chip-num">' + (isDone ? "✓" : "0" + clip.number) + "</span>" +
        "<span>" + escapeHtml(clip.title) + "</span>";
      btn.addEventListener("click", () => selectClip(idx, true));
      strip.appendChild(btn);

      const wrap = strip.parentElement;
      if (wrap && isActive) {
        requestAnimationFrame(() => {
          const target = btn.offsetLeft - (wrap.clientWidth - btn.offsetWidth) / 2;
          wrap.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
        });
      }
    });
  }

  // --- Render Active Clip ---
  function renderActiveClip() {
    const clip = getActiveClip();

    const playerLabel = document.getElementById("player-clip-label");
    if (playerLabel) {
      playerLabel.textContent = "CLIP 0" + clip.number + " · " + clip.title;
    }

    updateSeekUI(clip.start);

    document.getElementById("active-clip-range").textContent =
      "CLIP 0" + clip.number + " · " + clip.durationLabel;
    document.getElementById("active-clip-heading").textContent = clip.title;
    document.getElementById("active-clip-eiken").textContent = clip.eikenPoint;

    const doneBtn = document.getElementById("btn-mark-done");
    const doneLabel = document.getElementById("done-btn-label");
    const isDone = state.completedClips.has(clip.id);
    doneBtn.setAttribute("aria-pressed", String(isDone));
    doneLabel.textContent = isDone ? "完了済み" : "完了にする";

    renderTranscript();
    renderNativeNotes();
    initDictationForClip();
    renderDictation();
    renderClipList();
  }

  function highlightActiveTranscriptLine(currentSec) {
    const cards = document.querySelectorAll("#transcript-box .script-card");
    if (!cards.length) return;
    const clip = getActiveClip();
    const lines = clip.transcript || [];
    let activeIdx = -1;
    if (currentSec >= clip.start - 0.5 && currentSec <= clip.end + 1.0) {
      for (let i = 0; i < lines.length; i++) {
        if (currentSec + 0.8 >= lines[i].start) {
          activeIdx = i;
        }
      }
    }
    cards.forEach((card, idx) => {
      card.classList.toggle("is-playing", idx === activeIdx);
    });
  }

  function renderTranscript() {
    const clip = getActiveClip();
    const box = document.getElementById("transcript-box");
    box.innerHTML = "";

    if (state.subtitleMode === "none") {
      box.innerHTML =
        '<div class="script-hidden-card">' +
        "<strong>字幕オフ（実戦リスニング）</strong>" +
        "まずは音だけで2回聞いてみましょう。聞き取れたら「英語」または「英＋日」へ。" +
        "</div>";
      return;
    }

    clip.transcript.forEach((line, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "script-card";
      card.dataset.lineIndex = String(idx);
      card.dataset.start = String(line.start);
      card.setAttribute("aria-label", formatTime(line.start) + " から再生: " + line.en);

      const relSec = Math.max(0, line.start - clip.start);
      let html =
        '<div class="script-meta">' +
          '<span class="script-play-hint">' +
            PLAY_ICON +
            "<span>" + formatTime(relSec) + " (" + formatTime(line.start) + ")</span>" +
          "</span>" +
          "<span>タップで再生</span>" +
        "</div>" +
        '<p class="script-en">' + escapeHtml(line.en) + "</p>";
      if (state.subtitleMode === "both") {
        html += '<p class="script-ja">' + escapeHtml(line.ja) + "</p>";
      }
      card.innerHTML = html;
      card.addEventListener("click", () => {
        seekAndPlay(line.start);
      });
      box.appendChild(card);
    });

    const now =
      pendingSeek !== null
        ? pendingSeek
        : audio && audio.readyState >= 1
          ? audio.currentTime
          : clip.start;
    highlightActiveTranscriptLine(now);
  }

  function renderNativeNotes() {
    const clip = getActiveClip();
    const grid = document.getElementById("native-notes-grid");
    grid.innerHTML = "";

    clip.nativeNotes.forEach((note) => {
      const card = document.createElement("article");
      card.className = "note-card";
      card.innerHTML =
        '<div class="note-head">' +
          '<span class="note-phrase">“' + escapeHtml(note.phrase) + '”</span>' +
          '<span class="note-tag">' + escapeHtml(note.type) + "</span>" +
        "</div>" +
        '<div class="sound-bar">' +
          '<span class="sound-label">SOUND</span>' +
          "<span>" + escapeHtml(note.heardAs) + "</span>" +
        "</div>" +
        '<p class="note-body">' + escapeHtml(note.explanation) + "</p>";
      grid.appendChild(card);
    });
  }

  // --- Dictation ---
  function shuffleList(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function initDictationForClip() {
    const clip = getActiveClip();
    const blanks = clip.dictation.segments
      .filter((seg) => Boolean(seg.blank))
      .map((seg) => seg.blank);
    state.dictationValues = blanks.map(() => "");
    state.activeBlankIndex = 0;
    state.dictationChoices = shuffleList(blanks.concat(clip.dictation.distractors || []));
  }

  function scheduleCompactCleanup() {
    if (blurTimer) clearTimeout(blurTimer);
    blurTimer = setTimeout(() => {
      const active = document.activeElement;
      const keepCompact =
        active &&
        (active.classList.contains("blank-input") || Boolean(active.closest(".transport-bar")));
      if (!keepCompact) {
        document.body.classList.remove("keyboard-compact");
      }
    }, 220);
  }

  function syncDictationModeButtons() {
    document.querySelectorAll("[data-dict-mode]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.dictMode === state.dictationMode);
    });
  }

  function renderWordBank() {
    const wordBank = document.getElementById("word-bank");
    if (!wordBank) return;

    if (state.dictationMode !== "tap") {
      wordBank.hidden = true;
      wordBank.innerHTML = "";
      return;
    }

    wordBank.hidden = false;
    wordBank.innerHTML = "";

    const usedCounts = {};
    state.dictationValues.forEach((val) => {
      const key = val.trim().toLowerCase();
      if (key) usedCounts[key] = (usedCounts[key] || 0) + 1;
    });

    state.dictationChoices.forEach((word) => {
      const key = word.toLowerCase();
      const isUsed = (usedCounts[key] || 0) > 0;
      if (isUsed) usedCounts[key] -= 1;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip" + (isUsed ? " is-used" : "");
      chip.textContent = word;
      chip.disabled = isUsed;

      chip.addEventListener("click", () => {
        const total = state.dictationValues.length;
        if (total === 0) return;

        let targetIdx = state.activeBlankIndex;
        if (targetIdx < 0 || targetIdx >= total) targetIdx = 0;
        if (state.dictationValues[targetIdx]) {
          const firstEmpty = state.dictationValues.findIndex((v) => !v);
          if (firstEmpty !== -1) targetIdx = firstEmpty;
        }

        state.dictationValues[targetIdx] = word;

        let nextIdx = -1;
        for (let offset = 1; offset <= total; offset++) {
          const probe = (targetIdx + offset) % total;
          if (!state.dictationValues[probe]) {
            nextIdx = probe;
            break;
          }
        }
        state.activeBlankIndex = nextIdx === -1 ? targetIdx : nextIdx;
        renderDictation();
      });

      wordBank.appendChild(chip);
    });
  }

  function renderDictation() {
    const clip = getActiveClip();
    document.getElementById("dictation-heading").textContent =
      "Clip 0" + clip.number + " — " + clip.title;
    document.getElementById("dictation-prompt").textContent = clip.dictation.prompt;
    syncDictationModeButtons();

    if (state.dictationMode === "tap") {
      document.body.classList.remove("keyboard-compact");
    }

    const card = document.getElementById("dictation-card");
    card.innerHTML = "";

    let blankIdx = 0;
    clip.dictation.segments.forEach((seg) => {
      if (seg.text) {
        card.appendChild(document.createTextNode(seg.text));
      } else if (seg.blank) {
        const currentIdx = blankIdx;
        blankIdx += 1;
        const currentVal = state.dictationValues[currentIdx] || "";

        if (state.dictationMode === "tap") {
          const slot = document.createElement("button");
          slot.type = "button";
          slot.className =
            "blank-slot" +
            (currentIdx === state.activeBlankIndex ? " is-active" : "") +
            (currentVal ? " is-filled" : "");
          slot.textContent = currentVal || "(" + blankIdx + ")";
          slot.dataset.index = String(currentIdx);
          slot.dataset.answer = seg.blank;
          slot.dataset.hint = seg.hint;
          slot.setAttribute("aria-label", "空欄 " + blankIdx);

          slot.addEventListener("click", () => {
            if (state.dictationValues[currentIdx]) {
              state.dictationValues[currentIdx] = "";
            }
            state.activeBlankIndex = currentIdx;
            renderDictation();
          });

          card.appendChild(slot);
        } else {
          const input = document.createElement("input");
          input.type = "text";
          input.className = "blank-input";
          input.placeholder = "(" + blankIdx + ")";
          input.value = currentVal;
          input.dataset.index = String(currentIdx);
          input.dataset.answer = seg.blank;
          input.dataset.hint = seg.hint;
          input.setAttribute("aria-label", "空欄 " + blankIdx);
          input.autocomplete = "off";
          input.autocapitalize = "none";
          input.spellcheck = false;

          input.addEventListener("input", () => {
            state.dictationValues[currentIdx] = input.value;
            input.classList.remove("correct", "wrong");
          });

          input.addEventListener("focus", () => {
            if (blurTimer) clearTimeout(blurTimer);
            state.activeBlankIndex = currentIdx;
            if (window.innerWidth <= 900) {
              document.body.classList.add("keyboard-compact");
            }
          });

          input.addEventListener("blur", scheduleCompactCleanup);

          card.appendChild(input);
        }
      }
    });

    renderWordBank();

    const hintsBox = document.getElementById("dictation-hints");
    hintsBox.hidden = true;
    hintsBox.innerHTML = "";

    const feedback = document.getElementById("dictation-feedback");
    feedback.hidden = true;
    feedback.innerHTML = "";
  }

  function getDictationTargets() {
    return document.querySelectorAll("#dictation-card .blank-slot, #dictation-card .blank-input");
  }

  function checkDictation() {
    const targets = getDictationTargets();
    let correct = 0;
    targets.forEach((el) => {
      const idx = Number(el.dataset.index);
      const rawVal = el.tagName === "INPUT" ? el.value : state.dictationValues[idx] || "";
      const userVal = rawVal.trim().toLowerCase();
      const expected = el.dataset.answer.toLowerCase();
      el.classList.remove("correct", "wrong");
      if (userVal === expected) {
        el.classList.add("correct");
        correct += 1;
      } else {
        el.classList.add("wrong");
      }
    });

    const fb = document.getElementById("dictation-feedback");
    fb.hidden = false;
    if (correct === targets.length) {
      fb.className = "feedback-banner success";
      fb.textContent = "全問正解！ネイティブのスピードで正確に聞き取れています。";
    } else {
      fb.className = "feedback-banner info";
      fb.textContent =
        correct + " / " + targets.length + " 問正解。0.75x 再生やヒントを使って再挑戦してみましょう。";
    }
  }

  function showDictationHints() {
    const targets = getDictationTargets();
    const hintsBox = document.getElementById("dictation-hints");
    let html = "<ul>";
    targets.forEach((el, idx) => {
      const ans = el.dataset.answer;
      html +=
        "<li><strong>(" + (idx + 1) + ")</strong> " +
        escapeHtml(el.dataset.hint) +
        "（頭文字: <code>" + escapeHtml(ans[0]) + "...</code>）</li>";
    });
    html += "</ul>";
    hintsBox.innerHTML = html;
    hintsBox.hidden = false;
  }

  function revealDictation() {
    const targets = getDictationTargets();
    targets.forEach((el) => {
      const idx = Number(el.dataset.index);
      const ans = el.dataset.answer;
      state.dictationValues[idx] = ans;
      el.classList.remove("wrong");
      el.classList.add("correct");
      if (el.tagName === "INPUT") {
        el.value = ans;
      } else {
        el.textContent = ans;
        el.classList.add("is-filled");
      }
    });
    renderWordBank();
    const fb = document.getElementById("dictation-feedback");
    fb.hidden = false;
    fb.className = "feedback-banner info";
    fb.textContent = "解答を表示しました。もう一度音声を聞いて音とスペルを結びつけましょう。";
  }

  // --- Vocabulary ---
  function renderVocab() {
    const grid = document.getElementById("vocab-grid");
    grid.innerHTML = "";

    getActiveLesson().vocab.forEach((item) => {
      const mastered = state.masteredVocab.has(item.word);
      const card = document.createElement("article");
      card.className = "vocab-card" + (mastered ? " mastered" : "");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-pressed", String(mastered));
      card.innerHTML =
        '<div class="vocab-top">' +
          "<div>" +
            '<span class="vocab-word">' + escapeHtml(item.word) + "</span>" +
            '<span class="vocab-phonetic">' + escapeHtml(item.phonetic) + " · " + escapeHtml(item.pos) + "</span>" +
          "</div>" +
          '<span class="vocab-check" aria-hidden="true">' +
            '<svg class="ico-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
          "</span>" +
        "</div>" +
        '<div class="vocab-meaning">' + escapeHtml(item.meaning) + "</div>" +
        '<p class="vocab-note">' + escapeHtml(item.note) + "</p>" +
        '<p class="vocab-example">“' + escapeHtml(item.example) + '”</p>';

      const toggle = () => {
        if (state.masteredVocab.has(item.word)) {
          state.masteredVocab.delete(item.word);
        } else {
          state.masteredVocab.add(item.word);
        }
        saveState();
        updateProgress();
        renderVocab();
      };

      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });

      grid.appendChild(card);
    });
  }

  // --- Quiz ---
  function renderQuiz() {
    const list = document.getElementById("quiz-list");
    list.innerHTML = "";
    const lesson = getActiveLesson();

    let score = 0;
    lesson.quiz.forEach((q, qIdx) => {
      const chosen = state.quizAnswers[q.id];
      const answered = chosen !== undefined;
      if (answered && chosen === q.correctIndex) score += 1;

      const card = document.createElement("article");
      card.className = "quiz-card";

      let optsHtml = "";
      q.options.forEach((opt, oIdx) => {
        let cls = "quiz-opt";
        if (answered) {
          if (oIdx === q.correctIndex) cls += " correct";
          else if (oIdx === chosen) cls += " wrong";
        }
        optsHtml +=
          '<button type="button" class="' + cls + '" data-q="' + q.id + '" data-o="' + oIdx + '"' +
          (answered ? " disabled" : "") + ">" +
          (oIdx + 1) + ". " + escapeHtml(opt) +
          "</button>";
      });

      let expHtml = "";
      if (answered) {
        const prefix = chosen === q.correctIndex ? "正解 — " : "不正解 — ";
        expHtml =
          '<div class="quiz-explanation"><strong>' + prefix + "</strong>" +
          escapeHtml(q.explanation) + "</div>";
      }

      card.innerHTML =
        '<div class="quiz-part">Q' + (qIdx + 1) + " · " + escapeHtml(q.part) + "</div>" +
        '<p class="quiz-q">' + escapeHtml(q.question) + "</p>" +
        '<div class="quiz-options">' + optsHtml + "</div>" +
        expHtml;

      card.querySelectorAll(".quiz-opt").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.quizAnswers[q.id] = Number(btn.dataset.o);
          renderQuiz();
        });
      });

      list.appendChild(card);
    });

    document.getElementById("quiz-score-text").textContent =
      score + " / " + lesson.quiz.length;
  }

  // --- Tab Switching (Syncs Desktop Tabs + Mobile Bottom Nav) ---
  function switchTab(tabName) {
    state.activeTab = tabName;

    document.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.setAttribute("aria-selected", String(btn.dataset.tab === tabName));
    });

    document.querySelectorAll(".study-panel").forEach((panel) => {
      panel.hidden = panel.id !== "panel-" + tabName;
    });

    if (tabName !== "dictation") {
      document.body.classList.remove("keyboard-compact");
    }

    if (window.innerWidth <= 900 && window.scrollY > 40) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // --- HTML5 Audio Player ---
  function applyPendingSeekIfReady() {
    if (!audio || pendingSeek === null || audio.readyState < 1) return false;
    try {
      audio.currentTime = pendingSeek;
      pendingSeek = null;
      return true;
    } catch (_) {
      return false;
    }
  }

  function handleTimeTick() {
    if (!audio) return;
    const clip = getActiveClip();
    if (pendingSeek !== null) {
      updateSeekUI(pendingSeek);
      highlightActiveTranscriptLine(pendingSeek);
      return;
    }
    if (audio.readyState < 1) return;

    const now = audio.currentTime;
    updateSeekUI(now);
    highlightActiveTranscriptLine(now);

    if (!audio.paused && now >= clip.end) {
      if (state.loopEnabled) {
        audio.currentTime = clip.start;
      } else {
        audio.pause();
        audio.currentTime = clip.start;
        updateSeekUI(clip.start);
        highlightActiveTranscriptLine(clip.start);
      }
    }
  }

  function loadAudioForActiveLesson() {
    const lesson = getActiveLesson();
    if (!audio || !lesson.audioUrl) return;
    if (!audio.paused) audio.pause();
    pendingSeek = getActiveClip().start;
    audio.src = lesson.audioUrl;
    audio.playbackRate = getPlaybackRate();
    audio.load();
    syncPlayButtonUI();
  }

  function initAudioPlayer() {
    audio = document.getElementById("audio-player");
    if (!audio) return;

    audio.addEventListener("loadedmetadata", () => {
      applyPendingSeekIfReady();
      audio.playbackRate = getPlaybackRate();
    });

    audio.addEventListener("canplay", () => {
      applyPendingSeekIfReady();
      audio.playbackRate = getPlaybackRate();
    });

    audio.addEventListener("play", syncPlayButtonUI);
    audio.addEventListener("pause", syncPlayButtonUI);
    audio.addEventListener("ended", syncPlayButtonUI);
    audio.addEventListener("timeupdate", handleTimeTick);

    if (pollTimer) clearInterval(pollTimer);
    pollTimer = setInterval(handleTimeTick, 100);

    loadAudioForActiveLesson();
  }

  function seekAndPlay(seconds) {
    const clip = getActiveClip();
    const clamped = Math.max(clip.start, Math.min(clip.end - 0.1, seconds));
    updateSeekUI(clamped);
    highlightActiveTranscriptLine(clamped);
    if (!audio) return;

    audio.playbackRate = getPlaybackRate();
    if (audio.readyState >= 1) {
      pendingSeek = null;
      audio.currentTime = clamped;
      audio.play().catch(() => {});
    } else {
      pendingSeek = clamped;
      audio.load();
      audio.play().catch(() => {});
    }
  }

  function togglePlayActiveClip() {
    const clip = getActiveClip();
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    const now = audio.currentTime;
    if (
      audio.readyState >= 1 &&
      pendingSeek === null &&
      now >= clip.start &&
      now < clip.end - 0.3
    ) {
      audio.playbackRate = getPlaybackRate();
      audio.play().catch(() => {});
    } else {
      seekAndPlay(clip.start);
    }
  }

  function selectClip(index, autoPlay) {
    state.activeClipIndex = index;
    const clip = getActiveClip();
    pendingSeek = clip.start;
    if (audio && !autoPlay && !audio.paused) {
      audio.pause();
    }
    renderActiveClip();
    if (autoPlay) {
      seekAndPlay(clip.start);
    }
  }

  // --- Event Listeners ---
  function bindEvents() {
    document.getElementById("theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      saveState();
      applyTheme();
    });

    document.getElementById("btn-play-clip").addEventListener("click", togglePlayActiveClip);

    document.getElementById("btn-prev-line").addEventListener("click", () => {
      const clip = getActiveClip();
      const lines = clip.transcript || [];
      if (!lines.length) {
        seekAndPlay(clip.start);
        return;
      }
      const now =
        pendingSeek !== null
          ? pendingSeek
          : audio && audio.readyState >= 1
            ? audio.currentTime
            : clip.start;
      let curIdx = 0;
      for (let i = 0; i < lines.length; i++) {
        if (now + 0.3 >= lines[i].start) {
          curIdx = i;
        }
      }
      let targetStart;
      if (curIdx > 0 && now - lines[curIdx].start <= 2.0) {
        targetStart = lines[curIdx - 1].start;
      } else if (now > lines[curIdx].start + 2.0) {
        targetStart = lines[curIdx].start;
      } else {
        targetStart = lines[0].start;
      }
      seekAndPlay(targetStart);
    });

    const seekEl = document.getElementById("audio-seek");
    if (seekEl) {
      seekEl.addEventListener("pointerdown", () => {
        isSeeking = true;
      });
      seekEl.addEventListener("input", () => {
        const clip = getActiveClip();
        const target = clip.start + Number(seekEl.value);
        const curEl = document.getElementById("current-time-display");
        if (curEl) curEl.textContent = formatTime(Number(seekEl.value));
        highlightActiveTranscriptLine(target);
      });
      seekEl.addEventListener("change", () => {
        isSeeking = false;
        const clip = getActiveClip();
        const target = Math.max(clip.start, Math.min(clip.end - 0.1, clip.start + Number(seekEl.value)));
        if (!audio) return;
        if (audio.readyState >= 1) {
          pendingSeek = null;
          audio.currentTime = target;
        } else {
          pendingSeek = target;
          audio.load();
        }
      });
    }

    const loopBtn = document.getElementById("btn-loop");
    loopBtn.addEventListener("click", () => {
      state.loopEnabled = !state.loopEnabled;
      loopBtn.setAttribute("aria-pressed", String(state.loopEnabled));
      loopBtn.classList.toggle("is-active", state.loopEnabled);
    });

    const speedBtn = document.getElementById("btn-speed-cycle");
    speedBtn.addEventListener("click", () => {
      state.speedIndex = (state.speedIndex + 1) % SPEED_STEPS.length;
      const rate = getPlaybackRate();
      speedBtn.textContent = rate.toFixed(rate === 1 ? 1 : 2).replace(/\.00$/, ".0") + "x";
      if (audio) {
        audio.playbackRate = rate;
      }
    });

    document.getElementById("btn-mark-done").addEventListener("click", () => {
      const clip = getActiveClip();
      if (state.completedClips.has(clip.id)) {
        state.completedClips.delete(clip.id);
      } else {
        state.completedClips.add(clip.id);
      }
      saveState();
      updateProgress();
      renderLessonSwitcher();
      renderActiveClip();
    });

    document.querySelectorAll(".seg-btn[data-sub]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.subtitleMode = btn.dataset.sub;
        document.querySelectorAll(".seg-btn[data-sub]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderTranscript();
      });
    });

    document.querySelectorAll("[data-dict-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.dictationMode = btn.dataset.dictMode;
        renderDictation();
      });
    });

    document.querySelectorAll(".transport-bar button").forEach((btn) => {
      btn.addEventListener("blur", scheduleCompactCleanup);
    });

    document.querySelectorAll("[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    document.getElementById("btn-check-dictation").addEventListener("click", checkDictation);
    document.getElementById("btn-show-hints").addEventListener("click", showDictationHints);
    document.getElementById("btn-reveal-dictation").addEventListener("click", revealDictation);
    document.getElementById("btn-reset-dictation").addEventListener("click", () => {
      initDictationForClip();
      renderDictation();
    });

    document.getElementById("btn-reset-quiz").addEventListener("click", () => {
      state.quizAnswers = {};
      renderQuiz();
    });
  }

  // --- Boot ---
  loadState();
  document.title = "EIKEN 1 Listening Lab — " + getActiveLesson().lessonNumber;
  applyTheme();
  renderLessonSwitcher();
  renderHero();
  updateProgress();
  renderActiveClip();
  renderVocab();
  renderQuiz();
  bindEvents();
  initAudioPlayer();
  syncPlayButtonUI();
})();
