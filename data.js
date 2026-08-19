/* Pediatrician Pathway — all content lives here so it's easy to edit. */

const PATHWAYS = {
  uk: {
    label: "UK / Ireland",
    endpoint: "Consultant Paediatrician",
    note: "In the UK it's spelled <em>paediatrician</em>. You go straight from school into medical school — no separate undergraduate degree first.",
    steps: [
      {
        age: "Ages 14–16",
        title: "GCSEs",
        length: "2 years",
        what: "Your first grades that medical schools actually look at.",
        detail: [
          "Take Biology, Chemistry and Physics if you can (Combined Science is fine too).",
          "Most medical schools want around 7+ GCSEs at grade 7/A or above, including Maths and English.",
          "Chemistry and Biology matter most — they're the gateway to A-Level sciences."
        ]
      },
      {
        age: "Ages 16–18",
        title: "A-Levels (or Highers / Leaving Cert)",
        length: "2 years",
        what: "The subjects that decide whether you can apply at all.",
        detail: [
          "Chemistry and Biology are required or strongly preferred by almost every UK medical school.",
          "A third subject is your choice — Maths, Physics and Psychology are all common.",
          "Typical offers are around AAA. Check each university, they differ."
        ]
      },
      {
        age: "Age 17–18",
        title: "UCAT + UCAS application",
        length: "1 application cycle",
        what: "The admissions test and the application itself.",
        detail: [
          "The UCAT is an aptitude test — reasoning and speed, not biology knowledge. You can practise for it.",
          "You apply through UCAS and can pick up to 4 medicine courses (plus 1 backup in something else).",
          "The deadline for medicine is mid-October — much earlier than other courses."
        ]
      },
      {
        age: "Age 17–18",
        title: "Interviews",
        length: "A few months",
        what: "Usually MMIs — short stations testing how you think and communicate.",
        detail: [
          "They care about empathy, ethics, teamwork and honesty far more than memorised facts.",
          "Having real experience with children or caring for people gives you things to talk about.",
          "Practise saying out loud <em>why</em> you want to do this."
        ]
      },
      {
        age: "Ages 18–24",
        title: "Medical school",
        length: "5–6 years",
        what: "You graduate as a doctor with an MBBS or MBChB.",
        detail: [
          "The first years are science-heavy; later years are placements in real hospitals.",
          "You'll rotate through paediatrics and see if it's really for you.",
          "Some students add an extra intercalated year for a BSc."
        ]
      },
      {
        age: "Ages 23–26",
        title: "Foundation Programme",
        length: "2 years (FY1 & FY2)",
        what: "Your first paid job as a doctor, rotating through specialties.",
        detail: [
          "You register with the GMC — provisionally at first, then fully after FY1.",
          "Try to get a paediatrics rotation.",
          "This is where you build the evidence for your specialty application."
        ]
      },
      {
        age: "Ages 25–33",
        title: "Paediatric specialty training",
        length: "~8 years (ST1–ST8)",
        what: "Now you're actually training to be a paediatrician.",
        detail: [
          "You sit the MRCPCH exams to become a member of the Royal College of Paediatrics and Child Health.",
          "You can subspecialise: neonatal medicine, cardiology, oncology, intensive care, community paediatrics and more.",
          "You're a working, paid doctor the whole time."
        ]
      },
      {
        age: "Around age 32+",
        title: "CCT → Consultant",
        length: "The finish line",
        what: "Certificate of Completion of Training, then you can be appointed as a consultant paediatrician.",
        detail: [
          "You're on the GMC Specialist Register.",
          "Many paediatricians keep learning and teaching for their whole career.",
          "Ages here are typical, not rules — plenty of people start later."
        ]
      }
    ]
  },
  us: {
    label: "United States",
    endpoint: "Board-Certified Pediatrician",
    note: "In the US you do a full undergraduate degree first, then apply to medical school.",
    steps: [
      {
        age: "Ages 14–18",
        title: "High school",
        length: "4 years",
        what: "Build a strong science foundation and a good GPA.",
        detail: [
          "Take Biology, Chemistry and Physics; AP or IB versions if they're offered.",
          "Strong Maths matters — you'll need statistics later.",
          "Start volunteering, especially anywhere involving kids or healthcare."
        ]
      },
      {
        age: "Ages 18–22",
        title: "Undergraduate degree (pre-med)",
        length: "4 years",
        what: "Any major is allowed — you just have to complete the pre-med prerequisites.",
        detail: [
          "Prerequisites usually include biology, general and organic chemistry, physics, biochemistry, maths/stats and English.",
          "GPA matters a lot. So does research, volunteering and clinical shadowing.",
          "Yes, you can major in music or history and still go to medical school."
        ]
      },
      {
        age: "Around age 21",
        title: "MCAT",
        length: "Months of prep",
        what: "The Medical College Admission Test — a long, demanding exam.",
        detail: [
          "It tests sciences, critical reasoning, psychology and sociology.",
          "Most people study for several months.",
          "You then apply through AMCAS (MD) or AACOMAS (DO)."
        ]
      },
      {
        age: "Ages 22–26",
        title: "Medical school",
        length: "4 years",
        what: "You graduate as an MD or DO.",
        detail: [
          "Two years of classroom science, then two years of clinical rotations.",
          "You take USMLE Step 1 and Step 2 (or COMLEX for DO).",
          "You'll rotate through paediatrics in year three."
        ]
      },
      {
        age: "Ages 26–29",
        title: "Pediatric residency",
        length: "3 years",
        what: "Matched through the NRMP 'Match'. You're a paid doctor now.",
        detail: [
          "Clinics, wards, the emergency department and newborn nursery.",
          "Long hours, but this is where you truly become a paediatrician.",
          "You choose whether to subspecialise near the end."
        ]
      },
      {
        age: "Around age 29",
        title: "Board certification",
        length: "Exam",
        what: "Pass the American Board of Pediatrics exam and you're a board-certified pediatrician.",
        detail: [
          "You can now practise as a general paediatrician.",
          "Certification is maintained over your career.",
          "Ages are typical, not rules."
        ]
      },
      {
        age: "Optional, +3 years",
        title: "Fellowship (subspecialty)",
        length: "3 years",
        what: "Neonatology, cardiology, oncology, critical care, endocrinology and many more.",
        detail: [
          "Only if you want to specialise further.",
          "Often involves research as well as clinical work.",
          "Plenty of brilliant paediatricians never do a fellowship."
        ]
      }
    ]
  }
};

const CHECKLISTS = [
  {
    band: "Right now (any age)",
    icon: "🌱",
    items: [
      "Read one article or watch one video a week about the human body",
      "Start a notebook of medical words you don't know yet",
      "Be curious out loud — ask doctors, nurses and dentists questions when you meet them",
      "Get comfortable being around younger kids: babysitting, helping cousins, kids' clubs",
      "Learn basic first aid (schools, St John Ambulance and the Red Cross run courses)",
      "Practise explaining something complicated to a younger child — that's half the job"
    ]
  },
  {
    band: "Ages 11–14",
    icon: "📗",
    items: [
      "Take science seriously now — it compounds",
      "Join a science club or enter a science fair",
      "Read one accessible medical book (see the shelf below)",
      "Start noticing what you're squeamish about, and get gently used to it",
      "Keep your maths strong — doctors calculate doses every single day",
      "Try a free intro biology course online"
    ]
  },
  {
    band: "Ages 14–16 (GCSE years)",
    icon: "🔬",
    items: [
      "Choose triple science if your school offers it",
      "Aim high in Maths and English — medical schools check these",
      "Start volunteering somewhere regularly (care home, charity shop, kids' club, scouts)",
      "Look up the entry requirements of 3 medical schools you like",
      "Ask about work experience or a hospital open day",
      "Keep a short diary of what you learn from volunteering — you'll need these stories later"
    ]
  },
  {
    band: "Ages 16–18",
    icon: "🎓",
    items: [
      "Take Chemistry and Biology (UK) or complete pre-med prerequisites (US)",
      "Book and practise for the UCAT or MCAT well in advance",
      "Get consistent, long-term volunteering — depth beats a one-week placement",
      "Draft your personal statement early and get it read by someone honest",
      "Practise interview questions out loud, including the ethical ones",
      "Have a genuine backup plan you'd also be happy with"
    ]
  }
];

const QUIZ = [
  {
    q: "Roughly how many bones is a baby born with?",
    a: ["Around 206", "Around 300", "Around 150", "Around 400"],
    correct: 1,
    why: "Babies are born with around 300 bones. Many of them are cartilage that later fuses together, leaving about 206 bones in an adult."
  },
  {
    q: "What does the APGAR score check?",
    a: ["A newborn's condition just after birth", "A child's reading age", "How tall a child will grow", "Whether a vaccine has worked"],
    correct: 0,
    why: "APGAR is scored at 1 and 5 minutes after birth: Appearance, Pulse, Grimace, Activity and Respiration — each scored 0 to 2, so 10 is the maximum."
  },
  {
    q: "Paediatricians usually care for patients from birth up to about what age?",
    a: ["5", "10", "18", "25"],
    correct: 2,
    why: "Most paediatric services cover birth to around 18, though the exact cut-off varies by country and hospital."
  },
  {
    q: "About when does a baby typically start walking unaided?",
    a: ["4–6 months", "12–15 months", "24–30 months", "6–8 months"],
    correct: 1,
    why: "Most babies walk independently somewhere between 12 and 15 months — but the normal range is wide, and 'normal' covers a lot of ground."
  },
  {
    q: "A child's resting heart rate compared with an adult's is usually…",
    a: ["Faster", "Slower", "Exactly the same", "It varies randomly"],
    correct: 0,
    why: "Younger children have faster resting heart rates. A newborn's is often around 100–160 beats per minute, while a calm adult's is nearer 60–100."
  },
  {
    q: "Which subject pair is required by almost every UK medical school?",
    a: ["Chemistry and Biology", "Physics and Maths", "Psychology and Sociology", "Biology and Geography"],
    correct: 0,
    why: "Chemistry and Biology at A-Level are the standard requirement. Your third subject is much more flexible."
  },
  {
    q: "What is a fontanelle?",
    a: ["A bone in the foot", "A soft spot between a baby's skull bones", "A type of stethoscope", "A childhood vaccine"],
    correct: 1,
    why: "Fontanelles are the soft gaps between a baby's skull bones. They let the head squeeze through birth and let the brain grow. The one at the back closes around 2 months, the one at the front usually between 9 and 18 months."
  },
  {
    q: "How many primary ('baby') teeth does a child normally get?",
    a: ["16", "20", "24", "32"],
    correct: 1,
    why: "There are 20 primary teeth, usually starting to come through at around 6 months. Adults end up with up to 32."
  },
  {
    q: "In the US, what exam do you take to apply to medical school?",
    a: ["The UCAT", "The SAT", "The MCAT", "The USMLE"],
    correct: 2,
    why: "The MCAT is the US medical school admissions test. The UCAT is the UK equivalent, and the USMLE comes later, during medical school."
  },
  {
    q: "Which of these is a real paediatric subspecialty?",
    a: ["Neonatology", "Geriatrics", "Podiatry", "Radiography"],
    correct: 0,
    why: "Neonatology is the care of newborn babies, especially premature or seriously ill ones. Geriatrics is the opposite end of life."
  },
  {
    q: "What's usually the single most important skill in a paediatric consultation?",
    a: ["Typing quickly", "Communicating with both the child and the parent", "Memorising drug names", "Reading X-rays"],
    correct: 1,
    why: "Paediatrics is the specialty where you always have at least two people in the room. Winning the trust of a frightened child and a worried parent at the same time is the core skill."
  },
  {
    q: "Roughly how long does it take to become a fully qualified consultant paediatrician in the UK from starting medical school?",
    a: ["About 5 years", "About 8 years", "About 14–15 years", "About 20 years"],
    correct: 2,
    why: "Around 5–6 years of medical school, 2 years of foundation training and roughly 8 years of specialty training — about 14 to 15 years in total. You're paid for most of it."
  }
];

const FLASHCARDS = [
  { cat: "Body", front: "How many bones does an adult have?", back: "206 — down from around 300 at birth, as bones fuse together." },
  { cat: "Body", front: "What does the skeleton do besides hold you up?", back: "Protects organs, stores minerals like calcium, and makes blood cells inside bone marrow." },
  { cat: "Newborns", front: "What are the five parts of the APGAR score?", back: "Appearance, Pulse, Grimace, Activity, Respiration. Each scored 0–2, maximum 10, checked at 1 and 5 minutes." },
  { cat: "Newborns", front: "Why do babies have soft spots on their heads?", back: "The fontanelles let the skull flex during birth and let the brain grow fast in the first year." },
  { cat: "Milestones", front: "When does a baby usually give a first social smile?", back: "Around 6–8 weeks." },
  { cat: "Milestones", front: "When do babies usually sit without support?", back: "Around 6–8 months." },
  { cat: "Milestones", front: "When do children typically start joining two words together?", back: "Around 2 years old — things like 'more juice'." },
  { cat: "Body", front: "Why do children's heart rates run faster than adults'?", back: "Smaller hearts pump less blood per beat, so they beat more often to keep up with a fast-growing body." },
  { cat: "Words", front: "What does 'paediatrics' actually mean?", back: "From the Greek <em>pais</em> (child) and <em>iatros</em> (healer) — literally 'child healer'." },
  { cat: "Words", front: "What is a 'neonate'?", back: "A baby in its first 28 days of life." },
  { cat: "Words", front: "What does 'chronic' mean in medicine?", back: "Long-lasting or ongoing — the opposite of 'acute', which means sudden and short-term." },
  { cat: "Words", front: "What does 'benign' mean?", back: "Not harmful, not cancerous. The opposite is 'malignant'." },
  { cat: "Career", front: "What is a paediatric subspecialty?", back: "A focused area within child health — neonatology, cardiology, oncology, intensive care, community paediatrics and many others." },
  { cat: "Career", front: "What's the UK exam series for paediatric trainees?", back: "The MRCPCH — Membership of the Royal College of Paediatrics and Child Health." },
  { cat: "Career", front: "What does a paediatrician spend most of the day doing?", back: "Talking. Examinations, ward rounds and procedures matter, but explaining, reassuring and listening take up most of it." },
  { cat: "Body", front: "What is the largest organ in the human body?", back: "The skin. In children it's proportionally larger relative to body weight, which is why they lose heat and fluid faster." },
  { cat: "Body", front: "Where are red blood cells made?", back: "In the bone marrow — in children, in more bones than in adults." },
  { cat: "Newborns", front: "Why are premature babies kept in incubators?", back: "They can't regulate their own temperature well yet, and they need protection, humidity and close monitoring." }
];

const ROLES = [
  { name: "Paediatrician", blurb: "Doctor specialising in children's health, from newborns to teenagers.", years: "~14 yrs from starting med school" },
  { name: "Paediatric nurse", blurb: "Hands-on daily care, often the person a child trusts most on the ward.", years: "3 yr degree" },
  { name: "Midwife", blurb: "Cares for people through pregnancy, birth and the first weeks after.", years: "3 yr degree" },
  { name: "Paramedic", blurb: "Emergency care wherever it happens. Fast decisions, huge variety.", years: "3 yr degree" },
  { name: "Child psychologist", blurb: "Mental health, development and behaviour in children and teens.", years: "Degree + doctorate" },
  { name: "Health play specialist", blurb: "Uses play to help children cope with hospital, pain and procedures.", years: "Diploma route" },
  { name: "Paediatric physiotherapist", blurb: "Helps children move, recover and build strength.", years: "3 yr degree" },
  { name: "Speech & language therapist", blurb: "Helps children communicate, and helps with feeding and swallowing.", years: "3 yr degree" }
];

const SHELF = [
  { title: "Do No Harm", by: "Henry Marsh", note: "A neurosurgeon being unusually honest about mistakes. Best for older teens." },
  { title: "This Is Going to Hurt", by: "Adam Kay", note: "Funny and brutal diaries from a junior doctor. Contains adult content — best 16+." },
  { title: "The Body: A Guide for Occupants", by: "Bill Bryson", note: "The friendliest tour of human anatomy there is. Great for any age from ~12." },
  { title: "When Breath Becomes Air", by: "Paul Kalanithi", note: "A doctor writing about becoming a patient. Moving and short." },
  { title: "Kay's Anatomy", by: "Adam Kay", note: "The kids' version — genuinely great for ages 9–14." },
  { title: "Khan Academy — Biology & Health", by: "free online", note: "Free, structured, and covers most school biology plus a lot beyond it." }
];

const FACTS = [
  "The word 'paediatrics' comes from Greek words meaning 'child healer'.",
  "A newborn's heart beats around twice as fast as yours does right now.",
  "Babies are born with around 300 bones; adults have about 206.",
  "Children aren't small adults — their bodies handle medicines, heat and fluid loss very differently.",
  "A paediatrician usually has to win over two people at once: the child and the parent.",
  "Most of a doctor's job is listening. Roughly 80% of diagnoses come from the story the patient tells.",
  "You get paid throughout specialty training — it's a job, not extra school.",
  "Nobody expects you to know anatomy yet. They expect you to be curious, kind and hard-working."
];
