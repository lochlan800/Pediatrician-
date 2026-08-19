# 👂 ENT Pathway

A small, friendly web app for someone who wants to become an **ear, nose and throat surgeon** —
and to specialise in ears, because they had grommets themselves and want to be the person who does
that for other children.

It maps the whole route from school to consultant, teaches a lesson a day starting from zero
knowledge, and is honest about the hard parts. No build tools, no dependencies, no accounts, no tracking.

## What's in it

| Section | What it does |
| --- | --- |
| **Lesson** | **Pick your age, then the month, then the day — and it teaches you that day's lesson.** 12 monthly units, 6 lessons each, 72 in total. The age you pick changes how the lesson is explained, and every lesson assumes you know nothing at all. |
| **The path** | Step-by-step timeline from GCSEs to consultant ENT surgeon. Toggle between the **UK/Ireland** and **US** routes — they're genuinely different. ENT is a *surgical* specialty, so the route runs through surgical training. Tap any step to expand it. |
| **Do now** | Age-banded checklists (any age, 11–14, 14–16, 16–18). Ticks are saved and feed a progress ring. |
| **Quiz** | 12 questions on ears, noses, throats and the career, with an explanation after every answer. Keeps a best score. |
| **Flashcards** | 23 flip cards across Ear / Balance / Nose / Throat / Words / Career. Filter by topic, shuffle, arrow-key navigation. |
| **The job** | The best parts, the hard parts, a typical operating day, and eight other careers in ear and hearing care. |
| **Shelf** | Books and free courses, plus a notes box that saves on the device. |

Light/dark mode, works on a phone, and everything (name, ticks, notes, lessons learned, best score) is
stored in `localStorage` — nothing leaves the browser.

## The lesson book

Three dropdowns, in order: **age → month → day**.

- The **month** picks the unit:

  | | | | |
  | --- | --- | --- | --- |
  | Jan — How the body is built | Feb — **The ear: how hearing works** | Mar — The nose, sinuses and breathing | Apr — The throat: voice, swallowing, tonsils |
  | May — Balance and dizziness | Jun — **Children's ears: glue ear and grommets** | Jul — Hearing loss and how we help | Aug — The operations an ENT surgeon does |
  | Sep — Germs, immunity and vaccines | Oct — Being ill and getting better | Nov — Minds, sleep and feelings | Dec — Becoming a surgeon |

- The **day** picks the lesson inside that unit: `lesson = ((day - 1) % 6) + 1`, so any date in the year lands on a real lesson.
- The **age** picks the level. 7–10 gets Explorer, 11–13 gets Learner, 14–18 gets Student. Same lesson,
  three genuinely different explanations, activities and check questions — Explorer uses an analogy,
  Student uses the proper clinical detail.

There's also a birthday field: enter a date of birth and it works the age out and sets it for you.

Every lesson has: what it is, three facts worth remembering, any new words defined, a "going deeper"
section for your level, something to actually go and do, and a question with a hidden answer. Lessons
marked as learned are counted and saved. Nothing assumes prior knowledge — if a word is used, it's defined.

## Running it

Plain HTML, CSS and JavaScript. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Putting it online (free)

On GitHub: **Settings → Pages → Source: Deploy from a branch →** pick the branch and `/ (root)`.
A minute later it's live at `https://<username>.github.io/<repo>/` and can be opened on any phone.

## Editing the content

Lessons live in `lessons.js`; everything else lives in `data.js` — the pathway steps, checklists,
quiz questions, flashcards, careers, book list and fun facts. Add to any array and the page picks it up.
No rebuild needed.

```js
// data.js — a quiz question
const QUIZ = [
  { q: "…", a: ["…","…","…","…"], correct: 1, why: "…" },
];
```

```js
// lessons.js — one lesson. Add a 7th to any unit and days 7, 14, 21, 28 will find it.
{
  title: "…",
  what:  "…",                          // shown to everyone
  facts: ["…", "…", "…"],
  words: [{ w: "Grommet", m: "…" }],   // optional definitions
  t1: { d: "…", task: "…", q: "…", a: "…" },   // ages 7-10
  t2: { d: "…", task: "…", q: "…", a: "…" },   // ages 11-13
  t3: { d: "…", task: "…", q: "…", a: "…" }    // ages 14-18
}
```

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | All styling and the light/dark theme tokens |
| `data.js` | Pathway, checklists, quiz, flashcards, careers, books |
| `lessons.js` | **The 72 daily lessons**, in 12 monthly units |
| `app.js` | Behaviour: lesson picker, timeline, checklists, quiz, flashcards, saving |

## A note on accuracy

This is general careers and study information, not medical advice, and entry requirements change every
year. Always check current requirements directly with the universities and medical schools involved,
and with ENT UK or the Royal College of Surgeons for how specialty training works today.
