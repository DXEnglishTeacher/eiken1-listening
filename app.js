(function () {
  "use strict";

  const STORAGE_KEY = "eiken1_listening_lab_v2_" + LESSON_DATA.id;
  const SPEED_STEPS = [1, 1.25, 0.75];

  const state = {
    activeClipIndex: 0,
    activeTab: "script",
    subtitleMode: "both", // "none" | "en" | "both"
    dictationMode: "tap", // "tap" | "type"
    dictationValues: [],
    activeBlankIndex: 0,
    dictationChoices: [],
    loopEnabled: true,
    pipMode: false,
    speedIndex: 0,
    completedClips: new Set(),
    masteredVocab: new Set(),
    quizAnswers: {},
    theme: "light"
  };

  let player = null;
  let playerReady = false;
  let pendingPlay = false;
  let pollTimer = null;
  let blurTimer = null;

  // --- Persistence ---
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          state.theme = "dark";
        }
        return;
      }
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.completedClips)) {
        state.completedClips = new Set(saved.completedClips);
      }
      if (Array.isArray(saved.masteredVocab)) {
        state.masteredVocab = new Set(saved.masteredVocab);
      }
      if (saved.theme === "dark" || saved.theme === "light") {
        state.theme = saved.theme;
      }
      if (typeof saved.pipMode === "boolean") {
        state.pipMode = saved.pipMode;
      }
    } catch (_) {
      // Ignore storage errors
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completedClips: Array.from(state.completedClips),
          masteredVocab: Array.from(state.masteredVocab),
          theme: state.theme,
          pipMode: state.pipMode
        })
      );
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
    return LESSON_DATA.clips[state.activeClipIndex];
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

  // --- PiP Mode ---
  function applyPipMode() {
    const btn = document.getElementById("btn-pip-mode");
    const frame = document.getElementById("player-frame");
    const banner = document.getElementById("pip-banner");

    btn.setAttribute("aria-pressed", String(state.pipMode));
    frame.hidden = state.pipMode;
    banner.hidden = !state.pipMode;

    if (state.pipMode && playerReady && player && typeof player.pauseVideo === "function") {
      player.pauseVideo();
    }
  }

  // --- Progress Header ---
  function updateProgress() {
    document.getElementById("progress-clips").textContent =
      state.completedClips.size + "/" + LESSON_DATA.clips.length;
    document.getElementById("progress-vocab").textContent =
      state.masteredVocab.size + "/" + LESSON_DATA.vocab.length;
  }

  // --- Render Lesson Info ---
  function renderHero() {
    document.getElementById("lesson-number").textContent = LESSON_DATA.lessonNumber;
    document.getElementById("lesson-level").textContent = LESSON_DATA.level;
    document.getElementById("lesson-time").textContent = LESSON_DATA.estimatedMinutes + " min";
    document.getElementById("lesson-title").textContent = LESSON_DATA.title;
    document.getElementById("lesson-subtitle").textContent =
      LESSON_DATA.originalTitle + " — " + LESSON_DATA.speaker;
    document.getElementById("lesson-summary").textContent = LESSON_DATA.summary;
  }

  // --- Render Horizontal Clip Strip ---
  function renderClipList() {
    const strip = document.getElementById("clip-list");
    strip.innerHTML = "";
    LESSON_DATA.clips.forEach((clip, idx) => {
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
      btn.addEventListener("click", () => selectClip(idx, !state.pipMode));
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
    const ytUrl =
      "https://www.youtube.com/watch?v=" + LESSON_DATA.youtubeId + "&t=" + clip.start + "s";

    document.getElementById("youtube-direct-link").href = ytUrl;
    document.getElementById("pip-open-yt").href = ytUrl;

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

    clip.transcript.forEach((line) => {
      const card = document.createElement("div");
      card.className = "script-card";
      let html = '<p class="script-en">' + escapeHtml(line.en) + "</p>";
      if (state.subtitleMode === "both") {
        html += '<p class="script-ja">' + escapeHtml(line.ja) + "</p>";
      }
      card.innerHTML = html;
      box.appendChild(card);
    });
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

    LESSON_DATA.vocab.forEach((item) => {
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

    let score = 0;
    LESSON_DATA.quiz.forEach((q, qIdx) => {
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
      score + " / " + LESSON_DATA.quiz.length;
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

  // --- YouTube IFrame Player ---
  function initYouTubeAPI() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }

  window.onYouTubeIframeAPIReady = function () {
    const playerVars = {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      cc_load_policy: 0
    };
    if (window.location.protocol.startsWith("http")) {
      playerVars.origin = window.location.origin;
    }

    player = new YT.Player("yt-player", {
      width: "100%",
      height: "100%",
      videoId: LESSON_DATA.youtubeId,
      playerVars: playerVars,
      events: {
        onReady: () => {
          playerReady = true;
          startTimePolling();
          if (pendingPlay) {
            pendingPlay = false;
            playActiveClip();
          }
        }
      }
    });
  };

  function startTimePolling() {
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = setInterval(() => {
      if (!playerReady || !player || typeof player.getCurrentTime !== "function") return;
      const now = player.getCurrentTime();
      document.getElementById("current-time-display").textContent = formatTime(now);

      const clip = getActiveClip();
      if (
        state.loopEnabled &&
        player.getPlayerState() === YT.PlayerState.PLAYING &&
        now >= clip.end
      ) {
        player.seekTo(clip.start, true);
      }
    }, 300);
  }

  function playActiveClip() {
    const clip = getActiveClip();
    if (!playerReady || !player) {
      pendingPlay = true;
      return;
    }
    player.setPlaybackRate(getPlaybackRate());
    player.seekTo(clip.start, true);
    player.playVideo();
  }

  function selectClip(index, autoPlay) {
    state.activeClipIndex = index;
    renderActiveClip();
    if (autoPlay) {
      playActiveClip();
    }
  }

  // --- Event Listeners ---
  function bindEvents() {
    document.getElementById("theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      saveState();
      applyTheme();
    });

    document.getElementById("btn-pip-mode").addEventListener("click", () => {
      state.pipMode = !state.pipMode;
      saveState();
      applyPipMode();
    });

    document.getElementById("btn-play-clip").addEventListener("click", playActiveClip);

    document.getElementById("btn-back-5").addEventListener("click", () => {
      if (!playerReady || !player) return;
      const clip = getActiveClip();
      const target = Math.max(clip.start, player.getCurrentTime() - 5);
      player.seekTo(target, true);
      player.playVideo();
    });

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
      if (playerReady && player) {
        player.setPlaybackRate(rate);
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
  applyTheme();
  applyPipMode();
  renderHero();
  updateProgress();
  renderActiveClip();
  renderVocab();
  renderQuiz();
  bindEvents();
  initYouTubeAPI();
})();
