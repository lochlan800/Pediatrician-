/* ------------------------------------------------------------------
   The test bank and the memory hooks.

   Keyed by "<month>-<lessonIndex>", matching the lesson ids.
   Each entry has:
     hook — a way to remember the lesson, shown before the test
     qs   — two multiple-choice questions, marked automatically

   These feed the end-of-lesson test AND the spaced repetition queue.
------------------------------------------------------------------ */

const TESTS = {

/* ---- January: how the body is built ---- */
"1-0": { hook: "Think Lego, but the bricks are alive and swap themselves out when they wear down.",
  qs: [
    { q: "What is the smallest thing that counts as alive?", a: ["A cell", "An organ", "A tissue", "A molecule"], correct: 0 },
    { q: "Roughly how many cells is a human body made of?", a: ["30 thousand", "30 million", "30 billion", "30 trillion"], correct: 3 }
  ]},
"1-1": { hook: "Cells → tissues → organs → systems. Each step is a team made of the step before.",
  qs: [
    { q: "What is a tissue?", a: ["A group of similar cells doing the same job", "A single very large cell", "The outer layer of an organ", "A type of blood vessel"], correct: 0 },
    { q: "Which is made of the other?", a: ["A tissue is made of organs", "An organ is made of tissues", "They are the same thing", "Neither contains the other"], correct: 1 }
  ]},
"1-2": { hook: "Eleven systems, one body — and trouble in one often shows up in another.",
  qs: [
    { q: "Which system moves blood around the body?", a: ["The digestive system", "The circulatory system", "The nervous system", "The endocrine system"], correct: 1 },
    { q: "Roughly how many organ systems does the body have?", a: ["About 4", "About 11", "About 30", "About 100"], correct: 1 }
  ]},
"1-3": { hook: "Always the patient's left. Stand in their shoes, not opposite them.",
  qs: [
    { q: "In medicine, 'the left side' means whose left?", a: ["The doctor's", "The patient's", "Whoever is speaking", "It depends on the hospital"], correct: 1 },
    { q: "What separates the chest from the abdomen?", a: ["The diaphragm", "The ribcage", "The spine", "The pelvis"], correct: 0 }
  ]},
"1-4": { hook: "Homeostasis is a thermostat for everything at once — heat, water, salt, sugar, acid.",
  qs: [
    { q: "What does homeostasis mean?", a: ["Keeping inside conditions steady", "Fighting infection", "Growing new cells", "Storing energy"], correct: 0 },
    { q: "Roughly what core temperature does the body hold?", a: ["30°C", "34°C", "37°C", "40°C"], correct: 2 }
  ]},
"1-5": { hook: "Normal is a range, not a number — and in children the range moves with age.",
  qs: [
    { q: "A newborn's resting heart rate is usually around…", a: ["40–60 bpm", "60–100 bpm", "100–160 bpm", "180–220 bpm"], correct: 2 },
    { q: "Why do paediatric wards use age-banded charts?", a: ["To save paper", "Because normal ranges change with age", "Because children move more", "Because parents ask for them"], correct: 1 }
  ]},

/* ---- February: the ear ---- */
"2-0": { hook: "Outer collects, middle amplifies, inner converts. Three parts, three jobs, in that order.",
  qs: [
    { q: "Which part of the ear holds the three tiny bones?", a: ["The outer ear", "The middle ear", "The inner ear", "The ear canal"], correct: 1 },
    { q: "What is the pinna?", a: ["The eardrum", "The visible flap of the ear", "The hearing nerve", "The balance organ"], correct: 1 }
  ]},
"2-1": { hook: "Tympanic means drum. A drum skin thinner than paper — that mends itself.",
  qs: [
    { q: "What is the eardrum's proper name?", a: ["The tympanic membrane", "The oval window", "The cochlear duct", "The pinna"], correct: 0 },
    { q: "What usually happens to a small hole in the eardrum?", a: ["It needs an operation", "It stays open forever", "It heals itself within weeks", "It causes permanent deafness"], correct: 2 }
  ]},
"2-2": { hook: "Hammer, anvil, stirrup — a blacksmith's workshop, in that order from eardrum inwards. M–I–S.",
  qs: [
    { q: "Which is the smallest bone in the human body?", a: ["The malleus", "The incus", "The stapes", "A bone in the wrist"], correct: 2 },
    { q: "Roughly how much do the ossicles amplify vibration?", a: ["About 2 times", "About 20 times", "About 200 times", "They don't amplify it"], correct: 1 }
  ]},
"2-3": { hook: "The cochlea is a piano rolled up: high notes at the entrance, low notes at the far tip.",
  qs: [
    { q: "What do hair cells in the cochlea do?", a: ["Amplify sound mechanically", "Turn movement into electrical signals", "Produce earwax", "Equalise pressure"], correct: 1 },
    { q: "Loud noise damages which pitches first?", a: ["High ones", "Low ones", "Middle ones", "All equally"], correct: 0 }
  ]},
"2-4": { hook: "The ear's air vent. Blocked vent → no air → fluid → glue ear. That chain explains most of childhood ENT.",
  qs: [
    { q: "What makes your ears pop?", a: ["The eardrum stretching", "The Eustachian tube opening", "Wax shifting", "The ossicles moving"], correct: 1 },
    { q: "If the Eustachian tube stays blocked, what happens?", a: ["The eardrum bursts immediately", "Fluid collects in the middle ear", "Hearing improves", "Nothing at all"], correct: 1 }
  ]},
"2-5": { hook: "Nothing smaller than your elbow. The canal is a conveyor belt that cleans itself.",
  qs: [
    { q: "What is the medical word for earwax?", a: ["Cerumen", "Sebum", "Mucin", "Keratin"], correct: 0 },
    { q: "Why are cotton buds a bad idea?", a: ["They dissolve the wax", "They push wax deeper in", "They dry the canal out", "They cause infection instantly"], correct: 1 }
  ]},

/* ---- March: the nose ---- */
"3-0": { hook: "Radiator, sponge and filter — and it does all three in the length of your thumb.",
  qs: [
    { q: "What are the turbinates for?", a: ["Detecting smell", "Warming, moistening and filtering air", "Draining the sinuses", "Supporting the septum"], correct: 1 },
    { q: "What sweeps nasal mucus backwards to be swallowed?", a: ["Cilia", "Turbinates", "The septum", "Gravity"], correct: 0 }
  ]},
"3-1": { hook: "Pinch your nose and the flavour vanishes. Taste is mostly smell wearing a disguise.",
  qs: [
    { q: "Which cranial nerve is the olfactory nerve?", a: ["The first", "The fifth", "The seventh", "The eighth"], correct: 0 },
    { q: "What is anosmia?", a: ["Loss of taste", "Loss of smell", "Loss of hearing", "Loss of balance"], correct: 1 }
  ]},
"3-2": { hook: "Four pairs of caves in your face — Maxillary, Frontal, Ethmoid, Sphenoid — and each one has to drain.",
  qs: [
    { q: "How many pairs of sinuses are there?", a: ["Two", "Three", "Four", "Six"], correct: 2 },
    { q: "Which sinuses are barely present in young children?", a: ["Maxillary", "Frontal", "Ethmoid", "All of them are fully formed"], correct: 1 }
  ]},
"3-3": { hook: "Lean forward, pinch the soft part, and hold for the full fifteen minutes. Never tip the head back.",
  qs: [
    { q: "Where do about 90% of nosebleeds come from?", a: ["Deep at the back of the nose", "Little's area at the front of the septum", "The sinuses", "The turbinates"], correct: 1 },
    { q: "What is the correct first aid for a nosebleed?", a: ["Tip the head back and pinch the bridge", "Lean forward and pinch the soft part", "Lie flat with a cold cloth", "Blow the nose hard first"], correct: 1 }
  ]},
"3-4": { hook: "One side always = structure. Both sides seasonally = allergy. A child blocked all year = adenoids.",
  qs: [
    { q: "A nose blocked on one side, consistently, suggests…", a: ["Hay fever", "A structural cause such as a deviated septum", "A cold", "Sinusitis"], correct: 1 },
    { q: "Sneezing, itching and clear runny discharge suggest…", a: ["Allergic rhinitis", "A foreign body", "A deviated septum", "A nosebleed"], correct: 0 }
  ]},
"3-5": { hook: "Snoring child, tired child, hyperactive child — think tonsils and adenoids before you think laziness.",
  qs: [
    { q: "Loud snoring every night in a child is…", a: ["Completely normal", "Not normal, and worth assessing", "Only a problem if they wake", "A sign of a cold"], correct: 1 },
    { q: "What most often blocks a child's airway during sleep?", a: ["Large tonsils and adenoids", "A deviated septum", "Earwax", "Asthma"], correct: 0 }
  ]},

/* ---- April: the throat ---- */
"4-0": { hook: "Air in front, food behind. Trachea in front, oesophagus behind — and a junction that has to be perfectly timed.",
  qs: [
    { q: "Which tube sits in front?", a: ["The windpipe", "The food pipe", "They sit side by side", "It varies between people"], correct: 0 },
    { q: "What is the pharynx?", a: ["The voice box", "The throat", "The windpipe", "The tonsils"], correct: 1 }
  ]},
"4-1": { hook: "Stretch a balloon neck and it squeals. Tighter folds, faster vibration, higher note.",
  qs: [
    { q: "What is the voice box called?", a: ["The pharynx", "The larynx", "The trachea", "The epiglottis"], correct: 1 },
    { q: "Tighter vocal folds produce…", a: ["A higher pitch", "A lower pitch", "A quieter voice", "No change in pitch"], correct: 0 }
  ]},
"4-2": { hook: "The epiglottis is a trapdoor. Try to breathe in and swallow at the same time — your body simply won't let you.",
  qs: [
    { q: "What stops food entering the windpipe?", a: ["The epiglottis", "The tonsils", "The larynx", "The uvula"], correct: 0 },
    { q: "Roughly how many times a day do you swallow?", a: ["About 60", "About 200", "About 600", "About 3,000"], correct: 2 }
  ]},
"4-3": { hook: "Tonsils you can see, adenoids you can't. Both are guard posts, and both shrink as you grow.",
  qs: [
    { q: "Where are the adenoids?", a: ["Either side of the back of the mouth", "Behind the nose, above the tonsils", "Under the tongue", "In the middle ear"], correct: 1 },
    { q: "Adenoids are largest at about what age?", a: ["Birth to 1", "3 to 7", "10 to 14", "They never shrink"], correct: 1 }
  ]},
"4-4": { hook: "Can't swallow their own saliva? Emergency. Nearly everything else is a virus that will pass.",
  qs: [
    { q: "Which is an emergency sign with a sore throat?", a: ["A temperature of 38°C", "Drooling because they can't swallow", "A hoarse voice", "White spots on the tonsils"], correct: 1 },
    { q: "What is quinsy?", a: ["A viral sore throat", "An abscess beside the tonsil", "Swelling of the adenoids", "Inflammation of the voice box"], correct: 1 }
  ]},
"4-5": { hook: "Whispering isn't resting. And three weeks hoarse in an adult means get it looked at.",
  qs: [
    { q: "Is whispering a good way to rest a sore voice?", a: ["Yes, it's the best way", "No, it strains the folds too", "Only for children", "Only if you're ill"], correct: 1 },
    { q: "Hoarseness in an adult needs checking after how long?", a: ["3 days", "1 week", "3 weeks", "6 months"], correct: 2 }
  ]},

/* ---- May: balance ---- */
"5-0": { hook: "Three loops for spinning, two chambers for gravity. Turning and tilting, handled separately.",
  qs: [
    { q: "What do the semicircular canals detect?", a: ["Sound", "Your head turning", "Air pressure", "Temperature"], correct: 1 },
    { q: "How many semicircular canals are there in each ear?", a: ["One", "Two", "Three", "Five"], correct: 2 }
  ]},
"5-1": { hook: "Eyes + ears + body position. Lose one and you wobble. Lose two and you fall.",
  qs: [
    { q: "Which three things does balance combine?", a: ["Eyes, inner ears and body position sense", "Ears, skin and muscles", "Eyes, ears and hearing", "Brain, heart and lungs"], correct: 0 },
    { q: "Why is balancing harder with your eyes shut?", a: ["Your inner ear switches off", "You lose one of the three inputs", "Your muscles relax", "Your blood pressure drops"], correct: 1 }
  ]},
"5-2": { hook: "Eyes say still, ears say moving. The argument between them is what makes you sick.",
  qs: [
    { q: "What causes motion sickness?", a: ["A weak stomach", "Eyes and ears disagreeing", "Low blood sugar", "Inner ear infection"], correct: 1 },
    { q: "Why do drivers rarely get travel sick?", a: ["They concentrate harder", "They anticipate every movement", "They sit higher up", "They face forwards"], correct: 1 }
  ]},
"5-3": { hook: "Grit in the spirit level. The Epley manoeuvre simply rolls it back where it belongs.",
  qs: [
    { q: "What causes BPPV?", a: ["Infection of the hearing nerve", "Loose crystals drifting into a balance canal", "Fluid behind the eardrum", "Low blood pressure"], correct: 1 },
    { q: "How is BPPV usually treated?", a: ["Antibiotics", "The Epley manoeuvre", "Surgery", "Hearing aids"], correct: 1 }
  ]},
"5-4": { hook: "Neuritis: spinning, hearing fine. Labyrinthitis: spinning plus deaf. Ménière's: attacks of vertigo, deafness, tinnitus and fullness.",
  qs: [
    { q: "Which condition combines vertigo, hearing loss, tinnitus and ear fullness?", a: ["BPPV", "Ménière's disease", "Vestibular neuritis", "Otitis externa"], correct: 1 },
    { q: "What is tinnitus?", a: ["Dizziness on standing", "Hearing a sound with no external source", "Pain in the ear", "Loss of balance"], correct: 1 }
  ]},
"5-5": { hook: "Seven moves the face, eight carries the sound — and they are neighbours inside the same bone.",
  qs: [
    { q: "Which cranial nerve carries hearing and balance?", a: ["The fifth", "The seventh", "The eighth", "The tenth"], correct: 2 },
    { q: "Which nerve runs beside it and moves the face?", a: ["The facial nerve, the seventh", "The optic nerve, the second", "The vagus nerve, the tenth", "The trigeminal nerve, the fifth"], correct: 0 }
  ]},

/* ---- June: children's ears and grommets ---- */
"6-0": { hook: "A flat drainpipe holds water; a sloped one runs clear. Growing tips the pipe downwards.",
  qs: [
    { q: "Why do young children get more ear trouble?", a: ["Their eardrums are thinner", "Their Eustachian tube is short and nearly horizontal", "They have more earwax", "Their ears are smaller"], correct: 1 },
    { q: "What happens to the Eustachian tube as a child grows?", a: ["It shortens", "It lengthens and tips downwards", "It closes permanently", "It doesn't change"], correct: 1 }
  ]},
"6-1": { hook: "Cold first, then pressure, then pain — and nearly always at night.",
  qs: [
    { q: "What is the medical name for a sudden middle ear infection?", a: ["Otitis externa", "Acute otitis media", "Otitis media with effusion", "Mastoiditis"], correct: 1 },
    { q: "Why does an ear infection hurt so sharply?", a: ["The eardrum tears", "Pressure builds behind the eardrum", "The ossicles swell", "Wax presses on the drum"], correct: 1 }
  ]},
"6-2": { hook: "No pain, no fever, just 'she never listens'. That is glue ear until proven otherwise.",
  qs: [
    { q: "What is the main symptom of glue ear?", a: ["Severe pain", "Muffled hearing", "High fever", "Dizziness"], correct: 1 },
    { q: "Why is glue ear so often missed?", a: ["It's very rare", "It usually doesn't hurt", "It only affects babies", "It shows no hearing change"], correct: 1 }
  ]},
"6-3": { hook: "It is an air hole, not a plughole. A straw pushed into a sealed carton so the liquid can move.",
  qs: [
    { q: "What does a grommet actually do?", a: ["Drains fluid out through the tube", "Lets air into the middle ear", "Amplifies sound", "Blocks water out"], correct: 1 },
    { q: "Another name for a grommet is…", a: ["A ventilation tube", "A cochlear implant", "A hearing aid mould", "A stapes prosthesis"], correct: 0 }
  ]},
"6-4": { hook: "Fifteen minutes, no scar, home the same day. Everything happens down the ear canal.",
  qs: [
    { q: "Roughly how long does grommet surgery take?", a: ["About 15 minutes", "About an hour", "About three hours", "It varies from 1 to 5 hours"], correct: 0 },
    { q: "Why must you not eat before an anaesthetic?", a: ["It makes you feel sick afterwards", "Stomach contents could enter the lungs", "It slows the surgery", "It affects the medicines"], correct: 1 }
  ]},
"6-5": { hook: "The eardrum grows outwards like a fingernail, carrying the grommet with it until it drops out.",
  qs: [
    { q: "How long do grommets usually stay in?", a: ["A few weeks", "6 to 12 months", "About 5 years", "Permanently"], correct: 1 },
    { q: "How do grommets normally come out?", a: ["A second operation", "They fall out on their own", "They dissolve", "They are pulled out in clinic"], correct: 1 }
  ]},

/* ---- July: hearing loss ---- */
"7-0": { hook: "Decibels = how loud. Hertz = how high. An audiogram plots one against the other.",
  qs: [
    { q: "Loudness is measured in…", a: ["Hertz", "Decibels", "Watts", "Pascals"], correct: 1 },
    { q: "Human hearing normally covers roughly…", a: ["2 to 200 Hz", "20 to 2,000 Hz", "20 to 20,000 Hz", "200 to 200,000 Hz"], correct: 2 }
  ]},
"7-1": { hook: "Conductive is a shut door — often openable. Sensorineural is a broken microphone.",
  qs: [
    { q: "A blockage in the outer or middle ear causes which kind of loss?", a: ["Conductive", "Sensorineural", "Mixed", "Central"], correct: 0 },
    { q: "Which kind of hearing loss is usually permanent?", a: ["Conductive", "Sensorineural", "Both equally", "Neither"], correct: 1 }
  ]},
"7-2": { hook: "A healthy ear answers back. The screening test simply listens for the echo.",
  qs: [
    { q: "What does the first newborn hearing test measure?", a: ["A faint echo made by the cochlea", "The baby's reaction to a loud noise", "Eardrum movement", "Brain size"], correct: 0 },
    { q: "Does not passing the first screen mean a baby is deaf?", a: ["Yes, always", "No — most pass on retesting", "Only if both ears fail", "Only in premature babies"], correct: 1 }
  ]},
"7-3": { hook: "Not a volume knob — a tuned amplifier, shaped to the exact frequencies that person has lost.",
  qs: [
    { q: "Does a hearing aid simply make everything louder?", a: ["Yes", "No — it amplifies the frequencies that are lost", "Only the newest ones", "Only for conductive loss"], correct: 1 },
    { q: "Why do many people delay getting a hearing aid?", a: ["They are painful", "Stigma and embarrassment", "They are hard to obtain", "They damage hearing further"], correct: 1 }
  ]},
"7-4": { hook: "Skip the broken microphone and wire straight to the nerve — then spend months learning the new signal.",
  qs: [
    { q: "What does a cochlear implant bypass?", a: ["The eardrum only", "The damaged hair cells", "The hearing nerve", "The brain's hearing centre"], correct: 1 },
    { q: "What is it like straight after switch-on?", a: ["Instantly normal hearing", "Strange, and it takes months to learn", "Completely silent", "Painfully loud forever"], correct: 1 }
  ]},
"7-5": { hook: "Face the person, don't shout, and talk to the patient — never to the interpreter.",
  qs: [
    { q: "Is British Sign Language just English done with hands?", a: ["Yes", "No — it's a full language with its own grammar", "It's a simplified code", "It's mime"], correct: 1 },
    { q: "When using an interpreter, who should you look at?", a: ["The interpreter", "The patient", "Whoever is speaking", "Your notes"], correct: 1 }
  ]},

/* ---- August: operations ---- */
"8-0": { hook: "Nobody operates alone, and nobody starts without the checklist said out loud.",
  qs: [
    { q: "What happens before every operation?", a: ["The surgeon scrubs alone", "The whole team runs a safety checklist out loud", "The patient signs a form in theatre", "The lights are dimmed"], correct: 1 },
    { q: "What does sterile mean?", a: ["Clean-looking", "Completely free of germs", "Washed with soap", "Covered over"], correct: 1 }
  ]},
"8-1": { hook: "Anaesthesia is not sleep. It is one doctor watching every breath you take, for you.",
  qs: [
    { q: "Who stays with you throughout an operation?", a: ["The surgeon alone", "The anaesthetist", "A healthcare assistant", "Nobody, you're monitored remotely"], correct: 1 },
    { q: "Children often go to sleep for surgery by…", a: ["Breathing gas through a mask", "Taking a tablet", "An injection in the back", "Being asked to count"], correct: 0 }
  ]},
"8-2": { hook: "Ear canal for grommets, mouth for adenoids — and nothing is cut on the outside at all.",
  qs: [
    { q: "How does the surgeon see the eardrum during grommet surgery?", a: ["Through a small cut behind the ear", "Down the ear canal with an operating microscope", "Using an X-ray", "By feel"], correct: 1 },
    { q: "Adenoids are removed through…", a: ["The nose", "The mouth", "A neck incision", "The ear canal"], correct: 1 }
  ]},
"8-3": { hook: "No cut on the outside, but two genuinely hard weeks. Eating normally keeps the area clean.",
  qs: [
    { q: "How long is tonsillectomy recovery usually?", a: ["A day or two", "About two weeks, and painful", "About six weeks", "There is no recovery period"], correct: 1 },
    { q: "What actually helps healing after tonsillectomy?", a: ["Only ice cream and soft food", "Eating normally", "Not speaking for a week", "Staying in bed"], correct: 1 }
  ]},
"8-4": { hook: "Cholesteatoma is skin in the wrong room, quietly eating the walls.",
  qs: [
    { q: "What is cholesteatoma?", a: ["A cancer of the ear", "Skin growing in the middle ear, destroying bone", "A build-up of wax", "Fluid behind the eardrum"], correct: 1 },
    { q: "What does myringoplasty repair?", a: ["A hole in the eardrum", "The mastoid bone", "The hearing nerve", "The Eustachian tube"], correct: 0 }
  ]},
"8-5": { hook: "Precision is practice, not luck. Mirror-drawing, sewing and instruments all build the same skill.",
  qs: [
    { q: "Are surgeons born with steady hands?", a: ["Yes, it's a natural gift", "No — precision is a trained skill", "Only some are", "It depends on age"], correct: 1 },
    { q: "How long is the stapes, which surgeons operate on?", a: ["About 3 mm", "About 3 cm", "About 1 cm", "About 10 mm"], correct: 0 }
  ]}
,

/* ---- September: germs and immunity ---- */
"9-0": { hook: "Bacteria are tiny living things. A virus is instructions in an envelope. Antibiotics only kill the living ones.",
  qs: [
    { q: "Do antibiotics work against viruses?", a: ["Yes, all of them", "No — only against bacteria", "Only the strong ones do", "Only in children"], correct: 1 },
    { q: "Most childhood coughs, colds and sore throats are…", a: ["Bacterial", "Viral", "Fungal", "Allergic"], correct: 1 }
  ]},
"9-1": { hook: "Twenty seconds, between the fingers, round the thumbs. Free, and one of the most powerful things in medicine.",
  qs: [
    { q: "How do respiratory germs mainly travel?", a: ["Through the skin", "In droplets from coughs and sneezes", "Through food only", "Through the air over long distances only"], correct: 1 },
    { q: "What did Semmelweis discover?", a: ["Antibiotics", "That handwashing dramatically cut deaths", "Vaccination", "Anaesthesia"], correct: 1 }
  ]},
"9-2": { hook: "Innate immunity is the guard on the door. Adaptive immunity is the detective who never forgets a face.",
  qs: [
    { q: "What does an antibody do?", a: ["Kills all germs equally", "Sticks to one specific germ and marks it", "Raises your temperature", "Carries oxygen"], correct: 1 },
    { q: "Why do you usually get chickenpox only once?", a: ["The virus dies out", "Memory cells remember it", "Your skin becomes immune", "It mutates away"], correct: 1 }
  ]},
"9-3": { hook: "The thermometer is not the patient. But any fever under three months old means same-day assessment.",
  qs: [
    { q: "A fever is generally a temperature of…", a: ["37°C or above", "38°C or above", "39°C or above", "40°C or above"], correct: 1 },
    { q: "What matters more than the exact temperature?", a: ["How the child looks and behaves", "How long it has lasted", "Which thermometer was used", "The time of day"], correct: 0 }
  ]},
"9-4": { hook: "A vaccine is a photograph of the burglar, shown to your immune system in advance.",
  qs: [
    { q: "Which disease has been eradicated worldwide by vaccination?", a: ["Measles", "Polio", "Smallpox", "Tuberculosis"], correct: 2 },
    { q: "Who does herd immunity protect?", a: ["Only the vaccinated", "Those who cannot be vaccinated", "Only children", "Nobody — it's a myth"], correct: 1 }
  ]},
"9-5": { hook: "Glass test: if the rash doesn't fade, get emergency help. And trust the parent who says something is badly wrong.",
  qs: [
    { q: "What should you do about a rash that doesn't fade under a glass?", a: ["Watch it for 24 hours", "Get emergency help immediately", "Apply cream", "Give paracetamol and wait"], correct: 1 },
    { q: "What is sepsis?", a: ["A type of bacteria", "The body's response to infection damaging its own organs", "A severe allergy", "A blood clotting disorder"], correct: 1 }
  ]},

/* ---- October: being ill and getting better ---- */
"10-0": { hook: "Symptom = said. Sign = seen. Two words, one letter of difference in meaning that matters enormously.",
  qs: [
    { q: "Which of these is a sign rather than a symptom?", a: ["Feeling sick", "A rash the doctor can see", "A headache", "Feeling dizzy"], correct: 1 },
    { q: "Why do signs matter more in very young children?", a: ["They are more accurate", "Children cannot report symptoms", "Signs appear sooner", "Parents prefer them"], correct: 1 }
  ]},
"10-1": { hook: "Ask, then be quiet. Most people tell you the answer if you simply let them finish.",
  qs: [
    { q: "Where do most diagnoses come from?", a: ["Blood tests", "The patient's story", "Scans", "Examination alone"], correct: 1 },
    { q: "Which type of question comes first?", a: ["Open questions", "Closed questions", "Leading questions", "It makes no difference"], correct: 0 }
  ]},
"10-2": { hook: "ENT is light plus access. Otoscope for the ear, a scope through the nose for everything else.",
  qs: [
    { q: "What is an otoscope used for?", a: ["Looking inside the ear", "Testing hearing", "Measuring pressure", "Looking at the vocal folds"], correct: 0 },
    { q: "How is a flexible nasendoscope passed?", a: ["Through the mouth", "Through the nose", "Through the ear", "Through a small incision"], correct: 1 }
  ]},
"10-3": { hook: "Audiogram: how well you hear. Tympanogram: whether the drum moves. CT for bone, MRI for soft tissue.",
  qs: [
    { q: "What does a tympanogram measure?", a: ["The quietest sound you can hear", "Whether the eardrum moves properly", "Balance function", "Middle ear infection"], correct: 1 },
    { q: "Which scan shows bone in the most detail?", a: ["MRI", "Ultrasound", "CT", "X-ray only"], correct: 2 }
  ]},
"10-4": { hook: "Every child's dose starts with their weight. Never an adult dose scaled by guesswork.",
  qs: [
    { q: "How are children's medicine doses usually calculated?", a: ["By age", "By weight, in mg per kg", "By height", "The same as adults, halved"], correct: 1 },
    { q: "Which medicine is generally avoided in under-16s?", a: ["Paracetamol", "Ibuprofen", "Aspirin", "Antihistamines"], correct: 2 }
  ]},
"10-5": { hook: "Breathing trouble, a non-fading rash, a seizure, unresponsive. Four things you never wait and see about.",
  qs: [
    { q: "Which of these is an emergency?", a: ["A rash that does not fade under pressure", "A temperature of 38°C", "A sore throat for two days", "A blocked nose"], correct: 0 },
    { q: "A baby under three months with a fever needs…", a: ["Same-day medical assessment", "Watching for 48 hours", "Only paracetamol", "A routine appointment"], correct: 0 }
  ]},

/* ---- November: minds, sleep and feelings ---- */
"11-0": { hook: "Real pain, different cause. Never tell someone there is nothing wrong — say what is actually happening.",
  qs: [
    { q: "Can worry cause a genuinely real tummy ache?", a: ["Yes — the pain is genuinely felt", "No, it is imagined", "Only in adults", "Only if there is also illness"], correct: 0 },
    { q: "What does psychosomatic mean?", a: ["Made up", "Physical symptoms genuinely caused by emotional distress", "A mental illness", "An unexplained rash"], correct: 1 }
  ]},
"11-1": { hook: "Box breathing: in for four, hold four, out four, hold four. A physiological lever you can actually pull.",
  qs: [
    { q: "Which hormone is released during fight or flight?", a: ["Insulin", "Adrenaline", "Melatonin", "Oestrogen"], correct: 1 },
    { q: "Why does slow breathing calm you down?", a: ["It distracts you", "It activates the parasympathetic system, slowing the heart", "It raises blood oxygen", "It lowers blood sugar"], correct: 1 }
  ]},
"11-2": { hook: "You grow in your sleep and you remember in your sleep. Both need the full hours.",
  qs: [
    { q: "How much sleep do school-age children need?", a: ["About 6 hours", "About 7 to 8 hours", "About 9 to 11 hours", "About 13 hours"], correct: 2 },
    { q: "When is growth hormone mainly released?", a: ["After meals", "During exercise", "During deep sleep", "First thing in the morning"], correct: 2 }
  ]},
"11-3": { hook: "Telling someone is the whole first step. Nothing else has to be worked out first.",
  qs: [
    { q: "Roughly how many young people have a probable mental health condition?", a: ["About 1 in 100", "About 1 in 20", "About 1 in 6", "About 1 in 2"], correct: 2 },
    { q: "If a friend tells you something that worries you about their safety, you should…", a: ["Promise to keep it secret", "Help them tell a trusted adult", "Deal with it yourself", "Wait and see"], correct: 1 }
  ]},
"11-4": { hook: "Warn, then say it plainly, then stop talking. Silence gives people room to react.",
  qs: [
    { q: "What should you do before delivering bad news?", a: ["Give a warning first", "Start with something cheerful", "Get straight to it with no pause", "Ask someone else to do it"], correct: 0 },
    { q: "Why is being vague unkind?", a: ["It wastes time", "People misunderstand or imagine something worse", "It sounds unprofessional", "It is against the rules"], correct: 1 }
  ]},
"11-5": { hook: "The people who look after everyone else need looking after too — and the habits are easier to build now.",
  qs: [
    { q: "What is burnout?", a: ["Ordinary tiredness", "Exhaustion and detachment from prolonged work stress", "A physical illness", "Losing interest in a hobby"], correct: 1 },
    { q: "When is it easiest to build habits that protect you?", a: ["Once you are already exhausted", "Now, before you need them", "During medical school only", "After you qualify"], correct: 1 }
  ]},

/* ---- December: becoming a surgeon ---- */
"12-0": { hook: "Mostly clinic, not theatre. And deciding not to operate is a skill in its own right.",
  qs: [
    { q: "Do most ENT clinic patients end up having an operation?", a: ["Yes, nearly all", "No — most are managed without surgery", "Only children do", "About half"], correct: 1 },
    { q: "What is distinctive about ENT's patients?", a: ["They are mostly elderly", "The widest age range of any surgical specialty", "They are mostly children", "They are all emergencies"], correct: 1 }
  ]},
"12-1": { hook: "List the likely and the dangerous. Then rule out the dangerous, even when it's unlikely.",
  qs: [
    { q: "What is a differential diagnosis?", a: ["The final answer", "A list of possible causes", "A second opinion", "A type of test"], correct: 1 },
    { q: "'Think horses, not zebras' means…", a: ["Consider common causes first", "Always look for rare conditions", "Trust your first instinct", "Order every test"], correct: 0 }
  ]},
"12-2": { hook: "Eye level, explain first, never lie. Those three cost nothing and change everything.",
  qs: [
    { q: "Should you tell a child something won't hurt when it will?", a: ["Yes, it keeps them calm", "Never — you lose their trust for good", "Only for injections", "Only if a parent asks you to"], correct: 1 },
    { q: "Why offer a child real choices before a procedure?", a: ["It saves time", "It gives them control, which reduces fear", "It is a legal requirement", "It distracts the parent"], correct: 1 }
  ]},
"12-3": { hook: "Autonomy, beneficence, non-maleficence, justice: their choice, do good, do no harm, be fair.",
  qs: [
    { q: "What does non-maleficence mean?", a: ["Do good", "Do no harm", "Be fair", "Respect choices"], correct: 1 },
    { q: "When is confidentiality broken?", a: ["Never", "When someone is at risk of serious harm", "Whenever a parent asks", "When the patient is under 16"], correct: 1 }
  ]},
"12-4": { hook: "Hierarchy that silences people kills patients. The safest teams are the ones where anyone can speak up.",
  qs: [
    { q: "Who spends the most time with a patient?", a: ["The consultant", "Nurses", "The pharmacist", "The physiotherapist"], correct: 1 },
    { q: "What makes a clinical team safest?", a: ["A strong hierarchy", "Everyone feeling able to speak up", "Working in silence", "Having the most senior staff"], correct: 1 }
  ]},
"12-5": { hook: "Curious, kind, consistent. Everything else is teachable, and you have years.",
  qs: [
    { q: "When do you actually choose ENT?", a: ["Before medical school", "In your first year of medical school", "Years after medical school", "At GCSE"], correct: 2 },
    { q: "What do medical school interviews really test?", a: ["How many activities you list", "Your ability to reflect on experience", "Your exam grades again", "Your knowledge of anatomy"], correct: 1 }
  ]}


};
