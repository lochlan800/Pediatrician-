/* ------------------------------------------------------------------
   The lesson book.

   12 units — one per month. 6 lessons in each unit.
   The day you pick decides which lesson in that unit you get:
       lesson number = ((day - 1) % 6) + 1
   Your age decides the level:
       t1 = ages 7-10   t2 = ages 11-13   t3 = ages 14-18

   Every lesson assumes you know nothing at all. Any new word is
   explained in the lesson itself, in `words`.
------------------------------------------------------------------ */

const LEVELS = [
  { key: "t1", name: "Explorer", ages: "7 to 10", blurb: "Big ideas, plain words, lots of doing." },
  { key: "t2", name: "Learner", ages: "11 to 13", blurb: "How things actually work, with the real names for them." },
  { key: "t3", name: "Student", ages: "14 to 18", blurb: "Proper medical detail, close to what you meet at school and beyond." }
];

const CURRICULUM = [
{
m: 1, name: "January", topic: "How the body is built",
intro: "Before anything else, you need to know what a body is made of and how it is arranged. Everything in the rest of the year sits on top of this month.",
lessons: [
  {
    title: "Everything is made of cells",
    what: "Your whole body is built out of tiny living units called cells. They are far too small to see without a microscope. You have roughly 30 trillion of them, and almost all of them are working right now while you read this.",
    facts: [
      "A cell is the smallest thing that counts as alive.",
      "Different cells do different jobs — some carry oxygen, some fight germs, some make you move.",
      "Old cells wear out and get replaced. Your body builds millions of new cells every second."
    ],
    words: [{ w: "Cell", m: "The smallest living building block of the body." }],
    t1: {
      d: "Think of your body as a giant Lego model. Cells are the bricks — but these bricks are alive, and they can replace themselves when one wears out.",
      task: "Hold your hand up to a light. Everything you can see there — skin, blood, bone, nail — is made of cells doing different jobs.",
      q: "What is a cell?",
      a: "The smallest living building block of the body."
    },
    t2: {
      d: "Every cell has a control centre called the nucleus, which holds your DNA — the instruction manual for building and running you. Almost every cell in your body carries the same full set of instructions; they just use different pages of it.",
      task: "Write down three body parts and guess what job their cells must do. Then look one up and see if you were right.",
      q: "If nearly every cell has the same DNA, why is a muscle cell different from a skin cell?",
      a: "Because each cell only switches on the parts of the instructions it needs for its own job."
    },
    t3: {
      d: "Cells are specialised through gene expression — the same genome, but different genes switched on or off. Red blood cells go further and eject their nucleus entirely to make room for haemoglobin, which is why they cannot repair themselves and only survive about 120 days.",
      task: "Look up what a stem cell is and write two sentences on why they matter in medicine.",
      q: "Why do red blood cells have a limited lifespan of around 120 days?",
      a: "They lose their nucleus as they mature, so they cannot repair damage or make new proteins."
    }
  },
  {
    title: "Cells team up: tissues and organs",
    what: "Cells rarely work alone. Similar cells group together into a tissue, and different tissues combine into an organ — a body part with a specific job, like the heart or the stomach.",
    facts: [
      "Tissue = a group of similar cells doing the same job.",
      "Organ = several tissues working together on a bigger job.",
      "Your skin, heart, lungs, liver, brain and stomach are all organs."
    ],
    words: [
      { w: "Tissue", m: "A group of similar cells doing one job together." },
      { w: "Organ", m: "A body part made of several tissues, with a specific job." }
    ],
    t1: {
      d: "One football player cannot win a match. A team can. Cells are the players, tissues are the positions, and an organ is the whole team.",
      task: "Point to where you think your heart, lungs and stomach are. Then check — most people put the heart too far to the left.",
      q: "What is an organ?",
      a: "A body part made of different tissues working together on one job."
    },
    t2: {
      d: "There are four main tissue types: epithelial (covers and lines things, like skin), connective (holds things together, like bone and blood), muscle (moves things) and nervous (carries signals). Every organ is a mix of them.",
      task: "Take one organ — the heart — and list which of the four tissue types must be in it, and why.",
      q: "Name the four main tissue types.",
      a: "Epithelial, connective, muscle and nervous."
    },
    t3: {
      d: "Organs are grouped into organ systems, and most disease is best understood at the tissue level. Histology — studying tissue under a microscope — is how a lot of diagnosis is confirmed, including whether a lump is benign or malignant.",
      task: "Find out what a biopsy is and why a pathologist looks at tissue rather than at the whole organ.",
      q: "What does a histologist or pathologist actually examine?",
      a: "Thin slices of tissue under a microscope, to see how the cells are behaving."
    }
  },
  {
    title: "The body's systems",
    what: "Organs that work on the same overall task form an organ system. Doctors think in systems, and so does almost every medical exam you will ever sit.",
    facts: [
      "The circulatory system moves blood. The respiratory system handles breathing.",
      "The digestive system deals with food; the nervous system controls everything.",
      "There are around eleven systems, and they all depend on each other."
    ],
    words: [{ w: "Organ system", m: "A set of organs working together on one big job." }],
    t1: {
      d: "A school has systems too — the kitchen feeds everyone, the office runs things, the caretaker fixes things. Your body works the same way.",
      task: "Name three of your body's systems out loud and one job each does.",
      q: "Which system moves blood around your body?",
      a: "The circulatory system."
    },
    t2: {
      d: "The eleven systems are: circulatory, respiratory, digestive, nervous, musculoskeletal, endocrine (hormones), immune, urinary, reproductive, integumentary (skin) and lymphatic. Learn these now and you will use them for the rest of your life.",
      task: "Write the eleven systems in a list. Cover it up and try again tomorrow from memory.",
      q: "Which system uses hormones as chemical messengers?",
      a: "The endocrine system."
    },
    t3: {
      d: "Clinicians take a systems review — running through each system in turn asking about symptoms — precisely because it stops you missing something. A child with tummy pain might actually have a chest infection, and a systematic approach is what catches that.",
      task: "Write a short list of one question you would ask about each of six systems.",
      q: "Why does a doctor ask about systems that seem unrelated to the complaint?",
      a: "Because problems in one system often show up as symptoms in another, and a system-by-system sweep stops you missing them."
    }
  },
  {
    title: "Where everything sits",
    what: "Doctors need to describe exactly where something is, without any confusion. So medicine has its own precise vocabulary for position, and it always describes the body from the patient's point of view.",
    facts: [
      "The patient's left is their left — not yours as you face them.",
      "The chest holds the heart and lungs; the abdomen holds the stomach, liver, guts and kidneys.",
      "The diaphragm is the muscle sheet that divides the chest from the abdomen."
    ],
    words: [
      { w: "Abdomen", m: "The part of your body between your chest and your hips — your tummy." },
      { w: "Anterior / posterior", m: "Front / back." }
    ],
    t1: {
      d: "If you tell a doctor your pain is on the left, they mean YOUR left. That sounds obvious, but it matters enormously in a hospital.",
      task: "Stand facing someone and both point to your own left elbow. Notice you are pointing in opposite directions.",
      q: "Whose left does a doctor mean by 'the left side'?",
      a: "The patient's own left."
    },
    t2: {
      d: "The key terms are: anterior (front), posterior (back), superior (above), inferior (below), medial (towards the middle) and lateral (towards the outside). Your thumb is lateral to your little finger when your palm faces forwards.",
      task: "Describe where your belly button is using three of these words.",
      q: "What does 'medial' mean?",
      a: "Closer to the midline, the imaginary line down the centre of the body."
    },
    t3: {
      d: "All of this is defined relative to the anatomical position: standing, facing forwards, arms at the sides, palms forward. The abdomen is also divided into nine regions or four quadrants — pain in the right lower quadrant is a classic hint towards appendicitis.",
      task: "Draw the four abdominal quadrants and write in one organ found in each.",
      q: "Pain in the right lower quadrant should make you think of what, until proven otherwise?",
      a: "Appendicitis."
    }
  },
  {
    title: "Staying the same inside",
    what: "The world outside you changes constantly — hot, cold, wet, dry. Inside, your body works extremely hard to keep everything almost perfectly steady. That balancing act is called homeostasis, and losing it is what being seriously ill really means.",
    facts: [
      "Your core temperature stays near 37°C whether it is snowing or boiling outside.",
      "Your body controls water, salt, sugar, oxygen and acidity within very narrow limits.",
      "Sweating, shivering, thirst and hunger are all homeostasis in action."
    ],
    words: [{ w: "Homeostasis", m: "The body keeping its inside conditions steady no matter what happens outside." }],
    t1: {
      d: "Think of a thermostat on a heater. Too cold, it switches on. Too hot, it switches off. Your body has dozens of thermostats like that, all running at once.",
      task: "Next time you shiver or sweat, say to yourself: that is homeostasis working.",
      q: "What is your body doing when it makes you shiver?",
      a: "Warming itself back up — shivering muscles make heat."
    },
    t2: {
      d: "Most of it works by negative feedback: a sensor detects a change, a control centre (often in the brain) responds, and the change is reversed. Blood sugar is a good example — insulin brings it down, glucagon brings it up.",
      task: "Draw a loop showing what happens when you get too hot, and how the loop switches itself off.",
      q: "What is negative feedback?",
      a: "When a change triggers a response that cancels the change out, bringing things back to normal."
    },
    t3: {
      d: "Homeostatic control is why vital signs are so informative. A child's body compensates hard, so their blood pressure can look normal until quite late — then it drops suddenly. Recognising the compensating child before they decompensate is one of the most important skills in paediatrics.",
      task: "Look up 'compensated shock' and write down two signs that appear before blood pressure falls.",
      q: "Why can a seriously unwell child's blood pressure look reassuringly normal?",
      a: "Because children compensate very efficiently — until they suddenly cannot, and then they deteriorate fast."
    }
  },
  {
    title: "What 'normal' actually means",
    what: "In medicine, normal is a range, not a single number — and for children it changes with age. A heart rate that is completely normal for a newborn would be alarming in a teenager.",
    facts: [
      "A newborn's resting heart rate is often around 100-160 beats per minute.",
      "A calm adult's is nearer 60-100.",
      "This is the single biggest reason children need their own specialists."
    ],
    words: [{ w: "Vital signs", m: "The basic measurements of how a body is doing: heart rate, breathing rate, temperature, blood pressure and oxygen level." }],
    t1: {
      d: "Small animals have fast hearts and big animals have slow ones. A mouse's heart races; an elephant's is slow. Children sit closer to the mouse end than adults do.",
      task: "Find your pulse on your wrist or neck and count the beats for 15 seconds, then multiply by four.",
      q: "Does a baby's heart normally beat faster or slower than yours?",
      a: "Faster."
    },
    t2: {
      d: "Because normal shifts with age, paediatric hospitals use age-banded charts rather than one set of numbers. The same reasoning applies to breathing rate, blood pressure and even how much blood a child can safely lose.",
      task: "Measure your resting pulse three times today — after waking, after sitting quietly, and after running. Write the three numbers down.",
      q: "Why does a paediatric ward use age-banded observation charts?",
      a: "Because normal ranges for vital signs change as a child grows."
    },
    t3: {
      d: "This is also why paediatric early warning scores (PEWS) exist: they convert age-adjusted observations into a score that flags deterioration early. Getting the wrong age band is a genuine source of clinical error.",
      task: "Find an example paediatric early warning chart online and note which observations it scores.",
      q: "What is a PEWS chart for?",
      a: "Spotting a deteriorating child early by scoring age-adjusted vital signs."
    }
  }
]
},
{
m: 2, name: "February", topic: "The heart and blood",
intro: "The heart is a muscle that has been squeezing since before you were born and will not stop until the day you die. This month is about how that works.",
lessons: [
  {
    title: "The heart is a pump",
    what: "Your heart is a muscle roughly the size of your own clenched fist. Its only job is to squeeze, pushing blood out into tubes that carry it everywhere in your body. It does this around 100,000 times a day without you ever thinking about it.",
    facts: [
      "The heart sits in the middle of your chest, tilted slightly to the left.",
      "It is made of a special muscle, cardiac muscle, that never gets tired.",
      "It started beating about three weeks after you began to grow, before your mother even knew you existed."
    ],
    words: [{ w: "Cardiac", m: "Anything to do with the heart." }],
    t1: {
      d: "Squeeze a rolled-up sock in your fist, once a second, for a minute. That is what your heart is doing — except it never stops for a rest.",
      task: "Clench your fist. That is roughly the size of your own heart. It grows as you do.",
      q: "What is the heart's job?",
      a: "To pump blood around the body."
    },
    t2: {
      d: "Cardiac muscle is unlike any other muscle: it generates its own electrical signal. Even a heart removed from the body will keep beating for a while, because the signal starts inside the heart itself, at a patch called the sinoatrial node.",
      task: "Feel your pulse, then jump up and down twenty times and feel it again. You just watched your heart respond to demand.",
      q: "Where does a heartbeat's electrical signal start?",
      a: "In the sinoatrial node, the heart's own natural pacemaker."
    },
    t3: {
      d: "The conducting system runs sinoatrial node to atrioventricular node, then down the bundle of His and Purkinje fibres. An ECG records exactly this: the P wave is the atria contracting, the QRS complex the ventricles, and the T wave the ventricles resetting.",
      task: "Find a normal ECG trace and label the P wave, QRS complex and T wave.",
      q: "What does the QRS complex on an ECG represent?",
      a: "Depolarisation of the ventricles — the main pumping chambers contracting."
    }
  },
  {
    title: "The double loop",
    what: "Blood does not travel in one circle but two. One short loop goes to the lungs to pick up oxygen. One long loop delivers that oxygen to the whole body. The heart is split down the middle so it can run both loops at once.",
    facts: [
      "The heart has four chambers: two on the right, two on the left.",
      "Right side sends blood to the lungs. Left side sends it to the body.",
      "The left side is more muscular, because it pushes much further."
    ],
    words: [
      { w: "Artery", m: "A tube carrying blood away from the heart." },
      { w: "Vein", m: "A tube carrying blood back towards the heart." }
    ],
    t1: {
      d: "Picture a bus route with two loops from the same station. The short loop goes to the oxygen depot — your lungs. The long loop delivers oxygen everywhere else.",
      task: "Trace a finger from your chest to your lungs and back, then from your chest to your toes and back. Two loops, one heart.",
      q: "Which loop is shorter, the one to the lungs or the one to the body?",
      a: "The one to the lungs."
    },
    t2: {
      d: "In order: body → right atrium → right ventricle → lungs → left atrium → left ventricle → body. Valves between the chambers stop blood flowing backwards, and the sound of those valves snapping shut is the lub-dub you hear through a stethoscope.",
      task: "Say the six-step order out loud until you can do it without looking.",
      q: "Which chamber pumps blood out to the whole body?",
      a: "The left ventricle."
    },
    t3: {
      d: "Note the naming trap: pulmonary arteries carry deoxygenated blood and pulmonary veins carry oxygenated blood. Arteries and veins are named by direction of travel, not by what they contain. Before birth the loops are different again — the ductus arteriosus lets blood bypass the lungs, and it normally closes within days of birth.",
      task: "Look up patent ductus arteriosus and write one sentence on why it matters in premature babies.",
      q: "Do pulmonary arteries carry oxygenated or deoxygenated blood?",
      a: "Deoxygenated — they carry blood from the heart to the lungs to collect oxygen."
    }
  },
  {
    title: "What blood is made of",
    what: "Blood looks like a single red liquid, but it is really four things mixed together: red cells, white cells, platelets, and a straw-coloured liquid called plasma that carries them all.",
    facts: [
      "Red cells carry oxygen and give blood its colour.",
      "White cells fight infection.",
      "Platelets are tiny fragments that plug leaks.",
      "Plasma is mostly water and makes up over half of blood."
    ],
    words: [{ w: "Plasma", m: "The pale yellow liquid part of blood that everything else floats in." }],
    t1: {
      d: "Blood is like a busy river. The water is plasma, and the boats floating in it are the cells — some carrying oxygen, some hunting germs.",
      task: "Look at a healing scab. That is platelets and clotting proteins that did their job.",
      q: "Which blood cells carry oxygen?",
      a: "Red blood cells."
    },
    t2: {
      d: "Red cells are packed with haemoglobin, an iron-containing protein that grabs oxygen in the lungs and releases it in the tissues. If you do not have enough haemoglobin you have anaemia, and you feel tired and look pale because less oxygen is reaching your body.",
      task: "Find out which foods are high in iron, and note three of them.",
      q: "What does haemoglobin do?",
      a: "Carries oxygen around the body inside red blood cells."
    },
    t3: {
      d: "A full blood count is one of the commonest tests in medicine, reporting haemoglobin, white cell count and platelets. In paediatrics the normal values shift with age — a newborn's haemoglobin is much higher than a toddler's, then dips at around 2-3 months in the physiological nadir.",
      task: "Look up sickle cell disease and describe in two sentences what goes wrong with the red cells.",
      q: "Name the three cell lines reported on a full blood count.",
      a: "Red cells, white cells and platelets."
    }
  },
  {
    title: "Pulse and blood pressure",
    what: "Every time your heart squeezes, it sends a pressure wave down your arteries. You can feel that wave at your wrist or neck — that is your pulse. Blood pressure is how hard the blood is pushing on the artery walls.",
    facts: [
      "Pulse rate tells you how fast the heart is beating.",
      "Blood pressure is written as two numbers, like 110/70.",
      "The top number is when the heart squeezes; the bottom is when it relaxes."
    ],
    words: [
      { w: "Systolic", m: "The pressure when the heart squeezes — the top number." },
      { w: "Diastolic", m: "The pressure when the heart relaxes — the bottom number." }
    ],
    t1: {
      d: "Press two fingers gently on the thumb side of your wrist. Feel a soft tapping? Each tap is one squeeze of your heart, arriving as a wave.",
      task: "Count your pulse for 30 seconds and double it. Do it again after ten star jumps.",
      q: "What causes your pulse?",
      a: "The pressure wave from each heartbeat travelling down the arteries."
    },
    t2: {
      d: "Never use your thumb to take a pulse — your thumb has its own noticeable pulse and you can end up counting yourself. Also note the rhythm, not just the rate: is it regular or irregular?",
      task: "Take a family member's pulse with two fingers, counting for a full 60 seconds. Note rate and rhythm.",
      q: "Why should you not take a pulse with your thumb?",
      a: "Because the thumb has a strong pulse of its own, so you might count yours instead."
    },
    t3: {
      d: "In children, blood pressure cuff size matters enormously — a cuff that is too small reads falsely high. Tachycardia (a fast heart rate) is often the first vital sign to change in an unwell child, well before blood pressure moves.",
      task: "Find out what capillary refill time is, how it is measured, and what a normal result is.",
      q: "Which vital sign usually changes first in a deteriorating child?",
      a: "Heart rate — tachycardia appears well before blood pressure falls."
    }
  },
  {
    title: "How bleeding stops",
    what: "Cut yourself and the bleeding stops within minutes, without anyone doing anything. That is a remarkable chain of chemical reactions called clotting, and it has to be finely balanced — too little and you bleed, too much and you block a vessel.",
    facts: [
      "Platelets arrive first and stick together to plug the hole.",
      "Then proteins build a mesh of fibrin to hold the plug in place.",
      "A scab is that mesh, dried out, protecting the repair underneath."
    ],
    words: [{ w: "Clotting", m: "The process that turns liquid blood into a solid plug to stop bleeding." }],
    t1: {
      d: "Imagine a hole in a boat. First, crew members throw themselves at the gap — those are platelets. Then they nail netting across it — that is fibrin. Then it dries hard: a scab.",
      task: "Next time you get a small cut, watch how long it takes to stop bleeding. It is usually only a few minutes.",
      q: "What is a scab?",
      a: "A dried clot protecting a wound while the skin repairs underneath."
    },
    t2: {
      d: "Blood vessels also narrow immediately to reduce flow. The clotting cascade that follows needs vitamin K and calcium to work — which is exactly why newborn babies are offered a vitamin K injection at birth.",
      task: "Find out why newborn babies are given vitamin K, and write down what it prevents.",
      q: "Why are newborns given vitamin K?",
      a: "Because they are born with very little of it, and without it they are at risk of serious bleeding."
    },
    t3: {
      d: "Haemophilia is an inherited deficiency of a clotting factor — factor VIII in haemophilia A. It is X-linked recessive, which is why it overwhelmingly affects boys. Unexplained bruising in a child always needs careful thought: it may be a bleeding disorder, or it may be a safeguarding concern.",
      task: "Look up the pattern of bruising that would worry a paediatrician, and note two features.",
      q: "Why does haemophilia A mostly affect boys?",
      a: "It is X-linked recessive, and boys have only one X chromosome."
    }
  },
  {
    title: "Children's hearts are different",
    what: "A child's heart is not just a smaller adult heart. It beats faster, it is still developing, and around 1 in 100 babies is born with some difference in how their heart is built.",
    facts: [
      "Congenital heart conditions are the commonest type of birth difference.",
      "Many are mild and need no treatment at all.",
      "A heart murmur is an extra sound — most in children are completely harmless."
    ],
    words: [{ w: "Congenital", m: "Present from birth." }],
    t1: {
      d: "A murmur is just a whooshing sound between the normal lub-dubs, made by blood swirling. Most children who have one are completely healthy.",
      task: "Listen to your own heartbeat by pressing an ear against someone's chest. Count the lub-dubs.",
      q: "What does 'congenital' mean?",
      a: "Present from birth."
    },
    t2: {
      d: "Paediatric cardiologists tell innocent murmurs from significant ones using where the sound is loudest, when in the beat it happens, and whether the child has any other symptoms — feeding difficulties, poor growth, breathlessness or blue lips.",
      task: "Write down three symptoms that would make a doctor take a murmur seriously.",
      q: "What is an innocent murmur?",
      a: "A harmless heart sound in a healthy child that needs no treatment."
    },
    t3: {
      d: "Newborn pulse oximetry screening is used to detect duct-dependent congenital heart disease before the ductus arteriosus closes, because those babies can collapse suddenly in the first days of life. Every UK newborn also gets a full examination within 72 hours of birth.",
      task: "Look up the newborn and infant physical examination (NIPE) and list what it checks.",
      q: "Why is timing critical in duct-dependent congenital heart disease?",
      a: "Because when the ductus arteriosus closes after birth, the baby can deteriorate very rapidly."
    }
  }
]
},
{
m: 3, name: "March", topic: "Lungs and breathing",
intro: "You can go weeks without food and days without water, but only minutes without breathing. This month is about why, and about what goes wrong.",
lessons: [
  {
    title: "Why we breathe at all",
    what: "Every cell in your body burns fuel to make energy, and burning fuel needs oxygen. The waste product is carbon dioxide, which is poisonous if it builds up. Breathing brings oxygen in and pushes carbon dioxide out.",
    facts: [
      "You breathe roughly 20,000 times a day without deciding to.",
      "Air is only about 21% oxygen — most of it is nitrogen you never use.",
      "You breathe out the same nitrogen, less oxygen, and much more carbon dioxide."
    ],
    words: [{ w: "Oxygen", m: "The gas in air that your cells need to release energy from food." }],
    t1: {
      d: "A fire needs air to keep burning. Your cells are like millions of tiny controlled fires, and oxygen keeps them going.",
      task: "Hold your breath and count. Notice that the urge to breathe comes back long before you run out of oxygen.",
      q: "Which gas do you need to take in, and which do you need to get rid of?",
      a: "Take in oxygen, get rid of carbon dioxide."
    },
    t2: {
      d: "Here is the surprise: the urge to breathe is driven mainly by rising carbon dioxide, not by falling oxygen. Sensors in your brainstem detect CO2 and force you to breathe.",
      task: "Breathe fast for a few seconds, then notice you do not need to breathe for a moment afterwards. You blew off CO2 — do not repeat this more than once.",
      q: "What mainly triggers the urge to breathe?",
      a: "A rise in carbon dioxide, detected by the brainstem."
    },
    t3: {
      d: "Central chemoreceptors in the medulla respond to CO2 via changes in cerebrospinal fluid pH; peripheral chemoreceptors in the carotid and aortic bodies respond to low oxygen but only kick in significantly at low levels. That is why a pulse oximeter reading can look acceptable in a child who is already working extremely hard to breathe.",
      task: "Look up what a pulse oximeter measures and one situation where it can be misleading.",
      q: "Why can a normal oxygen saturation be falsely reassuring?",
      a: "Because a child can maintain saturation by working very hard to breathe, right up until they tire and drop suddenly."
    }
  },
  {
    title: "The journey of a breath",
    what: "Air travels in through your nose or mouth, down your windpipe, and into branching tubes that get smaller and smaller until they end in millions of tiny air sacs where the real work happens.",
    facts: [
      "The windpipe is called the trachea.",
      "It splits into two bronchi, one per lung, which branch into bronchioles.",
      "At the end sit the alveoli — around 300 million tiny air sacs."
    ],
    words: [
      { w: "Trachea", m: "The windpipe, the main tube from throat to lungs." },
      { w: "Alveoli", m: "The tiny air sacs at the end of the airways where oxygen crosses into the blood." }
    ],
    t1: {
      d: "Turn a tree upside down. The trunk is your windpipe, the branches are the tubes, and the leaves are the tiny air sacs. That is what your lungs look like inside.",
      task: "Breathe in through your nose slowly. Notice the air is warmed and moistened on the way — that is your nose doing a job.",
      q: "What is the trachea?",
      a: "The windpipe — the main tube carrying air to the lungs."
    },
    t2: {
      d: "Spread all your alveoli out flat and they would cover roughly half a tennis court. That enormous surface area is packed into your chest by folding it into millions of microscopic bubbles.",
      task: "Draw the airway from nose to alveolus and label five parts.",
      q: "Why do lungs need such a huge internal surface area?",
      a: "So enough oxygen can cross into the blood quickly enough to keep the body supplied."
    },
    t3: {
      d: "Children's airways are proportionally much narrower, and airway resistance rises with the fourth power of the radius — so a small amount of swelling causes a dramatic increase in the work of breathing. This single fact explains why croup and bronchiolitis hit small children so much harder than adults.",
      task: "Find out what stridor is and what it tells you about where the obstruction lies.",
      q: "Why does mild airway swelling affect a small child far more than an adult?",
      a: "Their airways are much narrower, and resistance rises steeply as the radius falls."
    }
  },
  {
    title: "The muscle you never think about",
    what: "You do not breathe with your lungs. Lungs are passive bags. You breathe with muscles — mainly the diaphragm, a dome of muscle under your lungs that flattens and pulls air in.",
    facts: [
      "The diaphragm separates the chest from the abdomen.",
      "When it flattens, the chest gets bigger and air rushes in.",
      "Muscles between your ribs help too, especially when you exert yourself."
    ],
    words: [{ w: "Diaphragm", m: "The dome-shaped muscle under the lungs that does most of the work of breathing." }],
    t1: {
      d: "Pull the plunger on a syringe and air rushes in. Your diaphragm is the plunger, and your chest is the syringe.",
      task: "Put a hand on your tummy and breathe deeply. If your hand rises, you are using your diaphragm properly.",
      q: "Which muscle does most of the work of breathing?",
      a: "The diaphragm."
    },
    t2: {
      d: "Breathing in is active — muscles contract. Breathing out at rest is passive: the muscles relax and the elastic lungs spring back. Hiccups are a sudden involuntary spasm of the diaphragm.",
      task: "Time how long your breath in takes compared with your breath out. Most people breathe out for longer.",
      q: "Is breathing out at rest active or passive?",
      a: "Passive — the lungs and chest wall recoil on their own."
    },
    t3: {
      d: "Infants are diaphragm-dependent and have very compliant chest walls, which is why they show recession — the chest wall sucking in between and below the ribs — when they struggle. Recession, nasal flaring, head bobbing and grunting are the classic signs of increased work of breathing in a child.",
      task: "Look up a video of intercostal recession in an infant and note what you can see.",
      q: "Name three signs of increased work of breathing in an infant.",
      a: "Recession, nasal flaring, grunting (also head bobbing and tracheal tug)."
    }
  },
  {
    title: "Where the swap happens",
    what: "In the alveoli, oxygen crosses from air into blood and carbon dioxide crosses the other way. The wall between them is astonishingly thin — thinner than a sheet of tissue paper.",
    facts: [
      "Gases move from where there is more of them to where there is less.",
      "The alveolar wall is about one cell thick.",
      "Each alveolus is wrapped in tiny blood vessels called capillaries."
    ],
    words: [{ w: "Diffusion", m: "Molecules spreading out from where they are crowded to where they are not." }],
    t1: {
      d: "Open a bottle of perfume in one corner of a room and eventually the whole room smells of it. Nobody carried it — it spread on its own. That is diffusion, and it is how oxygen gets into your blood.",
      task: "Breathe onto a cold mirror. The mist is water you breathed out — evidence your lungs give things back.",
      q: "How does oxygen get from the air sac into the blood?",
      a: "By diffusion — spreading from high concentration to low."
    },
    t2: {
      d: "The alveoli are lined with a slippery substance called surfactant that stops them collapsing shut. Premature babies often have not made enough of it yet, which is a major reason they need help breathing.",
      task: "Find out what surfactant does and why premature babies may be given it.",
      q: "What does surfactant do?",
      a: "Reduces surface tension so the alveoli do not collapse when you breathe out."
    },
    t3: {
      d: "Surfactant production ramps up from around 24-28 weeks of gestation and is more complete by 34-36 weeks. Antenatal corticosteroids given to the mother accelerate it, and artificial surfactant given down the endotracheal tube transformed survival in respiratory distress syndrome from the 1990s onwards.",
      task: "Read about neonatal respiratory distress syndrome and note how it is treated today.",
      q: "Why are corticosteroids given to a mother in preterm labour?",
      a: "To speed up fetal lung maturation and surfactant production before delivery."
    }
  },
  {
    title: "Coughs, sneezes and mucus",
    what: "Your airways are lined with sticky mucus and microscopic hairs that trap dust and germs and sweep them back up. Coughing and sneezing are how the rubbish gets ejected. They are not the illness — they are the defence.",
    facts: [
      "The tiny hairs are called cilia and they beat constantly.",
      "A sneeze can travel surprisingly fast and spread germs metres away.",
      "Green mucus does not automatically mean you need antibiotics."
    ],
    words: [{ w: "Cilia", m: "Microscopic hairs lining the airways that sweep mucus upwards." }],
    t1: {
      d: "Picture an escalator made of tiny waving hairs, carrying sticky rubbish up and out of your lungs all day long. That escalator is running right now.",
      task: "Sneeze into your elbow, not your hand. Work out why that stops more germs spreading.",
      q: "What is mucus in the airways for?",
      a: "To trap dust and germs so they can be swept out."
    },
    t2: {
      d: "Smoke paralyses the cilia, which is why smokers cough — the escalator stops and the rubbish has to be shifted the hard way. Colds are caused by viruses, and antibiotics do nothing at all against viruses.",
      task: "Count how many times you touch your face in ten minutes. Now think about handwashing.",
      q: "Do antibiotics work on the common cold?",
      a: "No — colds are viral, and antibiotics only work on bacteria."
    },
    t3: {
      d: "In cystic fibrosis a faulty CFTR channel makes secretions thick and sticky, the mucociliary escalator fails, and chronic lung infection follows. It is screened for in the UK newborn blood spot test in the first week of life.",
      task: "Find out what the newborn blood spot test screens for and name three of the conditions.",
      q: "Why do children with cystic fibrosis get repeated chest infections?",
      a: "Thick sticky mucus cannot be cleared, so bacteria colonise the airways."
    }
  },
  {
    title: "When breathing goes wrong: asthma",
    what: "Asthma is a condition where the airways become inflamed and twitchy. They narrow, swell and fill with mucus, making it hard to push air out. It is one of the commonest long-term conditions in children.",
    facts: [
      "Typical symptoms are wheeze, cough, breathlessness and chest tightness.",
      "Triggers include colds, exercise, cold air, dust, pets and pollen.",
      "Blue inhalers relax the airways quickly; brown ones prevent inflammation over time."
    ],
    words: [{ w: "Wheeze", m: "A whistling sound made by air squeezing through narrowed airways." }],
    t1: {
      d: "Try breathing out through a straw. That tightness is roughly what an asthma attack feels like — and it is worse breathing out than in.",
      task: "Ask an adult if anyone in your family has asthma, and what their triggers are.",
      q: "What does a blue reliever inhaler do?",
      a: "Relaxes the muscles around the airways so they open up quickly."
    },
    t2: {
      d: "Two things narrow the airway: muscle spasm around it and inflammation inside it. Relievers fix the spasm within minutes; preventers reduce the inflammation over weeks. That is why preventers must be taken every day even when you feel completely well.",
      task: "Find out what a spacer is and why children are advised to use one with an inhaler.",
      q: "Why must a preventer inhaler be taken even on good days?",
      a: "Because it works slowly on inflammation, preventing attacks rather than treating them."
    },
    t3: {
      d: "A silent chest in an acute asthma attack is an emergency sign, not an improvement: it means too little air is moving to make any wheeze at all. Severity is assessed on work of breathing, ability to talk, oxygen saturation and peak flow against the child's own best.",
      task: "Look up the features of life-threatening asthma in children and note four of them.",
      q: "Why is a silent chest alarming in an asthma attack?",
      a: "Because airflow has fallen so low that no wheeze can be produced — it signals imminent respiratory failure."
    }
  }
]
},
{
m: 4, name: "April", topic: "Bones and muscles",
intro: "The skeleton is not a dead frame. It is living, growing tissue that makes your blood, stores your minerals and rebuilds itself constantly — and in a child it is still under construction.",
lessons: [
  {
    title: "Bones are alive",
    what: "People imagine bones as dry sticks, but living bone is moist, pink where blood runs through it, and full of cells. It has its own blood supply and nerves, which is exactly why breaking one hurts so much.",
    facts: [
      "Bone is constantly broken down and rebuilt throughout your life.",
      "It stores calcium and phosphate for the rest of the body to use.",
      "Blood cells are made in the soft marrow inside."
    ],
    words: [{ w: "Marrow", m: "The soft tissue inside bones where new blood cells are made." }],
    t1: {
      d: "Bone is more like a living tree than a dead stick. It grows, repairs itself, and is busy inside all the time.",
      task: "Press along your shin bone. That hard edge just under the skin is the front of your tibia.",
      q: "What is made inside bone marrow?",
      a: "New blood cells."
    },
    t2: {
      d: "Two cell types run the rebuilding: osteoblasts build bone up, osteoclasts break it down. Weight-bearing exercise tells osteoblasts to work harder, which is why running and jumping build stronger bones than sitting still.",
      task: "List three activities that load your bones, and three that do not.",
      q: "Which cells build new bone?",
      a: "Osteoblasts."
    },
    t3: {
      d: "In children, most blood production happens in the marrow of many bones; in adults it retreats mainly to the axial skeleton — pelvis, sternum, vertebrae. Rickets, caused by vitamin D deficiency, softens growing bone and still occurs in the UK today.",
      task: "Look up the signs of rickets in a child and note two.",
      q: "Which vitamin deficiency causes rickets?",
      a: "Vitamin D."
    }
  },
  {
    title: "300 bones down to 206",
    what: "A newborn baby has around 300 bones. An adult has about 206. Nothing is lost — many separate bones simply fuse together as a child grows.",
    facts: [
      "A baby's skull is in separate plates so the head can pass through birth.",
      "The gaps between the plates are the fontanelles, the soft spots.",
      "The last bones to finish fusing do so in the early twenties."
    ],
    words: [{ w: "Fontanelle", m: "A soft gap between the bones of a baby's skull." }],
    t1: {
      d: "Imagine a jigsaw where the pieces slowly glue together as you get older. That is your skeleton growing up.",
      task: "Feel the top of your own head. Yours fused long ago — but a baby's has a soft, pulsing patch.",
      q: "Why does a baby have soft spots on its head?",
      a: "So the skull can flex during birth and the brain can grow quickly."
    },
    t2: {
      d: "The posterior fontanelle usually closes around 2 months and the anterior between about 9 and 18 months. Doctors check them: a sunken fontanelle can suggest dehydration, and a bulging one can suggest raised pressure inside the skull.",
      task: "Write down what a sunken and a bulging fontanelle might each suggest.",
      q: "Roughly when does the anterior fontanelle close?",
      a: "Usually between 9 and 18 months."
    },
    t3: {
      d: "Growth happens at the epiphyseal growth plates, which are cartilage until they fuse. Because they are weaker than surrounding bone, children fracture through them — the Salter-Harris classification describes these injuries, and damage there can affect future growth.",
      task: "Look up the Salter-Harris classification and note how many types there are.",
      q: "Why are growth plate injuries taken so seriously in children?",
      a: "Damage there can disturb future bone growth, causing deformity or limb length difference."
    }
  },
  {
    title: "Joints: how you bend",
    what: "A joint is anywhere two bones meet. Different shapes allow different movements, and slippery cartilage plus lubricating fluid stops the ends grinding against each other.",
    facts: [
      "Hinge joints like the elbow and knee bend one way only.",
      "Ball and socket joints like the hip and shoulder rotate in all directions.",
      "Ligaments hold bone to bone; tendons attach muscle to bone."
    ],
    words: [
      { w: "Ligament", m: "A tough band joining bone to bone." },
      { w: "Tendon", m: "A tough cord joining muscle to bone." }
    ],
    t1: {
      d: "Your elbow works like a door hinge — one direction only. Your shoulder works like a joystick — it goes everywhere.",
      task: "Try to bend your elbow sideways. Now circle your arm at the shoulder. Two different joint designs.",
      q: "What does a ligament join?",
      a: "Bone to bone."
    },
    t2: {
      d: "A sprain is a stretched or torn ligament; a strain is a stretched or torn muscle or tendon. Cartilage on the bone ends is smoother than ice on ice, and joint fluid makes it smoother still.",
      task: "Find your Achilles tendon at the back of your ankle and feel it move as you rise onto your toes.",
      q: "What is the difference between a sprain and a strain?",
      a: "A sprain injures a ligament; a strain injures a muscle or tendon."
    },
    t3: {
      d: "Developmental dysplasia of the hip is screened for in every newborn using the Ortolani and Barlow manoeuvres, because a hip that is not seated properly in its socket must be treated early — often in a Pavlik harness — to develop normally.",
      task: "Look up the risk factors for developmental dysplasia of the hip and note three.",
      q: "Why is DDH screened for in the first days of life?",
      a: "Because early treatment allows the hip joint to develop normally; late treatment is much harder."
    }
  },
  {
    title: "Muscles only pull",
    what: "A muscle can do exactly one thing: shorten. It can pull, but it can never push. That is why muscles come in opposing pairs — one pulls a joint one way, its partner pulls it back.",
    facts: [
      "You have over 600 skeletal muscles.",
      "Biceps and triceps are a classic opposing pair at the elbow.",
      "Some muscles, like the heart and those in your gut, work without you deciding."
    ],
    words: [{ w: "Skeletal muscle", m: "Muscle attached to bone that you can control on purpose." }],
    t1: {
      d: "A muscle is like a rope: you can pull something with it, but you cannot push anything with a rope. So you need a second rope on the other side.",
      task: "Bend your elbow and feel the top of your arm bulge. Straighten it and feel the back go firm instead.",
      q: "Can a muscle push?",
      a: "No — it can only pull by shortening."
    },
    t2: {
      d: "There are three muscle types: skeletal (voluntary), smooth (in gut and blood vessels, involuntary) and cardiac (heart only). Muscle burns energy even at rest, which is part of how your body makes heat.",
      task: "Name the opposing muscle pair at the front and back of your thigh.",
      q: "Name the three types of muscle.",
      a: "Skeletal, smooth and cardiac."
    },
    t3: {
      d: "Muscular dystrophies are inherited conditions where muscle progressively breaks down. Duchenne muscular dystrophy is X-linked, usually noticed between ages 2 and 5, and Gower's sign — a child walking their hands up their legs to stand — is a classic finding.",
      task: "Look up Gower's sign and describe what it demonstrates.",
      q: "What does Gower's sign indicate?",
      a: "Weakness of the proximal muscles around the hips and thighs."
    }
  },
  {
    title: "Breaks and how they heal",
    what: "Bone heals itself. A blood clot forms at the break, soft tissue bridges the gap, then new bone hardens across it. A cast does not heal the bone — it just holds it still so the bone can do its own work.",
    facts: [
      "Children's bones heal faster than adults'.",
      "Children can get greenstick fractures, where the bone bends and cracks like a young twig.",
      "A broken bone in a non-mobile baby is always taken very seriously."
    ],
    words: [{ w: "Fracture", m: "The medical word for a broken bone — any break, big or small." }],
    t1: {
      d: "Snap a dry twig and it breaks clean through. Bend a fresh green twig and it splits partway but stays joined. Children's bones behave like the green twig.",
      task: "Ask someone in your family if they have ever broken a bone, and how long it took to heal.",
      q: "What does a plaster cast actually do?",
      a: "Holds the bone still so it can heal itself in the right position."
    },
    t2: {
      d: "Healing runs through stages: haematoma, soft callus, hard callus, then remodelling that can take months. Children remodel so well that a slightly imperfect alignment often straightens out on its own.",
      task: "Draw the four stages of fracture healing in order.",
      q: "Why do children's fractures often need less perfect alignment than adults'?",
      a: "Because growing bone remodels and straightens itself over time."
    },
    t3: {
      d: "Certain fracture patterns raise safeguarding concerns: fractures in a child who is not yet walking, posterior rib fractures, metaphyseal corner fractures, or multiple fractures of different ages. Recognising these and escalating appropriately is a core paediatric responsibility.",
      task: "Read about the paediatric safeguarding process and write down who a doctor would involve.",
      q: "Why is a femoral fracture in a non-mobile infant concerning?",
      a: "A baby who cannot walk cannot generate that force accidentally, so non-accidental injury must be considered."
    }
  },
  {
    title: "Building a skeleton that lasts",
    what: "Most of the bone you will ever have is laid down before you turn about 20. What you do as a child and teenager sets your peak bone mass for the rest of your life.",
    facts: [
      "Calcium is the main mineral in bone; dairy, tinned fish, leafy greens and fortified foods supply it.",
      "Vitamin D lets you absorb calcium, and most of it comes from sunlight on skin.",
      "Jumping, running and lifting all signal bone to strengthen."
    ],
    words: [{ w: "Peak bone mass", m: "The maximum bone strength you reach, usually in your twenties." }],
    t1: {
      d: "You are building the skeleton you will use when you are eighty. Every run, jump and glass of milk goes into it.",
      task: "Do twenty jumps today. You just sent a build signal to your bones.",
      q: "Which mineral makes bones hard?",
      a: "Calcium."
    },
    t2: {
      d: "In the UK, everyone is advised to consider a vitamin D supplement in autumn and winter because the sunlight is too weak to make enough. Breastfed babies are advised a daily supplement all year.",
      task: "Check whether anyone in your house takes vitamin D, and find out the recommended daily amount.",
      q: "Why is vitamin D advised in UK winters?",
      a: "Sunlight is too weak from October to March for the skin to make enough."
    },
    t3: {
      d: "Osteoporosis is often described as a paediatric disease with geriatric consequences: bone accrued in adolescence largely determines fracture risk fifty years later. Adolescents with restrictive eating, chronic illness or long-term steroid use are at particular risk.",
      task: "Find out how a DEXA scan works and what it measures.",
      q: "Why is osteoporosis called a paediatric disease with geriatric consequences?",
      a: "Because peak bone mass is built in childhood and adolescence, and that determines later fracture risk."
    }
  }
]
},
{
m: 5, name: "May", topic: "The brain and nerves",
intro: "Three pounds of tissue that runs everything, learns constantly, and is more changeable in childhood than at any other time in life.",
lessons: [
  {
    title: "The control room",
    what: "Your brain is made of about 86 billion nerve cells called neurons. They talk to each other with tiny electrical and chemical signals. Every thought, movement, memory and feeling you have ever had is those signals firing.",
    facts: [
      "The brain uses about a fifth of your body's energy despite being only 2% of your weight.",
      "Neurons pass signals across small gaps called synapses.",
      "The brain never switches off, not even in deep sleep."
    ],
    words: [
      { w: "Neuron", m: "A nerve cell that carries electrical signals." },
      { w: "Synapse", m: "The tiny gap where one neuron passes a message to the next." }
    ],
    t1: {
      d: "Think of billions of tiny wires passing messages by lighting up in patterns. Reading this sentence is one of those patterns.",
      task: "Close your eyes and touch your nose. Your brain just did complex maths without you noticing.",
      q: "What is a neuron?",
      a: "A nerve cell that carries electrical signals."
    },
    t2: {
      d: "Signals cross synapses using chemicals called neurotransmitters — dopamine, serotonin and others. Many medicines, from painkillers to antidepressants, work by changing what happens at these gaps.",
      task: "Look up one neurotransmitter and write a sentence on what it is involved in.",
      q: "What carries a signal across a synapse?",
      a: "A neurotransmitter — a chemical messenger."
    },
    t3: {
      d: "A neuron fires by action potential: sodium rushes in, the membrane depolarises, and the signal travels down the axon. Myelin insulates the axon so signals jump between gaps — saltatory conduction — making transmission far faster. Myelination continues well into the twenties.",
      task: "Find out what happens in multiple sclerosis and relate it to myelin.",
      q: "What does myelin do?",
      a: "Insulates axons so electrical signals travel much faster."
    }
  },
  {
    title: "Parts of the brain",
    what: "Different regions of the brain specialise. Damage one area and you lose a specific ability, which is how scientists first worked out what each part does.",
    facts: [
      "The cerebrum handles thinking, senses and voluntary movement.",
      "The cerebellum at the back coordinates balance and fine movement.",
      "The brainstem controls breathing, heart rate and consciousness."
    ],
    words: [{ w: "Cerebellum", m: "The part at the back of the brain that coordinates movement and balance." }],
    t1: {
      d: "Think of a company: the cerebrum makes the decisions, the cerebellum makes the movements smooth, and the brainstem keeps the lights on.",
      task: "Stand on one leg with your eyes shut. That wobble is your cerebellum working overtime.",
      q: "Which part controls balance and coordination?",
      a: "The cerebellum."
    },
    t2: {
      d: "The cerebrum has four lobes: frontal (planning, personality, decisions), parietal (touch and space), temporal (hearing and memory) and occipital (vision). The frontal lobe is the last to fully mature — well into the twenties.",
      task: "Draw a side view of the brain and label the four lobes.",
      q: "Which lobe processes vision?",
      a: "The occipital lobe, at the back."
    },
    t3: {
      d: "Late frontal lobe maturation has real consequences: adolescent risk-taking is partly neurodevelopmental, not simply behavioural. Understanding this changes how you talk to teenagers about risk — and it is a genuine part of adolescent medicine.",
      task: "Read about adolescent brain development and note one implication for how doctors counsel teenagers.",
      q: "Why is adolescent risk-taking partly biological?",
      a: "The frontal lobe, which handles impulse control and long-term planning, matures later than the reward systems."
    }
  },
  {
    title: "The body's wiring",
    what: "Nerves run from the brain down the spinal cord and out to every part of your body. Some carry information in — touch, pain, temperature. Others carry commands out to your muscles.",
    facts: [
      "The spinal cord is protected inside the bones of your spine.",
      "Sensory nerves carry information towards the brain.",
      "Motor nerves carry instructions away from the brain."
    ],
    words: [{ w: "Spinal cord", m: "The thick bundle of nerves running down inside your backbone." }],
    t1: {
      d: "Imagine a school with one huge cable running from the head teacher's office to every classroom, carrying messages both ways all day.",
      task: "Get someone to touch your back lightly while your eyes are closed and try to say exactly where. Some areas are far more sensitive than others.",
      q: "Which nerves carry instructions to your muscles?",
      a: "Motor nerves."
    },
    t2: {
      d: "There is also an automatic system you never control: the autonomic nervous system. Its sympathetic branch produces fight or flight, and its parasympathetic branch produces rest and digest.",
      task: "List three things your body does automatically when you are frightened.",
      q: "Which branch of the autonomic system causes fight or flight?",
      a: "The sympathetic branch."
    },
    t3: {
      d: "Spina bifida occurs when the neural tube fails to close in early pregnancy, and folic acid taken before conception and in early pregnancy substantially reduces the risk. That is why folic acid supplementation is public health advice for anyone who might become pregnant.",
      task: "Look up when the neural tube closes in pregnancy and why timing matters for folic acid.",
      q: "Why must folic acid be taken before conception rather than later?",
      a: "The neural tube closes within the first month, often before pregnancy is even known."
    }
  },
  {
    title: "Reflexes: acting before you think",
    what: "Touch something hot and your hand pulls back before you feel the pain. That is a reflex: the signal goes to the spinal cord and straight back out, skipping the brain entirely to save time.",
    facts: [
      "Reflexes are faster because the message travels a shorter route.",
      "Doctors test reflexes with a tendon hammer to check the nervous system.",
      "Babies have special reflexes that disappear as they develop."
    ],
    words: [{ w: "Reflex", m: "An automatic response that happens without you deciding to do it." }],
    t1: {
      d: "It is like a fire alarm wired directly to the sprinklers. Nobody has to phone the head teacher first — that would take too long.",
      task: "Sit with your legs crossed and tap just below your kneecap. Your leg may kick on its own.",
      q: "Why are reflexes faster than deliberate movements?",
      a: "The signal goes only to the spinal cord and back, not up to the brain."
    },
    t2: {
      d: "Newborn reflexes include the Moro or startle reflex, the rooting reflex that helps a baby find the breast, the grasp reflex and the stepping reflex. They should fade on a predictable schedule; reflexes that persist too long can signal a developmental problem.",
      task: "Look up the Moro reflex and describe what a baby does.",
      q: "What is the rooting reflex for?",
      a: "It helps a newborn turn towards a touch on the cheek to find milk."
    },
    t3: {
      d: "Primitive reflexes are assessed as part of neurodevelopmental examination. Persistence beyond the expected age, marked asymmetry, or reappearance later can point to cerebral palsy or another neurological condition, prompting referral.",
      task: "Find the usual age by which the Moro reflex disappears.",
      q: "Why does a persisting primitive reflex concern a paediatrician?",
      a: "It can indicate a problem with normal neurological development."
    }
  },
  {
    title: "How a brain learns",
    what: "Learning physically changes your brain. Connections that get used repeatedly grow stronger; connections that go unused are pruned away. A child's brain does this faster than at any other time in life.",
    facts: [
      "This ability to rewire is called neuroplasticity.",
      "Sleep is when a lot of learning gets consolidated into memory.",
      "Repeating something over spaced-out days beats cramming it in one go."
    ],
    words: [{ w: "Neuroplasticity", m: "The brain's ability to change and rewire itself through experience." }],
    t1: {
      d: "Walk across a field once and you leave no path. Walk the same line every day and a track appears. Your brain works exactly like that field.",
      task: "Pick one fact from this lesson and say it out loud tomorrow morning without looking. That is you strengthening a path.",
      q: "What happens to brain connections you never use?",
      a: "They get pruned away."
    },
    t2: {
      d: "This is why spaced repetition works: reviewing something after a day, then three days, then a week, produces far stronger memory than the same total time spent in one session. Use it for every exam you ever take.",
      task: "Take one fact you learned this month and schedule three reviews: tomorrow, in three days, in a week.",
      q: "What is spaced repetition?",
      a: "Reviewing material at increasing intervals rather than all at once."
    },
    t3: {
      d: "Plasticity is greatest during critical periods, which is why untreated congenital cataract or hearing loss must be corrected early — the visual or auditory cortex needs input during that window to develop normally. It is also why newborn hearing screening exists.",
      task: "Look up the newborn hearing screening programme and note when it is done.",
      q: "Why is early treatment of congenital hearing loss so important?",
      a: "The brain needs sound input during a critical developmental period to develop language and hearing pathways normally."
    }
  },
  {
    title: "Protecting your head",
    what: "The brain floats in fluid inside a hard skull, but a hard enough knock still shakes it. Concussion is a temporary disturbance of brain function after a head injury, and it needs real rest to recover.",
    facts: [
      "You do not have to be knocked out to have concussion.",
      "Headache, confusion, dizziness, nausea and blurred vision are common signs.",
      "Going back to sport too soon, before recovery, is genuinely dangerous."
    ],
    words: [{ w: "Concussion", m: "A temporary disturbance of brain function caused by a knock to the head." }],
    t1: {
      d: "Think of a jelly in a plastic box. Shake the box and the jelly wobbles even though the box is fine. Your brain is the jelly.",
      task: "Check that any helmet you own actually fits — two fingers above the eyebrows, straps snug.",
      q: "Do you have to be knocked out to have concussion?",
      a: "No."
    },
    t2: {
      d: "Red flags after a head injury include repeated vomiting, worsening headache, drowsiness, a seizure, weakness, clear fluid from the nose or ears, or unequal pupils. Any of those means urgent medical assessment.",
      task: "Memorise three head injury red flags you would tell a friend to watch for.",
      q: "Name two red flag symptoms after a head injury.",
      a: "Repeated vomiting and increasing drowsiness (others include seizure, weakness, worsening headache)."
    },
    t3: {
      d: "The Glasgow Coma Scale scores eye, verbal and motor responses out of 15, and paediatric versions adapt the verbal component for pre-verbal children. Decision tools such as NICE head injury guidance determine who needs a CT scan, balancing missed injury against radiation exposure in a developing brain.",
      task: "Find the three components of the Glasgow Coma Scale and their maximum scores.",
      q: "Why is a paediatric version of the Glasgow Coma Scale needed?",
      a: "Because a baby or toddler cannot give the verbal responses the adult scale expects."
    }
  }
]
},
{
m: 6, name: "June", topic: "Growing up: birth to teenager",
intro: "This is the heart of paediatrics. Children are not small adults — they are people in the middle of the fastest change a human body ever goes through.",
lessons: [
  {
    title: "Nine months of building",
    what: "A whole person is built from a single cell in about forty weeks. By eight weeks every major organ has started forming; the rest of the pregnancy is mostly growing and maturing what is already there.",
    facts: [
      "The heart starts beating at around three weeks.",
      "By around 20 weeks the baby can hear sounds from outside.",
      "The last weeks matter enormously for the lungs and the brain."
    ],
    words: [{ w: "Gestation", m: "The time a baby spends developing before birth, counted in weeks." }],
    t1: {
      d: "You started as one single cell — smaller than a full stop. Everything you are was built from that one cell dividing again and again.",
      task: "Ask a family member how much you weighed when you were born.",
      q: "Roughly how long is a full pregnancy?",
      a: "About 40 weeks, or nine months."
    },
    t2: {
      d: "Term is 37 to 42 weeks. Before 37 weeks a baby is premature, and the earlier the birth, the more support they need — feeding, warmth, and often help with breathing because the lungs are the last thing to be ready.",
      task: "Work out how many weeks early a baby born at 32 weeks would be.",
      q: "What counts as a premature birth?",
      a: "Birth before 37 completed weeks of gestation."
    },
    t3: {
      d: "Organogenesis in the first trimester is when the developing baby is most vulnerable to teratogens — alcohol, certain medicines, some infections. This is why medication in pregnancy is scrutinised so carefully and why rubella immunity is checked.",
      task: "Look up one medicine that is avoided in pregnancy and find out why.",
      q: "Why is the first trimester the most vulnerable period?",
      a: "Because that is when the major organs are forming, so disruption causes structural abnormalities."
    }
  },
  {
    title: "The first ten minutes of life",
    what: "Being born means changing, in seconds, from getting oxygen through a cord to breathing air. It is the single biggest physiological change a human ever makes.",
    facts: [
      "That first cry inflates the lungs for the very first time.",
      "The circulation reroutes within minutes as the lungs take over.",
      "The APGAR score checks how the baby is doing at 1 and 5 minutes."
    ],
    words: [{ w: "Neonate", m: "A baby in its first 28 days of life." }],
    t1: {
      d: "Before birth a baby gets oxygen from its mother through the cord, like a diver on an air line. The first cry is the moment the baby takes over breathing for itself.",
      task: "Learn the five APGAR words: Appearance, Pulse, Grimace, Activity, Respiration.",
      q: "What does the first cry do?",
      a: "Inflates the lungs so the baby can breathe air."
    },
    t2: {
      d: "Each APGAR letter scores 0, 1 or 2, so 10 is the maximum. It is not a prediction of the child's future — it is a quick snapshot to guide whether the baby needs help right now.",
      task: "Write out the APGAR table and score an imaginary baby who is pink, crying, active, with a heart rate of 140.",
      q: "What is the maximum APGAR score?",
      a: "10 — five components scored 0 to 2 each."
    },
    t3: {
      d: "At birth, pulmonary vascular resistance falls sharply, the ductus arteriosus and foramen ovale functionally close, and the fetal circulation converts to the adult pattern. Delayed cord clamping is now standard practice in many settings because it improves the newborn's iron stores.",
      task: "Read about the transition from fetal to neonatal circulation and note the two shunts that close.",
      q: "Which two fetal shunts close after birth?",
      a: "The ductus arteriosus and the foramen ovale."
    }
  },
  {
    title: "Milestones in the first year",
    what: "Babies develop in a predictable order, though the timing varies a lot between individuals. Doctors track four areas: gross motor, fine motor, speech and language, and social behaviour.",
    facts: [
      "Social smile at around 6 to 8 weeks.",
      "Sitting without support at around 6 to 8 months.",
      "First words around 12 months; walking around 12 to 15 months."
    ],
    words: [{ w: "Milestone", m: "A skill most children reach at roughly a certain age." }],
    t1: {
      d: "Babies build skills like a staircase: hold up the head, roll over, sit, crawl, stand, walk. Almost always in that order, even if the timing differs.",
      task: "Ask when you first walked and first talked. Families usually remember.",
      q: "Which normally comes first, sitting or walking?",
      a: "Sitting."
    },
    t2: {
      d: "What matters more than an exact date is the pattern: is the child progressing, and is development even across all four areas? Losing a skill already gained — regression — always needs urgent assessment.",
      task: "Draw a timeline from birth to 18 months and mark six milestones on it.",
      q: "Why is losing a skill more worrying than gaining one late?",
      a: "Regression can signal an underlying neurological or metabolic condition and needs urgent assessment."
    },
    t3: {
      d: "Limit ages define when a milestone is definitively delayed: not sitting unsupported by 9 months, not walking by 18 months, no words by 18 months. Corrected age is used for premature babies until about 2 years, otherwise you wrongly label them as delayed.",
      task: "Calculate the corrected age of a 9-month-old born at 30 weeks.",
      q: "What is corrected age and why use it?",
      a: "Age adjusted for prematurity, so a preterm baby's development is judged fairly."
    }
  },
  {
    title: "Children are not small adults",
    what: "This sentence is the founding idea of paediatrics. A child's body handles medicines, fluid, heat and injury differently — not just in scale, but in kind.",
    facts: [
      "Medicine doses are calculated by weight, sometimes by body surface area.",
      "Children lose heat faster because they have more skin relative to their size.",
      "The same illness can look completely different in a baby than in a teenager."
    ],
    words: [{ w: "Paediatrics", m: "The branch of medicine dealing with children, from birth to around 18." }],
    t1: {
      d: "A tiny cup of water cools down far quicker than a big pot. Small bodies lose heat the same way, which is why babies are wrapped up so carefully.",
      task: "Work out roughly how many times heavier an adult is than a newborn. Now imagine giving them the same dose of medicine.",
      q: "Why are children's medicine doses worked out by weight?",
      a: "Because their bodies are much smaller, so a fixed adult dose could be dangerous."
    },
    t2: {
      d: "A baby with a serious infection may not have a fever at all — they may simply feed poorly, be floppy, or be unusually sleepy. The younger the child, the vaguer the signs, and the lower the threshold for investigating.",
      task: "Write down three ways a baby might show illness without any obvious symptom.",
      q: "Why is a very young baby with an infection harder to assess?",
      a: "Their signs are non-specific — poor feeding, floppiness or sleepiness rather than clear symptoms."
    },
    t3: {
      d: "Pharmacokinetics genuinely differ: neonates have immature hepatic enzymes and reduced renal clearance, and body water proportion falls from around 75% at birth to about 60% in adults. This changes both drug dosing and fluid management, and it is why paediatric prescribing is checked so obsessively.",
      task: "Find out why chloramphenicol caused grey baby syndrome and what it teaches about neonatal metabolism.",
      q: "Name two reasons neonates handle medicines differently.",
      a: "Immature liver enzymes and reduced kidney clearance (also different body water and protein binding)."
    }
  },
  {
    title: "Puberty: the second big build",
    what: "Puberty is the process of a child's body becoming an adult one. It is driven by hormones, it takes several years, and it starts at very different ages in different people — all of which is normal.",
    facts: [
      "It usually begins around 8 to 13 in girls and 9 to 14 in boys.",
      "The growth spurt happens earlier in girls than in boys.",
      "The brain is changing at the same time, not just the body."
    ],
    words: [{ w: "Hormone", m: "A chemical messenger released into the blood to tell distant parts of the body what to do." }],
    t1: {
      d: "Hormones are like text messages sent through your blood. During puberty the body sends a lot of them, and different parts respond at different speeds.",
      task: "Write down one thing you would want a doctor to be good at, if you had to talk to them about growing up.",
      q: "What is a hormone?",
      a: "A chemical messenger carried in the blood that tells the body what to do."
    },
    t2: {
      d: "It begins in the brain: the hypothalamus and pituitary gland release hormones that switch on the ovaries or testes. Because the range of normal is so wide, comparing yourself to friends is not a useful measure of anything.",
      task: "Find out which gland is called the master gland and what it controls.",
      q: "Which part of the body starts puberty off?",
      a: "The brain — the hypothalamus and pituitary gland."
    },
    t3: {
      d: "Tanner staging describes pubertal development objectively. Precocious puberty (before 8 in girls, 9 in boys) and delayed puberty both warrant investigation, since either can indicate an underlying endocrine or structural cause.",
      task: "Look up what Tanner stages describe and how many there are.",
      q: "What is precocious puberty?",
      a: "Puberty starting unusually early — before about 8 in girls or 9 in boys."
    }
  },
  {
    title: "Growth charts and centiles",
    what: "Doctors plot every child's height and weight on a growth chart. The chart does not say what a child should weigh — it shows how they compare with other children, and, far more importantly, whether they are following their own line.",
    facts: [
      "The lines on the chart are centiles.",
      "Being on the 9th centile means 9 out of 100 children that age are smaller.",
      "A low centile is not a problem in itself. Crossing downwards through centiles is."
    ],
    words: [{ w: "Centile", m: "A line on a growth chart showing how a child compares with others of the same age." }],
    t1: {
      d: "If a hundred children your age stood in a line by height, the centile tells you roughly where you would stand. There is no good or bad place in that line.",
      task: "Find your own height in centimetres and write it down with today's date. Do it again in six months.",
      q: "What does a growth chart compare?",
      a: "A child's growth with that of other children the same age."
    },
    t2: {
      d: "What doctors look for is the trend. A child steadily on the 2nd centile is usually just small. A child who drops from the 75th to the 9th over a year needs investigating — that change is the signal.",
      task: "Sketch two lines on a chart: one steady low line, one falling line. Which would worry a doctor, and why?",
      q: "Which is more concerning: a consistently low centile, or falling across centiles?",
      a: "Falling across centiles."
    },
    t3: {
      d: "Faltering growth is assessed against the child's own trajectory and mid-parental height, using WHO-based UK-WHO charts, with corrected age plotted for preterm infants. Head circumference is plotted too, since it tracks brain growth.",
      task: "Find out what mid-parental height is and how it is calculated.",
      q: "Why is head circumference plotted in infancy?",
      a: "It reflects brain growth, so unusual patterns can flag neurological problems."
    }
  }
]
},
{
m: 7, name: "July", topic: "Skin and the senses",
intro: "Your entire experience of the world arrives through a handful of sensors, wrapped in the largest organ you own.",
lessons: [
  {
    title: "Skin: the organ you wear",
    what: "Skin is the body's biggest organ. It is waterproof, self-repairing, self-renewing, and it is the first line of defence against everything outside you.",
    facts: [
      "The outer layer is the epidermis; the living layer beneath is the dermis.",
      "You shed and replace your outer skin roughly every month.",
      "Skin also makes vitamin D when sunlight hits it."
    ],
    words: [{ w: "Epidermis", m: "The thin outer layer of skin you can see and touch." }],
    t1: {
      d: "Skin is a raincoat that repairs itself, keeps germs out, holds water in, and tells you what things feel like — all at once.",
      task: "Look closely at the skin on your knuckle and your forearm. Notice how different the thickness and texture are.",
      q: "What is the outer layer of skin called?",
      a: "The epidermis."
    },
    t2: {
      d: "The dermis holds blood vessels, nerve endings, hair roots and sweat glands. Because the epidermis has no blood supply of its own, a shallow graze does not really bleed — you have to reach the dermis for that.",
      task: "Find out why a paper cut hurts so much despite being tiny.",
      q: "Which layer contains the nerve endings and blood vessels?",
      a: "The dermis."
    },
    t3: {
      d: "Burn depth is classified by how far it reaches: superficial, superficial partial thickness, deep partial thickness and full thickness. Full thickness burns are painless in the centre because the nerve endings have been destroyed — a counterintuitive and important sign.",
      task: "Look up how burn surface area is estimated in children and why the adult rule of nines is modified.",
      q: "Why can a full thickness burn be painless?",
      a: "The nerve endings in the dermis have been destroyed."
    }
  },
  {
    title: "Keeping your temperature",
    what: "Your body works hard to stay near 37°C. Sweating cools you as it evaporates; shivering warms you by making muscles work; goosebumps are a leftover from when humans had far more body hair.",
    facts: [
      "Blood vessels in the skin widen to lose heat and narrow to keep it.",
      "That is why you go red when hot and pale when cold.",
      "Babies cannot control their temperature well and rely on adults to help."
    ],
    words: [{ w: "Core temperature", m: "The temperature deep inside your body, where it matters." }],
    t1: {
      d: "Sweat cools you because evaporating water takes heat with it. That is why a breeze on damp skin feels so cold.",
      task: "Wet the back of one hand and blow on both. Feel the difference.",
      q: "Why does sweating cool you down?",
      a: "Because evaporating sweat carries heat away from your skin."
    },
    t2: {
      d: "Newborns cannot shiver effectively. Instead they burn a special tissue called brown fat to make heat. That store is limited, which is why keeping a newborn warm is an immediate priority at every birth.",
      task: "Find out why a newborn is dried and wrapped immediately after birth.",
      q: "How does a newborn generate heat if it cannot shiver?",
      a: "By burning brown fat."
    },
    t3: {
      d: "Hypothermia in neonates increases oxygen consumption, worsens acidosis and impairs surfactant function, so thermoregulation is part of the resuscitation algorithm. Very preterm babies are placed straight into a plastic bag under a radiant heater without drying.",
      task: "Look up the recommended delivery room temperature for a preterm birth.",
      q: "Why is temperature control part of newborn resuscitation?",
      a: "Because cold stress increases oxygen demand and worsens outcomes."
    }
  },
  {
    title: "How you see",
    what: "Light enters the eye, gets focused by the lens onto the retina at the back, and is converted into nerve signals. Your brain then turns those signals into a picture — and does a lot of editing on the way.",
    facts: [
      "The pupil is a hole; the coloured iris changes its size.",
      "The retina contains rods for dim light and cones for colour.",
      "The image lands upside down and your brain flips it."
    ],
    words: [{ w: "Retina", m: "The light-sensitive layer at the back of the eye." }],
    t1: {
      d: "An eye works like a camera: a hole to let light in, a lens to focus it, and a screen at the back. Your brain does the rest.",
      task: "Look in a mirror in dim light, then switch on a bright lamp. Watch your pupils shrink.",
      q: "What is the retina?",
      a: "The light-sensitive layer at the back of the eye."
    },
    t2: {
      d: "In short-sightedness the eye focuses light in front of the retina, so distant things blur. Children often do not report it — they assume everyone sees what they see, which is exactly why vision screening exists.",
      task: "Cover one eye and read something across the room, then swap. Are they equally sharp?",
      q: "Why might a child not report poor vision?",
      a: "Because they have nothing to compare it with and assume everyone sees the same."
    },
    t3: {
      d: "Amblyopia — lazy eye — develops when one eye's input is not used during the critical period, and the visual cortex suppresses it. Treatment with patching or glasses works well if started early and poorly if left, which is why the red reflex is checked at every newborn examination.",
      task: "Find out what an absent red reflex in a newborn can indicate.",
      q: "Why must amblyopia be treated early?",
      a: "The visual cortex only develops normally if it receives input during the critical period of early childhood."
    }
  },
  {
    title: "Ears: hearing and balance",
    what: "Sound is vibrating air. Your ear catches those vibrations, amplifies them with three tiny bones, and converts them into nerve signals in a snail-shaped structure called the cochlea. The same organ also keeps you balanced.",
    facts: [
      "The three smallest bones in your body are in your middle ear.",
      "The cochlea turns vibration into nerve signals.",
      "Fluid-filled loops next to it detect head movement — that is balance."
    ],
    words: [{ w: "Cochlea", m: "The spiral part of the inner ear that turns vibrations into nerve signals." }],
    t1: {
      d: "Spin around fast and then stop. The dizziness is fluid still sloshing in the loops of your inner ear while your eyes insist you have stopped.",
      task: "Cup your hands behind your ears and listen. You just made your ears bigger, and it works.",
      q: "Which part of the ear turns vibrations into nerve signals?",
      a: "The cochlea."
    },
    t2: {
      d: "Ear infections are extremely common in small children because the tube connecting the middle ear to the throat is shorter and more horizontal than in adults, so germs travel up it easily. It usually improves as the child grows.",
      task: "Find out what glue ear is and how it can affect a child's speech.",
      q: "Why do young children get so many ear infections?",
      a: "Their Eustachian tube is short and horizontal, so infection spreads easily from the throat."
    },
    t3: {
      d: "Newborn hearing screening uses otoacoustic emissions, with automated auditory brainstem response as a second-line test. Early detection matters because language acquisition depends on auditory input during the first years of life; cochlear implants have far better outcomes when fitted early.",
      task: "Read how an otoacoustic emissions test works — it is genuinely elegant.",
      q: "Why is newborn hearing screening done in the first weeks?",
      a: "Because early detection and treatment protects normal language development."
    }
  },
  {
    title: "Taste, smell and touch",
    what: "Taste and smell work together far more than people realise; most of what you call flavour is actually smell. Touch is not one sense but several — pressure, temperature, vibration and pain all have separate receptors.",
    facts: [
      "Block your nose and most food loses its flavour.",
      "Fingertips and lips have the densest touch receptors.",
      "Pain is a sense, and it exists to protect you."
    ],
    words: [{ w: "Receptor", m: "A sensor that detects something and turns it into a nerve signal." }],
    t1: {
      d: "Hold your nose and eat something. Most of the flavour disappears, because most of taste is really smell.",
      task: "Try the nose-holding test with a piece of fruit, then let go halfway through.",
      q: "Why does food taste bland when you have a cold?",
      a: "Because a blocked nose stops smell, and most flavour comes from smell."
    },
    t2: {
      d: "Very rarely, people are born unable to feel pain. It sounds like a gift and is in fact dangerous — they injure themselves constantly without noticing. Pain is a protective alarm system.",
      task: "Get someone to touch your back with one or two fingers and guess which. Repeat on your fingertip — you will be far more accurate there.",
      q: "Why is the ability to feel pain useful?",
      a: "It warns you about damage so you can stop it getting worse."
    },
    t3: {
      d: "Assessing pain in children who cannot speak requires observational tools such as FLACC (face, legs, activity, cry, consolability), and self-report scales like Wong-Baker faces for older children. Undertreated pain in neonates has measurable long-term effects, which is why the old belief that babies do not feel pain was such a serious error.",
      task: "Look up the FLACC scale and note its five components.",
      q: "How do you assess pain in a pre-verbal child?",
      a: "With an observational tool such as FLACC, scoring behaviour rather than self-report."
    }
  },
  {
    title: "Sun, burns and skin care",
    what: "Sunlight lets your skin make vitamin D, but ultraviolet radiation also damages the DNA in skin cells. Sunburn in childhood measurably increases skin cancer risk decades later.",
    facts: [
      "UV goes through cloud, so you can burn on a grey day.",
      "Babies under six months should be kept out of direct sun entirely.",
      "Cool running water for 20 minutes is the first aid for a burn — never ice, never butter."
    ],
    words: [{ w: "Ultraviolet (UV)", m: "Invisible radiation in sunlight that damages skin cells." }],
    t1: {
      d: "Sunburn is real damage, not just redness. Every burn adds up over a lifetime.",
      task: "Learn the burn first aid rule: cool running water, 20 minutes, then cover loosely with cling film.",
      q: "What is the first aid for a burn?",
      a: "Cool running water for 20 minutes."
    },
    t2: {
      d: "Sunscreen needs applying generously and reapplying, especially after swimming. Shade and clothing protect better than sunscreen alone, and the sun is strongest between 11am and 3pm.",
      task: "Check the SPF on any sunscreen in your house and find out what SPF actually measures.",
      q: "Why is shade better protection than sunscreen alone?",
      a: "Sunscreen is usually applied too thinly and wears off; shade and clothing do not."
    },
    t3: {
      d: "Burns in children need careful assessment of depth and total body surface area, using a Lund and Browder chart rather than the adult rule of nines, because a child's head accounts for a much greater proportion of surface area. Certain burn patterns — glove and stocking distribution, clear margins — raise safeguarding concerns.",
      task: "Find out why a scald with a sharp, symmetrical margin is a safeguarding concern.",
      q: "Why is the adult rule of nines inaccurate in children?",
      a: "A child's head is proportionally much larger and their legs smaller, so the percentages differ."
    }
  }
]
},
{
m: 8, name: "August", topic: "Food, guts and digestion",
intro: "Nine metres of tube that takes a meal apart into molecules small enough to enter your blood, and does it without you thinking about it once.",
lessons: [
  {
    title: "Why we eat",
    what: "Food does two jobs: it provides energy to run your body, and it provides raw materials to build and repair it. Children need proportionally more of both, because they are still under construction.",
    facts: [
      "Energy from food is measured in calories or kilojoules.",
      "Growth means you need building materials, not just fuel.",
      "A baby roughly triples its birth weight in the first year."
    ],
    words: [{ w: "Nutrient", m: "Anything in food your body needs — protein, fat, carbohydrate, vitamins, minerals." }],
    t1: {
      d: "A car needs petrol to run. But a house being built needs bricks as well. You need both, because you are running and being built at the same time.",
      task: "Look at what you ate today and split it into fuel and building materials.",
      q: "Why do growing children need proportionally more food than adults?",
      a: "Because they need materials to build new body as well as fuel to run it."
    },
    t2: {
      d: "Protein supplies amino acids for building; carbohydrate is the quickest fuel; fat is dense energy and is essential for brain development, which is why low-fat diets are not recommended for young children.",
      task: "Find out how much of the brain is made of fat. The answer is higher than most people guess.",
      q: "Why are low-fat diets not recommended for under-fives?",
      a: "Because fat is essential for brain development and provides concentrated energy for growth."
    },
    t3: {
      d: "Exclusive breastfeeding is recommended for around the first six months, with solids introduced from about six months alongside continued milk feeds. Nutritional requirements per kilogram of body weight are far higher in infancy than adulthood, and faltering growth is often the first sign of chronic disease.",
      task: "Look up the recommended age for introducing solid foods and two signs of readiness.",
      q: "Why is faltering growth an important clinical sign?",
      a: "It is often the earliest indicator of underlying chronic illness or inadequate intake."
    }
  },
  {
    title: "The journey of a meal",
    what: "Food goes: mouth, oesophagus, stomach, small intestine, large intestine. Chewing and enzymes break it down, the small intestine absorbs the nutrients, and the large intestine reclaims water from what is left.",
    facts: [
      "The whole tube is around nine metres long in an adult.",
      "Muscles squeeze food along in waves called peristalsis.",
      "Most absorption happens in the small intestine, not the stomach."
    ],
    words: [{ w: "Peristalsis", m: "Waves of muscle squeezing that push food along the gut." }],
    t1: {
      d: "Squeeze toothpaste along the tube with your fingers. That is peristalsis — and it works even if you are upside down, which is why astronauts can eat in space.",
      task: "Swallow a sip of water and notice you cannot stop it once it has started. That is peristalsis taking over.",
      q: "Where are most nutrients absorbed?",
      a: "In the small intestine."
    },
    t2: {
      d: "The stomach is mainly a mixing tank with strong acid that kills germs and starts protein digestion. The small intestine is lined with millions of tiny folds and finger-like villi, giving it an enormous absorbing surface.",
      task: "Find out what pH stomach acid is and compare it with lemon juice.",
      q: "What are villi and why do they matter?",
      a: "Tiny finger-like projections that hugely increase the surface area for absorbing nutrients."
    },
    t3: {
      d: "Coeliac disease is an immune reaction to gluten that flattens the villi, causing malabsorption, faltering growth and abdominal symptoms. Diagnosis needs the child to still be eating gluten when tested, which is a common and important practical trap.",
      task: "Look up why a child must remain on gluten before coeliac testing.",
      q: "Why does villous atrophy cause malabsorption?",
      a: "Losing the villi drastically reduces the surface area available to absorb nutrients."
    }
  },
  {
    title: "What is in food",
    what: "Food contains macronutrients you need in large amounts — carbohydrate, protein and fat — and micronutrients you need in tiny amounts but cannot do without, like iron, calcium, vitamin D and vitamin C.",
    facts: [
      "Missing a micronutrient can cause serious illness even if you eat plenty.",
      "Scurvy is vitamin C deficiency; rickets is vitamin D deficiency.",
      "Iron deficiency is the commonest nutritional problem in children worldwide."
    ],
    words: [
      { w: "Macronutrient", m: "A nutrient needed in large amounts: carbohydrate, protein or fat." },
      { w: "Micronutrient", m: "A vitamin or mineral needed in tiny amounts." }
    ],
    t1: {
      d: "Sailors used to get scurvy on long voyages with no fresh fruit — bleeding gums, exhaustion, old wounds reopening. All from one missing vitamin.",
      task: "Name three foods high in vitamin C without looking them up.",
      q: "Which vitamin prevents scurvy?",
      a: "Vitamin C."
    },
    t2: {
      d: "Iron deficiency anaemia in toddlers is often caused by drinking large volumes of cow's milk, which is low in iron and reduces absorption. It causes tiredness, pallor and can affect development.",
      task: "Find out why vitamin C helps you absorb iron from plant foods.",
      q: "Why can too much cow's milk cause anaemia in a toddler?",
      a: "It is low in iron, fills the child up, and interferes with iron absorption."
    },
    t3: {
      d: "Iron deficiency in infancy is associated with impaired neurodevelopment that may not fully reverse with treatment, which is why prevention matters more than correction. A microcytic hypochromic picture on a full blood count is the classic laboratory finding.",
      task: "Look up what mean cell volume (MCV) tells you in anaemia.",
      q: "What blood film picture suggests iron deficiency?",
      a: "Microcytic, hypochromic red cells — small and pale."
    }
  },
  {
    title: "Water and dehydration",
    what: "You are mostly water, and children are more water than adults. Losing too much — through vomiting, diarrhoea, fever or heat — is one of the commonest reasons children need hospital care worldwide.",
    facts: [
      "A newborn is around 75% water; an adult around 60%.",
      "Small bodies have less reserve, so they dehydrate faster.",
      "Signs include dry mouth, fewer wet nappies, sunken eyes and floppiness."
    ],
    words: [{ w: "Dehydration", m: "Not having enough water in the body for it to work properly." }],
    t1: {
      d: "A small puddle dries up far faster than a lake. A small body loses water faster too, which is why babies get ill from a tummy bug much quicker than adults do.",
      task: "Learn three signs of dehydration you could spot in a younger child.",
      q: "Name two signs of dehydration.",
      a: "Dry mouth and fewer wet nappies (also sunken eyes, floppiness, no tears)."
    },
    t2: {
      d: "Oral rehydration solution is one of the most important medical inventions of the last century. It works because glucose and sodium are absorbed together, dragging water across the gut wall with them. It has saved tens of millions of children's lives.",
      task: "Find out roughly how many child deaths a year oral rehydration therapy is credited with preventing.",
      q: "Why does oral rehydration solution contain both salt and sugar?",
      a: "Because sodium and glucose are absorbed together, pulling water across the gut wall."
    },
    t3: {
      d: "Dehydration is graded clinically and by percentage weight loss, since weight change is the most accurate measure. Assessment covers capillary refill, skin turgor, mucous membranes, urine output and conscious level; hypernatraemic dehydration needs particularly careful, slow correction to avoid cerebral oedema.",
      task: "Look up why rapid correction of hypernatraemia is dangerous.",
      q: "What is the most accurate measure of a child's fluid deficit?",
      a: "Change in body weight against a recent well weight."
    }
  },
  {
    title: "The bugs that live in you",
    what: "Your gut contains trillions of bacteria, collectively called the microbiome. Most are harmless or actively helpful — they digest things you cannot, make some vitamins, and help train your immune system.",
    facts: [
      "You carry roughly as many bacterial cells as human cells.",
      "A baby's microbiome starts forming at birth.",
      "Antibiotics kill helpful bacteria as well as harmful ones."
    ],
    words: [{ w: "Microbiome", m: "The community of microbes living in and on your body." }],
    t1: {
      d: "Not all germs are enemies. Most of the bacteria in your gut are more like helpful tenants who pay rent by doing jobs for you.",
      task: "Find out which everyday foods contain live helpful bacteria.",
      q: "Are all bacteria harmful?",
      a: "No — most in your gut are harmless or helpful."
    },
    t2: {
      d: "This is one reason antibiotics are not prescribed casually: they wipe out useful bacteria too, which can cause diarrhoea and lets resistant organisms take hold.",
      task: "Write down two reasons a doctor might refuse to prescribe antibiotics for a cold.",
      q: "Why can antibiotics cause diarrhoea?",
      a: "They kill helpful gut bacteria along with the harmful ones."
    },
    t3: {
      d: "Early microbiome development is influenced by mode of delivery, feeding and antibiotic exposure, with associations reported for later allergy, asthma and obesity. The evidence is still developing, so it is a good example of a field where you must hold claims loosely.",
      task: "Find one microbiome claim in the news and check whether it comes from human trials or mouse studies.",
      q: "Why should you be cautious about strong microbiome claims?",
      a: "Much of the evidence is associational or from animal studies rather than human trials."
    }
  },
  {
    title: "Tummy ache: what doctors think",
    what: "Abdominal pain is one of the commonest reasons a child sees a doctor. Most causes are harmless, but a few are emergencies, so the doctor's job is to sort one from the other reliably.",
    facts: [
      "Constipation is a very common and often missed cause.",
      "Appendicitis classically starts centrally and moves to the lower right.",
      "Pain plus green vomit, a very swollen tummy, or a child who will not move needs urgent help."
    ],
    words: [{ w: "Appendicitis", m: "Inflammation of the appendix, a small pouch off the large intestine. It usually needs surgery." }],
    t1: {
      d: "Most tummy aches are nothing serious. Doctors are trained to spot the small number that are, which is why they ask so many questions.",
      task: "Write down three questions you would ask a child with tummy ache.",
      q: "Where does appendicitis pain typically end up?",
      a: "In the lower right side of the abdomen."
    },
    t2: {
      d: "Doctors ask about site, onset, character, radiation, timing, what makes it better or worse, and severity — often remembered as SOCRATES. In children they also always ask about eating, drinking, wee, poo, and whether the child is behaving normally.",
      task: "Learn what the letters of SOCRATES stand for.",
      q: "Why does a doctor ask whether the child is behaving normally?",
      a: "Because a child who is playing normally is far less likely to be seriously unwell."
    },
    t3: {
      d: "Intussusception — one part of bowel telescoping into another — classically presents in infants with intermittent severe pain, drawing up the legs, and later redcurrant jelly stool. It is a surgical emergency, and bilious (green) vomiting in any child means obstruction until proven otherwise.",
      task: "Look up how intussusception is diagnosed and how it is often treated non-surgically.",
      q: "What does bilious vomiting in a child suggest?",
      a: "Intestinal obstruction until proven otherwise — it needs urgent assessment."
    }
  }
]
},
{
m: 9, name: "September", topic: "Germs, immunity and vaccines",
intro: "Why we get ill, how the body fights back, and how medicine learned to train that fight in advance.",
lessons: [
  {
    title: "What a germ actually is",
    what: "Germ is an everyday word covering several very different things: bacteria, viruses, fungi and parasites. The differences matter enormously, because they need completely different treatments.",
    facts: [
      "Bacteria are single living cells; antibiotics can kill them.",
      "Viruses are not really alive and hijack your cells to copy themselves; antibiotics do nothing to them.",
      "Most childhood coughs, colds and sore throats are viral."
    ],
    words: [
      { w: "Bacteria", m: "Tiny single-celled organisms; some cause illness, many are harmless or helpful." },
      { w: "Virus", m: "A packet of genetic instructions that can only copy itself inside your cells." }
    ],
    t1: {
      d: "A bacterium is like a tiny living animal. A virus is more like a set of instructions in an envelope — it can only do anything once it gets inside one of your cells.",
      task: "Name three illnesses caused by viruses and one caused by bacteria.",
      q: "Do antibiotics work against viruses?",
      a: "No — only against bacteria."
    },
    t2: {
      d: "Antibiotic resistance develops when bacteria survive treatment and multiply. Every unnecessary prescription speeds this up, which is why doctors are increasingly careful — and sometimes have to disappoint people who want antibiotics.",
      task: "Find out what MRSA stands for and why it is difficult to treat.",
      q: "What is antibiotic resistance?",
      a: "When bacteria evolve so that antibiotics no longer kill them."
    },
    t3: {
      d: "Antimicrobial stewardship balances treating the individual against protecting the population. Narrow-spectrum agents are preferred where the organism is known, and cultures should ideally be taken before antibiotics are started — though in suspected sepsis, treatment must never be delayed for them.",
      task: "Look up the concept of empirical antibiotic therapy and when it is justified.",
      q: "Why take cultures before starting antibiotics where possible?",
      a: "Because antibiotics can make the organism impossible to identify afterwards, preventing targeted treatment."
    }
  },
  {
    title: "How germs travel",
    what: "Germs move between people in a small number of predictable ways, and understanding those routes tells you exactly how to block them.",
    facts: [
      "Droplets from coughs and sneezes carry respiratory germs.",
      "Hands touching surfaces then faces spread a huge amount of illness.",
      "Some germs spread through contaminated food or water."
    ],
    words: [{ w: "Transmission", m: "How an infection passes from one person or place to another." }],
    t1: {
      d: "Handwashing is one of the most powerful medical inventions ever. It is free, it takes twenty seconds, and it saves enormous numbers of lives.",
      task: "Time yourself washing your hands properly for twenty seconds, getting between the fingers and around the thumbs.",
      q: "Name two ways germs spread.",
      a: "In droplets from coughs and sneezes, and on hands touching surfaces."
    },
    t2: {
      d: "In the 1840s Ignaz Semmelweis showed that doctors washing their hands dramatically cut deaths from childbed fever. He was rejected and ridiculed at the time. It is a useful reminder that being right is not the same as being believed.",
      task: "Read about Semmelweis and write two sentences on why his idea was resisted.",
      q: "What did Semmelweis discover?",
      a: "That handwashing by doctors dramatically reduced deaths from infection."
    },
    t3: {
      d: "Infection control uses standard precautions for everyone plus transmission-based precautions — contact, droplet or airborne — depending on the organism. R0, the basic reproduction number, describes how many people one case infects in a fully susceptible population, and it determines the herd immunity threshold.",
      task: "Look up the R0 of measles and compare it with influenza.",
      q: "What does R0 measure?",
      a: "The average number of people one infected person will infect in a fully susceptible population."
    }
  },
  {
    title: "The body's army",
    what: "Your immune system has two parts. The innate part responds instantly to anything foreign. The adaptive part learns the specific enemy, takes longer, but remembers it afterwards — sometimes for life.",
    facts: [
      "White blood cells are the main soldiers.",
      "Antibodies are proteins that lock onto one specific germ.",
      "Memory cells are why you usually get chickenpox only once."
    ],
    words: [{ w: "Antibody", m: "A protein made by your immune system that sticks to one specific germ and marks it for destruction." }],
    t1: {
      d: "Innate immunity is the guard at the door who stops anyone suspicious. Adaptive immunity is the detective who learns a specific criminal's face and never forgets it.",
      task: "Think of an illness you have had once and never again. That is immune memory.",
      q: "Why do you usually only get chickenpox once?",
      a: "Your immune system remembers it and destroys it before it can take hold again."
    },
    t2: {
      d: "Babies borrow antibodies from their mother across the placenta and through breast milk. That protection fades over the first months, which is exactly why the vaccine schedule begins at 8 weeks in the UK.",
      task: "Find out what passive immunity means and give one example.",
      q: "Where do a newborn's first antibodies come from?",
      a: "From the mother, across the placenta and in breast milk."
    },
    t3: {
      d: "Innate immunity includes physical barriers, complement, neutrophils and macrophages; adaptive immunity is B cells producing antibodies and T cells killing infected cells and coordinating the response. Primary immunodeficiencies present with severe, persistent, unusual or recurrent infections — the SPUR pattern.",
      task: "Look up the SPUR warning signs of immunodeficiency in children.",
      q: "What do B cells and T cells each do?",
      a: "B cells make antibodies; T cells kill infected cells and coordinate the immune response."
    }
  },
  {
    title: "Fever: turning up the heat",
    what: "A fever is not the illness. It is the body deliberately raising its own temperature because many germs cope badly with heat and the immune system works better warm. The number matters far less than how the child looks and behaves.",
    facts: [
      "Fever is generally a temperature of 38°C or above.",
      "A high number does not automatically mean a serious illness.",
      "Any fever in a baby under three months needs same-day medical assessment."
    ],
    words: [{ w: "Fever", m: "A raised body temperature, usually 38°C or more, produced deliberately by the body." }],
    t1: {
      d: "A fever is your body turning the heating up on purpose to make itself an uncomfortable place for germs.",
      task: "Find out where a thermometer should be placed for a young child and why.",
      q: "Is a fever the illness itself?",
      a: "No — it is the body's response to the illness."
    },
    t2: {
      d: "Paracetamol and ibuprofen are given to make a child comfortable, not to chase the number down. A child who is drinking, alert and playing with a temperature of 39 is usually far less concerning than a floppy, quiet child at 38.",
      task: "Write down three things you would watch in a feverish child besides the thermometer reading.",
      q: "What matters more than the exact temperature?",
      a: "How the child looks and behaves — alertness, drinking, activity, breathing."
    },
    t3: {
      d: "The NICE traffic light system stratifies risk in febrile children by colour, activity, respiratory signs, circulation and hydration. Fever under 3 months is red-flagged because these infants can have serious bacterial infection with minimal signs and often need a full septic screen.",
      task: "Look up the NICE traffic light table and note three red features.",
      q: "Why is fever in an infant under 3 months treated so cautiously?",
      a: "Because serious bacterial infection can be present with very few outward signs at that age."
    }
  },
  {
    title: "Vaccines: training in advance",
    what: "A vaccine shows the immune system a harmless version or fragment of a germ, so it builds memory without you ever having the disease. When enough people are vaccinated, the germ struggles to spread at all, which protects those who cannot be vaccinated.",
    facts: [
      "Vaccination is one of the most effective health measures ever developed.",
      "Smallpox was eradicated from the world entirely by vaccination.",
      "Herd immunity protects babies too young to be vaccinated and people with weak immune systems."
    ],
    words: [{ w: "Herd immunity", m: "When enough people are immune that an infection cannot spread easily, protecting those who are not." }],
    t1: {
      d: "A vaccine is like showing your immune system a photograph of a burglar in advance, so it recognises them instantly if they ever turn up.",
      task: "Ask which vaccines you have had. There is usually a record book at home.",
      q: "Which disease was wiped out worldwide by vaccination?",
      a: "Smallpox."
    },
    t2: {
      d: "Measles needs around 95% coverage for herd immunity because it is extraordinarily infectious. When coverage falls, measles returns first — and it can cause pneumonia, encephalitis and death, particularly in young children.",
      task: "Find out what the MMR vaccine protects against and when the doses are given.",
      q: "Why does measles need such high vaccine coverage?",
      a: "Because it is one of the most contagious diseases known, so it spreads through any gap in immunity."
    },
    t3: {
      d: "Vaccine hesitancy is best met with respect and evidence, not contempt. The fraudulent 1998 study linking MMR and autism was retracted and its author struck off, and very large subsequent studies have found no association — but the resulting drop in coverage caused real outbreaks and real deaths. Learning to have that conversation well is a genuine clinical skill.",
      task: "Write down how you would respond, kindly, to a worried parent who asks about MMR and autism.",
      q: "Why does handling vaccine hesitancy respectfully matter clinically?",
      a: "Because dismissing a parent's concern entrenches it, while a respectful evidence-based conversation can change the outcome."
    }
  },
  {
    title: "When infection turns serious: sepsis",
    what: "Sometimes the body's response to an infection goes into overdrive and starts damaging its own organs. That is sepsis. It is a medical emergency where every hour matters.",
    facts: [
      "Sepsis can follow any infection, including ones that seemed minor.",
      "Warning signs include mottled or very pale skin, abnormal breathing, and a child who is much less responsive than usual.",
      "A rash that does not fade when pressed with a glass needs emergency help immediately."
    ],
    words: [{ w: "Sepsis", m: "A life-threatening reaction where the body's response to infection damages its own organs." }],
    t1: {
      d: "Sepsis is the immune system fighting so hard that it starts damaging the body it is defending.",
      task: "Learn the glass test: press a clear glass against a rash. If the spots do not fade, get emergency help.",
      q: "What should you do if a rash does not fade under pressure?",
      a: "Get emergency medical help immediately."
    },
    t2: {
      d: "The most useful question is often the simplest: is this child much worse than a normal illness would explain, and is a parent telling you something is seriously wrong? Parental concern is a genuine clinical warning sign, not an inconvenience.",
      task: "Learn three sepsis warning signs in children.",
      q: "Why is a parent's instinct treated as a real warning sign?",
      a: "Because they know their child's normal better than anyone, and their concern correlates with serious illness."
    },
    t3: {
      d: "Paediatric sepsis pathways prompt senior review, blood cultures, lactate, IV antibiotics within one hour and fluid resuscitation. Meningococcal sepsis can progress from apparently mild illness to shock within hours, and the non-blanching rash is often a late sign, not an early one.",
      task: "Look up a paediatric sepsis six pathway and list the six actions.",
      q: "Why is waiting for a non-blanching rash dangerous?",
      a: "It is often a late sign — the child may already be severely unwell before it appears."
    }
  }
]
},
{
m: 10, name: "October", topic: "Being ill and getting better",
intro: "How a doctor turns a worried family and a vague set of symptoms into a diagnosis and a plan. This is the actual craft of medicine.",
lessons: [
  {
    title: "Symptoms and signs",
    what: "A symptom is something the patient notices and tells you: pain, feeling sick, tiredness. A sign is something the doctor finds by looking, feeling or measuring: a rash, a fast pulse, a swollen joint. Medicine runs on both.",
    facts: [
      "Symptoms are reported. Signs are observed.",
      "Young children cannot report symptoms, so signs carry more weight.",
      "The most important sign in a child is often simply how they look."
    ],
    words: [
      { w: "Symptom", m: "Something the patient feels and describes." },
      { w: "Sign", m: "Something the doctor can see, feel, hear or measure." }
    ],
    t1: {
      d: "If you say your tummy hurts, that is a symptom. If the doctor presses and finds it is hard and tender, that is a sign.",
      task: "List three symptoms and three signs of a cold, keeping them in the right columns.",
      q: "What is the difference between a symptom and a sign?",
      a: "A symptom is described by the patient; a sign is found by the doctor."
    },
    t2: {
      d: "With a baby, everything must be inferred: are they feeding, are their nappies wet, is their cry normal, are they interested in the world? Paediatricians describe this as the end of the bed assessment — the impression you form before you touch the child.",
      task: "Watch a young child playing and write down five things you can tell about their health without touching them.",
      q: "What is the end of the bed assessment?",
      a: "The overall impression of how sick a child is, formed from across the room before examining them."
    },
    t3: {
      d: "Formally, this maps onto the Paediatric Assessment Triangle: appearance, work of breathing and circulation to skin. It takes seconds, requires no equipment, and reliably distinguishes the sick child from the merely unwell one.",
      task: "Look up the Paediatric Assessment Triangle and note what each side assesses.",
      q: "What are the three sides of the Paediatric Assessment Triangle?",
      a: "Appearance, work of breathing, and circulation to the skin."
    }
  },
  {
    title: "Taking a history",
    what: "Most diagnoses come from the story, not the tests. A doctor asks careful questions in a careful order, and above all listens. Studies consistently suggest the history alone points to the right diagnosis most of the time.",
    facts: [
      "Doctors interrupt patients far sooner than they realise.",
      "Open questions first, closed questions later.",
      "In paediatrics you take the history from the parent and the child."
    ],
    words: [{ w: "History", m: "The story of the illness, taken by asking the patient and family questions." }],
    t1: {
      d: "The single most useful medical tool is a question followed by silence. Most people tell you what is wrong if you let them finish.",
      task: "Ask someone how their day was, and do not interrupt for a full minute. Notice how hard that is.",
      q: "Where do most diagnoses come from?",
      a: "The patient's story — the history."
    },
    t2: {
      d: "Open questions invite the story: tell me what has been happening. Closed questions pin down detail: has he vomited today? Start open, finish closed. In children you also ask about birth, development, immunisations, growth and who lives at home.",
      task: "Write five open questions you would ask a parent whose child has a cough.",
      q: "What is an open question?",
      a: "One that cannot be answered with yes or no, inviting the person to tell their story."
    },
    t3: {
      d: "A full paediatric history includes presenting complaint, systems review, past medical history, birth and neonatal history, developmental milestones, immunisations, growth, feeding, family history, social history and safeguarding context. Adolescents should routinely be offered part of the consultation alone.",
      task: "Look up the HEADSS assessment for adolescents and note what the letters stand for.",
      q: "Why is an adolescent offered time without a parent present?",
      a: "So they can raise confidential concerns they would not mention in front of a parent."
    }
  },
  {
    title: "Examining a patient",
    what: "Examination follows a discipline: look, feel, listen, and sometimes tap. In children the order gets rearranged around the child's mood — you do the least distressing things first and save the worst until last.",
    facts: [
      "Inspection alone reveals an enormous amount.",
      "A stethoscope makes internal sounds audible: heart, lungs, gut.",
      "Never wake or upset a child for something that can wait."
    ],
    words: [{ w: "Auscultation", m: "Listening to the body with a stethoscope." }],
    t1: {
      d: "With a nervous child, doctors often examine a teddy first. It sounds silly. It works, and it is a genuine clinical technique.",
      task: "Get down to a small child's eye level next time you talk to one and notice how differently they respond.",
      q: "What does a stethoscope let you do?",
      a: "Listen to sounds inside the body, like the heart and lungs."
    },
    t2: {
      d: "Warm hands, warm stethoscope, and permission asked first. Examine a distressed toddler on a parent's lap rather than on a couch. Getting cooperation is not being nice for its own sake — it is what makes the examination reliable.",
      task: "Practise explaining what a stethoscope does to a five-year-old in one friendly sentence.",
      q: "Why examine a toddler on their parent's lap?",
      a: "They stay calmer, so the examination is more accurate and less distressing."
    },
    t3: {
      d: "Opportunistic examination is the paediatric skill: auscultate while the child is quiet, count the respiratory rate before they notice you, and leave the throat and ears until last because they reliably end cooperation. In a very unwell child, ABCDE assessment takes priority over completeness.",
      task: "Write the order you would examine a settled 2-year-old with a cough, and justify it.",
      q: "Why leave examining the throat until last?",
      a: "It is the most distressing part and usually ends the child's cooperation."
    }
  },
  {
    title: "Tests and scans",
    what: "Tests do not replace thinking. A good doctor forms an idea first, then chooses a test that will confirm or rule it out. Testing everything indiscriminately produces confusing results and unnecessary distress.",
    facts: [
      "Blood tests, urine tests, x-rays, ultrasound, CT and MRI all answer different questions.",
      "X-rays and CT use radiation; ultrasound and MRI do not.",
      "Children are more sensitive to radiation than adults, so scans are chosen carefully."
    ],
    words: [{ w: "Ultrasound", m: "A scan using sound waves, with no radiation, safe to repeat." }],
    t1: {
      d: "A test is a question you ask the body. Asking a hundred random questions gets you noise; asking the right one gets you an answer.",
      task: "Match each: broken wrist, appendix, brain detail. Which scan would you choose for each?",
      q: "Which scan uses sound waves and no radiation?",
      a: "Ultrasound."
    },
    t2: {
      d: "Every test has false positives and false negatives, so a result must always be interpreted alongside the story and the examination. A normal test in a child who looks very unwell does not make them well.",
      task: "Find out what a false negative is and why it can be dangerous.",
      q: "Why is a test result never interpreted on its own?",
      a: "Because tests can be wrong, and the clinical picture must guide interpretation."
    },
    t3: {
      d: "Bayesian reasoning underlies all of this: the same result means different things depending on pre-test probability, which is why screening low-risk populations generates so many false positives. In children, ionising radiation carries a higher lifetime risk, so ultrasound and MRI are preferred where they can answer the question.",
      task: "Look up sensitivity and specificity and write a one-line definition of each.",
      q: "Why does the same test result mean different things in different patients?",
      a: "Because pre-test probability changes how likely a positive result is to be a true positive."
    }
  },
  {
    title: "Medicines and doses",
    what: "Nearly every medicine given to a child is calculated from their weight, and often checked by two people. Getting a dose wrong by a factor of ten is a real and recognised danger, so paediatric prescribing is deliberately slow and repetitive.",
    facts: [
      "Doses are usually written as milligrams per kilogram.",
      "Children often need liquid medicines, which introduces its own errors.",
      "Some medicines used in adults are unsafe in children entirely."
    ],
    words: [{ w: "Dose", m: "The exact amount of a medicine given at one time." }],
    t1: {
      d: "The same amount of medicine that helps an adult could seriously harm a small child. That is why children's medicine is measured against their weight every single time.",
      task: "If a medicine is 15 mg per kg and a child weighs 20 kg, what is the dose?",
      q: "Why are children's doses based on weight?",
      a: "Because body size varies enormously, and a fixed dose could be far too much or too little."
    },
    t2: {
      d: "Aspirin is avoided in children under 16 because of its link with Reye's syndrome, a rare but serious condition affecting the brain and liver. It is a good example of a medicine that is routine in adults and unsafe in children.",
      task: "Look up why aspirin is avoided in children and note the exception where it is still used.",
      q: "Why is aspirin generally avoided in children?",
      a: "Because of the risk of Reye's syndrome."
    },
    t3: {
      d: "Many paediatric medicines are used off-label, because trials are harder to conduct in children — one of the ethical tensions of the specialty. The BNF for Children exists precisely because adult dosing cannot be extrapolated, and independent double-checking of calculations is standard practice.",
      task: "Find out what off-label prescribing means and why it is common in paediatrics.",
      q: "Why are so many paediatric medicines used off-label?",
      a: "Because far fewer clinical trials are conducted in children, so licensing lags behind practice."
    }
  },
  {
    title: "Emergencies: knowing what is serious",
    what: "Most illness is not an emergency. A few things are, and the skill is recognising them fast. Doctors use red flags — specific findings that mean act now, do not wait and see.",
    facts: [
      "Difficulty breathing, a non-blanching rash, a seizure, or unresponsiveness are all emergencies.",
      "So is a baby under three months with a fever.",
      "If a parent says something is badly wrong, take that seriously."
    ],
    words: [{ w: "Red flag", m: "A specific finding that means urgent action is needed." }],
    t1: {
      d: "You do not need to know what is wrong to know that something is wrong. Recognising that is the first and most useful step.",
      task: "Learn the emergency number where you live and what information the call handler will ask for.",
      q: "Name two red flags in an unwell child.",
      a: "Difficulty breathing and a rash that does not fade under pressure."
    },
    t2: {
      d: "First aid worth actually knowing: the recovery position, what to do if someone is choking, and how to help during a seizure — protect the head, do not restrain, time it, and call for help if it lasts more than five minutes.",
      task: "Look up the recovery position and practise it on a willing family member.",
      q: "What should you never do during someone's seizure?",
      a: "Restrain them or put anything in their mouth."
    },
    t3: {
      d: "Paediatric basic life support differs from adult: five rescue breaths first, then a 15:2 compression to ventilation ratio, because children arrest from respiratory causes far more often than cardiac ones. That single difference reflects the whole logic of paediatric emergency care.",
      task: "Look up paediatric basic life support and note two ways it differs from adult BLS.",
      q: "Why does paediatric resuscitation start with rescue breaths?",
      a: "Because cardiac arrest in children is usually caused by respiratory failure, not a primary heart problem."
    }
  }
]
},
{
m: 11, name: "November", topic: "Minds, sleep and feelings",
intro: "Half of all lifelong mental health conditions begin before the age of fourteen. No paediatrician can do the job without understanding this.",
lessons: [
  {
    title: "Feelings are physical",
    what: "Emotions are not separate from the body. Fear speeds your heart, worry churns your stomach, sadness genuinely makes you tired. The brain and body are one system, and pretending otherwise leads to bad medicine.",
    facts: [
      "Anxiety commonly causes real tummy aches and headaches in children.",
      "The pain is genuine, not imagined or made up.",
      "Doctors must rule out physical causes and take the emotional cause seriously too."
    ],
    words: [{ w: "Psychosomatic", m: "Physical symptoms genuinely caused or worsened by emotional distress." }],
    t1: {
      d: "Butterflies before a test are real. Your body is reacting to a feeling, and the sensation is not imaginary.",
      task: "Notice one physical feeling in your body next time you are nervous, and name it.",
      q: "Can worry cause a real tummy ache?",
      a: "Yes — the pain is genuinely felt, even though the cause is emotional."
    },
    t2: {
      d: "Recurrent abdominal pain and headaches in school-age children are very common, and anxiety is a frequent contributor. Saying there is nothing wrong is both unhelpful and untrue — something is wrong, it is just not what the family expected.",
      task: "Write a sentence explaining a stress-related tummy ache to a nine-year-old without dismissing it.",
      q: "Why is 'there is nothing wrong' the wrong thing to say?",
      a: "The symptoms are real; it dismisses the child rather than explaining what is happening."
    },
    t3: {
      d: "The biopsychosocial model treats biological, psychological and social factors as jointly causal rather than alternatives. Functional symptoms are diagnosed positively, on their own features, not merely by excluding organic disease — and explained in a way that validates the experience.",
      task: "Read about the biopsychosocial model and write two sentences on why it changed medicine.",
      q: "What does the biopsychosocial model propose?",
      a: "That illness results from biological, psychological and social factors together."
    }
  },
  {
    title: "What stress does",
    what: "Stress is your body preparing for a threat: adrenaline rises, heart rate climbs, muscles tense, digestion pauses. It is useful in short bursts and genuinely harmful when it never switches off.",
    facts: [
      "Short-term stress can improve focus and performance.",
      "Long-term stress affects sleep, concentration, mood and immunity.",
      "The physical response is identical whether the threat is a bear or an exam."
    ],
    words: [{ w: "Adrenaline", m: "A hormone released in stress that speeds the heart and prepares the body to act." }],
    t1: {
      d: "Your body cannot tell the difference between a lion and a maths test. It prepares for both the same way.",
      task: "Try box breathing: in for four, hold four, out for four, hold four. Repeat four times.",
      q: "Which hormone is released when you are frightened?",
      a: "Adrenaline."
    },
    t2: {
      d: "Slow breathing works because it activates the parasympathetic nervous system, which physically slows the heart. It is not a trick or a distraction — it is a direct physiological lever you can pull.",
      task: "Use box breathing before something stressful this week and note what happens to your pulse.",
      q: "Why does slow breathing calm you down?",
      a: "It activates the parasympathetic nervous system, which slows the heart rate."
    },
    t3: {
      d: "Chronic activation of the hypothalamic-pituitary-adrenal axis raises cortisol persistently. Adverse childhood experiences are associated with worse physical and mental health decades later, which is a large part of why safeguarding and early intervention are considered preventive medicine.",
      task: "Look up adverse childhood experiences and note one long-term health association.",
      q: "Why are adverse childhood experiences a medical issue, not only a social one?",
      a: "Because chronic stress in childhood measurably affects physical and mental health in adulthood."
    }
  },
  {
    title: "Why sleep matters",
    what: "Sleep is when the brain consolidates memory, clears waste products, and releases growth hormone. Children need considerably more of it than adults, and teenagers need more than most people assume.",
    facts: [
      "School-age children need roughly 9 to 11 hours.",
      "Teenagers need around 8 to 10.",
      "Growth hormone is released mainly during deep sleep."
    ],
    words: [{ w: "Circadian rhythm", m: "The body's internal 24-hour clock controlling sleep and waking." }],
    t1: {
      d: "You genuinely grow in your sleep — growth hormone is released mostly at night, during the deepest stages.",
      task: "Work out what time you would need to go to bed to get ten hours before school.",
      q: "When is most growth hormone released?",
      a: "During deep sleep at night."
    },
    t2: {
      d: "Screens emit light that delays melatonin, the hormone that makes you sleepy. Teenagers' body clocks also naturally shift later during puberty, which is a biological change, not laziness — and it collides badly with early school start times.",
      task: "Put screens away an hour before bed for three nights and note any difference.",
      q: "Why do teenagers naturally fall asleep later?",
      a: "Their circadian rhythm genuinely shifts later during puberty."
    },
    t3: {
      d: "Sleep deprivation in children can present as irritability, hyperactivity and poor concentration — sometimes mistaken for ADHD. Obstructive sleep apnoea, often from large tonsils and adenoids, is an important and treatable cause worth actively asking about.",
      task: "Look up the symptoms of obstructive sleep apnoea in children and note three.",
      q: "How does sleep deprivation often present in young children?",
      a: "As hyperactivity, irritability and poor concentration rather than obvious sleepiness."
    }
  },
  {
    title: "Worry, low mood, and asking for help",
    what: "Feeling anxious or low sometimes is part of being human. It becomes a problem when it lasts, when it stops you doing things you want to do, or when it makes you feel unsafe. That point is when you tell someone.",
    facts: [
      "Around one in six children and young people has a probable mental health condition.",
      "Talking to someone is the single most useful first step.",
      "Effective help exists, and asking early works better than waiting."
    ],
    words: [{ w: "Anxiety", m: "Worry that persists and interferes with everyday life." }],
    t1: {
      d: "There is nothing weak about saying you are struggling. Telling someone is the strong and sensible move, and it is what you would tell a friend to do.",
      task: "Write down two adults you could talk to if you felt awful, and keep the list.",
      q: "What is the most useful first step if you are struggling?",
      a: "Telling someone you trust."
    },
    t2: {
      d: "If a friend tells you something worrying, you do not have to fix it. Listen, take it seriously, and help them tell an adult. Never promise to keep a secret that concerns someone's safety.",
      task: "Look up one youth mental health helpline available where you live and save the number.",
      q: "What should you do if a friend's safety worries you?",
      a: "Take it seriously and help them tell a trusted adult — do not keep it secret."
    },
    t3: {
      d: "Confidentiality in adolescent care has limits, and they must be stated clearly at the start of the conversation: what is said stays private unless someone is at serious risk. Asking directly about self-harm and suicidal thoughts does not increase risk — this is a well-established finding and a core clinical skill.",
      task: "Read about how clinicians explain confidentiality to teenagers and draft two sentences you could say.",
      q: "Does asking directly about suicidal thoughts increase risk?",
      a: "No — evidence shows asking directly does not increase risk and helps people get support."
    }
  },
  {
    title: "Talking about hard things",
    what: "Doctors have to say things nobody wants to hear. Doing it well is a learned skill, not a personality trait, and it is taught and examined like any other clinical skill.",
    facts: [
      "Warn before you deliver bad news, then say it plainly.",
      "Silence gives people room. Do not rush to fill it.",
      "Avoid vague phrases that people can misunderstand."
    ],
    words: [{ w: "Breaking bad news", m: "The skill of telling someone serious, unwelcome information clearly and kindly." }],
    t1: {
      d: "Being kind and being clear are not opposites. Vague, gentle words often leave people more frightened, because they fill the gaps themselves.",
      task: "Practise saying a difficult true thing to someone in one clear, kind sentence.",
      q: "Why is being vague unhelpful when giving bad news?",
      a: "People misunderstand or imagine something worse."
    },
    t2: {
      d: "A useful structure: find out what they already know, ask how much they want to know, give a warning shot, deliver the news simply, then stop and let them react. Answer questions afterwards, not during.",
      task: "Write down what a warning shot sounds like, in your own words.",
      q: "Why do you find out what the family already knows first?",
      a: "So you can start from their understanding rather than confusing or repeating."
    },
    t3: {
      d: "The SPIKES protocol formalises this: Setting, Perception, Invitation, Knowledge, Emotions, Strategy. In paediatrics the conversation is usually with parents while the child is present, which adds the challenge of pitching two conversations at once, honestly, without talking over the child.",
      task: "Look up SPIKES and write one sentence on each stage.",
      q: "What extra difficulty does breaking bad news carry in paediatrics?",
      a: "You are often speaking to the parents and the child at once, and must be honest with both."
    }
  },
  {
    title: "Looking after the people who care",
    what: "Doctors, nurses and carers get exhausted and grieve too. Medicine is only now taking this seriously, and learning to look after yourself is part of learning to be a good doctor, not a distraction from it.",
    facts: [
      "Burnout means emotional exhaustion, detachment and reduced effectiveness.",
      "Doctors are at high risk and historically poor at seeking help.",
      "Teams that debrief after difficult events cope measurably better."
    ],
    words: [{ w: "Burnout", m: "Exhaustion and detachment caused by prolonged work stress." }],
    t1: {
      d: "Even the people who look after everyone else need someone to look after them.",
      task: "Name one thing you do that genuinely resets you when you are worn out.",
      q: "What is burnout?",
      a: "Exhaustion and detachment caused by long-term work stress."
    },
    t2: {
      d: "Habits that protect you start now: sleep, exercise, friendships outside your subject, and being willing to say when you are struggling. Building them at school is much easier than trying to build them during a night shift.",
      task: "Write down three things that keep you well and check honestly whether you actually do them.",
      q: "Why build coping habits early?",
      a: "Because they are far harder to establish once you are already exhausted."
    },
    t3: {
      d: "Schwartz rounds, structured debriefs and reflective practice exist because the emotional load of clinical work is real and cumulative. Moral injury — being unable to give the care you know a patient needs, usually for reasons beyond your control — is now recognised as distinct from burnout.",
      task: "Look up moral injury in healthcare and write two sentences on how it differs from burnout.",
      q: "How does moral injury differ from burnout?",
      a: "Burnout is exhaustion from workload; moral injury is distress at being prevented from giving the care you know is right."
    }
  }
]
},
{
m: 12, name: "December", topic: "Becoming a doctor",
intro: "The last unit is about the job itself: how doctors think, how they behave, and how you get from where you are now to there.",
lessons: [
  {
    title: "What doctors actually do",
    what: "Far less of the job is dramatic than television suggests. Most of it is talking, examining, thinking, explaining, writing things down, and coordinating other people.",
    facts: [
      "Ward rounds, clinics, procedures, phone calls and notes fill most days.",
      "Doctors work in teams; almost nothing is done alone.",
      "Communication takes up more time than anything else."
    ],
    words: [{ w: "Ward round", m: "The daily visit to every patient on a ward to review and plan their care." }],
    t1: {
      d: "Television shows the ten dramatic minutes. Real medicine is mostly the hundred careful ones around them.",
      task: "Write down what you imagine a doctor does all day, then compare it with the timetable earlier on this page.",
      q: "What takes up most of a doctor's day?",
      a: "Talking with patients, families and colleagues."
    },
    t2: {
      d: "Documentation matters enormously: notes are a legal record, a communication tool for the next team, and a safety net. If it is not written down, in practice it did not happen.",
      task: "Write three sentences of notes about an imaginary patient, clearly enough for a stranger to understand.",
      q: "Why are clinical notes so important?",
      a: "They are a legal record and the way the next team knows what happened."
    },
    t3: {
      d: "Structured handover tools such as SBAR (Situation, Background, Assessment, Recommendation) exist because handover is where errors cluster. Human factors research — borrowed largely from aviation — now underpins much of patient safety practice.",
      task: "Look up SBAR and use it to hand over an imaginary patient in four sentences.",
      q: "Why is handover a high-risk moment?",
      a: "Because information is easily lost between teams, and errors cluster at transitions of care."
    }
  },
  {
    title: "How doctors think",
    what: "Doctors do not guess a single diagnosis. They build a list of possibilities — a differential — ranked by likelihood and by danger, then work through it. The dangerous ones get excluded even when they are unlikely.",
    facts: [
      "Common things are common.",
      "But rare and dangerous things must be ruled out first.",
      "If you never think of a diagnosis, you will never make it."
    ],
    words: [{ w: "Differential diagnosis", m: "The list of possible causes of a patient's problem." }],
    t1: {
      d: "A doctor is a detective with a shortlist of suspects, not someone guessing one name and hoping.",
      task: "Write three possible causes of a headache, then mark which is most likely and which is most dangerous.",
      q: "What is a differential diagnosis?",
      a: "A list of the possible causes of a patient's symptoms."
    },
    t2: {
      d: "There is a saying: when you hear hoofbeats, think horses, not zebras. But paediatrics has a lot of zebras, and missing one can be catastrophic — so you think horses first and stay alert for stripes.",
      task: "Look up one rare childhood condition and find out what first alerted doctors to it.",
      q: "What does 'think horses, not zebras' mean?",
      a: "Consider common causes first, because they are far more likely."
    },
    t3: {
      d: "Cognitive biases distort diagnosis: anchoring on the first idea, confirmation bias, premature closure, availability bias from a recent memorable case. Safety netting — telling families exactly what should prompt them to return — is the practical defence against uncertainty.",
      task: "Look up premature closure and write an example of how it could harm a patient.",
      q: "What is safety netting?",
      a: "Telling the family exactly what changes should bring them back, and when."
    }
  },
  {
    title: "Talking to children",
    what: "This is the defining skill of paediatrics. You have to build trust with a frightened child in minutes, keep the parents informed, and get accurate information out of both.",
    facts: [
      "Get down to their eye level.",
      "Explain what you are about to do before you do it.",
      "Never lie, including about whether something will hurt."
    ],
    words: [{ w: "Rapport", m: "A relationship of trust and ease between two people." }],
    t1: {
      d: "Telling a child that an injection will not hurt when it will means they will never believe you again. Honesty is the whole basis of trust.",
      task: "Explain what a thermometer does to an imaginary five-year-old in one sentence.",
      q: "Why should you never tell a child something will not hurt when it will?",
      a: "Because they will stop trusting you, and everything afterwards becomes harder."
    },
    t2: {
      d: "Offer real choices where you genuinely can — which arm, sitting or on a lap, counting down or a distraction. Control reduces fear enormously. Do not offer a choice that does not exist.",
      task: "Write three genuine choices you could offer a child before a blood test.",
      q: "Why does offering choices help?",
      a: "It gives the child a sense of control, which reduces fear."
    },
    t3: {
      d: "Play specialists prepare children for procedures using dolls, photographs and rehearsal, measurably reducing distress and the need for sedation. Distraction, positioning for comfort and topical anaesthetic are all evidence-based, not just kindness.",
      task: "Read what a health play specialist does and write two sentences on why they matter clinically.",
      q: "How does a play specialist reduce the need for sedation?",
      a: "By preparing and distracting the child so they can cope with the procedure awake."
    }
  },
  {
    title: "Ethics: the rules underneath",
    what: "Medicine has ethical principles that apply even when they conflict with what someone wants. Four are usually taught: respect for autonomy, beneficence, non-maleficence, and justice.",
    facts: [
      "Autonomy means people decide about their own bodies.",
      "Non-maleficence is first, do no harm.",
      "Justice means fairness in how care and resources are shared."
    ],
    words: [
      { w: "Consent", m: "Permission for treatment, given freely by someone who understands what it involves." },
      { w: "Confidentiality", m: "Keeping a patient's information private." }
    ],
    t1: {
      d: "First, do no harm means always asking whether the treatment might be worse than the problem.",
      task: "Think of one situation where doing nothing might be kinder than doing something.",
      q: "What does non-maleficence mean?",
      a: "Do no harm."
    },
    t2: {
      d: "Children complicate consent, because someone else usually decides for them. Older children can consent for themselves if they understand fully — in the UK this is called Gillick competence. Confidentiality is not absolute: it breaks when someone is at risk of serious harm.",
      task: "Find out what Gillick competence means and write it in your own words.",
      q: "When is confidentiality broken?",
      a: "When someone is at risk of serious harm."
    },
    t3: {
      d: "Where parents and clinicians disagree about a child's best interests, the courts decide, guided by the welfare of the child rather than parental preference. Assent from a child alongside parental consent is good practice, and the child's own view carries increasing weight with age and understanding.",
      task: "Read about one published case where a court decided a child's treatment, and note the reasoning.",
      q: "Whose interests are decisive when parents and doctors disagree?",
      a: "The child's — their welfare is the paramount consideration."
    }
  },
  {
    title: "Nobody works alone",
    what: "A hospital runs on a team. Nurses, pharmacists, physiotherapists, dietitians, play specialists, radiographers, healthcare assistants, cleaners and administrators are all essential, and a doctor who does not respect them is a worse doctor.",
    facts: [
      "Nurses spend far more time with a patient than a doctor does.",
      "Pharmacists catch prescribing errors every single day.",
      "The best teams are the ones where anyone feels able to speak up."
    ],
    words: [{ w: "Multidisciplinary team (MDT)", m: "A group of different health professionals working together on one patient's care." }],
    t1: {
      d: "Ask any experienced doctor who taught them most in their first year, and a great many will say the nurses.",
      task: "List five different jobs in a hospital that are not doctors, and what each one does.",
      q: "What is an MDT?",
      a: "A team of different health professionals working together on a patient's care."
    },
    t2: {
      d: "Psychological safety — everyone feeling able to raise a concern regardless of rank — is one of the strongest predictors of team performance and patient safety. Hierarchy that silences people kills patients.",
      task: "Write down how you would raise a concern with someone more senior than you.",
      q: "Why does psychological safety matter in a clinical team?",
      a: "Because people who feel able to speak up catch errors before they cause harm."
    },
    t3: {
      d: "Graded assertiveness tools such as PACE (Probe, Alert, Challenge, Emergency) give junior staff a structured way to escalate a concern. Investigations into major healthcare failures repeatedly find that people knew and did not feel able to say.",
      task: "Look up a graded assertiveness framework and practise the four escalating phrases.",
      q: "Why do structured escalation tools exist?",
      a: "Because hierarchy makes it hard to challenge seniors, and unspoken concerns cause harm."
    }
  },
  {
    title: "Your path from here",
    what: "You are years away from any of this, and that is completely fine. The things that actually matter now are curiosity, kindness, consistency, and getting comfortable around children and around people who are unwell.",
    facts: [
      "Nobody expects medical knowledge from a school student.",
      "Consistent volunteering beats a single impressive week.",
      "Plenty of excellent doctors took an indirect route in."
    ],
    words: [{ w: "Work experience", m: "Time spent watching or helping in a workplace to learn what a job is really like." }],
    t1: {
      d: "You do not need to be brilliant at everything. You need to keep being curious, keep being kind, and keep turning up.",
      task: "Write down one thing you will do this month that moves you a step closer.",
      q: "What matters most at your age?",
      a: "Curiosity, kindness and consistency — not medical knowledge."
    },
    t2: {
      d: "Depth beats breadth in an application. A year of helping at the same club, and what you noticed and learned there, is worth far more than a list of one-off placements you cannot say anything about.",
      task: "Start a short log of anything you do with children or with people who are unwell, and what you learned each time.",
      q: "Why does long-term volunteering count for more?",
      a: "Because it shows commitment and gives you real experiences to reflect on."
    },
    t3: {
      d: "Applications and interviews test reflection, not activity: what you did matters less than what you understood from it. Graduate entry, foundation years and access courses all exist, so a first attempt that does not work out is a delay, not an ending.",
      task: "Write a 150-word reflection on something you have done that taught you about caring for others.",
      q: "What do medical school interviews actually test?",
      a: "Your ability to reflect on experience — insight, not a list of achievements."
    }
  }
]
}
];
