# 🩺 Pediatrician Pathway

A small, friendly web app for someone who wants to become a paediatrician (US: pediatrician)
but isn't there yet — a map of the whole route, a checklist of things they can do *this week*,
a quiz, flashcards and an honest look at what the job is actually like.

Built for a younger sibling. No build tools, no dependencies, no accounts, no tracking.

## What's in it

| Section | What it does |
| --- | --- |
| **The path** | Step-by-step timeline from school to consultant/board certification. Toggle between the **UK/Ireland** and **US** routes — they're genuinely different. Click any step to expand it. |
| **Do now** | Age-banded checklists (any age, 11–14, 14–16, 16–18). Ticks are saved and feed a progress ring. |
| **Quiz** | 12 questions on children's bodies and the career, with an explanation after every answer. Keeps a best score. |
| **Flashcards** | 18 flip cards across Body / Newborns / Milestones / Words / Career. Filter by topic, shuffle, arrow-key navigation. |
| **The job** | The best parts, the hard parts, a typical hospital day, and eight other careers in children's healthcare. |
| **Shelf** | Books and free courses, plus a notes box that saves on the device. |

Also: light/dark mode, works on a phone, and everything (name, ticks, notes, best score) is stored
in `localStorage` — nothing leaves the browser.

## Running it

It's plain HTML, CSS and JavaScript. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Putting it online (free)

On GitHub: **Settings → Pages → Source: Deploy from a branch →** pick the branch and `/ (root)`.
A minute later it's live at `https://<username>.github.io/<repo>/` and can be opened on any phone.

## Editing the content

All the words live in `data.js` — the pathway steps, checklists, quiz questions, flashcards,
careers, book list and fun facts. Add to any of those arrays and the page picks it up. No rebuild needed.

```js
// data.js
const QUIZ = [
  { q: "…", a: ["…","…","…","…"], correct: 1, why: "…" },
];
```

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | All styling and the light/dark theme tokens |
| `data.js` | **All the content** — edit here |
| `app.js` | Behaviour: timeline, checklists, quiz, flashcards, saving |

## A note on accuracy

This is general careers and study information, not medical advice, and entry requirements
change every year. Always check the current requirements directly with the universities and
medical schools she's interested in.
