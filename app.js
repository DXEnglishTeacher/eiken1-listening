(function () {
  "use strict";

  const STORAGE_KEY = "eiken1_listening_lab_v1_" + LESSON_DATA.id;

  const state = {
    activeClipIndex: 0,
    subtitleMode: "both", // "none" | "en" | "both"
    loopEnabled: true,
    playbackRate: 1,
    completedClips: new Set(),
    masteredVocab: new Set(),
    quizAnswers: {},
    theme: "light"
  };

  let player = null;
  let playerReady = false;
  let pollTimer = null;

  // --- Persistence ---
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
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
          theme: state.theme
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

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // --- Theme ---
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = document.getElementById("theme-toggle");
    btn.textContent = state.theme === "dark" ? "☀️ ライト" : "🌙 ダーク";
  }

  // --- Progress Header ---
  function updateProgress() {
    document.getElementById("progress-clips").textContent =
      state.completedClips.size + " / " + LESSON_DATA.clips.length;
    document.getElementById("progress-vocab").textContent =
      state.masteredVocab.size + " / " + LESSON_DATA.vocab.length;
  }

  // --- Render Hero ---
  function renderHero() {
    document.getElementById("lesson-number").textContent = LESSON_DATA.lessonNumber;
    document.getElementById("lesson-level").textContent = LESSON_DATA.level;
    document.getElementById("lesson-time").textContent = "目安 " + LESSON_DATA.estimatedMinutes + "分";
    document.getElementById("lesson-title").textContent = LESSON_DATA.title;
    document.getElementById("lesson-subtitle").textContent =
      LESSON_DATA.originalTitle + " — " + LESSON_DATA.speaker;
    document.getElementById("lesson-summary").textContent = LESSON_DATA.summary;
  }

  // --- Render Clip List ---
  function renderClipList() {
    const list = document.getElementById("clip-list");
    list.innerHTML = "";
    LESSON_DATA.clips.forEach((clip, idx) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      const isDone = state.completedClips.has(clip.id);
      const isActive = idx === state.activeClipIndex;
      btn.className = "clip-item" + (isActive ? " active" : "") + (isDone ? " done" : "");
      btn.innerHTML =
        '<span class="clip-num">' + (isDone ? "✓" : clip.number) + "</span>" +
        '<span class="clip-info">' +
          '<span class="clip-title">' + escapeHtml(clip.title) + "</span>" +
          '<span class="clip-sub">' + escapeHtml(clip.subtitle) + "</span>" +
        "</span>" +
        '<span class="clip-dur">' + escapeHtml(clip.durationLabel) + "</span>";
      btn.addEventListener("click", () => selectClip(idx, true));
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  // --- Render Active Clip (Tab 1 & Tab 2) ---
  function renderActiveClip() {
    const clip = getActiveClip();

    // Update direct YouTube link with timestamp
    const ytLink = document.getElementById("youtube-direct-link");
    ytLink.href =
      "https://www.youtube.com/watch?v=" + LESSON_DATA.youtubeId + "&t=" + clip.start + "s";

    document.getElementById("current-clip-range").textContent = clip.durationLabel;
    document.getElementById("active-clip-heading").textContent =
      "Clip " + clip.number + ": " + clip.title;
    document.getElementById("active-clip-eiken").textContent =
      "🎯 英検1級ポイント: " + clip.eikenPoint;

    const doneBtn = document.getElementById("btn-mark-done");
    const isDone = state.completedClips.has(clip.id);
    doneBtn.textContent = isDone ? "✓ 完了済み（解除）" : "✓ このクリップを完了にする";
    doneBtn.className = isDone ? "btn success-toggle" : "btn";

    renderTranscript();
    renderNativeNotes();
    renderDictation();
    renderClipList();
  }

  function renderTranscript() {
    const clip = getActiveClip();
    const box = document.getElementById("transcript-box");
    box.innerHTML = "";

    if (state.subtitleMode === "none") {
      box.innerHTML =
        '<div class="transcript-hidden-state">' +
        "<p><strong>🎧 字幕なし（実戦リスニングモード）</strong></p>" +
        "<p>まずはスクリプトを見ずに2回聞いてみましょう。聞き取れたら「英語のみ」や「英語＋日本語」に切り替えて答え合わせ！</p>" +
        "</div>";
      return;
    }

    clip.transcript.forEach((line) => {
      const div = document.createElement("div");
      div.className = "script-line";
      let html = '<p class="script-en">' + escapeHtml(line.en) + "</p>";
      if (state.subtitleMode === "both") {
        html += '<p class="script-ja">' + escapeHtml(line.ja) + "</p>";
      }
      div.innerHTML = html;
      box.appendChild(div);
    });
  }

  function renderNativeNotes() {
    const clip = getActiveClip();
    const grid = document.getElementById("native-notes-grid");
    grid.innerHTML = "";

    clip.nativeNotes.forEach((note) => {
      const card = document.createElement("article");
      card.className = "native-card";
      card.innerHTML =
        '<div class="native-card-top">' +
          '<span class="native-phrase">"' + escapeHtml(note.phrase) + '"</span>' +
          '<span class="native-type">' + escapeHtml(note.type) + "</span>" +
        "</div>" +
        '<div class="heard-as">👂 こう聞こえる: ' + escapeHtml(note.heardAs) + "</div>" +
        '<p class="native-desc">' + escapeHtml(note.explanation) + "</p>";
      grid.appendChild(card);
    });
  }

  // --- Dictation ---
  function renderDictation() {
    const clip = getActiveClip();
    document.getElementById("dictation-heading").textContent =
      "✍️ Clip " + clip.number + " ディクテーション: " + clip.title;
    document.getElementById("dictation-prompt").textContent = clip.dictation.prompt;

    const card = document.getElementById("dictation-card");
    card.innerHTML = "";

    let blankIdx = 0;
    clip.dictation.segments.forEach((seg) => {
      if (seg.text) {
        card.appendChild(document.createTextNode(seg.text));
      } else if (seg.blank) {
        blankIdx += 1;
        const wrap = document.createElement("span");
        wrap.className = "blank-wrap";
        const input = document.createElement("input");
        input.type = "text";
        input.className = "blank-input";
        input.placeholder = "(" + blankIdx + ")";
        input.dataset.answer = seg.blank;
        input.dataset.hint = seg.hint;
        input.setAttribute("aria-label", "空欄 " + blankIdx);
        input.autocomplete = "off";
        input.spellcheck = false;
        wrap.appendChild(input);
        card.appendChild(wrap);
      }
    });

    const hintsBox = document.getElementById("dictation-hints");
    hintsBox.hidden = true;
    hintsBox.innerHTML = "";

    const feedback = document.getElementById("dictation-feedback");
    feedback.hidden = true;
    feedback.innerHTML = "";
  }

  function checkDictation() {
    const inputs = document.querySelectorAll("#dictation-card .blank-input");
    let correct = 0;
    inputs.forEach((input) => {
      const userVal = input.value.trim().toLowerCase();
      const expected = input.dataset.answer.toLowerCase();
      input.classList.remove("correct", "wrong");
      if (userVal === expected) {
        input.classList.add("correct");
        correct += 1;
      } else {
        input.classList.add("wrong");
      }
    });

    const fb = document.getElementById("dictation-feedback");
    fb.hidden = false;
    if (correct === inputs.length) {
      fb.className = "feedback-banner success";
      fb.textContent = "🎉 全問正解！ネイティブのスピードで正確にキャッチできています！";
    } else {
      fb.className = "feedback-banner info";
      fb.textContent =
        correct + " / " + inputs.length + " 問正解。0.75x 再生やヒントも使って再チャレンジしてみましょう！";
    }
  }

  function showDictationHints() {
    const inputs = document.querySelectorAll("#dictation-card .blank-input");
    const hintsBox = document.getElementById("dictation-hints");
    let html = '<ul class="hint-list">';
    inputs.forEach((input, idx) => {
      const ans = input.dataset.answer;
      html +=
        "<li><strong>(" + (idx + 1) + ")</strong> " +
        escapeHtml(input.dataset.hint) +
        " — 最初の文字: <code>" + escapeHtml(ans[0]) + "...</code></li>";
    });
    html += "</ul>";
    hintsBox.innerHTML = html;
    hintsBox.hidden = false;
  }

  function revealDictation() {
    const inputs = document.querySelectorAll("#dictation-card .blank-input");
    inputs.forEach((input) => {
      input.value = input.dataset.answer;
      input.classList.remove("wrong");
      input.classList.add("correct");
    });
    const fb = document.getElementById("dictation-feedback");
    fb.hidden = false;
    fb.className = "feedback-banner info";
    fb.textContent = "解答を表示しました。音声をもう一度聞きながら音とスペルを一致させましょう！";
  }

  // --- Vocabulary ---
  function renderVocab() {
    const grid = document.getElementById("vocab-grid");
    grid.innerHTML = "";

    LESSON_DATA.vocab.forEach((item) => {
      const mastered = state.masteredVocab.has(item.word);
      const card = document.createElement("article");
      card.className = "vocab-card" + (mastered ? " mastered" : "");
      card.innerHTML =
        '<div class="vocab-top">' +
          "<div>" +
            '<span class="vocab-word">' + escapeHtml(item.word) + "</span>" +
            '<span class="vocab-phonetic">' + escapeHtml(item.phonetic) + " (" + escapeHtml(item.pos) + ")</span>" +
          "</div>" +
          '<span class="chip amber">' + escapeHtml(item.eikenTag) + "</span>" +
        "</div>" +
        '<div class="vocab-meaning">' + escapeHtml(item.meaning) + "</div>" +
        '<p class="vocab-note">' + escapeHtml(item.note) + "</p>" +
        '<p class="vocab-example">"' + escapeHtml(item.example) + '"</p>' +
        '<div style="margin-top: auto; padding-top: 6px;">' +
          '<button type="button" class="btn ' + (mastered ? "success-toggle" : "") + '" data-word="' + escapeHtml(item.word) + '">' +
            (mastered ? "✓ 覚えた！" : "覚えたリストに入れる") +
          "</button>" +
        "</div>";

      card.querySelector("button").addEventListener("click", () => {
        if (state.masteredVocab.has(item.word)) {
          state.masteredVocab.delete(item.word);
        } else {
          state.masteredVocab.add(item.word);
        }
        saveState();
        updateProgress();
        renderVocab();
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
        const prefix = chosen === q.correctIndex ? "⭕ 正解！ " : "❌ 不正解 — ";
        expHtml =
          '<div class="quiz-explanation"><strong>' + prefix + "</strong>" +
          escapeHtml(q.explanation) + "</div>";
      }

      card.innerHTML =
        '<div class="quiz-part">Q' + (qIdx + 1) + " ・ " + escapeHtml(q.part) + "</div>" +
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
      "スコア: " + score + " / " + LESSON_DATA.quiz.length;
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
      cc_load_policy: 0
    };
    if (window.location.protocol.startsWith("http")) {
      playerVars.origin = window.location.origin;
    }

    player = new YT.Player("yt-player", {
      videoId: LESSON_DATA.youtubeId,
      playerVars: playerVars,
      events: {
        onReady: () => {
          playerReady = true;
          document.getElementById("player-status").textContent =
            "✅ プレイヤー準備完了（クリップを選んで再生できます）";
          startTimePolling();
        },
        onError: () => {
          document.getElementById("player-status").textContent =
            "⚠️ 埋め込み再生できない場合は右の「YouTubeで直接開く」をご利用ください";
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
    if (!playerReady || !player) return;
    player.setPlaybackRate(state.playbackRate);
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
    // Theme toggle
    document.getElementById("theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      saveState();
      applyTheme();
    });

    // Player controls
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
      loopBtn.textContent = state.loopEnabled ? "🔁 区間リピート ON" : "🔁 区間リピート OFF";
      loopBtn.classList.toggle("active-toggle", state.loopEnabled);
    });

    document.querySelectorAll(".speed-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const rate = Number(btn.dataset.rate);
        state.playbackRate = rate;
        document.querySelectorAll(".speed-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (playerReady && player) {
          player.setPlaybackRate(rate);
        }
      });
    });

    // Mark clip done
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

    // Subtitle mode
    document.querySelectorAll(".seg-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.subtitleMode = btn.dataset.sub;
        document.querySelectorAll(".seg-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderTranscript();
      });
    });

    // Tabs
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.setAttribute("aria-selected", "false"));
        btn.setAttribute("aria-selected", "true");
        const targetId = btn.getAttribute("aria-controls");
        document.querySelectorAll(".tab-panel").forEach((panel) => {
          panel.hidden = panel.id !== targetId;
        });
      });
    });

    // Dictation buttons
    document.getElementById("btn-check-dictation").addEventListener("click", checkDictation);
    document.getElementById("btn-show-hints").addEventListener("click", showDictationHints);
    document.getElementById("btn-reveal-dictation").addEventListener("click", revealDictation);
    document.getElementById("btn-reset-dictation").addEventListener("click", renderDictation);

    // Quiz reset
    document.getElementById("btn-reset-quiz").addEventListener("click", () => {
      state.quizAnswers = {};
      renderQuiz();
    });
  }

  // --- Boot ---
  loadState();
  applyTheme();
  renderHero();
  updateProgress();
  renderActiveClip();
  renderVocab();
  renderQuiz();
  bindEvents();
  initYouTubeAPI();
})();
