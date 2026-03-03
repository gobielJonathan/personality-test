export default {
  // ── Hero ─────────────────────────────────────────
  eyebrow: 'Self-Discovery Assessment',
  heroTitle1: 'Unlock Your',
  heroTitle2: 'Care Type',
  heroMeta: '8 questions · ~3 minutes · 4 unique types',
  disclaimerLabel: 'Important Disclaimer',
  disclaimerText:
    "This assessment is not meant to provide a clinical diagnosis. Instead, it's designed to give you a clearer picture of your strengths, highlight what you're already doing well, and point out areas that you can continue to grow and develop.",
  howItWorksTitle: 'How it works',
  howItWorksBody1: 'Choose the answer that',
  howItWorksBodyHighlight1: 'best describes you',
  howItWorksBody2: 'when facing the following situations. There are no right or wrong answers, so don\'t overthink or spend too much time deciding. Simply choose the',
  howItWorksBodyHighlight2: 'first response that comes to your mind',
  ctaButton: 'Discover Your Type',

  // ── Quiz ─────────────────────────────────────────
  questionOf: 'Question {current} of {total}',
  percentDone: '{n}% done',
  selectToContinue: 'Select an answer to continue',
  back: 'Back',
  next: 'Next',
  seeResults: 'See My Results',
  calculating: 'Calculating your care type...',

  // ── Result ───────────────────────────────────────
  youAre: 'You are...',
  yourCareType: 'Your Care Type',
  hybridTitle: "You're a Hybrid Type ✨",
  hybridSubtitle: 'You blend multiple care styles equally well',
  scoreBreakdown: 'Your score breakdown',
  retake: 'Retake Assessment',

  // ── Type preview labels ───────────────────────────
  typeNames: {
    A: 'The Observer',
    B: 'The Safe Space',
    C: 'The Connector',
    D: 'The Steady One',
  },

  // ── Result card UI ───────────────────────────────
  yourQuietSuperpower: 'Your quiet superpower',
  smallActions: '✨ Small actions you can try',

  // ── Questions ────────────────────────────────────
  questions: [
    {
      text: 'Your friend suddenly becomes quieter than usual.',
      options: [
        { value: 'A', text: 'I notice the change quickly.' },
        { value: 'B', text: 'I gently ask, "Are you okay?"' },
        { value: 'C', text: 'I think about who else can support them.' },
        { value: 'D', text: "I stay nearby so they're not alone." },
      ],
    },
    {
      text: 'Your friend says: "I\'m exhausted with everything."',
      options: [
        { value: 'A', text: "I try to figure out what's causing it." },
        { value: 'B', text: 'I ask what feels the heaviest right now.' },
        { value: 'C', text: 'I suggest talking to someone they trust.' },
        { value: 'D', text: 'I say, "I\'m here with you."' },
      ],
    },
    {
      text: 'Someone posts sad stories late at night repeatedly.',
      options: [
        { value: 'A', text: 'I notice the pattern over time.' },
        { value: 'B', text: 'I send a check-in message.' },
        { value: 'C', text: "I ask if they've talked to a counselor or advisor." },
        { value: 'D', text: 'I send something comforting.' },
      ],
    },
    {
      text: 'Your friend failed an important exam.',
      options: [
        { value: 'A', text: 'I notice their behavior changes afterward.' },
        { value: 'B', text: "I listen to how they're feeling about it." },
        { value: 'C', text: 'I suggest meeting the academic advisor.' },
        { value: 'D', text: 'I sit with them and let them vent.' },
      ],
    },
    {
      text: 'A friend talks about feeling "not good enough."',
      options: [
        { value: 'A', text: 'I observe what triggers those thoughts.' },
        { value: 'B', text: 'I ask what makes them feel that way.' },
        { value: 'C', text: 'I think about helpful support options.' },
        { value: 'D', text: 'I remind them they matter.' },
      ],
    },
    {
      text: 'In a group setting, someone looks uncomfortable.',
      options: [
        { value: 'A', text: 'I pick up on small body language cues.' },
        { value: 'B', text: 'I quietly ask if they want to step outside.' },
        { value: 'C', text: 'I bring in someone they feel safe with.' },
        { value: 'D', text: 'I stay next to them to help them feel grounded.' },
      ],
    },
    {
      text: 'Your friend mentions feeling overwhelmed for weeks.',
      options: [
        { value: 'A', text: "I notice it's not just a one-time thing." },
        { value: 'B', text: 'I give them space to explain fully.' },
        { value: 'C', text: 'I suggest professional support if needed.' },
        { value: 'D', text: "I reassure them they're not alone." },
      ],
    },
    {
      text: 'If a friend is struggling, I usually…',
      options: [
        { value: 'A', text: 'Notice changes first.' },
        { value: 'B', text: 'Listen deeply.' },
        { value: 'C', text: 'Help connect them to support.' },
        { value: 'D', text: 'Stay calm and steady.' },
      ],
    },
  ],

  // ── Type data ─────────────────────────────────────
  types: {
    A: {
      title: "You notice what others don't even realize yet.",
      body: "You read the room quietly. Small changes in tone, energy, or behavior rarely escape you — and that awareness makes people feel seen, even before they speak.",
      highlight: "You are the one who senses when something is off.",
      superpower: "emotional awareness",
      challenge: "Sometimes you wait too long before checking in — but your gentle curiosity can mean the world to someone.",
      actions: [
        'Send a simple check-in: "Hey, you crossed my mind today — how are you?"',
        'Mention what you notice kindly: "You seem quieter lately, I\'m here if you want to talk."',
        'Start with light conversations before going deeper.',
      ],
      tip: 'Small check-ins often mean more than perfect words.',
    },
    B: {
      title: 'People feel safe being real around you.',
      body: "There's something about your presence that makes others open up. You listen without rushing, fixing, or judging — and that kind of space is rare.",
      highlight: 'You make people feel emotionally safe.',
      superpower: 'deep listening',
      challenge: "Just remember: you don't have to carry everyone's emotions alone.",
      actions: [
        'Ask yourself after deep talks: "Do I need a recharge?"',
        'Set gentle boundaries: "I want to listen, but can we talk later when I\'m more present?"',
        'Balance listening with sharing a little about yourself too.',
      ],
      tip: 'Protecting your energy helps you stay a safe space long-term.',
    },
    C: {
      title: 'You turn care into action.',
      body: "When someone struggles, you don't just watch — you help them find a way forward. You understand that support sometimes means bringing in the right people or resources.",
      highlight: 'You help others move from stuck → supported.',
      superpower: 'practical care',
      challenge: 'Slow down just enough to listen first — your solutions become even stronger after that.',
      actions: [
        'Start with: "Do you want me to just listen, or help think of solutions?"',
        'Pause for a moment before giving advice.',
        'Reflect what you heard first: "That sounds really heavy."',
      ],
      tip: 'When people feel heard first, your practical help becomes even more powerful.',
    },
    D: {
      title: 'Your calm makes people feel safe.',
      body: "You don't always need big words. Your steady presence alone helps others breathe easier and feel grounded.",
      highlight: 'You are emotional stability in human form.',
      superpower: 'calm energy',
      challenge: "Sometimes others don't realize how much you care — small check-ins help them feel it more.",
      actions: [
        'Send simple follow-ups: "How are you feeling today?"',
        'Initiate low-pressure hangouts like coffee or short walks.',
        'Say supportive things out loud, even briefly: "I\'m really glad you told me."',
      ],
      tip: 'Small initiations help others recognize the support you quietly give.',
    },
  },

  // ── Hybrid tips ───────────────────────────────────
  hybridTips: {
    AB: 'You sense when someone is struggling and create a space where they feel safe to share.',
    AC: 'You notice early signs of distress and help connect people to the support they need.',
    AD: 'You stay grounded in difficult moments and help others feel less overwhelmed.',
    BC: 'You offer emotional safety and guide others toward real help and healing.',
    BD: 'Your calm, accepting presence helps others feel secure during tough times.',
    CD: 'You respond to challenges with steady care and help move people toward support.',
  },

  // ── Footer ────────────────────────────────────────
  footer: 'Made with care · Not a clinical tool',
}
