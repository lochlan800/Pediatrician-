/* ENT Pathway — all content lives here so it's easy to edit. */

const PATHWAYS = {
  uk: {
    label: "UK / Ireland",
    endpoint: "Consultant ENT Surgeon",
    note: "ENT is a <strong>surgical</strong> specialty — its proper name is otolaryngology, or ORL-HNS. So the route runs through surgical training, not paediatric training. You go straight from school into medical school; there's no separate undergraduate degree first.",
    steps: [
      {
        age: "Ages 14–16",
        title: "GCSEs",
        length: "2 years",
        what: "Your first grades that medical schools actually look at.",
        detail: [
          "Take Biology, Chemistry and Physics if you can (Combined Science is fine too).",
          "Most medical schools want around 7+ GCSEs at grade 7/A or above, including Maths and English.",
          "Physics matters more than people expect in ENT — sound is physics."
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
        age: "Ages 18–24",
        title: "Medical school",
        length: "5–6 years",
        what: "You graduate as a doctor with an MBBS or MBChB. Everyone does this, whatever they specialise in later.",
        detail: [
          "You do not choose ENT yet — you learn all of medicine first.",
          "There'll be an ENT placement, usually short. Make the most of it.",
          "Many universities have a surgical society you can join from year one."
        ]
      },
      {
        age: "Ages 23–26",
        title: "Foundation Programme",
        length: "2 years (FY1 & FY2)",
        what: "Your first paid job as a doctor, rotating through different specialties.",
        detail: [
          "You register with the GMC — provisionally at first, then fully after FY1.",
          "Try hard to get an ENT or surgical rotation.",
          "This is where you start building the portfolio your specialty application is scored on."
        ]
      },
      {
        age: "Ages 25–27",
        title: "Core surgical training",
        length: "2 years (CT1–CT2)",
        what: "General surgical training, where you learn to operate. You sit the MRCS exams here.",
        detail: [
          "Some regions run 'run-through' ENT posts you can enter at ST1 instead, going straight into ENT.",
          "MRCS = Membership of the Royal College of Surgeons.",
          "Competition for ENT is real — audit, research, teaching and courses all count."
        ]
      },
      {
        age: "Ages 27–33",
        title: "ENT specialty training",
        length: "~6 years (ST3–ST8)",
        what: "Now you're properly training as an ear, nose and throat surgeon.",
        detail: [
          "You rotate through otology (ears), rhinology (nose), laryngology (voice), head and neck, and paediatric ENT.",
          "You sit the FRCS (ORL-HNS) exam near the end.",
          "You are a paid, working surgeon the entire time."
        ]
      },
      {
        age: "Around age 33–35",
        title: "CCT → Consultant, then choose your ears",
        length: "The finish line, then a beginning",
        what: "Certificate of Completion of Training, then appointment as a consultant ENT surgeon — and this is where you specialise in ears.",
        detail: [
          "Most surgeons do a fellowship of about a year in their chosen area: otology, or paediatric ENT, or both.",
          "Otology and neurotology are the ear subspecialties — grommets, eardrum repair, mastoid surgery, cochlear implants.",
          "Ages here are typical, not rules. Plenty of people arrive later, and it counts just the same."
        ]
      }
    ]
  },
  us: {
    label: "United States",
    endpoint: "Otolaryngologist (ENT Surgeon)",
    note: "In the US, ENT is called <strong>otolaryngology – head and neck surgery</strong>. You do a full undergraduate degree first, then medical school, then a 5-year surgical residency.",
    steps: [
      {
        age: "Ages 14–18",
        title: "High school",
        length: "4 years",
        what: "Build a strong science foundation and a good GPA.",
        detail: [
          "Take Biology, Chemistry and Physics; AP or IB versions if offered.",
          "Strong Maths matters — you'll need statistics later.",
          "Start volunteering, especially anywhere involving healthcare or children."
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
          "Shadowing an ENT surgeon early is genuinely worth arranging."
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
          "Otolaryngology is one of the more competitive specialties to match into, so research helps."
        ]
      },
      {
        age: "Ages 26–31",
        title: "Otolaryngology residency",
        length: "5 years",
        what: "Matched through the NRMP 'Match'. You're a paid surgeon in training.",
        detail: [
          "Ears, nose, sinuses, voice, head and neck cancer, and paediatric ENT.",
          "Long hours, and a huge amount of operating.",
          "You decide near the end whether to subspecialise."
        ]
      },
      {
        age: "Around age 31",
        title: "Board certification",
        length: "Exams",
        what: "Pass the American Board of Otolaryngology – Head and Neck Surgery exams and you're board certified.",
        detail: [
          "You can now practise as a general ENT surgeon.",
          "Certification is maintained across your career.",
          "Ages are typical, not rules."
        ]
      },
      {
        age: "+1 to 2 years",
        title: "Fellowship: the ears",
        length: "1–2 years",
        what: "This is the step where you become an ear surgeon specifically.",
        detail: [
          "Neurotology / otology is the ear fellowship — eardrums, mastoid surgery, cochlear implants, balance disorders.",
          "Pediatric otolaryngology is the other route if you want children specifically — grommets, tonsils, airways.",
          "Some surgeons do both, and end up as the person who fixes children's ears."
        ]
      }
    ]
  }
};

const CHECKLISTS = [
  {
    band: "Right now (any age)",
    icon: "👂",
    items: [
      "Ask your family exactly what happened when you had your grommets — why, how old you were, what changed afterwards",
      "Learn the three parts of the ear: outer, middle, inner",
      "Learn a few signs in British or American Sign Language, and keep going",
      "Protect your own hearing: keep headphones under about 60% volume, and take breaks",
      "Read one article or watch one video a week about the body",
      "Start a notebook of medical words you don't know yet"
    ]
  },
  {
    band: "Ages 11–14",
    icon: "📗",
    items: [
      "Take science seriously now — it compounds",
      "Learn how sound actually works in physics: waves, frequency, volume",
      "Practise being steady and precise with your hands — models, sewing, drawing, an instrument",
      "Get comfortable around younger kids: babysitting, helping cousins, kids' clubs",
      "Learn basic first aid, including how to stop a nosebleed properly",
      "Find out what an audiologist does and how they test hearing"
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
      "Ask about work experience, a hospital open day, or an audiology department visit",
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
      "Look up ENT UK and the Royal College of Surgeons careers pages",
      "Practise interview questions out loud, including the ethical ones",
      "Have a genuine backup plan you'd also be happy with"
    ]
  }
];

const QUIZ = [
  {
    q: "What does ENT stand for?",
    a: ["Ear, nose and throat", "Ear, neck and tongue", "External nerve treatment", "Ear and neural therapy"],
    correct: 0,
    why: "Ear, nose and throat. The proper medical name is otolaryngology, or ORL-HNS — otolaryngology and head and neck surgery."
  },
  {
    q: "What do grommets actually do?",
    a: ["Make the eardrum stronger", "Let air into the middle ear and fluid drain out", "Amplify sound like a hearing aid", "Block water from getting in"],
    correct: 1,
    why: "A grommet is a tiny tube through the eardrum. It lets air in behind the drum and lets trapped fluid drain out, which fixes the muffled hearing of glue ear."
  },
  {
    q: "What is the smallest bone in the human body?",
    a: ["The stapes, in the middle ear", "The smallest bone in the little toe", "A bone in the wrist", "A bone in the nose"],
    correct: 0,
    why: "The stapes, or stirrup, sits in the middle ear and is around 3 mm long. All three of the smallest bones in your body are in your ear."
  },
  {
    q: "How many bones are there in the middle ear?",
    a: ["One", "Two", "Three", "Five"],
    correct: 2,
    why: "Three: the malleus (hammer), incus (anvil) and stapes (stirrup). Together they're called the ossicles, and they amplify vibration on its way in."
  },
  {
    q: "What is glue ear?",
    a: ["An infection of the ear canal", "Wax blocking the ear", "Sticky fluid trapped behind the eardrum", "A torn eardrum"],
    correct: 2,
    why: "Glue ear — otitis media with effusion — is thick fluid trapped in the middle ear. It stops the eardrum vibrating properly, so sound is muffled. It's the usual reason children get grommets."
  },
  {
    q: "Do grommets stay in the ear forever?",
    a: ["Yes, they're permanent", "No — they usually fall out on their own", "They're removed in a second operation", "They dissolve within a week"],
    correct: 1,
    why: "Almost always no. As the eardrum grows and renews itself, it pushes the grommet out — usually within 6 to 12 months. Most children never notice it happen."
  },
  {
    q: "Which part of the ear turns vibrations into nerve signals?",
    a: ["The eardrum", "The cochlea", "The ear canal", "The pinna"],
    correct: 1,
    why: "The cochlea, the snail-shaped part of the inner ear. Tiny hair cells inside it convert movement into electrical signals for the brain."
  },
  {
    q: "What are the semicircular canals for?",
    a: ["Hearing high notes", "Balance", "Draining wax", "Equalising pressure"],
    correct: 1,
    why: "Balance. There are three of them, set at right angles, and they detect your head rotating in each direction."
  },
  {
    q: "Where do most nosebleeds come from?",
    a: ["Deep at the back of the nose", "The front of the septum, near the tip", "The sinuses", "The throat"],
    correct: 1,
    why: "About 90% come from Little's area at the front of the septum, where several small vessels meet. That's why pinching the soft part of the nose works."
  },
  {
    q: "What does the epiglottis do?",
    a: ["Makes your voice", "Flips over the windpipe when you swallow", "Filters air", "Holds the tongue down"],
    correct: 1,
    why: "It's a flap that folds over the entrance to the windpipe as you swallow, so food goes down the oesophagus instead of into your lungs."
  },
  {
    q: "Why do young children get so many more ear infections than adults?",
    a: ["Their eardrums are thinner", "Their Eustachian tube is shorter and more horizontal", "They have more earwax", "Their ears are colder"],
    correct: 1,
    why: "The Eustachian tube connects the middle ear to the back of the nose. In small children it's short, floppy and nearly horizontal, so germs and fluid move up it easily. It improves as they grow."
  },
  {
    q: "Roughly how long does it take to become a consultant ENT surgeon in the UK, from starting medical school?",
    a: ["About 6 years", "About 10 years", "About 15–16 years", "About 25 years"],
    correct: 2,
    why: "Around 5–6 years of medical school, 2 foundation years, 2 core surgical years and about 6 years of ENT training — roughly 15 to 16 years, and you're paid for most of it."
  }
];

const FLASHCARDS = [
  { cat: "Ear", front: "What are the three parts of the ear?", back: "Outer (pinna and ear canal), middle (eardrum and the three tiny bones), inner (cochlea and balance organs)." },
  { cat: "Ear", front: "Name the three bones of the middle ear.", back: "Malleus (hammer), incus (anvil) and stapes (stirrup) — together, the ossicles." },
  { cat: "Ear", front: "What is the eardrum properly called?", back: "The tympanic membrane. It's about 1 cm across and heals itself surprisingly well." },
  { cat: "Ear", front: "What does the Eustachian tube do?", back: "Connects the middle ear to the back of the nose, letting air in to equalise pressure. It's why your ears pop." },
  { cat: "Ear", front: "How do the ossicles help you hear?", back: "They act as levers, amplifying the vibration of the eardrum roughly twentyfold before it reaches the fluid of the inner ear." },
  { cat: "Ear", front: "What is a grommet?", back: "A tiny tube placed through the eardrum to ventilate the middle ear and let trapped fluid drain. It usually falls out by itself in 6–12 months." },
  { cat: "Ear", front: "Why can't damaged hearing come back?", back: "The hair cells in the human cochlea don't regenerate. Once they're destroyed by noise, illness or age, that hearing is gone for good." },
  { cat: "Ear", front: "What is glue ear?", back: "Otitis media with effusion — thick fluid behind an intact eardrum, causing muffled hearing. Very common between ages 2 and 5." },
  { cat: "Balance", front: "Which part of the ear controls balance?", back: "The vestibular system: three semicircular canals for rotation, plus the utricle and saccule for gravity and straight-line movement." },
  { cat: "Balance", front: "Why do you feel dizzy after spinning?", back: "Fluid in the semicircular canals keeps moving after you stop, so your ears insist you're still turning while your eyes say you're not." },
  { cat: "Balance", front: "What is BPPV?", back: "Benign paroxysmal positional vertigo — tiny crystals come loose in the balance canals, causing brief violent dizziness on moving the head. It's often cured in one appointment." },
  { cat: "Nose", front: "What do the turbinates in your nose do?", back: "They warm, moisten and filter incoming air, turning cold dry air into something your lungs can cope with." },
  { cat: "Nose", front: "Where do most nosebleeds start?", back: "Little's area, at the front of the septum, where several small blood vessels meet just under thin skin." },
  { cat: "Nose", front: "How do you stop a nosebleed properly?", back: "Sit up, lean forwards, and pinch the soft part of the nose for 10–15 minutes without letting go. Not the bony bridge, and don't tip the head back." },
  { cat: "Throat", front: "What are tonsils and adenoids?", back: "Lumps of lymphoid tissue guarding the entrance to the throat. They're part of the immune system and usually shrink as you grow." },
  { cat: "Throat", front: "What does the larynx do?", back: "It's the voice box. Air passing between two vocal folds makes them vibrate, and that vibration is your voice." },
  { cat: "Throat", front: "How does food avoid going into your lungs?", back: "The epiglottis folds over the entrance to the windpipe every time you swallow, and breathing pauses for that moment." },
  { cat: "Words", front: "What does 'otolaryngology' mean?", back: "From the Greek: <em>oto</em> (ear), <em>laryngo</em> (throat) and <em>logy</em> (study of). ENT's proper name." },
  { cat: "Words", front: "What's the difference between conductive and sensorineural hearing loss?", back: "Conductive means sound can't get through the outer or middle ear — often fixable. Sensorineural means the cochlea or nerve is damaged — usually permanent." },
  { cat: "Words", front: "What is tinnitus?", back: "Hearing a sound — ringing, buzzing, hissing — with no external source. Very common, and often linked to hearing damage." },
  { cat: "Career", front: "What are the subspecialties within ENT?", back: "Otology and neurotology (ears), rhinology (nose and sinuses), laryngology (voice), head and neck surgery, and paediatric ENT." },
  { cat: "Career", front: "What's the commonest childhood operation in many countries?", back: "Insertion of grommets. An ENT surgeon may do several in a single morning list." },
  { cat: "Career", front: "What does an ENT surgeon spend most of the day doing?", back: "Clinic, not theatre. Looking in ears, noses and throats, listening to patients, and deciding who actually needs an operation — most don't." }
];

const ROLES = [
  { name: "ENT surgeon", blurb: "Operates on ears, noses and throats, and runs clinics for people of all ages.", years: "~15 yrs from starting med school" },
  { name: "Audiologist", blurb: "Tests hearing, diagnoses hearing loss, fits and tunes hearing aids. Works with ENT every day.", years: "3 yr degree" },
  { name: "Audiovestibular physician", blurb: "A doctor specialising in hearing and balance without doing surgery.", years: "Medical route, non-surgical" },
  { name: "Speech & language therapist", blurb: "Helps with speech, voice, communication and swallowing — including after ear or throat problems.", years: "3 yr degree" },
  { name: "Teacher of the Deaf", blurb: "Specialist teacher supporting deaf children in school and at home.", years: "Teaching degree + specialism" },
  { name: "Hearing therapist", blurb: "Helps people live with hearing loss and tinnitus — the part that isn't surgery.", years: "Postgraduate route" },
  { name: "Operating department practitioner", blurb: "Runs the theatre alongside the surgeon and anaesthetist. Nothing happens without them.", years: "3 yr degree" },
  { name: "Sign language interpreter", blurb: "Makes conversations possible between Deaf and hearing people, including in hospitals.", years: "BSL/ASL qualifications" }
];

const SHELF = [
  { title: "Direct Red: A Surgeon's Story", by: "Gabriel Weston", note: "Written by a British ENT surgeon. The closest you'll get to reading the actual job. Best 16+." },
  { title: "Volume Control", by: "David Owen", note: "All about hearing, deafness, noise and what we're doing to our ears. Very readable." },
  { title: "The Body: A Guide for Occupants", by: "Bill Bryson", note: "The friendliest tour of human anatomy there is. Great from about 12." },
  { title: "Kay's Anatomy", by: "Adam Kay", note: "The kids' version, and genuinely good for ages 9–14." },
  { title: "ENT UK — careers pages", by: "free online", note: "The actual professional body for ENT in the UK. Tells you exactly how the training works." },
  { title: "Khan Academy — Biology & Physics of sound", by: "free online", note: "Free, structured, and covers school biology plus the physics of waves you'll need." }
];

const FACTS = [
  "The three smallest bones in your entire body are all inside your ear.",
  "The stapes is about 3 mm long — roughly the size of a grain of rice, and an ENT surgeon operates on it.",
  "Inserting grommets is one of the commonest childhood operations in the world.",
  "A grommet is usually about 1.5 mm across, and it falls out by itself once the eardrum has grown.",
  "Your eardrum can heal its own small holes, often within a few weeks.",
  "The cochlea is coiled up like a snail shell — uncoil it and it's about 3 cm long.",
  "Hair cells in the human ear never grow back, which is why volume limits genuinely matter.",
  "Your ears keep working while you're asleep — your brain just stops paying attention.",
  "Children get more ear infections because the tube from ear to nose is short and nearly horizontal until they grow."
];
