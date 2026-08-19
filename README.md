# 👂 ENT Pathway

A small, friendly web app for someone who wants to become an **ear, nose and throat surgeon** —
and to specialise in ears, because they had grommets themselves and want to be the person who does
that for other children.

It maps the whole route from school to consultant, teaches a lesson a day starting from zero
knowledge, and is honest about the hard parts. No build tools, no dependencies, no accounts, no tracking.

## What's in it

| Section | What it does |
| --- | --- |
| **Review** | **Spaced repetition.** Every lesson you test drops its questions into a review queue that brings them back at growing gaps — 1 day, 3, ~8, ~20, ~50 — so they don't fade. Plus a panel on the seven strategies the app is built around. |
| **Lesson** | **Pick your age, then the month, then the day — and it teaches you that day's lesson.** 12 monthly units, 6 lessons each, 72 in total. The age you pick changes how the lesson is explained, and every lesson assumes you know nothing at all. |
| **The path** | Step-by-step timeline from GCSEs to consultant ENT surgeon. Toggle between the **UK/Ireland** and **US** routes — they're genuinely different. ENT is a *surgical* specialty, so the route runs through surgical training. Tap any step to expand it. |
| **Do now** | Age-banded checklists (any age, 11–14, 14–16, 16–18). Ticks are saved and feed a progress ring. |
| **Experience** | 20 real things to actually go and do — Cadets, sign language, playgroups, nursery placements, hospital work experience — **filtered by age**, so it separates what's open now from what unlocks at 13, 14, 15 and 16. |
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
section for your level, something to actually go and do, **a memory hook**, a free-recall check question,
and **a two-question test**. Nothing assumes prior knowledge — if a word is used, it's defined.

### The birthday drives the level

Put a date of birth in and the age is recomputed **on every load**, so the level tracks her as she grows —
an 11-year-old on Learner is moved up to Student on her 14th birthday without anyone doing anything. The
note under the field says so explicitly. The age dropdown still works as a manual override for that visit.

Levels are **Explorer 7–10, Learner 11–13, Student 14–18** — so 14, 15 and 16 currently share the top level.

## Making it stick

Learning a lesson once doesn't hold. The app is built around seven evidence-backed strategies, and each
one is implemented rather than just recommended:

| Strategy | Where it lives |
| --- | --- |
| Test yourself instead of rereading | The two-question test at the end of every lesson |
| Space the repetition out | The review queue, at 1 → 3 → ~8 → ~20 → ~50 day gaps |
| Try to answer before you look | "Check yourself" and every free-recall card |
| Interleave topics | The queue shuffles cards from all 12 units together |
| Use a memory hook | An authored hook on all 72 lessons |
| Teach it to someone | Prompted after each test |
| Sleep on it | Strategy panel, and November's sleep lesson |

### How the scheduler works

Finishing a lesson's test creates **4–5 cards**: the two multiple-choice questions, the free-recall check
question at your level, and one per defined word. Anything you got wrong comes back **the same day**;
everything else starts at one day.

Reviewing a card grades it — Forgot it / Tricky / Got it / Easy — and the interval grows from there
(SM-2-style: `interval × ease`, ease starting at 2.5 and moving with your answers). Multiple-choice cards
grade themselves. Getting one wrong sends it back to a one-day interval. It's all in `localStorage` under
`pp:srs`, and a review streak counts consecutive days.

## The experience list

Every worthwhile placement has an age limit, so the list is age-gated rather than aspirational. Set the
age (it stays in step with the lesson picker) and each item shows as **open now** or **from 14**, with how
to start it and why it counts for ENT specifically.

At 11 that's 9 of the 20 — St John Ambulance Cadets, sign language, reading buddy at school, helping at a
playgroup or holiday club, a first aid course, a CREST science project, Guides or Scouts, fundraising for a
hearing charity, and helping care for someone at home. Then 1 more at 13 (a part-time job with a council
work permit), 6 at 14 (Young Leader, babysitting, DofE, NHS Cadets, charity shop, nursery work-experience
week), 1 at 15 (virtual work experience) and 3 at 16 (hospital and GP work experience, care home
volunteering, deaf children's charities).

Paid nursery work is flagged honestly: it starts at 16 and needs a Level 2 or 3 childcare qualification.
The ages are the UK rules and are noted as such — US equivalents are summarised at the foot of the section.

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

// data.js — an experience opportunity. `from` is the youngest age it opens at.
const EXPERIENCE = [
  { name: "…", cat: "With children", from: 14, what: "…", how: "…", why: "…", note: "…" },
];
```

```js
// tests.js — the test and hook for one lesson, keyed "<month>-<lessonIndex>"
"6-3": {
  hook: "It is an air hole, not a plughole…",
  qs: [
    { q: "…", a: ["…","…","…","…"], correct: 1 },
    { q: "…", a: ["…","…","…","…"], correct: 0 }
  ]
}
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
| `data.js` | Pathway, checklists, experience list, quiz, flashcards, careers, books |
| `lessons.js` | **The 72 daily lessons**, in 12 monthly units |
| `tests.js` | The 144 test questions and 72 memory hooks, keyed by lesson id |
| `app.js` | Behaviour: lesson picker, timeline, checklists, quiz, flashcards, saving |

## A note on accuracy

This is general careers and study information, not medical advice, and entry requirements change every
year. Always check current requirements directly with the universities and medical schools involved,
and with ENT UK or the Royal College of Surgeons for how specialty training works today.
