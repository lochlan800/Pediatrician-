/* ENT Pathway — behaviour. Vanilla JS, no build step. */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem("pp:" + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem("pp:" + key, JSON.stringify(value)); } catch (e) { /* private mode */ }
    },
    clear() {
      try {
        Object.keys(localStorage)
          .filter((k) => k.indexOf("pp:") === 0)
          .forEach((k) => localStorage.removeItem(k));
      } catch (e) { /* ignore */ }
    }
  };

  /* ---------------- theme ---------------- */
  const savedTheme = store.get("theme", null);
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  $("#themeBtn").addEventListener("click", () => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = document.documentElement.getAttribute("data-theme") || (dark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  /* ---------------- name ---------------- */
  const nameInput = $("#nameInput");
  const heroName = $("#heroName");
  function setName(value) {
    const clean = value.trim();
    heroName.textContent = clean || "there";
  }
  nameInput.value = store.get("name", "");
  setName(nameInput.value);
  nameInput.addEventListener("input", () => {
    setName(nameInput.value);
    store.set("name", nameInput.value);
  });

  /* ---------------- rotating fact ---------------- */
  let factIndex = Math.floor(Math.random() * FACTS.length);
  function showFact() {
    $("#factText").textContent = FACTS[factIndex % FACTS.length];
    factIndex++;
  }
  showFact();
  $("#factBtn").addEventListener("click", showFact);

  /* ---------------- pathway timeline ---------------- */
  const timeline = $("#timeline");

  function renderPath(country) {
    const data = PATHWAYS[country];
    $("#pathNote").innerHTML = data.note;
    timeline.innerHTML = "";

    data.steps.forEach((step, i) => {
      const li = document.createElement("li");
      li.className = "tl-item";

      const head = document.createElement("button");
      head.className = "tl-head";
      head.setAttribute("aria-expanded", "false");
      head.innerHTML =
        '<span class="tl-age">' + step.age + "</span>" +
        '<span class="tl-title">' + (i + 1) + ". " + step.title + "</span>" +
        '<span class="tl-len">' + step.length + "</span>" +
        '<span class="tl-what">' + step.what + "</span>";

      const body = document.createElement("div");
      body.className = "tl-body";
      body.innerHTML = "<ul>" + step.detail.map((d) => "<li>" + d + "</li>").join("") + "</ul>";

      head.addEventListener("click", () => {
        const open = body.classList.toggle("is-open");
        head.setAttribute("aria-expanded", String(open));
      });

      li.appendChild(head);
      li.appendChild(body);
      timeline.appendChild(li);
    });

    const goal = document.createElement("li");
    goal.className = "tl-item";
    goal.innerHTML = '<div class="tl-head"><span class="tl-age">The goal</span>' +
      '<span class="tl-title">🎉 ' + data.endpoint + "</span></div>";
    timeline.appendChild(goal);
  }

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-on"));
      tab.classList.add("is-on");
      const country = tab.dataset.country;
      store.set("country", country);
      renderPath(country);
    });
  });

  const startCountry = PATHWAYS[store.get("country", "uk")] ? store.get("country", "uk") : "uk";
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("is-on", t.dataset.country === startCountry);
  });
  renderPath(startCountry);

  /* ---------------- checklists + progress ring ---------------- */
  const RING_LENGTH = 2 * Math.PI * 52;
  const ringFg = $("#ringFg");
  ringFg.style.strokeDasharray = RING_LENGTH;
  let done = store.get("done", {});
  let totalItems = 0;

  function updateRing() {
    const count = Object.keys(done).filter((k) => done[k]).length;
    const pct = totalItems ? Math.round((count / totalItems) * 100) : 0;
    ringFg.style.strokeDashoffset = RING_LENGTH * (1 - pct / 100);
    $("#ringPct").textContent = pct + "%";
    const text = $("#progressText");
    if (count === 0) {
      text.textContent = "Tick things off the list below and this fills up. It saves on this device.";
    } else if (pct === 100) {
      text.textContent = "Every single item done. That is genuinely impressive — go find harder things to do.";
    } else {
      text.textContent = count + " of " + totalItems + " done. Small steps, repeated, are how this whole career works.";
    }
  }

  const checklistsEl = $("#checklists");
  CHECKLISTS.forEach((group, gi) => {
    const box = document.createElement("div");
    box.className = "clist";
    box.innerHTML = "<h3><span>" + group.icon + "</span>" + group.band + "</h3>";

    group.items.forEach((item, ii) => {
      const key = gi + "-" + ii;
      totalItems++;
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!done[key];
      input.addEventListener("change", () => {
        done[key] = input.checked;
        store.set("done", done);
        updateRing();
      });
      const span = document.createElement("span");
      span.textContent = item;
      label.appendChild(input);
      label.appendChild(span);
      box.appendChild(label);
    });

    checklistsEl.appendChild(box);
  });
  updateRing();

  $("#resetBtn").addEventListener("click", () => {
    if (!window.confirm("Clear your ticks, name and notes on this device?")) return;
    store.clear();
    window.location.reload();
  });

  /* ---------------- quiz ---------------- */
  const quizCard = $("#quizCard");
  let qIndex = 0;
  let score = 0;

  function renderQuestion() {
    if (qIndex >= QUIZ.length) return renderScore();
    const item = QUIZ[qIndex];

    quizCard.innerHTML =
      '<p class="q-meta">Question ' + (qIndex + 1) + " of " + QUIZ.length + " · score " + score + "</p>" +
      '<p class="q-text">' + item.q + "</p>" +
      '<div class="q-opts"></div>';

    const opts = quizCard.querySelector(".q-opts");
    item.a.forEach((answer, ai) => {
      const btn = document.createElement("button");
      btn.className = "opt";
      btn.textContent = answer;
      btn.addEventListener("click", () => answerQuestion(ai));
      opts.appendChild(btn);
    });
  }

  function answerQuestion(chosen) {
    const item = QUIZ[qIndex];
    const buttons = quizCard.querySelectorAll(".opt");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === item.correct) b.classList.add("right");
      else if (i === chosen) b.classList.add("wrong");
    });
    if (chosen === item.correct) score++;

    const why = document.createElement("p");
    why.className = "q-why";
    why.innerHTML = (chosen === item.correct ? "<b>Correct. </b>" : "<b>Not quite. </b>") + item.why;
    quizCard.appendChild(why);

    const foot = document.createElement("div");
    foot.className = "q-foot";
    const next = document.createElement("button");
    next.className = "btn small";
    next.textContent = qIndex === QUIZ.length - 1 ? "See my score →" : "Next question →";
    next.addEventListener("click", () => { qIndex++; renderQuestion(); });
    foot.appendChild(document.createElement("span"));
    foot.appendChild(next);
    quizCard.appendChild(foot);
    next.focus();
  }

  function renderScore() {
    const best = Math.max(score, store.get("bestScore", 0));
    store.set("bestScore", best);

    let verdict;
    const ratio = score / QUIZ.length;
    if (ratio === 1) verdict = "Full marks. You already think like someone who reads around the subject.";
    else if (ratio >= 0.7) verdict = "Strong. The ones you missed are the ones worth writing down.";
    else if (ratio >= 0.4) verdict = "A solid start — and nobody is born knowing any of this.";
    else verdict = "Perfect. Now you know exactly what to go and learn first.";

    quizCard.innerHTML =
      '<p class="q-meta">Your score</p>' +
      '<p class="score-big">' + score + " / " + QUIZ.length + "</p>" +
      "<p>" + verdict + "</p>" +
      '<p class="muted tiny">Best score on this device: ' + best + " / " + QUIZ.length + "</p>" +
      '<div class="q-foot"><span></span><button class="btn small" id="againBtn">Try again ↻</button></div>';

    $("#againBtn").addEventListener("click", () => {
      qIndex = 0; score = 0; renderQuestion();
    });
  }
  renderQuestion();

  /* ---------------- flashcards ---------------- */
  const flashcard = $("#flashcard");
  const frontFace = flashcard.querySelector(".fc-front p");
  const backFace = flashcard.querySelector(".fc-back p");
  const catLabel = flashcard.querySelector(".fc-cat");
  const catFilter = $("#catFilter");

  let deck = FLASHCARDS.slice();
  let cardIndex = 0;

  const categories = ["All"].concat(Array.from(new Set(FLASHCARDS.map((c) => c.cat))));
  categories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat === "All" ? "All topics" : cat;
    catFilter.appendChild(opt);
  });

  function renderCard() {
    if (!deck.length) return;
    const card = deck[cardIndex];
    flashcard.classList.remove("flipped");
    catLabel.textContent = card.cat;
    frontFace.innerHTML = card.front;
    backFace.innerHTML = card.back;
    $("#cardCount").textContent = cardIndex + 1 + " of " + deck.length;
  }

  function move(step) {
    cardIndex = (cardIndex + step + deck.length) % deck.length;
    renderCard();
  }

  flashcard.addEventListener("click", () => flashcard.classList.toggle("flipped"));
  flashcard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flashcard.classList.toggle("flipped"); }
    if (e.key === "ArrowRight") move(1);
    if (e.key === "ArrowLeft") move(-1);
  });
  $("#nextCard").addEventListener("click", () => move(1));
  $("#prevCard").addEventListener("click", () => move(-1));

  $("#shuffleBtn").addEventListener("click", () => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    cardIndex = 0;
    renderCard();
  });

  catFilter.addEventListener("change", () => {
    const cat = catFilter.value;
    deck = cat === "All" ? FLASHCARDS.slice() : FLASHCARDS.filter((c) => c.cat === cat);
    cardIndex = 0;
    renderCard();
  });
  renderCard();

  /* ---------------- roles + shelf ---------------- */
  $("#roles").innerHTML = ROLES.map((r) =>
    '<div class="role"><b>' + r.name + "</b><span>" + r.blurb + "</span><em>" + r.years + "</em></div>"
  ).join("");

  $("#shelfGrid").innerHTML = SHELF.map((b) =>
    '<div class="book"><b>' + b.title + "</b><i>" + b.by + "</i><span>" + b.note + "</span></div>"
  ).join("");

  /* ---------------- notes ---------------- */
  const notes = $("#notes");
  const noteStatus = $("#noteStatus");
  notes.value = store.get("notes", "");
  let saveTimer = null;
  notes.addEventListener("input", () => {
    clearTimeout(saveTimer);
    noteStatus.textContent = "typing…";
    saveTimer = setTimeout(() => {
      store.set("notes", notes.value);
      noteStatus.textContent = "saved on this device";
    }, 500);
  });

  /* ---------------- the daily lesson ---------------- */
  const DEFAULT_BIRTHDAY = "2015-06-16";
  const MONTH_NAMES = CURRICULUM.map(function (u) { return u.name; });
  const TOTAL_LESSONS = CURRICULUM.reduce(function (n, u) { return n + u.lessons.length; }, 0);

  const ageSel = $("#ageSel");
  const monthSel = $("#monthSel");
  const daySel = $("#daySel");
  const bdayInput = $("#bdayInput");
  const lessonOut = $("#lessonOut");

  let learned = store.get("learned", {});

  function levelFor(age) {
    if (age <= 10) return "t1";
    if (age <= 13) return "t2";
    return "t3";
  }

  function levelInfo(key) {
    return LEVELS.filter(function (l) { return l.key === key; })[0];
  }

  function daysIn(month) {
    // 2024 is a leap year, so February offers all 29 days.
    return new Date(2024, month, 0).getDate();
  }

  function ageFromBirthday(value) {
    if (!value) return null;
    const parts = value.split("-");
    if (parts.length !== 3) return null;
    const birth = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    if (isNaN(birth.getTime())) return null;
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const beforeBirthday =
      now.getMonth() < birth.getMonth() ||
      (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate());
    if (beforeBirthday) age--;
    return age;
  }

  // --- build the three dropdowns ---
  for (let a = 7; a <= 18; a++) {
    const o = document.createElement("option");
    o.value = a;
    o.textContent = a + " years old";
    ageSel.appendChild(o);
  }
  MONTH_NAMES.forEach(function (name, i) {
    const o = document.createElement("option");
    o.value = i + 1;
    o.textContent = name;
    monthSel.appendChild(o);
  });

  function fillDays(month, keep) {
    const total = daysIn(month);
    daySel.innerHTML = "";
    for (let d = 1; d <= total; d++) {
      const o = document.createElement("option");
      o.value = d;
      o.textContent = d;
      daySel.appendChild(o);
    }
    daySel.value = Math.min(keep || 1, total);
  }

  // --- starting state ---
  const today = new Date();
  bdayInput.value = store.get("birthday", DEFAULT_BIRTHDAY);

  const bdayAge = ageFromBirthday(bdayInput.value);
  const startAge = store.get("age", null) || (bdayAge !== null ? bdayAge : 11);
  ageSel.value = Math.min(18, Math.max(7, startAge));
  monthSel.value = store.get("month", null) || today.getMonth() + 1;
  fillDays(Number(monthSel.value), store.get("day", null) || today.getDate());

  function showBirthdayNote() {
    const age = ageFromBirthday(bdayInput.value);
    $("#bdayNote").textContent =
      age === null ? "" : "That makes you " + age + ", so the age above is set to " + age + ".";
  }

  function isToday(month, day) {
    const now = new Date();
    return now.getMonth() + 1 === month && now.getDate() === day;
  }

  function isBirthday(month, day) {
    const v = bdayInput.value;
    if (!v) return false;
    const parts = v.split("-");
    return Number(parts[1]) === month && Number(parts[2]) === day;
  }

  function renderLesson() {
    const age = Number(ageSel.value);
    const month = Number(monthSel.value);
    const day = Number(daySel.value);

    store.set("age", age);
    store.set("month", month);
    store.set("day", day);

    const unit = CURRICULUM[month - 1];
    const index = (day - 1) % unit.lessons.length;
    const lesson = unit.lessons[index];
    const levelKey = levelFor(age);
    const level = levelInfo(levelKey);
    const step = lesson[levelKey];
    const id = month + "-" + index;
    const isLearned = !!learned[id];

    const chips =
      '<span class="chip level">' + level.name + " level · ages " + level.ages + "</span>" +
      '<span class="chip">Lesson ' + (index + 1) + " of " + unit.lessons.length + "</span>" +
      (isToday(month, day) ? '<span class="chip today">Today</span>' : "") +
      (isBirthday(month, day) ? '<span class="chip cake">🎂 Happy birthday</span>' : "");

    const words = (lesson.words || []).map(function (w) {
      return "<li><b>" + w.w + "</b> — " + w.m + "</li>";
    }).join("");

    lessonOut.innerHTML =
      '<article class="lesson-card">' +
        '<div class="lesson-top">' +
          '<p class="lesson-unit">Unit ' + unit.m + " of 12 · " + unit.name + " · " + unit.topic + "</p>" +
          "<h3>" + lesson.title + "</h3>" +
          '<div class="chips">' + chips + "</div>" +
        "</div>" +
        '<div class="lesson-body">' +
          "<h4>What this is</h4>" +
          "<p>" + lesson.what + "</p>" +
          "<h4>Worth remembering</h4>" +
          "<ul>" + lesson.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" +
          (words ? '<h4>New words</h4><ul class="wordlist">' + words + "</ul>" : "") +
          "<h4>Going deeper</h4>" +
          "<p>" + step.d + "</p>" +
          "<h4>Try this today</h4>" +
          '<p class="do-box">' + step.task + "</p>" +
          "<h4>Check yourself</h4>" +
          '<div class="check-box">' +
            "<p>" + step.q + "</p>" +
            '<button class="linkish" id="revealBtn">show the answer</button>' +
            '<p class="answer" id="answerText">' + step.a + "</p>" +
          "</div>" +
          '<div class="lesson-foot">' +
            '<button class="learn-btn' + (isLearned ? " is-done" : "") + '" id="learnBtn">' +
              (isLearned ? "✓ Learned" : "Mark as learned") +
            "</button>" +
            '<span class="muted tiny">Written for ' + level.ages + ". " + level.blurb + "</span>" +
          "</div>" +
        "</div>" +
      "</article>";

    $("#revealBtn").addEventListener("click", function () {
      $("#answerText").classList.add("show");
      this.remove();
    });

    $("#learnBtn").addEventListener("click", function () {
      learned[id] = !learned[id];
      store.set("learned", learned);
      renderLesson();
    });

    const count = Object.keys(learned).filter(function (k) { return learned[k]; }).length;
    $("#learnedCount").textContent = count + " of " + TOTAL_LESSONS + " lessons learned";
  }

  function shiftDay(step) {
    let month = Number(monthSel.value);
    let day = Number(daySel.value) + step;
    if (day < 1) {
      month = month === 1 ? 12 : month - 1;
      day = daysIn(month);
    } else if (day > daysIn(month)) {
      month = month === 12 ? 1 : month + 1;
      day = 1;
    }
    monthSel.value = month;
    fillDays(month, day);
    renderLesson();
  }

  ageSel.addEventListener("change", renderLesson);
  monthSel.addEventListener("change", function () {
    fillDays(Number(monthSel.value), Number(daySel.value));
    renderLesson();
  });
  daySel.addEventListener("change", renderLesson);
  $("#prevDay").addEventListener("click", function () { shiftDay(-1); });
  $("#nextDay").addEventListener("click", function () { shiftDay(1); });

  $("#todayBtn").addEventListener("click", function () {
    const now = new Date();
    monthSel.value = now.getMonth() + 1;
    fillDays(now.getMonth() + 1, now.getDate());
    renderLesson();
  });

  bdayInput.addEventListener("change", function () {
    store.set("birthday", bdayInput.value);
    const age = ageFromBirthday(bdayInput.value);
    if (age !== null && age >= 7 && age <= 18) ageSel.value = age;
    showBirthdayNote();
    renderLesson();
  });

  showBirthdayNote();
  renderLesson();

})();
