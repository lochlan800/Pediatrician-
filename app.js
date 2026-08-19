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

  // The birthday wins: recomputed every load, so she moves up a level on her own.
  const bdayAge = ageFromBirthday(bdayInput.value);
  const startAge = bdayAge !== null ? bdayAge : (store.get("age", null) || 11);
  ageSel.value = Math.min(18, Math.max(7, startAge));
  monthSel.value = store.get("month", null) || today.getMonth() + 1;
  fillDays(Number(monthSel.value), store.get("day", null) || today.getDate());

  function showBirthdayNote() {
    const age = ageFromBirthday(bdayInput.value);
    if (age === null) { $("#bdayNote").textContent = ""; return; }

    const level = levelInfo(levelFor(age));
    let text = "That makes you " + age + ", so you're getting the " + level.name + " version.";

    const next = age <= 10 ? 11 : (age <= 13 ? 14 : null);
    if (next) {
      const nextLevel = levelInfo(levelFor(next));
      text += " On your " + next + "th birthday it moves up to " + nextLevel.name + " on its own.";
    }
    $("#bdayNote").textContent = text;
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
          (TESTS[id] ? "<h4>A way to remember it</h4>" +
            '<p class="hook-box">' + TESTS[id].hook + "</p>" : "") +
          "<h4>Check yourself</h4>" +
          '<div class="check-box">' +
            "<p>" + step.q + "</p>" +
            '<button class="linkish" id="revealBtn">show the answer</button>' +
            '<p class="answer" id="answerText">' + step.a + "</p>" +
          "</div>" +
          "<h4>The test</h4>" +
          '<div class="test-box" id="testBox"></div>' +
          '<div class="lesson-foot">' +
            '<span class="muted tiny">Written for ' + level.ages + ". " + level.blurb + "</span>" +
          "</div>" +
        "</div>" +
      "</article>";

    $("#revealBtn").addEventListener("click", function () {
      $("#answerText").classList.add("show");
      this.remove();
    });

    renderTestBox(id, lesson, step);

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

  ageSel.addEventListener("change", function () {
    renderLesson();
    renderExperience();
  });
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
    renderExperience();
  });

  showBirthdayNote();


  /* ---------------- real experience, by age ---------------- */
  const expAge = $("#expAge");
  let doing = store.get("doing", {});

  for (let a = 7; a <= 18; a++) {
    const o = document.createElement("option");
    o.value = a;
    o.textContent = a;
    expAge.appendChild(o);
  }

  function expCard(item, open) {
    const card = document.createElement("article");
    card.className = "exp-card" + (open ? "" : " locked");

    const ageChip = open
      ? '<span class="chip age now">open now</span>'
      : '<span class="chip age">from ' + item.from + "</span>";

    card.innerHTML =
      '<div class="exp-head"><span class="chip cat">' + item.cat + "</span>" + ageChip + "</div>" +
      "<h4>" + item.name + "</h4>" +
      "<p>" + item.what + "</p>" +
      '<p class="exp-how"><b>How to start:</b> ' + item.how + "</p>" +
      '<p class="exp-why"><b>Why it counts:</b> ' + item.why + "</p>" +
      (item.note ? '<p class="exp-note">' + item.note + "</p>" : "");

    const btn = document.createElement("button");
    btn.className = "exp-tick" + (doing[item.name] ? " on" : "");
    btn.textContent = doing[item.name] ? "✓ I'm doing this" : "I'm doing this";
    btn.addEventListener("click", function () {
      doing[item.name] = !doing[item.name];
      store.set("doing", doing);
      renderExperience();
    });
    card.appendChild(btn);

    return card;
  }

  function renderExperience() {
    const age = Number(ageSel.value);
    expAge.value = age;

    const open = EXPERIENCE.filter(function (e) { return e.from <= age; });
    const later = EXPERIENCE.filter(function (e) { return e.from > age; })
      .sort(function (a, b) { return a.from - b.from; });

    const nowBox = $("#expNow");
    const laterBox = $("#expLater");
    nowBox.innerHTML = "";
    laterBox.innerHTML = "";
    open.forEach(function (item) { nowBox.appendChild(expCard(item, true)); });
    later.forEach(function (item) { laterBox.appendChild(expCard(item, false)); });

    $("#expLaterHead").style.display = later.length ? "" : "none";
    $("#expNowHead").style.display = open.length ? "" : "none";

    // "6 more unlock at 14, and 4 at 16"
    const gates = {};
    later.forEach(function (e) { gates[e.from] = (gates[e.from] || 0) + 1; });
    const gateText = Object.keys(gates)
      .sort(function (a, b) { return a - b; })
      .map(function (g) { return gates[g] + " more at " + g; })
      .join(", ");

    const started = Object.keys(doing).filter(function (k) { return doing[k]; }).length;

    $("#expSummary").innerHTML =
      "At " + age + ", <b>" + open.length + " of these " + EXPERIENCE.length +
      "</b> are open to you right now." +
      (gateText ? " Then " + gateText + "." : "") +
      (started ? " You've started " + started + "." : "");

    $("#expNote").textContent = EXPERIENCE_NOTE;
  }

  expAge.addEventListener("change", function () {
    ageSel.value = expAge.value;
    renderLesson();
    renderExperience();
  });

  renderExperience();


  /* ---------------- the test, and spaced repetition ----------------
     Every lesson you test produces review cards. Each card comes back
     at a growing gap: 1 day, 3 days, ~8, ~20, ~50, and so on. Getting
     one wrong drops it back to the start.
  ------------------------------------------------------------------ */

  let srs = store.get("srs", {});

  function dayStr(d) {
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }
  function todayStr() { return dayStr(new Date()); }
  function inDays(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return dayStr(d);
  }
  function daysBetween(from, to) {
    return Math.round((new Date(to) - new Date(from)) / 86400000);
  }

  function lessonCardIds(id, lesson) {
    const ids = [];
    if (TESTS[id]) ids.push(id + ":mcq0", id + ":mcq1");
    ids.push(id + ":check");
    (lesson.words || []).forEach(function (w, i) { ids.push(id + ":word" + i); });
    return ids;
  }

  // Turn a card id back into something answerable.
  function getCard(cid) {
    const parts = cid.split(":");
    const bits = parts[0].split("-");
    const unit = CURRICULUM[Number(bits[0]) - 1];
    if (!unit) return null;
    const lesson = unit.lessons[Number(bits[1])];
    if (!lesson) return null;

    const where = unit.name + " · " + lesson.title;
    const type = parts[1];

    if (type === "mcq0" || type === "mcq1") {
      const t = TESTS[parts[0]];
      if (!t) return null;
      const q = t.qs[type === "mcq0" ? 0 : 1];
      return { kind: "mcq", q: q.q, options: q.a, correct: q.correct, where: where };
    }
    if (type === "check") {
      const step = lesson[levelFor(Number(ageSel.value))];
      return { kind: "recall", q: step.q, answer: step.a, where: where };
    }
    if (type.indexOf("word") === 0) {
      const w = (lesson.words || [])[Number(type.slice(4))];
      if (!w) return null;
      return { kind: "recall", q: "What does “" + w.w + "” mean?", answer: w.m, where: where };
    }
    return null;
  }

  function schedule(cid, grade) {
    const card = srs[cid] || { int: 0, ease: 2.5, lapses: 0 };
    if (grade === 0) {
      card.int = 1;
      card.ease = Math.max(1.3, card.ease - 0.2);
      card.lapses = (card.lapses || 0) + 1;
    } else if (grade === 1) {
      card.int = Math.max(1, Math.round((card.int || 1) * 1.2));
      card.ease = Math.max(1.3, card.ease - 0.05);
    } else if (grade === 2) {
      card.int = card.int ? Math.round(card.int * card.ease) : 1;
    } else {
      card.int = card.int ? Math.round(card.int * card.ease * 1.3) : 3;
      card.ease = card.ease + 0.1;
    }
    card.int = Math.min(card.int, 365);
    card.due = inDays(card.int);
    srs[cid] = card;
    store.set("srs", srs);
  }

  function liveCards() {
    return Object.keys(srs).filter(function (c) { return getCard(c); });
  }
  function dueCards() {
    const today = todayStr();
    return liveCards().filter(function (c) { return srs[c].due <= today; });
  }

  /* ---- the end-of-lesson test ---- */

  function renderTestBox(id, lesson, step) {
    const box = $("#testBox");
    if (!box) return;
    const test = TESTS[id];

    if (!test) {
      box.innerHTML = '<p class="muted">No test written for this lesson yet.</p>';
      return;
    }

    const cards = lessonCardIds(id, lesson);
    const queued = cards.filter(function (c) { return srs[c]; }).length;

    if (learned[id]) {
      box.innerHTML =
        '<p class="test-done">✓ Test done. <b>' + queued +
        " cards</b> from this lesson are in your review queue, and they will come back to you automatically.</p>" +
        '<button class="btn small ghost" id="retestBtn">Take it again</button>';
      $("#retestBtn").addEventListener("click", function () { startTest(id, lesson, step); });
      return;
    }

    box.innerHTML =
      '<p class="muted">Two questions, from memory. Do not scroll back up — trying and failing to remember ' +
      "is the part that makes it stick.</p>" +
      '<button class="btn small" id="startTestBtn">Start the test</button>';
    $("#startTestBtn").addEventListener("click", function () { startTest(id, lesson, step); });
  }

  function startTest(id, lesson, step) {
    const box = $("#testBox");
    const test = TESTS[id];
    const picked = [null, null];

    box.innerHTML = test.qs.map(function (q, qi) {
      return '<div class="test-q" data-q="' + qi + '">' +
        '<p class="test-qtext">' + (qi + 1) + ". " + q.q + "</p>" +
        '<div class="test-opts">' +
          q.a.map(function (opt, oi) {
            return '<button class="opt test-opt" data-q="' + qi + '" data-o="' + oi + '">' + opt + "</button>";
          }).join("") +
        "</div></div>";
    }).join("") +
    '<button class="btn small" id="markBtn" disabled>Mark my answers</button>';

    const markBtn = $("#markBtn");

    box.querySelectorAll(".test-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const qi = Number(btn.dataset.q);
        picked[qi] = Number(btn.dataset.o);
        box.querySelectorAll('.test-opt[data-q="' + qi + '"]').forEach(function (b) {
          b.classList.remove("sel");
        });
        btn.classList.add("sel");
        markBtn.disabled = picked.some(function (p) { return p === null; });
      });
    });

    markBtn.addEventListener("click", function () {
      let score = 0;
      const wrong = [];

      test.qs.forEach(function (q, qi) {
        box.querySelectorAll('.test-opt[data-q="' + qi + '"]').forEach(function (b) {
          b.disabled = true;
          b.classList.remove("sel");
          const oi = Number(b.dataset.o);
          if (oi === q.correct) b.classList.add("right");
          else if (oi === picked[qi]) b.classList.add("wrong");
        });
        if (picked[qi] === q.correct) score++;
        else wrong.push(id + ":mcq" + qi);
      });

      // everything from this lesson enters the queue; anything missed comes back today
      const cards = lessonCardIds(id, lesson);
      cards.forEach(function (c) {
        if (!srs[c]) srs[c] = { int: 1, ease: 2.5, lapses: 0, due: inDays(1) };
      });
      wrong.forEach(function (c) {
        srs[c] = { int: 0, ease: 2.3, lapses: 1, due: todayStr() };
      });
      learned[id] = true;
      store.set("srs", srs);
      store.set("learned", learned);

      markBtn.remove();
      const result = document.createElement("div");
      result.className = "test-result";
      result.innerHTML =
        "<p><b>" + score + " out of " + test.qs.length + ".</b> " +
        (score === test.qs.length
          ? "All correct — these now come back tomorrow, then in three days, then a week."
          : "The ones you missed are back in your review pile today, not next week.") +
        '</p><p class="muted tiny">' + cards.length +
        " cards from this lesson are now in your review queue. Best thing you can do next: explain this lesson out loud to someone.</p>";
      box.appendChild(result);

      renderReview();
      const count = Object.keys(learned).filter(function (k) { return learned[k]; }).length;
      $("#learnedCount").textContent = count + " of " + TOTAL_LESSONS + " lessons learned";
    });
  }

  /* ---- the review session ---- */

  let queue = [];
  let qPos = 0;
  let reviewed = 0;

  function renderReview() {
    const box = $("#reviewBox");
    const all = liveCards();
    const due = dueCards();
    const streak = store.get("streak", 0);

    if (!all.length) {
      box.innerHTML =
        '<div class="review-empty"><p><b>Nothing in your queue yet.</b></p>' +
        '<p class="muted">Take the test at the end of a lesson and its questions land here. ' +
        "After that they come back on their own — tomorrow, then in three days, then a week, then a month.</p>" +
        '<a class="btn small" href="#lesson">Go to today’s lesson</a></div>';
      return;
    }

    if (!due.length) {
      const next = all.map(function (c) { return srs[c].due; }).sort()[0];
      const days = Math.max(0, daysBetween(todayStr(), next));
      const nextCount = all.filter(function (c) { return srs[c].due === next; }).length;
      box.innerHTML =
        '<div class="review-empty"><p><b>Nothing due today. You are up to date.</b></p>' +
        '<p class="muted">' + all.length + " cards in your queue. Next up: " + nextCount +
        (days <= 1 ? " card" + (nextCount === 1 ? "" : "s") + " tomorrow." : " in " + days + " days.") +
        (streak ? " Review streak: " + streak + " day" + (streak === 1 ? "" : "s") + "." : "") +
        "</p></div>";
      return;
    }

    box.innerHTML =
      '<div class="review-start">' +
        '<div class="due-badge"><p class="due-count">' + due.length + "</p>" +
        '<p class="muted tiny">card' + (due.length === 1 ? "" : "s") + " due today</p></div>" +
        "<div><p>These are things you have already learned that are about to slip. " +
        "Five minutes now saves relearning them from scratch.</p>" +
        '<button class="btn" id="startReviewBtn">Start review</button>' +
        (streak ? '<p class="muted tiny">Review streak: ' + streak + " day" + (streak === 1 ? "" : "s") + ".</p>" : "") +
        "</div></div>";

    $("#startReviewBtn").addEventListener("click", startReview);
  }

  function startReview() {
    queue = dueCards();
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = queue[i]; queue[i] = queue[j]; queue[j] = tmp;
    }
    qPos = 0;
    reviewed = 0;
    renderReviewCard();
  }

  function gradeButtons(cid) {
    const wrap = document.createElement("div");
    wrap.className = "grades";
    [["Forgot it", 0], ["Tricky", 1], ["Got it", 2], ["Easy", 3]].forEach(function (pair) {
      const b = document.createElement("button");
      b.className = "grade g" + pair[1];
      b.textContent = pair[0];
      b.addEventListener("click", function () {
        schedule(cid, pair[1]);
        reviewed++;
        qPos++;
        renderReviewCard();
      });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function renderReviewCard() {
    const box = $("#reviewBox");

    if (qPos >= queue.length) return finishReview();

    const cid = queue[qPos];
    const card = getCard(cid);
    if (!card) { qPos++; return renderReviewCard(); }

    box.innerHTML =
      '<div class="review-card">' +
        '<p class="review-meta">Card ' + (qPos + 1) + " of " + queue.length + " · " + card.where + "</p>" +
        '<p class="review-q">' + card.q + "</p>" +
        '<div id="reviewBody"></div>' +
      "</div>";

    const body = $("#reviewBody");

    if (card.kind === "mcq") {
      const opts = document.createElement("div");
      opts.className = "q-opts";
      card.options.forEach(function (opt, oi) {
        const b = document.createElement("button");
        b.className = "opt";
        b.textContent = opt;
        b.addEventListener("click", function () {
          opts.querySelectorAll(".opt").forEach(function (x, xi) {
            x.disabled = true;
            if (xi === card.correct) x.classList.add("right");
            else if (xi === oi) x.classList.add("wrong");
          });
          const right = oi === card.correct;
          schedule(cid, right ? 2 : 0);
          reviewed++;
          const note = document.createElement("div");
          note.className = "review-next";
          note.innerHTML = "<p>" + (right
            ? "Correct — back in " + srs[cid].int + " day" + (srs[cid].int === 1 ? "" : "s") + "."
            : "Not this time. This one comes back tomorrow.") + "</p>";
          const nextBtn = document.createElement("button");
          nextBtn.className = "btn small";
          nextBtn.textContent = "Next →";
          nextBtn.addEventListener("click", function () { qPos++; renderReviewCard(); });
          note.appendChild(nextBtn);
          body.appendChild(note);
          nextBtn.focus();
        });
        opts.appendChild(b);
      });
      body.appendChild(opts);
      return;
    }

    // free recall: have a go first, then grade yourself honestly
    const showBtn = document.createElement("button");
    showBtn.className = "btn small ghost";
    showBtn.textContent = "Show the answer";
    showBtn.addEventListener("click", function () {
      showBtn.remove();
      const ans = document.createElement("p");
      ans.className = "review-answer";
      ans.innerHTML = card.answer;
      body.appendChild(ans);
      const prompt = document.createElement("p");
      prompt.className = "muted tiny";
      prompt.textContent = "Be honest — guessing right is not the same as knowing it.";
      body.appendChild(prompt);
      body.appendChild(gradeButtons(cid));
    });
    body.appendChild(showBtn);
  }

  function finishReview() {
    const today = todayStr();
    const last = store.get("lastReview", null);
    let streak = store.get("streak", 0);
    if (last !== today) {
      streak = last === inDays(-1) ? streak + 1 : 1;
      store.set("streak", streak);
      store.set("lastReview", today);
    }

    const stillDue = dueCards().length;
    const box = $("#reviewBox");
    box.innerHTML =
      '<div class="review-empty"><p><b>Done — ' + reviewed + " card" + (reviewed === 1 ? "" : "s") +
      " reviewed.</b></p>" +
      '<p class="muted">Review streak: ' + streak + " day" + (streak === 1 ? "" : "s") + ". " +
      (stillDue ? stillDue + " still due — you can keep going." : "Nothing else due today.") + "</p>" +
      (stillDue ? '<button class="btn small" id="keepGoingBtn">Keep going</button>' : "") +
      "</div>";

    if (stillDue) $("#keepGoingBtn").addEventListener("click", startReview);
  }

  renderLesson();
  renderReview();

})();
