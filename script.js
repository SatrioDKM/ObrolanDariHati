const cards = [
  {
    id: 1,
    question: "Apa hal pertama yang kamu perhatikan saat kita bertemu?",
  },
  { id: 2, question: "Kapan momen paling bahagia yang kita lalui bersama?" },
  {
    id: 3,
    question: "Apa impian terbesar kita yang ingin kita capai bersama?",
  },
  { id: 4, question: "Satu hal yang paling kamu sukai dari diriku?" },
  {
    id: 5,
    question: "Apa kenangan lucu yang tak terlupakan selama kita bersama?",
  },
  { id: 6, question: "Apa yang membuatmu merasa spesial dalam hubungan ini?" },
  {
    id: 7,
    question:
      "Kalau kita bisa pergi liburan sekarang, ke mana kita akan pergi?",
  },
  { id: 8, question: "Apa hal kecil yang bisa membuat harimu lebih baik?" },
  { id: 9, question: "Satu momen romantis yang paling kamu ingat?" },
  { id: 10, question: "Apa lagu yang menurutmu menggambarkan hubungan kita?" },
  {
    id: 11,
    question: "Hal apa yang ingin kita coba bersama untuk pertama kalinya?",
  },
  {
    id: 12,
    question: "Apa film favorit kita yang harus kita tonton berulang kali?",
  },
  {
    id: 13,
    question: "Bagaimana perasaanmu ketika kita pertama kali bertemu?",
  },
  {
    id: 14,
    question: "Hal apa yang menurutmu paling menyenangkan saat bersamaku?",
  },
  { id: 15, question: "Apa kebiasaan kecilku yang menurutmu paling menarik?" },
  { id: 16, question: "Apa hadiah terbaik yang pernah aku berikan padamu?" },
  {
    id: 17,
    question: "Satu tempat yang ingin kita kunjungi bersama di masa depan?",
  },
  { id: 18, question: "Apa kejutan terbaik yang pernah aku berikan padamu?" },
  { id: 19, question: "Apa arti cinta bagimu?" },
  { id: 20, question: "Bagaimana cara kita memperkuat hubungan ini?" },
  {
    id: 21,
    question: "Hal apa yang ingin kamu lakukan lebih sering bersamaku?",
  },
  { id: 22, question: "Apa makanan yang selalu ingin kita makan bersama?" },
  {
    id: 23,
    question: "Kalau kita menulis buku tentang hubungan ini, apa judulnya?",
  },
  {
    id: 24,
    question: "Apa satu hal yang ingin kita capai sebagai pasangan tahun ini?",
  },
  { id: 25, question: "Apa arti keluarga dalam hubungan kita?" },
  { id: 26, question: "Apa momen yang membuatmu sadar bahwa kita cocok?" },
  { id: 27, question: "Bagaimana cara kita saling mendukung satu sama lain?" },
  {
    id: 28,
    question: "Hal apa yang membuatmu bersyukur tentang hubungan ini?",
  },
  {
    id: 29,
    question: "Apa momen paling romantis yang ingin kita ulangi lagi?",
  },
  { id: 30, question: "Apa hal yang ingin kita lakukan di akhir pekan ini?" },
  {
    id: 31,
    question: "Bagaimana kamu mendeskripsikan hubungan kita dalam tiga kata?",
  },
  {
    id: 32,
    question: "Apa yang membuat hubungan kita berbeda dari yang lain?",
  },
  { id: 33, question: "Apa hal terbaik yang kita lakukan sebagai pasangan?" },
  { id: 34, question: "Bagaimana kita menjaga komunikasi tetap sehat?" },
  { id: 35, question: "Apa film yang selalu membuat kita tertawa bersama?" },
  { id: 36, question: "Apa rahasia hubungan kita tetap bahagia?" },
  {
    id: 37,
    question: "Apa yang kamu harapkan dari hubungan kita di masa depan?",
  },
  { id: 38, question: "Apa arti 'rumah' bagimu dalam hubungan kita?" },
  { id: 39, question: "Apa yang membuat hubungan ini begitu spesial?" },
  { id: 40, question: "Apa tradisi kecil yang ingin kita mulai bersama?" },
  { id: 41, question: "Bagaimana perasaanmu ketika kita berpegangan tangan?" },
  {
    id: 42,
    question: "Apa hal pertama yang ingin kamu katakan kepadaku setiap pagi?",
  },
  { id: 43, question: "Apa yang kamu syukuri tentang diriku?" },
  { id: 44, question: "Apa cara terbaik untuk menunjukkan cintamu padaku?" },
  { id: 45, question: "Apa rahasia senyummu yang paling manis?" },
  { id: 46, question: "Apa kenangan kecil yang selalu membuatmu tersenyum?" },
  {
    id: 47,
    question: "Hal apa yang menurutmu paling berharga dalam hubungan kita?",
  },
  { id: 48, question: "Apa harapan terbesarmu untuk kita berdua?" },
  {
    id: 49,
    question: "Bagaimana kita bisa lebih sering menikmati waktu bersama?",
  },
  {
    id: 50,
    question: "Apa doa yang selalu kamu panjatkan untuk hubungan kita?",
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
