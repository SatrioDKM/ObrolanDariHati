const cards = [
  {
    id: 1,
    question:
      "Menurut kalian, siapa di antara kita yang paling sering bikin ngakak?",
  },
  {
    id: 2,
    question:
      "Siapa yang paling gampang lupa sama janji tapi tetep kita sayang?",
  },
  {
    id: 3,
    question:
      "Menurut kalian, siapa yang paling sering jadi ‘admin dadakan’ pas lagi ngumpul?",
  },
  {
    id: 4,
    question: "Siapa yang paling bisa diandalkan kalo kita lagi butuh bantuan?",
  },
  {
    id: 5,
    question:
      "Hal paling konyol apa yang pernah kita lakuin bareng menurut kalian?",
  },
  {
    id: 6,
    question: "Menurut kalian, siapa yang paling cocok jadi pemimpin geng ini?",
  },
  {
    id: 7,
    question:
      "Kalau kita bikin bisnis bareng, siapa yang bakal jadi bos dan siapa karyawan?",
  },
  {
    id: 8,
    question: "Menurut kalian, siapa yang bakal nikah paling terakhir?",
  },
  {
    id: 9,
    question:
      "Siapa di antara kita yang paling sering ngilang terus muncul tiba-tiba?",
  },
  {
    id: 10,
    question:
      "Menurut kalian, kebiasaan siapa yang paling bikin heran tapi kocak?",
  },
  {
    id: 11,
    question: "Siapa yang paling ribet kalo lagi diajak pergi bareng?",
  },
  {
    id: 12,
    question:
      "Menurut kalian, siapa yang paling pinter bikin alasan kalau datang telat?",
  },
  {
    id: 13,
    question: "Siapa di antara kita yang paling gampang diajak hal random?",
  },
  {
    id: 14,
    question:
      "Menurut kalian, siapa yang paling baper kalau lagi dibercandain?",
  },
  {
    id: 15,
    question: "Hal apa yang bikin kita jadi klop banget satu sama lain?",
  },
  {
    id: 16,
    question: "Menurut kalian, siapa yang bakal sukses duluan jadi crazy rich?",
  },
  {
    id: 17,
    question:
      "Siapa yang paling sering bikin rencana tapi ujung-ujungnya batal?",
  },
  {
    id: 18,
    question:
      "Menurut kalian, apa kenangan paling absurd yang kita punya bareng?",
  },
  {
    id: 19,
    question:
      "Siapa yang paling sering jadi ‘penengah’ pas lagi ada drama kecil?",
  },
  {
    id: 20,
    question:
      "Menurut kalian, siapa yang paling mirip karakter di film atau series?",
  },
  { id: 21, question: "Siapa yang paling sering curhat random tengah malam?" },
  {
    id: 22,
    question:
      "Menurut kalian, siapa yang bakal jadi traveler sejati di masa depan?",
  },
  {
    id: 23,
    question: "Siapa yang paling suka ‘ngeracunin’ hal baru ke geng ini?",
  },
  {
    id: 24,
    question:
      "Menurut kalian, kebiasaan apa yang bikin kita selalu inget satu sama lain?",
  },
  {
    id: 25,
    question: "Siapa yang paling gampang ketawa bahkan buat hal receh?",
  },
  {
    id: 26,
    question:
      "Menurut kalian, siapa yang bakal bikin podcast kalau kita terkenal nanti?",
  },
  {
    id: 27,
    question: "Siapa yang paling suka bikin konten atau story paling absurd?",
  },
  {
    id: 28,
    question: "Menurut kalian, siapa yang paling chill kalau lagi ada masalah?",
  },
  {
    id: 29,
    question: "Siapa di antara kita yang paling jago ngemil pas nongkrong?",
  },
  {
    id: 30,
    question: "Menurut kalian, siapa yang paling susah diajak serius?",
  },
  {
    id: 31,
    question: "Hal random apa yang paling sering kita obrolin bareng?",
  },
  {
    id: 32,
    question:
      "Menurut kalian, siapa yang paling sering bikin grup chat rame tiba-tiba?",
  },
  {
    id: 33,
    question: "Siapa yang paling cocok jadi ‘juru foto’ pas kita jalan-jalan?",
  },
  {
    id: 34,
    question:
      "Menurut kalian, siapa yang bakal paling sering ngajak reuni nanti?",
  },
  {
    id: 35,
    question:
      "Apa kebiasaan kecil yang paling bikin kalian inget sama temen-temen di sini?",
  },
  {
    id: 36,
    question:
      "Menurut kalian, siapa yang paling gampang panik kalau ada hal mendadak?",
  },
  {
    id: 37,
    question:
      "Siapa yang paling bikin suasana rame walau cuma ngomong satu dua kata?",
  },
  {
    id: 38,
    question:
      "Menurut kalian, apa hal paling seru yang harus kita lakuin bareng tahun ini?",
  },
  {
    id: 39,
    question: "Siapa yang paling berpotensi jadi artis atau influencer?",
  },
  {
    id: 40,
    question: "Menurut kalian, siapa yang paling nyebelin tapi bikin kangen?",
  },
  {
    id: 41,
    question: "Menurut kalian, siapa yang paling sering jadi bahan bercandaan?",
  },
  {
    id: 42,
    question:
      "Siapa yang paling sering ngajak makan tapi nggak pernah traktir?",
  },
  {
    id: 43,
    question:
      "Menurut kalian, siapa yang paling sering tiba-tiba nge-ghosting grup chat?",
  },
  {
    id: 44,
    question: "Siapa di antara kita yang paling sering bikin agenda dadakan?",
  },
  {
    id: 45,
    question:
      "Menurut kalian, siapa yang paling jago nyari tempat nongkrong murah meriah?",
  },
  {
    id: 46,
    question:
      "Siapa yang paling gampang dibohongin tapi tetep ketawa kalo tahu?",
  },
  {
    id: 47,
    question:
      "Menurut kalian, siapa yang bakal paling semangat kalo diajak camping atau trip?",
  },
  {
    id: 48,
    question:
      "Siapa yang paling cocok jadi motivator kalau lagi ada yang galau?",
  },
  {
    id: 49,
    question:
      "Menurut kalian, siapa yang paling bikin bangga kalau sukses nanti?",
  },
  {
    id: 50,
    question: "Apa satu hal yang bikin pertemanan kita jadi nggak tergantikan?",
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
