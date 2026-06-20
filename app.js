// ====== KONFIGURASI API GROQ ======
// PENTING: Masukkan API Key Groq Anda di sini
const GROQ_API_KEY = "GANTI_DENGAN_API_KEY_GROQ_KAMU"; 
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
// Bagian 1: PU & PPU (80 Soal). Bagian 2 menyusul.
const BANK_SIMULASI = {
  'subtest-pu': [
    // --- 40 SOAL PENALARAN UMUM ---
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
    { soal: "P, Q, R, S, T. Jika P=T, dan Q=S, maka hubungan P dan S adalah...", opsi: ["P>S", "P<S", "P=S", "P≠S"], jawaban: 1, pembahasan: "P=T, Q=S, R<S. Karena T>R, maka S<T (P). Jadi P>S." },
    { soal: "Semua bunga berbau wangi. Mawar adalah bunga. Maka...", opsi: ["Mawar berbau wangi", "Mawar tidak wangi", "Semua wangi mawar", "Tidak pasti"], jawaban: 0, pembahasan: "Silogisme dasar." },
    { soal: "Deret: 5, 10, 8, 16, 14, 28, ...", opsi: ["26", "30", "32", "24"], jawaban: 0, pembahasan: "Pola selang-seling: x2, -2. 28-2=26." },
    { soal: "Deret: 100, 50, 25, 12.5, ...", opsi: ["6.25", "5", "7.5", "10"], jawaban: 0, pembahasan: "Deret geometri dibagi 2." },
    { soal: "Semifinalis mendapat medali. Andi bukan semifinalis. Maka...", opsi: ["Andi mendapat medali", "Andi tidak mendapat medali", "Andi finalis", "Tidak tentu"], jawaban: 3, pembahasan: "Jangan disimpulkan bahwa non-semifinalis tidak dapat medali (bisa saja ada jalur lain dapat medali)." },
    { soal: "Jika hujan, angin kencang. Angin tidak kencang. Maka...", opsi: ["Hujan", "Tidak hujan", "Mendung", "Cerah"], jawaban: 1, pembahasan: "Modus Tollens." },
    { soal: "A, C, F, J, O, ...", opsi: ["T", "U", "V", "S"], jawaban: 1, pembahasan: "Selisih +2, +3, +4, +5, +6. O(15)+6=U(21)." },
    { soal: "Semua A adalah B. Tidak ada B yang C. Maka...", opsi: ["Semua A adalah C", "Tidak ada A yang C", "Sebagian A adalah C", "Tidak ada A yang B"], jawaban: 1, pembahasan: "Silogisme negatif universal." },
    { soal: "Jika naik pesawat, harus tes PCR. Andi tidak tes PCR. Maka Andi...", opsi: ["Naik pesawat", "Tidak naik pesawat", "Naik kapal", "Tidak tentu"], jawaban: 1, pembahasan: "Modus Tollens." },
    { soal: "Deret: 81, 27, 9, 3, ...", opsi: ["0", "1", "1.5", "2"], jawaban: 1, pembahasan: "Dibagi 3. 3/3=1." },
    { soal: "Jika x>5, maka y<2. Jika y=3, maka...", opsi: ["x>5", "x<=5", "x=5", "x<5"], jawaban: 1, pembahasan: "Kontraposisi: y tidak <2 (y>=2/3), maka x tidak >5 (x<=5)." },
    { soal: "Semua dosen berijazah S2. Sebagian dosen berijazah S3. Maka...", opsi: ["Semua S2 adalah S3", "Sebagian S2 adalah S3", "Semua dosen S3", "Sebagian dosen S2 adalah S3"], jawaban: 3, pembahasan: "Karena semua dosen S2, dan sebagian S3, maka sebagian S2 (yang berstatus dosen) pasti S3." },
    { soal: "Sebagian buku menarik. Semua buku mahal. Maka...", opsi: ["Semua yang menarik mahal", "Sebagian yang mahal menarik", "Semua yang mahal menarik", "Tidak ada hubungannya"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika sakit, minum obat. Minum obat. Maka...", opsi: ["Sakit", "Tidak sakit", "Tidak tentu sakit", "Sembuh"], jawaban: 2, pembahasan: "Jangan jatuh ke 'Affirming the Consequent'. q benar tidak menjamin p benar." },
    { soal: "Deret: 1, 1, 2, 3, 5, 8, ...", opsi: ["11", "12", "13", "14"], jawaban: 2, pembahasan: "Deret Fibonacci (jumlah dua angka sebelumnya)." },
    { soal: "Deret: 2, 5, 10, 17, 26, ...", opsi: ["35", "36", "37", "38"], jawaban: 2, pembahasan: "Selisih +3, +5, +7, +9, +11. 26+11=37." },
    { soal: "Semula: KUDA. Jika K diganti M, D diganti T, menjadi...", opsi: ["MUTA", "MATA", "KUTA", "MUDA"], jawaban: 0, pembahasan: "Substitusi huruf." },
    { soal: "Lima orang A, B, C, D, E duduk berjajar. A di ujung kiri. C di antara B dan D. E di kanan D. Urutannya...", opsi: ["ABCDE", "ABDCE", "ACDBE", "ABCDE"], jawaban: 1, pembahasan: "Logika spatial: A, lalu B, C (tengah), D, E." },
    { soal: "Jika lampu menyala, maka ada listrik. Lampu tidak menyala. Maka...", opsi: ["Ada listrik", "Tidak ada listrik", "Lampu rusak", "Tidak pasti tidak ada listrik"], jawaban: 3, pembahasan: "Lampu tidak menyala bisa karena rusak atau mati, bukan pasti tak ada listrik." },
    { soal: "Deret: 4, 8, 12, 16, ...", opsi: ["18", "20", "22", "24"], jawaban: 1, pembahasan: "Kelipatan 4." },
    { soal: "Semua tanaman butuh air. Rumput adalah tanaman. Maka...", opsi: ["Rumput butuh air", "Air butuh rumput", "Rumput tidak butuh air", "Tanaman adalah air"], jawaban: 0, pembahasan: "Silogisme dasar." },
    { soal: "A = B, B = C, C = D. Maka A = ?", opsi: ["B", "C", "D", "Semuanya benar"], jawaban: 3, pembahasan: "Sifat transitif rantai." },
    { soal: "Tidak ada ikan yang mamalia. Hiu adalah ikan. Maka...", opsi: ["Hiu mamalia", "Hiu bukan mamalia", "Sebagian hiu mamalia", "Tidak tentu"], jawaban: 1, pembahasan: "Silogisme negatif universal." },
    { soal: "Deret huruf: A, C, F, J, O, ...", opsi: ["U", "T", "S", "V"], jawaban: 0, pembahasan: "Sama dengan soal nomor 21, +2,+3,+4,+5,+6. U." },
    { soal: "Jika nilai ujian > 80, dapat A. Nilai Budi 85. Maka...", opsi: ["Budi dapat A", "Budi tidak dapat A", "Budi remidi", "Tidak tentu"], jawaban: 0, pembahasan: "Modus Ponens." },
    { soal: "Jika hujan, Budi bawa payung. Budi bawa payung. Maka...", opsi: ["Hari hujan", "Hari cerah", "Budi takut panas", "Tidak tentu hujan"], jawaban: 3, pembahasan: "Affirming consequent fallacy. Bisa saja Budi bawa payung karena panas." }
  ],
  'subtest-ppu': [
    // --- 40 SOAL PENGETAHUAN & PEMAHAMAN UMUM ---
    { soal: "Sinonim dari 'Bengis' adalah...", opsi: ["Ramah", "Kejam", "Pemalu", "Penakut"], jawaban: 1, pembahasan: "Bengis berarti keras/kejam." },
    { soal: "Sinonim dari 'Ekstensif' adalah...", opsi: ["Sempit", "Luas", "Dalam", "Tinggi"], jawaban: 1, pembahasan: "Ekstensif = luas, meluas." },
    { soal: "Sinonim dari 'Konvensional' adalah...", opsi: ["Modern", "Tradisional", "Futuristik", "Inovatif"], jawaban: 1, pembahasan: "Konvensional = bersifat tradisi/adat kebiasaan." },
    { soal: "Sinonim dari 'Prematur' adalah...", opsi: ["Tepat waktu", "Terlambat", "Lebih awal", "Sangat tua"], jawaban: 2, pembahasan: "Prematur = lahir/tumbuh sebelum waktunya." },
    { soal: "Sinonim dari 'Filantropis' adalah...", opsi: ["Pecinta uang", "Pecinta manusia", "Pecinta alam", "Pecinta diri"], jawaban: 1, pembahasan: "Filantropis = orang yang suka berbuat baik/dermawan." },
    { soal: "Antonim dari 'Defisit' adalah...", opsi: ["Rugi", "Surplus", "Merugikan", "Bangkrut"], jawaban: 1, pembahasan: "Defisit = kekurangan. Lawannya surplus/kelebihan." },
    { soal: "Antonim dari 'Esensial' adalah...", opsi: ["Pokok", "Penting", "Sekunder", "Utama"], jawaban: 2, pembahasan: "Esensial = sangat penting. Lawannya sekunder/tidak penting." },
    { soal: "Antonim dari 'Implisit' adalah...", opsi: ["Tersurat", "Tersirat", "Samara", "Tersembunyi"], jawaban: 0, pembahasan: "Implisit = tersirat. Lawannya eksplisit = tersurat." },
    { soal: "Antonim dari 'Apatis' adalah...", opsi: ["Peduli", "Malas", "Acuh", "Dingin"], jawaban: 0, pembahasan: "Apati = tidak peduli. Lawannya peduli." },
    { soal: "Antonim dari 'Relevan' adalah...", opsi: ["Cocok", "Berkaitan", "Tak nyambung", "Sama"], jawaban: 2, pembahasan: "Relevan = berhubungan. Lawannya tak nyambung/irrelevan." },
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
    { soal: "Penggunaan partikel 'lah' yang benar...", opsi: ["Akulah pelakunya", "Aku lah pelakunya", "Aku-lah pelakunya", "Akulahpelakunya"], jawaban: 0, pembahasan: "Partikel 'lah' pada kata ganti orang pertama digabung (akulah, ia-lah)." },
    { soal: "Kata 'Foto' diserap dari bahasa...", opsi: ["Inggris", "Belanda", "Yunani", "Sanskerta"], jawaban: 1, pembahasan: "Foto diserap dari Belanda 'foto'." }
  ],
  'subtest-pbm': [ /* Akan diisi di Bagian 2 */ ],
  'subtest-pk': [ /* Akan diisi di Bagian 2 */ ],
  'subtest-indo': [ /* Akan diisi di Bagian 3 */ ],
  'subtest-inggris': [ /* Akan diisi di Bagian 3 */ ],
  'subtest-pm': [ /* Akan diisi di Bagian 3 */ ]
};

// ====== DOM CONTROLLERS ======
const sidebar = document.getElementById('sidebar');
const menuTrigger = document.getElementById('menu-trigger');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const viewDashboard = document.getElementById('view-dashboard');
const viewSubtest = document.getElementById('view-subtest');
let currentGateKey = null; 

function toggleSidebar() { sidebar.classList.toggle('open'); }
menuTrigger.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// ====== TEMA DROPDOWN & CIRCULAR REVEAL ======
const themeSelectorWrapper = document.querySelector('.theme-selector-wrapper');
const themeCurrentBtn = document.getElementById('theme-current-btn');
const themeDropdown = document.getElementById('theme-dropdown');
const themeOptions = document.querySelectorAll('.theme-option');
const themeIcon = document.querySelector('.theme-icon');
const themeName = document.querySelector('.theme-name');

themeCurrentBtn.addEventListener('click', (e) => { e.stopPropagation(); themeDropdown.classList.toggle('open'); });
document.addEventListener('click', (e) => { if (!themeSelectorWrapper.contains(e.target)) themeDropdown.classList.remove('open'); });

function updateThemeButton(theme) {
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  themeName.textContent = theme === 'dark' ? 'Dark' : 'Light';
}

themeOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    const targetTheme = option.dataset.theme;
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (targetTheme === currentTheme) { themeDropdown.classList.remove('open'); return; }
    if (document.body.classList.contains('is-revealing')) return;

    const x = e.clientX, y = e.clientY;
    document.body.style.setProperty('--reveal-x', x + 'px');
    document.body.style.setProperty('--reveal-y', y + 'px');

    if (targetTheme === 'light') document.body.classList.add('reveal-to-light');
    else document.body.classList.add('reveal-to-dark');

    requestAnimationFrame(() => { requestAnimationFrame(() => { document.body.classList.add('is-revealing'); }); });

    setTimeout(() => { document.documentElement.setAttribute('data-theme', targetTheme); updateThemeButton(targetTheme); }, 400);
    setTimeout(() => { document.body.classList.remove('is-revealing'); document.body.classList.remove('reveal-to-light'); document.body.classList.remove('reveal-to-dark'); themeDropdown.classList.remove('open'); }, 850);
  });
});

// ====== NAVIGATION ROUTER ======
function navigateTo(viewId, gateKey = null) {
  sidebar.classList.remove('open');
  if (viewId === 'dashboard') {
    viewSubtest.classList.remove('active');
    viewDashboard.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewId === 'subtest' && gateKey) {
    viewDashboard.classList.remove('active');
    viewSubtest.classList.add('active');
    renderSubtestPage(gateKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.getElementById('brand-home').addEventListener('click', () => navigateTo('dashboard'));
document.getElementById('btn-back-dashboard').addEventListener('click', () => navigateTo('dashboard'));
document.querySelectorAll('.node-card').forEach(card => { card.addEventListener('click', () => navigateTo('subtest', card.dataset.gate)); });
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const target = link.dataset.target;
    if (target === 'dashboard') navigateTo('dashboard');
    else navigateTo('subtest', target);
  });
});

// ====== RENDER DYNAMIC SUBTEST VIEW ======
function renderSubtestPage(key) {
  currentGateKey = key;
  soalAktif = []; 
  indexSoalSekarang = 0;
  skorBenar = 0;

  const data = DATA_MATERI[key];
  if (!data) return;

  document.getElementById('subtest-title').textContent = data.title;
  document.getElementById('subtest-category').textContent = data.category;
  document.getElementById('subtest-category').className = `node-tag ${data.category.includes('TPS') ? 'tps' : 'lit'}`;
  document.getElementById('subtest-desc').textContent = data.desc;
  document.getElementById('materi-dynamic-content').innerHTML = data.htmlContent;

  switchSubPanel('materi');
  resetChronoTimer();
  document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.sub-tab-btn[data-mode="materi"]').classList.add('active');
}

const subTabBtns = document.querySelectorAll('.sub-tab-btn');
subTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    subTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    switchSubPanel(mode);
    if (mode === 'latihan-ai' && currentGateKey) generateSoalDariAI(currentGateKey);
    else if (mode === 'latihan-sim' && currentGateKey) mulaiSimulasi(currentGateKey);
  });
});

// FIX UI: Menggunakan style.display agar tidak elemen tumpang tindih dan nge-block klik
function switchSubPanel(mode) {
  document.getElementById('panel-materi').style.display = (mode === 'materi') ? 'block' : 'none';
  document.getElementById('panel-latihan-ai').style.display = (mode === 'latihan-ai') ? 'block' : 'none';
  document.getElementById('panel-latihan-sim').style.display = (mode === 'latihan-sim') ? 'block' : 'none';
}

// ====== SISTEM LATIHAN AI (GROQ - 20 SOAL) ======
let soalAktif = [], indexSoalSekarang = 0, skorBenar = 0;

async function generateSoalDariAI(gateKey) {
  const dataMateri = DATA_MATERI[gateKey];
  const panelLatihan = document.getElementById('panel-latihan-ai');
  panelLatihan.innerHTML = `<div class="loading-state"><div class="loading-spinner"></div><h3>Sedang Meracik 20 Soal Tipe UTBK...</h3><p>AI sedang menyusun soal ${dataMateri.title} tingkat sulit (HOTS). Mohon tunggu sejenak.</p></div>`;

  if (GROQ_API_KEY === "GANTI_DENGAN_API_KEY_GROQ_KAMU") {
    panelLatihan.innerHTML = `<div class="locked-state-card"><div class="lock-icon">🔑</div><h3>API Key Groq Belum Diisi</h3><p>Silakan buka file app.js baris ke-3 dan masukkan API Key Groq Anda.</p></div>`;
    return;
  }

  const promptSystem = `Kamu adalah seorang "Tim Pembuat Soal UTBK Resmi". Buat soal SULIT & HOTS. WAJIB balas dalam format JSON murni tanpa markdown.`;
  const promptUser = `Buatkan 20 soal pilihan ganda untuk subtes "${dataMateri.title}". Struktur JSON: { "soal": [ { "pertanyaan": "...", "opsi": ["A", "B", "C", "D"], "jawaban": 0, "pembahasan": "..." } ] }`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [ { role: "system", content: promptSystem }, { role: "user", content: promptUser } ],
        temperature: 0.8,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) throw new Error('Gagal memuat soal dari AI (Status: ' + response.status + ')');
    const resJson = await response.json();
    const parsed = JSON.parse(resJson.choices[0].message.content);

    soalAktif = parsed.soal;
    indexSoalSekarang = 0;
    skorBenar = 0;
    tampilkanSoal('panel-latihan-ai');
  } catch (error) {
    panelLatihan.innerHTML = `<div class="locked-state-card"><div class="lock-icon">⚠️</div><h3>Gagal Menghubungi AI</h3><p>Error: ${error.message}</p><button class="btn-action" onclick="generateSoalDariAI('${gateKey}')">Coba Lagi</button></div>`;
  }
}

// ====== SISTEM SIMULASI BANK SOAL ======
function mulaiSimulasi(gateKey) {
  let bank = BANK_SIMULASI[gateKey] || [];
  
  // Jika belum 40 soal (karena belum saya lengkapi di bagian 2/3), AI lokal akan generate sisanya
  let combinedBank = [...bank];
  if(combinedBank.length < 40) {
    const dynamicNeeded = 40 - combinedBank.length;
    const dynamicSoal = generateDynamicSoal(dynamicNeeded);
    combinedBank = combinedBank.concat(dynamicSoal);
  }

  soalAktif = combinedBank.sort(() => Math.random() - 0.5);
  indexSoalSekarang = 0;
  skorBenar = 0;
  tampilkanSoal('panel-latihan-sim');
}

// Fungsi Generator lokal (dummy)
function generateDynamicSoal(jumlah = 35) {
  const arr = [];
  for(let i=0; i<jumlah; i++) {
    arr.push({
      soal: `[Soal Generate Otomatis ${i+1}] Berapakah hasil dari ${i+2} x 2?`,
      opsi: [`${(i+2)*2}`, `${(i+2)*3}`, `${(i+2)+2}`, `${(i+2)-1}`].sort(() => Math.random() - 0.5),
      jawaban: 0,
      pembahasan: `Ini adalah soal cadangan otomatis.`
    });
  }
  return arr;
}

// ====== FUNGSI TAMPILKAN SOAL (TAMBAHAN AGAR TIDAK ERROR) ======
function tampilkanSoal(panelId) {
  const panel = document.getElementById(panelId);
  if (!soalAktif || soalAktif.length === 0) {
    panel.innerHTML = "<div class='locked-state-card'><h3>Soal belum tersedia.</h3></div>";
    return;
  }

  const soal = soalAktif[indexSoalSekarang];
  let opsiHtml = soal.opsi.map((opsi, i) => `
    <button class="opsi-soal" onclick="jawabSoal(${i}, '${panelId}')">
      <span class="opsi-huruf">${String.fromCharCode(65 + i)}</span>
      ${opsi}
    </button>
  `).join('');

  panel.innerHTML = `
    <div class="latihan-header">
      <div class="info-soal">
        <span class="btn-action shadow">Soal ${indexSoalSekarang + 1} / ${soalAktif.length}</span>
        <span class="btn-action shadow">Skor: ${skorBenar}</span>
      </div>
    </div>
    <div class="box-soal">
      <p class="teks-soal">${soal.pertanyaan || soal.soal}</p>
      <div class="opsi-grid">${opsiHtml}</div>
      <div class="box-pembahasan" id="box-pembahasan" style="display:none;">
        <h3>Pembahasan</h3>
        <p>${soal.pembahasan}</p>
        <button class="btn-action" onclick="soalSelanjutnya('${panelId}')">${indexSoalSekarang === soalAktif.length - 1 ? 'Lihat Hasil' : 'Soal Selanjutnya ➜'}</button>
      </div>
    </div>
  `;
}

function jawabSoal(indexPilihan, panelId) {
  const soal = soalAktif[indexSoalSekarang];
  const tombolOpsi = document.querySelectorAll(`#${panelId} .opsi-soal`);
  
  tombolOpsi.forEach(btn => btn.disabled = true);

  if (indexPilihan === soal.jawaban) {
    tombolOpsi[indexPilihan].classList.add('benar');
    skorBenar++;
  } else {
    tombolOpsi[indexPilihan].classList.add('salah');
    tombolOpsi[soal.jawaban].classList.add('benar');
  }

  document.getElementById('box-pembahasan').style.display = 'block';
}

function soalSelanjutnya(panelId) {
  indexSoalSekarang++;
  if (indexSoalSekarang < soalAktif.length) {
    tampilkanSoal(panelId);
  } else {
    const panel = document.getElementById(panelId);
    panel.innerHTML = `
      <div class="hasil-akhir">
        <div class="ikon-hasil">🎯</div>
        <h1>${skorBenar} / ${soalAktif.length}</h1>
        <p class="sub-text">Latihan Selesai! Terus tingkatkan kemampuan UTBKmu.</p>
        <button class="btn-action" onclick="mulaiSimulasi(currentGateKey)">Ulangi Latihan</button>
      </div>
    `;
  }
}
