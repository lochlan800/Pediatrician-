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
m: 2, name: "February", topic: "The ear: how hearing works",
intro: "Sound is nothing but moving air. This month is about the astonishing chain of parts that turns a wobble in the air into something you understand.",
lessons: [
  {
    title: "The three parts of the ear",
    what: "The ear is not one thing but three, joined in a line. The outer ear collects sound, the middle ear amplifies it, and the inner ear turns it into signals your brain can read. Almost everything an ear surgeon does happens in one of those three places.",
    facts: [
      "Outer ear: the bit you can see, plus the canal, ending at the eardrum.",
      "Middle ear: an air-filled space holding three tiny bones.",
      "Inner ear: the cochlea for hearing and the balance organs, buried in solid bone."
    ],
    words: [
      { w: "Pinna", m: "The visible flap of the ear, which funnels sound into the canal." },
      { w: "Middle ear", m: "The small air-filled space behind the eardrum, holding the three tiny hearing bones." }
    ],
    t1: {
      d: "Think of a letterbox, a hallway and a room. Sound is posted in at the pinna, carried down the hall, and read in the room at the end.",
      task: "Cup your hands behind your ears and listen. You just made your pinnae bigger, and it genuinely works.",
      q: "What are the three parts of the ear?",
      a: "Outer, middle and inner."
    },
    t2: {
      d: "The dividing lines matter medically. Problems in the outer or middle ear block sound getting through and are often fixable. Problems in the inner ear damage the sensor itself and are usually permanent.",
      task: "Draw the ear in three labelled boxes and write one problem that can happen in each.",
      q: "Why does it matter which part of the ear a problem is in?",
      a: "Outer and middle ear problems are often treatable; inner ear damage is usually permanent."
    },
    t3: {
      d: "The inner ear sits inside the petrous temporal bone, the densest bone in the body, which is why ear surgery involves drilling. The facial nerve runs right through this area, millimetres from the surgical field — protecting it is a constant consideration in otology.",
      task: "Find out which cranial nerve is at risk in mastoid surgery and what happens if it is injured.",
      q: "Why is ear surgery technically demanding?",
      a: "The structures are millimetre-scale, encased in dense bone, and the facial nerve runs right through the area."
    }
  },
  {
    title: "The eardrum",
    what: "The eardrum is a thin, tight sheet of tissue about a centimetre across, stretched over the end of the ear canal. Sound waves make it vibrate, and everything that follows depends on that vibration.",
    facts: [
      "Its proper name is the tympanic membrane.",
      "It is roughly a tenth of a millimetre thick — thinner than a sheet of paper.",
      "It seals the middle ear off from the outside world."
    ],
    words: [{ w: "Tympanic membrane", m: "The proper name for the eardrum." }],
    t1: {
      d: "Stretch clingfilm over a bowl and tap it. It moves. Your eardrum does exactly that, thousands of times a second, all day long.",
      task: "Hold a piece of paper near your mouth and hum. Feeling it buzz? That is what sound does to your eardrum.",
      q: "What is the eardrum's proper name?",
      a: "The tympanic membrane."
    },
    t2: {
      d: "It heals itself. Small holes usually close on their own within weeks, which is exactly why a grommet can be put through it and then simply fall out later, leaving the drum intact.",
      task: "Look up a photo of a normal eardrum through an otoscope. Notice you can see the bone behind it.",
      q: "What happens to a small hole in the eardrum?",
      a: "It usually heals itself within a few weeks."
    },
    t3: {
      d: "A healthy drum is pearly grey and translucent, with a visible cone of light and the handle of the malleus showing through. Red and bulging suggests acute infection; dull, retracted and amber suggests fluid behind it. Learning to read a drum is one of the first real skills in ENT.",
      task: "Compare otoscope images of a normal drum, an infected drum and glue ear, and write down what differs.",
      q: "What does a dull, retracted, amber eardrum suggest?",
      a: "Fluid in the middle ear — glue ear."
    }
  },
  {
    title: "The three smallest bones you own",
    what: "Behind the eardrum sit three bones so small they would all fit on a fingernail: the malleus, incus and stapes — hammer, anvil and stirrup. They are the smallest bones in the human body, and they are levers.",
    facts: [
      "Together they are called the ossicles.",
      "The stapes is around 3 mm long — the smallest bone you have.",
      "They amplify the vibration roughly twentyfold on its way in."
    ],
    words: [{ w: "Ossicles", m: "The three tiny bones of the middle ear: malleus, incus and stapes." }],
    t1: {
      d: "Hammer, anvil, stirrup. Somebody thought they looked like a blacksmith's workshop, and the names stuck for centuries.",
      task: "Learn the three names in order. Say them out loud three times: malleus, incus, stapes.",
      q: "Which is the smallest bone in the body?",
      a: "The stapes, in the middle ear."
    },
    t2: {
      d: "Amplification is needed because sound has to move from air into the fluid of the inner ear, and fluid resists far more than air does. Without the ossicles, most of the sound would simply bounce off, and you would be severely deaf.",
      task: "Try shouting to someone underwater in a pool. Notice how badly sound crosses from air into water.",
      q: "Why does sound need amplifying at the middle ear?",
      a: "Because it has to pass from air into fluid, and most of it would otherwise be reflected."
    },
    t3: {
      d: "This is impedance matching, achieved by the area ratio between eardrum and stapes footplate plus the lever action of the ossicular chain. In otosclerosis the stapes becomes fixed by abnormal bone and stops moving; a stapedotomy replaces it with a tiny prosthesis, and hearing can be restored in a single operation.",
      task: "Look up otosclerosis and find out who it typically affects.",
      q: "What goes wrong in otosclerosis?",
      a: "The stapes becomes fixed by abnormal bone growth, so it can no longer transmit vibration."
    }
  },
  {
    title: "The cochlea",
    what: "The cochlea is a fluid-filled tube coiled like a snail shell. Vibration entering it makes waves in the fluid, and thousands of microscopic hair cells lining it convert that movement into electrical signals for the brain.",
    facts: [
      "Uncoiled it would be about 3 cm long, with roughly two and a half turns.",
      "It holds around 15,000 hair cells in each ear.",
      "Different places along it respond to different pitches."
    ],
    words: [
      { w: "Cochlea", m: "The spiral part of the inner ear that turns vibration into nerve signals." },
      { w: "Hair cells", m: "Microscopic sensors in the cochlea that convert movement into electrical signals." }
    ],
    t1: {
      d: "Imagine a coiled water slide lined with thousands of tiny sensors. A wave rolls down it, the sensors bend, and each bend sends a message to your brain.",
      task: "Hum a low note then a high note. Different parts of your cochlea are responding to each.",
      q: "What do hair cells do?",
      a: "Turn movement in the cochlea into electrical signals for the brain."
    },
    t2: {
      d: "The cochlea is laid out like a piano: high notes are detected at the base, low notes at the tip. Loud noise damages the base first, which is why noise-related hearing loss takes the high notes first — including the consonants that make speech clear.",
      task: "Find out what frequency range human hearing covers, and how it changes with age.",
      q: "Which pitches are usually lost first with noise damage?",
      a: "High-frequency sounds, detected at the base of the cochlea."
    },
    t3: {
      d: "This is tonotopic organisation, and it is preserved all the way up the auditory pathway to the cortex — which is precisely what makes a cochlear implant possible, since the electrode array can stimulate the right places along the spiral. Human hair cells do not regenerate, unlike those of birds and fish, which is an active area of research.",
      task: "Read about hair cell regeneration research and write two sentences on why it matters.",
      q: "What is tonotopic organisation?",
      a: "Different frequencies being detected, and represented, at different positions along the cochlea and the auditory pathway."
    }
  },
  {
    title: "The Eustachian tube",
    what: "A narrow tube runs from the middle ear down to the back of the nose. Its job is to let air in, keeping the pressure behind the eardrum equal to the pressure outside. Almost every common childhood ear problem starts with this tube.",
    facts: [
      "It is normally closed, and opens when you swallow or yawn.",
      "That opening is what makes your ears pop.",
      "If it stops working, the middle ear fills with fluid."
    ],
    words: [{ w: "Eustachian tube", m: "The tube connecting the middle ear to the back of the nose, which equalises air pressure." }],
    t1: {
      d: "Go up a hill or take off in a plane and your ears feel blocked. Swallow, and they pop. That pop is the tube opening to let air in.",
      task: "Swallow deliberately and listen. Many people can hear a faint click as the tube opens.",
      q: "What makes your ears pop?",
      a: "The Eustachian tube opening to equalise the pressure behind the eardrum."
    },
    t2: {
      d: "If the tube is blocked — by a cold, allergy, or large adenoids — air trapped in the middle ear is absorbed, pressure drops, the drum is sucked inwards and fluid seeps in. That is exactly how glue ear begins.",
      task: "Write the chain of events from blocked tube to glue ear in four steps.",
      q: "What happens in the middle ear if the Eustachian tube stays blocked?",
      a: "Air is absorbed, pressure falls, and fluid collects behind the eardrum."
    },
    t3: {
      d: "In young children the tube is shorter, floppier and far more horizontal than in adults, so it drains poorly and transmits infection easily. It lengthens and angles downwards as the skull base grows, which is why most children simply grow out of recurrent middle ear problems by about seven or eight.",
      task: "Find a diagram comparing a child's and an adult's Eustachian tube angle and note the difference.",
      q: "Why do most children grow out of glue ear?",
      a: "The Eustachian tube lengthens and becomes more angled as the skull grows, so it drains and ventilates properly."
    }
  },
  {
    title: "Earwax and the ear canal",
    what: "Earwax is not dirt. It is a deliberate mixture of oils and dead skin that traps dust, repels water and keeps the canal slightly acidic so germs struggle to grow. The canal cleans itself, slowly, from the inside out.",
    facts: [
      "Its proper name is cerumen.",
      "Skin in the ear canal migrates outwards, carrying wax with it.",
      "Cotton buds push wax inwards and cause impaction — the exact problem people use them to prevent."
    ],
    words: [{ w: "Cerumen", m: "The medical word for earwax." }],
    t1: {
      d: "The old advice is still the best: never put anything smaller than your elbow in your ear.",
      task: "Check whether anyone at home uses cotton buds in their ears, and tell them what you have just learned.",
      q: "Why should you not use cotton buds in your ears?",
      a: "They push wax deeper in and can damage the canal or eardrum."
    },
    t2: {
      d: "Wax only needs removing if it blocks hearing or stops a doctor seeing the eardrum. Olive oil drops soften it; a clinician can remove it by irrigation or, more safely, by microsuction under direct vision.",
      task: "Find out what microsuction is and why clinics increasingly prefer it to syringing.",
      q: "When does earwax actually need removing?",
      a: "Only when it blocks hearing or prevents examination of the eardrum."
    },
    t3: {
      d: "Ear canal skin is unique in migrating laterally, effectively a conveyor belt. Otitis externa — inflammation of the canal, often after swimming — is treated with topical drops and aural toilet, and the canal should be kept dry. In diabetic or immunocompromised patients, necrotising otitis externa is a serious complication requiring urgent treatment.",
      task: "Look up otitis externa and note two things that make it more likely.",
      q: "Why is the ear canal described as self-cleaning?",
      a: "Its skin migrates outwards, carrying wax and debris out of the ear on its own."
    }
  }
]
},
{
m: 3, name: "March", topic: "The nose, sinuses and breathing",
intro: "The middle letter of ENT. The nose is not a hole in your face — it is an air-conditioning unit, a filter, a chemical laboratory and the front door to your lungs.",
lessons: [
  {
    title: "What the nose is actually for",
    what: "Air arriving at your nose might be freezing, dry and full of dust. By the time it reaches your throat, a few centimetres later, it is close to body temperature, almost fully humidified and largely filtered.",
    facts: [
      "Ridges inside the nose called turbinates create turbulence so air touches wet surfaces.",
      "Mucus traps dust, pollen and germs.",
      "Tiny hairs called cilia sweep that mucus backwards to be swallowed."
    ],
    words: [{ w: "Turbinates", m: "Curled ridges inside the nose that warm, moisten and filter incoming air." }],
    t1: {
      d: "Your nose is a radiator, a sponge and a filter all in one, and it does the whole job in the length of your thumb.",
      task: "Breathe in through your nose and then through your mouth on a cold day. Notice which feels harsher on your throat.",
      q: "Name two jobs the nose does to incoming air.",
      a: "Warms it and filters it (also moistens it)."
    },
    t2: {
      d: "You produce and swallow around a litre of nasal mucus a day without noticing. You only become aware of it when a cold makes it thicker or more plentiful.",
      task: "Find out what cilia are and how fast they beat.",
      q: "Where does all your nasal mucus normally go?",
      a: "It is swept backwards and swallowed, without you noticing."
    },
    t3: {
      d: "Nasal airflow is deliberately turbulent to maximise contact with the mucosa, and the nasal cycle means one side is usually more congested than the other at any moment, alternating every few hours. This is normal physiology, not disease, and it surprises a lot of patients.",
      task: "Block one nostril, then the other, and compare airflow. Repeat in four hours.",
      q: "What is the nasal cycle?",
      a: "The normal alternating congestion of each side of the nose over a few hours."
    }
  },
  {
    title: "Smell",
    what: "Right at the top of the nose sits a patch of nerve endings that detect chemicals in the air. It is the only place in the body where your brain is almost directly exposed to the outside world.",
    facts: [
      "The olfactory nerve is the first cranial nerve.",
      "Humans can distinguish an enormous range of smells — far more than people once assumed.",
      "Most of what you call taste is actually smell."
    ],
    words: [{ w: "Anosmia", m: "Loss of the sense of smell." }],
    t1: {
      d: "Pinch your nose and eat something. Most of the flavour vanishes, because flavour is mostly smell arriving from the back of the mouth.",
      task: "Try the nose-pinching test with something strongly flavoured, then let go mid-mouthful.",
      q: "Why does food taste bland when your nose is blocked?",
      a: "Because most of what we call taste is really smell."
    },
    t2: {
      d: "Smell is strongly linked to memory because the olfactory pathway connects closely to brain areas handling emotion and memory. That is why a particular smell can throw you straight back to a place you had forgotten.",
      task: "Write down one smell that instantly reminds you of somewhere specific.",
      q: "Why do smells trigger such strong memories?",
      a: "The olfactory pathway connects directly to brain regions handling memory and emotion."
    },
    t3: {
      d: "Anosmia matters clinically: it is a safety risk (gas, smoke, spoiled food), it causes genuine loss of quality of life, and it can be an early sign of neurodegenerative disease. Smell training is an evidence-based treatment after post-viral loss.",
      task: "Look up smell training and describe how it is done.",
      q: "Why is losing your sense of smell a safety problem?",
      a: "You cannot detect gas, smoke or spoiled food."
    }
  },
  {
    title: "The sinuses",
    what: "Your skull contains four pairs of air-filled spaces around the nose. Nobody is completely certain what they are all for — likely lightening the skull, warming air and adding resonance to your voice — but everybody notices them when they block.",
    facts: [
      "The four pairs are maxillary, frontal, ethmoid and sphenoid.",
      "Each drains into the nose through a small opening.",
      "Frontal sinuses are barely present in young children and develop later."
    ],
    words: [{ w: "Sinusitis", m: "Inflammation or infection of the sinuses, usually causing blockage, pressure and pain." }],
    t1: {
      d: "Your face is not solid bone. There are air-filled caves in it, and when they block, your face aches.",
      task: "Press gently on your cheekbones and above your eyebrows. Sinuses sit behind both spots.",
      q: "What are sinuses?",
      a: "Air-filled spaces in the bones around the nose."
    },
    t2: {
      d: "Because the drainage openings are narrow, swelling from a cold or allergy can block them, trapping mucus which then gets infected. Most sinusitis follows a viral cold and settles without antibiotics.",
      task: "Find out how long sinusitis symptoms usually last before doctors consider antibiotics.",
      q: "Why do sinuses become infected after a cold?",
      a: "Swelling blocks the small drainage openings, so mucus is trapped and becomes infected."
    },
    t3: {
      d: "Functional endoscopic sinus surgery works by restoring drainage rather than removing the lining, and the ostiomeatal complex is the key area. Because the sinuses sit next to the orbit and the skull base, complications such as periorbital cellulitis are taken seriously, particularly in children.",
      task: "Look up periorbital cellulitis and why it is an emergency in a child.",
      q: "What is the principle behind endoscopic sinus surgery?",
      a: "Restoring natural drainage and ventilation rather than stripping the sinus lining."
    }
  },
  {
    title: "Nosebleeds",
    what: "The wall between your nostrils is called the septum, and just inside the tip several small blood vessels meet under very thin skin. That spot causes the vast majority of nosebleeds.",
    facts: [
      "It is called Little's area.",
      "Around 90% of nosebleeds come from there.",
      "The right first aid is to lean forwards and pinch the soft part, not the bony bridge."
    ],
    words: [{ w: "Septum", m: "The wall of cartilage and bone dividing the two sides of the nose." }],
    t1: {
      d: "Never tip the head back during a nosebleed. The blood does not stop — it just runs down the throat where you cannot see it, and it makes people sick.",
      task: "Learn it properly: sit up, lean forwards, pinch the soft part for 10 to 15 minutes without letting go.",
      q: "Should you tip your head back during a nosebleed?",
      a: "No — lean forwards instead."
    },
    t2: {
      d: "Pinching works because it presses Little's area directly against the septum. Letting go every minute to check restarts the clock, which is the commonest mistake people make.",
      task: "Time 15 minutes and see how long that actually feels. That is why people let go too early.",
      q: "Why must you keep pinching for the full 10 to 15 minutes?",
      a: "Releasing early disrupts the forming clot and the bleeding restarts."
    },
    t3: {
      d: "Persistent bleeding may need cautery with silver nitrate or nasal packing. Posterior bleeds, more common in older patients, are harder to control and may require admission. Recurrent unexplained bleeding, easy bruising or a family history should prompt thought about a clotting disorder.",
      task: "Look up how nasal cautery is performed and why only one side of the septum is treated at a time.",
      q: "Why is cautery not performed on both sides of the septum at once?",
      a: "Because it risks damaging the blood supply and causing a septal perforation."
    }
  },
  {
    title: "Blocked noses",
    what: "A blocked nose has many causes, and telling them apart is a big part of ENT clinic. Colds block noses for days, allergy for seasons, large adenoids for years, and a bent septum for life.",
    facts: [
      "Allergic rhinitis causes sneezing, itching and clear runny discharge.",
      "Enlarged adenoids block the back of the nose in children.",
      "A deviated septum blocks one side consistently."
    ],
    words: [{ w: "Rhinitis", m: "Inflammation of the lining of the nose, causing blockage and running." }],
    t1: {
      d: "One side always blocked, for years, is a very different story from both sides blocked for four days. Doctors listen hard to that difference.",
      task: "Ask someone with hay fever what their symptoms are and how long they last each year.",
      q: "What is allergic rhinitis usually called in everyday speech?",
      a: "Hay fever."
    },
    t2: {
      d: "Duration and pattern are diagnostic. Seasonal and itchy suggests allergy; constant and one-sided suggests a structural cause; a child who snores, mouth-breathes and sounds blocked all year suggests adenoids.",
      task: "Write three questions that would help you tell allergy from adenoids in a seven-year-old.",
      q: "What does a consistently one-sided blockage suggest?",
      a: "A structural cause, such as a deviated septum."
    },
    t3: {
      d: "Unilateral blockage with bloody discharge in an adult is a red flag requiring nasendoscopy to exclude tumour. In a small child, unilateral offensive discharge is a foreign body until proven otherwise — usually something they pushed up there and forgot.",
      task: "Look up the commonest objects removed from children's noses and how they are retrieved.",
      q: "What does one-sided smelly nasal discharge in a toddler suggest?",
      a: "A foreign body in the nose until proven otherwise."
    }
  },
  {
    title: "Why nose breathing matters",
    what: "Breathing through your mouth bypasses everything the nose does. In children, long-term mouth breathing is linked with disturbed sleep, daytime tiredness and effects on facial growth, so ENT surgeons take it seriously.",
    facts: [
      "Mouth breathing skips warming, filtering and humidifying.",
      "Persistent snoring in a child is not normal and deserves assessment.",
      "The commonest cause in children is large tonsils and adenoids."
    ],
    words: [{ w: "Obstructive sleep apnoea", m: "Repeated pauses in breathing during sleep caused by the airway blocking." }],
    t1: {
      d: "A child who snores loudly every night, sleeps restlessly and is exhausted all day is not lazy. Their airway may be blocking while they sleep.",
      task: "Find out what adenoids are and where they sit.",
      q: "Is loud snoring every night normal in a child?",
      a: "No — it should be assessed."
    },
    t2: {
      d: "In children, obstructive sleep apnoea often shows as hyperactivity, poor concentration and irritability rather than sleepiness — and it is sometimes mistaken for ADHD. Removing tonsils and adenoids frequently transforms it.",
      task: "Write down three daytime signs that a child might not be sleeping properly.",
      q: "How does sleep apnoea often present in children?",
      a: "As hyperactivity, poor concentration and irritability rather than obvious sleepiness."
    },
    t3: {
      d: "Paediatric OSA is assessed by history, observed apnoeas, and where necessary sleep studies or oximetry. Adenotonsillectomy is the first-line treatment and outcomes are generally excellent, with measurable improvements in behaviour, growth and school performance.",
      task: "Look up how a sleep study is performed in children and what it records.",
      q: "What is the usual first-line treatment for childhood obstructive sleep apnoea?",
      a: "Removing the tonsils and adenoids."
    }
  }
]
},
{
m: 4, name: "April", topic: "The throat: voice, swallowing and tonsils",
intro: "The last letter of ENT, and the busiest crossroads in the body — where the tube for air and the tube for food cross over each other several hundred times a day.",
lessons: [
  {
    title: "The crossroads",
    what: "Air and food both enter through your mouth and nose, then have to go to different places: air to the lungs, food to the stomach. The throat is where those paths cross, and getting it wrong is dangerous.",
    facts: [
      "The windpipe (trachea) carries air, and sits in front.",
      "The food pipe (oesophagus) sits behind it.",
      "Choking is food taking the wrong turning."
    ],
    words: [
      { w: "Pharynx", m: "The medical name for the throat." },
      { w: "Trachea", m: "The windpipe, carrying air to the lungs." }
    ],
    t1: {
      d: "Imagine a railway junction where two trains use the same track for a moment. It works perfectly, thousands of times a day — but it has to be timed exactly right.",
      task: "Put your fingers gently on the front of your neck and swallow. Feel the whole structure lift.",
      q: "Which tube is in front, the windpipe or the food pipe?",
      a: "The windpipe."
    },
    t2: {
      d: "The pharynx is divided into three: nasopharynx behind the nose, oropharynx behind the mouth, and laryngopharynx leading down to the voice box and the oesophagus. ENT surgeons use these names constantly.",
      task: "Draw a side view of the head and neck and label the three parts of the pharynx.",
      q: "Which part of the pharynx sits behind the nose?",
      a: "The nasopharynx."
    },
    t3: {
      d: "The upper airway is the ENT surgeon's territory, and airway emergencies are the specialty's most time-critical work. In a completely obstructed airway, a surgical airway — cricothyroidotomy or tracheostomy — may be the only option, and ENT is usually the team called.",
      task: "Find out what a tracheostomy is and one reason a child might need one.",
      q: "Why is ENT called to airway emergencies?",
      a: "Because the upper airway is their specialty, and they can create a surgical airway if needed."
    }
  },
  {
    title: "How you make a voice",
    what: "Your voice box sits at the front of your neck and contains two folds of tissue. Push air between them and they vibrate, hundreds of times a second. That vibration is sound; your mouth and tongue then shape it into words.",
    facts: [
      "The voice box is the larynx.",
      "The two folds are the vocal folds, often called vocal cords.",
      "Tighter folds vibrate faster and produce a higher pitch."
    ],
    words: [{ w: "Larynx", m: "The voice box, at the front of the neck, containing the vocal folds." }],
    t1: {
      d: "Stretch the neck of a balloon and let air out. The squeal is the rubber vibrating, and that is exactly how your voice works.",
      task: "Put your fingers on the front of your throat and hum. Feel the buzz — that is your vocal folds.",
      q: "What vibrates to make your voice?",
      a: "The vocal folds in the larynx."
    },
    t2: {
      d: "Children's vocal folds are short, so they vibrate fast and give a high voice. During puberty the larynx grows, the folds lengthen, and the voice drops — dramatically in boys, which is why voices break.",
      task: "Find out roughly how many times per second vocal folds vibrate for a low note and a high one.",
      q: "Why do voices get deeper during puberty?",
      a: "The larynx grows and the vocal folds lengthen, so they vibrate more slowly."
    },
    t3: {
      d: "The recurrent laryngeal nerve supplies almost all the muscles of the larynx and loops down into the chest before returning up the neck, which makes it vulnerable during thyroid surgery. Injury causes vocal fold palsy, a hoarse breathy voice, and sometimes an unsafe swallow.",
      task: "Look up the course of the recurrent laryngeal nerve and why it is such an unusual route.",
      q: "What happens if the recurrent laryngeal nerve is damaged?",
      a: "The vocal fold on that side is paralysed, causing hoarseness and sometimes swallowing difficulty."
    }
  },
  {
    title: "Swallowing safely",
    what: "Swallowing looks simple and is not. It is a precisely timed sequence involving more than twenty muscles, in which breathing briefly stops and a flap seals the airway.",
    facts: [
      "That flap is the epiglottis.",
      "You swallow roughly 600 times a day, mostly without noticing.",
      "The first part is voluntary; after that it runs automatically."
    ],
    words: [{ w: "Epiglottis", m: "The flap that folds over the windpipe during swallowing to keep food out of the lungs." }],
    t1: {
      d: "Try to breathe in and swallow at exactly the same moment. You cannot — your body will not let you, and that is a safety feature.",
      task: "Swallow while holding your fingers on your throat and count how many separate movements you can feel.",
      q: "What stops food going into your lungs?",
      a: "The epiglottis folding over the windpipe."
    },
    t2: {
      d: "When this goes wrong food enters the airway — aspiration — which can cause choking or pneumonia. It becomes far more likely after a stroke or with some neurological conditions, and speech and language therapists assess it.",
      task: "Find out what a speech and language therapist assesses besides speech.",
      q: "What is aspiration?",
      a: "Food or liquid entering the airway instead of the food pipe."
    },
    t3: {
      d: "Swallowing has oral, pharyngeal and oesophageal phases, assessed by videofluoroscopy or FEES — fibreoptic endoscopic evaluation of swallowing, performed with a flexible scope. Persistent unilateral throat pain, dysphagia or a neck lump in an adult are red flags requiring urgent two-week-wait referral.",
      task: "Look up FEES and note what it lets clinicians see that a bedside assessment cannot.",
      q: "Name two red flag throat symptoms in an adult.",
      a: "Persistent difficulty swallowing and an unexplained neck lump (also persistent hoarseness and one-sided pain)."
    }
  },
  {
    title: "Tonsils and adenoids",
    what: "Tonsils sit either side at the back of the mouth; adenoids sit higher up, behind the nose, where you cannot see them. Both are lumps of immune tissue guarding the entrance to the airway, and both usually shrink as you grow.",
    facts: [
      "They are part of a ring of immune tissue around the throat.",
      "Adenoids are largest around ages 3 to 7 and then shrink.",
      "Removing them does not leave a child defenceless — the rest of the immune system covers it."
    ],
    words: [{ w: "Adenoids", m: "Immune tissue at the back of the nose, above the tonsils, which cannot be seen through the mouth." }],
    t1: {
      d: "Think of them as guard posts at the entrance to the airway, sampling everything that comes in. Useful when you are small, less necessary later.",
      task: "Open your mouth in a mirror and look for your tonsils either side of the back of your tongue.",
      q: "Can you see your adenoids in a mirror?",
      a: "No — they sit behind the nose, out of sight."
    },
    t2: {
      d: "Big adenoids block the back of the nose, causing mouth breathing, snoring and a blocked-sounding voice — and they also block the Eustachian tube openings, which is one route to glue ear. That is why adenoids are often removed at the same time as grommets are put in.",
      task: "Explain in two sentences how adenoids and glue ear are connected.",
      q: "How can adenoids cause ear problems?",
      a: "They block the Eustachian tube openings at the back of the nose, so the middle ear cannot ventilate."
    },
    t3: {
      d: "Tonsils and adenoids form part of Waldeyer's ring. Persistently asymmetrical tonsils, particularly with systemic symptoms, warrant investigation. Tonsillectomy indications in the UK follow criteria based on frequency of documented episodes — commonly seven in one year, five a year for two years, or three a year for three years.",
      task: "Look up the SIGN criteria for tonsillectomy and note why thresholds exist.",
      q: "Why are there strict criteria for tonsillectomy?",
      a: "Because the operation carries real risks, so it is only worthwhile when episodes are frequent enough to outweigh them."
    }
  },
  {
    title: "Sore throats: what's serious",
    what: "Almost all sore throats are viral and settle in a few days. A small number are not, and ENT exists partly to recognise those quickly.",
    facts: [
      "Most sore throats need fluids, rest and pain relief, not antibiotics.",
      "Difficulty breathing, drooling, or being unable to swallow saliva is an emergency.",
      "A muffled voice with one-sided swelling can mean an abscess."
    ],
    words: [{ w: "Quinsy", m: "A collection of pus beside the tonsil — a peritonsillar abscess. It usually needs draining." }],
    t1: {
      d: "A sore throat that stops someone swallowing their own saliva is completely different from an ordinary one. That is an emergency.",
      task: "Learn three warning signs that a sore throat needs urgent help.",
      q: "Name one emergency sign with a sore throat.",
      a: "Drooling because they cannot swallow their own saliva (also difficulty breathing)."
    },
    t2: {
      d: "Croup is a viral illness causing a barking cough and a harsh noise on breathing in, called stridor. Stridor tells you the narrowing is in the upper airway, and it is a sound worth learning to recognise.",
      task: "Listen to a recording of stridor and of a croup cough, and note how distinctive both are.",
      q: "What does stridor tell you?",
      a: "That the airway is narrowed at or above the level of the voice box."
    },
    t3: {
      d: "Acute epiglottitis, once a classic paediatric emergency, is now rare because of the Hib vaccine — a good demonstration of vaccination reshaping a specialty. A child sitting forward, drooling and quiet should never be examined with a tongue depressor; the airway is secured first, in theatre.",
      task: "Read about epiglottitis before and after Hib vaccination and note the change in incidence.",
      q: "Why must you not examine the throat of a child with suspected epiglottitis?",
      a: "It can precipitate complete airway obstruction — the airway must be secured first, by an experienced team."
    }
  },
  {
    title: "Looking after your voice",
    what: "Your voice is a physical structure that can be strained, swollen and injured. Teachers, singers and shouters all get voice problems, and most are preventable.",
    facts: [
      "Hoarseness means the vocal folds are not vibrating cleanly.",
      "Shouting, whispering and dehydration all strain the voice.",
      "Hoarseness lasting more than three weeks in an adult needs checking."
    ],
    words: [{ w: "Hoarseness", m: "A rough, breathy or weak voice caused by the vocal folds not vibrating normally." }],
    t1: {
      d: "Whispering is not resting your voice. It strains the folds in a different way. Genuine rest means quiet, normal speech, or silence.",
      task: "After the next noisy event you go to, notice how your voice sounds and how long it takes to recover.",
      q: "Is whispering a good way to rest a sore voice?",
      a: "No — it strains the vocal folds too."
    },
    t2: {
      d: "Repeated strain causes vocal nodules — small thickenings on the folds, common in children who shout a lot and in singers. They are usually treated with voice therapy rather than surgery.",
      task: "Find out what a speech and language therapist does in voice therapy.",
      q: "How are vocal nodules usually treated?",
      a: "With voice therapy rather than an operation."
    },
    t3: {
      d: "Persistent hoarseness beyond three weeks in an adult, especially a smoker, requires laryngoscopy to exclude malignancy. In clinic this is examined with a flexible nasendoscope passed through the nose — a routine outpatient procedure that ENT trainees perform constantly.",
      task: "Look up flexible nasendoscopy and describe what the patient experiences.",
      q: "Why is persistent hoarseness in an adult investigated urgently?",
      a: "To rule out laryngeal cancer, which is treatable when caught early."
    }
  }
]
},
{
m: 5, name: "May", topic: "Balance and dizziness",
intro: "The other job your ears do, and the one nobody thinks about until it goes wrong. Balance problems are among the most distressing things a patient can experience, and the ear is usually where they start.",
lessons: [
  {
    title: "The balance organs",
    what: "Next to the cochlea sits a set of fluid-filled loops and chambers that detect movement. Three loops set at right angles detect turning; two chambers detect gravity and straight-line movement.",
    facts: [
      "The three loops are the semicircular canals.",
      "The two chambers are the utricle and saccule.",
      "Together they are called the vestibular system."
    ],
    words: [{ w: "Vestibular system", m: "The parts of the inner ear that detect movement and keep you balanced." }],
    t1: {
      d: "Imagine three loops of tubing set at right angles, like the corner of a box. Whichever way you turn your head, at least one of them notices.",
      task: "Shake your head gently while staring at one word on this page. It stays sharp — that is your balance system moving your eyes to compensate.",
      q: "What do the semicircular canals detect?",
      a: "Your head turning."
    },
    t2: {
      d: "The reflex you just used is the vestibulo-ocular reflex: your ears tell your eyes exactly how far to move so the world stays still. It is faster than anything driven by vision alone.",
      task: "Now hold your head still and shake this page instead. Notice the text blurs — the reflex only works one way round.",
      q: "What is the vestibulo-ocular reflex for?",
      a: "Keeping your vision steady by moving your eyes to cancel out head movement."
    },
    t3: {
      d: "The utricle and saccule contain otoconia — tiny calcium carbonate crystals resting on a gel — which shift under gravity and acceleration. Displaced otoconia cause BPPV, the commonest cause of vertigo, and understanding that anatomy is what makes it treatable.",
      task: "Find out what otoconia are made of and where they sit.",
      q: "What do the utricle and saccule detect?",
      a: "Gravity and straight-line acceleration."
    }
  },
  {
    title: "Three senses, one answer",
    what: "Balance is not one sense. Your brain constantly compares three streams of information: what your ears feel, what your eyes see, and what your joints and muscles report. When they agree, you feel fine.",
    facts: [
      "Eyes, inner ears and body position sense all feed in.",
      "Losing one is usually manageable; losing two is not.",
      "Balance gets harder in the dark because vision drops out."
    ],
    words: [{ w: "Proprioception", m: "Your sense of where your body parts are without looking at them." }],
    t1: {
      d: "Stand on one leg with your eyes open, then close them. Much harder — because you have just removed one of the three sources your brain was using.",
      task: "Try it safely near a wall. Time yourself with eyes open and eyes closed.",
      q: "Why is balancing harder with your eyes shut?",
      a: "Your brain loses one of the three information streams it uses."
    },
    t2: {
      d: "This is why older people fall more often: eyesight, inner ear function and joint sensation all decline together, and losing several at once removes the redundancy the system depends on.",
      task: "List three things that would make balancing harder for an 80-year-old at night.",
      q: "Why do balance problems get worse with age?",
      a: "Because vision, inner ear function and proprioception all decline together."
    },
    t3: {
      d: "Vestibular rehabilitation exploits central compensation: the brain can be retrained to reweight its inputs after a peripheral vestibular loss. Exercises deliberately provoke mild symptoms, because avoidance prevents compensation — which is counterintuitive and needs explaining carefully to patients.",
      task: "Look up vestibular rehabilitation and note why avoidance makes things worse.",
      q: "Why do vestibular rehabilitation exercises deliberately provoke symptoms?",
      a: "Because the brain only compensates if it experiences the mismatch it needs to correct."
    }
  },
  {
    title: "Motion sickness",
    what: "Motion sickness happens when your ears and eyes disagree. Reading in a moving car, your eyes say still and your ears say moving, and your brain reacts badly to the contradiction.",
    facts: [
      "It is a sensory mismatch, not a weakness.",
      "Children between about 2 and 12 are most affected.",
      "Looking at the horizon helps because it restores agreement."
    ],
    words: [{ w: "Sensory mismatch", m: "When two senses report different things about the same situation." }],
    t1: {
      d: "Your eyes say the book is still. Your ears say you are moving. Your brain cannot reconcile it, and makes you feel sick.",
      task: "Next car journey, look at the horizon instead of down. Notice the difference.",
      q: "Why does reading in a car make people sick?",
      a: "Because the eyes report stillness while the ears report movement."
    },
    t2: {
      d: "Drivers get travel sick far less than passengers, because they can anticipate every movement before it happens. Prediction lets the brain expect what the ears are about to report.",
      task: "Ask around whether drivers in your family ever feel travel sick as passengers.",
      q: "Why do drivers rarely get travel sick?",
      a: "They anticipate the movements, so the senses no longer conflict unexpectedly."
    },
    t3: {
      d: "The leading explanation is the sensory conflict theory, with the emetic response possibly an evolved reaction to neurotoxins that produce similar mismatch. Antihistamines and hyoscine act centrally, and habituation with repeated exposure is genuinely effective.",
      task: "Look up why sailors stop feeling seasick after several days.",
      q: "What is habituation in the context of motion sickness?",
      a: "The brain gradually adapting to a repeated sensory mismatch until it stops reacting."
    }
  },
  {
    title: "When crystals come loose",
    what: "The commonest cause of severe dizziness is also one of the most satisfying things in medicine to treat. Tiny crystals come loose in the inner ear and drift into a balance canal, where they make it report movement that is not happening.",
    facts: [
      "It is called BPPV: benign paroxysmal positional vertigo.",
      "Attacks are brief, violent, and triggered by moving the head.",
      "It can often be cured in a single appointment."
    ],
    words: [{ w: "Vertigo", m: "The false sensation that you or the world is spinning. It is not the same as feeling faint." }],
    t1: {
      d: "Imagine grit falling into a spirit level. The bubble now reports a tilt that is not there. That is roughly what BPPV does.",
      task: "Learn the difference between vertigo, which spins, and light-headedness, which does not.",
      q: "Is vertigo the same as feeling faint?",
      a: "No — vertigo is a spinning sensation."
    },
    t2: {
      d: "Treatment is a sequence of head movements that rolls the crystals back where they belong. It is called the Epley manoeuvre, it takes a few minutes, and it works for most people.",
      task: "Watch a video of the Epley manoeuvre and follow along with the positions.",
      q: "How is BPPV usually treated?",
      a: "With the Epley manoeuvre — a sequence of head positions that repositions the crystals."
    },
    t3: {
      d: "Diagnosis uses the Dix-Hallpike test, which provokes characteristic torsional nystagmus with a brief latency and fatigue on repetition. Those features distinguish peripheral from central causes — and a central cause, such as posterior circulation stroke, is what you must not miss.",
      task: "Look up the Dix-Hallpike test and the features that suggest a central rather than peripheral cause.",
      q: "Why does distinguishing peripheral from central vertigo matter?",
      a: "Because central causes can include stroke, which needs urgent treatment."
    }
  },
  {
    title: "When balance fails properly",
    what: "Some inner ear conditions cause dizziness lasting hours or days rather than seconds. They are frightening, exhausting and often misunderstood by people around the patient.",
    facts: [
      "Vestibular neuritis causes sudden severe vertigo lasting days, without hearing loss.",
      "Labyrinthitis is similar but affects hearing too.",
      "Ménière's disease causes attacks with vertigo, hearing loss, tinnitus and a feeling of fullness in the ear."
    ],
    words: [{ w: "Tinnitus", m: "Hearing a sound with no external source — ringing, buzzing or hissing." }],
    t1: {
      d: "Severe vertigo is not just feeling a bit dizzy. People cannot stand, cannot read, and are often violently sick. It is genuinely disabling.",
      task: "Spin around ten times and try to walk a straight line, safely. Now imagine that lasting two days.",
      q: "What is tinnitus?",
      a: "Hearing a sound, like ringing or buzzing, that has no external source."
    },
    t2: {
      d: "Because you cannot see dizziness, patients are often disbelieved or told it is anxiety. Taking it seriously and explaining the mechanism is a large part of the treatment, and patients remember whoever finally did.",
      task: "Write down how you would explain vertigo to a classmate who has never had it.",
      q: "Why are people with balance disorders often disbelieved?",
      a: "Because the symptoms are invisible to everyone else."
    },
    t3: {
      d: "Ménière's is diagnosed clinically on the combination of episodic vertigo lasting 20 minutes to 12 hours, documented low-frequency sensorineural hearing loss, tinnitus and aural fullness. Management ranges from salt restriction and betahistine through intratympanic injections to, rarely, surgery.",
      task: "Look up how Ménière's disease is managed and why treatment is stepped.",
      q: "Which four features characterise Ménière's disease?",
      a: "Episodic vertigo, fluctuating hearing loss, tinnitus and a feeling of fullness in the ear."
    }
  },
  {
    title: "The nerve that carries it all",
    what: "Hearing and balance leave the inner ear together, on a single nerve, and travel into the brainstem. Running right alongside is the nerve that moves your face — which is why ear surgeons think about facial movement constantly.",
    facts: [
      "The vestibulocochlear nerve is the eighth cranial nerve.",
      "The facial nerve is the seventh, and passes through the same part of the skull.",
      "Damage to the facial nerve causes one side of the face to droop."
    ],
    words: [{ w: "Vestibulocochlear nerve", m: "The nerve carrying both hearing and balance information from the inner ear to the brain." }],
    t1: {
      d: "Two of the most important nerves in your head run side by side through a tunnel of bone smaller than a pea. That is what an ear surgeon works around.",
      task: "Raise your eyebrows, close your eyes tightly and smile. That is your facial nerve working on both sides.",
      q: "Which nerve carries hearing to the brain?",
      a: "The vestibulocochlear nerve, the eighth cranial nerve."
    },
    t2: {
      d: "Bell's palsy is a sudden weakness of the facial nerve, usually on one side and usually temporary. Because it can look like a stroke, anyone with sudden facial weakness must be assessed urgently rather than waiting.",
      task: "Find out one way doctors distinguish Bell's palsy from a stroke on examination.",
      q: "Why must sudden facial weakness be assessed urgently?",
      a: "Because it could be a stroke, which needs immediate treatment."
    },
    t3: {
      d: "In mastoid and cochlear implant surgery the facial nerve is identified and protected, often with continuous intraoperative nerve monitoring. A vestibular schwannoma — a benign tumour on the eighth nerve — classically presents with unilateral hearing loss and tinnitus, and is a key reason asymmetrical hearing loss is investigated with MRI.",
      task: "Look up vestibular schwannoma and note the classic presenting symptom.",
      q: "Why is one-sided hearing loss investigated with an MRI scan?",
      a: "To exclude a vestibular schwannoma or other tumour on the hearing nerve."
    }
  }
]
},
{
m: 6, name: "June", topic: "Children's ears: glue ear and grommets",
intro: "The heart of children's ENT. Glue ear and grommets are the commonest reason a child ever meets an ear surgeon, and this month covers exactly what goes wrong, why somebody decides to operate, and what those tiny tubes actually do.",
lessons: [
  {
    title: "Why children's ears are different",
    what: "Children get far more ear trouble than adults, and it is not bad luck. It comes down to one tube being the wrong shape until they grow.",
    facts: [
      "A child's Eustachian tube is shorter, floppier and almost horizontal.",
      "That means it drains badly and lets infection travel up easily from the nose.",
      "As the skull grows the tube lengthens and tips downwards, and the problem usually fades."
    ],
    words: [{ w: "Eustachian tube", m: "The tube from the middle ear to the back of the nose that lets air in and fluid out." }],
    t1: {
      d: "Picture a drainpipe lying flat instead of sloping down. Water sits in it instead of running out. A small child's ear tube is the flat one.",
      task: "Find out which years children get the most ear trouble. The answer is usually between two and five.",
      q: "Why do young children get more ear problems than adults?",
      a: "Their Eustachian tube is short and nearly horizontal, so it drains badly."
    },
    t2: {
      d: "Add to that: children get far more colds, they have large adenoids sitting right where the tube opens, and their immune systems are still learning. Several things stack up at once, in exactly the years the tube is at its worst.",
      task: "List the four reasons a four-year-old is more likely to get glue ear than a fourteen-year-old.",
      q: "Name two reasons besides the tube shape.",
      a: "Frequent colds and large adenoids blocking the tube opening (also a still-developing immune system)."
    },
    t3: {
      d: "Eustachian tube angle changes from roughly 10 degrees in infancy to about 45 degrees in adults, alongside growth of the skull base. Risk is higher with cleft palate, Down syndrome, and passive smoke exposure — and glue ear is near-universal in children with cleft palate because the tensor veli palatini cannot open the tube properly.",
      task: "Find out why children with cleft palate almost always need grommets.",
      q: "Why does cleft palate cause persistent glue ear?",
      a: "The muscle that opens the Eustachian tube does not work properly, so the middle ear cannot ventilate."
    }
  },
  {
    title: "Ear infections",
    what: "An acute ear infection means germs multiplying in the middle ear. Pressure builds behind the eardrum, which is why it hurts so sharply and so suddenly, usually at night.",
    facts: [
      "The medical name is acute otitis media.",
      "It usually follows a cold, with germs travelling up the Eustachian tube.",
      "Most cases settle by themselves within a few days."
    ],
    words: [{ w: "Acute otitis media", m: "A sudden infection of the middle ear, causing pain, fever and a red bulging eardrum." }],
    t1: {
      d: "The pain comes from pressure. Sometimes the eardrum bursts, pus comes out, and the pain suddenly stops — alarming to see, but the drum almost always heals.",
      task: "Find out how many children have at least one ear infection before they turn five. The number is very high.",
      q: "What causes the pain in an ear infection?",
      a: "Pressure building up behind the eardrum."
    },
    t2: {
      d: "Antibiotics are not automatic. Most ear infections are viral or settle on their own, so doctors often use a delayed prescription — take it only if things are not improving in a couple of days. Pain relief matters more than antibiotics in most cases.",
      task: "Find out what a delayed antibiotic prescription is and why doctors use them.",
      q: "Why are antibiotics not given for every ear infection?",
      a: "Most settle on their own, and unnecessary antibiotics drive resistance."
    },
    t3: {
      d: "Antibiotics are recommended for children under two with bilateral infection, for otorrhoea, and for systemically unwell children. Mastoiditis — infection spreading into the mastoid bone behind the ear, with a pushed-forward pinna and swelling — is the complication to know, and it needs admission and often surgery.",
      task: "Look up the signs of mastoiditis and why the ear looks pushed forward.",
      q: "What is mastoiditis and why does it matter?",
      a: "Infection spreading into the bone behind the ear — a serious complication needing urgent treatment."
    }
  },
  {
    title: "Glue ear",
    what: "Glue ear is different from an ear infection. There is no fever and often no pain at all — just thick, sticky fluid sitting behind the eardrum, stopping it vibrating properly. The child simply cannot hear well.",
    facts: [
      "Its proper name is otitis media with effusion.",
      "The main symptom is muffled hearing, not pain.",
      "It is extremely common between the ages of about 2 and 5."
    ],
    words: [{ w: "Glue ear", m: "Thick fluid trapped behind an intact eardrum, causing muffled hearing." }],
    t1: {
      d: "Put your fingers in your ears and get someone to talk to you. That muffled, underwater sound is roughly what glue ear is like — all day, for months.",
      task: "Try the fingers-in-ears test while someone reads aloud. Write down how many words you miss.",
      q: "What is the main symptom of glue ear?",
      a: "Muffled hearing."
    },
    t2: {
      d: "Because it does not hurt, it is often missed for a long time. The clues are behavioural: turning the television up, not answering when called, seeming to daydream, mispronouncing words, or falling behind at school. Children are frequently thought to be inattentive when in fact they cannot hear.",
      task: "Write down five things a teacher might notice in a child with undiagnosed glue ear.",
      q: "Why is glue ear often missed?",
      a: "It is usually painless, so it shows up as behaviour or speech problems rather than illness."
    },
    t3: {
      d: "UK guidance recommends watchful waiting with two hearing tests over three months, because a large proportion resolve spontaneously. Intervention is considered for persistent bilateral effusion with hearing loss affecting development, education or behaviour — the threshold is functional impact, not the fluid itself.",
      task: "Look up why a three-month period of watchful waiting is recommended before grommets.",
      q: "Why wait three months before treating glue ear?",
      a: "Because most cases resolve on their own, and surgery should be reserved for those that do not."
    }
  },
  {
    title: "What a grommet actually is",
    what: "A grommet is a tiny tube, usually about a millimetre and a half across, placed through a small cut in the eardrum. It does not drain fluid out through the tube like a plughole — it lets air in, which is what the middle ear was missing.",
    facts: [
      "It does the job the blocked Eustachian tube stopped doing.",
      "Hearing usually improves immediately.",
      "Other names for it are tympanostomy tube or ventilation tube."
    ],
    words: [{ w: "Grommet", m: "A tiny tube placed through the eardrum to let air into the middle ear." }],
    t1: {
      d: "Think of a sealed juice carton. Push a straw in and air can get in, so the liquid can move. A grommet is that air hole for your middle ear.",
      task: "Look up a photograph of a grommet next to a coin. They are far smaller than most people imagine.",
      q: "What does a grommet actually let in?",
      a: "Air — it ventilates the middle ear."
    },
    t2: {
      d: "With air behind it again, the eardrum can vibrate normally, the sticky fluid clears, and hearing returns. Many children describe the world as suddenly loud afterwards, because they had slowly forgotten what normal hearing sounded like.",
      task: "Find out what children commonly say in the days after grommets go in. \"Why is everything so loud?\" is the classic.",
      q: "Why does hearing improve once air is back in the middle ear?",
      a: "The eardrum can vibrate freely again, so sound is transmitted normally."
    },
    t3: {
      d: "The operation is a myringotomy — a small radial incision, usually in the anteroinferior quadrant — with the tube inserted through it. Short-term Shepard or Shah tubes extrude within months; T-tubes stay far longer but carry a higher risk of persistent perforation.",
      task: "Look up the difference between a short-term grommet and a T-tube, and when each is chosen.",
      q: "What is a myringotomy?",
      a: "A small surgical incision in the eardrum, through which a grommet is placed."
    }
  },
  {
    title: "The day of the operation",
    what: "Grommet surgery is short, done under general anaesthetic, and almost always a day case — in and home the same day. Knowing what actually happens takes most of the fear out of it.",
    facts: [
      "The operation itself usually takes around 15 minutes.",
      "You are asleep for it, and feel nothing.",
      "Most children are home within a few hours and back at school quickly."
    ],
    words: [{ w: "Day case", m: "An operation where you come in and go home on the same day." }],
    t1: {
      d: "Nothing is cut on the outside at all. The surgeon works down the ear canal through a microscope, so there is no scar to see afterwards.",
      task: "Find out what a child is told before a day-case operation, and in what order the day happens.",
      q: "Is there a scar after grommet surgery?",
      a: "No — the surgeon works through the ear canal."
    },
    t2: {
      d: "The order is usually: arrive and get checked in, meet the surgeon and anaesthetist, no food beforehand, then off to theatre. Children often go to sleep breathing through a mask rather than with a needle. Waking up feeling confused or upset is normal and passes quickly.",
      task: "Write, in order, the steps of a day-case operation from arriving to going home.",
      q: "Why can you not eat before an operation?",
      a: "Because food in the stomach is dangerous under anaesthetic if it comes back up."
    },
    t3: {
      d: "Adenoidectomy is often performed at the same sitting where nasal obstruction or recurrent effusion is a factor, and there is evidence it reduces the need for repeat grommets. Risks discussed at consent include persistent perforation, early extrusion, infection and, rarely, tympanosclerosis.",
      task: "Look up what informed consent involves and why risks must be discussed even when small.",
      q: "Why are adenoids sometimes removed at the same time as grommets are inserted?",
      a: "Because they block the Eustachian tube openings, and removing them reduces the chance of the fluid returning."
    }
  },
  {
    title: "Afterwards",
    what: "Grommets are temporary by design. As the eardrum constantly renews itself, it slowly pushes the tube outwards until it falls out on its own — usually without anyone noticing.",
    facts: [
      "Most fall out within 6 to 12 months.",
      "The eardrum then heals over the small hole.",
      "Sometimes glue ear returns and a second set is needed. That is common, not a failure."
    ],
    words: [{ w: "Extrusion", m: "The grommet working its way out of the eardrum on its own." }],
    t1: {
      d: "The eardrum grows outwards, like a fingernail. It simply carries the grommet along with it until it drops out into the ear canal.",
      task: "Find out how families usually notice a grommet has come out. Most of them never do.",
      q: "Do grommets have to be taken out in another operation?",
      a: "Usually not — they fall out by themselves."
    },
    t2: {
      d: "Advice about swimming has changed. Most children with grommets can swim normally without earplugs; the main things to avoid are diving deep and getting dirty water in. Always follow the surgeon's own advice, since it varies with the type of tube.",
      task: "Find out what current advice says about swimming with grommets, and how it has changed.",
      q: "Can most children swim with grommets in?",
      a: "Yes — routine earplugs are usually not needed, though deep diving is avoided."
    },
    t3: {
      d: "Follow-up includes audiometry to confirm hearing has recovered and otoscopy to check tube position and patency. A small proportion develop a persistent perforation requiring later myringoplasty, and tympanosclerosis — white chalky patches on the drum — is common and usually harmless.",
      task: "Look up myringoplasty and when it is offered.",
      q: "What is checked at a grommet follow-up appointment?",
      a: "Whether hearing has improved, and whether the grommet is still in place and open."
    }
  }
]
},
{
m: 7, name: "July", topic: "Hearing loss and how we help",
intro: "What happens when hearing does not come back — how it is measured, what can be done, and how to treat deaf people as people rather than as problems to fix.",
lessons: [
  {
    title: "Measuring hearing",
    what: "Hearing is measured in two directions at once: how loud a sound has to be before you notice it, and at which pitches. The result is drawn as a graph called an audiogram.",
    facts: [
      "Loudness is measured in decibels (dB).",
      "Pitch is measured in hertz (Hz) — how many vibrations per second.",
      "Human hearing normally covers roughly 20 Hz to 20,000 Hz."
    ],
    words: [{ w: "Audiogram", m: "A graph showing the quietest sound a person can hear at each pitch." }],
    t1: {
      d: "A whisper is about 30 decibels, conversation about 60, a lawnmower about 90. Every step up that scale is much bigger than it looks.",
      task: "Find out how loud a concert is in decibels, and compare it with a conversation.",
      q: "What are the two things an audiogram measures?",
      a: "Loudness in decibels and pitch in hertz."
    },
    t2: {
      d: "The decibel scale is logarithmic, so 10 dB more is around twice as loud to your ear, and 100 dB is enormously more energy than 90. Damage risk rises steeply with both loudness and time — which is why the safe listening time halves for every few decibels.",
      task: "Check whether your phone has a headphone volume limiter, and set it.",
      q: "Why is the decibel scale not a simple linear one?",
      a: "It is logarithmic, so each step represents a large multiplication of sound energy."
    },
    t3: {
      d: "Pure tone audiometry tests air and bone conduction separately; a gap between them indicates a conductive loss, while both being reduced together indicates sensorineural. Tympanometry measures middle ear compliance, and a flat type B trace is the classic finding in glue ear.",
      task: "Look up what a type B tympanogram looks like and what it indicates.",
      q: "What does an air-bone gap on an audiogram indicate?",
      a: "A conductive hearing loss — sound is not getting through the outer or middle ear."
    }
  },
  {
    title: "Two kinds of hearing loss",
    what: "The single most useful distinction in ear medicine is whether the problem is getting sound in, or detecting it once it arrives. The first is usually fixable; the second usually is not.",
    facts: [
      "Conductive loss: a blockage in the outer or middle ear.",
      "Sensorineural loss: damage to the cochlea or the hearing nerve.",
      "Mixed loss means both at once."
    ],
    words: [
      { w: "Conductive loss", m: "Hearing loss because sound cannot get through to the inner ear." },
      { w: "Sensorineural loss", m: "Hearing loss because the cochlea or nerve is damaged." }
    ],
    t1: {
      d: "Conductive is like a door being shut — open it and the sound comes through. Sensorineural is like the microphone itself being broken.",
      task: "Sort these into the two types: wax blockage, glue ear, loud-noise damage, ageing.",
      q: "Which type of hearing loss is usually permanent?",
      a: "Sensorineural."
    },
    t2: {
      d: "Glue ear and wax cause conductive loss, so grommets or wax removal fix them. Noise damage, ageing, some infections and some medicines cause sensorineural loss, where the aim is to help someone hear better rather than to restore what has gone.",
      task: "Find out what ototoxic means and name one medicine that can damage hearing.",
      q: "Which type of hearing loss do grommets treat?",
      a: "Conductive — they restore sound transmission through the middle ear."
    },
    t3: {
      d: "Weber and Rinne tuning fork tests localise the loss at the bedside: in conductive loss Weber lateralises to the affected ear and Rinne is negative on that side. Sudden sensorineural hearing loss is an emergency requiring steroids within days, and it is frequently missed by non-specialists.",
      task: "Look up the Weber and Rinne tests and work out the pattern for a left conductive loss.",
      q: "Why is sudden one-sided sensorineural hearing loss an emergency?",
      a: "Because early steroid treatment substantially improves the chance of recovery."
    }
  },
  {
    title: "Testing a newborn",
    what: "Almost every baby in the UK has their hearing screened within the first few weeks of life. This matters enormously, because hearing is what language is built from, and the brain has a limited window in which to build it.",
    facts: [
      "The first test measures a faint echo the healthy cochlea produces itself.",
      "A second test measures the brain's electrical response to sound.",
      "Neither test hurts, and babies usually sleep through both."
    ],
    words: [{ w: "Otoacoustic emissions", m: "A faint sound produced by a healthy cochlea, used to screen newborn hearing." }],
    t1: {
      d: "A healthy inner ear does not just receive sound — it makes a tiny sound of its own. The screening test listens for that echo coming back.",
      task: "Find out how old a baby usually is when hearing screening happens.",
      q: "Does newborn hearing screening hurt?",
      a: "No — the baby usually sleeps through it."
    },
    t2: {
      d: "Not passing the first screen does not mean a baby is deaf. Fluid or debris left over from birth is a common reason, and most babies pass on retesting. Explaining that clearly to a frightened parent is part of the job.",
      task: "Write two sentences you would say to a parent whose baby needs a repeat hearing screen.",
      q: "Does failing the first newborn screen mean a baby is deaf?",
      a: "No — it means a further test is needed, and most babies pass it."
    },
    t3: {
      d: "Screening uses automated otoacoustic emissions followed by automated auditory brainstem response. Early identification and amplification before six months is associated with markedly better language outcomes, which is the entire justification for a universal programme.",
      task: "Look up the language outcomes of children identified before and after six months.",
      q: "Why must congenital hearing loss be identified in the first months?",
      a: "Because language development depends on hearing input during a critical early period."
    }
  },
  {
    title: "Hearing aids",
    what: "A hearing aid is a microphone, a computer and a speaker, small enough to sit in or behind an ear. It does not simply make everything louder — it selectively amplifies the frequencies that person has lost.",
    facts: [
      "Modern aids are programmed to the individual's audiogram.",
      "They can reduce background noise and connect to phones directly.",
      "They work for most kinds of hearing loss, but not all."
    ],
    words: [{ w: "Amplification", m: "Making sound louder in a controlled, targeted way." }],
    t1: {
      d: "A hearing aid is not like glasses, which make things instantly sharp. Brains take weeks to relearn sounds they had stopped hearing, and that adjustment is normal.",
      task: "Find out how small a modern hearing aid is, and what it costs the NHS.",
      q: "Does a hearing aid simply make everything louder?",
      a: "No — it amplifies the specific frequencies that person has lost."
    },
    t2: {
      d: "There is still stigma about wearing them, which stops people getting help for years — and untreated hearing loss is linked to isolation, low mood and worse outcomes in later life. Normalising them is a genuinely useful thing to do.",
      task: "Ask someone who wears a hearing aid what they wish other people understood about it.",
      q: "Why do many people delay getting a hearing aid?",
      a: "Stigma and embarrassment, despite the real harm of untreated hearing loss."
    },
    t3: {
      d: "Bone conduction devices bypass the outer and middle ear entirely, which suits atresia or chronic discharging ears, and can be worn on a softband in young children. Fitting uses real ear measurement to verify output at the eardrum rather than relying on prescription alone.",
      task: "Look up bone conduction hearing devices and who they suit.",
      q: "When is a bone conduction device used instead of a conventional aid?",
      a: "When the outer or middle ear cannot transmit sound — for example a malformed or chronically discharging ear."
    }
  },
  {
    title: "Cochlear implants",
    what: "When the hair cells are destroyed, no amount of amplification helps — there is nothing left to stimulate. A cochlear implant skips them entirely, converting sound into electrical pulses delivered straight to the hearing nerve.",
    facts: [
      "An electrode array is surgically threaded into the cochlea.",
      "An external processor picks up sound and sends it across the skin.",
      "It does not restore normal hearing — it creates a different, learnable kind."
    ],
    words: [{ w: "Cochlear implant", m: "A surgically implanted device that stimulates the hearing nerve directly." }],
    t1: {
      d: "The implant does the job the broken hair cells used to do, sending signals straight to the nerve instead.",
      task: "Watch a video of an implant being switched on for the first time, and notice how varied people's reactions are.",
      q: "What does a cochlear implant bypass?",
      a: "The damaged hair cells in the cochlea."
    },
    t2: {
      d: "Switch-on is not instant understanding. Early sound is often described as robotic or beeping, and it takes months of rehabilitation for the brain to learn to interpret it. Videos of people crying at switch-on show a real moment, but not the whole story.",
      task: "Find out how long rehabilitation usually takes after an implant is switched on.",
      q: "Why is rehabilitation needed after a cochlear implant?",
      a: "The brain has to learn to interpret an entirely new kind of signal."
    },
    t3: {
      d: "Candidacy depends on degree of loss, aided benefit and, in children, on timing — outcomes are strongly better with earlier implantation. Surgery carries risks including facial nerve injury, meningitis, and loss of any residual hearing in that ear, all of which must be discussed honestly.",
      task: "Look up why children receiving implants are vaccinated against pneumococcus beforehand.",
      q: "Why does age at implantation matter so much in children?",
      a: "Because the auditory pathway develops best when stimulated early, during the critical period."
    }
  },
  {
    title: "Deaf people are not broken",
    what: "Not everyone who is deaf wants to be fixed. Many Deaf people regard deafness as an identity and a culture with its own rich language, not as a medical defect — and a good ear surgeon has to understand that properly.",
    facts: [
      "British Sign Language is a full language with its own grammar, not English with hands.",
      "Deaf with a capital D usually refers to cultural identity rather than hearing level.",
      "Cochlear implants have been genuinely controversial within Deaf communities."
    ],
    words: [{ w: "BSL", m: "British Sign Language — a complete language, recognised in its own right." }],
    t1: {
      d: "Sign language is not mime and it is not English spelled out. It is a full language, with its own grammar, jokes, poetry and regional accents.",
      task: "Learn to fingerspell your own name in BSL or ASL this week.",
      q: "Is sign language just English done with hands?",
      a: "No — it is a complete language with its own grammar."
    },
    t2: {
      d: "The practical rules are simple: face the person, do not cover your mouth, do not shout, do not talk to the interpreter instead of the patient, and never say it does not matter. Most complaints from deaf patients are about being talked past, not about treatment.",
      task: "Practise having a conversation without any sound, using only writing and gesture. Notice what is hard.",
      q: "Who should you look at when speaking through an interpreter?",
      a: "The patient, not the interpreter."
    },
    t3: {
      d: "The tension between the medical model of deafness and the social or cultural model is genuine, and it matters most in decisions made for children who cannot yet consent. A surgeon who understands both positions can counsel families honestly; one who dismisses either will lose their trust immediately.",
      task: "Read one account by a Deaf adult about cochlear implants, then one from an implant surgeon, and note where they disagree.",
      q: "Why should a surgeon understand the cultural model of deafness?",
      a: "Because families make decisions within it, and dismissing it destroys trust and worsens care."
    }
  }
]
},
{
m: 8, name: "August", topic: "The operations an ENT surgeon does",
intro: "ENT is a surgical specialty, so at some point you have to be the person holding the instruments. This month is about what actually happens in an operating theatre.",
lessons: [
  {
    title: "Inside an operating theatre",
    what: "A theatre is a room kept deliberately clean, cool and organised, run by a team where everyone has a defined job. The surgeon is one member of it, not the whole thing.",
    facts: [
      "The team includes surgeons, an anaesthetist, scrub nurse, ODP and healthcare assistants.",
      "Everything touching the patient is sterile.",
      "Before any operation the whole team stops and runs a safety checklist out loud."
    ],
    words: [{ w: "Sterile field", m: "The area around the operation kept completely free of germs." }],
    t1: {
      d: "Nobody operates alone. A grommet operation lasting fifteen minutes still needs a team of about six people, all doing different jobs.",
      task: "List five different people who might be in theatre and what each one does.",
      q: "What does sterile mean?",
      a: "Completely free of germs."
    },
    t2: {
      d: "The WHO surgical safety checklist asks the team to confirm the patient's name, the operation, the correct side, allergies and equipment — out loud, before starting. It was introduced worldwide because these simple confirmations measurably reduce deaths and complications.",
      task: "Look up the WHO surgical safety checklist and note three things it confirms.",
      q: "Why does the whole team stop to run a checklist?",
      a: "Because saying it out loud catches errors — it measurably reduces complications and deaths."
    },
    t3: {
      d: "Wrong-site surgery is a never event, and in ENT that risk is real because ears, tonsils and sinuses are paired or bilateral. Marking, the team brief and the sign-in exist precisely to make it impossible for one person's error to reach the patient.",
      task: "Find out what a never event is and why the term is used.",
      q: "Why is wrong-site surgery a particular risk in ENT?",
      a: "Because so many structures are paired, so left and right must be confirmed explicitly."
    }
  },
  {
    title: "Being asleep for an operation",
    what: "General anaesthesia is not sleep. It is a carefully controlled, reversible state of unconsciousness, maintained by an anaesthetist who watches every breath and heartbeat for the whole operation.",
    facts: [
      "Children often go to sleep breathing a gas through a mask rather than by needle.",
      "The anaesthetist stays with the patient throughout.",
      "You wake up in a recovery area with a nurse beside you."
    ],
    words: [{ w: "Anaesthetist", m: "The doctor who puts you to sleep safely and looks after you throughout the operation." }],
    t1: {
      d: "The anaesthetist's whole job is you: your breathing, your heart, your temperature, your comfort. They never leave the room.",
      task: "Find out what numbing cream is and why it is put on a child's hand before theatre.",
      q: "Who looks after you while you are asleep for an operation?",
      a: "The anaesthetist."
    },
    t2: {
      d: "Being unable to eat beforehand is a safety rule, not fussiness: an anaesthetised person loses the reflexes that stop stomach contents entering the lungs. Waking up confused, shivery or tearful is common and settles quickly.",
      task: "Find out how many hours before surgery children usually stop eating and drinking, and why clear fluids differ.",
      q: "Why must the stomach be empty before an anaesthetic?",
      a: "Because the reflexes that protect the airway are lost, so stomach contents could enter the lungs."
    },
    t3: {
      d: "Paediatric anaesthesia is its own subspecialty: airway anatomy, drug handling and physiological reserve all differ. Shared-airway ENT surgery adds a specific challenge, since surgeon and anaesthetist are working in the same small space, which demands constant communication.",
      task: "Look up what a shared airway means in ENT surgery and why it needs careful planning.",
      q: "What makes ENT anaesthesia distinctive?",
      a: "Surgeon and anaesthetist share the same airway, so they must coordinate closely throughout."
    }
  },
  {
    title: "Grommets and adenoids",
    what: "This is the bread and butter of paediatric ENT. A surgeon may do several grommet operations in a single morning list, and it is often the operation trainees learn first.",
    facts: [
      "The whole operation takes around 15 minutes.",
      "The surgeon works down the ear canal using an operating microscope.",
      "Adenoids are often removed at the same time, through the mouth."
    ],
    words: [{ w: "Operating list", m: "The sequence of operations a surgical team does in one session." }],
    t1: {
      d: "Everything happens through the ear canal, using a microscope. Nothing is cut on the outside, and there is nothing to see afterwards.",
      task: "Find out roughly how many grommet operations are done each year in the UK. It is a very large number.",
      q: "How does the surgeon reach the eardrum?",
      a: "Down the ear canal, using an operating microscope."
    },
    t2: {
      d: "Children on a list are usually done youngest first, because the youngest tolerate fasting worst. Small organisational decisions like that are a real part of surgical care, not an afterthought.",
      task: "Work out why fasting is harder for a two-year-old than a twelve-year-old.",
      q: "Why are the youngest children usually operated on first?",
      a: "Because they cope least well with going without food and drink."
    },
    t3: {
      d: "Adenoidectomy is performed transorally with a mirror, using curettage, suction diathermy or coblation. Bleeding is the main early risk, and post-tonsillectomy or post-adenoidectomy bleeding presents as swallowing repeatedly — an important sign, because children swallow blood rather than spit it out.",
      task: "Look up why repeated swallowing is a warning sign after throat surgery in a child.",
      q: "Why can bleeding after throat surgery be hidden in children?",
      a: "Because they swallow the blood instead of spitting it out, so the only sign may be repeated swallowing."
    }
  },
  {
    title: "Taking tonsils out",
    what: "Tonsillectomy is one of the oldest operations still performed, and one where deciding whether to operate matters more than the operating. The recovery is genuinely uncomfortable, so the threshold has to be high.",
    facts: [
      "It is done through the mouth, with no external cut.",
      "Recovery typically takes around two weeks and is painful.",
      "Eating normally afterwards actually helps healing."
    ],
    words: [{ w: "Tonsillectomy", m: "An operation to remove the tonsils." }],
    t1: {
      d: "The old story about eating ice cream afterwards has some truth, but the real advice is to eat normal food. Chewing keeps the area clean and helps it heal.",
      task: "Ask anyone you know who has had their tonsils out how long the recovery really took.",
      q: "Is there a scar on the outside after tonsillectomy?",
      a: "No — it is done entirely through the mouth."
    },
    t2: {
      d: "Because recovery is hard, surgery is only offered when infections are frequent enough to justify it. Doctors count documented episodes over one to three years rather than relying on memory, which is why keeping a record matters.",
      task: "Find out how many sore throats a year make tonsillectomy worth considering.",
      q: "Why is tonsillectomy not offered to everyone with sore throats?",
      a: "The recovery is difficult and it carries risks, so it must be justified by frequent, documented episodes."
    },
    t3: {
      d: "Secondary haemorrhage occurs in roughly one in twenty cases, typically five to ten days postoperatively, and is the reason patients are told to stay near a hospital. It usually relates to infection of the healing bed rather than technique, and a small herald bleed can precede a major one.",
      task: "Look up primary versus secondary post-tonsillectomy haemorrhage and how each is managed.",
      q: "Why are patients told not to travel far after tonsillectomy?",
      a: "Because bleeding can occur days later and needs urgent hospital treatment."
    }
  },
  {
    title: "Operating on the ear itself",
    what: "Beyond grommets lies the surgery that defines otology: repairing eardrums, clearing disease out of the bone behind the ear, rebuilding the chain of tiny bones, and implanting devices.",
    facts: [
      "Myringoplasty repairs a hole in the eardrum.",
      "Mastoid surgery clears disease from the bone behind the ear.",
      "Cholesteatoma is skin growing where it should not be, and it must be removed surgically."
    ],
    words: [{ w: "Cholesteatoma", m: "A growth of skin in the middle ear that slowly destroys bone and must be removed." }],
    t1: {
      d: "Cholesteatoma is not cancer, but it is not harmless either. Skin ends up growing inside the ear, where it slowly eats away at bone, so it has to come out.",
      task: "Find out one warning sign of cholesteatoma. A smelly, persistently discharging ear is the classic one.",
      q: "What is cholesteatoma?",
      a: "Skin growing in the middle ear, which slowly destroys the bone around it."
    },
    t2: {
      d: "These are long, delicate operations, often two or three hours through a microscope, working on structures a few millimetres across, right beside the facial nerve. This is the point at which ear surgery becomes a genuine craft.",
      task: "Watch a short clip of ear microsurgery and note how small the instruments are.",
      q: "Why is ear surgery slow and delicate work?",
      a: "The structures are millimetre-sized and sit right beside the facial nerve."
    },
    t3: {
      d: "Approaches range from permeatal to endaural to postauricular; canal wall up preserves anatomy but carries a higher recurrence rate than canal wall down. Ossiculoplasty reconstructs the hearing mechanism, and outcomes are reported using audiometric criteria rather than impressions.",
      task: "Look up canal wall up versus canal wall down mastoidectomy and the trade-off between them.",
      q: "What is the trade-off between canal wall up and canal wall down mastoidectomy?",
      a: "Canal wall up preserves normal anatomy but has a higher recurrence rate; canal wall down is more definitive but leaves a cavity."
    }
  },
  {
    title: "Working smaller than a pea",
    what: "ENT surgeons operate on some of the smallest structures in the body, through openings barely wide enough for an instrument, watching a screen or a microscope rather than their own hands.",
    facts: [
      "The stapes is 3 mm long, and there are operations performed on it.",
      "Microscopes and endoscopes are standard equipment.",
      "Steady hands can be trained — this is a skill, not a gift."
    ],
    words: [{ w: "Microsurgery", m: "Surgery performed under a microscope on very small structures." }],
    t1: {
      d: "Surgeons practise fine movements deliberately, for years. Nobody starts steady. Playing an instrument, drawing, model-making and sewing all build the same control.",
      task: "Try threading a needle while looking only in a mirror. That is roughly the coordination challenge of endoscopic surgery.",
      q: "Are surgeons born with steady hands?",
      a: "No — precision is a trained skill."
    },
    t2: {
      d: "Working from a screen means your hands and your eyes are pointing in different directions, and instruments move the opposite way to your hand. Surgeons train on simulators for exactly this reason.",
      task: "Try drawing a simple shape while watching only its reflection in a mirror. Notice how quickly you improve with practice.",
      q: "Why is endoscopic surgery harder than it looks?",
      a: "Because you work from a screen, with instruments that move counter-intuitively."
    },
    t3: {
      d: "Surgical skill acquisition follows a measurable learning curve, and simulation training genuinely transfers to theatre performance. Ergonomics matter too: microsurgery under load causes real musculoskeletal injury among surgeons, and posture is taught deliberately.",
      task: "Look up how surgical simulators are used in ENT training.",
      q: "Why is simulation used in surgical training?",
      a: "Because skills learned on a simulator transfer measurably to real operating performance."
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
intro: "How a surgeon turns a worried family and a vague set of symptoms into a diagnosis and a plan — and decides who actually needs an operation. This is the craft of the job.",
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
    title: "Looking in an ear, nose and throat",
    what: "ENT examination is mostly about light and access. Everything you need to see is inside a small dark hole, so the specialty is built around instruments that let you look into places the eye cannot reach.",
    facts: [
      "An otoscope is the handheld light used to look at the eardrum.",
      "A flexible nasendoscope is a thin camera passed through the nose to see the throat and voice box.",
      "Tuning forks are still used, because they answer a question no machine answers faster."
    ],
    words: [{ w: "Otoscope", m: "The handheld instrument with a light and lens used to look inside the ear." }],
    t1: {
      d: "Almost every ENT examination starts the same way: a light, a careful look, and a doctor telling the child exactly what they are about to do.",
      task: "Next time a doctor looks in your ear, ask them what they can see. Most are pleased to be asked.",
      q: "What is an otoscope used for?",
      a: "Looking inside the ear at the ear canal and eardrum."
    },
    t2: {
      d: "With a small child you pull the pinna gently backwards to straighten the canal — and downwards in babies, because the canal points differently before it has grown. Getting the child on a parent's lap and letting them hold the otoscope first buys more cooperation than any amount of persuading.",
      task: "Write three things you would say to a frightened four-year-old before looking in their ear.",
      q: "Why do you pull the ear gently backwards during examination?",
      a: "To straighten the ear canal so you can see the eardrum."
    },
    t3: {
      d: "Examination includes otoscopy, tuning fork tests, anterior rhinoscopy, oral cavity and neck palpation, and flexible nasendoscopy where indicated. Pneumatic otoscopy assesses drum mobility and improves the accuracy of diagnosing effusion, which a static view alone can miss.",
      task: "Look up pneumatic otoscopy and why it improves diagnosis of glue ear.",
      q: "What does pneumatic otoscopy add to a normal look in the ear?",
      a: "It shows whether the eardrum moves, which reveals fluid behind it."
    }
  },
  {
    title: "Tests in ENT",
    what: "Tests do not replace thinking. A good clinician forms an idea first, then chooses the test that will confirm or rule it out. In ENT the commonest tests measure hearing rather than look at pictures.",
    facts: [
      "An audiogram maps the quietest sound you can hear at each pitch.",
      "A tympanogram measures whether the eardrum moves properly.",
      "CT shows bone in detail; MRI shows soft tissue and nerves."
    ],
    words: [{ w: "Tympanogram", m: "A quick test measuring how well the eardrum moves, used to detect fluid behind it." }],
    t1: {
      d: "A hearing test is not a school test. There is nothing to revise and no way to fail — it simply measures what your ears do.",
      task: "Find out what happens in a hearing test and how long it takes.",
      q: "What does an audiogram show?",
      a: "The quietest sound a person can hear at each pitch."
    },
    t2: {
      d: "Tympanometry takes seconds and is genuinely powerful: a flat trace means the drum is not moving, which usually means fluid behind it. Together with the audiogram it can confirm glue ear before anyone reaches for a scan.",
      task: "Find out why children under about four are tested differently from adults.",
      q: "What does a flat tympanogram usually mean?",
      a: "The eardrum is not moving — typically because of fluid in the middle ear."
    },
    t3: {
      d: "Imaging is chosen by question: high-resolution CT of the temporal bone for bony anatomy and cholesteatoma, MRI for vestibular schwannoma and soft tissue. Children are more radiosensitive, so scans are justified individually rather than ordered routinely.",
      task: "Look up why MRI is preferred for investigating one-sided sensorineural hearing loss.",
      q: "Which scan is used to look for a tumour on the hearing nerve?",
      a: "MRI, because it shows soft tissue and nerves rather than bone."
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
m: 12, name: "December", topic: "Becoming a surgeon",
intro: "The last unit is about the job itself: what an ENT surgeon does all day, how surgeons think, how they behave, and how you get from where you are now to there.",
lessons: [
  {
    title: "What an ENT surgeon actually does",
    what: "Far less of the job is dramatic than television suggests, and far less of it is operating than people assume. Most ENT work is clinic: looking, listening, explaining, and deciding who does not need surgery.",
    facts: [
      "A typical week mixes outpatient clinics, operating lists, ward rounds and on-call.",
      "Most patients seen in clinic never have an operation.",
      "ENT sees the widest age range of any surgical specialty, from newborns to the very old."
    ],
    words: [{ w: "Clinic", m: "An outpatient session where patients are assessed and decisions are made, without an operation." }],
    t1: {
      d: "An ENT surgeon might see a baby with glue ear, a teenager with a broken nose and an eighty-year-old with a hoarse voice, all in the same morning.",
      task: "Write down three completely different patients an ENT surgeon might see in one clinic.",
      q: "Do most ENT patients end up having an operation?",
      a: "No — most are managed in clinic without surgery."
    },
    t2: {
      d: "ENT is often described as having one of the better balances in surgery: real operating, a lot of children, plenty of clinic, and comparatively fewer nights than some specialties. It is also one of the smaller specialties, so competition for training places is genuine.",
      task: "Look up how many ENT consultants there are in the UK compared with, say, general surgeons.",
      q: "Why is ENT competitive to get into?",
      a: "It is a small specialty with relatively few training places for the number applying."
    },
    t3: {
      d: "Deciding not to operate is a clinical skill in its own right, and often the harder decision. Documentation matters equally: notes are a legal record, a communication tool for the next team, and a safety net. If it is not written down, in practice it did not happen.",
      task: "Write three sentences of clinic notes about an imaginary patient, clearly enough for a stranger to follow.",
      q: "Why is deciding not to operate a skill?",
      a: "Because surgery carries real risks, and knowing when the risks outweigh the benefit protects the patient."
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
    what: "A hospital runs on a team. Audiologists, speech and language therapists, nurses, operating department practitioners, play specialists, interpreters and administrators are all essential, and a surgeon who does not respect them is a worse surgeon.",
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
    what: "You are years away from any of this, and that is completely fine. What matters now is curiosity, kindness, consistency, and getting comfortable around people who are frightened or unwell.",
    facts: [
      "Nobody expects medical knowledge from a school student.",
      "You do not choose ENT until years after medical school — so you keep every option open.",
      "Any experience of being looked after, or looking after someone, is genuinely useful — it teaches you what the other side of the desk feels like."
    ],
    words: [{ w: "Work experience", m: "Time spent watching or helping in a workplace to learn what a job is really like." }],
    t1: {
      d: "Most surgeons had to be taught what it feels like to be the frightened person in the waiting room. Notice it whenever you see it, and do not lose that.",
      task: "Write down one thing you will do this month that moves you a step closer.",
      q: "What matters most at your age?",
      a: "Curiosity, kindness and consistency — not medical knowledge."
    },
    t2: {
      d: "Depth beats breadth in an application. A year of helping at the same club, and what you noticed there, is worth far more than a list of one-off placements you cannot say anything about. And you do not have to commit to ENT now — you commit to medicine, and choose later.",
      task: "Start a short log of anything you do with children or with people who are unwell, and what you learned each time.",
      q: "When do you actually choose ENT?",
      a: "Years after medical school, during or after foundation training."
    },
    t3: {
      d: "Surgical applications test reflection and evidence of commitment: audit, teaching, courses, presentations. Competition ratios for ENT are high, so a portfolio built steadily from early on matters — but graduate entry, foundation years and access courses all exist, so a first attempt that does not work is a delay, not an ending.",
      task: "Write a 150-word reflection on something you have seen or done that taught you about caring for someone.",
      q: "Why is understanding the patient's experience useful to a surgeon?",
      a: "Patients can tell whether you grasp what it feels like from their side, and it changes how far they trust you."
    }
  }
]
}
];
