const cards = [
  {
    id: 1,
    question: "Siapa yang paling sering bikin suasana rumah jadi rame?",
  },
  {
    id: 2,
    question: "Menurut kalian, siapa yang paling rajin bantu di rumah?",
  },
  {
    id: 3,
    question: "Hal lucu apa yang pernah bikin kita semua ngakak bareng?",
  },
  {
    id: 4,
    question: "Siapa yang paling ribet kalau lagi diajak keluar rumah?",
  },
  {
    id: 5,
    question: "Apa kenangan keluarga yang paling berkesan untuk kalian?",
  },
  { id: 6, question: "Siapa yang paling sering bangun siang di rumah?" },
  {
    id: 7,
    question: "Menurut kalian, siapa yang paling jago masak di keluarga?",
  },
  { id: 8, question: "Siapa yang paling sering lupa naruh barang di rumah?" },
  {
    id: 9,
    question: "Hal kecil apa yang bikin kita merasa dekat sebagai keluarga?",
  },
  { id: 10, question: "Siapa yang paling suka bercanda di meja makan?" },
  { id: 11, question: "Menurut kalian, siapa yang paling cerewet di rumah?" },
  { id: 12, question: "Siapa yang paling suka ngemil di keluarga ini?" },
  {
    id: 13,
    question:
      "Apa kebiasaan unik setiap anggota keluarga yang bikin kita ingat mereka?",
  },
  { id: 14, question: "Siapa yang paling sering ketawa kenceng di rumah?" },
  {
    id: 15,
    question:
      "Menurut kalian, siapa yang paling suka jalan-jalan bareng keluarga?",
  },
  {
    id: 16,
    question: "Apa momen paling lucu yang pernah kita alami bersama keluarga?",
  },
  { id: 17, question: "Siapa yang paling hobi nonton TV di rumah?" },
  {
    id: 18,
    question: "Menurut kalian, siapa yang paling mudah marah di keluarga?",
  },
  { id: 19, question: "Hal apa yang bikin keluarga kita terasa spesial?" },
  {
    id: 20,
    question:
      "Siapa yang paling sering jadi 'penengah' kalau ada yang berantem?",
  },
  { id: 21, question: "Siapa yang paling suka bercerita di keluarga kita?" },
  {
    id: 22,
    question: "Menurut kalian, siapa yang paling suka olahraga di keluarga?",
  },
  {
    id: 23,
    question: "Siapa yang paling sering bikin rencana liburan keluarga?",
  },
  {
    id: 24,
    question:
      "Apa makanan favorit keluarga yang bikin kita selalu ingin kumpul?",
  },
  { id: 25, question: "Siapa yang paling suka bersih-bersih rumah?" },
  {
    id: 26,
    question:
      "Menurut kalian, siapa yang paling sering lupa bawa barang penting?",
  },
  {
    id: 27,
    question: "Siapa yang paling semangat kalau ada acara keluarga besar?",
  },
  { id: 28, question: "Hal apa yang selalu bikin suasana rumah jadi hangat?" },
  { id: 29, question: "Siapa yang paling suka bercanda walau lagi serius?" },
  {
    id: 30,
    question:
      "Menurut kalian, siapa yang paling suka mendengarkan musik di rumah?",
  },
  { id: 31, question: "Apa kebiasaan kecil yang bikin rumah terasa nyaman?" },
  {
    id: 32,
    question:
      "Siapa yang paling sering ngingetin anggota keluarga lain soal tugas?",
  },
  {
    id: 33,
    question: "Siapa yang paling suka menyanyi walau suaranya pas-pasan?",
  },
  {
    id: 34,
    question:
      "Menurut kalian, siapa yang paling suka cerita tentang hari-harinya?",
  },
  { id: 35, question: "Siapa yang paling susah diajak keluar dari kamar?" },
  {
    id: 36,
    question:
      "Apa momen yang bikin kalian merasa bersyukur punya keluarga ini?",
  },
  { id: 37, question: "Siapa yang paling suka ngajak makan bareng di luar?" },
  {
    id: 38,
    question:
      "Menurut kalian, siapa yang paling sering bikin rumah ramai dengan obrolan?",
  },
  { id: 39, question: "Hal apa yang sering kita lakuin bareng saat libur?" },
  {
    id: 40,
    question: "Siapa yang paling sering telat bangun pas ada acara keluarga?",
  },
  {
    id: 41,
    question: "Apa hal sederhana yang bikin kita merasa dekat satu sama lain?",
  },
  {
    id: 42,
    question:
      "Siapa yang paling suka menyimpan barang-barang kecil tapi penting?",
  },
  {
    id: 43,
    question:
      "Menurut kalian, siapa yang paling sering mendadak jadi ‘guru’ di rumah?",
  },
  { id: 44, question: "Siapa yang paling gampang tidur di mana aja?" },
  {
    id: 45,
    question: "Apa kebiasaan lucu di rumah yang nggak pernah bisa dilupakan?",
  },
  {
    id: 46,
    question: "Menurut kalian, siapa yang paling sering ngajak foto keluarga?",
  },
  { id: 47, question: "Siapa yang paling gampang lupa ngerjain tugas rumah?" },
  {
    id: 48,
    question: "Apa hal yang bikin suasana rumah jadi hangat setiap hari?",
  },
  { id: 49, question: "Siapa yang paling suka bikin kejutan untuk keluarga?" },
  {
    id: 50,
    question: "Apa hal kecil yang selalu bikin kita ingat satu sama lain?",
  },
];

let drawnCards = [];

function drawCard() {
  const cardElement = document.getElementById("card");
  const cardText = document.getElementById("card-question");

  // Efek animasi tombol ditekan
  const button = document.querySelector("button");
  button.classList.add("button-animate");

  setTimeout(() => {
    button.classList.remove("button-animate");
  }, 300);

  if (drawnCards.length === cards.length) {
    alert("Semua kartu sudah ditampilkan!");
    return;
  }

  // Ambil kartu secara acak
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * cards.length);
  } while (drawnCards.includes(randomIndex));

  drawnCards.push(randomIndex);

  // Animasi keluar kartu lama (fade-out dan geser ke samping)
  cardElement.classList.add("card-animate-out");
  setTimeout(() => {
    // Mengganti teks pertanyaan
    cardText.innerText = cards[randomIndex].question;

    // Animasi masuk kartu baru (fade-in dan geser dari samping)
    cardElement.classList.remove("card-animate-out");
    cardElement.classList.add("card-animate-in");
    setTimeout(() => cardElement.classList.remove("card-animate-in"), 600);
  }, 300);
}
