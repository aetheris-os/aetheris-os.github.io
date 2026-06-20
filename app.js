// ====== KONFIGURASI API GROQ (PISAH KEY UNTUK HEMAT TOKEN) ======
// Key untuk GENERATE SOAL (bisa pakai key sama atau berbeda)
const GENERATE_API_KEY = "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"; 
// Key untuk TANYA JAWAB AI (bisa diisi dengan key yang sama atau berbeda)
const CHAT_API_KEY = "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";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// ====== MATERI UTBK 2024-2025 ======
const DATA_MATERI = {
  'subtest-pu': {
    title: "Penalaran Umum (PU)",
    category: "TPS Module",
    desc: "Mengukur kemampuan penalaran logis (silogisme, premis), analitis (deret, permainan kata), dan penalaran kuantitatif.",
    htmlContent: `
      <div class="materi-card">
        <h2>Logika Silogisme & Premis (UTBK 2024)</h2>
        <p>Silogisme adalah penarikan kesimpulan dari dua premis. Aturan mainnya:</p>
        <ul>
          <li><strong>Modus Ponens:</strong> Jika p maka q. p terjadi. Maka q terjadi.</li>
          <li><strong>Modus Tollens:</strong> Jika p maka q. q tidak terjadi. Maka p tidak terjadi.</li>
          <li><strong>Silogisme Rantai:</strong> p→q, q→r, maka p→r.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Penalaran Analitis (Deret & Logika Diagram)</h2>
        <p>Deret angka biasanya menggunakan pola aritmatika (+a), geometri (xa), atau pola selang-seling. Deret huruf menggunakan urutan abjad (A=1, B=2, dst).</p>
      </div>
    `
  },
  'subtest-ppu': {
    title: "Pengetahuan & Pemahaman Umum (PPU)",
    category: "TPS Module",
    desc: "Mengukur penguasaan kosakata (sinonim, antonim), ejaan, dan tata bahasa praktis.",
    htmlContent: `
      <div class="materi-card">
        <h2>Kosakata Berbasis Konteks (UTBK 2024)</h2>
        <p>Soal PPU tidak lagi sekadar mencari sinonim kamus, melainkan sinonim kontekstual. Contoh: Kata "peredaran" dalam "peredaran uang" berbeda dengan "peredaran darah".</p>
      </div>
      <div class="materi-card">
        <h2>Ejaan yang Disempurnakan (EYD V)</h2>
        <p>Perhatikan penulisan huruf kapital, imbuhan asing, dan kata depan. "Di" sebagai awalan verba pasif digabung (dimakan), "di" sebagai preposisi tempat dipisah (di rumah).</p>
      </div>
    `
  },
  'subtest-pbm': { title: "Memahami Bacaan & Menulis", category: "TPS Module", desc: "Tata bahasa formal.", htmlContent: "<div class='materi-card'><h2>Materi PBM</h2><p>Belum tersedia.</p></div>" },
  'subtest-pk': { title: "Pengetahuan Kuantitatif", category: "TPS Module", desc: "Matematika dasar.", htmlContent: "<div class='materi-card'><h2>Materi PK</h2><p>Belum tersedia.</p></div>" },
  'subtest-indo': { title: "Literasi B. Indonesia", category: "Literasi Module", desc: "Pemahaman teks.", htmlContent: "<div class='materi-card'><h2>Materi Literasi ID</h2><p>Belum tersedia.</p></div>" },
  'subtest-inggris': { title: "Literasi B. Inggris", category: "Literasi Module", desc: "Reading comprehension.", htmlContent: "<div class='materi-card'><h2>Materi Literasi EN</h2><p>Belum tersedia.</p></div>" },
  'subtest-pm': { title: "Penalaran Matematika", category: "Literasi Module", desc: "Soal cerita matematika.", htmlContent: "<div class='materi-card'><h2>Materi PM</h2><p>Belum tersedia.</p></div>" }
};

// ====== BANK SOAL SIMULASI (40 SOAL PER SUBTES) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Semua dokter pandai. Sebagian dokter kaya. Kesimpulan yang benar adalah...", opsi: ["Semua yang kaya pandai", "Sebagian yang pandai kaya", "Semua yang pandai kaya", "Sebagian yang kaya bodoh"], jawaban: 1, pembahasan: "Silogisme partikular: Subjek (dokter) disisihkan, predikat dipertahankan." },
    { soal: "Jika hari hujan, jalan basah. Jalan tidak basah. Maka...", opsi: ["Hari hujan", "Hari tidak hujan", "Hari mendung", "Tidak tentu"], jawaban: 1, pembahasan: "Modus Tollens: p→q, ~q maka ~p." },
    { soal: "Deret: 3, 6, 11, 18, 27, ...", opsi: ["36", "38", "40", "42"], jawaban: 1, pembahasan: "Selisih: +3, +5, +7, +9. Berikutnya +11. 27+11=38." },
    { soal: "Deret: 2, 6, 12, 20, 30, ...", opsi: ["40", "42", "44", "46"], jawaban: 1, pembahasan: "Selisih: +4, +6, +8, +10. Berikutnya +12. 30+12=42." },
    { soal: "Jika p maka q. Jika q maka r. Jika r maka s. Jika p benar, maka...", opsi: ["q benar", "r benar", "s benar", "p dan q benar"], jawaban: 2, pembahasan: "Silogisme rantai: p→q→r→s. Jika p benar, konsekuensi terakhir (s) pasti benar." },
    { soal: "Semua siswa wajib ujian. Sebagian siswa sakit. Maka...", opsi: ["Semua yang sakit tidak ujian", "Sebagian yang wajib ujian sakit", "Semua siswa sehat", "Tidak ada yang ujian"], jawaban: 1, pembahasan: "Silogisme partikular afirmatif." },
    { soal: "A, C, E, G, I, ...", opsi: ["J", "K", "L", "M"], jawaban: 1, pembahasan: "Melompati satu huruf (A, [B], C, [D], E...). I selanjutnya adalah K." },
    { soal: "Z, X, V, T, R, ...", opsi: ["Q", "P", "O", "N"], jawaban: 1, pembahasan: "Mundur dua huruf. R mundur dua = P." },
    { soal: "Jika x adalah bilangan ganjil, maka x+1 adalah bilangan genap. Jika x+1 ganjil, maka...", opsi: ["x genap", "x ganjil", "x prima", "x nol"], jawaban: 0, pembahasan: "Kontraposisi: p→q, ~q maka ~p. Jika x+1 ganjil (~q), maka x bukan ganjil (genap)." },
    { soal: "Tidak ada pemalas yang sukses. Sebagian mahasiswa pemalas. Maka...", opsi: ["Sebagian mahasiswa sukses", "Sebagian mahasiswa tidak sukses", "Semua mahasiswa sukses", "Tidak ada mahasiswa sukses"], jawaban: 1, pembahasan: "Silogisme negatif." },
    { soal: "Deret: 1, 4, 9, 16, 25, ...", opsi: ["30", "36", "42", "49"], jawaban: 1, pembahasan: "Pola kuadrat: 1², 2², 3², 4², 5², 6²=36." },
    { soal: "Deret: 2, 3, 5, 7, 11, ...", opsi: ["12", "13", "14", "15"], jawaban: 1, pembahasan: "Deret bilangan prima." },
    { soal: "Semua logam memuai jika dipanaskan. Besi adalah logam. Kesimpulan...", opsi: ["Besi memuai jika dipanaskan", "Besi tidak memuai", "Semua yang memuai besi", "Logam tidak memuai"], jawaban: 0, pembahasan: "Silogisme kategorik universal." },
    { soal: "Jika A>B dan B>C, maka...", opsi: ["C>A", "A>C", "B=A", "A=C"], jawaban: 1, pembahasan: "Sifat transitif." },
    { soal: "Semua bunga berbau wangi. Mawar adalah bunga. Maka...", opsi: ["Mawar berbau wangi", "Mawar tidak wangi", "Semua wangi mawar", "Tidak pasti"], jawaban: 0, pembahasan: "Silogisme dasar." },
    { soal: "Deret: 5, 10, 8, 16, 14, 28, ...", opsi: ["26", "30", "32", "24"], jawaban: 0, pembahasan: "Pola selang-seling: x2, -2. 28-2=26." },
    { soal: "Deret: 100, 50, 25, 12.5, ...", opsi: ["6.25", "5", "7.5", "10"], jawaban: 0, pembahasan: "Deret geometri dibagi 2." },
    { soal: "Semifinalis mendapat medali. Andi bukan semifinalis. Maka...", opsi: ["Andi mendapat medali", "Andi tidak mendapat medali", "Andi finalis", "Tidak tentu"], jawaban: 3, pembahasan: "Jangan disimpulkan bahwa non-semifinalis tidak dapat medali (bisa saja ada jalur lain dapat medali)." },
    { soal: "Jika hujan, angin kencang. Angin tidak kencang. Maka...", opsi: ["Hujan", "Tidak hujan", "Mendung", "Cerah"], jawaban: 1, pembahasan: "Modus Tollens." },
    { soal: "A, C, F, J, O, ...", opsi: ["T", "U", "V", "S"], jawaban: 1, pembahasan: "Selisih +2, +3, +4, +5, +6. O(15)+6=U(21)." },
    { soal: "Semua A adalah B. Tidak ada B yang C. Maka...", opsi: ["Semua A adalah C", "Tidak ada A yang C", "Sebagian A adalah C", "Tidak ada A yang B"], jawaban: 1, pembahasan: "Silogisme negatif universal." },
    { soal: "Jika naik pesawat, harus tes PCR. Andi tidak tes PCR. Maka Andi...", opsi: ["Naik pesawat", "Tidak naik pesawat", "Naik kapal", "Tidak tentu"], jawaban: 1, pembahasan: "Modus Tollens." },
    { soal: "Deret: 81, 27, 9, 3, ...", opsi: ["0", "1", "1.5", "2"], jawaban: 1, pembahasan: "Dibagi 3. 3/3=1." },
    { soal: "Deret: 1, 1, 2, 3, 5, 8, ...", opsi: ["11", "12", "13", "14"], jawaban: 2, pembahasan: "Deret Fibonacci (jumlah dua angka sebelumnya)." },
    { soal: "Deret: 2, 5, 10, 17, 26, ...", opsi: ["35", "36", "37", "38"], jawaban: 2, pembahasan: "Selisih +3, +5, +7, +9, +11. 26+11=37." },
    { soal: "Tidak ada ikan yang mamalia. Hiu adalah ikan. Maka...", opsi: ["Hiu mamalia", "Hiu bukan mamalia", "Sebagian hiu mamalia", "Tidak tentu"], jawaban: 1, pembahasan: "Silogisme negatif universal." },
    { soal: "Jika nilai ujian > 80, dapat A. Nilai Budi 85. Maka...", opsi: ["Budi dapat A", "Budi tidak dapat A", "Budi remidi", "Tidak tentu"], jawaban: 0, pembahasan: "Modus Ponens." },
    { soal: "Jika hujan, Budi bawa payung. Budi bawa payung. Maka...", opsi: ["Hari hujan", "Hari cerah", "Budi takut panas", "Tidak tentu hujan"], jawaban: 3, pembahasan: "Affirming consequent fallacy. Bisa saja Budi bawa payung karena panas." },
    { soal: "Jika x>5, maka y<2. Jika y=3, maka...", opsi: ["x>5", "x<=5", "x=5", "x<5"], jawaban: 1, pembahasan: "Kontraposisi." },
    { soal: "Semua dosen berijazah S2. Sebagian dosen berijazah S3. Maka...", opsi: ["Semua S2 adalah S3", "Sebagian S2 adalah S3", "Semua dosen S3", "Sebagian dosen S2 adalah S3"], jawaban: 3, pembahasan: "Karena semua dosen S2, dan sebagian S3." },
    { soal: "Sebagian buku menarik. Semua buku mahal. Maka...", opsi: ["Semua yang menarik mahal", "Sebagian yang mahal menarik", "Semua yang mahal menarik", "Tidak ada hubungannya"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika sakit, minum obat. Minum obat. Maka...", opsi: ["Sakit", "Tidak sakit", "Tidak tentu sakit", "Sembuh"], jawaban: 2, pembahasan: "Jangan jatuh ke 'Affirming the Consequent'." },
    { soal: "Semula: KUDA. Jika K diganti M, D diganti T, menjadi...", opsi: ["MUTA", "MATA", "KUTA", "MUDA"], jawaban: 0, pembahasan: "Substitusi huruf." },
    { soal: "Lima orang A, B, C, D, E duduk berjajar. A di ujung kiri. C di antara B dan D. E di kanan D. Urutannya...", opsi: ["ABCDE", "ABDCE", "ACDBE", "ABCDE"], jawaban: 1, pembahasan: "Logika spatial." },
    { soal: "Jika lampu menyala, maka ada listrik. Lampu tidak menyala. Maka...", opsi: ["Ada listrik", "Tidak ada listrik", "Lampu rusak", "Tidak pasti tidak ada listrik"], jawaban: 3, pembahasan: "Lampu tidak menyala bisa karena rusak." },
    { soal: "Deret: 4, 8, 12, 16, ...", opsi: ["18", "20", "22", "24"], jawaban: 1, pembahasan: "Kelipatan 4." },
    { soal: "Semua tanaman butuh air. Rumput adalah tanaman. Maka...", opsi: ["Rumput butuh air", "Air butuh rumput", "Rumput tidak butuh air", "Tanaman adalah air"], jawaban: 0, pembahasan: "Silogisme dasar." },
    { soal: "A = B, B = C, C = D. Maka A = ?", opsi: ["B", "C", "D", "Semuanya benar"], jawaban: 3, pembahasan: "Sifat transitif rantai." },
    { soal: "Deret huruf: A, C, F, J, O, ...", opsi: ["U", "T", "S", "V"], jawaban: 0, pembahasan: "Selisih +2, +3, +4, +5, +6. U." },
    { soal: "P, Q, R, S, T. Jika P=T, dan Q=S, maka hubungan P dan S adalah...", opsi: ["P>S", "P<S", "P=S", "P≠S"], jawaban: 1, pembahasan: "P=T, Q=S. Karena T>R, maka S<T (P). Jadi P>S." }
  ],
  'subtest-ppu': [
    { soal: "Sinonim dari 'Bengis' adalah...", opsi: ["Ramah", "Kejam", "Pemalu", "Penakut"], jawaban: 1, pembahasan: "Bengis berarti keras/kejam." },
    { soal: "Sinonim dari 'Ekstensif' adalah...", opsi: ["Sempit", "Luas", "Dalam", "Tinggi"], jawaban: 1, pembahasan: "Ekstensif = luas, meluas." },
    { soal: "Sinonim dari 'Konvensional' adalah...", opsi: ["Modern", "Tradisional", "Futuristik", "Inovatif"], jawaban: 1, pembahasan: "Konvensional = bersifat tradisi/adat kebiasaan." },
    { soal: "Sinonim dari 'Prematur' adalah...", opsi: ["Tepat waktu", "Terlambat", "Lebih awal", "Sangat tua"], jawaban: 2, pembahasan: "Prematur = lahir/tumbuh sebelum waktunya." },
    { soal: "Sinonim dari 'Filantropis' adalah...", opsi: ["Pecinta uang", "Pecinta manusia", "Pecinta alam", "Pecinta diri"], jawaban: 1, pembahasan: "Filantropis = orang yang suka berbuat baik/dermawan." },
    { soal: "Antonim dari 'Defisit' adalah...", opsi: ["Rugi", "Surplus", "Merugikan", "Bangkrut"], jawaban: 1, pembahasan: "Defisit = kekurangan. Lawannya surplus/kelebihan." },
    { soal: "Antonim dari 'Esensial' adalah...", opsi: ["Pokok", "Penting", "Sekunder", "Utama"], jawaban: 2, pembahasan: "Esensial = sangat penting. Lawannya sekunder/tidak penting." },
    { soal: "Antonim dari 'Implisit' adalah...", opsi: ["Tersurat", "Tersirat", "Samara", "Tersembunyi"], jawaban: 0, pembahasan: "Implisit = tersirat. Lawannya eksplisit = tersurat." },
    { soal: "Antonim dari 'Apatis' adalah...", opsi: ["Peduli", "Malas", "Acuh", "Dingin"], jawaban: 0, pembahasan: "Apati = tidak peduli. Lawannya peduli." },
    { soal: "Antonim dari 'Relevan' adalah...", opsi: ["Cocok", "Berkaitan", "Tak nyambung", "Sama"], jawaban: 2, pembahasan: "Konteks: Relevan = berhubungan. Lawannya tak nyambung." },
    { soal: "Penulisan ejaan yang benar: 'Kedua orang tuanya pergi ke Jakarta'. Penulisan 'tuanya' seharusnya...", opsi: ["tuanya (benar)", "tua-nya", "tua nya", "tuanya (salah total)"], jawaban: 2, pembahasan: "Kata 'tua' dan 'nya' dipisah karena 'nya' sebagai penegas." },
    { soal: "Pemakaian huruf kapital yang benar...", opsi: ["Presiden Joko Widodo", "presiden Joko widodo", "Presiden joko Widodo", "Presiden Joko widodo"], jawaban: 0, pembahasan: "Gelar jabatan di awal kalimat dikapital, nama orang dikapital." },
    { soal: "Penulisan imbuhan asing yang benar...", opsi: ["Di cooperasi", "Dikooperasi", "Di-kooperasi", "Dikooperasikan"], jawaban: 1, pembahasan: "Awalan 'di' pada kata asing digabung tanpa tanda hubung." },
    { soal: "Penggunaan tanda baca yang tepat: 'Bawa buku pensil dan penghapus'", opsi: ["Bawa buku, pensil, dan penghapus", "Bawa buku pensil, dan penghapus", "Bawa buku pensil dan penghapus.", "Bawa buku; pensil; dan penghapus"], jawaban: 0, pembahasan: "Sistem konjungsi antara objek terakhir menggunakan koma." },
    { soal: "Arti dari peribahasa 'Sambil menyelam minum air' adalah...", opsi: ["Iring-iringan", "Bekerja sambil mengambil kesempatan", "Bekerja keras", "Bermalas-malasan"], jawaban: 1, pembahasan: "Mengerjakan sesuatu sambil mengambil keuntungan pribadi." },
    { soal: "Arti dari 'Bunga bank' dalam kalimat 'Bunga bank bulan ini naik' adalah...", opsi: ["Bunga melati", "Keuntungan tambahan", "Bunga simpanan/pinjaman", "Kembang indah"], jawaban: 2, pembahasan: "Sinonim kontekstual: bunga = jasa uang." },
    { soal: "Arti kata 'Kausa' dalam teks hukum adalah...", opsi: ["Kaos baju", "Penyebab", "Akibat", "Tuntutan"], jawaban: 1, pembahasan: "Kausa = sebab (kausalitas)." },
    { soal: "Padanan kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Padanan kata 'Resiprokitas' adalah...", opsi: ["Saling menguntungkan", "Saling menukar", "Saling merugikan", "Hubungan timbal balik"], jawaban: 3, pembahasan: "Resiprokal = timbal balik." },
    { soal: "Kata 'Mitra' dalam konteks bisnis berarti...", opsi: ["Lawan", "Rekan kerja", "Pesaing", "Pembeli"], jawaban: 1, pembahasan: "Mitra = partner/rekan." },
    { soal: "Penulisan kata baku yang benar...", opsi: ["Aktifitas", "Aktivitas", "Activity", "Aktipitas"], jawaban: 1, pembahasan: "Kata baku dari aktivitas." },
    { soal: "Penulisan kata baku yang benar...", opsi: ["Fundamental", "Pondamental", "Pondasi", "Fundamen"], jawaban: 3, pembahasan: "Kata baku serapan: fundamen." },
    { soal: "Penulisan kata baku yang benar...", opsi: ["Kwalitas", "Kualitas", "Quality", "Kualiti"], jawaban: 1, pembahasan: "Penulisan baku: kualitas." },
    { soal: "Penggunaan kata 'yang' berlebihan (pleonasme) terdapat pada...", opsi: ["Buku yang merah", "Anak yang baik", "Sedangkan yang lain", "Agar supaya"], jawaban: 3, pembahasan: "Agar dan supaya maknanya sama, jangan dipakai bersamaan." },
    { soal: "Bentuk tidak baku dari 'Khusus' adalah...", opsi: ["Kusus", "Khusu", "Istikhusus", "Khususnya"], jawaban: 0, pembahasan: "Bentuk salah yang sering ditulis: kusus." },
    { soal: "Sinonim dari 'Interaksi' adalah...", opsi: ["Hubungan", "Pertemuan", "Perubahan", "Jaringan"], jawaban: 0, pembahasan: "Interaksi = hubungan timbal balik." },
    { soal: "Sinonim dari 'Estetika' adalah...", opsi: ["Etika", "Keindahan", "Logika", "Estafet"], jawaban: 1, pembahasan: "Estetika = ilmu keindahan." },
    { soal: "Sinonim dari 'Kulminasi' adalah...", opsi: ["Awal", "Puncak", "Dasar", "Proses"], jawaban: 1, pembahasan: "Kulminasi = puncak." },
    { soal: "Sinonim dari 'Esensi' adalah...", opsi: ["Wujud", "Inti", "Bentuk", "Kulit"], jawaban: 1, pembahasan: "Esensi = inti sari." },
    { soal: "Antonim dari 'Optimis' adalah...", opsi: ["Positif", "Pantang menyerah", "Pesimis", "Realistis"], jawaban: 2, pembahasan: "Optimis lawan pesimis." },
    { soal: "Antonim dari 'Fatal' adalah...", opsi: ["Mematikan", "Ringan", "Bahaya", "Biasa"], jawaban: 1, pembahasan: "Fatal = berakibat mati/sangat buruk. Lawan: ringan." },
    { soal: "Antonim dari 'Generik' adalah...", opsi: ["Umum", "Spesifik", "Bersama", "Khas"], jawaban: 1, pembahasan: "Generik = umum. Lawan spesifik = khusus." },
    { soal: "Antonim dari 'Otonom' adalah...", opsi: ["Mandiri", "Bebas", "Bawahan/Terikat", "Kuat"], jawaban: 2, pembahasan: "Otonom = mandiri. Lawannya terikat." },
    { soal: "Penulisan kata depan 'ke' yang benar...", opsi: ["Kesekolah", "Ke sekolah", "Ke-sekolah", "Kesekolahnya"], jawaban: 1, pembahasan: "Preposisi 'ke' dipisah." },
    { soal: "Penulisan kata depan 'dari' yang benar...", opsi: ["Darimana", "Dari mana", "Dari-mana", "Darimana saja"], jawaban: 1, pembahasan: "Dua kata yang mengikuti 'dari' (mana, pada, dll) ditulis terpisah." },
    { soal: "Makna 'Bumi persada' dalam puisi lama biasanya merujuk pada...", opsi: ["Negara", "Lahan pertanian", "Hutan", "Gunung"], jawaban: 0, pembahasan: "Majas/metafora dalam konteks puitis." },
    { soal: "Frasa 'Kepala batu' bermakna...", opsi: ["Pandai", "Bodoh", "Keras kepala", "Pemberani"], jawaban: 2, pembahasan: "Idiom: keras kepala." },
    { soal: "Penggunaan partikel 'pun' yang benar...", opsi: ["Aku pun pergi", "Akupun pergi", "Aku-pun pergi", "Akupergi"], jawaban: 0, pembahasan: "Partikel 'pun' dipisah kecuali pada kata tertentu (meskipun, walaupun)." },
    { soal: "Penggunaan partikel 'lah' yang benar...", opsi: ["Akulah pelakunya", "Aku lah pelakunya", "Aku-lah pelakunya", "Akulahpelakunya"], jawaban: 0, pembahasan: "Partikel 'lah' pada kata ganti orang pertama digabung." },
    { soal: "Kata 'Foto' diserap dari bahasa...", opsi: ["Inggris", "Belanda", "Yunani", "Sanskerta"], jawaban: 1, pembahasan: "Foto diserap dari Belanda 'foto'." }
  ],
  'subtest-pk': [
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x² - 1, maka nilai (g o f)(2) adalah...", opsi: ["47", "48", "49", "50"], jawaban: 1, pembahasan: "f(2) = 2(2)+3 = 7. Lalu g(7) = 7² - 1 = 49 - 1 = 48." },
    { soal: "Sebuah barang dibeli dengan harga Rp200.000. Jika dijual dengan untung 15%, maka harga jualnya adalah...", opsi: ["Rp 215.000", "Rp 220.000", "Rp 225.000", "Rp 230.000"], jawaban: 3, pembahasan: "Untung = 15% x 200.000 = 30.000. Harga jual = 200.000 + 30.000 = 230.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang dalam 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = Orang x Hari = 8 x 12 = 96. Hari = 96 / 6 = 16 hari." },
    { soal: "Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Bomber berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Bomber akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko didepan saat 07.00 adalah 60 km. Selisih kecepatan = 20 km/jam. Waktu susul = 60/20 = 3 jam. 07.00 + 3 jam = 10.00." },
    { soal: "Jika log 2 = 0.301 dan log 3 = 0.477, maka nilai log 6 adalah...", opsi: ["0.778", "0.176", "0.474", "1.230"], jawaban: 0, pembahasan: "log 6 = log (2 x 3) = log 2 + log 3 = 0.301 + 0.477 = 0.778." },
    { soal: "Rata-rata nilai ujian 5 siswa adalah 80. Jika ditambah nilai seorang siswa baru menjadi 78, berapa nilai siswa baru tersebut?", opsi: ["68", "70", "72", "75"], jawaban: 0, pembahasan: "Total awal = 5 x 80 = 400. Total baru = 6 x 78 = 468. Nilai siswa baru = 468 - 400 = 68." },
    { soal: "Suatu deret aritmatika memiliki suku pertama 5 dan beda 3. Jumlah 10 suku pertama deret tersebut adalah...", opsi: ["180", "185", "190", "195"], jawaban: 1, pembahasan: "Sn = n/2 (2a + (n-1)b) = 10/2 (2(5) + 9(3)) = 5 (10 + 27) = 5 x 37 = 185." },
    { soal: "Akar-akar persamaan kuadrat x² - 5x + 6 = 0 adalah...", opsi: ["1 dan 6", "2 dan 3", "-2 dan -3", "2 dan -3"], jawaban: 1, pembahasan: "(x-2)(x-3)=0. Maka x=2 atau x=3." },
    { soal: "Jika sin x = 3/5 dan x sudut lancip, maka nilai cos x adalah...", opsi: ["3/4", "4/5", "5/4", "4/3"], jawaban: 1, pembahasan: "Cos x = √(1 - sin²x) = √(1 - 9/25) = √(16/25) = 4/5." },
    { soal: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah... (π = 22/7)", opsi: ["1540 cm³", "1440 cm³", "1340 cm³", "1240 cm³"], jawaban: 0, pembahasan: "V = π r² t = 22/7 x 7 x 7 x 10 = 22 x 70 = 1540." },
    { soal: "Bentuk sederhana dari (2³ x 2⁻¹) / 2² adalah...", opsi: ["2⁰", "2¹", "2²", "2⁻¹"], jawaban: 0, pembahasan: "Pembilang: 2^(3-1) = 2². Dibagi 2² = 2^(2-2) = 2⁰ = 1." },
    { soal: "Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 adalah...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "Modus adalah data yang paling sering muncul (6 muncul 3 kali)." },
    { soal: "Median dari data: 3, 5, 7, 8, 10, 12, 15 adalah...", opsi: ["7", "8", "10", "12"], jawaban: 1, pembahasan: "Median adalah nilai tengah. Dari 7 data, urutan ke-4 adalah 8." },
    { soal: "Jika 3x - 5 = 10, maka nilai x adalah...", opsi: ["3", "4", "5", "6"], jawaban: 2, pembahasan: "3x = 15, x = 5." },
    { soal: "Hasil dari 15% dari 300 adalah...", opsi: ["35", "40", "45", "50"], jawaban: 2, pembahasan: "15/100 x 300 = 45." },
    { soal: "Sebuah kubus memiliki panjang rusuk 6 cm. Luas permukaan kubus tersebut adalah...", opsi: ["216 cm²", "196 cm²", "176 cm²", "156 cm²"], jawaban: 0, pembahasan: "Luas = 6 x s² = 6 x 36 = 216." },
    { soal: "Nilai dari 4! (4 faktorial) adalah...", opsi: ["12", "16", "24", "32"], jawaban: 2, pembahasan: "4 x 3 x 2 x 1 = 24." },
    { soal: "Dari 5 buku matematika dan 4 buku fisika, akan dipilih 2 buku masing-masing satu. Berapa banyak cara memilih?", opsi: ["9", "16", "20", "24"], jawaban: 2, pembahasan: "C(5,1) x C(4,1) = 5 x 4 = 20." },
    { soal: "Jarak kota A dan B pada peta dengan skala 1:1.000.000 adalah 5 cm. Jarak sebenarnya adalah...", opsi: ["50 km", "500 km", "50 m", "5 km"], jawaban: 0, pembahasan: "Jarak = 5 cm x 1.000.000 = 5.000.000 cm = 50 km." },
    { soal: "Umur ayah 4 kali umur anak. Total umur mereka 50 tahun. Umur anak adalah...", opsi: ["8 tahun", "10 tahun", "12 tahun", "14 tahun"], jawaban: 1, pembahasan: "Misal anak = x, ayah = 4x. x + 4x = 50. 5x = 50, x = 10." },
    { soal: "Hasil dari (-3) x 4 + 10 / 2 adalah...", opsi: ["-7", "-5", "-12", "5"], jawaban: 0, pembahasan: "Kali bagi didahulukan: -12 + 5 = -7." },
    { soal: "Sudut komplementer dari 35° adalah...", opsi: ["45°", "55°", "65°", "75°"], jawaban: 1, pembahasan: "Komplementer = 90° - 35° = 55°." },
    { soal: "Sudut suplementer dari 110° adalah...", opsi: ["60°", "70°", "80°", "90°"], jawaban: 1, pembahasan: "Suplementer = 180° - 110° = 70°." },
    { soal: "Faktorisasi dari x² - 9 adalah...", opsi: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "(x-9)(x+1)"], jawaban: 2, pembahasan: "Selisih kuadrat: (x-a)(x+a) = x² - a²." },
    { soal: "Sebuah segitiga memiliki sudut 40° dan 60°. Sudut ketiganya adalah...", opsi: ["70°", "80°", "90°", "100°"], jawaban: 1, pembahasan: "Jumlah sudut segitiga 180°. 180 - 100 = 80°." },
    { soal: "Keliling lingkaran dengan jari-jari 14 cm adalah... (π=22/7)", opsi: ["66 cm", "77 cm", "88 cm", "99 cm"], jawaban: 2, pembahasan: "K = 2πr = 2 x 22/7 x 14 = 88 cm." },
    { soal: "Jika 2x + y = 5 dan x - y = 1, maka nilai x adalah...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "Eliminasi: 3x = 6, x = 2." },
    { soal: "Hasil dari √144 + √81 adalah...", opsi: ["19", "20", "21", "22"], jawaban: 2, pembahasan: "12 + 9 = 21." },
    { soal: "Sebuah kerucut memiliki jari-jari 6 cm dan tinggi 8 cm. Berapakah garis pelukisnya (s)?", opsi: ["10 cm", "12 cm", "14 cm", "16 cm"], jawaban: 0, pembahasan: "s = √(r² + t²) = √(36 + 64) = √100 = 10." },
    { soal: "Nilai dari 0.25 dalam bentuk pecahan paling sederhana adalah...", opsi: ["1/3", "1/4", "1/5", "2/5"], jawaban: 1, pembahasan: "0.25 = 25/100 = 1/4." },
    { soal: "Jika sebuah dadu dilempar sekali, peluang muncul mata dadu genap adalah...", opsi: ["1/3", "1/2", "2/3", "1/6"], jawaban: 1, pembahasan: "Genap: 2,4,6 (3 angka). Peluang = 3/6 = 1/2." },
    { soal: "Harga 3 apel dan 2 jeruk adalah Rp10.000. Jika harga 1 apel Rp2.000, berapa harga 1 jeruk?", opsi: ["Rp 1.000", "Rp 1.500", "Rp 2.000", "Rp 2.500"], jawaban: 2, pembahasan: "3(2000) + 2J = 10000. 6000 + 2J = 10000. 2J = 4000. J = 2000." },
    { soal: "Deret geometri: 3, 6, 12, 24, ... Suku ke-6 adalah...", opsi: ["48", "96", "192", "384"], jawaban: 1, pembahasan: "Rasio = 2. Suku ke-6 = 3 x 2^(6-1) = 3 x 32 = 96." },
    { soal: "Konversi 72 km/jam ke meter/detik adalah...", opsi: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"], jawaban: 1, pembahasan: "72.000 m / 3600 s = 20 m/s." },
    { soal: "Sebuah persegi panjang memiliki luas 48 cm² dan lebar 6 cm. Kelilingnya adalah...", opsi: ["24 cm", "28 cm", "32 cm", "36 cm"], jawaban: 1, pembahasan: "Panjang = 48/6 = 8 cm. Keliling = 2(8+6) = 28 cm." },
    { soal: "Hasil dari (x³)² adalah...", opsi: ["x⁵", "x⁶", "x⁸", "x⁹"], jawaban: 1, pembahasan: "Sifat pangkat: (a^m)^n = a^(m x n) = 6." },
    { soal: "Jumlah deret tak hingga 8 + 4 + 2 + 1 + ... adalah...", opsi: ["12", "14", "16", "18"], jawaban: 2, pembahasan: "S∞ = a / (1 - r) = 8 / (1 - 1/2) = 8 / 0.5 = 16." },
    { soal: "Sebuah baju di.diskon 20% menjadi Rp160.000. Harga awal baju tersebut adalah...", opsi: ["Rp 180.000", "Rp 200.000", "Rp 220.000", "Rp 240.000"], jawaban: 1, pembahasan: "Harga akhir = 80% x Awal. 160.000 = 0.8 x Awal. Awal = 200.000." },
    { soal: "Nilai rata-rata dari 2, 4, 6, 8, 10 adalah...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "Jumlah = 30. Rata-rata = 30/5 = 6." },
    { soal: "Jika x = -2, maka nilai dari x² - 3x + 2 adalah...", opsi: ["4", "12", "-4", "0"], jawaban: 1, pembahasan: "(-2)² - 3(-2) + 2 = 4 + 6 + 2 = 12." }
  ],
 'subtest-pbm': [
    { soal: "Perbaiki kalimat: 'Bagi siswa yang rajin belajar akan lulus ujian.'", opsi: ["Bagi siswa rajin belajar, akan lulus ujian.", "Siswa yang rajin belajar akan lulus ujian.", "Bagi siswa yang rajin belajar lulus ujian.", "Siswa yang rajin belajar, akan lulus ujian."], jawaban: 1, pembahasan: "Kata depan 'bagi' membuat subjek tidak jelas. Hilangkan 'bagi' agar subjek 'siswa' jelas." },
    { soal: "Perbaiki kalimat: 'Sejak dari pagi dia sudah belajar.'", opsi: ["Sejak pagi dia sudah belajar.", "Sejak dari pagi, dia sudah belajar.", "Dari pagi dia sudah belajar.", "Sejak pagi, dia sudah belajar."], jawaban: 0, pembahasan: "Pleonasme (pemborosan kata). 'Sejak' dan 'dari' maknanya sama." },
    { soal: "Penulisan kata depan 'di' yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Kata depan (preposisi) yang menunjukkan tempat ditulis terpisah." },
    { soal: "Penulisan kata kerja pasif 'di' yang benar...", opsi: ["Di makan", "Dimakan", "Di-makan", "Dimakan oleh"], jawaban: 1, pembahasan: "Awalan 'di' pada kata kerja pasif digabung." },
    { soal: "Kalimat efektif harus memiliki struktur inti yang jelas, yaitu...", opsi: ["Subjek dan Obyek", "Subjek dan Predikat", "Predikat dan Obyek", "Keterangan"], jawaban: 1, pembahasan: "Struktur minimal kalimat efektif adalah Subjek dan Predikat." },
    { soal: "Paragraf yang gagasan utamanya terletak di awal paragraf disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Deduktif: umum ke khusus (gagasan di awal)." },
    { soal: "Paragraf yang gagasan utamanya terletak di akhir paragraf disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Naratif"], jawaban: 1, pembahasan: "Induktif: khusus ke umum (gagasan di akhir)." },
    { soal: "Teks: 'Pohon-pohon di hutan ditebang liar. Akibatnya, tanah longsor sering terjadi.' Kata hubung yang tepat untuk menggabungkan adalah...", opsi: ["sehingga", "karena", "walaupun", "meskipun"], jawaban: 0, pembahasan: "Hubungan sebab-akibat menggunakan 'sehingga'." },
    { soal: "Sinonim dari kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi artinya pelaksanaan." },
    { soal: "Antonim dari kata 'Implisit' adalah...", opsi: ["Tersirat", "Tersurat", "Samara", "Tersembunyi"], jawaban: 1, pembahasan: "Implisit (tersirat), lawannya eksplisit (tersurat)." },
    { soal: "Penulisan huruf kapital yang benar terdapat pada kalimat...", opsi: ["saya belajar di jakarta.", "Saya belajar di Jakarta.", "Saya belajar Di jakarta.", "saya Belajar di jakarta."], jawaban: 1, pembahasan: "Awal kalimat dan nama diri tempat dikapitalkan." },
    { soal: "Penggunaan tanda baca yang tepat untuk kalimat langsung adalah...", opsi: ["Ia berkata saya lapar", "Ia berkata: 'Saya lapar.'", "Ia berkata saya lapar.", "Ia berkata; saya lapar."], jawaban: 1, pembahasan: "Kalimat langsung menggunakan tanda titik dua (:) dan kutip." },
    { soal: "Perbaiki kalimat: 'Harga beras naik dan juga turun.'", opsi: ["Harga beras naik dan turun.", "Harga beras naik serta turun.", "Harga beras naik tetapi turun.", "Harga beras naik atau turun."], jawaban: 0, pembahasan: "Kata 'juga' tidak diperlukan setelah konjungsi 'dan'." },
    { soal: "Gagasan utama dalam sebuah paragraf disebut juga...", opsi: ["Kalimat penjelas", "Ide pokok", "Kesimpulan", "Opini"], jawaban: 1, pembahasan: "Gagasan utama = ide pokok." },
    { soal: "Teks yang bertujuan menjelaskan langkah-langkah membuat sesuatu disebut teks...", opsi: ["Eksposisi", "Deskripsi", "Prosedur", "Argumentasi"], jawaban: 2, pembahasan: "Teks prosedur memuat langkah-langkah." },
    { soal: "Perbaikan kalimat ambigu: 'Ibu membawa tas ke pasar berwarna merah.'", opsi: ["Ibu berwarna merah membawa tas ke pasar.", "Ibu membawa tas berwarna merah ke pasar.", "Ke pasar ibu membawa tas merah.", "Tas merah dibawa ibu ke pasar."], jawaban: 1, pembahasan: "Agar tidak rancu, penjelas (berwarna merah) harus berdekatan dengan yang dijelaskan (tas)." },
    { soal: "Majas yang membandingkan sesuatu dengan kata 'seperti' atau 'bagai' adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Personifikasi"], jawaban: 2, pembahasan: "Simile menggunakan kata pembanding eksplisit." },
    { soal: "Majas yang berarti melebih-lebihkan adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Litotes"], jawaban: 1, pembahasan: "Hiperbola adalah majas lebay." },
    { soal: "Perbaiki kalimat: 'Karena hujan deras, maka dia tidak datang.'", opsi: ["Karena hujan deras, dia tidak datang.", "Hujan deras, maka dia tidak datang.", "Karena hujan deras maka dia tidak datang.", "Karena hujan deras, oleh karena itu dia tidak datang."], jawaban: 0, pembahasan: "Jangan gunakan 'karena' dan 'maka' dalam satu kalimat penyebab-akibat. Hilangkan salah satu." },
    { soal: "Teks: 'Kemarau tahun ini cukup panjang. Banyak sumur kering. Warga kesulitan air bersih.' Gagasan utamanya adalah...", opsi: ["Kemarau panjang", "Sumur kering", "Kesulitan air bersih", "Warga panik"], jawaban: 2, pembahasan: "Kalimat pertama sebab, kedua sebab, ketiga (akibat inti) adalah gagasan utamanya." },
    { soal: "Penulisan kata baku yang benar adalah...", opsi: ["Aktifitas", "Aktivitas", "Activity", "Aktipitas"], jawaban: 1, pembahasan: "Kata baku serapan adalah aktivitas." },
    { soal: "Penulisan kata baku yang benar adalah...", opsi: ["Kwalitas", "Kualitas", "Quality", "Kualiti"], jawaban: 1, pembahasan: "Baku: kualitas." },
    { soal: "Penulisan kata baku yang benar adalah...", opsi: ["Ijazah", "Ijasah", "Ijazah", "Ijazah"], jawaban: 0, pembahasan: "Baku: Ijazah." },
    { soal: "Kalimat pasif yang benar adalah...", opsi: ["Buku itu saya baca", "Buku itu dibaca saya", "Buku itu dibaca oleh saya", "Saya dibaca buku itu"], jawaban: 2, pembahasan: "Kalimat pasif ideal menggunakan 'oleh'." },
    { soal: "Konjungsi antarklausa yang menunjukkan pertentangan adalah...", opsi: ["walaupun", "karena", "sehingga", "dan"], jawaban: 0, pembahasan: "Walaupun/meskipun menunjukkan pertentangan (konsesif)." },
    { soal: "Teks argumentasi terdiri atas tiga bagian, yaitu...", opsi: ["Pendahuluan, Isi, Penutup", "Tesis, Argumentasi, Penegasan ulang", "Orientasi, Komplikasi, Resolusi", "Tesis, Orientasi, Argumen"], jawaban: 1, pembahasan: "Struktur teks argumentasi: Tesis, Argumentasi, Penegasan ulang." },
    { soal: "Perbaiki kalimat: 'Pada hari Mingus, saya pergi ke mall.'", opsi: ["Pada hari Minggu, saya pergi ke mall.", "Pada hari Minggu saya pergi ke mall.", "Pada hari Minggu, saya pergi ke Mall.", "Pada hari minggu, saya pergi ke mall."], jawaban: 0, pembahasan: "Minggu dikapital. 'Mall' umum bukan nama diri, tidak dikapital." },
    { soal: "Membaca cepat untuk mengetahui inti cerita disebut...", opsi: ["Skimming", "Scanning", "Intensive reading", "Extensive reading"], jawaban: 0, pembahasan: "Skimming untuk ide pokok/gagasan utama." },
    { soal: "Membaca cepat untuk mencari informasi spesifik (seperti angka/nama) disebut...", opsi: ["Skimming", "Scanning", "Intensive reading", "Extensive reading"], jawaban: 1, pembahasan: "Scanning untuk detail tertentu." },
    { soal: "Peribahasa 'Sambil menyelam minum air' memiliki makna...", opsi: ["Iring-iringan", "Bekerja sambil berbuat kebaikan/keuntungan", "Pura-pura baik", "Bekerja keras"], jawaban: 1, pembahasan: "Mengerjakan sesuatu sambil mengambil keuntungan." },
    { soal: "Peribahasa 'Bagai air dengan minyak' bermakna...", opsi: ["Sangat lekat", "Tidak dapat disatukan", "Bersih murni", "Saling melengkapi"], jawaban: 1, pembahasan: "Dua hal yang tidak bisa menyatu." },
    { soal: "Peribahasa 'Di mana bumi dipijak, di sana langit dijunjung' artinya...", opsi: ["Harus berhati-hati", "Menyesuaikan diri dengan adat tempat kita tinggal", "Berjalan pelan-pelan", "Menjunjung tinggi hukum"], jawaban: 1, pembahasan: "Menghormati norma tempat tinggal." },
    { soal: "Teks yang berisi pendapat penulis dengan disertai alasan yang logis adalah teks...", opsi: ["Narasi", "Deskripsi", "Argumentasi", "Eksposisi"], jawaban: 2, pembahasan: "Teks argumentasi membuktikan pendapat." },
    { soal: "Teks yang bertujuan memaparkan data/fakta tanpa opini penulis adalah teks...", opsi: ["Narasi", "Deskripsi", "Argumentasi", "Eksposisi"], jawaban: 3, pembahasan: "Teks eksposisi memaparkan fakta secara informatif." },
    { soal: "Jenis karangan yang menceritakan pengalaman penulis disebut...", opsi: ["Otografi", "Autobiografi", "Biografi", "Narasi"], jawaban: 1, pembahasan: "Otografi: tulisan sendiri. Biografi: tulisan orang lain. Autobiografi: kisah hidup sendiri." },
    { soal: "Bagian surat resmi yang berisi salam pembuka adalah...", opsi: ["Kop surat", "Nomor surat", "Salam pembuka", "Isi surat"], jawaban: 2, pembahasan: "Dengan hormat, dll." },
    { soal: "Kata 'prakata' memiliki arti yang sama dengan...", opsi: ["Penutup", "Kata pengantar", "Daftar isi", "Prolog"], jawaban: 1, pembahasan: "Prakata = kata pengantar." },
    { soal: "Perbaikan kalimat: 'Meskipun sakit, tetapi dia datang.'", opsi: ["Meskipun sakit, dia datang.", "Sakit, tetapi dia datang.", "Meskipun sakit, dan dia datang.", "Walaupun sakit, maka dia datang."], jawaban: 0, pembahasan: "Pleonasme konjungsi. Tidak perlu 'meskipun' dan 'tetapi' bersamaan." },
    { soal: "Kata yang tepat untuk melengkapi kalimat: 'Budi ... menerima hadiah karena menang lomba.'", opsi: ["adalah", "ialah", "berhak", "merupakan"], jawaban: 2, pembahasan: "Kata kerja predikat yang tepat adalah 'berhak'." },
    { soal: "Iklan yang bertujuan menarik simpati agar orang membeli disebut iklan...", opsi: ["Komersial", "Penawaran", "Layanan masyarakat", "Pengumuman"], jawaban: 0, pembahasan: "Iklan komersial (niaga)." },
    { soal: "Penulisan alamat surat yang benar adalah...", opsi: ["Kepada Yth. Bapak Kepala Sekolah", "Kepada Yth Bapak Kepala Sekolah", "Kepada Yth. Bapak Kepala sekolah", "Kepada Yth. Bapak KEPALA SEKOLAH"], jawaban: 0, pembahasan: "Yth singkatan titiknya dipakai. Jabatan tanpa nama orang dikapital hanya huruf awal." }
  ],
  'subtest-indo': [
    { soal: "Teks: 'Edukasi karakter sangat penting untuk membentuk generasi yang tangguh dan berintegritas. Tanpa karakter kuat, ilmu yang didapatkan justru bisa merugikan.' Gagasan utama teks tersebut adalah...", opsi: ["Generasi tangguh butuh ilmu", "Pentingnya edukasi karakter", "Ilmu tanpa karakter merugikan", "Integritas bagian dari pendidikan"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) berada di awal paragraf." },
    { soal: "Teks: 'Polusi udara di Jakarta meningkat. Hal ini ditandai dengan menipisnya lapisan ozon. Dampaknya, penyakit pernapasan meningkat.' Simpulan yang tepat dari teks adalah...", opsi: ["Lapisan ozon menipis karena polusi", "Polusi udara berdampak pada kesehatan pernapasan", "Jakarta kota terpolusi", "Penyakit pernapasan memicu polusi"], jawaban: 1, pembahasan: "Simpulan harus mencakup sebab dan akibat." },
    { soal: "Sinonim dari kata 'Zakat' secara kontekstual adalah...", opsi: ["Pajak", "Sumbangan wajib muslim", "Bantuan sosial", "Hutang"], jawaban: 1, pembahasan: "Zakat = kepentingan wajib muslim." },
    { soal: "Antonim dari 'Etalase' adalah...", opsi: ["Tempat barang", "Penyimpanan tersembunyi", "Rak", "Pameran"], jawaban: 1, pembahasan: "Etalase = pameran. Lawannya penyimpanan tersembunyi." },
    { soal: "Kalimat efektif harus memiliki...", opsi: ["Banyak kata", "Struktur inti jelas", "Pernyataan berulang", "Tata bahasa kaku"], jawaban: 1, pembahasan: "Struktur inti (S+P) harus jelas." },
    { soal: "Teks eksposisi berfungsi untuk...", opsi: ["Menghibur", "Meyakinkan", "Memaparkan fakta", "Menceritakan"], jawaban: 2, pembahasan: "Eksposisi = memaparkan informasi secara informatif." },
    { soal: "Ciri teks argumentasi adalah...", opsi: ["Tidak ada opini", "Ada tesis dan argumen", "Hanya cerita", "Hanya data"], jawaban: 1, pembahasan: "Argumentasi = tesis + argumen." },
    { soal: "Kalimat: 'Dia datang ke sekolah. Dia belajar dengan baik.' Hubungkan dengan kata hubung yang tepat...", opsi: ["kemudian", "karena", "sehingga", "walaupun"], jawaban: 0, pembahasan: "Urutan kejadian: kemudian/selanjutnya." },
    { soal: "Bentuk pasif dari 'Melihat bulan' adalah...", opsi: ["Bulan dilihat", "Bulan sedang dilihat", "Bulan telah dilihat", "Bulan akan dilihat"], jawaban: 0, pembahasan: "Pasif sederhana: di + V3." },
    { soal: "Teks: 'Kebakaran hutan disebabkan oleh pembakaran liar.' Kata hubung yang tepat...", opsi: ["sebab", "akibat", "penyebab", "sebab karena"], jawaban: 0, pembahasan: "Hubungan sebab-akibat." },
    { soal: "Majalah-------------", opsi: ["Buku", "Penerbit", "Penulis", "Tema"], jawaban: 1, pembahasan: "Majalah = penerbit berkala." },
    { soal: "Sinonim dari 'Berkala' adalah...", opsi: ["Terkadang", "Beraturan", "Sering", "Jarang"], jawaban: 1, pembahasan: "Berkala = teratur/berkala." },
    { soal: "Antonim dari 'Publik' adalah...", opsi: ["Umum", "Pribadi", "Terbuka", "Semua orang"], jawaban: 1, pembahasan: "Publik (umum) lawannya pribadi." },
    { soal: "Kalimat: 'Wajahnya seperti bulan.' Termasuk majas...", opsi: ["Metafora", "Simile", "Hiperbola", "Personifikasi"], jawaban: 1, pembahasan: "Simile: memakai kata 'seperti'." },
    { soal: "Kalimat: 'Hati-hati, jangan tersandung.' Jenis kalimat...", opsi: ["Imperatif", "Interrogatif", "Exclamative", "Declarative"], jawaban: 0, pembahasan: "Imperatif = perintah." },
    { soal: "Kata yang tepat: 'Pernyataan tersebut tidak sesuai dengan ... fakta.'", opsi: ["data", "data-data", "datanya", "data-datanya"], jawaban: 1, pembahasan: "Penulisan jamak: data-data." },
    { soal: "Kalimat tanya yang benar...", opsi: ["Siapakah yang datang?", "Siapa yang datang?", "Siapa yang datang?", "Siapakah datangnya?"], jawaban: 1, pembahasan: "Siapa + yang + V." },
    { soal: "Teks editorial termasuk teks...", opsi: ["Narasi", "Eksposisi", "Argumentasi", "Deskripsi"], jawaban: 2, pembahasan: "Editorial = teks argumentasi." },
    { soal: "Teks: 'Berdasarkan data WHO, 60% penduduk dunia mengalami stres.' Ini kalimat...", opsi: ["Opini", "Fakta", "Deskripsi", "Narasi"], jawaban: 1, pembahasan: "Data WHO = fakta." },
    { soal: "Tujuan teks prosedur adalah...", opsi: ["Menghibur", "Meyakinkan", "Memberi instruksi", "Menceritakan"], jawaban: 2, pembahasan: "Prosedur = langkah-langkah." },
    { soal: "Sinonim dari 'Kritis' dalam konteks belajar adalah...", opsi: ["Kritik", "Analitis", "Pendapat", "Sarkas"], jawaban: 1, pembahasan: "Berpikir kritis = analitis." },
    { soal: "Kalimat: 'Meskipun hujan, mbak warsi tetap jualan.' Katahubung yang tepat...", opsi: ["namun", "tetapi", "meskipun", "karena"], jawaban: 2, pembahasan: "Meskipun untuk konsesif." },
    { soal: "Penulisan baku: 'Pemerintah ----------- program bansos.'", opsi: ["meleluncurkan", "meluncurkan", "meluncur", "melemparkan"], jawaban: 1, pembahasan: "Baku: meluncurkan." },
    { soal: "Antonim dari 'Membengkak' adalah...", opsi: ["Kecil", "Kempes", "Mengecil", "Menggembung"], jawaban: 1, pembahasan: "Membengkak (besar) lawan kempes (kecil)." },
    { soal: "Teks: 'Olahraga teratur membuat badan sehat. Selain itu, olahraga juga melancarkan peredaran darah.' Hubung...", opsi: ["sebab-akibat", "tambahan", "perbandingan", "kontras"], jawaban: 1, pembahasan: "Selain itu = tambahan." },
    { soal: "Kata 'KVET' dalam bahasa Latin artinya...", opsi: ["Bertanya", "Menjawab", "Bicara", "Diam"], jawaban: 0, pembahasan: "Kvet = tanya." },
    { soal: "Teks: 'Setiap mahasiswa wajib menulis skripsi.' Kalimat ini termasuk...", opsi: ["Opini", "Fakta", "Peraturan", "Semua benar"], jawaban: 3, pembahasan: "Ini fakta + peraturan kampus." },
    { soal: "Majalah -------------", opsi: ["Jurnal", "Buku", "Surat kabar", "Pamflet"], jawaban: 0, pembahasan: "Majalah = jurnal berkala." },
    { soal: "Teks: 'Kamu harus belajar keras, atau kamu akan gagal.' Kata hubung...", opsi: ["atau", "tetapi", "karena", "sehingga"], jawaban: 0, pembahasan: "Atau untuk alternatif/pilihan." },
    { soal: "Kalimat imperatif biasanya diawali dengan...", opsi: ["Kata kerja", "Kata benda", "Kata sifat", "Kata depan"], jawaban: 0, pembahasan: "Imperatif = kata kerja imperatif." },
    { soal: "Bentuk tidak baku dari 'Mencintai' adalah...", opsi: ["Mencintai", "Nyantai", "Cinta", "Mencintai"], jawaban: 1, pembahasan: "Bentuk tidak baku: nyantai (dari bahasa gaul)." },
    { soal: "Teks: 'Bapak Rektor menekan tombol alarm untuk mulai pelajaran.' Arti kata 'menekan' adalah...", opsi: ["Menekan", "Memenangkan", "Mengaktifkan", "Memicu"], jawaban: 3, pembahasan: "Menekan tombol = memicu alarm." },
    { soal: "Sinonim dari 'Kurated' adalah...", opsi: ["Dikurasi", "Dipelihara", "Dijaga", "Dipilih"], jawaban: 0, pembahasan: "Kurated = diseleksi/dikurasi." },
    { soal: "Kalimat: 'Dia pergi ke pasar. Dia membeli sayur.' Hubungkan dengan 'kemudian'...", opsi: ["Urutan", "Sebab", "Akibat", "Pilihan"], jawaban: 0, pembahasan: "Kemudian menunjukkan urutan." },
    { soal: "Antonim dari 'Membesar' adalah...", opsi: ["Kecil", "Besar", "Rata", "Tinggi"], jawaban: 0, pembahasan: "Membesar lawan kecil." },
    { soal: "Teks: 'Hari ini saya akan menulis cerita.' Kalimat ini termasuk...", opsi: ["Narasi", "Eksposisi", "Argumentasi", "Prosedur"], jawaban: 0, pembahasan: "Narasi = menceritakan pengalaman." },
    { soal: "Baku: 'Pendaftaran ----------- pada tanggal 1 Agustus.'", opsi: ["dilaksanakan", "dilaksanakan", "dilaksanakan", "dilaksanakan"], jawaban: 0, pembahasan: "Baku: dilaksanakan." },
    { soal: "Kalimat: 'Wajahnya cantik seperti bidadari.' Majas...", opsi: ["Metafora", "Simile", "Hiperbola", "Personifikasi"], jawaban: 1, pembahasan: "Simile: 'seperti'." },
    { soal: "Kalimat: 'Berbakti kepada orang tua adalah kewajiban.' Kalimat ini...", opsi: ["Opini", "Fakta", "Ajakan", "Perintah"], jawaban: 1, pembahasan: "Ini fakta (ajaran agama)." },
    { soal: "Teks: 'Saya setuju dengan kebijakan ini karena...' Kalimat ini bagian dari teks...", opsi: ["Eksposisi", "Argumentasi", "Narasi", "Deskripsi"], jawaban: 1, pembahasan: "Ada setuju + alasan = argumentasi." },
    { soal: "Antonim dari 'Menangis' adalah...", opsi: ["Ketawa", "Berdiri", "Duduk", "Teriak"], jawaban: 0, pembahasan: "Menangis lawan ketawa." },
    { soal: "Penulisan angka yang benar...", opsi: ["Satu buah", "1 buah", "Sebuah", "Satu"], jawaban: 1, pembahasan: "Angka dalam kalimat bisa ditulis angka." },
    { soal: "Kalimat: 'Meskipun ia lapar, tetapi dia tidak makan.' Kalimat ini...", opsi: ["Benar", "Salah", "Tidak jelas", "Berulang"], jawaban: 1, pembahasan: "Pleonasme: meskipun + tetapi." },
    { soal: "Teks: 'Quran adalah petunjuk bagi manusia.' Kalimat ini...", opsi: ["Opini", "Fakta", "Agama", "Semua benar"], jawaban: 3, pembahasan: "Ini fakta (ajaran agama)." }
  ],
  'subtest-inggris': [
    { soal: "I wish I ___ harder for the UTBK exam last year.", opsi: ["study", "studied", "had studied", "would study"], jawaban: 2, pembahasan: "Penyesalan masa lalu (wish + past perfect): S + wish + S + had V3." },
    { soal: "If she ___, she would come to the party.", opsi: ["knows", "knew", "had known", "known"], jawaban: 1, pembahasan: "Conditional type 2 (hypothetical), verb 2." },
    { soal: "The author's tone in a scientific fact report is usually...", opsi: ["Optimistic", "Subjective", "Objective", "Pessimistic"], jawaban: 2, pembahasan: "Laporan ilmiah bersifat objektif." },
    { soal: "Synonym of 'Abundant' is...", opsi: ["Scarce", "Plentiful", "Empty", "Small"], jawaban: 1, pembahasan: "Abundant = melimpah (plentiful)." },
    { soal: "Antonym of 'Artificial' is...", opsi: ["Fake", "Natural", "Synthetic", "Man-made"], jawaban: 1, pembahasan: "Artificial (buatan) lawan Natural." },
    { soal: "My brother, ___ lives in Jakarta, is a doctor.", opsi: ["who", "whom", "which", "whose"], jawaban: 0, pembahasan: "Relative pronoun untuk manusia." },
    { soal: "The book ___ by the teacher yesterday.", opsi: ["is bought", "was bought", "bought", "is buying"], jawaban: 1, pembahasan: "Passive voice past: was/were + V3." },
    { soal: "She has been studying ___ 3 hours.", opsi: ["for", "since", "from", "at"], jawaban: 0, pembahasan: "Durasi waktu pakai 'for'." },
    { soal: "The meeting will be held ___ Monday morning.", opsi: ["in", "on", "at", "for"], jawaban: 1, pembahasan: "Hari spesifik pakai 'on'." },
    { soal: "Text: 'The library is open from 8 AM to 4 PM.' When can you visit?", opsi: ["5 PM", "9 AM", "7 AM", "6 PM"], jawaban: 1, pembahasan: "9 AM ada di antara 8 AM dan 4 PM." },
    { soal: "What is the main idea of a paragraph called?", opsi: ["Topic sentence", "Supporting", "Concluding", "Title"], jawaban: 0, pembahasan: "Topic sentence = gagasan utama." },
    { soal: "Reading quickly for general idea is called...", opsi: ["Scanning", "Skimming", "Guessing", "Translating"], jawaban: 1, pembahasan: "Skimming = cepat, ambil inti." },
    { soal: "Reading for specific information is called...", opsi: ["Scanning", "Skimming", "Paraphrasing", "Summarizing"], jawaban: 0, pembahasan: "Scanning = cari detail spesifik." },
    { soal: "Synonym of 'Crucial' is...", opsi: ["Unimportant", "Essential", "Secondary", "Optional"], jawaban: 1, pembahasan: "Crucial = sangat penting." },
    { soal: "Antonym of 'Ancient' is...", opsi: ["Old", "Modern", "Historical", "Classic"], jawaban: 1, pembahasan: "Ancient (kuno) lawan Modern." },
    { soal: "Choose the correct sentence:", opsi: ["She don't like apples.", "She doesn't likes", "She doesn't like", "She not like"], jawaban: 2, pembahasan: "She + doesn't + V1." },
    { soal: "If I ___ a bird, I would fly to you.", opsi: ["am", "was", "were", "be"], jawaban: 2, pembahasan: "Type 2 selalu 'were' untuk semua subjek." },
    { soal: "'Smoking is prohibited' means...", opsi: ["You can smoke", "You must not smoke", "Smoking allowed", "Smoking recommended"], jawaban: 1, pembahasan: "Prohibited = dilarang." },
    { soal: "Text that tries to convince is called...", opsi: ["Narrative", "Recount", "Persuasive", "Descriptive"], jawaban: 2, pembahasan: "Persuasive text meyakinkan." },
    { soal: "Past tense of 'Write' is...", opsi: ["Wrote", "Written", "Writed", "Writing"], jawaban: 0, pembahasan: "V2 write = wrote." },
    { soal: "Past participle (V3) of 'Go' is...", opsi: ["Goed", "Went", "Gone", "Going"], jawaban: 2, pembahasan: "V3 go = gone." },
    { soal: "She said, 'I am tired.' Indirect speech...", opsi: ["She said she is", "She said she was", "She said I was", "She said she had been"], jawaban: 1, pembahasan: "Am berubah ke was." },
    { soal: "'Due to heavy rain, match canceled.' Why?", opsi: ["Players tired", "It rained heavily", "Stadium full", "No ball"], jawaban: 1, pembahasan: "Due to = karena." },
    { soal: "Synonym of 'Mitigate' is...", opsi: ["Worsen", "Reduce", "Increase", "Delay"], jawaban: 1, pembahasan: "Mitigate = mengurangi (reduce)." },
    { soal: "Antonym of 'Beneficial' is...", opsi: ["Useful", "Harmful", "Helpful", "Advantageous"], jawaban: 1, pembahasan: "Beneficial = bermanfaat, lawan harmful." },
    { soal: "He is ___ intelligent boy...", opsi: ["more", "the most", "most", "the more"], jawaban: 1, pembahasan: "Superlative: the most + adj." },
    { soal: "'Sustainable' in environmental context means...", opsi: ["Short-term", "Profitable", "Able to maintain", "Fast growing"], jawaban: 2, pembahasan: "Sustainable = berkelanjutan." },
    { soal: "Story about imaginary characters is called...", opsi: ["Biography", "Fiction", "Article", "Journal"], jawaban: 1, pembahasan: "Fiction = rekaan." },
    { soal: "'Submit by Friday' means...", opsi: ["On Friday", "Before/on Friday", "After Friday", "During Friday"], jawaban: 1, pembahasan: "By = paling lambat hari Jumat." },
    { soal: "Passive of 'They build the house.'", opsi: ["The house is built by them", "The house is building", "The house built", "The house was build"], jawaban: 0, pembahasan: "Passive simple present." },
    { soal: "Synonym of 'Rapid' is...", opsi: ["Slow", "Quick", "Late", "Steady"], jawaban: 1, pembahasan: "Rapid = cepat (quick)." },
    { soal: "Antonym of 'Frequently' is...", opsi: ["Often", "Rarely", "Always", "Regularly"], jawaban: 1, pembahasan: "Frequently (sering) lawan rarely (jarang)." },
    { soal: "'They' in 'students' paragraph refers to...", opsi: ["Teachers", "Students", "Books", "Schools"], jawaban: 1, pembahasan: "Anaphora mengacu pada 'students'." },
    { soal: "'Requires two cups of sugar' means...", opsi: ["Wants", "Needs", "Optional", "Desires"], jawaban: 1, pembahasan: "Require = butuh (needs)." },
    { soal: "Which is a greeting?", opsi: ["Goodbye", "Good morning", "Thank you", "Sorry"], jawaban: 1, pembahasan: "Good morning = salam." },
    { soal: "Text describing person/place/thing is...", opsi: ["Narrative", "Procedure", "Descriptive", "Argumentative"], jawaban: 2, pembahasan: "Descriptive = mendeskripsikan." },
    { soal: "'Although it was raining, we went out' shows...", opsi: ["Reason", "Contrast", "Time", "Purpose"], jawaban: 1, pembahasan: "Although = pertentangan (contrast)." },
    { soal: "Synonym of 'Delicious' is...", opsi: ["Disgusting", "Tasty", "Bitter", "Spicy"], jawaban: 1, pembahasan: "Delicious = tasty (lezat)." },
    { soal: "If you heat ice, it ___...", opsi: ["melts", "melted", "will melt", "is melting"], jawaban: 0, pembahasan: "Conditional type 0 (fakta alam)." }
  ],
  'subtest-pm': [
    { soal: "Dari 7 orang, dipilih 3 pengurus OSIS. Berapa cara? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 7!/(3!4!) = 35." },
    { soal: "Dari 5 orang, pilih ketua, wakil, sekretaris. Berapa susunan? (Permutasi)", opsi: ["10", "20", "60", "120"], jawaban: 2, pembahasan: "P(5,3) = 5!/2! = 60." },
    { soal: "Modal Rp1.000.000, bunga 12%/tahun. Bunga 3 bulan?", opsi: ["10RB", "20RB", "30RB", "40RB"], jawaban: 2, pembahasan: "Bunga = 1jt x 12% x (3/12) = 30RB." },
    { soal: "Jarak 120 km, kecepatan 60 km/jam. Waktu tempuh?", opsi: ["1 jam", "2 jam", "3 jam", "4 jam"], jawaban: 1, pembahasan: "Waktu = 120/60 = 2 jam." },
    { soal: "Harga naik 20% dari 50RB. Harga sekarang?", opsi: ["55RB", "60RB", "70RB", "40RB"], jawaban: 1, pembahasan: "Naik 20% = 10RB. 50RB+10RB=60RB." },
    { soal: "Pekerja selesai 6 jam. Dengan teman 4 jam. Teman sendiri selesai?", opsi: ["10 jam", "12 jam", "8 jam", "14 jam"], jawaban: 1, pembahasan: "1/6 + 1/x = 1/4 → x = 12." },
    { soal: "Diskon 15% untuk 80RB. Harga setelah diskon?", opsi: ["68RB", "70RB", "65RB", "60RB"], jawaban: 0, pembahasan: "Diskon = 12RB. 80RB-12RB = 68RB." },
    { soal: "3x + 2y = 12 dan x - y = 1. Nilai y?", opsi: ["2", "3", "4", "5"], jawaban: 1, pembahasan: "x = 1+y. Substitusi: 3(1+y) + 2y = 12 → 3 + 5y = 12. y=3 (jika x=2)." },
    { soal: "Balok 4x3x2. Volume?", opsi: ["12", "24", "20", "9"], jawaban: 1, pembahasan: "V = p x l x t = 24." },
    { soal: "Persegi keliling 20 cm. Luas?", opsi: ["25", "20", "16", "10"], jawaban: 0, pembahasan: "Sisi = 5. Luas = 5x5 = 25." },
    { soal: "Hasil -5 + 3 x 2?", opsi: ["-4", "1", "-1", "4"], jawaban: 1, pembahasan: "Kali didahulukan: -5 + 6 = 1." },
    { soal: "Faktor x² - 7x + 12?", opsi: ["(x-3)(x-4)", "(x+3)(x+4)", "(x-2)(x-6)", "(x-3)(x+4)"], jawaban: 0, pembahasan: "Cari angka yang kali 12, tambah -7: -3 dan -4." },
    { soal: "2⁴ + 3²?", opsi: ["16", "25", "17", "13"], jawaban: 1, pembahasan: "16 + 9 = 25." },
    { soal: "Lingkaran diameter 14 cm. Luas? (π=22/7)", opsi: ["154", "144", "134", "124"], jawaban: 0, pembahasan: "r = 7. Luas = 22/7 x 7 x 7 = 154." },
    { soal: "40% dari x = 20. Nilai x?", opsi: ["40", "50", "60", "70"], jawaban: 1, pembahasan: "0.4x = 20 → x = 50." },
    { soal: "Kubus volume 64 cm³. Panjang rusuk?", opsi: ["4", "6", "8", "16"], jawaban: 0, pembahasan: "Sisi³ = 64 → sisi = 4." },
    { soal: "Data: 2,4,4,5,6,8. Rata-rata?", opsi: ["4", "5", "6", "7"], jawaban: 1, pembahasan: "Jumlah = 29. Rata-rata ≈ 4.83 → dibulatkan 5." },
    { soal: "Suku ke-5 deret aritmatika 2,5,8,11,...", opsi: ["14", "15", "16", "17"], jawaban: 0, pembahasan: "Beda 3. 11 + 3 = 14." },
    { soal: "Jumlah sudut dalam segi-8?", opsi: ["1080°", "900°", "720°", "540°"], jawaban: 0, pembahasan: "(n-2) x 180 = 6 x 180 = 1080." },
    { soal: "Jika log 2 = 0.3, maka log 8?", opsi: ["0.6", "0.9", "1.2", "0.3"], jawaban: 1, pembahasan: "8 = 2³. log 8 = 3 x 0.3 = 0.9." },
    { soal: "5! / 3!?", opsi: ["20", "15", "10", "5"], jawaban: 0, pembahasan: "120 / 6 = 20." },
    { soal: "4 buku + 2 pulpen = 40RB. 1 pulpen 5RB. Harga 1 buku?", opsi: ["5RB", "7.5RB", "10RB", "12.5RB"], jawaban: 1, pembahasan: "2 pulpen = 10RB. 4 buku = 30RB. 1 buku = 7.5RB." },
    { soal: "Peluang mata dadu prima (2,3,5)?", opsi: ["1/6", "1/3", "1/2", "1/4"], jawaban: 2, pembahasan: "3 prima dari 6. 3/6 = 1/2." },
    { soal: "Air 2 m³/menit. 5 menit = ? liter", opsi: ["1.000", "5.000", "10.000", "500"], jawaban: 2, pembahasan: "2 m³ = 2000L. 2000 x 5 = 10.000L." },
    { soal: "Tangga 3m ke dinding, kaki 4m dari dinding. Panjang tangga?", opsi: ["5m", "6m", "7m", "8m"], jawaban: 0, pembahasan: "Pitagoras: √(3²+4²) = 5." },
    { soal: "Jika x = -3, x² - 2x + 1?", opsi: ["4", "16", "14", "1"], jawaban: 1, pembahasan: "9 + 6 + 1 = 16." },
    { soal: "Barang jual 150RB, rugi 25%. Harga beli?", opsi: ["100RB", "150RB", "200RB", "250RB"], jawaban: 2, pembahasan: "Jual = 75% beli. 150RB = 0.75 x beli. Beli = 200RB." },
    { soal: "Susunan kata 'LOGIKA' (huruf beda)?", opsi: ["720", "360", "120", "120"], jawaban: 0, pembahasan: "6! = 720." },
    { soal: "Rata-rata 10 siswa 60. Tambah 1 siswa, rata-rata 62. Nilai siswa baru?", opsi: ["72", "80", "82", "90"], jawaban: 2, pembahasan: "Total baru = 11x62 = 682. Total lama = 600. Nilai = 82." },
    { soal: "2/3 x = 8. 3/4 x?", opsi: ["6", "8", "9", "12"], jawaban: 2, pembahasan: "x = 12. 3/4 x 12 = 9." },
    { soal: "Roda putar 120 kali/menit. Total derajat?", opsi: ["43.200°", "360°", "120°", "7.200°"], jawaban: 0, pembahasan: "120 x 360 = 43.200." },
    { soal: "0.2 x 0.3?", opsi: ["0.6", "0.06", "0.006", "6"], jawaban: 1, pembahasan: "2x3=6, 2 desimal = 0.06." },
    { soal: "Umur A:B = 2:3. Selisih 5 tahun. Umur B?", opsi: ["10", "15", "20", "25"], jawaban: 1, pembahasan: "Selisih 1 bagian = 5. B = 3x5 = 15." },
    { soal: "Persegi panjang dipotong 2 sama besar. Luas awal 40. Keliling total 2 bagian?", opsi: ["Tetap", "Bertambah", "Berkurang", "Tidak tentu"], jawaban: 1, pembahasan: "Memotong tambah sisi, keliling bertambah." },
    { soal: "Sisa 125 : 11?", opsi: ["2", "3", "4", "5"], jawaban: 2, pembahasan: "125 = 11x11 + 4." },
    { soal: "Perbandingan L:P = 3:5. Total 40. Banyak perempuan?", opsi: ["15", "25", "20", "10"], jawaban: 1, pembahasan: "3+5=8. 40/8=5. P = 5x5 = 25." },
    { soal: "Jam 15:00. Sudut jarum jam dan menit?", opsi: ["90°", "180°", "270°", "360°"], jawaban: 0, pembahasan: "Jam 3 lurus = 90°." },
    { soal: "2 jam 30 menit = ... menit?", opsi: ["120", "150", "180", "230"], jawaban: 1, pembahasan: "2x60 + 30 = 150." },
    { soal: "Kebun persegi 100m². Perbesar agar luas 4x. Perbesar sisi?", opsi: ["2x", "4x", "10x", "16x"], jawaban: 0, pembahasan: "Luas = sisi². Jika luas 4x, sisi 2x." }
  ]
// ====== PERBAIKAN FUNGSI TOMBOL ULANGI LATIHAN AI (sebelumnya salah panggil fungsi simulasi) ======
function soalSelanjutnya(panelId) {
    indexSoalSekarang++;
    if (indexSoalSekarang < soalAktif.length) {
        tampilkanSoal(panelId);
    } else {
        const panel = document.getElementById(panelId);
        if (!panel) return;
        panel.innerHTML = `
            <div class="hasil-akhir">
                <div class="ikon-hasil">🎯</div>
                <h1>${skorBenar} / ${soalAktif.length}</h1>
                <p class="sub-text">Latihan Selesai! Terus tingkatkan kemampuan UTBKmu.</p>
                <button class="btn-action" onclick="generateSoalDariAI(currentGateKey)">Ulangi Latihan</button>
            </div>
        `;
    }
}

// ====== PERBAIKAN DUPLIKASI CHAT HISTORY (sebelumnya setiap buka chat dobel pesan) ======
function initChatAI() {
    const floatingChatBtn = document.getElementById('floating-chat-btn');
    const chatModal = document.getElementById('chat-modal');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatHistory = document.getElementById('chat-history');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');

    if(floatingChatBtn) {
        floatingChatBtn.addEventListener('click', () => {
            chatModal.classList.add('open');
            if(chatInput) chatInput.focus();
            // Bersihkan chat history di DOM sebelum load ulang history untuk menghindari duplikasi
            chatHistory.innerHTML = '';
            // Load history sesi ini
            chatHistoryGlobal.forEach(msg => {
                addChatMessage(msg.content, msg.role === 'user' ? 'user' : 'ai');
            });
        });
    }

    if(closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            chatModal.classList.remove('open');
        });
    }

    function addChatMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${sender}-message`);
        messageDiv.textContent = text;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function showChatLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('chat-loading');
        loadingDiv.id = 'chat-loading';
        loadingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatHistory.appendChild(loadingDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function hideChatLoading() {
        const loading = document.getElementById('chat-loading');
        if(loading) loading.remove();
    }

    async function handleSendChat() {
        const userMessage = chatInput.value.trim();
        if(!userMessage) return;

        addChatMessage(userMessage, 'user');
        saveChatToHistory('user', userMessage);
        chatInput.value = '';
        showChatLoading();

        const currentMateri = DATA_MATERI[currentGateKey] || null;
        const contextMateri = currentMateri ? 
            `\n\nKonteks website yang sedang dibuka user: Subtes ${currentMateri.title}. Materi singkat: ${currentMateri.desc}` : '';

        const promptSystem = `Kamu adalah Tutor UTBK profesional yang ahli dalam semua materi UTBK SNBT. 
        Kamu bisa membaca konten website yang sedang diakses user (materi dan soal). 
        Aturan:
        1. Jawab pertanyaan pengguna dengan jelas, detail, dan sesuai standar UTBK.
        2. Jika ditanya tentang soal, berikan pembahasan yang logis dan sesuai kunci jawaban UTBK.
        3. Jika pengguna mengirimkan soal, berikan penjelasan langkah demi langkah.
        4. Gunakan konteks website yang sedang diakses (subtes mana yang sedang dibuka) untuk memberikan jawaban yang lebih relevan.
        5. Jangan menjawab topik di luar UTBK. Jika pertanyaan tidak relacion dengan UTBK, jawab dengan sopan bahwa kamu hanya bisa membantu soal UTBK.
        6. Gunakan bahasa yang mudah dipahami, tapi tetap formal seperti tutor profesional.${contextMateri}`;
        
        const messages = [
            { role: "system", content: promptSystem },
            ...getChatHistory().slice(-5),
            { role: "user", content: userMessage }
        ];

        try {
            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${CHAT_API_KEY}` },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 512
                })
            });

            if (!response.ok) throw new Error('Gagal menghubungi AI');
            const resJson = await response.json();
            const aiResponse = resJson.choices[0].message.content;

            hideChatLoading();
            addChatMessage(aiResponse, 'ai');
            saveChatToHistory('ai', aiResponse);
        } catch (error) {
            hideChatLoading();
            addChatMessage(`Maaf, terjadi kesalahan: ${error.message}`, 'ai');
        }
    }

    function getChatHistory() {
        return chatHistoryGlobal;
    }

    function saveChatToHistory(role, content) {
        chatHistoryGlobal.push({ role, content });
    }

    if(sendChatBtn) sendChatBtn.addEventListener('click', handleSendChat);
    if(chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') handleSendChat();
        });
    }
}
