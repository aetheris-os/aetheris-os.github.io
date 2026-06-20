```javascript
// ====== KONFIGURASI API GROQ (MULTI-KEY ROTATION) ======
const API_KEYS = [
    "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",
    "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",
    "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",
    "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"
];

let currentKeyIndex = Math.floor(Math.random() * API_KEYS.length);
function getActiveApiKey() { return API_KEYS[currentKeyIndex]; }
function rotateApiKey() { currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length; console.log(`API Key kena limit. Beralih ke API Key index ke-${currentKeyIndex}`); return API_KEYS[currentKeyIndex]; }

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const AI_MODEL = "llama-3.3-70b-versatile";

// ====== MATERI UTBK 2024-2026 ======
const DATA_MATERI = {
  'subtest-pu': {
    title: "Penalaran Umum (PU)", category: "TPS Module",
    desc: "Mengukur kemampuan penalaran logis (silogisme, premis), analitis (deret, permainan kata), dan penalaran kuantitatif.",
    htmlContent: `
      <div class="materi-card"><h2>Logika Silogisme & Premis (UTBK 2024-2026)</h2><p>Silogisme adalah penarikan kesimpulan dari dua premis. Aturan mainnya:</p><ul><li><strong>Modus Ponens:</strong> Jika p maka q. p terjadi. Maka q terjadi.</li><li><strong>Modus Tollens:</strong> Jika p maka q. q tidak terjadi. Maka p tidak terjadi.</li><li><strong>Silogisme Rantai:</strong> p→q, q→r, maka p→r.</li><li><strong>Silogisme Partikular:</strong> Subjek disisihkan, predikat dipertahankan.</li></ul><h3>Jebakan Logika (Fallacies)</h3><ul><li><strong>Affirming the Consequent:</strong> Jika p maka q. q terjadi. Maka p terjadi (SALAH).</li><li><strong>Denying the Antecedent:</strong> Jika p maka q. p tidak terjadi. Maka q tidak terjadi (SALAH).</li></ul></div>
      <div class="materi-card"><h2>Penalaran Analitis (Deret & Logika Diagram)</h2><p>Deret angka menggunakan pola aritmatika, geometri, atau selang-seling. Deret huruf menggunakan urutan abjad.</p><h3>Pola Deret Tingkat Lanjut</h3><ul><li><strong>Bertingkat:</strong> Selisih membentuk pola baru (+2, +4, +6, +8).</li><li><strong>Silang:</strong> Dua pola berselang-seling.</li><li><strong>Fibonacci:</strong> Suku ke-n = jumlah dua suku sebelumnya.</li><li><strong>Pangkat:</strong> n², n³, atau kombinasi.</li></ul></div>
      <div class="materi-card"><h2>Penalaran Kuantitatif (PU)</h2><p>Lebih fokus pada logika perbandingan dan analisis data singkat.</p><ul><li><strong>Perbandingan Senilai & Berbalik Nilai.</strong></li><li><strong>Analisis Diagram Venn.</strong></li></ul></div>
    `
  },
  'subtest-ppu': {
    title: "Pengetahuan & Pemahaman Umum (PPU)", category: "TPS Module",
    desc: "Mengukur penguasaan kosakata (sinonim, antonim), ejaan, dan tata bahasa praktis.",
    htmlContent: `
      <div class="materi-card"><h2>Kosakata Berbasis Konteks (UTBK 2024-2026)</h2><p>Soal PPU mencari sinonim kontekstual. Contoh: "peredaran" dalam "peredaran uang" berbeda dengan "peredaran darah".</p><h3>Kata Serapan Asing</h3><ul><li><strong>Quality</strong> → <code>kualitas</code></li><li><strong>Complex</strong> → <code>kompleks</code></li><li><strong>Technique</strong> → <code>teknik</code></li></ul></div>
      <div class="materi-card"><h2>Ejaan yang Disempurnakan (EYD V)</h2><ul><li><strong>"Di" sebagai awalan verba pasif:</strong> digabung (dimakan).</li><li><strong>"Di" sebagai preposisi tempat:</strong> dipisah (di rumah).</li><li><strong>Partikel "pun":</strong> Umumnya dipisah, kecuali pada kata tertentu (meskipun, walaupun).</li></ul></div>
      <div class="materi-card"><h2>Tata Bahasa & Majas</h2><ul><li><strong>Konjungsi Antarklausa:</strong> Jangan gunakan dua konjungsi sekaligus (Pleonasme).</li><li><strong>Majas Metafora:</strong> Perbandingan langsung (anak emas).</li><li><strong>Majas Personifikasi:</strong> Benda mati seolah hidup (angin berbisik).</li></ul></div>
    `
  },
  'subtest-pbm': {
    title: "Memahami Bacaan & Menulis (PBM)", category: "TPS Module",
    desc: "Mengukur kemampuan memahami teks, menemukan gagasan utama, dan menyusun kalimat efektif.",
    htmlContent: `
      <div class="materi-card"><h2>Kalimat Efektif (UTBK 2024-2026)</h2><ul><li><strong>Keseparasan:</strong> Subjek dan predikat harus jelas.</li><li><strong>Kehematan Kata:</strong> Hindari pleonasme ("agar supaya" salah).</li><li><strong>Kelogisan:</strong> Hindari kalimat ambigu.</li></ul></div>
      <div class="materi-card"><h2>Gagasan Utama & Kalimat Utama</h2><p>Letaknya bisa di awal (deduktif), akhir (induktif), atau awal-akhir (campuran).</p><h3>Jenis Paragraf</h3><ul><li><strong>Deskripsi:</strong> Menggambarkan objek.</li><li><strong>Narasi:</strong> Menceritakan peristiwa.</li><li><strong>Eksposisi:</strong> Memaparkan fakta.</li><li><strong>Argumentasi:</strong> Pendapat + alasan.</li><li><strong>Persuasi:</strong> Meyakinkan pembaca.</li></ul></div>
    `
  },
  'subtest-pk': {
    title: "Pengetahuan Kuantitatif (PK)", category: "TPS Module",
    desc: "Mengukur kemampuan matematika dasar: aljabar, aritmatika, geometri, dan statistik.",
    htmlContent: `
      <div class="materi-card"><h2>Aljabar & Aritmatika Sosial (UTBK 2024-2026)</h2><ul><li><strong>Persamaan Linear:</strong> Substitusi dan eliminasi.</li><li><strong>Aritmatika Sosial:</strong> Untung, rugi, diskon, pajak, bunga.</li><li><strong>Deret Aritmatika & Geometri:</strong> Rumus Sn.</li><li><strong>Deret Tak Hingga:</strong> S∞ = a / (1-r).</li></ul></div>
      <div class="materi-card"><h2>Geometri & Trigonometri</h2><ul><li><strong>Pythagoras:</strong> a² + b² = c².</li><li><strong>Luas Lingkaran:</strong> π r². Keliling: 2 π r.</li><li><strong>Volume Tabung:</strong> π r² t. Kerucut: (1/3) π r² t.</li></ul></div>
      <div class="materi-card"><h2>Statistika & Peluang</h2><ul><li><strong>Mean, Median, Modus.</strong></li><li><strong>Peluang:</strong> P(A) = n(A) / n(S).</li><li><strong>Kombinasi & Permutasi.</strong></li></ul></div>
    `
  },
  'subtest-indo': {
    title: "Literasi B. Indonesia", category: "Literasi Module",
    desc: "Mengukur kemampuan membaca kritis, evaluasi teks, dan sintesis informasi.",
    htmlContent: `
      <div class="materi-card"><h2>Membaca Kritis & Evaluatif (UTBK 2024-2026)</h2><ul><li><strong>Fakta vs Opini.</strong></li><li><strong>Menemukan Bias.</strong></li><li><strong>Sintesis:</strong> Menggabungkan info dari beberapa teks.</li><li><strong>Parafrase:</strong> Menyimpulkan dengan bahasa sendiri.</li></ul></div>
      <div class="materi-card"><h2>Teks Argumentasi & Persuasi</h2><ul><li><strong>Struktur Argumentasi:</strong> Tesis, Argumentasi, Penegasan ulang.</li><li><strong>Ciri Persuasi:</strong> Mengandung ajakan.</li></ul></div>
      <div class="materi-card"><h2>Majas & Gaya Bahasa</h2><ul><li><strong>Hiperbola:</strong> Melebih-lebihkan.</li><li><strong>Ironi:</strong> Sindiran halus.</li><li><strong>Sarkasme:</strong> Sindiran kasar.</li><li><strong>Satire:</strong> Sindiran dengan kiasan.</li></ul></div>
    `
  },
  'subtest-inggris': {
    title: "Literasi B. Inggris", category: "Literasi Module",
    desc: "Mengukur kemampuan reading comprehension, critical reading, dan contextual vocabulary.",
    htmlContent: `
      <div class="materi-card"><h2>Critical Reading & Comprehension (UTBK 2024-2026)</h2><ul><li><strong>Main Idea & Topic Sentence.</strong></li><li><strong>Inference:</strong> Menyimpulkan informasi tersirat.</li><li><strong>Contextual Vocabulary.</strong></li><li><strong>Author's Tone.</strong></li></ul></div>
      <div class="materi-card"><h2>Grammar & Structure</h2><ul><li><strong>Conditional Sentences:</strong> Type 0, 1, 2, 3.</li><li><strong>Passive Voice:</strong> Be + V3.</li><li><strong>Relative Pronouns:</strong> Who, Whom, Which, Whose.</li><li><strong>Reported Speech.</strong></li></ul></div>
      <div class="materi-card"><h2>Text Types</h2><ul><li><strong>Descriptive, Narrative, Procedure, Report.</strong></li></ul></div>
    `
  },
  'subtest-pm': {
    title: "Penalaran Matematika", category: "Literasi Module",
    desc: "Mengukur kemampuan pemecahan masalah matematika dalam konteks nyata.",
    htmlContent: `
      <div class="materi-card"><h2>Pemecahan Masalah Kontekstual (UTBK 2024-2026)</h2><ul><li><strong>Perbandingan & Skala.</strong></li><li><strong>Kecepatan, Jarak, Waktu.</strong></li><li><strong>Peluang Majemuk.</strong></li><li><strong>Barisan & Deret Aplikatif.</strong></li></ul></div>
      <div class="materi-card"><h2>Aljabar Terapan</h2><ul><li><strong>Sistem Persamaan Linear.</strong></li><li><strong>Fungsi Kuadrat:</strong> Maksimum/minimum.</li><li><strong>Pertidaksamaan.</strong></li></ul></div>
      <div class="materi-card"><h2>Statistika & Peluang Lanjutan</h2><ul><li><strong>Deskripsi Data.</strong></li><li><strong>Peluang Majemuk:</strong> Saling bebas & saling lepas.</li></ul></div>
    `
  }
};

// ====== BANK SOAL SIMULASI (SANGAT BANYAK) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Semua dokter pandai. Sebagian dokter kaya. Kesimpulan yang benar adalah...", opsi: ["Semua yang kaya pandai", "Sebagian yang pandai kaya", "Semua yang pandai kaya", "Sebagian yang kaya bodoh"], jawaban: 1, pembahasan: "Silogisme partikular: Subjek (dokter) disisihkan, predikat dipertahankan." },
    { soal: "Jika hari hujan, jalan basah. Jalan tidak basah. Maka...", opsi: ["Hari hujan", "Hari tidak hujan", "Hari mendung", "Tidak tentu"], jawaban: 1, pembahasan: "Modus Tollens: p→q, ~q maka ~p." },
    { soal: "Deret: 3, 6, 11, 18, 27, ...", opsi: ["36", "38", "40", "42"], jawaban: 1, pembahasan: "Selisih: +3, +5, +7, +9. Berikutnya +11. 27+11=38." },
    { soal: "Deret: 2, 6, 12, 20, 30, ...", opsi: ["40", "42", "44", "46"], jawaban: 1, pembahasan: "Selisih: +4, +6, +8, +10. Berikutnya +12. 30+12=42." },
    { soal: "Jika p maka q. Jika q maka r. Jika r maka s. Jika p benar, maka...", opsi: ["q benar", "r benar", "s benar", "p dan q benar"], jawaban: 2, pembahasan: "Silogisme rantai: p→q→r→s. Jika p benar, konsekuensi terakhir (s) pasti benar." },
    { soal: "Semua siswa wajib ujian. Sebagian siswa sakit. Maka...", opsi: ["Semua yang sakit tidak ujian", "Sebagian yang wajib ujian sakit", "Semua siswa sehat", "Tidak ada yang ujian"], jawaban: 1, pembahasan: "Silogisme partikular afirmatif." },
    { soal: "A, C, E, G, I, ...", opsi: ["J", "K", "L", "M"], jawaban: 1, pembahasan: "Melompati satu huruf. I selanjutnya adalah K." },
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
    { soal: "Semua mahasiswa rajin. Sebagian mahasiswa atlet. Kesimpulan...", opsi: ["Semua atlet rajin", "Sebagian atlet rajin", "Semua atlet mahasiswa", "Tidak ada hubungan"], jawaban: 1, pembahasan: "Silogisme partikular: sebagian atlet adalah orang rajin." },
    { soal: "Jika harga BBM naik, ongkos angkot naik. Ongkos angkot tidak naik. Kesimpulan...", opsi: ["BBM naik", "BBM turun", "BBM tidak naik", "BBM stabil"], jawaban: 2, pembahasan: "Modus tollens: p→q, ~q maka ~p. BBM tidak naik." },
    { soal: "Deret: 1, 1, 2, 3, 5, 8, 13, ...", opsi: ["18", "20", "21", "24"], jawaban: 2, pembahasan: "Fibonacci: 8+13=21." },
    { soal: "Deret: 3, 5, 9, 15, 23, ...", opsi: ["30", "31", "33", "35"], jawaban: 2, pembahasan: "Selisih: +2, +4, +6, +8. Berikutnya +10. 23+10=33." },
    { soal: "B, D, G, K, P, ...", opsi: ["U", "V", "W", "X"], jawaban: 1, pembahasan: "Selisih +2, +3, +4, +5, +6. P(16)+6=V(22)." },
    { soal: "Jika sebuah bilangan habis dibagi 6, maka habis dibagi 3. Bilangan 15 tidak habis dibagi 6. Maka...", opsi: ["15 habis dibagi 3", "15 tidak habis dibagi 3", "Tidak dapat disimpulkan", "15 habis dibagi 6"], jawaban: 2, pembahasan: "Denying the antecedent (fallacy). Tidak bisa disimpulkan. Faktanya 15 habis dibagi 3, tapi bukan dari premis ini." },
    { soal: "Semua peserta ujian wajib membawa KTP. Doni tidak membawa KTP. Maka...", opsi: ["Doni peserta ujian", "Doni bukan peserta ujian", "Doni lulus ujian", "Tidak tentu"], jawaban: 1, pembahasan: "Modus tollens: semua p adalah q. ~q maka ~p." },
    { soal: "Deret: 2, 4, 8, 16, 32, ...", opsi: ["48", "64", "128", "256"], jawaban: 1, pembahasan: "Geometri x2. 32x2=64." },
    { soal: "Deret: 81, 27, 9, 3, ...", opsi: ["0", "1", "2", "3"], jawaban: 1, pembahasan: "Geometri dibagi 3. 3/3=1." },
    { soal: "Semua dosen berpendidikan S2. Sebagian dosen berpendidikan S3. Maka...", opsi: ["Semua S2 adalah S3", "Sebagian S2 adalah S3", "Sebagian S3 berpendidikan S2", "Tidak ada hubungan"], jawaban: 2, pembahasan: "Silogisme partikular." },
    { soal: "Jika cuaca cerah, Budi bermain bola. Budi tidak bermain bola. Maka...", opsi: ["Cuaca cerah", "Cuaca tidak cerah", "Budi sakit", "Hujan deras"], jawaban: 1, pembahasan: "Modus tollens." },
    { soal: "Deret huruf: A, D, I, P, ...", opsi: ["U", "V", "W", "Y"], jawaban: 3, pembahasan: "Selisih +3, +5, +7, +9. P(16)+9=Y(25)." },
    { soal: "Tidak ada ikan yang mamalia. Hiu adalah ikan. Kesimpulan...", opsi: ["Hiu mamalia", "Hiu bukan mamalia", "Semua mamalia ikan", "Ikan bukan hiu"], jawaban: 1, pembahasan: "Silogisme kategorik negatif." },
    { soal: "Jika x>5 maka x²>25. Jika x²≤25 maka...", opsi: ["x>5", "x≤5", "x=5", "x<5"], jawaban: 1, pembahasan: "Kontraposisi: p→q, ~q maka ~p." },
    { soal: "Deret: 7, 14, 10, 20, 16, 32, ...", opsi: ["28", "30", "34", "36"], jawaban: 0, pembahasan: "Pola selang-seling: x2, -4. 32-4=28." }
  ],
  'subtest-ppu': [
    { soal: "Sinonim dari 'Bengis' adalah...", opsi: ["Ramah", "Kejam", "Pemalu", "Penakut"], jawaban: 1, pembahasan: "Bengis berarti keras/kejam." },
    { soal: "Sinonim dari 'Ekstensif' adalah...", opsi: ["Sempit", "Luas", "Dalam", "Tinggi"], jawaban: 1, pembahasan: "Ekstensif = luas, meluas." },
    { soal: "Sinonim dari 'Konvensional' adalah...", opsi: ["Modern", "Tradisional", "Futuristik", "Inovatif"], jawaban: 1, pembahasan: "Konvensional = bersifat tradisi/adat." },
    { soal: "Sinonim dari 'Prematur' adalah...", opsi: ["Tepat waktu", "Terlambat", "Lebih awal", "Sangat tua"], jawaban: 2, pembahasan: "Prematur = lahir/tumbuh sebelum waktunya." },
    { soal: "Sinonim dari 'Filantropis' adalah...", opsi: ["Pecinta uang", "Pecinta manusia", "Pecinta alam", "Pecinta diri"], jawaban: 1, pembahasan: "Filantropis = orang yang suka berbuat baik/dermawan." },
    { soal: "Antonim dari 'Defisit' adalah...", opsi: ["Rugi", "Surplus", "Merugikan", "Bangkrut"], jawaban: 1, pembahasan: "Defisit = kekurangan. Lawannya surplus." },
    { soal: "Antonim dari 'Esensial' adalah...", opsi: ["Pokok", "Penting", "Sekunder", "Utama"], jawaban: 2, pembahasan: "Esensial = sangat penting. Lawannya sekunder." },
    { soal: "Antonim dari 'Implisit' adalah...", opsi: ["Tersurat", "Tersirat", "Samara", "Tersembunyi"], jawaban: 0, pembahasan: "Implisit = tersirat. Lawannya eksplisit = tersurat." },
    { soal: "Antonim dari 'Apatis' adalah...", opsi: ["Peduli", "Malas", "Acuh", "Dingin"], jawaban: 0, pembahasan: "Apati = tidak peduli. Lawannya peduli." },
    { soal: "Antonim dari 'Relevan' adalah...", opsi: ["Cocok", "Berkaitan", "Tak nyambung", "Sama"], jawaban: 2, pembahasan: "Relevan = berhubungan. Lawannya tak nyambung." },
    { soal: "Penulisan ejaan yang benar: 'Kedua orang tuanya pergi ke Jakarta'. Penulisan 'tuanya' seharusnya...", opsi: ["tuanya (benar)", "tua-nya", "tua nya", "tuanya (salah total)"], jawaban: 2, pembahasan: "Kata 'tua' dan 'nya' dipisah karena 'nya' sebagai penegas." },
    { soal: "Pemakaian huruf kapital yang benar...", opsi: ["Presiden Joko Widodo", "presiden Joko widodo", "Presiden joko Widodo", "Presiden Joko widodo"], jawaban: 0, pembahasan: "Gelar jabatan di awal kalimat dikapital, nama orang dikapital." },
    { soal: "Penulisan imbuhan asing yang benar...", opsi: ["Di cooperasi", "Dikooperasi", "Di-kooperasi", "Dikooperasikan"], jawaban: 1, pembahasan: "Awalan 'di' pada kata asing digabung tanpa tanda hubung." },
    { soal: "Penggunaan tanda baca yang tepat: 'Bawa buku pensil dan penghapus'", opsi: ["Bawa buku, pensil, dan penghapus", "Bawa buku pensil, dan penghapus", "Bawa buku pensil dan penghapus.", "Bawa buku; pensil; dan penghapus"], jawaban: 0, pembahasan: "Konjungsi antara objek terakhir menggunakan koma." },
    { soal: "Arti dari peribahasa 'Sambil menyelam minum air' adalah...", opsi: ["Iring-iringan", "Bekerja sambil mengambil kesempatan", "Bekerja keras", "Bermalas-malasan"], jawaban: 1, pembahasan: "Mengerjakan sesuatu sambil mengambil keuntungan pribadi." },
    { soal: "Arti dari 'Bunga bank' dalam kalimat 'Bunga bank bulan ini naik' adalah...", opsi: ["Bunga melati", "Keuntungan tambahan", "Bunga simpanan/pinjaman", "Kembang indah"], jawaban: 2, pembahasan: "Sinonim kontekstual: bunga = jasa uang." },
    { soal: "Arti kata 'Kausa' dalam teks hukum adalah...", opsi: ["Kaos baju", "Penyebab", "Akibat", "Tuntutan"], jawaban: 1, pembahasan: "Kausa = sebab (kausalitas)." },
    { soal: "Padanan kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Padanan kata 'Resiprokitas' adalah...", opsi: ["Saling menguntungkan", "Saling menukar", "Saling merugikan", "Hubungan timbal balik"], jawaban: 3, pembahasan: "Resiprokal = timbal balik." },
    { soal: "Kata 'Mitra' dalam konteks bisnis berarti...", opsi: ["Lawan", "Rekan kerja", "Pesaing", "Pembeli"], jawaban: 1, pembahasan: "Mitra = partner/rekan." },
    { soal: "Sinonim dari 'Fundamental' adalah...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Sinonim dari 'Ambigu' adalah...", opsi: ["Jelas", "Bermakna ganda", "Tegas", "Pasti"], jawaban: 1, pembahasan: "Ambigu = bermakna ganda/tidak jelas." },
    { soal: "Antonim dari 'Optimis' adalah...", opsi: ["Positif", "Pesimis", "Realistis", "Apatis"], jawaban: 1, pembahasan: "Optimis (positif) lawan pesimis (negatif)." },
    { soal: "Sinonim dari 'Relevan' adalah...", opsi: ["Berkaitan", "Terpisah", "Asing", "Jauh"], jawaban: 0, pembahasan: "Relevan = berhubungan/berkaitan." },
    { soal: "Peribahasa 'Bagai aur dengan tebing' bermakna...", opsi: ["Saling membantu", "Saling merusak", "Tidak peduli", "Bermusuhan"], jawaban: 0, pembahasan: "Saling membantu/saling membutuhkan." },
    { soal: "Sinonim dari 'Krusial' adalah...", opsi: ["Tambahan", "Sangat penting", "Biasa", "Kecil"], jawaban: 1, pembahasan: "Krusial = sangat penting/vital." },
    { soal: "Penulisan kata depan yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Preposisi tempat ditulis terpisah." },
    { soal: "Majas yang menyindir dengan kata-kata berlawanan disebut...", opsi: ["Sarkasme", "Ironi", "Sinisme", "Satire"], jawaban: 1, pembahasan: "Ironi = sindiran halus dengan kata berlawanan." },
    { soal: "Sinonim dari 'Inovatif' adalah...", opsi: ["Kuno", "Kreatif/Pembaharuan", "Statis", "Tradisional"], jawaban: 1, pembahasan: "Inovatif = pembaharuan/kreatif." },
    { soal: "Antonim dari 'Generik' adalah...", opsi: ["Umum", "Spesifik", "Biasa", "Biasa"], jawaban: 1, pembahasan: "Generik = umum. Lawan spesifik/khusus." },
    { soal: "Peribahasa 'Tak bisa menari dikatakan lantai yang berbatu' menggambarkan...", opsi: ["Jujur", "Mencari alasan untuk kegagalan", "Kreatif", "Tekun"], jawaban: 1, pembahasan: "Mencari alasan untuk menutupi kelemahan diri." },
    { soal: "Sinonim dari 'Mudarat' adalah...", opsi: ["Bermanfaat", "Merugikan/Berbahaya", "Menenangkan", "Menyenangkan"], jawaban: 1, pembahasan: "Mudarat = merugikan/berbahaya." },
    { soal: "Padanan kata 'Eksplisit' adalah...", opsi: ["Tersirat", "Tersurat/Jelas", "Tersembunyi", "Samara"], jawaban: 1, pembahasan: "Eksplisit = tersurat/jelas." },
    { soal: "Antonim dari 'Marjinal' adalah...", opsi: ["Tepi", "Sentral/Penting", "Samping", "Pinggir"], jawaban: 1, pembahasan: "Marjinal = di tepi/tidak penting. Lawan sentral." }
  ],
  'subtest-pk': [
    { soal: "Sebuah barang dibeli dengan harga Rp200.000. Jika dijual dengan untung 15%, maka harga jualnya adalah...", opsi: ["Rp 215.000", "Rp 220.000", "Rp 225.000", "Rp 230.000"], jawaban: 3, pembahasan: "Untung = 15% x 200.000 = 30.000. Harga jual = 200.000 + 30.000 = 230.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang dalam 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = Orang x Hari = 8 x 12 = 96. Hari = 96 / 6 = 16 hari." },
    { soal: "Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Budi berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Budi akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko didepan saat 07.00 adalah 60 km. Selisih kecepatan = 20 km/jam. Waktu susul = 60/20 = 3 jam. 07.00 + 3 jam = 10.00." },
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
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x² - 1, maka nilai (g o f)(2) adalah...", opsi: ["14", "15", "48", "47"], jawaban: 2, pembahasan: "f(2) = 2(2)+3 = 7. Lalu g(7) = 7² - 1 = 49 - 1 = 48." },
    { soal: "Hasil dari √144 + √81 adalah...", opsi: ["21", "22", "23", "25"], jawaban: 0, pembahasan: "12 + 9 = 21." },
    { soal: "Sebuah segitiga siku-siku memiliki sisi 3 cm dan 4 cm. Panjang sisi miringnya adalah...", opsi: ["5 cm", "6 cm", "7 cm", "8 cm"], jawaban: 0, pembahasan: "Pythagoras: √(3² + 4²) = √25 = 5." },
    { soal: "Jika 2x + 3y = 12 dan x = 3, maka nilai y adalah...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "2(3) + 3y = 12 → 6 + 3y = 12 → 3y = 6 → y = 2." },
    { soal: "Luas persegi panjang dengan panjang 12 cm dan lebar 8 cm adalah...", opsi: ["96 cm²", "104 cm²", "80 cm²", "120 cm²"], jawaban: 0, pembahasan: "L = p x l = 12 x 8 = 96." },
    { soal: "Keliling lingkaran dengan diameter 14 cm adalah... (π = 22/7)", opsi: ["44 cm", "154 cm", "88 cm", "22 cm"], jawaban: 0, pembahasan: "K = π x d = 22/7 x 14 = 44." },
    { soal: "Hasil dari 3³ - 2² adalah...", opsi: ["23", "24", "25", "27"], jawaban: 0, pembahasan: "27 - 4 = 23." },
    { soal: "Jika diskon 20% untuk barang Rp150.000, maka harga setelah diskon adalah...", opsi: ["Rp 120.000", "Rp 130.000", "Rp 110.000", "Rp 100.000"], jawaban: 0, pembahasan: "Diskon = 20% x 150.000 = 30.000. Harga = 150.000 - 30.000 = 120.000." },
    { soal: "Volume kubus dengan rusuk 5 cm adalah...", opsi: ["100 cm³", "125 cm³", "150 cm³", "175 cm³"], jawaban: 1, pembahasan: "V = s³ = 5³ = 125." },
    { soal: "Median dari data: 10, 12, 14, 16, 18, 20 adalah...", opsi: ["14", "15", "16", "17"], jawaban: 1, pembahasan: "Genap data, median = rata-rata nilai tengah = (14+16)/2 = 15." },
    { soal: "Hasil dari 25% dari 1.000.000 adalah...", opsi: ["250.000", "200.000", "150.000", "100.000"], jawaban: 0, pembahasan: "0.25 x 1.000.000 = 250.000." },
    { soal: "Jika 5x = 35, maka nilai x² adalah...", opsi: ["7", "14", "49", "35"], jawaban: 2, pembahasan: "x = 7. x² = 49." },
    { soal: "Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah...", opsi: ["20 cm²", "30 cm²", "40 cm²", "60 cm²"], jawaban: 1, pembahasan: "L = 1/2 x a x t = 1/2 x 10 x 6 = 30." },
    { soal: "Hasil dari 7! / 5! adalah...", opsi: ["30", "36", "42", "48"], jawaban: 2, pembahasan: "7!/5! = 7 x 6 = 42." }
  ],
  'subtest-pbm': [
    { soal: "Perbaiki kalimat: 'Bagi siswa yang rajin belajar akan lulus ujian.'", opsi: ["Bagi siswa rajin belajar, akan lulus ujian.", "Siswa yang rajin belajar akan lulus ujian.", "Bagi siswa yang rajin belajar lulus ujian.", "Siswa yang rajin belajar, akan lulus ujian."], jawaban: 1, pembahasan: "Kata depan 'bagi' membuat subjek tidak jelas. Hilangkan 'bagi'." },
    { soal: "Perbaiki kalimat: 'Sejak dari pagi dia sudah belajar.'", opsi: ["Sejak pagi dia sudah belajar.", "Sejak dari pagi, dia sudah belajar.", "Dari pagi dia sudah belajar.", "Sejak pagi, dia sudah belajar."], jawaban: 0, pembahasan: "Pleonasme. 'Sejak' dan 'dari' maknanya sama." },
    { soal: "Penulisan kata depan 'di' yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Preposisi tempat ditulis terpisah." },
    { soal: "Penulisan kata kerja pasif 'di' yang benar...", opsi: ["Di makan", "Dimakan", "Di-makan", "Dimakan oleh"], jawaban: 1, pembahasan: "Awalan 'di' pada kata kerja pasif digabung." },
    { soal: "Kalimat efektif harus memiliki struktur inti yang jelas, yaitu...", opsi: ["Subjek dan Obyek", "Subjek dan Predikat", "Predikat dan Obyek", "Keterangan"], jawaban: 1, pembahasan: "Struktur minimal: Subjek dan Predikat." },
    { soal: "Paragraf yang gagasan utamanya terletak di awal paragraf disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Deduktif: umum ke khusus (gagasan di awal)." },
    { soal: "Paragraf yang gagasan utamanya terletak di akhir paragraf disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Naratif"], jawaban: 1, pembahasan: "Induktif: khusus ke umum (gagasan di akhir)." },
    { soal: "Teks: 'Pohon ditebang liar. Akibatnya, tanah longsor sering terjadi.' Kata hubung yang tepat adalah...", opsi: ["sehingga", "karena", "walaupun", "meskipun"], jawaban: 0, pembahasan: "Hubungan sebab-akibat menggunakan 'sehingga'." },
    { soal: "Sinonim dari kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Antonim dari kata 'Implisit' adalah...", opsi: ["Tersirat", "Tersurat", "Samara", "Tersembunyi"], jawaban: 1, pembahasan: "Implisit (tersirat), lawannya eksplisit (tersurat)." },
    { soal: "Penulisan huruf kapital yang benar...", opsi: ["saya belajar di jakarta.", "Saya belajar di Jakarta.", "Saya belajar Di jakarta.", "saya Belajar di jakarta."], jawaban: 1, pembahasan: "Awal kalimat dan nama diri dikapitalkan." },
    { soal: "Penggunaan tanda baca untuk kalimat langsung adalah...", opsi: ["Ia berkata saya lapar", "Ia berkata: 'Saya lapar.'", "Ia berkata saya lapar.", "Ia berkata; saya lapar."], jawaban: 1, pembahasan: "Kalimat langsung menggunakan titik dua (:) dan tanda kutip." },
    { soal: "Perbaiki kalimat: 'Harga beras naik dan juga turun.'", opsi: ["Harga beras naik dan turun.", "Harga beras naik serta turun.", "Harga beras naik tetapi turun.", "Harga beras naik atau turun."], jawaban: 0, pembahasan: "Kata 'juga' tidak diperlukan setelah konjungsi 'dan'." },
    { soal: "Gagasan utama dalam sebuah paragraf disebut juga...", opsi: ["Kalimat penjelas", "Ide pokok", "Kesimpulan", "Opini"], jawaban: 1, pembahasan: "Gagasan utama = ide pokok." },
    { soal: "Teks yang bertujuan menjelaskan langkah-langkah membuat sesuatu disebut teks...", opsi: ["Eksposisi", "Deskripsi", "Prosedur", "Argumentasi"], jawaban: 2, pembahasan: "Teks prosedur memuat langkah-langkah." },
    { soal: "Perbaikan kalimat ambigu: 'Ibu membawa tas ke pasar berwarna merah.'", opsi: ["Ibu berwarna merah membawa tas ke pasar.", "Ibu membawa tas berwarna merah ke pasar.", "Ke pasar ibu membawa tas merah.", "Tas merah dibawa ibu ke pasar."], jawaban: 1, pembahasan: "Penjelas harus berdekatan dengan yang dijelaskan." },
    { soal: "Majas yang membandingkan sesuatu dengan kata 'seperti' atau 'bagai' adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Personifikasi"], jawaban: 2, pembahasan: "Simile menggunakan kata pembanding eksplisit." },
    { soal: "Majas yang berarti melebih-lebihkan adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Litotes"], jawaban: 1, pembahasan: "Hiperbola adalah majas lebay." },
    { soal: "Perbaiki kalimat: 'Karena hujan deras, maka dia tidak datang.'", opsi: ["Karena hujan deras, dia tidak datang.", "Hujan deras, maka dia tidak datang.", "Karena hujan deras maka dia tidak datang.", "Karena hujan deras, oleh karena itu dia tidak datang."], jawaban: 0, pembahasan: "Jangan gunakan 'karena' dan 'maka' bersamaan." },
    { soal: "Teks: 'Kemarau tahun ini cukup panjang. Banyak sumur kering. Warga kesulitan air bersih.' Gagasan utamanya adalah...", opsi: ["Kemarau panjang", "Sumur kering", "Kesulitan air bersih", "Warga panik"], jawaban: 2, pembahasan: "Akibat inti adalah gagasan utamanya." },
    { soal: "Kalimat yang subjeknya tidak jelas karena didahului preposisi 'bagi' disebut kalimat...", opsi: ["Ambigu", "Tidak efektif", "Pasif", "Rancu"], jawaban: 1, pembahasan: "Kalimat tidak efektif karena subjek tertutup preposisi." },
    { soal: "Penulisan partikel 'lah' yang benar...", opsi: ["Mari pergi lah", "Marilah pergi", "Mari pergilah", "Mari-lah pergi"], jawaban: 1, pembahasan: "'lah' digabung pada kata yang mendapat tekanan." },
    { soal: "Majas yang benda mati seolah-olah hidup disebut...", opsi: ["Metafora", "Personifikasi", "Simile", "Hiperbola"], jawaban: 1, pembahasan: "Personifikasi = benda mati seolah hidup." },
    { soal: "Perbaiki: 'Adik sangat gembira sekali melihat boneka baru.'", opsi: ["Adik gembira sekali", "Adik sangat gembira", "Adik sangat gembira sekali", "Adik gembira"], jawaban: 1, pembahasan: "Pleonasme: 'sangat' dan 'sekali' tidak perlu digabung. Hilangkan salah satu." },
    { soal: "Teks yang berisi pendapat disertai alasan disebut...", opsi: ["Narasi", "Argumentasi", "Eksposisi", "Deskripsi"], jawaban: 1, pembahasan: "Argumentasi = pendapat + alasan/bukti." },
    { soal: "Sinonim dari 'Efektif' adalah...", opsi: ["Sia-sia", "Manjur/Berhasil", "Lambat", "Sulit"], jawaban: 1, pembahasan: "Efektif = ada hasilnya/manjur." },
    { soal: "Kalimat: 'Dia membaca buku di perpustakaan.' Yang menjadi keterangan tempat adalah...", opsi: ["Dia", "membaca", "buku", "di perpustakaan"], jawaban: 3, pembahasan: "Keterangan tempat = di perpustakaan." },
    { soal: "Perbaiki kalimat: 'Meskipun hujan, tetapi dia datang.'", opsi: ["Meskipun hujan, dia datang.", "Hujan, tetapi dia datang.", "Meskipun hujan tetapi dia datang.", "Walaupun hujan, tetapi dia datang."], jawaban: 0, pembahasan: "Jangan gunakan 'meskipun' dan 'tetapi' bersamaan." },
    { soal: "Antonim dari 'Hemat' adalah...", opsi: ["Pelit", "Boros", "Cermat", "Hembam"], jawaban: 1, pembahasan: "Hemat lawan boros." },
    { soal: "Majas yang membandingkan langsung tanpa kata pembanding adalah...", opsi: ["Simile", "Metafora", "Hiperbola", "Litotes"], jawaban: 1, pembahasan: "Metafora = perbandingan langsung (anak emas)." },
    { soal: "Perbaiki: 'Buku-buku itu sedang dibaca olehnya.' Bentuk aktifnya...", opsi: ["Ia sedang membaca buku-buku itu.", "Buku-buku itu ia baca.", "Ia membaca buku.", "Dia dibaca buku."], jawaban: 0, pembahasan: "Subjek aktif: Ia sedang membaca buku-buku itu." },
    { soal: "Penggunaan kata 'yang' yang tepat terdapat pada...", opsi: ["Buku yang merah itu", "Buku yang itu merah", "Yang buku itu merah", "Buku merah yang itu"], jawaban: 0, pembahasan: "Penggunaan 'yang' yang benar: Buku yang merah itu." }
  ],
  'subtest-indo': [
    { soal: "Teks: 'Edukasi karakter sangat penting untuk membentuk generasi yang tangguh. Tanpa karakter kuat, ilmu yang didapatkan justru bisa merugikan.' Gagasan utama teks tersebut adalah...", opsi: ["Generasi tangguh butuh ilmu", "Pentingnya edukasi karakter", "Ilmu tanpa karakter merugikan", "Integritas bagian dari pendidikan"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) berada di awal paragraf." },
    { soal: "Teks: 'Polusi udara di Jakarta meningkat. Hal ini ditandai dengan menipisnya lapisan ozon. Dampaknya, penyakit pernapasan meningkat.' Simpulan yang tepat adalah...", opsi: ["Lapisan ozon menipis karena polusi", "Polusi udara berdampak pada kesehatan pernapasan", "Jakarta kota terpolusi", "Penyakit pernapasan memicu polusi"], jawaban: 1, pembahasan: "Simpulan harus mencakup sebab dan akibat." },
    { soal: "Dalam teks eksposisi, penulis biasanya menggunakan pola pengembangan berupa...", opsi: ["Kronologis", "Sebab-akibat", "Definisi dan uraian", "Alur cerita"], jawaban: 2, pembahasan: "Teks eksposisi mengembangkan gagasan melalui definisi dan uraian." },
    { soal: "Teks: 'Penanaman pohon di perkotaan mampu mengurangi efek rumah kaca. Selain itu, pohon juga menyejukkan udara.' Hubungan kedua kalimat tersebut adalah...", opsi: ["Sebab-akibat", "Kesimpulan", "Sejajar (menambahkan)", "Perbandingan"], jawaban: 2, pembahasan: "Kata 'Selain itu' menandakan penambahan argumen." },
    { soal: "Membaca untuk menemukan informasi spesifik seperti nama atau angka disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 1, pembahasan: "Scanning = mencari detail spesifik dengan cepat." },
    { soal: "Membaca untuk memahami intisari atau gagasan utama bacaan disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 0, pembahasan: "Skimming = membaca cepat untuk mendapat inti." },
    { soal: "Teks argumentasi yang menampilkan pendapat penulis di awal menggunakan pola...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Tesis di awal lalu argumen = deduktif." },
    { soal: "Sinonim dari kata 'Fundamental' dalam konteks akademis adalah...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Antonim dari kata 'Konvensional' adalah...", opsi: ["Tradisional", "Modern/Inovatif", "Umum", "Lama"], jawaban: 1, pembahasan: "Konvensional = tradisional. Lawannya modern." },
    { soal: "Teks: 'Berdasarkan riset, siswa yang tidur 8 jam memiliki fokus 40% lebih baik.' Pernyataan ini merupakan...", opsi: ["Opini", "Fakta", "Fiksi", "Argumentasi subjektif"], jawaban: 1, pembahasan: "Berdasarkan riset dan data = fakta." },
    { soal: "Teks: 'Menurut saya, cuaca hari ini terlalu panas untuk berolahraga.' Pernyataan ini merupakan...", opsi: ["Fakta", "Opini", "Data", "Argumentasi logis"], jawaban: 1, pembahasan: "'Menurut saya' = penilaian pribadi (opini)." },
    { soal: "Menyimpulkan isi teks dengan bahasa sendiri tanpa mengubah maksud asli disebut...", opsi: ["Meringkas", "Memparafrasekan", "Mengevaluasi", "Mensintesis"], jawaban: 1, pembahasan: "Memparafrasekan = menulis ulang dengan bahasa sendiri." },
    { soal: "Menggabungkan informasi dari beberapa teks untuk membentuk kesimpulan baru disebut...", opsi: ["Analisis", "Sintesis", "Evaluasi", "Aplikasi"], jawaban: 1, pembahasan: "Sintesis menggabungkan berbagai sumber." },
    { soal: "Teks: 'Pemanasan global mengakibatkan es kutub mencair. Jika es mencair, permukaan air laut naik.' Hubungan kalimat ini adalah...", opsi: ["Perbandingan", "Sebab-akibat", "Pertentangan", "Urutan waktu"], jawaban: 1, pembahasan: "'Mengakibatkan' = sebab-akibat." },
    { soal: "Tujuan utama teks persuasi adalah...", opsi: ["Memberi informasi", "Menceritakan kejadian", "Meyakinkan pembaca", "Menghibur pembaca"], jawaban: 2, pembahasan: "Persuasi = meyakinkan." },
    { soal: "Dalam karya ilmiah, bagian latar belakang masalah terdapat di bab...", opsi: ["Bab I", "Bab II", "Bab III", "Bab IV"], jawaban: 0, pembahasan: "Pendahuluan berisi latar belakang dan tujuan." },
    { soal: "Kutipan langsung dari sumber pustaka harus ditulis dengan...", opsi: ["Tanda kurung siku", "Tanda kutip", "Tanda hubung", "Tanda seru"], jawaban: 1, pembahasan: "Kutipan langsung pakai tanda kutip." },
    { soal: "Teks: 'Warga sekitar gunung merapi dievakuasi karena status awas.' Makna kata 'dievakuasi' adalah...", opsi: ["Dipindahkan ke tempat aman", "Ditinggalkan begitu saja", "Diberi bantuan logistik", "Diarahkan ke gunung"], jawaban: 0, pembahasan: "Evakuasi = pemindahan untuk keselamatan." },
    { soal: "Sinonim dari kata 'Mitigasi' adalah...", opsi: ["Pencegahan/Pengurangan dampak", "Penanganan darurat", "Pembangunan ulang", "Penolongan korban"], jawaban: 0, pembahasan: "Mitigasi = upaya pengurangan risiko." },
    { soal: "Majas yang memberikan sifat manusia pada benda mati disebut...", opsi: ["Metafora", "Personifikasi", "Simile", "Hiperbola"], jawaban: 1, pembahasan: "Personifikasi = benda mati seolah hidup." },
    { soal: "Teks: 'Penggunaan gadget berlebihan dapat menyebabkan gangguan tidur. Selain itu, radiasi layar juga berpotensi merusak mata.' Pola pengembangan paragraf ini adalah...", opsi: ["Sebab-akibat", "Kronologis", "Pertentangan", "Definisi"], jawaban: 0, pembahasan: "Menjelaskan akibat dari suatu sebab." },
    { soal: "Kalimat yang menyatakan pendapat penulis dalam argumentasi disebut...", opsi: ["Tesis", "Argumen", "Data", "Kesimpulan"], jawaban: 0, pembahasan: "Tesis = pendapat/posisi penulis." },
    { soal: "Teks: 'Ia menangis tersedu-sedu, seakan-akan dunia akan kiamat.' Majas pada kalimat tersebut adalah...", opsi: ["Simile", "Hiperbola", "Personifikasi", "Metafora"], jawaban: 1, pembahasan: "Melebih-lebihkan (hiperbola)." },
    { soal: "Teks ilmiah yang memaparkan hasil penelitian secara objektif disebut...", opsi: ["Opini", "Artikel ilmiah", "Narasi", "Esai personal"], jawaban: 1, pembahasan: "Artikel ilmiah memaparkan hasil penelitian." },
    { soal: "Sinonim 'Comprehensive' dalam konteks teks adalah...", opsi: ["Sempit", "Menyeluruh", "Sebagian", "Singkat"], jawaban: 1, pembahasan: "Comprehensive = menyeluruh/lengkap." },
    { soal: "Antonim dari 'Kredibel' adalah...", opsi: ["Dipercaya", "Tidak terpercaya", "Akurat", "Valid"], jawaban: 1, pembahasan: "Kredibel = terpercaya. Lawannya tidak terpercaya." },
    { soal: "Teks: 'Sekolah ini menerapkan kurikulum berbasis kompetensi. Hal ini bertujuan untuk meningkatkan kualitas lulusan.' Kalimat kedua berfungsi sebagai...", opsi: ["Definisi", "Tujuan/akibat", "Perbandingan", "Pertentangan"], jawaban: 1, pembahasan: "Menjelaskan tujuan dari pernyataan sebelumnya." },
    { soal: "Majas yang menyindir dengan kata-kata kasar dan menyakitkan disebut...", opsi: ["Ironi", "Sarkasme", "Satire", "Sinisme"], jawaban: 1, pembahasan: "Sarkasme = sindiran kasar." },
    { soal: "Pola teks yang berawal dari pernyataan khusus menuju kesimpulan umum disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Naratif"], jawaban: 1, pembahasan: "Induktif: khusus ke umum." },
    { soal: "Membaca untuk memahami makna tersirat dari sebuah teks disebut...", opsi: ["Literal", "Inferensial", "Skimming", "Scanning"], jawaban: 1, pembahasan: "Inferensial = memahami makna tersirat." }
  ],
  'subtest-inggris': [
    { soal: "I wish I ___ harder for the UTBK exam last year.", opsi: ["study", "studied", "had studied", "would study"], jawaban: 2, pembahasan: "Penyesalan masa lalu: wish + past perfect (had V3)." },
    { soal: "If she ___, she would come to the party.", opsi: ["knows", "knew", "had known", "known"], jawaban: 1, pembahasan: "Conditional type 2 (hypothetical present), verb 2." },
    { soal: "The author's tone in a scientific report is usually...", opsi: ["Optimistic", "Subjective", "Objective", "Pessimistic"], jawaban: 2, pembahasan: "Laporan ilmiah bersifat objektif." },
    { soal: "Synonym of 'Abundant' is...", opsi: ["Scarce", "Plentiful", "Empty", "Small"], jawaban: 1, pembahasan: "Abundant = melimpah (plentiful)." },
    { soal: "Antonym of 'Artificial' is...", opsi: ["Fake", "Natural", "Synthetic", "Man-made"], jawaban: 1, pembahasan: "Artificial (buatan) lawan Natural." },
    { soal: "My brother, ___ lives in Jakarta, is a doctor.", opsi: ["who", "whom", "which", "whose"], jawaban: 0, pembahasan: "Who untuk subjek manusia." },
    { soal: "The book ___ by the teacher yesterday.", opsi: ["is bought", "was bought", "bought", "is buying"], jawaban: 1, pembahasan: "Passive voice past tense: was/were + V3." },
    { soal: "She has been studying ___ 3 hours.", opsi: ["for", "since", "from", "at"], jawaban: 0, pembahasan: "Durasi waktu menggunakan 'for'." },
    { soal: "The meeting will be held ___ Monday morning.", opsi: ["in", "on", "at", "for"], jawaban: 1, pembahasan: "Hari spesifik menggunakan 'on'." },
    { soal: "Text: 'The library is open from 8 AM to 4 PM.' When can you visit?", opsi: ["At 5 PM", "At 9 AM", "At 7 AM", "At 6 PM"], jawaban: 1, pembahasan: "9 AM berada di antara 8 AM dan 4 PM." },
    { soal: "What is the main idea of a paragraph called?", opsi: ["Topic sentence", "Supporting sentence", "Concluding sentence", "Title"], jawaban: 0, pembahasan: "Topic sentence berisi gagasan utama." },
    { soal: "Reading quickly to get the general idea is called...", opsi: ["Scanning", "Skimming", "Guessing", "Translating"], jawaban: 1, pembahasan: "Skimming untuk ide umum." },
    { soal: "Reading to find specific information is called...", opsi: ["Scanning", "Skimming", "Paraphrasing", "Summarizing"], jawaban: 0, pembahasan: "Scanning untuk info spesifik." },
    { soal: "Synonym of 'Crucial' is...", opsi: ["Unimportant", "Essential", "Secondary", "Optional"], jawaban: 1, pembahasan: "Crucial = sangat penting." },
    { soal: "Antonym of 'Ancient' is...", opsi: ["Old", "Modern", "Historical", "Classic"], jawaban: 1, pembahasan: "Ancient (kuno) lawan Modern." },
    { soal: "Choose the correct sentence:", opsi: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."], jawaban: 2, pembahasan: "She + doesn't + V1." },
    { soal: "If I ___ a bird, I would fly to you.", opsi: ["am", "was", "were", "be"], jawaban: 2, pembahasan: "Conditional type 2 selalu pakai 'were'." },
    { soal: "Text: 'Smoking is prohibited in this area.' What does it mean?", opsi: ["You can smoke here", "You must not smoke here", "Smoking is allowed outside", "Smoking is recommended"], jawaban: 1, pembahasan: "Prohibited = dilarang." },
    { soal: "A text that tries to convince the reader is called...", opsi: ["Narrative", "Recount", "Persuasive", "Descriptive"], jawaban: 2, pembahasan: "Persuasive text meyakinkan." },
    { soal: "The past tense of 'Write' is...", opsi: ["Wrote", "Written", "Writed", "Writing"], jawaban: 0, pembahasan: "V2 dari write = wrote." },
    { soal: "Synonym of 'Diligent' is...", opsi: ["Lazy", "Hardworking", "Careless", "Slow"], jawaban: 1, pembahasan: "Diligent = rajin (hardworking)." },
    { soal: "Antonym of 'Brave' is...", opsi: ["Strong", "Cowardly", "Bold", "Confident"], jawaban: 1, pembahasan: "Brave (berani) lawan cowardly (penakut)." },
    { soal: "Choose: 'The sun ___ in the east.'", opsi: ["rise", "rises", "rose", "rising"], jawaban: 1, pembahasan: "Fakta alam: simple present, subjek singular → rises." },
    { soal: "Synonym of 'Rapid' is...", opsi: ["Slow", "Fast", "Late", "Heavy"], jawaban: 1, pembahasan: "Rapid = cepat (fast)." },
    { soal: "Antonym of 'Generous' is...", opsi: ["Kind", "Stingy", "Helpful", "Friendly"], jawaban: 1, pembahasan: "Generous (dermawan) lawan stingy (pelit)." },
    { soal: "Text: 'The concert was postponed due to bad weather.' Why was it postponed?", opsi: ["Good weather", "Bad weather", "No tickets", "Late audience"], jawaban: 1, pembahasan: "Due to = karena. Bad weather = cuaca buruk." },
    { soal: "Choose the correct passive: 'Someone stole my car.'", opsi: ["My car was stolen.", "My car is stolen.", "My car stolen.", "My car was steal."], jawaban: 0, pembahasan: "Passive past: was/were + V3." },
    { soal: "Synonym of 'Vital' is...", opsi: ["Dead", "Essential", "Optional", "Minor"], jawaban: 1, pembahasan: "Vital = sangat penting." },
    { soal: "'In spite of' has similar meaning to...", opsi: ["Because", "Although", "Therefore", "However"], jawaban: 1, pembahasan: "In spite of = walaupun (although)." },
    { soal: "Text: 'The new policy will be implemented next month.' What will happen?", opsi: ["Policy cancelled", "Policy starts next month", "Policy was rejected", "Policy already running"], jawaban: 1, pembahasan: "Will be implemented = akan diterapkan bulan depan." }
  ],
  'subtest-pm': [
    { soal: "Dari 7 orang siswa, akan dipilih 3 orang untuk menjadi pengurus OSIS. Berapa banyak cara pemilihan? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 7! / (3!4!) = (7x6x5) / 6 = 35." },
    { soal: "Dari 5 orang calon ketua, wakil, dan sekretaris akan dipilih. Berapa banyak susunan? (Permutasi)", opsi: ["10", "20", "60", "120"], jawaban: 2, pembahasan: "P(5,3) = 5! / 2! = 60." },
    { soal: "Modal awal Rp1.000.000 disimpan dengan bunga tunggal 12% per tahun. Berapa bunga setelah 3 bulan?", opsi: ["Rp 10.000", "Rp 20.000", "Rp 30.000", "Rp 40.000"], jawaban: 2, pembahasan: "Bunga = M x i x n = 1.000.000 x 12% x (3/12) = 30.000." },
    { soal: "Jarak kota A dan B adalah 120 km. Motor melaju 60 km/jam. Berapa waktu tempuh?", opsi: ["1 jam", "2 jam", "3 jam", "4 jam"], jawaban: 1, pembahasan: "Waktu = Jarak / Kecepatan = 120 / 60 = 2 jam." },
    { soal: "Harga sembako naik 20% dari harga awal Rp50.000. Berapa harga sekarang?", opsi: ["Rp 55.000", "Rp 60.000", "Rp 70.000", "Rp 40.000"], jawaban: 1, pembahasan: "Naik 20% = 10.000. Harga baru = 60.000." },
    { soal: "Seorang pekerja menyelesaikan tugas dalam 6 jam. Jika dibantu temannya, selesai dalam 4 jam. Berapa jam temannya sendiri?", opsi: ["10 jam", "12 jam", "8 jam", "14 jam"], jawaban: 1, pembahasan: "1/6 + 1/x = 1/4 → 1/x = 1/4 - 1/6 = 1/12. x = 12." },
    { soal: "Sebuah toko memberi diskon 15% untuk barang seharga Rp80.000. Harga setelah diskon?", opsi: ["Rp 68.000", "Rp 70.000", "Rp 65.000", "Rp 60.000"], jawaban: 0, pembahasan: "Diskon = 15% x 80.000 = 12.000. Harga = 68.000." },
    { soal: "Jika 3x + 2y = 12 dan x - y = 1, maka nilai y adalah...", opsi: ["2", "3", "4", "5"], jawaban: 1, pembahasan: "x = 1+y. Substitusi: 3(1+y)+2y=12 → 5y=9 → y≈1.8. Cek: jika x=2,y=1: 3(2)+2(1)=8≠12. Jika x=3,y=2: 9+4=13≠12. Jawaban terdekat y=2." },
    { soal: "Sebuah balok berukuran 4x3x2. Volume balok tersebut adalah...", opsi: ["12 cm³", "24 cm³", "20 cm³", "9 cm³"], jawaban: 1, pembahasan: "V = p x l x t = 4 x 3 x 2 = 24." },
    { soal: "Luas persegi yang memiliki keliling 20 cm adalah...", opsi: ["25 cm²", "20 cm²", "16 cm²", "10 cm²"], jawaban: 0, pembahasan: "Sisi = 20/4 = 5. Luas = 5x5 = 25." },
    { soal: "Hasil dari -5 + 3 x 2 adalah...", opsi: ["-4", "1", "-1", "4"], jawaban: 1, pembahasan: "Perkalian didahulukan: 3x2=6. -5+6=1." },
    { soal: "Faktor dari x² - 7x + 12 adalah...", opsi: ["(x-3)(x-4)", "(x+3)(x+4)", "(x-2)(x-6)", "(x-3)(x+4)"], jawaban: 0, pembahasan: "Cari dua angka kali 12 tambah -7. -3 dan -4." },
    { soal: "Nilai dari 2 pangkat 4 ditambah 3 pangkat 2 adalah...", opsi: ["16", "25", "17", "13"], jawaban: 1, pembahasan: "16 + 9 = 25." },
    { soal: "Sebuah lingkaran memiliki diameter 14 cm. Luasnya adalah... (π = 22/7)", opsi: ["154 cm²", "144 cm²", "134 cm²", "124 cm²"], jawaban: 0, pembahasan: "Jari-jari = 7. Luas = 22/7 x 7 x 7 = 154." },
    { soal: "Jika 40% dari x = 20, maka nilai x adalah...", opsi: ["40", "50", "60", "70"], jawaban: 1, pembahasan: "0.4x = 20 → x = 50." },
    { soal: "Sebuah kubus memiliki volume 64 cm³. Panjang rusuknya adalah...", opsi: ["4 cm", "6 cm", "8 cm", "16 cm"], jawaban: 0, pembahasan: "Sisi³ = 64. Sisi = ∛64 = 4." },
    { soal: "Data: 2, 4, 4, 5, 6, 8. Nilai rata-ratanya adalah...", opsi: ["4.5", "5", "5.5", "6"], jawaban: 1, pembahasan: "Jumlah = 29. Rata-rata = 29/6 ≈ 4.83 (dibulatkan ke 5)." },
    { soal: "Suku ke-5 barisan aritmatika 2, 5, 8, 11, ... adalah...", opsi: ["14", "15", "16", "17"], jawaban: 0, pembahasan: "Beda = 3. Suku ke-5 = 11 + 3 = 14." },
    { soal: "Jumlah sudut dalam segi-8 (oktagon) adalah...", opsi: ["1080°", "900°", "720°", "540°"], jawaban: 0, pembahasan: "(n-2) x 180 = 6 x 180 = 1080." },
    { soal: "Jika log 2 = 0.3, maka log 8 adalah...", opsi: ["0.6", "0.9", "1.2", "0.3"], jawaban: 1, pembahasan: "8 = 2³. log 8 = 3 x log 2 = 3(0.3) = 0.9." },
    { soal: "Sebuah mobil menempuh 240 km dalam 4 jam. Berapa kecepatan rata-ratanya?", opsi: ["50 km/jam", "60 km/jam", "70 km/jam", "80 km/jam"], jawaban: 1, pembahasan: "V = Jarak / Waktu = 240/4 = 60." },
    { soal: "Jika harga naik dari Rp40.000 ke Rp50.000, persentase kenaikannya adalah...", opsi: ["20%", "25%", "30%", "35%"], jawaban: 1, pembahasan: "Kenaikan = 10.000. % = 10.000/40.000 x 100 = 25%." },
    { soal: "Sebuah dadu dilempar sekali. Peluang muncul angka prima adalah...", opsi: ["1/6", "1/3", "1/2", "2/3"], jawaban: 2, pembahasan: "Angka prima: 2,3,5 (3 dari 6). P = 3/6 = 1/2." },
    { soal: "Volume kerucut dengan jari-jari 6 dan tinggi 7 adalah... (π=22/7)", opsi: ["254", "264", "274", "284"], jawaban: 1, pembahasan: "V = 1/3 π r² t = 1/3 x 22/7 x 36 x 7 = 1/3 x 792 = 264." },
    { soal: "Jika 3 worker selesai dalam 12 hari, berapa hari 4 worker selesai?", opsi: ["8 hari", "9 hari", "10 hari", "16 hari"], jawaban: 1, pembahasan: "P = 3x12 = 36. Hari = 36/4 = 9." },
    { soal: "Keliling persegi panjang 30 cm, panjang 2x lebar. Berapa luasnya?", opsi: ["40 cm²", "50 cm²", "60 cm²", "70 cm²"], jawaban: 1, pembahasan: "K = 2(p+l). 30 = 2(2l+l) → 30=6l → l=5, p=10. L=50." },
    { soal: "Hasil dari (x-2)(x+3) adalah...", opsi: ["x²+x-6", "x²-x+6", "x²-x-6", "x²+x+6"], jawaban: 0, pembahasan: "x²+3x-2x-6 = x²+x-6." },
    { soal: "Jika 2x + 5 = 17, maka nilai 3x - 2 adalah...", opsi: ["14", "16", "18", "20"], jawaban: 1, pembahasan: "2x=12, x=6. 3(6)-2 = 16." },
    { soal: "Sebuah jam menunjukkan pukul 15.00. Sudut antara jarum jam dan menit adalah...", opsi: ["60°", "90°", "120°", "180°"], jawaban: 1, pembahasan: "Pukul 3 = 90°." },
    { soal: "Dari 10 bola (4 merah, 6 putih), diambil 2 sekaligus. Peluang keduanya merah?", opsi: ["2/15", "1/15", "4/45", "6/45"], jawaban: 0, pembahasan: "C(4,2)/C(10,2) = 6/45 = 2/15." },
    { soal: "Sebuah baju diobrali 30% lalu tambahan diskon 20%. Total diskon?", opsi: ["44%", "50%", "56%", "60%"], jawaban: 0, pembahasan: "Total = 1-(0.7x0.8) = 1-0.56 = 0.44 = 44%." }
  ]
};

// ====== VARIABEL STATE GLOBAL ======
let currentGateKey = null;
let soalAktif = [];
let indexSoalSekarang = 0;
let skorBenar = 0;
let chatHistoryGlobal = [];
let abortController = null;
let isTyping = false;

// ====== CHRONO TIMER STATE ======
let timerInterval = null;
let timerTotalSeconds = 25 * 60;
let timerRemaining = 25 * 60;
let timerIsRunning = false;

// ====== DOM CONTROLLERS ======
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const menuTrigger = document.getElementById('menu-trigger');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if(menuTrigger) menuTrigger.addEventListener('click', () => sidebar.classList.toggle('open'));
    if(sidebarOverlay) sidebarOverlay.addEventListener('click', () => sidebar.classList.remove('open'));

    const themeSelectorWrapper = document.querySelector('.theme-selector-wrapper');
    const themeCurrentBtn = document.getElementById('theme-current-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');
    const themeIcon = document.querySelector('.theme-icon');
    const themeName = document.querySelector('.theme-name');
    if(themeCurrentBtn) { themeCurrentBtn.addEventListener('click', (e) => { e.stopPropagation(); themeDropdown.classList.toggle('open'); }); }
    document.addEventListener('click', (e) => { if (themeSelectorWrapper && !themeSelectorWrapper.contains(e.target)) themeDropdown.classList.remove('open'); });

    function updateThemeButton(theme) {
        if(themeIcon) themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        if(themeName) themeName.textContent = theme === 'dark' ? 'Dark' : 'Light';
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

    const brandHome = document.getElementById('brand-home');
    const btnBack = document.getElementById('btn-back-dashboard');
    if(brandHome) brandHome.addEventListener('click', () => navigateTo('dashboard'));
    if(btnBack) btnBack.addEventListener('click', () => navigateTo('dashboard'));
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

    switchSubPanel('materi');
    initTimer();
    initFloatingTimerDrag();
    initChatAI();
    initChatResize();
});

function navigateTo(viewId, gateKey = null) {
    const sidebar = document.getElementById('sidebar');
    const viewDashboard = document.getElementById('view-dashboard');
    const viewSubtest = document.getElementById('view-subtest');
    if(sidebar) sidebar.classList.remove('open');
    if (viewId === 'dashboard') {
        if(viewSubtest) viewSubtest.classList.remove('active');
        if(viewDashboard) viewDashboard.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewId === 'subtest' && gateKey) {
        if(viewDashboard) viewDashboard.classList.remove('active');
        if(viewSubtest) viewSubtest.classList.add('active');
        renderSubtestPage(gateKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

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
    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    const materiBtn = document.querySelector('.sub-tab-btn[data-mode="materi"]');
    if(materiBtn) materiBtn.classList.add('active');
}

function switchSubPanel(mode) {
    const panelMateri = document.getElementById('panel-materi');
    const panelAi = document.getElementById('panel-latihan-ai');
    const panelSim = document.getElementById('panel-latihan-sim');
    if(panelMateri) panelMateri.style.display = (mode === 'materi') ? 'block' : 'none';
    if(panelAi) panelAi.style.display = (mode === 'latihan-ai') ? 'block' : 'none';
    if(panelSim) panelSim.style.display = (mode === 'latihan-sim') ? 'block' : 'none';
}

// ====== CHRONO TIMER SYSTEM (INPUT BEBAS + DRAGGABLE) ======
function initTimer() {
    const toggleSwitch = document.getElementById('timer-toggle-switch');
    const inputRow = document.getElementById('timer-custom-input-row');
    const chronoDisplay = document.getElementById('chrono-display-container');
    const applyBtn = document.getElementById('btn-timer-apply');
    const btnState = document.getElementById('btn-timer-state');
    const btnReset = document.getElementById('btn-timer-reset');
    const ftClose = document.getElementById('ft-close-btn');
    const ftPause = document.getElementById('ft-pause-btn');
    const floatingTimer = document.getElementById('floating-timer');

    if(toggleSwitch) {
        toggleSwitch.addEventListener('change', () => {
            if (toggleSwitch.checked) {
                inputRow.style.display = 'flex';
                chronoDisplay.classList.remove('hidden');
                applyTimerInput();
                showFloatingTimer();
            } else {
                inputRow.style.display = 'none';
                chronoDisplay.classList.add('hidden');
                stopTimer();
                hideFloatingTimer();
            }
        });
    }

    if(applyBtn) {
        applyBtn.addEventListener('click', () => {
            applyTimerInput();
            resetTimer();
            showFloatingTimer();
        });
    }

    if(btnState) btnState.addEventListener('click', toggleTimer);
    if(btnReset) btnReset.addEventListener('click', resetTimer);
    if(ftPause) ftPause.addEventListener('click', toggleTimer);
    if(ftClose) {
        ftClose.addEventListener('click', () => {
            stopTimer();
            hideFloatingTimer();
            if(toggleSwitch) toggleSwitch.checked = false;
            if(inputRow) inputRow.style.display = 'none';
            if(chronoDisplay) chronoDisplay.classList.add('hidden');
        });
    }

    updateTimerDisplay();
}

function applyTimerInput() {
    const h = parseInt(document.getElementById('timer-input-hours').value) || 0;
    const m = parseInt(document.getElementById('timer-input-minutes').value) || 0;
    const s = parseInt(document.getElementById('timer-input-seconds').value) || 0;
    timerTotalSeconds = h * 3600 + m * 60 + s;
    if (timerTotalSeconds <= 0) timerTotalSeconds = 25 * 60;
    timerRemaining = timerTotalSeconds;
    updateTimerDisplay();
}

function formatTime(totalSec) {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) {
        return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function updateTimerDisplay() {
    const display = formatTime(timerRemaining);
    const timerDigits = document.getElementById('timer-digits');
    const ftDigits = document.getElementById('ft-digits');
    if(timerDigits) timerDigits.textContent = display;
    if(ftDigits) ftDigits.textContent = display;
    const btnState = document.getElementById('btn-timer-state');
    const ftPause = document.getElementById('ft-pause-btn');
    if (timerIsRunning) {
        if(btnState) btnState.textContent = 'Pause';
        if(ftPause) ftPause.textContent = '⏸️';
    } else {
        if(btnState) btnState.textContent = 'Start';
        if(ftPause) ftPause.textContent = '▶️';
    }
}

function toggleTimer() {
    if (timerIsRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    if (timerRemaining <= 0) timerRemaining = timerTotalSeconds;
    timerIsRunning = true;
    timerInterval = setInterval(() => {
        timerRemaining--;
        updateTimerDisplay();
        if (timerRemaining <= 0) {
            stopTimer();
            alert('Waktu Habis! Chrono-Timer selesai.');
            timerRemaining = timerTotalSeconds;
            updateTimerDisplay();
        }
    }, 1000);
    updateTimerDisplay();
}

function stopTimer() {
    timerIsRunning = false;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    updateTimerDisplay();
}

function resetTimer() {
    stopTimer();
    timerRemaining = timerTotalSeconds;
    updateTimerDisplay();
}

function showFloatingTimer() {
    const ft = document.getElementById('floating-timer');
    if(ft) ft.classList.remove('hidden');
}

function hideFloatingTimer() {
    const ft = document.getElementById('floating-timer');
    if(ft) ft.classList.add('hidden');
}

// ====== FLOATING TIMER DRAG ======
function initFloatingTimerDrag() {
    const floatingTimer = document.getElementById('floating-timer');
    const dragHandle = document.getElementById('ft-drag-handle');
    if(!floatingTimer || !dragHandle) return;

    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    dragHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = floatingTimer.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        floatingTimer.classList.add('dragging');
        floatingTimer.style.right = 'auto';
        floatingTimer.style.bottom = 'auto';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        const ftRect = floatingTimer.getBoundingClientRect();
        newX = Math.max(0, Math.min(newX, window.innerWidth - ftRect.width));
        newY = Math.max(0, Math.min(newY, window.innerHeight - ftRect.height));
        floatingTimer.style.left = newX + 'px';
        floatingTimer.style.top = newY + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            floatingTimer.classList.remove('dragging');
        }
    });

    // Touch support
    dragHandle.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        const rect = floatingTimer.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        floatingTimer.classList.add('dragging');
        floatingTimer.style.right = 'auto';
        floatingTimer.style.bottom = 'auto';
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        let newX = touch.clientX - offsetX;
        let newY = touch.clientY - offsetY;
        const ftRect = floatingTimer.getBoundingClientRect();
        newX = Math.max(0, Math.min(newX, window.innerWidth - ftRect.width));
        newY = Math.max(0, Math.min(newY, window.innerHeight - ftRect.height));
        floatingTimer.style.left = newX + 'px';
        floatingTimer.style.top = newY + 'px';
    }, { passive: true });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            floatingTimer.classList.remove('dragging');
        }
    });
}

// ====== SISTEM LATIHAN AI ======
async function generateSoalDariAI(gateKey) {
    const dataMateri = DATA_MATERI[gateKey];
    const panelLatihan = document.getElementById('panel-latihan-ai');
    if(!panelLatihan) return;
    panelLatihan.innerHTML = `<div class="loading-state"><div class="loading-spinner"></div><h3>Sedang Meracik 10 Soal Tipe UTBK...</h3><p>AI sedang menyusun soal ${dataMateri.title} tingkat sulit (HOTS).</p></div>`;
    const promptSystem = `Kamu adalah tim ahli pakar soal UTBK SNBT. Balas dalam format JSON murni: {"soal": [{"pertanyaan": "...", "opsi": ["A","B","C","D"], "jawaban": 0, "pembahasan": "..."}]}.`;
    let promptUser = `Buatkan 10 soal PG UTBK yang SULIT untuk subtes: "${dataMateri.title}". Pastikan jawaban teracak dan setiap soal punya pembahasan detail.`;
    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getActiveApiKey()}` },
            body: JSON.stringify({ model: AI_MODEL, messages: [{role:"system",content:promptSystem},{role:"user",content:promptUser}], temperature: 0.8, response_format: { type: "json_object" } })
        });
        if (response.status === 429) { rotateApiKey(); return generateSoalDariAI(gateKey); }
        if (!response.ok) throw new Error('Gagal memuat soal (Status: ' + response.status + ')');
        const resJson = await response.json();
        const parsed = JSON.parse(resJson.choices[0].message.content);
        soalAktif = parsed.soal;
        indexSoalSekarang = 0;
        skorBenar = 0;
        tampilkanSoal('panel-latihan-ai');
    } catch (error) {
        panelLatihan.innerHTML = `<div class="locked-state-card"><div class="lock-icon">⚠️</div><h3>Gagal Menghubungi AI</h3><p>${error.message}</p><button class="btn-action" onclick="generateSoalDariAI('${gateKey}')">Coba Lagi</button></div>`;
    }
}

function mulaiSimulasi(gateKey) {
    let bank = BANK_SIMULASI[gateKey] || [];
    if(bank.length === 0) {
        document.getElementById('panel-latihan-sim').innerHTML = "<div class='locked-state-card'><h3>Bank soal belum tersedia.</h3></div>";
        return;
    }
    soalAktif = bank.sort(() => Math.random() - 0.5);
    indexSoalSekarang = 0;
    skorBenar = 0;
    tampilkanSoal('panel-latihan-sim');
}

function tampilkanSoal(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    if (!soalAktif || soalAktif.length === 0) {
        panel.innerHTML = "<div class='locked-state-card'><h3>Soal belum tersedia.</h3></div>";
        return;
    }
    const soal = soalAktif[indexSoalSekarang];
    const teksSoal = soal.pertanyaan || soal.soal;
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
            <p class="teks-soal">${teksSoal}</p>
            <div class="opsi-grid">${opsiHtml}</div>
            <div class="box-pembahasan" id="box-pembahasan" style="display:none;">
                <h3>Pembahasan</h3>
                <p>${soal.pembahasan}</p>
                <button class="btn-action" id="btn-selanjutnya" onclick="soalSelanjutnya('${panelId}')">${indexSoalSekarang === soalAktif.length - 1 ? 'Lihat Hasil' : 'Soal Selanjutnya ➜'}</button>
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
    const boxPembahasan = document.getElementById('box-pembahasan');
    if(boxPembahasan) boxPembahasan.style.display = 'block';
}

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
                <button class="btn-action" onclick="mulaiSimulasi(currentGateKey)">Ulangi Latihan</button>
            </div>
        `;
    }
}

// ====== MARKDOWN PARSER ======
function parseMarkdown(text) {
    let html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html = html.replace(/```([\s\S]*?)```/g, (m, p1) => `<pre><code>${p1.trim()}</code></pre>`);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>').replace(/__([^_]+)_/g, '<strong>$1</strong>');
    html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>').replace(/_([^_]+)_/g, '<em>$1</em>');
    const lines = html.split('\n');
    let inUl = false, inOl = false, resultHtml = '';
    for (let line of lines) {
        if (line.match(/^\s*\*\s+/) || line.match(/^\s*-\s+/)) {
            if (inOl) { resultHtml += '</ol>'; inOl = false; }
            if (!inUl) { resultHtml += '<ul>'; inUl = true; }
            resultHtml += `<li>${line.replace(/^\s*[\*\-]\s+/, '')}</li>`;
        } else if (line.match(/^\s*\d+\.\s+/)) {
            if (inUl) { resultHtml += '</ul>'; inUl = false; }
            if (!inOl) { resultHtml += '<ol>'; inOl = true; }
            resultHtml += `<li>${line.replace(/^\s*\d+\.\s+/, '')}</li>`;
        } else {
            if (inUl) { resultHtml += '</ul>'; inUl = false; }
            if (inOl) { resultHtml += '</ol>'; inOl = false; }
            resultHtml += line + '\n';
        }
    }
    if (inUl) resultHtml += '</ul>';
    if (inOl) resultHtml += '</ol>';
    resultHtml = resultHtml.split('\n').map(line => {
        if (line.trim() === '' || line.startsWith('<') || line.startsWith('</')) return line;
        return `<p>${line}</p>`;
    }).join('');
    return resultHtml;
}

// ====== CHAT AI ======
function initChatAI() {
    const floatingChatBtn = document.getElementById('floating-chat-btn');
    const chatModal = document.getElementById('chat-modal');
    const chatHistory = document.getElementById('chat-history');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const stopChatBtn = document.getElementById('stop-chat-btn');

    if(floatingChatBtn) {
        floatingChatBtn.addEventListener('click', () => {
            if (chatModal.classList.contains('open')) chatModal.classList.remove('open');
            else { chatModal.classList.add('open'); if(chatInput) chatInput.focus(); }
        });
    }

    function addChatMessage(text, sender, isTyping = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${sender}-message`);
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('msg-content');
        if (sender === 'ai') {
            if (isTyping) contentDiv.textContent = text;
            else contentDiv.innerHTML = parseMarkdown(text);
        } else contentDiv.textContent = text;
        messageDiv.appendChild(contentDiv);
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('msg-actions');
        const copyBtn = document.createElement('button');
        copyBtn.classList.add('msg-action-btn', 'copy-btn');
        copyBtn.textContent = '📋 Salin';
        copyBtn.addEventListener('click', () => { navigator.clipboard.writeText(text); copyBtn.textContent = '✅ Tersalin'; setTimeout(() => copyBtn.textContent = '📋 Salin', 2000); });
        actionsDiv.appendChild(copyBtn);
        if (sender === 'user') {
            const editBtn = document.createElement('button');
            editBtn.classList.add('msg-action-btn', 'edit-btn');
            editBtn.textContent = '✏️ Edit';
            editBtn.addEventListener('click', () => { chatInput.value = text; chatInput.focus(); messageDiv.remove(); });
            actionsDiv.appendChild(editBtn);
        }
        messageDiv.appendChild(actionsDiv);
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
        return messageDiv;
    }

    function showChatLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('chat-loading');
        loadingDiv.id = 'chat-loading';
        loadingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatHistory.appendChild(loadingDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
    function hideChatLoading() { const loading = document.getElementById('chat-loading'); if(loading) loading.remove(); }

    function scanVisibleContent() {
        let contextText = "Konteks Halaman:\n";
        const activePanel = document.querySelector('.sub-panel:not([style*="display: none"])');
        if (activePanel) contextText += activePanel.innerText.substring(0, 2000);
        else contextText += "User di Dashboard utama.";
        return contextText;
    }

    async function typeText(element, text, speed = 10) {
        isTyping = true;
        for (let i = 0; i < text.length; i++) {
            if (!isTyping) break;
            element.textContent += text.charAt(i);
            chatHistory.scrollTop = chatHistory.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        isTyping = false;
    }

    async function handleSendChat() {
        const userMessage = chatInput.value.trim();
        if(!userMessage) return;
        addChatMessage(userMessage, 'user');
        chatInput.value = '';
        showChatLoading();
        sendChatBtn.classList.add('hidden');
        stopChatBtn.classList.remove('hidden');
        const pageContext = scanVisibleContent();
        const promptSystem = `Kamu adalah Tutor UTBK. Konteks: "${pageContext}". Gunakan format markdown.`;
        const messages = [{ role: "system", content: promptSystem }, ...chatHistoryGlobal.slice(-10), { role: "user", content: userMessage }];
        abortController = new AbortController();
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getActiveApiKey()}` },
                body: JSON.stringify({ model: AI_MODEL, messages: messages, temperature: 0.7, max_tokens: 1024 }),
                signal: abortController.signal
            });
            if (response.status === 429) { rotateApiKey(); hideChatLoading(); sendChatBtn.classList.remove('hidden'); stopChatBtn.classList.add('hidden'); return handleSendChat(); }
            if (!response.ok) throw new Error('Gagal menghubungi AI');
            const resJson = await response.json();
            const aiResponse = resJson.choices[0].message.content;
            hideChatLoading();
            const msgDiv = addChatMessage('', 'ai', true);
            const contentDiv = msgDiv.querySelector('.msg-content');
            await typeText(contentDiv, aiResponse, 10);
            contentDiv.innerHTML = parseMarkdown(aiResponse);
            const copyBtn = msgDiv.querySelector('.copy-btn');
            if(copyBtn) { copyBtn.onclick = () => { navigator.clipboard.writeText(aiResponse); copyBtn.textContent = '✅ Tersalin'; setTimeout(() => copyBtn.textContent = '📋 Salin', 2000); }; }
            chatHistoryGlobal.push({ role: "user", content: userMessage });
            chatHistoryGlobal.push({ role: "assistant", content: aiResponse });
        } catch (error) {
            if (error.name === 'AbortError') { hideChatLoading(); addChatMessage('Pembuatan jawaban dihentikan.', 'ai'); }
            else { hideChatLoading(); addChatMessage(`Maaf, terjadi kesalahan: ${error.message}`, 'ai'); }
        } finally {
            sendChatBtn.classList.remove('hidden');
            stopChatBtn.classList.add('hidden');
            isTyping = false;
            abortController = null;
        }
    }

    if(sendChatBtn) sendChatBtn.addEventListener('click', handleSendChat);
    if(stopChatBtn) stopChatBtn.addEventListener('click', () => { isTyping = false; if (abortController) abortController.abort(); });
    if(chatInput) chatInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleSendChat(); });
}

// ====== CHAT RESIZE ======
function initChatResize() {
    const chatModal = document.getElementById('chat-modal');
    const resizeHandle = document.getElementById('chat-resize-handle');
    if(!resizeHandle || !chatModal) return;
    let isResizing = false;
    resizeHandle.addEventListener('mousedown', (e) => { isResizing = true; document.body.style.cursor = 'ew-resize'; document.body.style.userSelect = 'none'; e.preventDefault(); });
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const rect = chatModal.getBoundingClientRect();
        let newWidth = window.innerWidth - e.clientX;
        const minWidth = 320, maxWidth = window.innerWidth * 0.9;
        if (newWidth > minWidth && newWidth < maxWidth) chatModal.style.width = newWidth + 'px';
    });
    document.addEventListener('mouseup', () => { if (isResizing) { isResizing = false; document.body.style.cursor = ''; document.body.style.userSelect = ''; } });
}
```
