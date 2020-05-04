const qBank = [
  {
    question:
      "Kandungan Surah Yunus ayat 40-41 berisi ajaran tentang ....",
    answers: ["A. Toleransi", "B. Sabar", "C. Tawakal", "D. ikhtiar"],
    correct: "A. Toleransi",
    questionId: "099099"
  },
  {
    question:
      "Toleransi dalam istilah Arab disebut ....",
    answers: ["A. Tabayyun", "B. Tasamuh", "C. Tadabbur", "D. Ta'aruf"],
    correct: "B. Tasamuh",
    questionId: "183452"
  },
  {
    question:
      "Surah al-Kafirun mengandung ajaran tidak boleh mencampuradukkan dalam urusan ....",
    answers: ["A. Jual beli", "B. Silaturahmi", "C. Ibadah", "D. Dunia"],
    correct: "C. Ibadah",
    questionId: "267908"
  },
  {
    question: "Orang yang mendustakan Al-Qur'an ditempatkan di dalam neraka ....",
    answers: [
      "A. Hawiyah",
      "B. Wail",
      "C. Jahannam",
      "D. Saqar"
    ],
    correct: "C. Jahannam",
    questionId: "333247"
  },
  {
    question: "Menurut surah al-Kahf ayat 29, balasan orang yang kufur, yaitu neraka yang api nya ....",
    answers: ["A. Bergejolak", "B. Bergetar", "C. Bergenang", "D. Bergulung"],
    correct: "A. Bergejolak",
    questionId: "496293"
  },
  {
    question:
      "Cara yang tepat untuk menunjukkan konsep kebenaran dalam perbedaan, yaitu ....",
    answers: [
      "A. Berdebat",
      "B. Berdialog",
      "C. Bersepakat",
      "D. Berdamai"
    ],
    correct: "D. Berdamai",
    questionId: "588909"
  },
  {
    question:
      "Dalam mengimani Al-Qur'an, selain dipahami juga harus ....",
    answers: ["A. Dilestarikan", "B. Diterjemahkan", "C. Diamalkan", "D. Didiskusikan"],
    correct: "C. Diamalkan",
    questionId: "648452"
  },
  {
    question: "Seseorang yang tidak mau bersyukur disebut dengan istilah ....",
    answers: ["A. Kafir", "B. Kufur", "C. Musyrik", "D. Syirik"],
    correct: "B. Kufur",
    questionId: "786649"
  },
  {
    question:
      "Umat Nabi Muhammad SAW. dalam mendapatkan Al-Qur’an berdasarkan Surah Yunus [10] ayat 40-41 terbagi menjadi ....golongan.",
    answers: ["A. Dua", "B. Empat", "C. Lima", "D. Tujuh"],
    correct: "A. Dua",
    questionId: "839754"
  },
  {
    question:
      "Bencana yang terjadi di bumi bagi orang-orang yang beriman mengandung makna ....",
    answers: [
      "A. Azab",
      "B. Ujian",
      "C. Hadiah",
      "D. Sedekah"
    ],
    correct: "B. Ujian",
    questionId: "98390"
  },
  {
    question: "Beriman kepada kitab Allah hukumnya ....",
    answers: ["A. Mubah", "B. Sunah", "C. Wajib", "D. Mustahab"],
    correct: "C. wajib",
    questionId: "1071006"
  },
  {
    question: "Kitab Allah yang wajib di Imani adalah ....",
    answers: ["A. Satu", "B. Dua", "C. Tiga", "D. Empat"],
    correct: "D. Empat",
    questionId: "1226535"
  },
  {
    question: "Kitab Allah yang diturunkan kepada Nabi Daud a.s. adalah ....",
    answers: ["A. Zabur", "B. Weda", "C. Injil", "D. Taurat"],
    correct: "A. Zabur",
    questionId: "1310938"
  },
  {
    question: "Kitab Allah yang diturunkan kepada Nabi Musa a.s. adalah ....",
    answers: ["A. Zabur", "B. Weda", "C. Injil", "D. Taurat"],
    correct: "D. Taurat",
    questionId: "1436873"
  },
  {
    question: " Kitab Allah yang diturunkan kepada Nabi Muhammad saw. adalah ....",
    answers: ["A. Zabur", "B. Weda", "C. Injil", "D. Al-Qur'an"],
    correct: "D. Al-Qur'an",
    questionId: "1515110"
  },
  {
    question: "Kitab Allah yang diturunkan kepada Nabi Isa a.s. adalah ....",
    answers: ["A. Zabur", "B. Weda", "C. Injil", "D. Al-Qur'an"],
    correct: "C. Injil",
    questionId: "1642728"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
