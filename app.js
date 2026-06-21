
// ====== KONFIGURASI API GROQ (MULTI-KEY ROTATION) ======
const API_KEYS = [
    "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",
    "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",
    "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",
    "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"
];

let currentKeyIndex = Math.floor(Math.random() * API_KEYS.length);
function getActiveApiKey() { return API_KEYS[currentKeyIndex]; }
function rotateApiKey() { currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length; return API_KEYS[currentKeyIndex]; }

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const AI_MODEL = "llama-3.3-70b-versatile";

// ====== MATERI UTBK ======
const DATA_MATERI = {
  'subtest-pu': {
    title: "Penalaran Umum (PU)", category: "TPS Module",
    desc: "Mengukur kemampuan penalaran logis (silogisme, premis), analitis (deret, permainan kata), dan penalaran kuantitatif.",
    htmlContent: `
      <div class="materi-card"><h2>Logika Silogisme & Premis</h2><p>Silogisme adalah penarikan kesimpulan dari dua premis.</p><ul><li><strong>Modus Ponens:</strong> Jika p maka q. p terjadi. Maka q terjadi.</li><li><strong>Modus Tollens:</strong> Jika p maka q. q tidak terjadi. Maka p tidak terjadi.</li><li><strong>Silogisme Rantai:</strong> p&rarr;q, q&rarr;r, maka p&rarr;r.</li><li><strong>Silogisme Partikular:</strong> Subjek disisihkan, predikat dipertahankan.</li></ul><h3>Jebakan Logika (Fallacies)</h3><ul><li><strong>Affirming the Consequent:</strong> Jika p maka q. q terjadi. Maka p terjadi (SALAH).</li><li><strong>Denying the Antecedent:</strong> Jika p maka q. p tidak terjadi. Maka q tidak terjadi (SALAH).</li></ul></div>
      <div class="materi-card"><h2>Penalaran Analitis: Deret</h2><ul><li><strong>Bertingkat:</strong> Selisih membentuk pola baru (+2, +4, +6, +8).</li><li><strong>Silang:</strong> Dua pola berselang-seling.</li><li><strong>Fibonacci:</strong> Suku ke-n = jumlah dua suku sebelumnya.</li><li><strong>Pangkat:</strong> n&sup2;, n&sup3;, atau kombinasi (n&sup2;+1).</li></ul></div>
      <div class="materi-card"><h2>Penalaran Analitis: Soal Cerita Logis</h2><p>Pengaturan posisi, pencocokan karakteristik, atau urutan peristiwa.</p><h3>Strategi</h3><ul><li><strong>Buat Tabel/Grid.</strong></li><li><strong>Tandai Clue Pasti vs Tidak Pasti.</strong></li><li><strong>Gunakan Eliminasi.</strong></li></ul></div>
      <div class="materi-card"><h2>Penalaran Kuantitatif (PU)</h2><ul><li><strong>Perbandingan Senilai & Berbalik Nilai.</strong></li><li><strong>Analisis Diagram Venn.</strong></li></ul></div>
      <div class="materi-card"><h2>Permainan Kata & Analogi</h2><ul><li><strong>Sinonim, Antonim, Part-Whole, Cause-Effect, Tool-Object.</strong></li></ul></div>
    `
  },
  'subtest-ppu': {
    title: "Pengetahuan & Pemahaman Umum (PPU)", category: "TPS Module",
    desc: "Mengukur penguasaan kosakata (sinonim, antonim), ejaan, dan tata bahasa praktis.",
    htmlContent: `
      <div class="materi-card"><h2>Kosakata Berbasis Konteks</h2><p>Soal PPU mencari sinonim kontekstual. Contoh: "peredaran" dalam "peredaran uang" berbeda dengan "peredaran darah".</p><h3>Kata Serapan Asing</h3><ul><li><strong>Quality</strong> &rarr; <code>kualitas</code></li><li><strong>Complex</strong> &rarr; <code>kompleks</code></li><li><strong>Technique</strong> &rarr; <code>teknik</code></li></ul></div>
      <div class="materi-card"><h2>Ejaan yang Disempurnakan (EYD V)</h2><ul><li><strong>"Di" sebagai awalan verba pasif:</strong> digabung (dimakan).</li><li><strong>"Di" sebagai preposisi tempat:</strong> dipisah (di rumah).</li><li><strong>Partikel "pun":</strong> Umumnya dipisah, kecuali meskipun, walaupun.</li></ul></div>
      <div class="materi-card"><h2>Tata Bahasa & Majas</h2><h3>Konjungsi Antarklausa</h3><ul><li><strong>Sebab-Akibat:</strong> karena, sehingga.</li><li><strong>Pertentangan:</strong> tetapi, sedangkan, namun.</li></ul><h3>Jenis Majas</h3><ul><li><strong>Metafora:</strong> Perbandingan langsung (anak emas).</li><li><strong>Personifikasi:</strong> Benda mati seolah hidup.</li><li><strong>Hiperbola:</strong> Melebih-lebihkan.</li><li><strong>Ironi:</strong> Sindiran halus.</li></ul></div>
      <div class="materi-card"><h2>Peribahasa & Pepatah</h2><ul><li><strong>Sambil menyelam minum air:</strong> Bekerja sambil mengambil kesempatan pribadi.</li><li><strong>Bagai aur dengan tebing:</strong> Saling membantu.</li><li><strong>Besar pasak daripada tiang:</strong> Pengeluaran lebih besar dari pemasukan.</li></ul></div>
    `
  },
  'subtest-pbm': {
    title: "Memahami Bacaan & Menulis (PBM)", category: "TPS Module",
    desc: "Mengukur kemampuan memahami teks, menemukan gagasan utama, dan menyusun kalimat efektif.",
    htmlContent: `
      <div class="materi-card"><h2>Kalimat Efektif</h2><ul><li><strong>Keseparasan:</strong> Subjek dan predikat harus jelas.</li><li><strong>Kehematan Kata:</strong> Hindari pleonasme ("agar supaya" salah).</li><li><strong>Kelogisan:</strong> Hindari kalimat ambigu.</li></ul></div>
      <div class="materi-card"><h2>Gagasan Utama & Kalimat Utama</h2><p>Letaknya bisa di awal (deduktif), akhir (induktif), atau awal-akhir (campuran).</p></div>
      <div class="materi-card"><h2>Teks Prosedur & Laporan</h2><p>Teks prosedur memuat langkah-langkah membuat sesuatu.</p></div>
      <div class="materi-card"><h2>Teks Argumentasi & Persuasi</h2><p>Teks argumentasi membuktikan pendapat dengan logis, persuasi membujuk.</p><ul><li><strong>Struktur:</strong> Tesis, Argumentasi, Penegasan ulang.</li></ul></div>
      <div class="materi-card"><h2>Teks Eksposisi & Berita</h2><p>Unsur Berita (5W+1H): Who, What, When, Where, Why, How.</p></div>
    `
  },
  'subtest-pk': {
    title: "Pengetahuan Kuantitatif (PK)", category: "TPS Module",
    desc: "Mengukur kemampuan matematika dasar: aljabar, aritmatika, geometri, dan statistik.",
    htmlContent: `
      <div class="materi-card"><h2>Aljabar & Aritmatika Sosial</h2><ul><li><strong>Untung:</strong> HJ &gt; HB. <strong>Rugi:</strong> HJ &lt; HB.</li><li><strong>Diskon:</strong> Harga &times; (1 &minus; %diskon).</li><li><strong>Bunga Tunggal:</strong> Bunga = Modal &times; i &times; n.</li></ul></div>
      <div class="materi-card"><h2>Deret Aritmatika & Geometri</h2><ul><li><strong>Suku ke-n Aritmatika:</strong> Un = a + (n&minus;1)b</li><li><strong>Jumlah n suku:</strong> Sn = n/2 &times; (2a + (n&minus;1)b)</li><li><strong>Geometri:</strong> Un = a &times; r<sup>n&minus;1</sup></li><li><strong>Deret tak hingga:</strong> S&infin; = a / (1 &minus; r)</li></ul></div>
      <div class="materi-card"><h2>Geometri & Trigonometri</h2><ul><li><strong>Pythagoras:</strong> a&sup2; + b&sup2; = c&sup2;.</li><li><strong>Lingkaran:</strong> Luas = &pi; r&sup2;. Keliling = 2 &pi; r.</li><li><strong>Tabung:</strong> Volume = &pi; r&sup2; t.</li></ul></div>
      <div class="materi-card"><h2>Statistika & Peluang</h2><ul><li><strong>Mean, Median, Modus, Kuartil.</strong></li><li><strong>Peluang:</strong> P(A) = n(A) / n(S).</li><li><strong>Permutasi:</strong> P(n,r) = n! / (n&minus;r)!</li><li><strong>Kombinasi:</strong> C(n,r) = n! / (r!(n&minus;r)!)</li></ul></div>
      <div class="materi-card"><h2>Logaritma & Eksponen</h2><h3>Sifat Eksponen</h3><ul><li>a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup></li><li>a<sup>m</sup> / a<sup>n</sup> = a<sup>m&minus;n</sup></li><li>a<sup>0</sup> = 1</li></ul><h3>Sifat Logaritma</h3><ul><li>log(a &times; b) = log a + log b</li><li>log(a / b) = log a &minus; log b</li><li>log(a<sup>n</sup>) = n &times; log a</li></ul></div>
    `
  },
  'subtest-indo': {
    title: "Literasi B. Indonesia", category: "Literasi Module",
    desc: "Mengukur kemampuan membaca kritis, evaluasi teks, dan sintesis informasi.",
    htmlContent: `
      <div class="materi-card"><h2>Membaca Kritis & Evaluatif</h2><ul><li><strong>Fakta vs Opini.</strong></li><li><strong>Menemukan Bias.</strong></li><li><strong>Sintesis & Parafrase.</strong></li></ul></div>
      <div class="materi-card"><h2>Teks Argumentasi & Persuasi</h2><ul><li><strong>Struktur:</strong> Tesis, Argumentasi, Penegasan.</li></ul></div>
      <div class="materi-card"><h2>Majas & Gaya Bahasa</h2><ul><li><strong>Hiperbola, Ironi, Sarkasme, Metafora, Personifikasi, Simile.</strong></li></ul></div>
      <div class="materi-card"><h2>Teknik Membaca</h2><ul><li><strong>Skimming:</strong> Gagasan utama. <strong>Scanning:</strong> Info spesifik.</li></ul></div>
    `
  },
  'subtest-inggris': {
    title: "Literasi B. Inggris", category: "Literasi Module",
    desc: "Mengukur kemampuan reading comprehension, critical reading, dan contextual vocabulary.",
    htmlContent: `
      <div class="materi-card"><h2>Critical Reading & Comprehension</h2><ul><li><strong>Main Idea, Inference, Contextual Vocabulary, Author's Tone & Purpose.</strong></li></ul></div>
      <div class="materi-card"><h2>Grammar & Structure</h2><h3>Conditional Sentences</h3><ul><li><strong>Type 0:</strong> Fakta alam. <strong>Type 1:</strong> Mungkin terjadi. <strong>Type 2:</strong> Tidak nyata. <strong>Type 3:</strong> Penyesalan.</li></ul><h3>Passive Voice: To be + V3.</h3></div>
      <div class="materi-card"><h2>Text Types</h2><ul><li><strong>Descriptive, Narrative, Procedure, Report, Recount, Exposition.</strong></li></ul></div>
      <div class="materi-card"><h2>Vocabulary & Idioms</h2><ul><li><strong>Piece of cake:</strong> Sangat mudah.</li><li><strong>Break a leg:</strong> Semoga sukses.</li></ul></div>
    `
  },
  'subtest-pm': {
    title: "Penalaran Matematika", category: "Literasi Module",
    desc: "Mengukur kemampuan pemecahan masalah matematika dalam konteks nyata.",
    htmlContent: `
      <div class="materi-card"><h2>Pemecahan Masalah Kontekstual</h2><ul><li><strong>Perbandingan & Skala.</strong></li><li><strong>Kecepatan, Jarak, Waktu.</strong></li><li><strong>Peluang Majemuk.</strong></li><li><strong>Barisan & Deret Aplikatif (Bunga Majemuk).</strong></li></ul></div>
      <div class="materi-card"><h2>Aljabar Terapan</h2><ul><li><strong>Sistem Persamaan Linear.</strong></li><li><strong>Fungsi Kuadrat:</strong> Maksimum/minimum.</li><li><strong>Fungsi:</strong> Komposisi dan invers.</li></ul></div>
      <div class="materi-card"><h2>Geometri Terapan</h2><ul><li><strong>Skala, Transformasi, Trigonometri (Sudut elevasi).</strong></li></ul></div>
      <div class="materi-card"><h2>Limit, Logaritma & Eksponen</h2><ul><li><strong>Limit:</strong> lim(x&rarr;a) f(x).</li><li><strong>Logaritma:</strong> &sup2;log 3 = a, maka &sup8;log 81 = 4a/3.</li><li><strong>Eksponen:</strong> Satuan dari 2<sup>2026</sup>.</li></ul></div>
    `
  }
};

// ====== BANK SOAL SIMULASI (SIMBOL HTML ENTITY) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Lima orang mahasiswa (A, B, C, D, E) mengikuti tryout dengan urutan peringkat 1-5. Jika A peringkatnya lebih baik dari B tapi lebih buruk dari C. D menempati peringkat tepat di tengah-tengah A dan E. E tidak juara 1 dan tidak terakhir. Jika E menempati peringkat 2, maka peringkat 1 adalah...", opsi: ["A", "B", "C", "D"], jawaban: 2, pembahasan: "Jika E = 2, dan C lebih baik dari A, dan A lebih baik dari B. Kemungkinan: C=1, E=2, A=3, D=4, B=5." },
    { soal: "Perhatikan syarat beasiswa berikut: (1) IPK minimal 3.50. (2) Skor TOEFL minimal 500. (3) Mendapat surat rekomendasi dari Dekan. Jika Andi memenuhi syarat 1 dan 3, namun TOEFL-nya baru 480, pernyataan yang benar adalah...", opsi: ["Andi pasti diterima", "Andi pasti ditolak", "Andi bisa diterima jika ada syarat yang dilonggarkan", "Andi harus mengulang TOEFL"], jawaban: 2, pembahasan: "Berdasarkan premis, Andi tidak memenuhi satu syarat. Maka dia bisa diterima jika ada pengecualian." },
    { soal: "Pada sebuah turnamen, jika Tim X menang melawan Y, maka Y tereliminasi. Jika Y tereliminasi, Z melaju ke final. Jika Z melaju ke final, Z akan melawan X. Diketahui Z tidak melawan X di final. Kesimpulan yang benar adalah...", opsi: ["X menang", "Y tidak tereliminasi", "Z tereliminasi", "X kalah"], jawaban: 1, pembahasan: "Silogisme rantai: p&rarr;q, q&rarr;r, r&rarr;s. ~s &rarr; ~r &rarr; ~q &rarr; ~p. Karena Z tidak melawan X (~s), maka Y tidak tereliminasi (~q)." },
    { soal: "Budi dipanggil sebelum Ani, tapi setelah Citra. Doni dipanggil terakhir. Eka dipanggil setelah Ani. Jika Doni dipanggil ke-5, dan Citra dipanggil pertama, urutan yang benar adalah...", opsi: ["Citra, Budi, Ani, Eka, Doni", "Citra, Ani, Budi, Eka, Doni", "Budi, Citra, Ani, Eka, Doni", "Citra, Budi, Eka, Ani, Doni"], jawaban: 0, pembahasan: "Citra (1) > Budi (2) > Ani (3) > Eka (4) > Doni (5)." },
    { soal: "Sebuah regu terdiri dari 4 orang: P, Q, R, S. Jika P bertugas sebagai penjaga, maka Q bertugas sebagai penyerang. Jika R bertugas sebagai penyerang, maka S tidak bisa menjadi penyerang. Jika Q tidak menjadi penyerang, maka R yang menjadi penyerang. Jika P bertugas sebagai penjaga, maka posisi S adalah...", opsi: ["Penyerang", "Penjaga", "Tidak bisa ditentukan", "Bebas"], jawaban: 2, pembahasan: "Jika P jaga &rarr; Q serang. Karena Q serang, R tidak serang. S bisa apa saja, posisi S tidak ditentukan." },
    { soal: "Semua siswa kelas 12 wajib mengikuti tryout. Sebagian siswa kelas 12 adalah anggota OSIS. Kesimpulan yang benar adalah...", opsi: ["Semua anggota OSIS wajib tryout", "Sebagian yang wajib tryout adalah anggota OSIS", "Sebagian anggota OSIS tidak wajib tryout", "Tidak ada yang wajib tryout"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika harga sembako naik, maka inflasi naik. Jika inflasi naik, maka BI rate naik. Diketahui BI rate tidak naik. Kesimpulan yang benar adalah...", opsi: ["Harga sembako naik", "Harga sembako turun", "Harga sembako tidak naik", "Inflasi tetap"], jawaban: 2, pembahasan: "Modus tollens berantai: p&rarr;q, q&rarr;r. ~r &rarr; ~q &rarr; ~p." },
    { soal: "Semua peserta ujian wajib membawa KTP. Sebagian peserta yang membawa KTP lupa membawa kartu ujian. Maka...", opsi: ["Semua peserta lupa kartu ujian", "Sebagian peserta ujian lupa membawa kartu ujian", "Tidak ada yang membawa KTP", "Semua yang lupa kartu ujian adalah peserta ujian"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika cuaca cerah, Budi bermain bola. Budi tidak bermain bola. Maka...", opsi: ["Cuaca cerah", "Cuaca tidak cerah", "Budi sakit", "Hujan deras"], jawaban: 1, pembahasan: "Modus tollens: p&rarr;q, ~q &rarr; ~p." },
    { soal: "Tidak ada ikan yang mamalia. Hiu adalah ikan. Paus adalah mamalia. Kesimpulan yang benar adalah...", opsi: ["Hiu adalah paus", "Hiu bukan mamalia", "Paus adalah ikan", "Paus adalah hiu"], jawaban: 1, pembahasan: "Semua ikan bukan mamalia, hiu adalah ikan, maka hiu bukan mamalia." },
    { soal: "Deret: 2, 6, 12, 20, 30, ...", opsi: ["40", "42", "44", "46"], jawaban: 1, pembahasan: "Selisih: +4, +6, +8, +10. Berikutnya +12. 30+12=42. Atau n(n+1): 6&times;7=42." },
    { soal: "Deret: 1, 4, 9, 16, 25, ...", opsi: ["30", "36", "42", "49"], jawaban: 1, pembahasan: "Pola kuadrat: 1&sup2;, 2&sup2;, 3&sup2;, 4&sup2;, 5&sup2;, 6&sup2;=36." },
    { soal: "Deret: 2, 3, 5, 7, 11, ...", opsi: ["12", "13", "14", "15"], jawaban: 1, pembahasan: "Deret bilangan prima." },
    { soal: "Deret: 100, 50, 25, 12.5, ...", opsi: ["6.25", "5", "7.5", "10"], jawaban: 0, pembahasan: "Deret geometri dibagi 2." },
    { soal: "Deret: 3, 6, 11, 18, 27, ...", opsi: ["36", "38", "40", "42"], jawaban: 1, pembahasan: "Selisih: +3, +5, +7, +9. Berikutnya +11. 27+11=38." },
    { soal: "A, C, E, G, I, ...", opsi: ["J", "K", "L", "M"], jawaban: 1, pembahasan: "Melompati satu huruf. I selanjutnya adalah K." },
    { soal: "Z, X, V, T, R, ...", opsi: ["Q", "P", "O", "N"], jawaban: 1, pembahasan: "Mundur dua huruf. R mundur dua = P." },
    { soal: "B, D, G, K, P, ...", opsi: ["U", "V", "W", "X"], jawaban: 1, pembahasan: "Selisih +2, +3, +4, +5, +6. P(16)+6=V(22)." },
    { soal: "Deret: 7, 14, 10, 20, 16, 32, ...", opsi: ["28", "30", "34", "36"], jawaban: 0, pembahasan: "Pola selang-seling: &times;2, &minus;4. 32&minus;4=28." },
    { soal: "Deret: 1, 1, 2, 3, 5, 8, 13, ...", opsi: ["18", "20", "21", "24"], jawaban: 2, pembahasan: "Fibonacci: 8+13=21." },
    { soal: "A, D, I, P, ...", opsi: ["U", "V", "W", "Y"], jawaban: 3, pembahasan: "Selisih +3, +5, +7, +9. P(16)+9=Y(25)." },
    { soal: "Deret: 81, 27, 9, 3, ...", opsi: ["0", "1", "2", "3"], jawaban: 1, pembahasan: "Geometri dibagi 3. 3&divide;3=1." },
    { soal: "Deret: 2, 5, 10, 17, 26, ...", opsi: ["35", "37", "36", "38"], jawaban: 1, pembahasan: "Pola n&sup2;+1: 6&sup2;+1=37." },
    { soal: "Jika A&gt;B dan B&gt;C, maka...", opsi: ["C&gt;A", "A&gt;C", "B=A", "A=C"], jawaban: 1, pembahasan: "Sifat transitif." },
    { soal: "Deret: 5, 10, 8, 16, 14, 28, ...", opsi: ["26", "30", "32", "24"], jawaban: 0, pembahasan: "Pola selang-seling: &times;2, &minus;2. 28&minus;2=26." }
  ],
  'subtest-ppu': [
    { soal: "Sinonim dari 'Bengis' adalah...", opsi: ["Ramah", "Kejam", "Pemalu", "Penakut"], jawaban: 1, pembahasan: "Bengis berarti keras/kejam." },
    { soal: "Sinonim dari 'Ekstensif' adalah...", opsi: ["Sempit", "Luas", "Dalam", "Tinggi"], jawaban: 1, pembahasan: "Ekstensif = luas." },
    { soal: "Sinonim dari 'Konvensional' adalah...", opsi: ["Modern", "Tradisional", "Futuristik", "Inovatif"], jawaban: 1, pembahasan: "Konvensional = bersifat tradisi/adat." },
    { soal: "Sinonim dari 'Prematur' adalah...", opsi: ["Tepat waktu", "Terlambat", "Lebih awal", "Sangat tua"], jawaban: 2, pembahasan: "Prematur = lahir/tumbuh sebelum waktunya." },
    { soal: "Sinonim dari 'Filantropis' adalah...", opsi: ["Pecinta uang", "Pecinta manusia", "Pecinta alam", "Pecinta diri"], jawaban: 1, pembahasan: "Filantropis = dermawan." },
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
    { soal: "Arti kata 'Kausa' dalam teks hukum adalah...", opsi: ["Kaos baju", "Penyebab", "Akibat", "Tuntutan"], jawaban: 1, pembahasan: "Kausa = sebab." },
    { soal: "Padanan kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Padanan kata 'Resiprokitas' adalah...", opsi: ["Saling menguntungkan", "Saling menukar", "Saling merugikan", "Hubungan timbal balik"], jawaban: 3, pembahasan: "Resiprokal = timbal balik." },
    { soal: "Kata 'Mitra' dalam konteks bisnis berarti...", opsi: ["Lawan", "Rekan kerja", "Pesaing", "Pembeli"], jawaban: 1, pembahasan: "Mitra = partner/rekan." },
    { soal: "Sinonim dari 'Fundamental' adalah...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Sinonim dari 'Ambigu' adalah...", opsi: ["Jelas", "Bermakna ganda", "Tegas", "Pasti"], jawaban: 1, pembahasan: "Ambigu = bermakna ganda." },
    { soal: "Antonim dari 'Optimis' adalah...", opsi: ["Positif", "Pesimis", "Realistis", "Apatis"], jawaban: 1, pembahasan: "Optimis lawan pesimis." },
    { soal: "Sinonim dari 'Relevan' adalah...", opsi: ["Berkaitan", "Terpisah", "Asing", "Jauh"], jawaban: 0, pembahasan: "Relevan = berhubungan/berkaitan." },
    { soal: "Peribahasa 'Bagai aur dengan tebing' bermakna...", opsi: ["Saling membantu", "Saling merusak", "Tidak peduli", "Bermusuhan"], jawaban: 0, pembahasan: "Saling membantu/membutuhkan." },
    { soal: "Sinonim dari 'Krusial' adalah...", opsi: ["Tambahan", "Sangat penting", "Biasa", "Kecil"], jawaban: 1, pembahasan: "Krusial = sangat penting." },
    { soal: "Penulisan kata depan yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Preposisi tempat ditulis terpisah." },
    { soal: "Majas yang menyindir dengan kata-kata berlawanan disebut...", opsi: ["Sarkasme", "Ironi", "Sinisme", "Satire"], jawaban: 1, pembahasan: "Ironi = sindiran halus dengan kata berlawanan." },
    { soal: "Sinonim dari 'Inovatif' adalah...", opsi: ["Kuno", "Kreatif/Pembaharuan", "Statis", "Tradisional"], jawaban: 1, pembahasan: "Inovatif = pembaharuan/kreatif." },
    { soal: "Antonim dari 'Generik' adalah...", opsi: ["Umum", "Spesifik", "Biasa", "Biasa"], jawaban: 1, pembahasan: "Generik = umum. Lawan spesifik/khusus." },
    { soal: "Peribahasa 'Tak bisa menari dikatakan lantai berbatu' menggambarkan...", opsi: ["Jujur", "Mencari alasan untuk kegagalan", "Kreatif", "Tekun"], jawaban: 1, pembahasan: "Mencari alasan untuk menutupi kelemahan diri." },
    { soal: "Sinonim dari 'Mudarat' adalah...", opsi: ["Bermanfaat", "Merugikan/Berbahaya", "Menenangkan", "Menyenangkan"], jawaban: 1, pembahasan: "Mudarat = merugikan/berbahaya." },
    { soal: "Padanan kata 'Eksplisit' adalah...", opsi: ["Tersirat", "Tersurat/Jelas", "Tersembunyi", "Samara"], jawaban: 1, pembahasan: "Eksplisit = tersurat/jelas." },
    { soal: "Antonim từ 'Marjinal' là...", opsi: ["Tepi", "Sentral/Penting", "Samping", "Pinggir"], jawaban: 1, pembahasan: "Marjinal = di tepi/tidak penting. Lawan sentral." }
  ],
  'subtest-pk': [
    { soal: "Nilai dari lim(x&rarr;3) (x&sup2; &minus; 9) / (x &minus; 3) adalah...", opsi: ["0", "3", "6", "9"], jawaban: 2, pembahasan: "Faktorkan: (x&minus;3)(x+3)/(x&minus;3) = x+3. Masukkan x=3: 3+3=6." },
    { soal: "Nilai dari lim(x&rarr;2) (x&sup2; &minus; 4) / (x&sup2; &minus; 2x) adalah...", opsi: ["1", "2", "4", "0"], jawaban: 1, pembahasan: "Faktorkan: (x&minus;2)(x+2) / x(x&minus;2) = (x+2)/x. Masukkan x=2: 4/2=2." },
    { soal: "Hasil dari lim(x&rarr;&infin;) (3x&sup2; &minus; 2x + 1) / (x&sup2; + 5) adalah...", opsi: ["0", "1", "3", "&infin;"], jawaban: 2, pembahasan: "Ambil koefisien pangkat tertinggi (x&sup2;): 3/1 = 3." },
    { soal: "Nilai lim(x&rarr;0) (sin 2x) / x adalah...", opsi: ["0", "1", "2", "1/2"], jawaban: 2, pembahasan: "lim(x&rarr;0) sin(ax)/x = a. Maka 2." },
    { soal: "Nilai dari lim(x&rarr;5) (&radic;(x+4) &minus; 3) / (x &minus; 5) adalah...", opsi: ["1/6", "6", "0", "1"], jawaban: 0, pembahasan: "Kalikan akar sekawan: (x+4&minus;9)/((x&minus;5)(&radic;(x+4)+3)) = 1/(&radic;(x+4)+3). Masukkan x=5: 1/(3+3)=1/6." },
    { soal: "Jika &sup2;log 3 = a dan &sup2;log 5 = b, maka nilai dari &sup2;log 45 adalah...", opsi: ["a + 2b", "2a + b", "a + b", "2ab"], jawaban: 0, pembahasan: "45 = 9 &times; 5 = 3&sup2; &times; 5. Maka &sup2;log 45 = 2&middot;&sup2;log 3 + &sup2;log 5 = 2a + b." },
    { soal: "Hasil dari &sup4;log 8 + &sup4;log 2 adalah...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup4;log(8&times;2) = &sup4;log 16 = 2 (karena 4&sup2;=16)." },
    { soal: "Jika &sup2;log 3 = a, maka &sup8;log 81 adalah...", opsi: ["a/3", "3a", "4a/3", "a"], jawaban: 2, pembahasan: "&sup8;log 81 = &sup3;&sup2;log 3&sup4; = (4/3) &times; &sup2;log 3 = 4a/3." },
    { soal: "Nilai dari &sup5;log 125 &minus; &sup5;log 5 adalah...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup5;log(125/5) = &sup5;log 25 = 2." },
    { soal: "Hasil dari (&sup2;log 3) &times; (&sup3;log 8) adalah...", opsi: ["&sup2;log 8", "&sup3;log 3", "&sup2;log 24", "1"], jawaban: 0, pembahasan: "Sifat rantai logaritma: &sup(a)log b &times; &sup(b)log c = &sup(a)log c. Maka &sup2;log 8 = 3." },
    { soal: "Satuan dari 2<sup>2026</sup> adalah...", opsi: ["2", "4", "6", "8"], jawaban: 1, pembahasan: "Pola satuan 2: 2,4,8,6 berulang tiap 4. 2026 mod 4 = 2. Maka satuan=4." },
    { soal: "Satuan dari 7<sup>3035</sup> adalah...", opsi: ["1", "3", "5", "7"], jawaban: 1, pembahasan: "Pola satuan 7: 7,9,3,1 berulang. 3035 mod 4 = 3. Maka satuan=3." },
    { soal: "Nilai dari 2<sup>3</sup> &times; 2<sup>&minus;2</sup> &times; 2<sup>0</sup> adalah...", opsi: ["1", "2", "4", "8"], jawaban: 1, pembahasan: "2<sup>(3&minus;2+0)</sup> = 2<sup>1</sup> = 2." },
    { soal: "Bentuk sederhana dari (x<sup>3</sup> &times; x<sup>5</sup>) / x<sup>6</sup> adalah...", opsi: ["x&sup2;", "x&sup4;", "x<sup>8</sup>", "x<sup>14</sup>"], jawaban: 0, pembahasan: "x<sup>(3+5&minus;6)</sup> = x&sup2;." },
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x&sup2; &minus; 1, maka nilai (g o f)(2) adalah...", opsi: ["14", "15", "47", "48"], jawaban: 2, pembahasan: "f(2) = 2(2)+3 = 7. g(7) = 7&sup2; &minus; 1 = 49&minus;1 = 48." },
    { soal: "Jika f(x) = (x&minus;2)/(x+3), x&ne;&minus;3, maka f&minus;<sup>1</sup>(x) adalah...", opsi: ["(3x+2)/(1&minus;x)", "(x+2)/(x&minus;3)", "(2x+3)/(1&minus;x)", "(x&minus;3)/(x+2)"], jawaban: 0, pembahasan: "y = (x&minus;2)/(x+3) &rarr; yx + 3y = x &minus; 2 &rarr; x(y&minus;1) = &minus;3y&minus;2 &rarr; x = (3y+2)/(1&minus;y). Maka f&minus;<sup>1</sup>(x) = (3x+2)/(1&minus;x)." },
    { soal: "Akar-akar persamaan kuadrat x&sup2; &minus; 5x + 6 = 0 adalah...", opsi: ["1 dan 6", "2 dan 3", "&minus;2 dan &minus;3", "2 dan &minus;3"], jawaban: 1, pembahasan: "(x&minus;2)(x&minus;3)=0. Maka x=2 atau x=3." },
    { soal: "Jumlah dan hasil kali akar persamaan 2x&sup2; &minus; 4x + 1 = 0 adalah...", opsi: ["2 dan 1/2", "4 dan 1", "2 dan 1", "&minus;2 dan &minus;1/2"], jawaban: 0, pembahasan: "Jumlah = &minus;b/a = 4/2 = 2. Hasil kali = c/a = 1/2." },
    { soal: "Sebuah barang dibeli dengan harga Rp200.000. Jika dijual dengan untung 15%, maka harga jualnya adalah...", opsi: ["Rp 215.000", "Rp 220.000", "Rp 225.000", "Rp 230.000"], jawaban: 3, pembahasan: "Untung = 15% &times; 200.000 = 30.000. Harga jual = 230.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang dalam 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = 8 &times; 12 = 96. Hari = 96/6 = 16 hari." },
    { soal: "Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Budi berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Budi akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko saat 07.00 = 60 km. Selisih kecepatan = 20 km/jam. Waktu susul = 60/20 = 3 jam. 07.00 + 3 = 10.00." },
    { soal: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah... (&pi; = 22/7)", opsi: ["1540 cm&sup3;", "1440 cm&sup3;", "1340 cm&sup3;", "1240 cm&sup3;"], jawaban: 0, pembahasan: "V = &pi; r&sup2; t = 22/7 &times; 7 &times; 7 &times; 10 = 22 &times; 70 = 1540." },
    { soal: "Jika sin x = 3/5 dan x sudut lancip, maka nilai cos x adalah...", opsi: ["3/4", "4/5", "5/4", "4/3"], jawaban: 1, pembahasan: "Cos x = &radic;(1 &minus; sin&sup2;x) = &radic;(1 &minus; 9/25) = &radic;(16/25) = 4/5." },
    { soal: "Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 adalah...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "6 muncul 3 kali (paling sering)." },
    { soal: "Median dari data: 3, 5, 7, 8, 10, 12, 15 adalah...", opsi: ["7", "8", "10", "12"], jawaban: 1, pembahasan: "Tengah dari 7 data adalah urutan ke-4: 8." },
    { soal: "Dari 5 buku matematika dan 4 buku fisika, akan dipilih 2 buku masing-masing satu. Berapa banyak cara memilih?", opsi: ["9", "16", "20", "24"], jawaban: 2, pembahasan: "C(5,1) &times; C(4,1) = 5 &times; 4 = 20." },
    { soal: "Jarak kota A dan B pada peta dengan skala 1:1.000.000 adalah 5 cm. Jarak sebenarnya adalah...", opsi: ["50 km", "500 km", "50 m", "5 km"], jawaban: 0, pembahasan: "5 cm &times; 1.000.000 = 5.000.000 cm = 50 km." },
    { soal: "Rata-rata nilai ujian 5 siswa adalah 80. Jika ditambah nilai seorang siswa baru menjadi 78, berapa nilai siswa baru tersebut?", opsi: ["68", "70", "72", "75"], jawaban: 0, pembahasan: "Total awal = 400. Total baru = 468. Nilai siswa baru = 68." }
  ],
  'subtest-pbm': [
    { soal: "Bacalah teks berikut!\n\n'Indonesia menghadapi tantangan besar dalam era revolusi industri 4.0. Otomasi dan digitalisasi menggantikan tenaga kerja manual. Menurut data BPS, sektor manufaktur menyerap 5% lebih sedikit tenaga kerja pada tahun 2023 dibandingkan 2020. Namun, sektor ekonomi digital justru tumbuh signifikan. Pemerintah perlu mendesain ulang kurikulum vokasi agar lulusan siap dengan kompetensi abad 21.'\n\nGagasan utama teks tersebut adalah...", opsi: ["Data BPS tentang penyerapan tenaga kerja", "Tantangan Indonesia di era revolusi industri 4.0", "Sektor ekonomi digital tumbuh signifikan", "Kurikulum vokasi perlu didesain ulang"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) ada di awal paragraf." },
    { soal: "Berdasarkan teks di atas, pernyataan yang merupakan fakta adalah...", opsi: ["Pemerintah perlu mendesain ulang kurikulum", "Sektor manufaktur menyerap 5% lebih sedikit tenaga kerja", "Lulusan siap dengan kompetensi abad 21", "Revolusi industri 4.0 adalah tantangan besar"], jawaban: 1, pembahasan: "Fakta berisi data/angka: BPS, 5%, 2023, 2020." },
    { soal: "Berdasarkan teks di atas, opini penulis terdapat pada kalimat...", opsi: ["Indonesia menghadapi tantangan besar", "Sektor manufaktur menyerap 5% lebih sedikit", "Sektor ekonomi digital tumbuh signifikan", "Pemerintah perlu mendesain ulang kurikulum"], jawaban: 3, pembahasan: "'Pemerintah perlu...' adalah pendapat/saran penulis." },
    { soal: "Bacalah paragraf berikut!\n\n'Sebagian besar masyarakat perkotaan mengandalkan kendaraan pribadi. Akibatnya, kemacetan tidak dapat dihindari terutama pada jam sibuk. Polusi udara pun meningkat drastis. Kemacetan dan polusi menjadi masalah serius yang harus segera ditangani.'\n\nKalimat utama paragraf tersebut terletak di...", opsi: ["Awal paragraf", "Tengah paragraf", "Akhir paragraf", "Tidak ada kalimat utama"], jawaban: 2, pembahasan: "Paragraf induktif: kalimat utama di akhir." },
    { soal: "Perbaiki kalimat: 'Bagi siswa yang rajin belajar akan lulus ujian.'", opsi: ["Bagi siswa rajin belajar, akan lulus ujian.", "Siswa yang rajin belajar akan lulus ujian.", "Bagi siswa yang rajin belajar lulus ujian.", "Siswa yang rajin belajar, akan lulus ujian."], jawaban: 1, pembahasan: "Hilangkan 'bagi' agar subjek 'siswa' jelas." },
    { soal: "Perbaiki kalimat: 'Sejak dari pagi dia sudah belajar.'", opsi: ["Sejak pagi dia sudah belajar.", "Sejak dari pagi, dia sudah belajar.", "Dari pagi dia sudah belajar.", "Sejak pagi, dia sudah belajar."], jawaban: 0, pembahasan: "Pleonasme. 'Sejak' dan 'dari' maknanya sama." },
    { soal: "Perbaiki kalimat: 'Karena hujan deras, maka dia tidak datang.'", opsi: ["Karena hujan deras, dia tidak datang.", "Hujan deras, maka dia tidak datang.", "Karena hujan deras maka dia tidak datang.", "Karena hujan deras, oleh karena itu dia tidak datang."], jawaban: 0, pembahasan: "Jangan gunakan 'karena' dan 'maka' bersamaan." },
    { soal: "Perbaikan kalimat ambigu: 'Ibu membawa tas ke pasar berwarna merah.'", opsi: ["Ibu berwarna merah membawa tas ke pasar.", "Ibu membawa tas berwarna merah ke pasar.", "Ke pasar ibu membawa tas merah.", "Tas merah dibawa ibu ke pasar."], jawaban: 1, pembahasan: "Penjelas harus berdekatan dengan yang dijelaskan (tas)." },
    { soal: "Perbaiki: 'Adik sangat gembira sekali melihat boneka baru.'", opsi: ["Adik gembira sekali", "Adik sangat gembira", "Adik sangat gembira sekali", "Adik gembira"], jawaban: 1, pembahasan: "Pleonasme: 'sangat' dan 'sekali' tidak perlu digabung." },
    { soal: "Kalimat yang subjeknya tidak jelas karena didahului preposisi 'bagi' disebut kalimat...", opsi: ["Ambigu", "Tidak efektif", "Pasif", "Rancu"], jawaban: 1, pembahasan: "Kalimat tidak efektif karena subjek tertutup preposisi." },
    { soal: "Perbaiki: 'Meskipun hujan, tetapi dia datang.'", opsi: ["Meskipun hujan, dia datang.", "Hujan, tetapi dia datang.", "Meskipun hujan tetapi dia datang.", "Walaupun hujan, tetapi dia datang."], jawaban: 0, pembahasan: "Jangan gunakan 'meskipun' dan 'tetapi' bersamaan." },
    { soal: "Perbaiki: 'Harga beras naik dan juga turun.'", opsi: ["Harga beras naik dan turun.", "Harga beras naik serta turun.", "Harga beras naik tetapi turun.", "Harga beras naik atau turun."], jawaban: 0, pembahasan: "Kata 'juga' tidak diperlukan setelah konjungsi 'dan'." },
    { soal: "Penulisan kata depan 'di' yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Preposisi tempat ditulis terpisah." },
    { soal: "Penulisan kata kerja pasif 'di' yang benar...", opsi: ["Di makan", "Dimakan", "Di-makan", "Dimakan oleh"], jawaban: 1, pembahasan: "Awalan 'di' pada kata kerja pasif digabung." },
    { soal: "Penulisan ejaan yang benar: 'Kedua orang tuanya pergi ke Jakarta'. Penulisan 'tuanya' seharusnya...", opsi: ["tuanya (benar)", "tua-nya", "tua nya", "tuanya (salah total)"], jawaban: 2, pembahasan: "Kata 'tua' dan 'nya' dipisah karena 'nya' sebagai penegas." },
    { soal: "Pemakaian huruf kapital yang benar...", opsi: ["Presiden Joko Widodo", "presiden Joko widodo", "Presiden joko Widodo", "Presiden Joko widodo"], jawaban: 0, pembahasan: "Gelar jabatan di awal kalimat dikapital, nama orang dikapital." },
    { soal: "Penggunaan tanda baca untuk kalimat langsung adalah...", opsi: ["Ia berkata saya lapar", "Ia berkata: 'Saya lapar.'", "Ia berkata saya lapar.", "Ia berkata; saya lapar."], jawaban: 1, pembahasan: "Kalimat langsung menggunakan titik dua (:) dan tanda kutip." },
    { soal: "Gagasan utama dalam sebuah paragraf disebut juga...", opsi: ["Kalimat penjelas", "Ide pokok", "Kesimpulan", "Opini"], jawaban: 1, pembahasan: "Gagasan utama = ide pokok." },
    { soal: "Teks yang bertujuan menjelaskan langkah-langkah membuat sesuatu disebut teks...", opsi: ["Eksposisi", "Deskripsi", "Prosedur", "Argumentasi"], jawaban: 2, pembahasan: "Teks prosedur memuat langkah-langkah." },
    { soal: "Majas yang membandingkan sesuatu dengan kata 'seperti' atau 'bagai' adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Personifikasi"], jawaban: 2, pembahasan: "Simile menggunakan kata pembanding eksplisit." },
    { soal: "Majas yang berarti melebih-lebihkan adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Litotes"], jawaban: 1, pembahasan: "Hiperbola adalah majas lebay." },
    { soal: "Sinonim dari kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Antonim dari kata 'Implisit' adalah...", opsi: ["Tersirat", "Tersurat", "Samara", "Tersembunyi"], jawaban: 1, pembahasan: "Implisit (tersirat), lawannya eksplisit (tersurat)." }
  ],
  'subtest-indo': [
    { soal: "Bacalah teks berikut dengan saksama!\n\n'Tumbuhan hijau melakukan fotosintesis untuk menghasilkan makanan. Proses ini memerlukan cahaya matahari, air, dan karbon dioksida. Namun, polusi udara yang berlebihan dapat menghambat proses ini. Partikel smog menutupi permukaan daun sehingga stomata sulit menyerap CO2. Selain itu, hujan asam yang diakibatkan oleh polusi dapat merusak klorofil. Akibatnya, pertumbuhan tanaman terhambat dan produktivitas pertanian menurun.'\n\nGagasan utama teks tersebut adalah...", opsi: ["Proses fotosintesis pada tumbuhan", "Pengaruh polusi udara terhadap fotosintesis", "Fungsi stomata pada daun", "Hujan asam merusak klorofil"], jawaban: 1, pembahasan: "Teks membahas sebab-akibat: polusi menghambat fotosintesis." },
    { soal: "Berdasarkan teks di atas, pernyataan yang merupakan opini adalah...", opsi: ["Tumbuhan hijau melakukan fotosintesis", "Proses ini memerlukan cahaya matahari", "Polusi udara yang berlebihan dapat menghambat proses ini", "Partikel smog menutupi permukaan daun"], jawaban: 2, pembahasan: "Meskipun masuk akal, 'dapat menghambat' adalah kesimpulan/penilaian penulis (opini), bukan data mentah." },
    { soal: "Berdasarkan teks di atas, hubungan kausalitas (sebab-akibat) terdapat pada...", opsi: ["Hujan asam merusak klorofil", "Tumbuhan melakukan fotosintesis", "Stomata menyerap CO2", "Cahaya matahari dibutuhkan"], jawaban: 0, pembahasan: "Hujan asam (sebab) &rarr; merusak klorofil (akibat)." },
    { soal: "Bacalah teks berikut!\n\n'Globalisasi membawa dampak ganda bagi ekonomi lokal. Di satu sisi, akses pasar yang lebih luas membuka peluang bagi UMKM untuk berkembang. Di sisi lain, masuknya produk asing yang lebih murah mengancam keberlangsungan produksi dalam negeri. Oleh karena itu, pemerintah perlu memberikan perlindungan dan subsidi agar UMKM dapat bersaing.'\n\nSimpulan yang tepat dari teks tersebut adalah...", opsi: ["Globalisasi hanya membawa dampak negatif", "UMKM tidak mampu bersaing dengan produk asing", "Perlindungan pemerintah diperlukan agar UMKM bertahan di era globalisasi", "Produk asing selalu lebih murah dari produk dalam negeri"], jawaban: 2, pembahasan: "Simpulan harus mencakup keseluruhan teks: ada tantangan, perlu solusi (perlindungan)." },
    { soal: "Teks: 'Edukasi karakter sangat penting untuk membentuk generasi yang tangguh. Tanpa karakter kuat, ilmu yang didapatkan justru bisa merugikan.' Gagasan utama teks tersebut adalah...", opsi: ["Generasi tangguh butuh ilmu", "Pentingnya edukasi karakter", "Ilmu tanpa karakter merugikan", "Integritas bagian dari pendidikan"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) berada di awal paragraf." },
    { soal: "Teks: 'Polusi udara di Jakarta meningkat. Hal ini ditandai dengan menipisnya lapisan ozon. Dampaknya, penyakit pernapasan meningkat.' Simpulan yang tepat dari teks adalah...", opsi: ["Lapisan ozon menipis karena polusi", "Polusi udara berdampak pada kesehatan pernapasan", "Jakarta kota terpolusi", "Penyakit pernapasan memicu polusi"], jawaban: 1, pembahasan: "Simpulan harus mencakup sebab dan akibat." },
    { soal: "Teks: 'Penanaman pohon di perkotaan mampu mengurangi efek rumah kaca. Selain itu, pohon juga menyejukkan udara.' Hubungan kedua kalimat tersebut adalah...", opsi: ["Sebab-akibat", "Kesimpulan", "Sejajar (menambahkan)", "Perbandingan"], jawaban: 2, pembahasan: "Kata 'Selain itu' menandakan penambahan argumen." },
    { soal: "Teks: 'Berdasarkan riset, siswa yang tidur 8 jam memiliki fokus 40% lebih baik.' Pernyataan ini merupakan bagian dari teks...", opsi: ["Opini", "Fakta", "Fiksi", "Argumentasi subjektif"], jawaban: 1, pembahasan: "Berdasarkan riset dan data persentase = fakta." },
    { soal: "Teks: 'Menurut saya, cuaca hari ini terlalu panas untuk berolahraga.' Pernyataan ini merupakan...", opsi: ["Fakta", "Opini", "Data", "Argumentasi logis"], jawaban: 1, pembahasan: "'Menurut saya' = penilaian pribadi (opini)." },
    { soal: "Membaca untuk menemukan informasi spesifik seperti nama atau angka pada teks disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 1, pembahasan: "Scanning = mencari detail spesifik dengan cepat." },
    { soal: "Membaca untuk memahami intisari atau gagasan utama bacaan disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 0, pembahasan: "Skimming = membaca cepat untuk mendapat inti." },
    { soal: "Teks argumentasi yang menampilkan pendapat penulis di awal menggunakan pola...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Tesis di awal lalu argumen = deduktif." },
    { soal: "Dalam teks eksposisi, penulis biasanya menggunakan pola pengembangan berupa...", opsi: ["Kronologis", "Sebab-akibat", "Definisi dan uraian", "Alur cerita"], jawaban: 2, pembahasan: "Teks eksposisi mengembangkan gagasan melalui definisi dan uraian." },
    { soal: "Dalam karya ilmiah, bagian yang berisi latar belakang masalah dan tujuan penelitian terdapat di bab...", opsi: ["Bab I", "Bab II", "Bab III", "Bab IV"], jawaban: 0, pembahasan: "Pendahuluan berisi latar belakang dan tujuan." },
    { soal: "Menyimpulkan isi teks dengan bahasa sendiri tanpa mengubah maksud asli disebut...", opsi: ["Meringkas", "Memparafrasekan", "Mengevaluasi", "Mensintesis"], jawaban: 1, pembahasan: "Memparafrasekan = menulis ulang dengan bahasa sendiri." },
    { soal: "Menggabungkan informasi dari beberapa teks untuk membentuk kesimpulan baru disebut...", opsi: ["Analisis", "Sintesis", "Evaluasi", "Aplikasi"], jawaban: 1, pembahasan: "Sintesis menggabungkan berbagai sumber." },
    { soal: "Sinonim dari kata 'Fundamental' dalam konteks teks akademis adalah...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Antonim dari kata 'Konvensional' adalah...", opsi: ["Tradisional", "Modern/Inovatif", "Umum", "Lama"], jawaban: 1, pembahasan: "Konvensional = tradisional. Lawannya modern." },
    { soal: "Majas yang memberikan sifat manusia pada benda mati disebut...", opsi: ["Metafora", "Personifikasi", "Simile", "Hiperbola"], jawaban: 1, pembahasan: "Personifikasi = benda mati seolah hidup." }
  ],
  'subtest-inggris': [
    { soal: "Read the following text!\n\n'Climate change has become an undeniable global crisis. Rising sea levels, extreme weather events, and shifting agricultural zones are just a few of its consequences. While developed nations have historically contributed the most to greenhouse gas emissions, developing countries often bear the brunt of the impact. This inequality has sparked debates about climate justice and the responsibility of wealthy nations to provide financial and technological support to vulnerable regions. Without collective action, the goal of limiting global warming to 1.5 degrees Celsius will remain elusive.'\n\nWhat is the main idea of the text?", opsi: ["Developed nations cause the most pollution", "Climate change is a global crisis requiring collective action and justice", "Sea levels are rising rapidly", "Developing countries cannot handle climate change"], jawaban: 1, pembahasan: "The text discusses climate change as a crisis and the need for collective action and justice." },
    { soal: "Based on the text, what can be inferred about 'climate justice'?", opsi: ["It means planting more trees", "It involves wealthy nations helping vulnerable regions", "It is about stopping industrialization", "It refers to weather forecasting"], jawaban: 1, pembahasan: "The text mentions 'responsibility of wealthy nations to provide financial... support to vulnerable regions'." },
    { soal: "The word 'elusive' in the last sentence is closest in meaning to...", opsi: ["Easy to achieve", "Difficult to achieve", "Unnecessary", "Already done"], jawaban: 1, pembahasan: "Elusive = sulit dicapai/didapat." },
    { soal: "Read the text!\n\n'The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the way information was disseminated. Before this, books were copied by hand, making them rare and expensive. The printing press allowed for mass production of texts, leading to increased literacy rates and the rapid spread of new ideas during the Renaissance.'\n\nWhat was the main effect of the printing press?", opsi: ["Books became more expensive", "Books became rare", "Information spread faster and literacy increased", "People stopped reading"], jawaban: 2, pembahasan: "The text states it led to 'increased literacy rates and rapid spread of new ideas'." },
    { soal: "I wish I ___ harder for the UTBK exam last year.", opsi: ["study", "studied", "had studied", "would study"], jawaban: 2, pembahasan: "Penyesalan masa lalu: wish + past perfect (had V3)." },
    { soal: "If she ___, she would come to the party.", opsi: ["knows", "knew", "had known", "known"], jawaban: 1, pembahasan: "Conditional type 2 (hypothetical present), verb 2." },
    { soal: "If I ___ a bird, I would fly to you.", opsi: ["am", "was", "were", "be"], jawaban: 2, pembahasan: "Conditional type 2 selalu pakai 'were'." },
    { soal: "My brother, ___ lives in Jakarta, is a doctor.", opsi: ["who", "whom", "which", "whose"], jawaban: 0, pembahasan: "Relative pronoun untuk subjek manusia." },
    { soal: "The book ___ by the teacher yesterday.", opsi: ["is bought", "was bought", "bought", "is buying"], jawaban: 1, pembahasan: "Passive voice past tense: was/were + V3." },
    { soal: "Choose the correct passive: 'Someone stole my car.'", opsi: ["My car was stolen.", "My car is stolen.", "My car stolen.", "My car was steal."], jawaban: 0, pembahasan: "Passive past: was/were + V3." },
    { soal: "She has been studying ___ 3 hours.", opsi: ["for", "since", "from", "at"], jawaban: 0, pembahasan: "Durasi waktu menggunakan 'for'." },
    { soal: "The meeting will be held ___ Monday morning.", opsi: ["in", "on", "at", "for"], jawaban: 1, pembahasan: "Hari spesifik menggunakan 'on'." },
    { soal: "He said, 'I am happy.' (Change to reported speech)", opsi: ["He said he is happy", "He said he was happy", "He said I was happy", "He says he was happy"], jawaban: 1, pembahasan: "Reported speech: tense mundur 1 tingkat. am &rarr; was." },
    { soal: "Synonym of 'Abundant' is...", opsi: ["Scarce", "Plentiful", "Empty", "Small"], jawaban: 1, pembahasan: "Abundant = melimpah (plentiful)." },
    { soal: "Antonym of 'Artificial' is...", opsi: ["Fake", "Natural", "Synthetic", "Man-made"], jawaban: 1, pembahasan: "Artificial (buatan) lawan Natural." },
    { soal: "Synonym of 'Crucial' is...", opsi: ["Unimportant", "Essential", "Secondary", "Optional"], jawaban: 1, pembahasan: "Crucial = sangat penting." },
    { soal: "Antonym of 'Ancient' is...", opsi: ["Old", "Modern", "Historical", "Classic"], jawaban: 1, pembahasan: "Ancient (kuno) lawan Modern." },
    { soal: "Synonym of 'Diligent' is...", opsi: ["Lazy", "Hardworking", "Careless", "Slow"], jawaban: 1, pembahasan: "Diligent = rajin (hardworking)." },
    { soal: "Choose the correct sentence:", opsi: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."], jawaban: 2, pembahasan: "She + doesn't + V1." },
    { soal: "The author's tone in a scientific fact report is usually...", opsi: ["Optimistic", "Subjective", "Objective", "Pessimistic"], jawaban: 2, pembahasan: "Laporan ilmiah bersifat objektif." },
    { soal: "Choose: 'The sun ___ in the east.'", opsi: ["rise", "rises", "rose", "rising"], jawaban: 1, pembahasan: "Fakta alam: simple present, subjek singular &rarr; rises." },
    { soal: "Text: 'Smoking is prohibited in this area.' What does it mean?", opsi: ["You can smoke here", "You must not smoke here", "Smoking is allowed outside", "Smoking is recommended"], jawaban: 1, pembahasan: "Prohibited = dilarang." },
    { soal: "The past tense of 'Write' is...", opsi: ["Wrote", "Written", "Writed", "Writing"], jawaban: 0, pembahasan: "V2 dari write = wrote." }
  ],
  'subtest-pm': [
    { soal: "Nilai dari lim(x&rarr;3) (x&sup2; &minus; 9) / (x &minus; 3) adalah...", opsi: ["0", "3", "6", "9"], jawaban: 2, pembahasan: "Faktorkan: (x&minus;3)(x+3)/(x&minus;3) = x+3. Masukkan x=3: 6." },
    { soal: "Nilai dari lim(x&rarr;2) (x&sup2; &minus; 4) / (x&sup2; &minus; 2x) adalah...", opsi: ["1", "2", "4", "0"], jawaban: 1, pembahasan: "Faktorkan: (x+2)/x. Masukkan x=2: 4/2=2." },
    { soal: "Hasil dari lim(x&rarr;&infin;) (3x&sup2; &minus; 2x + 1) / (x&sup2; + 5) adalah...", opsi: ["0", "1", "3", "&infin;"], jawaban: 2, pembahasan: "Ambil koefisien pangkat tertinggi (x&sup2;): 3/1 = 3." },
    { soal: "Nilai lim(x&rarr;0) (sin 2x) / x adalah...", opsi: ["0", "1", "2", "1/2"], jawaban: 2, pembahasan: "lim(x&rarr;0) sin(ax)/x = a. Maka 2." },
    { soal: "Nilai dari lim(x&rarr;5) (&radic;(x+4) &minus; 3) / (x &minus; 5) adalah...", opsi: ["1/6", "6", "0", "1"], jawaban: 0, pembahasan: "Kalikan akar sekawan: 1/(&radic;(x+4)+3). Masukkan x=5: 1/6." },
    { soal: "Jika &sup2;log 3 = a dan &sup²;log 5 = b, maka nilai dari &sup2;log 45 adalah...", opsi: ["a + 2b", "2a + b", "a + b", "2ab"], jawaban: 0, pembahasan: "45 = 9 &times; 5 = 3&sup2; &times; 5. Maka &sup²;log 45 = 2&middot;&sup²;log 3 + &sup²;log 5 = 2a + b." },
    { soal: "Hasil dari &sup4;log 8 + &sup4;log 2 adalah...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup4;log(8&times;2) = &sup4;log 16 = 2." },
    { soal: "Jika &sup²;log 3 = a, maka &sup8;log 81 adalah...", opsi: ["a/3", "3a", "4a/3", "a"], jawaban: 2, pembahasan: "&sup8;log 81 = &sup3;&sup²;log 3&sup4; = (4/3) &times; &sup²;log 3 = 4a/3." },
    { soal: "Nilai dari &sup5;log 125 &minus; &sup5;log 5 adalah...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup5;log(125/5) = &sup5;log 25 = 2." },
    { soal: "Hasil dari (&sup²;log 3) &times; (&sup3;log 8) adalah...", opsi: ["&sup²;log 8", "&sup³;log 3", "&sup²;log 24", "1"], jawaban: 0, pembahasan: "Sifat rantai: &sup²;log 8 = 3." },
    { soal: "Satuan dari 2<sup>2026</sup> adalah...", opsi: ["2", "4", "6", "8"], jawaban: 1, pembahasan: "Pola satuan 2: 2,4,8,6 berulang tiap 4. 2026 mod 4 = 2. Maka satuan=4." },
    { soal: "Satuan dari 7<sup>3035</sup> adalah...", opsi: ["1", "3", "5", "7"], jawaban: 1, pembahasan: "Pola satuan 7: 7,9,3,1 berulang. 3035 mod 4 = 3. Maka satuan=3." },
    { soal: "Nilai dari 2<sup>3</sup> &times; 2<sup>&minus;2</sup> &times; 2<sup>0</sup> adalah...", opsi: ["1", "2", "4", "8"], jawaban: 1, pembahasan: "2<sup>(3&minus;2+0)</sup> = 2<sup>1</sup> = 2." },
    { soal: "Bentuk sederhana dari (x<sup>3</sup> &times; x<sup>5</sup>) / x<sup>6</sup> adalah...", opsi: ["x&sup2;", "x&sup4;", "x<sup>8</sup>", "x<sup>14</sup>"], jawaban: 0, pembahasan: "x<sup>(3+5&minus;6)</sup> = x&sup2;." },
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x&sup2; &minus; 1, maka nilai (g o f)(2) adalah...", opsi: ["14", "15", "47", "48"], jawaban: 2, pembahasan: "f(2) = 7. g(7) = 49&minus;1 = 48." },
    { soal: "Jika f(x) = (x&minus;2)/(x+3), x&ne;&minus;3, maka f&minus;<sup>1</sup>(x) adalah...", opsi: ["(3x+2)/(1&minus;x)", "(x+2)/(x&minus;3)", "(2x+3)/(1&minus;x)", "(x&minus;3)/(x+2)"], jawaban: 0, pembahasan: "y = (x&minus;2)/(x+3) &rarr; x = (3y+2)/(1&minus;y). Maka f&minus;<sup>1</sup>(x) = (3x+2)/(1&minus;x)." },
    { soal: "Akar-akar persamaan kuadrat x&sup2; &minus; 5x + 6 = 0 adalah...", opsi: ["1 dan 6", "2 dan 3", "&minus;2 dan &minus;3", "2 dan &minus;3"], jawaban: 1, pembahasan: "(x&minus;2)(x&minus;3)=0. Maka x=2 atau x=3." },
    { soal: "Jumlah dan hasil kali akar persamaan 2x&sup2; &minus; 4x + 1 = 0 adalah...", opsi: ["2 dan 1/2", "4 dan 1", "2 dan 1", "&minus;2 dan &minus;1/2"], jawaban: 0, pembahasan: "Jumlah = &minus;b/a = 2. Hasil kali = c/a = 1/2." },
    { soal: "Dari 7 orang siswa, akan dipilih 3 orang untuk menjadi pengurus OSIS. Berapa banyak cara pemilihan yang mungkin? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 7! / (3!4!) = 35." },
    { soal: "Dari 5 orang calon ketua, wakil, dan sekretaris akan dipilih. Berapa banyak susunan yang mungkin? (Permutasi)", opsi: ["10", "20", "60", "120"], jawaban: 2, pembahasan: "P(5,3) = 5! / 2! = 60." },
    { soal: "Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Budi berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Budi akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko saat 07.00 = 60 km. Selisih = 20 km/jam. Waktu susul = 3 jam. 07.00 + 3 = 10.00." },
    { soal: "Harga sembako naik 20% dari harga awal Rp50.000. Berapa harga sekarang?", opsi: ["Rp 55.000", "Rp 60.000", "Rp 70.000", "Rp 40.000"], jawaban: 1, pembahasan: "Naik 20% = 10.000. Harga baru = 60.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang dalam 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = 8 &times; 12 = 96. Hari = 96/6 = 16 hari." },
    { soal: "Jarak kota A dan B pada peta dengan skala 1:1.000.000 adalah 5 cm. Jarak sebenarnya adalah...", opsi: ["50 km", "500 km", "50 m", "5 km"], jawaban: 0, pembahasan: "5 cm &times; 1.000.000 = 50 km." },
    { soal: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah... (&pi; = 22/7)", opsi: ["1540 cm&sup3;", "1440 cm&sup3;", "1340 cm&sup3;", "1240 cm&sup3;"], jawaban: 0, pembahasan: "V = &pi; r&sup2; t = 1540." },
    { soal: "Jika sin x = 3/5 dan x sudut lancip, maka nilai cos x adalah...", opsi: ["3/4", "4/5", "5/4", "4/3"], jawaban: 1, pembahasan: "Cos x = &radic;(1 &minus; sin&sup2;x) = 4/5." },
    { soal: "Sebuah segitiga siku-siku memiliki sisi 3 cm dan 4 cm. Panjang sisi miringnya adalah...", opsi: ["5 cm", "6 cm", "7 cm", "8 cm"], jawaban: 0, pembahasan: "Pythagoras: &radic;(3&sup2; + 4&sup2;) = 5." },
    { soal: "Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 adalah...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "6 muncul 3 kali." },
    { soal: "Median dari data: 3, 5, 7, 8, 10, 12, 15 là...", opsi: ["7", "8", "10", "12"], jawaban: 1, pembahasan: "Tengah dari 7 data: urutan ke-4 = 8." },
    { soal: "Dari 5 buku matematika dan 4 buku fisika, akan dipilih 2 buku masing-masing satu. Berapa banyak cara memilih?", opsi: ["9", "16", "20", "24"], jawaban: 2, pembahasan: "5 &times; 4 = 20." },
    { soal: "Rata-rata nilai ujian 5 siswa là 80. Jika ditambah nilai seorang siswa baru menjadi 78, berapa nilai siswa baru tersebut?", opsi: ["68", "70", "72", "75"], jawaban: 0, pembahasan: "Total awal = 400. Total baru = 468. Siswa baru = 68." },
    { soal: "Jika log 2 = 0.3, maka log 8 là...", opsi: ["0.6", "0.9", "1.2", "0.3"], jawaban: 1, pembahasan: "8 = 2&sup3;. log 8 = 3 &times; log 2 = 0.9." }
  ]
};

// ====== VARIABEL STATE GLOBAL ======
let currentGateKey = null;
let currentSoalSource = 'sim'; // 'sim' atau 'ai'
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

// ====== CHRONO TIMER SYSTEM ======
function initTimer() {
    const toggleSwitch = document.getElementById('timer-toggle-switch');
    const inputRow = document.getElementById('timer-custom-input-row');
    const chronoDisplay = document.getElementById('chrono-display-container');
    const applyBtn = document.getElementById('btn-timer-apply');
    const btnState = document.getElementById('btn-timer-state');
    const btnReset = document.getElementById('btn-timer-reset');
    const ftClose = document.getElementById('ft-close-btn');
    const ftPause = document.getElementById('ft-pause-btn');

    if(toggleSwitch) {
        toggleSwitch.addEventListener('change', () => {
            if (toggleSwitch.checked) {
                if(inputRow) inputRow.style.display = 'flex';
                if(chronoDisplay) chronoDisplay.classList.remove('hidden');
                applyTimerInput();
                showFloatingTimer();
            } else {
                if(inputRow) inputRow.style.display = 'none';
                if(chronoDisplay) chronoDisplay.classList.add('hidden');
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
    if (h > 0) return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
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
    if (timerIsRunning) stopTimer();
    else startTimer();
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
        if (isDragging) { isDragging = false; floatingTimer.classList.remove('dragging'); }
    });

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
        if (isDragging) { isDragging = false; floatingTimer.classList.remove('dragging'); }
    });
}

// ====== SISTEM LATIHAN AI ======
async function generateSoalDariAI(gateKey) {
    currentSoalSource = 'ai';
    const dataMateri = DATA_MATERI[gateKey];
    const panelLatihan = document.getElementById('panel-latihan-ai');
    if(!panelLatihan) return;
    panelLatihan.innerHTML = `<div class="loading-state"><div class="loading-spinner"></div><h3>Sedang Meracik 10 Soal Tipe UTBK...</h3><p>AI sedang menyusun soal ${dataMateri.title} tingkat sulit (HOTS).</p></div>`;

    const promptSystem = `Kamu adalah tim ahli pakar soal UTBK SNBT. Hanya hasilkan soal HOTS tingkat SANGAT SULIT. 
PENTING: Gunakan simbol matematika standar seperti ^ untuk pangkat (contoh: x^2), sqrt() untuk akar, dan * untuk kali. JANGAN gunakan format LaTeX atau simbol $ dan {}.
WAJIB balas dalam format JSON murni: {"soal": [{"pertanyaan": "...", "opsi": ["A", "B", "C", "D"], "jawaban": 0, "pembahasan": "..."}]}.`;

    let promptUser = `Buatkan 10 soal PG UTBK SANGAT SULIT untuk subtes: "${dataMateri.title}". `;

    if (gateKey === 'subtest-pu') {
        promptUser += `Sertakan SATU teks naratif panjang (250+ kata) berisi aturan rumit di AWAL field "pertanyaan" soal pertama. Buat 4-5 soal merujuk teks tersebut. Sisanya: silogisme berantai 3-4 premis, deret angka pola bertingkat, deret huruf.`;
    } 
    else if (gateKey === 'subtest-ppu') {
        promptUser += `Buat soal sinonim/antonim kata sulit (ambivalen, esensial, marjinal), peribahasa jarang, ejaan sering salah. Pilihan jawaban sangat mirip.`;
    } 
    else if (gateKey === 'subtest-pbm') {
        promptUser += `Sertakan TEKS EKSPOSISI PANJANG (300+ kata) di AWAL field "pertanyaan" soal pertama. Buat 5 soal merujuk teks (kalimat utama, bias, parafrase). Sisanya kalimat efektif tingkat lanjut.`;
    } 
    else if (gateKey === 'subtest-pk') {
        promptUser += `WAJIB sertakan: 1) LIMIT (lim x->3 dari bentuk aljabar/akar), 2) LOGARITMA (^4log 8 + ^4log 2, atau jika ^2log 3 = a maka ^8log 81), 3) Eksponen (satuan dari 2^2026 + 7^3035), 4) Sistem persamaan 3 variabel, 5) Deret tak hingga. Gunakan simbol ^ untuk pangkat dan sqrt() untuk akar. Jangan gunakan $ atau {}.`;
    } 
    else if (gateKey === 'subtest-indo') {
        promptUser += `WAJIB sertakan TEKS OPINI/AKADEMIK PANJANG (350+ kata) di AWAL field "pertanyaan" soal pertama. Buat 5-6 soal merujuk teks (bias, evaluasi argumen, makna kontekstual, inferensi). Sisanya majas/sinonim tingkat lanjut.`;
    } 
    else if (gateKey === 'subtest-inggris') {
        promptUser += `WAJIB sertakan TEKS AKADEMIK PANJANG (350+ words) di AWAL field "pertanyaan" soal pertama. Buat 5-6 soal merujuk teks (tone, inference, contextual vocab, purpose). Sisanya grammar tingkat lanjut (conditional type 3, passive modal, reported speech).`;
    } 
    else if (gateKey === 'subtest-pm') {
        promptUser += `WAJIB sertakan: 1) LIMIT (lim x->a), 2) LOGARITMA (jika ^2log 3 = a, cari ^8log 81), 3) Pangkat tinggi (satuan 2^2026), 4) Soal cerita kecepatan dengan arus sungai, 5) Bunga majemuk vs tunggal, 6) Peluang majemuk. Gunakan simbol ^ untuk pangkat dan sqrt() untuk akar. Jangan gunakan $ atau {}.`;
    }

    promptUser += ` Pastikan jawaban teracak. Setiap soal WAJIB punya pembahasan detail.`;

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getActiveApiKey()}` },
            body: JSON.stringify({
                model: AI_MODEL,
                messages: [ { role: "system", content: promptSystem }, { role: "user", content: promptUser } ],
                temperature: 0.8,
                response_format: { type: "json_object" }
            })
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
        panelLatihan.innerHTML = `<div class="locked-state-card"><div class="lock-icon">⚠️</div><h3>Gagal Menghubungi AI</h3><p>${error.message}</p><button class="btn-action" onclick="generateSoalDariAI(currentGateKey)">Coba Lagi</button></div>`;
    }
}

function mulaiSimulasi(gateKey) {
    currentSoalSource = 'sim';
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

function ulangiLatihan() {
    if (currentSoalSource === 'ai') {
        generateSoalDariAI(currentGateKey);
    } else {
        mulaiSimulasi(currentGateKey);
    }
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
    if(boxPembahasan) {
        boxPembahasan.style.display = 'block';
        setTimeout(() => { boxPembahasan.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
    }
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
                <button class="btn-action" onclick="ulangiLatihan()">Ulangi Latihan</button>
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
