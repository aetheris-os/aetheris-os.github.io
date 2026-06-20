// ====== KONFIGURASI API GROQ (MULTI-KEY ROTATION) ======
// 5 API Keys digabungkan. Jika key pertama kena limit 429, sistem otomatis pakai key berikutnya.
const API_KEYS = [
    "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", // Bot 1 (API Key lama)
    "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", // Bot 2
    "gsk_S2Jqwk8RxfZzrm9aSHOCWGdyb3FYMel00z6w9QifOvNeWEoyEaRBm", // Bot 3
    "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", // Bot 4
    "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"  // Bot 5
];

// Sistem Rotasi API Key
let currentKeyIndex = Math.floor(Math.random() * API_KEYS.length);
function getActiveApiKey() {
    return API_KEYS[currentKeyIndex];
}
function rotateApiKey() {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    console.log(`API Key kena limit. Beralih ke API Key index ke-${currentKeyIndex}`);
    return API_KEYS[currentKeyIndex];
}

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
// Tetap menggunakan model 70b sesuai permintaan
const AI_MODEL = "llama-3.3-70b-versatile"; 

// ====== MATERI UTBK 2024-2026 (SANGAT KOMPREHENSIF) ======
const DATA_MATERI = {
  'subtest-pu': {
    title: "Penalaran Umum (PU)",
    category: "TPS Module",
    desc: "Mengukur kemampuan penalaran logis (silogisme, premis), analitis (deret, permainan kata), dan penalaran kuantitatif.",
    htmlContent: `
      <div class="materi-card">
        <h2>Logika Silogisme & Premis (UTBK 2024-2026)</h2>
        <p>Silogisme adalah penarikan kesimpulan dari dua premis. Aturan mainnya:</p>
        <ul>
          <li><strong>Modus Ponens:</strong> Jika p maka q. p terjadi. Maka q terjadi.</li>
          <li><strong>Modus Tollens:</strong> Jika p maka q. q tidak terjadi. Maka p tidak terjadi.</li>
          <li><strong>Silogisme Rantai:</strong> p→q, q→r, maka p→r.</li>
          <li><strong>Silogisme Partikular:</strong> Subjek disisihkan, predikat dipertahankan. "Semua A adalah B. Sebagian A adalah C. Maka sebagian B adalah C."</li>
        </ul>
        <h3>Jebakan Logika (Fallacies)</h3>
        <ul>
          <li><strong>Affirming the Consequent:</strong> Jika p maka q. q terjadi. Maka p terjadi (SALAH). Bisa saja q terjadi karena sebab lain.</li>
          <li><strong>Denying the Antecedent:</strong> Jika p maka q. p tidak terjadi. Maka q tidak terjadi (SALAH).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Penalaran Analitis (Deret & Logika Diagram)</h2>
        <p>Deret angka biasanya menggunakan pola aritmatika (+a), geometri (xa), atau pola selang-seling. Deret huruf menggunakan urutan abjad (A=1, B=2, dst).</p>
        <h3>Pola Deret Tingkat Lanjut</h3>
        <ul>
          <li><strong>Pola Bertingkat (Selisih Berbeda):</strong> Selisih antar suku tidak konstan, tapi membentuk pola baru (misal: +2, +4, +6, +8).</li>
          <li><strong>Pola Silang (Alternating):</strong> Dua pola yang berselang-seling (misal: x2, -2, x2, -2).</li>
          <li><strong>Fibonacci:</strong> Suku ke-n adalah jumlah dua suku sebelumnya.</li>
          <li><strong>Pola Pangkat:</strong> Kuadrat (n²), Kubik (n³), atau kombinasi (n²+1).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Penalaran Kuantitatif (PU)</h2>
        <p>Berbeda dari PK, PU Kuantitatif lebih fokus pada logika perbandingan dan analisis data singkat, bukan hitungan rumit.</p>
        <ul>
          <li><strong>Perbandingan Senilai & Berbalik Nilai:</strong> Memahami hubungan kausal antar variabel.</li>
          <li><strong>Analisis Diagram:</strong> Membaca Venn diagram 3-4 himpunan untuk menarik kesimpulan irisan.</li>
        </ul>
      </div>
    `
  },
  'subtest-ppu': {
    title: "Pengetahuan & Pemahaman Umum (PPU)",
    category: "TPS Module",
    desc: "Mengukur penguasaan kosakata (sinonim, antonim), ejaan, dan tata bahasa praktis.",
    htmlContent: `
      <div class="materi-card">
        <h2>Kosakata Berbasis Konteks (UTBK 2024-2026)</h2>
        <p>Soal PPU tidak lagi sekadar mencari sinonim kamus, melainkan sinonim kontekstual. Contoh: Kata "peredaran" dalam "peredaran uang" berbeda dengan "peredaran darah".</p>
        <h3>Kata Serapan Asing</h3>
        <p>Banyak kata serapan dari bahasa Inggris/Arab yang penulisannya disesuaikan:</p>
        <ul>
          <li><strong>Quality</strong> menjadi <code>kualitas</code> (bukan kwalitas)</li>
          <li><strong>Complex</strong> menjadi <code>kompleks</code> (bukan compleks)</li>
          <li><strong>Technique</strong> menjadi <code>teknik</code></li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Ejaan yang Disempurnakan (EYD V)</h2>
        <p>Perhatikan penulisan huruf kapital, imbuhan asing, dan kata depan.</p>
        <ul>
          <li><strong>"Di" sebagai awalan verba pasif:</strong> digabung (dimakan, dipukul).</li>
          <li><strong>"Di" sebagai preposisi tempat:</strong> dipisah (di rumah, di sekolah).</li>
          <li><strong>Partikel "pun":</strong> Umumnya dipisah (Saya pun pergi), kecuali pada kata tertentu (meskipun, walaupun, bagaimanapun).</li>
          <li><strong>Partikel "lah", "kah", "tah":</strong> Digabung pada kata ganti orang pertama (Akulah), dipisah pada kata lain (Mari kita pergi lah).</li>
        </ul>
        <h3>Tanda Baca</h3>
        <ul>
          <li><strong>Tanda titik dua (:):</strong> Digunakan pada kalimat langsung setelah pengantar.</li>
          <li><strong>Tanda hubung (-):</strong> Digunakan pada kata ulang sebagian (anak-anak) atau imbuhan asing (neo-kolonialisme).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Tata Bahasa & Majas</h2>
        <p>Memahami penggunaan kata penghubung antarklausa dan majas.</p>
        <ul>
          <li><strong>Konjungsi Antarklausa:</strong> "karena", "sehingga", "walaupun", "meskipun". Jangan gunakan dua konjungsi sekaligus dalam satu klausa (Pleonasme).</li>
          <li><strong>Majas Metafora:</strong> Perbandingan langsung tanpa kata pembanding (Anak emas, kambing hitam).</li>
          <li><strong>Majas Personifikasi:</strong> Benda mati seolah-olah hidup (Angin berbisik).</li>
        </ul>
      </div>
    `
  },
  'subtest-pbm': {
    title: "Memahami Bacaan & Menulis (PBM)",
    category: "TPS Module",
    desc: "Mengukur kemampuan memahami teks, menemukan gagasan utama, dan menyusun kalimat efektif.",
    htmlContent: `
      <div class="materi-card">
        <h2>Kalimat Efektif (UTBK 2024-2026)</h2>
        <p>Kalimat efektif harus memenuhi syarat: hemat kata, logis, dan strukturnya jelas (Subjek-Predikat).</p>
        <ul>
          <li><strong>Keseparasan (Struktur S-P):</strong> Subjek dan predikat harus jelas. Hindari kalimat tanpa subjek (misal: "Bagi siswa yang rajin akan lulus" -> "Siswa yang rajin akan lulus").</li>
          <li><strong>Kehematan Kata:</strong> Hindari pleonasme (pemborosan kata). Contoh: "agar supaya" (salah), "sejak dari" (salah), "pada hal" (salah, yang benar "padahal").</li>
          <li><strong>Kevarian Kalimat:</strong> Hindari penggunaan konjungsi yang berlebihan dalam satu kalimat.</li>
          <li><strong>Kelogisan:</strong> Hindari kalimat ambigu (bermakna ganda).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Gagasan Utama & Kalimat Utama</h2>
        <p>Gagasan utama adalah inti pikiran paragraf. Letaknya bisa di awal (deduktif), akhir (induktif), atau awal-akhir (campuran).</p>
        <h3>Jenis Paragraf</h3>
        <ul>
          <li><strong>Paragraf Deskripsi:</strong> Menggambarkan objek secara detail.</li>
          <li><strong>Paragraf Narasi:</strong> Menceritakan peristiwa secara kronologis.</li>
          <li><strong>Paragraf Eksposisi:</strong> Memaparkan data/fakta secara informatif.</li>
          <li><strong>Paragraf Argumentasi:</strong> Menyampaikan pendapat disertai alasan logis.</li>
          <li><strong>Paragraf Persuasi:</strong> Meyakinkan pembaca untuk melakukan sesuatu.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Teks Prosedur & Laporan</h2>
        <p>Teks prosedur memuat langkah-langkah membuat sesuatu, sedangkan laporan hasil observasi memaparkan hasil pengamatan secara objektif.</p>
        <ul>
          <li><strong>Struktur Teks Prosedur:</strong> Tujuan, Alat & Bahan, Langkah-langkah, Penutup.</li>
          <li><strong>Struktur Laporan:</strong> Pernyataan umum, Deskripsi bagian, Penutup.</li>
        </ul>
      </div>
    `
  },
  'subtest-pk': {
    title: "Pengetahuan Kuantitatif (PK)",
    category: "TPS Module",
    desc: "Mengukur kemampuan matematika dasar: aljabar, aritmatika, geometri, dan statistik.",
    htmlContent: `
      <div class="materi-card">
        <h2>Aljabar & Aritmatika Sosial (UTBK 2024-2026)</h2>
        <p>Fokus pada pemahaman konsep dan manipulasi aljabar.</p>
        <ul>
          <li><strong>Persamaan Linear:</strong> Substitusi dan eliminasi untuk mencari nilai variabel.</li>
          <li><strong>Aritmatika Sosial:</strong> Untung, rugi, diskon, pajak, dan bunga tunggal.</li>
          <li><strong>Deret Aritmatika & Geometri:</strong> Rumus jumlah n suku pertama (Sn).</li>
          <li><strong>Barisan & Deret Tak Hingga:</strong> Hanya geometri yang memiliki deret tak hingga (S∞ = a / (1-r)).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Geometri & Trigonometri</h2>
        <p>Pahami rumus dasar luas dan keliling bangun datar, volume bangun ruang, serta perbandingan trigonometri (sin, cos, tan) pada segitiga siku-siku.</p>
        <ul>
          <li><strong>Teorema Pythagoras:</strong> a² + b² = c² (hanya berlaku segitiga siku-siku).</li>
          <li><strong>Aturan Sinus & Cosinus:</strong> Untuk segitiga sembarang.</li>
          <li><strong>Luas Lingkaran:</strong> π r². Keliling: 2 π r.</li>
          <li><strong>Volume Tabung:</strong> π r² t. Volume Kerucut: (1/3) π r² t.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Statistika & Peluang</h2>
        <ul>
          <li><strong>Mean, Median, Modus:</strong> Mean = rata-rata, Median = nilai tengah, Modus = nilai paling sering muncul.</li>
          <li><strong>Peluang Sederhana:</strong> P(A) = n(A) / n(S).</li>
          <li><strong>Kombinasi & Permutasi:</strong> Kombinasi urutan tidak penting (memilih tim), Permutasi urutan penting (menyusun kursi).</li>
        </ul>
      </div>
    `
  },
  'subtest-indo': {
    title: "Literasi B. Indonesia",
    category: "Literasi Module",
    desc: "Mengukur kemampuan membaca kritis, evaluasi teks, dan sintesis informasi.",
    htmlContent: `
      <div class="materi-card">
        <h2>Membaca Kritis & Evaluatif (UTBK 2024-2026)</h2>
        <p>Literasi Bahasa Indonesia tidak sekadar memahami teks, tapi mengevaluasi argumen penulis.</p>
        <ul>
          <li><strong>Membedakan Fakta & Opini:</strong> Fakta berdasarkan data/riset, opini berdasarkan penilaian pribadi.</li>
          <li><strong>Menemukan Bias:</strong> Identifikasi apakah penulis berpihak pada satu sudut pandang tertentu.</li>
          <li><strong>Sintesis:</strong> Menggabungkan informasi dari beberapa teks untuk menarik kesimpulan baru.</li>
          <li><strong>Parafrase:</strong> Menyimpulkan isi teks dengan bahasa sendiri tanpa mengubah maksud asli.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Teks Argumentasi & Persuasi</h2>
        <p>Teks argumentasi membuktikan pendapat dengan logis, sedangkan persuasi membujuk pembaca untuk melakukan sesuatu.</p>
        <ul>
          <li><strong>Struktur Teks Argumentasi:</strong> Tesis (pendapat), Argumentasi (alasan/bukti), Penegasan ulang.</li>
          <li><strong>Ciri Persuasi:</strong> Mengandung ajakan, imbauan, atau paksaan halus.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Majas & Gaya Bahasa</h2>
        <ul>
          <li><strong>Hiperbola:</strong> Melebih-lebihkan.</li>
          <li><strong>Ironi:</strong> Sindiran halus dengan kata-kata berlawanan.</li>
          <li><strong>Sarkasme:</strong> Sindiran kasar dan menyakitkan.</li>
          <li><strong>Satire:</strong> Sindiran dengan kiasan.</li>
        </ul>
      </div>
    `
  },
  'subtest-inggris': {
    title: "Literasi B. Inggris",
    category: "Literasi Module",
    desc: "Mengukur kemampuan reading comprehension, critical reading, dan contextual vocabulary.",
    htmlContent: `
      <div class="materi-card">
        <h2>Critical Reading & Comprehension (UTBK 2024-2026)</h2>
        <p>Fokus pada pemahaman teks akademik dan jurnalistik berbahasa Inggris.</p>
        <ul>
          <li><strong>Main Idea & Topic Sentence:</strong> Menemukan gagasan utama paragraf.</li>
          <li><strong>Inference:</strong> Menyimpulkan informasi tersirat (implied meaning) dari teks.</li>
          <li><strong>Contextual Vocabulary:</strong> Menebak makna kata berdasarkan konteks kalimat.</li>
          <li><strong>Author's Tone:</strong> Mengidentifikasi sikap penulis (objektif, subjektif, skeptis, optimis, pesimis).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Grammar & Structure</h2>
        <ul>
          <li><strong>Conditional Sentences:</strong> Type 0 (Fakta alam), Type 1 (Mungkin terjadi), Type 2 (Tidak nyata di masa kini), Type 3 (Penyesalan masa lalu).</li>
          <li><strong>Passive Voice:</strong> Subjek menerima aksi (Be + V3).</li>
          <li><strong>Relative Pronouns:</strong> Who (subjek manusia), Whom (objek manusia), Which (benda), Whose (milik).</li>
          <li><strong>Reported Speech:</strong> Mengubah kalimat langsung menjadi tidak langsung (perubahan tense dan pronoun).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Text Types</h2>
        <ul>
          <li><strong>Descriptive:</strong> Menggambarkan ciri-ciri subjek.</li>
          <li><strong>Narrative:</strong> Menceritakan kisah fiksi (orientation, complication, resolution).</li>
          <li><strong>Procedure:</strong> Memberi instruksi langkah demi langkah.</li>
          <li><strong>Report:</strong> Menyajikan informasi umum secara sistematis.</li>
        </ul>
      </div>
    `
  },
  'subtest-pm': {
    title: "Penalaran Matematika",
    category: "Literasi Module",
    desc: "Mengukur kemampuan pemecahan masalah matematika dalam konteks nyata.",
    htmlContent: `
      <div class="materi-card">
        <h2>Pemecahan Masalah Kontekstual (UTBK 2024-2026)</h2>
        <p>Soal Penalaran Matematika sering berbentuk soal cerita panjang yang membutuhkan translasi ke bahasa matematika.</p>
        <ul>
          <li><strong>Perbandingan & Skala:</strong> Perbandingan senilai, berbalik nilai, dan campuran.</li>
          <li><strong>Kecepatan, Jarak, Waktu:</strong> Termasuk konsep arus sungai dan angin (kecepatan relatif).</li>
          <li><strong>Peluang Majemuk:</strong> Kombinasi dan permutasi dalam kasus nyata.</li>
          <li><strong>Barisan & Deret Aplikatif:</strong> Bunga majemuk, pertumbuhan populasi, atau penurunan nilai barang.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Aljabar Terapan</h2>
        <ul>
          <li><strong>Sistem Persamaan Linear:</strong> Menyelesaikan masalah cerita yang melibatkan dua atau lebih variabel.</li>
          <li><strong>Fungsi Kuadrat:</strong> Mencari titik puncak (maksimum/minimum) dalam konteks ekonomi (untung/rugi maksimal).</li>
          <li><strong>Pertidaksamaan:</strong> Menentukan syarat atau batasan nilai agar suatu kondisi terpenuhi.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Statistika & Peluang Lanjutan</h2>
        <ul>
          <li><strong>Deskripsi Data:</strong> Menghitung mean, median, modus dari data berbentuk tabel atau grafik.</li>
          <li><strong>Peluang Kejadian Majemuk:</strong> Kejadian saling bebas (P(A∩B) = P(A) x P(B)) dan saling lepas (P(A∪B) = P(A) + P(B)).</li>
        </ul>
      </div>
    `
  }
};

// ====== BANK SOAL SIMULASI ======
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
    { soal: "A, C, F, J, O, ...", opsi: ["T", "U", "V", "S"], jawaban: 1, pembahasan: "Selisih +2, +3, +4, +5, +6. O(15)+6=U(21)." }
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
    { soal: "Kata 'Mitra' dalam konteks bisnis berarti...", opsi: ["Lawan", "Rekan kerja", "Pesaing", "Pembeli"], jawaban: 1, pembahasan: "Mitra = partner/rekan." }
  ],
  'subtest-pk': [
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x² - 1, maka nilai (g o f)(2) adalah...", opsi: ["14", "15", "16", "17"], jawaban: 1, pembahasan: "f(2) = 2(2)+3 = 7. Lalu g(7) = 7² - 1 = 48." },
    { soal: "Sebuah barang dibeli dengan harga Rp200.000. Jika dijual dengan untung 15%, maka harga jualnya adalah...", opsi: ["Rp 215.000", "Rp 220.000", "Rp 225.000", "Rp 230.000"], jawaban: 3, pembahasan: "Untung = 15% x 200.000 = 30.000. Harga jual = 200.000 + 30.000 = 230.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang dalam 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = Orang x Hari = 8 x 12 = 96. Hari = 96 / 6 = 16 hari." },
    { soal: "Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Bomber berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Bomber akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko didepan saat 07.00 adalah 60 km. Selisih kecepatan = 20 km/jam. Waktu susul = 60/20 = 3 jam. 07.00 + 3 jam = 10.00." },
    { soal: "Jika log 2 = 0.301 dan log 3 = 0.477, maka nilai log 6 adalah...", opsi: ["0.778", "0.176", "0.474", "1.230"], jawaban: 0, pembahasan: "log 6 = log (2 x 3) = log 2 + log 3 = 0.301 + 0.477 = 0.778." },
    { soal: "Rata-rata nilai ujian 5 siswa adalah 80. Jika ditambah nilai seorang siswa baru menjadi 78, berapa nilai siswa baru tersebut?", opsi: ["68", "70", "72", "75"], jawaban: 0, pembahasan: "Total awal = 5 x 80 = 400. Total baru = 6 x 78 = 468. Nilai siswa baru = 468 - 400 = 68." },
    { soal: "Suatu deret aritmatika memiliki suku pertama 5 dan beda 3. Jumlah 10 suku pertama deret tersebut adalah...", opsi: ["180", "185", "190", "195"], jawaban: 1, pembahasan: "Sn = n/2 (2a + (n-1)b) = 10/2 (2(5) + 9(3)) = 5 (10 + 27) = 5 x 37 = 185." },
    { soal: "Akar-akar persamaan kuadrat x² - 5x + 6 = 0 adalah...", opsi: ["1 dan 6", "2 dan 3", "-2 dan -3", "2 dan -3"], jawaban: 1, pembahasan: "(x-2)(x-3)=0. Maka x=2 atau x=3." },
    { soal: "Jika sin x = 3/5 dan x sudut lancip, maka nilai cos x adalah...", opsi: ["3/4", "4/5", "5/4", "4/3"], jawaban: 1, pembahasan: "Cos x = √(1 - sin²x) = √(1 - 9/25) = √(16/25) = 4/5." },
    { soal: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Volume tabung tersebut là... (π = 22/7)", opsi: ["1540 cm³", "1440 cm³", "1340 cm³", "1240 cm³"], jawaban: 0, pembahasan: "V = π r² t = 22/7 x 7 x 7 x 10 = 22 x 70 = 1540." },
    { soal: "Bentuk sederhana dari (2³ x 2⁻¹) / 2² adalah...", opsi: ["2⁰", "2¹", "2²", "2⁻¹"], jawaban: 0, pembahasan: "Pembilang: 2^(3-1) = 2². Dibagi 2² = 2^(2-2) = 2⁰ = 1." },
    { soal: "Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 adalah...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "Modus adalah data yang paling sering muncul (6 muncul 3 kali)." },
    { soal: "Median dari data: 3, 5, 7, 8, 10, 12, 15 adalah...", opsi: ["7", "8", "10", "12"], jawaban: 1, pembahasan: "Median adalah nilai tengah. Dari 7 data, urutan ke-4 adalah 8." },
    { soal: "Jika 3x - 5 = 10, maka nilai x adalah...", opsi: ["3", "4", "5", "6"], jawaban: 2, pembahasan: "3x = 15, x = 5." },
    { soal: "Hasil dari 15% dari 300 adalah...", opsi: ["35", "40", "45", "50"], jawaban: 2, pembahasan: "15/100 x 300 = 45." },
    { soal: "Sebuah kubus memiliki panjang rusuk 6 cm. Luas permukaan kubus tersebut adalah...", opsi: ["216 cm²", "196 cm²", "176 cm²", "156 cm²"], jawaban: 0, pembahasan: "Luas = 6 x s² = 6 x 36 = 216." },
    { soal: "Nilai dari 4! (4 faktorial) adalah...", opsi: ["12", "16", "24", "32"], jawaban: 2, pembahasan: "4 x 3 x 2 x 1 = 24." },
    { soal: "Dari 5 buku matematika dan 4 buku fisika, akan dipilih 2 buku masing-masing satu. Berapa banyak cara memilih?", opsi: ["9", "16", "20", "24"], jawaban: 2, pembahasan: "C(5,1) x C(4,1) = 5 x 4 = 20." },
    { soal: "Jarak kota A dan B pada peta dengan skala 1:1.000.000 adalah 5 cm. Jarak sebenarnya adalah...", opsi: ["50 km", "500 km", "50 m", "5 km"], jawaban: 0, pembahasan: "Jarak = 5 cm x 1.000.000 = 5.000.000 cm = 50 km." },
    { soal: "Umur ayah 4 kali umur anak. Total umur mereka 50 tahun. Umur anak adalah...", opsi: ["8 tahun", "10 tahun", "12 tahun", "14 tahun"], jawaban: 1, pembahasan: "Misal anak = x, ayah = 4x. x + 4x = 50. 5x = 50, x = 10." }
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
    { soal: "Teks: 'Kemarau tahun ini cukup panjang. Banyak sumur kering. Warga kesulitan air bersih.' Gagasan utamanya adalah...", opsi: ["Kemarau panjang", "Sumur kering", "Kesulitan air bersih", "Warga panik"], jawaban: 2, pembahasan: "Kalimat pertama sebab, kedua sebab, ketiga (akibat inti) adalah gagasan utamanya." }
  ],
  'subtest-indo': [
    { soal: "Teks: 'Edukasi karakter sangat penting untuk membentuk generasi yang tangguh dan berintegritas. Tanpa karakter kuat, ilmu yang didapatkan justru bisa merugikan.' Gagasan utama teks tersebut adalah...", opsi: ["Generasi tangguh butuh ilmu", "Pentingnya edukasi karakter", "Ilmu tanpa karakter merugikan", "Integritas bagian dari pendidikan"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) berada di awal paragraf." },
    { soal: "Teks: 'Polusi udara di Jakarta meningkat. Hal ini ditandai dengan menipisnya lapisan ozon. Dampaknya, penyakit pernapasan meningkat.' Simpulan yang tepat dari teks adalah...", opsi: ["Lapisan ozon menipis karena polusi", "Polusi udara berdampak pada kesehatan pernapasan", "Jakarta kota terpolusi", "Penyakit pernapasan memicu polusi"], jawaban: 1, pembahasan: "Simpulan harus mencakup sebab dan akibat." },
    { soal: "Dalam teks eksposisi, penulis biasanya menggunakan pola pengembangan berupa...", opsi: ["Kronologis", "Sebab-akibat", "Definisi dan uraian", "Alur cerita"], jawaban: 2, pembahasan: "Teks eksposisi mengembangkan gagasan melalui definisi dan uraian logis." },
    { soal: "Teks: 'Penanaman pohon di perkotaan mampu mengurangi efek rumah kaca. Selain itu, pohon juga menyejukkan udara.' Hubungan kedua kalimat tersebut adalah...", opsi: ["Sebab-akibat", "Kesimpulan", "Sejajar (menambahkan)", "Perbandingan"], jawaban: 2, pembahasan: "Kata 'Selain itu' menandakan penambahan argumen yang sejajar." },
    { soal: "Membaca untuk menemukan informasi spesifik seperti nama atau angka pada teks disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 1, pembahasan: "Scanning adalah teknik mencari detail spesifik dengan cepat." },
    { soal: "Membaca untuk memahami intisari atau gagasan utama bacaan disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 0, pembahasan: "Skimming membaca cepat untuk mendapat inti." },
    { soal: "Teks argumentasi yang menampilkan pendapat penulis di awal, lalu disokong argumen di belakangnya menggunakan pola...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Tesis di awal lalu argumen = deduktif." },
    { soal: "Sinonim dari kata 'Fundamental' dalam konteks teks akademis adalah...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Antonim dari kata 'Konvensional' adalah...", opsi: ["Tradisional", "Modern/Inovatif", "Umum", "Lama"], jawaban: 1, pembahasan: "Konvensional = tradisional. Lawannya modern." },
    { soal: "Teks: 'Berdasarkan riset, siswa yang tidur 8 jam memiliki fokus 40% lebih baik.' Pernyataan ini merupakan bagian dari teks...", opsi: ["Opini", "Fakta", "Fiksi", "Argumentasi subjektif"], jawaban: 1, pembahasan: "Berdasarkan riset dan data persentase = fakta." },
    { soal: "Teks: 'Menurut saya, cuaca hari ini terlalu panas untuk berolahraga.' Pernyataan ini merupakan...", opsi: ["Fakta", "Opini", "Data", "Argumentasi logis"], jawaban: 1, pembahasan: "Menurut saya = penilaian pribadi (opini)." },
    { soal: "Menyimpulkan isi teks dengan bahasa sendiri tanpa mengubah maksud asli disebut...", opsi: ["Meringkas", "Memparafrasekan", "Mengevaluasi", "Mensintesis"], jawaban: 1, pembahasan: "Memparafrasekan = menulis ulang dengan bahasa sendiri." },
    { soal: "Menggabungkan informasi dari beberapa teks untuk membentuk kesimpulan baru disebut...", opsi: ["Analisis", "Sintesis", "Evaluasi", "Aplikasi"], jawaban: 1, pembahasan: "Sintesis menggabungkan berbagai sumber." },
    { soal: "Teks: 'Pemanasan global mengakibatkan es di kutub mencair. Jika es mencair, permukaan air laut naik.' Kalimat ini menunjukkan hubungan...", opsi: ["Perbandingan", "Sebab-akibat", "Pertentangan", "Urutan waktu"], jawaban: 1, pembahasan: "Mengakibatkan = sebab-akibat." },
    { soal: "Tujuan utama teks persuasi adalah...", opsi: ["Memberi informasi", "Menceritakan kejadian", "Meyakinkan pembaca", "Menghibur pembaca"], jawaban: 2, pembahasan: "Persuasi = meyakinkan." },
    { soal: "Dalam menulis karya ilmiah, bagian yang berisi latar belakang masalah dan tujuan penelitian terdapat di bab...", opsi: ["Bab I (Pendahuluan)", "Bab II (Tinjauan Pustaka)", "Bab III (Metode)", "Bab IV (Hasil)"], jawaban: 0, pembahasan: "Pendahuluan berisi latar belakang dan tujuan." },
    { soal: "Kutipan langsung dari sumber pustaka harus ditulis dengan menggunakan...", opsi: ["Tanda kurung siku []", "Tanda kutip (' ')", "Tanda hubung (-)", "Tanda seru (!)"], jawaban: 1, pembahasan: "Kutipan langsung pakai tanda kutip." },
    { soal: "Teks: 'Warga sekitar gunung merapi dievakuasi karena status awas.' Makna kata 'dievakuasi' adalah...", opsi: ["Dipindahkan ke tempat aman", "Ditinggalkan begitu saja", "Diberi bantuan logistik", "Diarahkan ke gunung"], jawaban: 0, pembahasan: "Evakuasi = pemindahan untuk keselamatan." },
    { soal: "Sinonim dari kata 'Mitigasi' adalah...", opsi: ["Pencegahan/Pengurangan dampak", "Penanganan darurat", "Pembangunan ulang", "Penolongan korban"], jawaban: 0, pembahasan: "Mitigasi = upaya pengurangan risiko." },
    { soal: "Majas yang memberikan sifat manusia pada benda mati disebut...", opsi: ["Metafora", "Personifikasi", "Simile", "Hiperbola"], jawaban: 1, pembahasan: "Personifikasi = benda mati seolah hidup." }
  ],
  'subtest-inggris': [
    { soal: "I wish I ___ harder for the UTBK exam last year.", opsi: ["study", "studied", "had studied", "would study"], jawaban: 2, pembahasan: "Penyesalan masa lalu (wish + past perfect): S + wish + S + had V3." },
    { soal: "If she ___, she would come to the party.", opsi: ["knows", "knew", "had known", "known"], jawaban: 1, pembahasan: "Conditional type 2 (hypothetical present), verb 2." },
    { soal: "The author's tone in a scientific fact report is usually...", opsi: ["Optimistic", "Subjective", "Objective", "Pessimistic"], jawaban: 2, pembahasan: "Laporan ilmiah bersifat objektif (netral)." },
    { soal: "Synonym of 'Abundant' is...", opsi: ["Scarce", "Plentiful", "Empty", "Small"], jawaban: 1, pembahasan: "Abundant = melimpah (plentiful)." },
    { soal: "Antonym of 'Artificial' is...", opsi: ["Fake", "Natural", "Synthetic", "Man-made"], jawaban: 1, pembahasan: "Artificial (buatan) lawannya Natural (alami)." },
    { soal: "My brother, ___ lives in Jakarta, is a doctor.", opsi: ["who", "whom", "which", "whose"], jawaban: 0, pembahasan: "Relative pronoun untuk subjek manusia." },
    { soal: "The book ___ by the teacher yesterday.", opsi: ["is bought", "was bought", "bought", "is buying"], jawaban: 1, pembahasan: "Passive voice past tense: was/were + V3." },
    { soal: "She has been studying ___ 3 hours.", opsi: ["for", "since", "from", "at"], jawaban: 0, pembahasan: "Durasi waktu menggunakan 'for'." },
    { soal: "The meeting will be held ___ Monday morning.", opsi: ["in", "on", "at", "for"], jawaban: 1, pembahasan: "Hari dan bagian hari spesifik menggunakan 'on'." },
    { soal: "Text: 'The library is open from 8 AM to 4 PM.' When can you visit the library?", opsi: ["At 5 PM", "At 9 AM", "At 7 AM", "At 6 PM"], jawaban: 1, pembahasan: "9 AM berada di antara 8 AM dan 4 PM." },
    { soal: "What is the main idea of a paragraph called?", opsi: ["Topic sentence", "Supporting sentence", "Concluding sentence", "Title"], jawaban: 0, pembahasan: "Topic sentence berisi gagasan utama." },
    { soal: "Reading quickly to get the general idea of a text is called...", opsi: ["Scanning", "Skimming", "Guessing", "Translating"], jawaban: 1, pembahasan: "Skimming untuk ide umum." },
    { soal: "Reading to find specific information like a date or name is called...", opsi: ["Scanning", "Skimming", "Paraphrasing", "Summarizing"], jawaban: 0, pembahasan: "Scanning untuk info spesifik." },
    { soal: "Synonym of 'Crucial' is...", opsi: ["Unimportant", "Essential", "Secondary", "Optional"], jawaban: 1, pembahasan: "Crucial = sangat penting (essential)." },
    { soal: "Antonym of 'Ancient' is...", opsi: ["Old", "Modern", "Historical", "Classic"], jawaban: 1, pembahasan: "Ancient (kuno) lawan Modern." },
    { soal: "Choose the correct sentence:", opsi: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."], jawaban: 2, pembahasan: "She (singular) + doesn't + V1." },
    { soal: "If I ___ a bird, I would fly to you.", opsi: ["am", "was", "were", "be"], jawaban: 2, pembahasan: "Conditional type 2 selalu pakai 'were' untuk semua subjek." },
    { soal: "The text states: 'Smoking is prohibited in this area.' What does it mean?", opsi: ["You can smoke here", "You must not smoke here", "Smoking is allowed outside", "Smoking is recommended"], jawaban: 1, pembahasan: "Prohibited = dilarang." },
    { soal: "A text that tries to convince the reader to do something is called...", opsi: ["Narrative", "Recount", "Persuasive", "Descriptive"], jawaban: 2, pembahasan: "Persuasive text meyakinkan." },
    { soal: "The past tense of 'Write' is...", opsi: ["Wrote", "Written", "Writed", "Writing"], jawaban: 0, pembahasan: "V2 dari write adalah wrote." }
  ],
  'subtest-pm': [
    { soal: "Dari 7 orang siswa, akan dipilih 3 orang untuk menjadi pengurus OSIS. Berapa banyak cara pemilihan yang mungkin? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 7! / (3!4!) = (7x6x5) / 6 = 35." },
    { soal: "Dari 5 orang calon ketua, wakil, dan sekretaris akan dipilih. Berapa banyak susunan yang mungkin? (Permutasi)", opsi: ["10", "20", "60", "120"], jawaban: 2, pembahasan: "P(5,3) = 5! / 2! = 60." },
    { soal: "Modal awal Rp1.000.000 disimpan dengan bunga tunggal 12% per tahun. Berapa bunga yang diperoleh setelah 3 bulan?", opsi: ["Rp 10.000", "Rp 20.000", "Rp 30.000", "Rp 40.000"], jawaban: 2, pembahasan: "Bunga = M x i x n = 1.000.000 x 12% x (3/12) = 30.000." },
    { soal: "Jarak kota A dan B adalah 120 km. Sebuah motor melaju dengan kecepatan 60 km/jam. Berapa waktu tempuh motor tersebut?", opsi: ["1 jam", "2 jam", "3 jam", "4 jam"], jawaban: 1, pembahasan: "Waktu = Jarak / Kecepatan = 120 / 60 = 2 jam." },
    { soal: "Harga sebuah sembako naik 20% dari harga awal Rp50.000. Berapa harga sekarang?", opsi: ["Rp 55.000", "Rp 60.000", "Rp 70.000", "Rp 40.000"], jawaban: 1, pembahasan: "Naik 20% = 10.000. Harga baru = 60.000." },
    { soal: "Seorang pekerja menyelesaikan tugas dalam 6 jam. Jika dibantu temannya, selesai dalam 4 jam. Jika dikerjakan temannya sendiri, berapa jam selesai?", opsi: ["10 jam", "12 jam", "8 jam", "14 jam"], jawaban: 1, pembahasan: "1/6 + 1/x = 1/4 -> 1/x = 1/4 - 1/6 = 1/12. x = 12." },
    { soal: "Sebuah toko memberi diskon 15% untuk barang seharga Rp80.000. Harga setelah diskon adalah...", opsi: ["Rp 68.000", "Rp 70.000", "Rp 65.000", "Rp 60.000"], jawaban: 0, pembahasan: "Diskon = 15% x 80.000 = 12.000. Harga = 68.000." },
    { soal: "Jika 3x + 2y = 12 dan x - y = 1, maka nilai y adalah...", opsi: ["2", "3", "4", "5"], jawaban: 1, pembahasan: "x = 1 + y. Substitusi: 3(1+y) + 2y = 12 -> 3 + 5y = 12. Jika x=2, y=3." },
    { soal: "Sebuah balok berukuran 4x3x2. Volume balok tersebut adalah...", opsi: ["12 cm³", "24 cm³", "20 cm³", "9 cm³"], jawaban: 1, pembahasan: "V = p x l x t = 24." },
    { soal: "Luas persegi yang memiliki keliling 20 cm adalah...", opsi: ["25 cm²", "20 cm²", "16 cm²", "10 cm²"], jawaban: 0, pembahasan: "Sisi = 20/4 = 5. Luas = 5x5 = 25." },
    { soal: "Hasil dari -5 + 3 x 2 adalah...", opsi: ["-4", "1", "-1", "4"], jawaban: 1, pembahasan: "Perkalian didahulukan: 3x2=6. -5+6=1." },
    { soal: "Faktor dari x² - 7x + 12 adalah...", opsi: ["(x-3)(x-4)", "(x+3)(x+4)", "(x-2)(x-6)", "(x-3)(x+4)"], jawaban: 0, pembahasan: "Cari dua angka kali 12 tambah -7. -3 dan -4." },
    { soal: "Nilai dari 2 pangkat 4 ditambah 3 pangkat 2 adalah...", opsi: ["16", "25", "17", "13"], jawaban: 1, pembahasan: "16 + 9 = 25." },
    { soal: "Sebuah lingkaran memiliki diameter 14 cm. Luasnya adalah... (π = 22/7)", opsi: ["154 cm²", "144 cm²", "134 cm²", "124 cm²"], jawaban: 0, pembahasan: "Jari-jari = 7. Luas = 22/7 x 7 x 7 = 154." },
    { soal: "Jika 40% dari x = 20, maka nilai x adalah...", opsi: ["40", "50", "60", "70"], jawaban: 1, pembahasan: "0.4x = 20 -> x = 50." },
    { soal: "Sebuah kubus memiliki volume 64 cm³. Panjang rusuknya adalah...", opsi: ["4 cm", "6 cm", "8 cm", "16 cm"], jawaban: 0, pembahasan: "Sisi³ = 64. Sisi = √64 = 4." },
    { soal: "Data: 2, 4, 4, 5, 6, 8. Nilai rata-ratanya adalah...", opsi: ["4", "5", "6", "7"], jawaban: 1, pembahasan: "Jumlah = 29. Rata-rata = 29/6 = 4.83. (Dibulatkan ke 5)" },
    { soal: "Suku ke-5 barisan aritmatika 2, 5, 8, 11, ... adalah...", opsi: ["14", "15", "16", "17"], jawaban: 0, pembahasan: "Beda = 3. Suku ke-5 = 11 + 3 = 14." },
    { soal: "Jumlah sudut dalam segi-8 (oktagon) adalah...", opsi: ["1080°", "900°", "720°", "540°"], jawaban: 0, pembahasan: "(n-2) x 180 = 6 x 180 = 1080." },
    { soal: "Jika log 2 = 0.3, maka log 8 là...", opsi: ["0.6", "0.9", "1.2", "0.3"], jawaban: 1, pembahasan: "8 = 2³. log 8 = 3 x log 2 = 3(0.3) = 0.9." }
  ]
};

// ====== VARIABEL STATE GLOBAL ======
let currentGateKey = null;
let soalAktif = [];
let indexSoalSekarang = 0;
let skorBenar = 0;
let chatHistoryGlobal = []; 

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

    if(themeCurrentBtn) {
        themeCurrentBtn.addEventListener('click', (e) => { 
            e.stopPropagation(); 
            themeDropdown.classList.toggle('open'); 
        });
    }
    document.addEventListener('click', (e) => { 
        if (themeSelectorWrapper && !themeSelectorWrapper.contains(e.target)) themeDropdown.classList.remove('open'); 
    });

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
    
    document.querySelectorAll('.node-card').forEach(card => { 
        card.addEventListener('click', () => navigateTo('subtest', card.dataset.gate)); 
    });
    
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

// ====== SISTEM LATIHAN AI (GROQ - MULTI KEY ROTATION) ======
async function generateSoalDariAI(gateKey) {
    const dataMateri = DATA_MATERI[gateKey];
    const panelLatihan = document.getElementById('panel-latihan-ai');
    if(!panelLatihan) return;

    panelLatihan.innerHTML = `<div class="loading-state"><div class="loading-spinner"></div><h3>Sedang Meracik 10 Soal Tipe UTBK...</h3><p>AI sedang menyusun soal ${dataMateri.title} tingkat sulit (HOTS). Mohon tunggu sejenak.</p></div>`;

    const promptSystem = `Kamu adalah tim ahli pakar soal UTBK SNBT BPPPA Kemendikbud. 
Kamu hanya akan menghasilkan soal kualitas HOTS (High Order Thinking Skills) level sulit (sekitar 70-80% persentase jawaban benar nasional).
WAJIB balas dalam format JSON murni tanpa markdown. Format JSON: {"soal": [{"pertanyaan": "...", "opsi": ["A", "B", "C", "D"], "jawaban": 0, "pembahasan": "..."}]}.`;

    let promptUser = `Buatkan 10 soal pilihan ganda TPS/Literasi UTBK yang SANGAT SULIT untuk subtes: "${dataMateri.title}". `;

    if (gateKey === 'subtest-pu') {
        promptUser += `Khusus subtes Penalaran Umum: Buat soal logika silogisme berantai (premis 3-4 lapis), diagram Venn yang rumit, atau deret angka/huruf dengan pola bertingkat (misal: x^2+1, selang-seling bertingkat). Jangan buat soal logika yang terlalu mudah ditebak.`;
    } 
    else if (gateKey === 'subtest-ppu') {
        promptUser += `Khusus subtes PPU: Buat soal sinonim/antonim kontekstual (kata umum yang maknanya berubah tergantung kalimat), peribahasa kiasan tingkat tinggi, dan ejaan/yang disempurnakan yang sering tertukar.`;
    } 
    else if (gateKey === 'subtest-pbm') {
        promptUser += `Khusus subtes PBM: Sediakan teks esai/artikel jurnalistik/ilmiah yang PANJANG (minimal 150 kata). Lalu buat 10 pertanyaan yang meminta user mengevaluasi argumen penulis, menemukan bias, menyimpulkan maksud tersirat, atau memperbaiki struktur kalimat yang kompleks pada teks tersebut. Masukkan teks tersebut ke dalam field "pertanyaan" diikuti dengan soal.`;
    } 
    else if (gateKey === 'subtest-pk') {
        promptUser += `Khusus subtes PK: Buat soal matematika dasar yang membutuhkan analisis aljabar, deret tak hingga, logaritma, atau transformasi geometri. Angka yang digunakan harus tidak bulat atau membutuhkan penyederhanaan rumus terlebih dahulu.`;
    } 
    else if (gateKey === 'subtest-indo') {
        promptUser += `Khusus subtes Literasi B. Indonesia: Sediakan TEKS PANJANG (minimal 200 kata, bisa berupa opini, eksposisi, atau narasi). Masukkan teks tersebut di awal field "pertanyaan". Lalu buat pertanyaan yang meminta user mengidentifikasi ide pokok, mengevaluasi keefektifan argumen, menemukan bias penulis, atau menyimpulkan maksud tersirat dari teks tersebut.`;
    } 
    else if (gateKey === 'subtest-inggris') {
        promptUser += `Khusus subtes Literasi B. Inggris: Sediakan TEKS PANJANG dalam bahasa Inggris (minimal 200 kata, akademik atau jurnalistik). Masukkan teks tersebut di awal field "pertanyaan". Lalu buat pertanyaan yang meminta user doing critical reading: identifying author's tone, inferring main idea, finding detailed information, atau understanding contextual vocabulary.`;
    } 
    else if (gateKey === 'subtest-pm') {
        promptUser += `Khusus subtes Penalaran Matematika: Buat soal cerita aplikatif yang panjang dan membingungkan (soal cerita asuransi, perbandingan campuran, kecepatan/jarak/waktu dengan sungai/angin, atau peluang kejadian majemuk). Hindari soal hitung cepat, fokus pada pemahaman konsep.`;
    }

    promptUser += ` Pastikan jawaban benar teracak dengan baik. Setiap soal WAJIB memiliki pembahasan yang detail dan logis.`;

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

        if (response.status === 429) {
            // Jika kena limit, ganti API Key dan coba lagi
            rotateApiKey();
            return generateSoalDariAI(gateKey);
        }

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

function mulaiSimulasi(gateKey) {
    let bank = BANK_SIMULASI[gateKey] || [];
    
    if(bank.length === 0) {
        document.getElementById('panel-latihan-sim').innerHTML = "<div class='locked-state-card'><h3>Bank soal untuk subtes ini belum tersedia.</h3></div>";
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
    
    const btnSelanjutnya = document.getElementById('btn-selanjutnya');
    if(btnSelanjutnya) btnSelanjutnya.focus();
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

// ====== FUNGSI PARSER MARKDOWN SEDERHANA ======
function parseMarkdown(text) {
    let html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html = html.replace(/```([\s\S]*?)```/g, (m, p1) => `<pre><code>${p1.trim()}</code></pre>`);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>').replace(/__([^_]+)__/g, '<strong>$1</strong>');
    html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>').replace(/_([^_]+)_/g, '<em>$1</em>');
    
    const lines = html.split('\n');
    let inUl = false, inOl = false;
    let resultHtml = '';
    
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

// ====== FITUR CHAT AI (GROQ - MULTI KEY ROTATION, Web Scanning, Markdown, Typing Effect) ======
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
        });
    }

    if(closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            chatModal.classList.remove('open');
        });
    }

    function addChatMessage(text, sender, isTyping = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${sender}-message`);
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('msg-content');
        
        if (sender === 'ai') {
            if (isTyping) {
                contentDiv.textContent = text;
            } else {
                contentDiv.innerHTML = parseMarkdown(text);
            }
        } else {
            contentDiv.textContent = text;
        }
        
        messageDiv.appendChild(contentDiv);
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

    function hideChatLoading() {
        const loading = document.getElementById('chat-loading');
        if(loading) loading.remove();
    }

    function scanVisibleContent() {
        let contextText = "Konteks Halaman Saat Ini:\n";
        const activePanel = document.querySelector('.sub-panel:not([style*="display: none"])');
        if (activePanel) {
            contextText += activePanel.innerText.substring(0, 2000);
        } else {
            contextText += "User sedang berada di Dashboard utama.";
        }
        return contextText;
    }

    async function typeText(element, text, speed = 10) {
        for (let i = 0; i < text.length; i++) {
            element.textContent += text.charAt(i);
            chatHistory.scrollTop = chatHistory.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }

    async function handleSendChat() {
        const userMessage = chatInput.value.trim();
        if(!userMessage) return;

        addChatMessage(userMessage, 'user');
        chatInput.value = '';
        showChatLoading();

        const pageContext = scanVisibleContent();

        const promptSystem = `Kamu adalah Tutor UTBK profesional yang ahli dalam semua materi UTBK SNBT. 
Kamu sedang melihat layar pengguna. Berikut adalah konteks teks dari halaman yang sedang dilihat pengguna:
"${pageContext}"

Gunakan konteks tersebut untuk menjawab pertanyaan pengguna. Jika pengguna bertanya tentang soal yang sedang dikerjakan, berikan pembahasan yang logis berdasarkan teks soal tersebut. Jika pertanyaan di luar konteks UTBK, jawab dengan sopan bahwa kamu hanya bisa membantu soal UTBK. Gunakan format markdown untuk jawabanmu (gunakan **bold**, *italic*, list, dan blok kode jika perlu) agar jawabanmu mudah dibaca.`;
        
        const messages = [
            { role: "system", content: promptSystem },
            ...chatHistoryGlobal.slice(-10),
            { role: "user", content: userMessage }
        ];

        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getActiveApiKey()}` },
                body: JSON.stringify({
                    model: AI_MODEL,
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            if (response.status === 429) {
                // Jika kena limit, ganti API Key dan coba lagi
                rotateApiKey();
                return handleSendChat();
            }

            if (!response.ok) throw new Error('Gagal menghubungi AI');
            const resJson = await response.json();
            const aiResponse = resJson.choices[0].message.content;

            hideChatLoading();
            
            const msgDiv = addChatMessage('', 'ai', true);
            const contentDiv = msgDiv.querySelector('.msg-content');
            
            await typeText(contentDiv, aiResponse, 10);
            contentDiv.innerHTML = parseMarkdown(aiResponse);
            
            chatHistoryGlobal.push({ role: "user", content: userMessage });
            chatHistoryGlobal.push({ role: "assistant", content: aiResponse });
        } catch (error) {
            hideChatLoading();
            addChatMessage(`Maaf, terjadi kesalahan: ${error.message}`, 'ai');
        }
    }

    if(sendChatBtn) sendChatBtn.addEventListener('click', handleSendChat);
    if(chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') handleSendChat();
        });
    }
}

// ====== FITUR RESIZE CHAT MODAL ======
function initChatResize() {
    const chatModal = document.getElementById('chat-modal');
    const resizeHandle = document.getElementById('chat-resize-handle');
    
    if(!resizeHandle || !chatModal) return;
    
    let isResizing = false;
    
    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        document.body.style.cursor = 'ew-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        
        const rect = chatModal.getBoundingClientRect();
        let newWidth = window.innerWidth - e.clientX;
        
        const minWidth = 320;
        const maxWidth = window.innerWidth * 0.9;
        
        if (newWidth > minWidth && newWidth < maxWidth) {
            chatModal.style.width = newWidth + 'px';
        }
    });
    
    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    });
}
