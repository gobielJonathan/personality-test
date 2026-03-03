export default {
  // ── Hero ─────────────────────────────────────────
  eyebrow: 'Asesmen Kenali Dirimu',
  heroTitle1: 'Unlock Your',
  heroTitle2: 'Care Type',
  heroMeta: '8 pertanyaan · ~3 menit · 4 tipe unik',
  disclaimerLabel: 'Informasi Penting',
  disclaimerText:
    'Asesmen ini tidak bertujuan untuk memberikan diagnosis klinis. Tujuannya adalah membantu Anda lebih mengenali kekuatan yang sudah dimiliki, melihat hal-hal yang sudah berjalan dengan baik, serta menemukan area yang masih dapat dikembangkan.',
  howItWorksTitle: 'Cara Mengerjakan',
  howItWorksBody1: 'Pilih jawaban yang',
  howItWorksBodyHighlight1: 'paling menggambarkan diri Anda',
  howItWorksBody2: 'saat menghadapi situasi berikut. Tidak ada jawaban benar atau salah. Jadi, tidak perlu terlalu lama berpikir. Cukup pilih',
  howItWorksBodyHighlight2: 'jawaban yang pertama kali terlintas di pikiranmu',
  ctaButton: 'Temukan Tipemu',

  // ── Quiz ─────────────────────────────────────────
  questionOf: 'Pertanyaan {current} dari {total}',
  percentDone: '{n}% selesai',
  selectToContinue: 'Pilih jawaban untuk melanjutkan',
  back: 'Kembali',
  next: 'Lanjut',
  seeResults: 'Lihat Hasilku',
  calculating: 'Calculating your care type...',

  // ── Result ───────────────────────────────────────
  youAre: 'Kamu adalah...',
  yourCareType: 'Tipe Kepedulianmu',
  hybridTitle: 'Kamu Adalah Tipe Hybrid ✨',
  hybridSubtitle: 'Kamu memadukan beberapa gaya kepedulian berikut',
  scoreBreakdown: 'Rincian skor kamu',
  retake: 'Ulangi Asesmen',

  // ── Type preview labels ───────────────────────────
  typeNames: {
    A: 'The Observer',
    B: 'The Safe Space',
    C: 'The Connector',
    D: 'The Steady One',
  },

  // ── Result card UI ───────────────────────────────
  yourQuietSuperpower: 'Kekuatan khas kamu',
  smallActions: '✨ Hal kecil yang bisa kamu coba',

  // ── Questions ────────────────────────────────────
  questions: [
    {
      text: 'Teman Anda tiba-tiba menjadi lebih pendiam dari biasanya.',
      options: [
        { value: 'A', text: 'Saya cepat menyadari perubahan itu.' },
        { value: 'B', text: 'Saya bertanya dengan lembut, "Kamu nggak apa-apa?"' },
        { value: 'C', text: 'Saya memikirkan siapa lagi yang bisa membantu atau mendukungnya.' },
        { value: 'D', text: 'Saya tetap berada di dekatnya supaya dia tidak merasa sendirian.' },
      ],
    },
    {
      text: 'Teman Anda berkata: "Aku capek banget sama semuanya."',
      options: [
        { value: 'A', text: 'Saya mencoba memahami apa yang mungkin menjadi penyebabnya.' },
        { value: 'B', text: 'Saya bertanya, bagian mana yang terasa paling berat saat ini.' },
        { value: 'C', text: 'Saya menyarankan untuk berbicara dengan orang yang ia percaya.' },
        { value: 'D', text: 'Saya mengatakan, "Aku ada di sini buat kamu."' },
      ],
    },
    {
      text: 'Seseorang sering mengunggah cerita sedih larut malam.',
      options: [
        { value: 'A', text: 'Saya menyadari polanya dari waktu ke waktu.' },
        { value: 'B', text: 'Saya mengirim pesan untuk menanyakan kabarnya.' },
        { value: 'C', text: 'Saya bertanya apakah ia sudah berbicara dengan konselor atau pembimbing.' },
        { value: 'D', text: 'Saya mengirim pesan yang menenangkan atau menguatkan.' },
      ],
    },
    {
      text: 'Teman Anda tidak lulus ujian.',
      options: [
        { value: 'A', text: 'Saya memperhatikan perubahan perilakunya setelah itu.' },
        { value: 'B', text: 'Saya mendengarkan perasaannya tentang kejadian tersebut.' },
        { value: 'C', text: 'Saya menyarankan untuk bertemu dosen AA atau academic advisor.' },
        { value: 'D', text: 'Saya menemani dan membiarkannya bercerita atau meluapkan perasaannya.' },
      ],
    },
    {
      text: 'Seorang teman mengatakan merasa "tidak cukup baik."',
      options: [
        { value: 'A', text: 'Saya mengamati apa yang biasanya memicu pikiran tersebut.' },
        { value: 'B', text: 'Saya bertanya apa yang membuatnya merasa seperti itu.' },
        { value: 'C', text: 'Saya memikirkan bentuk dukungan yang bisa membantunya.' },
        { value: 'D', text: 'Saya mengingatkannya bahwa ia berharga.' },
      ],
    },
    {
      text: 'Dalam situasi kelompok, seseorang terlihat tidak nyaman.',
      options: [
        { value: 'A', text: 'Saya menangkap isyarat kecil dari bahasa tubuhnya.' },
        { value: 'B', text: 'Saya bertanya dengan hati-hati apakah ia ingin keluar sebentar.' },
        { value: 'C', text: 'Saya melibatkan seseorang yang membuatnya merasa aman.' },
        { value: 'D', text: 'Saya tetap berada di sampingnya agar ia merasa lebih tenang.' },
      ],
    },
    {
      text: 'Teman Anda mengatakan sudah merasa kewalahan selama beberapa minggu.',
      options: [
        { value: 'A', text: 'Saya menyadari ini bukan hanya kejadian sesaat.' },
        { value: 'B', text: 'Saya memberinya ruang untuk bercerita lebih lengkap.' },
        { value: 'C', text: 'Saya menyarankan mencari bantuan profesional jika diperlukan.' },
        { value: 'D', text: 'Saya meyakinkannya bahwa ia tidak sendirian.' },
      ],
    },
    {
      text: 'Jika teman saya sedang kesulitan, biasanya saya…',
      options: [
        { value: 'A', text: 'Menyadari perubahan terlebih dahulu.' },
        { value: 'B', text: 'Mendengarkan dengan sungguh-sungguh.' },
        { value: 'C', text: 'Membantu menghubungkan dengan dukungan yang tepat.' },
        { value: 'D', text: 'Tetap tenang dan hadir untuknya.' },
      ],
    },
  ],

  // ── Type data ─────────────────────────────────────
  types: {
    A: {
      title: 'Kamu peka banget sama perubahan kecil. Biasanya kamu yang pertama sadar kalau ada yang "beda" dari temanmu.',
      body: 'Sering kali kamu memahami orang lain bahkan sebelum mereka benar-benar memahami diri mereka sendiri.',
      highlight: 'Kamu yang pertama merasakan ketika ada yang tidak beres.',
      superpower: 'kepekaan emosional',
      challenge: 'Terkadang, kamu mungkin terlalu lama menunggu sebelum menyapa atau mengecek keadaan. Tapi rasa ingin tahumu yang lembut bisa sangat berarti bagi seseorang.',
      actions: [
        'Kirim pesan sederhana untuk menanyakan kabar: "Tadi kepikiran kamu, gimana kabarmu hari ini?"',
        'Sampaikan apa yang kamu perhatikan dengan cara yang hangat: "Akhir-akhir ini kamu kelihatan lebih pendiam. Aku ada ya kalau kamu mau cerita."',
      ],
      tip: 'Ingat: perhatian kecil sering kali jauh lebih bermakna daripada kata-kata yang terasa harus sempurna.',
    },
    B: {
      title: 'Orang merasa aman untuk menjadi diri sendiri di dekatmu.',
      body: 'Ada sesuatu dari kehadiranmu yang membuat orang lebih mudah terbuka. Kamu mendengarkan tanpa terburu-buru, tanpa langsung memberi solusi, dan tanpa menghakimi. Sering kali orang merasa lebih lega setelah berbicara denganmu.',
      highlight: 'Kamu membuat orang merasa aman secara emosional.',
      superpower: 'kemampuan mendengarkan dengan sungguh-sungguh dan penuh perhatian',
      challenge: 'Tapi ingat, kamu tidak harus memikul semua emosi orang sendirian.',
      actions: [
        'Setelah percakapan yang dalam, tanya ke diri sendiri: "Aku perlu istirahat atau recharge nggak, ya?"',
        'Seimbangkan dengan berbagi sedikit tentang dirimu juga.',
      ],
      tip: 'Menjaga energimu bukan berarti egois. Justru itu yang membantumu tetap jadi ruang aman dalam jangka panjang.',
    },
    C: {
      title: 'Kamu mengubah rasa peduli menjadi tindakan nyata.',
      body: 'Saat seseorang sedang kesulitan, kamu tidak hanya diam melihat. Kamu membantu mereka menemukan jalan keluar. Kamu paham bahwa dukungan kadang berarti menghadirkan orang atau sumber bantuan yang tepat. Kamu tahu kapan sebuah masalah butuh bantuan yang lebih besar dari satu orang saja.',
      highlight: 'Kamu membantu orang bergerak dari merasa "stuck" → menjadi lebih didukung.',
      superpower: 'Bisa mengubah rasa peduli jadi tindakan nyata.',
      challenge: 'Coba perlambat sedikit untuk benar-benar mendengarkan dulu. Solusi yang kamu berikan akan jadi jauh lebih kuat setelah itu.',
      actions: [
        'Mulai dengan bertanya: "Kamu mau aku dengerin dulu aja, atau bantu mikirin solusinya bareng?"',
        'Ulangi dan validasi dulu apa yang kamu dengar: "Kedengarannya itu berat banget ya."',
      ],
      tip: 'Ketika orang merasa didengar lebih dulu, bantuan praktismu akan terasa jauh lebih bermakna.',
    },
    D: {
      title: 'Ketenanganmu membuat orang lain merasa aman.',
      body: 'Kamu tidak selalu membutuhkan kata-kata besar. Kehadiranmu saja sudah membantu orang bernapas lebih lega. Orang merasa lebih aman hanya dengan tahu kamu ada di sana.',
      highlight: 'Kamu tipe orang yang stabil dan nggak gampang panik.',
      superpower: 'energi yang tenang dan menenangkan',
      challenge: 'Terkadang, orang lain tidak sepenuhnya sadar seberapa besar kamu peduli. Sapaan kecil, misalnya, bisa membantu mereka lebih merasakannya.',
      actions: [
        'Kirim pesan sederhana untuk follow-up: "Hari ini kamu gimana kabarnya?"',
        'Ucapkan dukungan secara langsung, walau singkat: "Aku senang banget kamu mau cerita."',
      ],
      tip: 'Inisiatif kecil bisa membantu orang menyadari dukungan yang selama ini sudah kamu berikan dengan diam-diam.',
    },
  },

  // ── Hybrid tips ───────────────────────────────────
  hybridTips: {
    AB: 'Kamu peka melihat ketika seseorang sedang kesulitan, dan mampu menciptakan ruang yang membuat mereka merasa aman untuk bercerita.',
    AC: 'Kamu cepat menangkap tanda-tanda awal ketika seseorang sedang tidak baik-baik saja, lalu membantu menghubungkan mereka dengan dukungan yang tepat.',
    AD: 'Kehadiranmu yang tenang dan menerima membuat orang merasa lebih aman saat melewati masa yang berat.',
    BC: 'Kamu menghadapi situasi sulit dengan tenang, sambil membantu orang lain menemukan dukungan yang bisa membantu mereka.',
    BD: 'Kehadiranmu yang tenang dan penuh penerimaan membuat orang lain merasa aman saat melewati masa-masa sulit.',
    CD: 'Kamu menghadapi situasi sulit dengan tenang, sambil tetap membantu orang lain menemukan dukungan yang mereka butuhkan.',
  },

  // ── Footer ────────────────────────────────────────
  footer: 'Dibuat dengan penuh perhatian · Bukan alat diagnosis klinis',
}
