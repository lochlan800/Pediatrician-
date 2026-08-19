/* Pediatrician Pathway — behaviour. Vanilla JS, no build step. */
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
})();
