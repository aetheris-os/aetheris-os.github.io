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

// ====== MATERI UTBK 2024-2026 (SANGAT KOMPREHENSIF & PADAT) ======
const DATA_MATERI = {
  'subtest-pu': {
    title: "Penalaran Umum (PU)", category: "TPS Module",
    desc: "Mengukur kemampuan penalaran logis (silogisme, premis), analitis (deret, permainan kata), dan penalaran kuantitatif.",
    htmlContent: `
      <div class="materi-card">
        <h2>Logika Silogisme & Premis (UTBK 2024-2026)</h2>
        <p>Silogisme adalah penarikan kesimpulan dari dua premis. Aturan mainnya:</p>
        <ul>
          <li><strong>Modus Ponens:</strong> Jika p maka q. p terjadi. Maka q terjadi. Contoh: Jika hujan, jalan basah. Hujan. Maka jalan basah.</li>
          <li><strong>Modus Tollens:</strong> Jika p maka q. q tidak terjadi. Maka p tidak terjadi. Contoh: Jika hujan, jalan basah. Jalan tidak basah. Maka tidak hujan.</li>
          <li><strong>Silogisme Rantai:</strong> p -> q, q -> r, maka p -> r.</li>
          <li><strong>Silogisme Partikular:</strong> Subjek disisihkan, predikat dipertahankan. "Semua A adalah B. Sebagian A adalah C. Maka sebagian B adalah C."</li>
        </ul>
        <h3>Jebakan Logika (Fallacies) yang Sering Muncul</h3>
        <ul>
          <li><strong>Affirming the Consequent:</strong> Jika p maka q. q terjadi. Maka p terjadi (SALAH). Bisa saja q terjadi karena sebab lain.</li>
          <li><strong>Denying the Antecedent:</strong> Jika p maka q. p tidak terjadi. Maka q tidak terjadi (SALAH).</li>
          <li><strong>Post Hoc Ergo Propter Hoc:</strong> Karena B terjadi setelah A, maka A menyebabkan B (Tidak selalu benar).</li>
          <li><strong>False Dilemma:</strong> Hanya memberikan dua pilihan ekstrem, padahal ada pilihan lain.</li>
        </ul>
        <h3>Contoh Soal Silogisme (Tipe UTBK 2024)</h3>
        <p><strong>Soal:</strong> Jika harga BBM naik, maka ongkos angkutan umum naik. Jika ongkos angkutan umum naik, maka biaya hidup meningkat. Diketahui biaya hidup tidak meningkat. Kesimpulan yang benar adalah...</p>
        <p><strong>Pembahasan:</strong> Ini adalah modus tollens berantai. p -> q, q -> r. ~r maka ~p. Jadi, harga BBM tidak naik.</p>
      </div>
      <div class="materi-card">
        <h2>Penalaran Analitis: Deret Angka & Huruf</h2>
        <p>Deret angka menggunakan pola aritmatika (+a), geometri (x a), atau kombinasi. Deret huruf menggunakan urutan abjad (A=1, B=2, dst).</p>
        <h3>Pola Deret Tingkat Lanjut</h3>
        <ul>
          <li><strong>Pola Bertingkat (Selisih Berbeda):</strong> Selisih antar suku tidak konstan, tapi membentuk pola baru (misal: +2, +4, +6, +8).</li>
          <li><strong>Pola Silang (Alternating):</strong> Dua pola yang berselang-seling (misal: x2, -2, x2, -2).</li>
          <li><strong>Fibonacci:</strong> Suku ke-n adalah jumlah dua suku sebelumnya (1,1,2,3,5,8,...).</li>
          <li><strong>Pola Pangkat:</strong> Kuadrat (n^2), Kubik (n^3), atau kombinasi (n^2+1). Contoh: 2, 5, 10, 17, 26 (pola n^2+1).</li>
          <li><strong>Pola Akar:</strong> 1, sqrt(2), sqrt(3), 2, sqrt(5)... (pola sqrt(n)).</li>
          <li><strong>Pola Selisih Bertingkat Dua Kali:</strong> Selisih pertama tidak pola, tapi selisih dari selisihnya membentuk pola.</li>
        </ul>
        <h3>Contoh Soal Deret (Tipe UTBK 2024)</h3>
        <p><strong>Soal:</strong> Deret: 2, 5, 10, 17, 26, ...</p>
        <p><strong>Pembahasan:</strong> Selisih: +3, +5, +7, +9. Berikutnya +11. 26+11=37. Atau pola n^2+1: 1^2+1=2, 2^2+1=5, 3^2+1=10, 4^2+1=17, 5^2+1=26, 6^2+1=37.</p>
      </div>
      <div class="materi-card">
        <h2>Penalaran Analitis: Soal Cerita Logis</h2>
        <p>Soal cerita logis melibatkan pengaturan posisi, pencocokan karakteristik, atau urutan peristiwa. Contoh tipe soal "Siapa yang duduk di sebelah siapa?" atau "Siapa yang memakai baju apa?".</p>
        <h3>Strategi Pengerjaan</h3>
        <ul>
          <li><strong>Buat Tabel/Grid:</strong> Untuk soal pencocokan, buat tabel dengan baris (orang) dan kolom (atribut).</li>
          <li><strong>Tandai Clue Pasti vs Tidak Pasti:</strong> "A duduk di ujung" (pasti), "B tidak duduk di samping C" (tidak pasti, gunakan eliminasi).</li>
          <li><strong>Gunakan Eliminasi:</strong> Jika atribut A sudah diambil oleh orang 1, maka orang lain tidak bisa pakai atribut A.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Penalaran Kuantitatif (PU)</h2>
        <p>Berbeda dari PK, PU Kuantitatif lebih fokus pada logika perbandingan dan analisis data singkat, bukan hitungan rumit.</p>
        <ul>
          <li><strong>Perbandingan Senilai & Berbalik Nilai:</strong> Memahami hubungan kausal antar variabel. Jika a~b, maka a/b konstan. Jika a~1/b, maka a x b konstan.</li>
          <li><strong>Analisis Diagram Venn:</strong> Membaca Venn diagram 3-4 himpunan untuk menarik kesimpulan irisan. Rumus: n(A gabungan B) = n(A) + n(B) - n(A irisan B).</li>
          <li><strong>Operasi Bilangan Cepat:</strong> Sifat komutatif, asosiatif, distributif untuk mempercepat hitung.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Permainan Kata & Analogi</h2>
        <p>Soal analogi meminta Anda mencari hubungan antar kata. Contoh: "Dokter : Pasien = Guru : ?" (Jawaban: Murid).</p>
        <h3>Tipe Hubungan Analogi</h3>
        <ul>
          <li><strong>Sinonim:</strong> Kata yang maknanya sama (Besar : Luas).</li>
          <li><strong>Antonim:</strong> Kata yang maknanya berlawanan (Tinggi : Rendah).</li>
          <li><strong>Part-Whole (Bagian-Keseluruhan):</strong> Halaman : Buku.</li>
          <li><strong>Cause-Effect (Sebab-Akibat):</strong> Hujan : Basah.</li>
          <li><strong>Tool-Object (Alat-Objek):</strong> Pisau : Memotong.</li>
          <li><strong>Symbol-Representation:</strong> Merpati : Damai.</li>
        </ul>
      </div>
    `
  },
  'subtest-ppu': {
    title: "Pengetahuan & Pemahaman Umum (PPU)", category: "TPS Module",
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
          <li><strong>System</strong> menjadi <code>sistem</code> (bukan systeem)</li>
          <li><strong>Detail</strong> menjadi <code>detail</code> (bukan detil)</li>
          <li><strong>Standard</strong> menjadi <code>standar</code> (bukan standard)</li>
          <li><strong>Analysis</strong> menjadi <code>analisis</code> (bukan analisa)</li>
        </ul>
        <h3>Contoh Soal Sinonim Kontekstual</h3>
        <p><strong>Soal:</strong> Makna kata "bunga" dalam kalimat "Bunga bank bulan ini naik" adalah...</p>
        <p><strong>Pembahasan:</strong> Dalam konteks keuangan, "bunga" berarti keuntungan tambahan (jasa uang), bukan kembang tumbuhan.</p>
      </div>
      <div class="materi-card">
        <h2>Ejaan yang Disempurnakan (EYD V)</h2>
        <p>Perhatikan penulisan huruf kapital, imbuhan asing, dan kata depan.</p>
        <h3>Aturan "Di" vs "Di"</h3>
        <ul>
          <li><strong>"Di" sebagai awalan verba pasif:</strong> digabung (dimakan, dipukul, ditulis).</li>
          <li><strong>"Di" sebagai preposisi tempat:</strong> dipisah (di rumah, di sekolah, di atas).</li>
        </ul>
        <h3>Partikel "pun"</h3>
        <ul>
          <li><strong>Dipisah:</strong> Umumnya dipisah (Saya pun pergi, Apa pun terjadi).</li>
          <li><strong>Digabung:</strong> Pada kata tertentu (meskipun, walai pun, bagaimanapun, kendatipun, biarpun).</li>
        </ul>
        <h3>Partikel "lah", "kah", "tah"</h3>
        <ul>
          <li><strong>Digabung:</strong> pada kata ganti orang pertama (Akulah, Kamikah).</li>
          <li><strong>Dipisah:</strong> pada kata lain (Mari kita pergi lah, Siapakah dia).</li>
        </ul>
        <h3>Tanda Baca</h3>
        <ul>
          <li><strong>Tanda titik dua (:):</strong> Digunakan pada kalimat langsung setelah pengantar.</li>
          <li><strong>Tanda hubung (-):</strong> Digunakan pada kata ulang sebagian (anak-anak) atau imbuhan asing (neo-kolonialisme).</li>
          <li><strong>Tanda seru (!):</strong> Digunakan untuk perintah atau seruan.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Tata Bahasa & Majas</h2>
        <p>Memahami penggunaan kata penghubung antarklausa dan majas.</p>
        <h3>Konjungsi Antarklausa</h3>
        <ul>
          <li><strong>Sebab-Akibat:</strong> karena, sehingga, oleh karena itu.</li>
          <li><strong>Akibat-Sebab:</strong> karena, sebab.</li>
          <li><strong>Pertentangan:</strong> tetapi, sedangkan, namun, melainkan.</li>
          <li><strong>Pilihan:</strong> atau, baik...maupun...</li>
          <li><strong>Penambah:</strong> dan, serta.</li>
        </ul>
        <p>Jangan gunakan dua konjungsi sekaligus dalam satu klausa (Pleonasme). Contoh salah: "Karena hujan, maka dia tidak datang." (Gunakan salah satu saja).</p>
        <h3>Jenis Majas</h3>
        <ul>
          <li><strong>Metafora:</strong> Perbandingan langsung tanpa kata pembanding (Anak emas, kambing hitam, tulang punggung).</li>
          <li><strong>Personifikasi:</strong> Benda mati seolah-olah hidup (Angin berbisik, matahari tersenyum).</li>
          <li><strong>Hiperbola:</strong> Melebih-lebihkan (Darah mengalir deras sebagai air bah).</li>
          <li><strong>Ironi:</strong> Sindiran halus dengan kata-kata berlawanan (Wah, bagus sekali nilaimu, merah semua).</li>
          <li><strong>Sarkasme:</strong> Sindiran kasar dan menyakitkan (Bodoh sekali kamu ini).</li>
          <li><strong>Satire:</strong> Sindiran dengan kiasan (Sambil menyelam minum air).</li>
          <li><strong>Simile:</strong> Perbandingan eksplisit dengan kata "seperti/bagai" (Wajahnya pucat seperti bulan).</li>
          <li><strong>Metonimia:</strong> Mengganti nama benda dengan nama yang ada hubungannya (Saya sedang membaca Pramoedya = buku karya Pramoedya).</li>
          <li><strong>Sinekdoke:</strong> Pertukaran nama, sebagian untuk menyatakan keseluruhan atau sebaliknya (Saya belum melihat batang hidungnya = orangnya).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Peribahasa & Pepatah</h2>
        <p>Soal PPU sering menanyakan makna peribahasa dalam konteks tertentu.</p>
        <h3>Peribahasa Populer</h3>
        <ul>
          <li><strong>Sambil menyelam minum air:</strong> Bekerja sambil mengambil kesempatan pribadi.</li>
          <li><strong>Tak bisa menari dikatakan lantai yang berbatu:</strong> Mencari alasan untuk menutupi kelemahan diri.</li>
          <li><strong>Bagai aur dengan tebing:</strong> Saling membantu/membutuhkan.</li>
          <li><strong>Bersatu kita teguh, bercerai kita runtuh:</strong> Pentingnya persatuan.</li>
          <li><strong>Karena mulut badan binasa:</strong> Karena ucapan sendiri, diri sendiri yang rugi.</li>
          <li><strong>Besar pasak daripada tiang:</strong> Pengeluaran lebih besar dari pemasukan.</li>
          <li><strong>Di mana bumi dipijak, di situ langit dijunjung:</strong> Menghormati adat istiadat setempat.</li>
          <li><strong>Bagai air dengan minyak:</strong> Tidak bisa bersatu.</li>
          <li><strong>Buat alur, alur lepas:</strong> Siasat yang kalah licik dari siasat lawan.</li>
          <li><strong>Malu bertanya sesat di jalan:</strong> Pentingnya bertanya jika tidak tahu.</li>
        </ul>
      </div>
    `
  },
  'subtest-pbm': {
    title: "Memahami Bacaan & Menulis (PBM)", category: "TPS Module",
    desc: "Mengukur kemampuan memahami teks, menemukan gagasan utama, dan menyusun kalimat efektif.",
    htmlContent: `
      <div class="materi-card">
        <h2>Kalimat Efektif (UTBK 2024-2026)</h2>
        <p>Kalimat efektif harus memenuhi syarat: hemat kata, logis, dan strukturnya jelas (Subjek-Predikat).</p>
        <h3>Syarat Kalimat Efektif</h3>
        <ul>
          <li><strong>Keseparasan (Struktur S-P):</strong> Subjek dan predikat harus jelas. Hindari kalimat tanpa subjek (misal: "Bagi siswa yang rajin akan lulus" -> "Siswa yang rajin akan lulus").</li>
          <li><strong>Kehematan Kata:</strong> Hindari pleonasme (pemborosan kata). Contoh: "agar supaya" (salah), "sejak dari" (salah), "pada hal" (salah, yang benar "padahal"), "sangat sekali" (salah).</li>
          <li><strong>Kevarian Kalimat:</strong> Hindari penggunaan konjungsi yang berlebihan dalam satu kalimat.</li>
          <li><strong>Kelogisan:</strong> Hindari kalimat ambigu (bermakna ganda).</li>
          <li><strong>Keparalel:</strong> Struktur yang sejajar, terutama pada daftar atau pilihan.</li>
        </ul>
        <h3>Contoh Soal Kalimat Efektif</h3>
        <p><strong>Soal:</strong> Perbaiki kalimat: "Bagi siswa yang rajin belajar akan lulus ujian."</p>
        <p><strong>Pembahasan:</strong> Kata depan "bagi" membuat subjek tidak jelas. Hilangkan "bagi" agar subjek "siswa" jelas. Hasilnya: "Siswa yang rajin belajar akan lulus ujian."</p>
      </div>
      <div class="materi-card">
        <h2>Gagasan Utama & Kalimat Utama</h2>
        <p>Gagasan utama adalah inti pikiran paragraf. Letaknya bisa di awal (deduktif), akhir (induktif), atau awal-akhir (campuran).</p>
        <h3>Jenis Paragraf</h3>
        <ul>
          <li><strong>Paragraf Deskripsi:</strong> Menggambarkan objek secara detail (panca indra).</li>
          <li><strong>Paragraf Narasi:</strong> Menceritakan peristiwa secara kronologis.</li>
          <li><strong>Paragraf Eksposisi:</strong> Memaparkan data/fakta secara informatif.</li>
          <li><strong>Paragraf Argumentasi:</strong> Menyampaikan pendapat disertai alasan logis.</li>
          <li><strong>Paragraf Persuasi:</strong> Meyakinkan pembaca untuk melakukan sesuatu.</li>
        </ul>
        <h3>Cara Menemukan Gagasan Utama</h3>
        <ul>
          <li><strong>Paragraf Deduktif:</strong> Gagasan utama di awal paragraf.</li>
          <li><strong>Paragraf Induktif:</strong> Gagasan utama di akhir paragraf.</li>
          <li><strong>Paragraf Campuran:</strong> Gagasan utama di awal dan akhir.</li>
          <li><strong>Kalimat Utama:</strong> Kalimat yang berisi gagasan utama.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Teks Prosedur & Laporan</h2>
        <p>Teks prosedur memuat langkah-langkah membuat sesuatu, sedangkan laporan hasil observasi memaparkan hasil pengamatan secara objektif.</p>
        <h3>Struktur Teks Prosedur</h3>
        <ul>
          <li><strong>Tujuan:</strong> Tujuan dari pembuatan sesuatu.</li>
          <li><strong>Alat & Bahan:</strong> Daftar alat dan bahan yang digunakan.</li>
          <li><strong>Langkah-langkah:</strong> Uraian cara membuat secara berurutan.</li>
          <li><strong>Penutup:</strong> Hasil akhir atau saran.</li>
        </ul>
        <h3>Struktur Laporan Hasil Observasi</h3>
        <ul>
          <li><strong>Pernyataan umum:</strong> Definisi dan klasifikasi objek.</li>
          <li><strong>Deskripsi bagian:</strong> Uraian ciri-ciri objek.</li>
          <li><strong>Penutup:</strong> Kesimpulan atau manfaat.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Teks Argumentasi & Persuasi</h2>
        <p>Teks argumentasi membuktikan pendapat dengan logis, sedangkan persuasi membujuk pembaca untuk melakukan sesuatu.</p>
        <h3>Struktur Teks Argumentasi</h3>
        <ul>
          <li><strong>Tesis (Pendapat):</strong> Pernyataan posisi penulis di awal.</li>
          <li><strong>Argumentasi (Alasan/Bukti):</strong> Data, fakta, atau logika yang mendukung tesis.</li>
          <li><strong>Penegasan ulang:</strong> Kesimpulan yang menegaskan kembali tesis.</li>
        </ul>
        <h3>Ciri Persuasi</h3>
        <ul>
          <li>Mengandung ajakan, imbauan, atau paksaan halus.</li>
          <li>Bertujuan mengubah perilaku pembaca.</li>
          <li>Argumentasi dipakai untuk meyakinkan, bukan sekadar membuktikan.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Teks Eksposisi & Berita</h2>
        <p>Teks eksposisi memaparkan fakta dan data. Teks berita memuat peristiwa aktual.</p>
        <h3>Struktur Teks Eksposisi</h3>
        <ul>
          <li><strong>Tesis:</strong> Pendapat awal yang akan dibahas.</li>
          <li><strong>Argumentasi:</strong> Data dan fakta pendukung.</li>
          <li><strong>Penegasan ulang:</strong> Kesimpulan.</li>
        </ul>
        <h3>Unsur Berita (5W+1H)</h3>
        <ul>
          <li><strong>Who:</strong> Siapa yang terlibat.</li>
          <li><strong>What:</strong> Apa yang terjadi.</li>
          <li><strong>When:</strong> Kapan terjadi.</li>
          <li><strong>Where:</strong> Di mana terjadi.</li>
          <li><strong>Why:</strong> Mengapa terjadi.</li>
          <li><strong>How:</strong> Bagaimana prosesnya.</li>
        </ul>
      </div>
    `
  },
  'subtest-pk': {
    title: "Pengetahuan Kuantitatif (PK)", category: "TPS Module",
    desc: "Mengukur kemampuan matematika dasar: aljabar, aritmatika, geometri, dan statistik.",
    htmlContent: `
      <div class="materi-card">
        <h2>Aljabar & Aritmatika Sosial (UTBK 2024-2026)</h2>
        <h3>Persamaan Linear</h3>
        <ul>
          <li><strong>Substitusi:</strong> Ganti variabel dengan nilai yang diketahui.</li>
          <li><strong>Eliminasi:</strong> Hilangkan satu variabel dengan menjumlahkan/mengurangkan persamaan.</li>
        </ul>
        <h3>Aritmatika Sosial</h3>
        <ul>
          <li><strong>Untung:</strong> Harga Jual > Harga Beli. Untung = HJ - HB.</li>
          <li><strong>Rugi:</strong> Harga Jual < Harga Beli. Rugi = HB - HJ.</li>
          <li><strong>Diskon:</strong> Potongan harga. Harga setelah diskon = Harga x (1 - %diskon).</li>
          <li><strong>Pajak:</strong> Persentase dari penghasilan/penjualan.</li>
          <li><strong>Bunga Tunggal:</strong> Bunga = Modal x i x n (i = suku bunga, n = periode).</li>
          <li><strong>Bruto vs Neto:</strong> Bruto = berat kotor. Neto = berat bersih (berat kotor - tara).</li>
        </ul>
        <h3>Contoh Soal Aritmatika Sosial</h3>
        <p><strong>Soal:</strong> Sebuah barang dibeli Rp200.000. Dijual dengan untung 15%. Harga jual?</p>
        <p><strong>Pembahasan:</strong> Untung = 15% x 200.000 = 30.000. HJ = 200.000 + 30.000 = 230.000.</p>
      </div>
      <div class="materi-card">
        <h2>Limit, Logaritma & Eksponen</h2>
        <h3>Limit (Mendekati)</h3>
        <ul>
          <li><strong>Definisi:</strong> Nilai yang didekati fungsi f(x) saat x mendekati a. Ditulis: lim x->a f(x).</li>
          <li><strong>Limit Fungsi Aljabar:</strong> Faktorkan untuk menghilangkan bentuk 0/0. Contoh: lim x->3 (x^2 - 9)/(x - 3) = lim x->3 (x+3) = 6.</li>
          <li><strong>Limit Fungsi Akar:</strong> Kalikan dengan akar sekawan. Contoh: lim x->5 (sqrt(x+4) - 3)/(x - 5) = 1/6.</li>
          <li><strong>Limit Menuju Tak Hingga:</strong> Ambil koefisien pangkat tertinggi. Contoh: lim x->inf (3x^2 - 2x + 1)/(x^2 + 5) = 3.</li>
          <li><strong>Limit Trigonometri:</strong> lim x->0 (sin ax)/x = a. lim x->0 (tan bx)/x = b.</li>
        </ul>
        <h3>Logaritma</h3>
        <ul>
          <li><strong>Definisi:</strong> ^a log b = c <-> a^c = b.</li>
          <li><strong>Sifat:</strong> ^a log(b x c) = ^a log b + ^a log c. ^a log(b/c) = ^a log b - ^a log c. ^a log b^n = n x ^a log b.</li>
          <li><strong>Contoh:</strong> ^4 log 8 + ^4 log 2 = ^4 log(8x2) = ^4 log 16 = 2.</li>
        </ul>
        <h3>Eksponen (Pangkat)</h3>
        <ul>
          <li><strong>Sifat:</strong> a^m x a^n = a^(m+n). (a^m)^n = a^(m x n). a^-n = 1/a^n.</li>
          <li><strong>Contoh Pangkat Tinggi:</strong> Satuan dari 2^2026. Pola satuan 2: 2, 4, 8, 6 (ulang tiap 4). 2026 mod 4 = 2, maka satuan = 4.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Deret Aritmatika & Geometri</h2>
        <h3>Barisan Aritmatika</h3>
        <ul>
          <li><strong>Suku ke-n:</strong> U_n = a + (n-1)b</li>
          <li><strong>Jumlah n suku:</strong> S_n = n/2 x (2a + (n-1)b) atau S_n = n/2 x (a + U_n)</li>
        </ul>
        <h3>Barisan Geometri</h3>
        <ul>
          <li><strong>Suku ke-n:</strong> U_n = a x r^(n-1)</li>
          <li><strong>Jumlah n suku:</strong> S_n = a x (r^n - 1) / (r - 1) for r > 1</li>
          <li><strong>Jumlah n suku tak hingga:</strong> S_inf = a / (1 - r) untuk |r| < 1</li>
        </ul>
        <h3>Contoh Soal Deret</h3>
        <p><strong>Soal:</strong> Suku pertama deret aritmatika 5, beda 3. Jumlah 10 suku pertama?</p>
        <p><strong>Pembahasan:</strong> S_n = 10/2 x (2(5) + 9(3)) = 5 x (10 + 27) = 5 x 37 = 185.</p>
      </div>
      <div class="materi-card">
        <h2>Geometri & Trigonometri</h2>
        <h3>Bangun Datar</h3>
        <ul>
          <li><strong>Persegi:</strong> Luas = s^2. Keliling = 4s.</li>
          <li><strong>Persegi Panjang:</strong> Luas = p x l. Keliling = 2(p + l).</li>
          <li><strong>Segitiga:</strong> Luas = 1/2 x a x t. Keliling = jumlah sisi.</li>
          <li><strong>Lingkaran:</strong> Luas = pi x r^2. Keliling = 2 x pi x r.</li>
          <li><strong>Trapesium:</strong> Luas = 1/2 x (sisi sejajar) x t.</li>
          <li><strong>Jajaran genjang:</strong> Luas = alas x tinggi.</li>
          <li><strong>Layang-layang:</strong> Luas = 1/2 x d1 x d2.</li>
        </ul>
        <h3>Bangun Ruang</h3>
        <ul>
          <li><strong>Kubus:</strong> Volume = s^3. Luas permukaan = 6s^2.</li>
          <li><strong>Balok:</strong> Volume = p x l x t. Luas = 2(pl + pt + lt).</li>
          <li><strong>Tabung:</strong> Volume = pi x r^2 x t. Luas = 2 x pi x r x (r + t).</li>
          <li><strong>Kerucut:</strong> Volume = 1/3 x pi x r^2 x t. Luas = pi x r x (r + s).</li>
          <li><strong>Bola:</strong> Volume = 4/3 x pi x r^3. Luas = 4 x pi x r^2.</li>
          <li><strong>Limas:</strong> Volume = 1/3 x luas alas x t.</li>
          <li><strong>Prisma:</strong> Volume = luas alas x t.</li>
        </ul>
        <h3>Trigonometri</h3>
        <ul>
          <li><strong>Pythagoras:</strong> a^2 + b^2 = c^2 (segitiga siku-siku).</li>
          <li><strong>Perbandingan:</strong> sin = depan/miring, cos = samping/miring, tan = depan/samping.</li>
          <li><strong>Aturan Sinus:</strong> a/sin A = b/sin B = c/sin C = 2R (segitiga sembarang).</li>
          <li><strong>Aturan Cosinus:</strong> c^2 = a^2 + b^2 - 2ab cos C (segitiga sembarang).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Statistika & Peluang</h2>
        <h3>Ukuran Pemusatan Data</h3>
        <ul>
          <li><strong>Mean (Rata-rata):</strong> Jumlah data / banyak data.</li>
          <li><strong>Median (Nilai tengah):</strong> Data diurutkan, ambil tengah. Jika genap, rata-rata dua tengah.</li>
          <li><strong>Modus (Paling sering):</strong> Nilai yang paling banyak muncul.</li>
          <li><strong>Kuartil:</strong> Q1 (25%), Q2 (median/50%), Q3 (75%).</li>
        </ul>
        <h3>Peluang</h3>
        <ul>
          <li><strong>Peluang:</strong> P(A) = n(A) / n(S).</li>
          <li><strong>Peluang Komplemen:</strong> P(A') = 1 - P(A).</li>
          <li><strong>Permutasi (Urutan penting):</strong> P(n,r) = n! / (n-r)!</li>
          <li><strong>Kombinasi (Urutan tidak penting):</strong> C(n,r) = n! / (r!(n-r)!)</li>
        </ul>
        <h3>Contoh Soal Statistika</h3>
        <p><strong>Soal:</strong> Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 adalah...</p>
        <p><strong>Pembahasan:</strong> Modus = data paling sering muncul = 6 (muncul 3 kali).</p>
      </div>
    `
  },
  'subtest-indo': {
    title: "Literasi B. Indonesia", category: "Literasi Module",
    desc: "Mengukur kemampuan membaca kritis, evaluasi teks, dan sintesis informasi.",
    htmlContent: `
      <div class="materi-card">
        <h2>Membaca Kritis & Evaluatif (UTBK 2024-2026)</h2>
        <p>Literasi Bahasa Indonesia tidak sekadar memahami teks, tapi mengevaluasi argumen penulis.</p>
        <h3>Bedah Teks</h3>
        <ul>
          <li><strong>Membedakan Fakta & Opini:</strong> Fakta berdasarkan data/riset, opini berdasarkan penilaian pribadi.</li>
          <li><strong>Menemukan Bias:</strong> Identifikasi apakah penulis berpihak pada satu sudut pandang tertentu.</li>
          <li><strong>Sintesis:</strong> Menggabungkan informasi dari beberapa teks untuk menarik kesimpulan baru.</li>
          <li><strong>Parafrase:</strong> Menyimpulkan isi teks dengan bahasa sendiri tanpa mengubah maksud asli.</li>
          <li><strong>Inferensi:</strong> Menyimpulkan makna tersirat dari teks.</li>
        </ul>
        <h3>Contoh Soal Literasi</h3>
        <p><strong>Soal:</strong> Teks: "Berdasarkan riset, siswa yang tidur 8 jam memiliki fokus 40% lebih baik." Pernyataan ini merupakan...</p>
        <p><strong>Pembahasan:</strong> Berdasarkan riset dan data persentase = fakta.</p>
      </div>
      <div class="materi-card">
        <h2>Teks Argumentasi & Persuasi</h2>
        <p>Teks argumentasi membuktikan pendapat dengan logis, sedangkan persuasi membujuk pembaca untuk melakukan sesuatu.</p>
        <h3>Struktur Teks Argumentasi</h3>
        <ul>
          <li><strong>Tesis:</strong> Pendapat penulis di awal.</li>
          <li><strong>Argumentasi:</strong> Alasan/bukti pendukung.</li>
          <li><strong>Penegasan ulang:</strong> Kesimpulan.</li>
        </ul>
        <h3>Ciri Persuasi</h3>
        <ul>
          <li>Mengandung ajakan, imbauan, atau paksaan halus.</li>
          <li>Bertujuan mengubah perilaku pembaca.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Majas & Gaya Bahasa</h2>
        <ul>
          <li><strong>Hiperbola:</strong> Melebih-lebihkan.</li>
          <li><strong>Ironi:</strong> Sindiran halus dengan kata-kata berlawanan.</li>
          <li><strong>Sarkasme:</strong> Sindiran kasar dan menyakitkan.</li>
          <li><strong>Satire:</strong> Sindiran dengan kiasan.</li>
          <li><strong>Metafora:</strong> Perbandingan langsung (anak emas).</li>
          <li><strong>Personifikasi:</strong> Benda mati seolah hidup (angin berbisik).</li>
          <li><strong>Simile:</strong> Perbandingan dengan "seperti/bagai".</li>
          <li><strong>Metonimia:</strong> Mengganti nama benda dengan nama yang berhubungan.</li>
          <li><strong>Sinekdoke:</strong> Sebagian untuk keseluruhan atau sebaliknya.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Struktur Teks & Kebahasaan</h2>
        <h3>Teks Eksposisi</h3>
        <ul>
          <li><strong>Tesis:</strong> Pendapat awal.</li>
          <li><strong>Argumentasi:</strong> Data/fakta.</li>
          <li><strong>Penegasan ulang:</strong> Kesimpulan.</li>
        </ul>
        <h3>Teks Negosiasi</h3>
        <ul>
          <li><strong>Orientation:</strong> Pengenalan.</li>
          <li><strong>Request:</strong> Permintaan.</li>
          <li><strong>Fulfillment:</strong> Pemenuhan.</li>
          <li><strong>Acceptance:</strong> Persetujuan.</li>
          <li><strong>Closure:</strong> Penutup.</li>
        </ul>
        <h3>Teks Cerita Sejarah</h3>
        <ul>
          <li><strong>Orientasi:</strong> Pengenalan latar.</li>
          <li><strong>Events:</strong> Peristiwa berurutan.</li>
          <li><strong>Reorientation:</strong> Kesimpulan penulis.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Teknik Membaca</h2>
        <ul>
          <li><strong>Skimming:</strong> Membaca cepat untuk gagasan utama.</li>
          <li><strong>Scanning:</strong> Mencari informasi spesifik (nama, angka, tanggal).</li>
          <li><strong>Intensive Reading:</strong> Membaca detail untuk pemahaman mendalam.</li>
          <li><strong>Extensive Reading:</strong> Membaca untuk hiburan/pengetahuan umum.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Kata Penghubung (Konjungsi)</h2>
        <ul>
          <li><strong>Aditif:</strong> menambah (dan, serta).</li>
          <li><strong>Antitetis:</strong> menentang (tetapi, namun, sedangkan).</li>
          <li><strong>Kausal:</strong> sebab-akibat (karena, sehingga, maka).</li>
          <li><strong>Temporal:</strong> waktu (sebelum, sesudah, ketika).</li>
          <li><strong>Kondisional:</strong> syarat (jika, kalau, apabila).</li>
          <li><strong>Konsesif:</strong> urun rem (walaupun, meskipun).</li>
        </ul>
      </div>
    `
  },
  'subtest-inggris': {
    title: "Literasi B. Inggris", category: "Literasi Module",
    desc: "Mengukur kemampuan reading comprehension, critical reading, dan contextual vocabulary.",
    htmlContent: `
      <div class="materi-card">
        <h2>Critical Reading & Comprehension (UTBK 2024-2026)</h2>
        <p>Fokus pada pemahaman teks akademik dan jurnalistik berbahasa Inggris.</p>
        <ul>
          <li><strong>Main Idea & Topic Sentence:</strong> Menemukan gagasan utama paragraf.</li>
          <li><strong>Inference:</strong> Menyimpulkan informasi tersirat (implied meaning) dari teks.</li>
          <li><strong>Contextual Vocabulary:</strong> Menebak makna kata berdasarkan konteks kalimat.</li>
          <li><strong>Author's Tone:</strong> Mengidentifikasi sikap penulis (objektif, subjektif, skeptis, optimis, pesimis, ironis).</li>
          <li><strong>Author's Purpose:</strong> Menemukan tujuan penulis (to inform, to persuade, to entertain).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Grammar & Structure</h2>
        <h3>Conditional Sentences</h3>
        <ul>
          <li><strong>Type 0:</strong> Fakta alam. If + simple present, simple present. (If you heat ice, it melts.)</li>
          <li><strong>Type 1:</strong> Mungkin terjadi. If + simple present, will + V1. (If it rains, I will stay.)</li>
          <li><strong>Type 2:</strong> Tidak nyata di masa kini. If + past simple, would + V1. (If I were rich, I would travel.)</li>
          <li><strong>Type 3:</strong> Penyesalan masa lalu. If + past perfect, would have + V3. (If I had studied, I would have passed.)</li>
        </ul>
        <h3>Passive Voice</h3>
        <ul>
          <li><strong>Rumus:</strong> To be + V3. (The book was bought by John.)</li>
          <li><strong>Modal:</strong> Modal + be + V3. (The room must be cleaned.)</li>
        </ul>
        <h3>Relative Pronouns</h3>
        <ul>
          <li><strong>Who:</strong> subjek manusia. (The man who lives next door...)</li>
          <li><strong>Whom:</strong> objek manusia. (The woman whom I met...)</li>
          <li><strong>Which:</strong> benda/hewan. (The book which is on the table...)</li>
          <li><strong>Whose:</strong> milik. (The boy whose father is a doctor...)</li>
          <li><strong>That:</strong> benda atau manusia (informal).</li>
        </ul>
        <h3>Reported Speech</h3>
        <ul>
          <li><strong>Direct:</strong> He said, "I am happy."</li>
          <li><strong>Indirect:</strong> He said that he was happy. (Tense mundur 1 tingkat).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Text Types</h2>
        <ul>
          <li><strong>Descriptive:</strong> Menggambarkan ciri-ciri subjek.</li>
          <li><strong>Narrative:</strong> Menceritakan kisah fiksi (orientation, complication, resolution).</li>
          <li><strong>Procedure:</strong> Memberi instruksi langkah demi langkah (goal, materials, steps).</li>
          <li><strong>Report:</strong> Menyajikan informasi umum secara sistematis (general classification, description).</li>
          <li><strong>Recount:</strong> Menceritakan pengalaman masa lalu (orientation, events, reorientation).</li>
          <li><strong>Exposition (Analytical):</strong> Membuktikan pendapat (thesis, arguments, reiteration).</li>
          <li><strong>Hortatory:</strong> Membujuk (thesis, arguments, recommendation).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Vocabulary & Idioms</h2>
        <h3>Prefixes (Awalan)</h3>
        <ul>
          <li><strong>Un-, In-, Dis-:</strong> Tidak (unhappy, invisible, disagree).</li>
          <li><strong>Re-:</strong> Ulang (rewrite).</li>
          <li><strong>Pre-:</strong> Sebelum (preview).</li>
        </ul>
        <h3>Suffixes (Akhiran)</h3>
        <ul>
          <li><strong>-able, -ible:</strong> Bisa dibilang (readable).</li>
          <li><strong>-ful:</strong> Penuh (beautiful).</li>
          <li><strong>-less:</strong> Tanpa (hopeless).</li>
          <li><strong>-er, -or:</strong> Orang (teacher, actor).</li>
          <li><strong>-tion, -ment:</strong> Proses/hasil (education, development).</li>
        </ul>
        <h3>Idioms Populer</h3>
        <ul>
          <li><strong>Piece of cake:</strong> Sangat mudah.</li>
          <li><strong>Break a leg:</strong> Semoga sukses.</li>
          <li><strong>Once in a blue moon:</strong> Sangat jarang.</li>
          <li><strong>Cost an arm and a leg:</strong> Sangat mahal.</li>
          <li><strong>Let the cat out of the bag:</strong> Tidak sengaja membocorkan rahasia.</li>
          <li><strong>Bite the bullet:</strong> Menghadapi situasi sulit dengan berani.</li>
          <li><strong>Under the weather:</strong> Tidak sehat.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Tenses</h2>
        <ul>
          <li><strong>Simple Present:</strong> Fakta/kebiasaan. (She works every day.)</li>
          <li><strong>Present Continuous:</strong> Sedang terjadi. (She is working now.)</li>
          <li><strong>Present Perfect:</strong> Sudah selesai. (She has worked here for 5 years.)</li>
          <li><strong>Simple Past:</strong> Lampau. (She worked yesterday.)</li>
          <li><strong>Past Continuous:</strong> Sedang terjadi di lampau. (She was working when I called.)</li>
          <li><strong>Future (will):</strong> Masa depan. (She will work tomorrow.)</li>
        </ul>
      </div>
    `
  },
  'subtest-pm': {
    title: "Penalaran Matematika", category: "Literasi Module",
    desc: "Mengukur kemampuan pemecahan masalah matematika dalam konteks nyata.",
    htmlContent: `
      <div class="materi-card">
        <h2>Pemecahan Masalah Kontekstual (UTBK 2024-2026)</h2>
        <p>Soal Penalaran Matematika sering berbentuk soal cerita panjang yang membutuhkan translasi ke bahasa matematika.</p>
        <h3>Topik yang Sering Diujikan</h3>
        <ul>
          <li><strong>Perbandingan & Skala:</strong> Perbandingan senilai, berbalik nilai, dan campuran.</li>
          <li><strong>Kecepatan, Jarak, Waktu:</strong> Termasuk konsep arus sungai dan angin (kecepatan relatif).</li>
          <li><strong>Peluang Majemuk:</strong> Kombinasi dan permutasi dalam kasus nyata.</li>
          <li><strong>Barisan & Deret Aplikatif:</strong> Bunga majemuk, pertumbuhan populasi, atau penurunan nilai barang.</li>
          <li><strong>Aritmatika Sosial:</strong> Untung, rugi, diskon berurutan, pajak, bruto-neto.</li>
        </ul>
        <h3>Contoh Soal Kecepatan</h3>
        <p><strong>Soal:</strong> Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Budi berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Budi akan menyusul Joko pada pukul...</p>
        <p><strong>Pembahasan:</strong> Jarak Joko didepan saat 07.00 adalah 60 km. Selisih kecepatan = 20 km/jam. Waktu susul = 60/20 = 3 jam. 07.00 + 3 jam = 10.00.</p>
      </div>
      <div class="materi-card">
        <h2>Aljabar Terapan</h2>
        <ul>
          <li><strong>Sistem Persamaan Linear:</strong> Menyelesaikan masalah cerita dengan dua atau lebih variabel.</li>
          <li><strong>Fungsi Kuadrat:</strong> Mencari titik puncak (maksimum/minimum) dalam konteks ekonomi (untung/rugi maksimal).</li>
          <li><strong>Pertidaksamaan:</strong> Menentukan syarat atau batasan nilai agar suatu kondisi terpenuhi.</li>
          <li><strong>Fungsi:</strong> Memahami komposisi dan invers fungsi dalam konteks nyata.</li>
        </ul>
        <h3>Contoh Soal Aljabar</h3>
        <p><strong>Soal:</strong> Jika 3x + 2y = 12 dan x - y = 1, maka nilai y adalah...</p>
        <p><strong>Pembahasan:</strong> Dari x - y = 1, didapat x = 1 + y. Substitusi: 3(1+y) + 2y = 12 -> 3 + 5y = 12 -> 5y = 9 -> y = 9/5 = 1.8.</p>
      </div>
      <div class="materi-card">
        <h2>Limit, Logaritma & Eksponen</h2>
        <h3>Limit (Mendekati)</h3>
        <ul>
          <li><strong>Definisi:</strong> Nilai yang didekati fungsi f(x) saat x mendekati a. Ditulis: lim x->a f(x).</li>
          <li><strong>Limit Fungsi Aljabar:</strong> Faktorkan untuk menghilangkan bentuk 0/0. Contoh: lim x->3 (x^2 - 9)/(x - 3) = lim x->3 (x+3) = 6.</li>
          <li><strong>Limit Fungsi Akar:</strong> Kalikan dengan akar sekawan. Contoh: lim x->5 (sqrt(x+4) - 3)/(x - 5) = 1/6.</li>
          <li><strong>Limit Menuju Tak Hingga:</strong> Ambil koefisien pangkat tertinggi. Contoh: lim x->inf (3x^2 - 2x + 1)/(x^2 + 5) = 3.</li>
          <li><strong>Limit Trigonometri:</strong> lim x->0 (sin ax)/x = a. lim x->0 (tan bx)/x = b.</li>
        </ul>
        <h3>Logaritma</h3>
        <ul>
          <li><strong>Definisi:</strong> ^a log b = c <-> a^c = b.</li>
          <li><strong>Sifat:</strong> ^a log(b x c) = ^a log b + ^a log c. ^a log(b/c) = ^a log b - ^a log c. ^a log b^n = n x ^a log b.</li>
          <li><strong>Contoh:</strong> ^4 log 8 + ^4 log 2 = ^4 log(8x2) = ^4 log 16 = 2.</li>
        </ul>
        <h3>Eksponen (Pangkat)</h3>
        <ul>
          <li><strong>Sifat:</strong> a^m x a^n = a^(m+n). (a^m)^n = a^(m x n). a^-n = 1/a^n.</li>
          <li><strong>Contoh Pangkat Tinggi:</strong> Satuan dari 2^2026. Pola satuan 2: 2, 4, 8, 6 (ulang tiap 4). 2026 mod 4 = 2, maka satuan = 4.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Statistika & Peluang Lanjutan</h2>
        <ul>
          <li><strong>Deskripsi Data:</strong> Menghitung mean, median, modus dari data berbentuk tabel atau grafik.</li>
          <li><strong>Peluang Kejadian Majemuk:</strong> Kejadian saling bebas (P(A irisan B) = P(A) x P(B)) dan saling lepas (P(A gabungan B) = P(A) + P(B)).</li>
          <li><strong>Expected Value (Nilai Ekspektasi):</strong> E(x) = Sigma x x P(x).</li>
        </ul>
        <h3>Contoh Soal Peluang</h3>
        <p><strong>Soal:</strong> Dari 7 orang siswa, akan dipilih 3 orang untuk menjadi pengurus OSIS. Berapa banyak cara pemilihan yang mungkin? (Kombinasi)</p>
        <p><strong>Pembahasan:</strong> C(7,3) = 7! / (3!4!) = (7x6x5) / 6 = 35.</p>
      </div>
      <div class="materi-card">
        <h2>Geometri Terapan</h2>
        <ul>
          <li><strong>Skala & Perbandingan:</strong> Hubungan antara ukuran pada peta dan ukuran sebenarnya.</li>
          <li><strong>Transformasi Geometri:</strong> Translasi, refleksi, rotasi, dan dilatasi.</li>
          <li><strong>Trigonometri dalam Konteks:</strong> Menghitung ketinggian, jarak, dan sudut elevasi/depresi.</li>
        </ul>
        <h3>Contoh Soal Skala</h3>
        <p><strong>Soal:</strong> Jarak kota A dan B pada peta 1:1.000.000 adalah 5 cm. Jarak sebenarnya?</p>
        <p><strong>Pembahasan:</strong> Jarak = 5 cm x 1.000.000 = 5.000.000 cm = 50 km.</p>
      </div>
      <div class="materi-card">
        <h2>Bunga Majemuk & Pertumbuhan</h2>
        <p>Bunga majemuk adalah bunga yang dihitung dari modal awal ditambah bunga sebelumnya (bunga berbunga).</p>
        <h3>Rumus Bunga Majemuk</h3>
        <p>M_n = M_0 x (1 + i)^n</p>
        <ul>
          <li>M_n = Modal setelah n periode</li>
          <li>M_0 = Modal awal</li>
          <li>i = Suku bunga per periode</li>
          <li>n = Jumlah periode</li>
        </ul>
        <h3>Pertumbuhan Populasi</h3>
        <p>P_n = P_0 x (1 + r)^n (sama dengan bunga majemuk, r = laju pertumbuhan).</p>
      </div>
    `
  }
};

// ====== BANK SOAL SIMULASI (DIBERSIHKAN DARI KODE ANEH) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Lima orang mahasiswa (A, B, C, D, E) tryout peringkat 1-5. A lebih baik dari B tapi lebih buruk dari C. D di tengah A dan E. E tidak juara 1 dan tidak terakhir. Jika E peringkat 2, maka peringkat 1 adalah...", opsi: ["A", "B", "C", "D"], jawaban: 2, pembahasan: "Jika E=2, dan C>A>B, kemungkinan: C=1, E=2, A=3, D=4, B=5." },
    { soal: "Syarat beasiswa: (1) IPK min 3.50, (2) TOEFL min 500, (3) Surat Dekan. Andi syarat 1 dan 3 terpenuhi, TOEFL 480. Pernyataan benar?", opsi: ["Pasti diterima", "Pasti ditolak", "Diterima jika ada syarat dilonggarkan", "Harus ulang TOEFL"], jawaban: 2, pembahasan: "Andi tidak memenuhi satu syarat, bisa diterima jika ada pengecualian." },
    { soal: "Turnamen: Jika X menang vs Y, Y tereliminasi. Y tereliminasi -> Z ke final. Z final -> Z vs X. Diketahui Z tidak vs X di final. Kesimpulan?", opsi: ["X menang", "Y tidak tereliminasi", "Z tereliminasi", "X kalah"], jawaban: 1, pembahasan: "Silogisme rantai: p->q, q->r, r->s. ~s -> ~r -> ~q -> ~p." },
    { soal: "Budi dipanggil sebelum Ani, tapi setelah Citra. Doni terakhir. Eka setelah Ani. Doni ke-5, Citra ke-1. Urutan?", opsi: ["Citra, Budi, Ani, Eka, Doni", "Citra, Ani, Budi, Eka, Doni", "Budi, Citra, Ani, Eka, Doni", "Citra, Budi, Eka, Ani, Doni"], jawaban: 0, pembahasan: "Citra(1) > Budi(2) > Ani(3) > Eka(4) > Doni(5)." },
    { soal: "Regu P,Q,R,S. Jika P jaga -> Q serang. Jika R serang -> S tidak serang. Jika Q tidak serang -> R serang. Jika P jaga, posisi S?", opsi: ["Penyerang", "Penjaga", "Tidak tentu", "Bebas"], jawaban: 2, pembahasan: "P jaga -> Q serang. Karena Q serang, R tidak serang. S tidak ditentukan." },
    { soal: "Semua siswa kelas 12 wajib tryout. Sebagian kelas 12 anggota OSIS. Kesimpulan?", opsi: ["Semua OSIS wajib tryout", "Sebagian wajib tryout adalah OSIS", "Sebagian OSIS tidak wajib", "Tidak ada wajib tryout"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Harga sembako naik -> inflasi naik -> BI rate naik. BI rate tidak naik. Kesimpulan?", opsi: ["Harga sembako naik", "Harga sembako turun", "Harga sembako tidak naik", "Inflasi tetap"], jawaban: 2, pembahasan: "Modus tollens berantai: ~r -> ~q -> ~p." },
    { soal: "Semua peserta ujian wajib bawa KTP. Sebagian yang bawa KTP lupa kartu ujian. Maka...", opsi: ["Semua lupa kartu ujian", "Sebagian peserta ujian lupa kartu ujian", "Tidak ada bawa KTP", "Semua lupa kartu = peserta ujian"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika cerah, Budi main bola. Budi tidak main bola. Maka...", opsi: ["Cerah", "Tidak cerah", "Budi sakit", "Hujan"], jawaban: 1, pembahasan: "Modus tollens: ~q -> ~p." },
    { soal: "Tidak ada ikan mamalia. Hiu ikan. Paus mamalia. Kesimpulan?", opsi: ["Hiu paus", "Hiu bukan mamalia", "Paus ikan", "Paus hiu"], jawaban: 1, pembahasan: "Semua ikan bukan mamalia, hiu ikan, maka hiu bukan mamalia." },
    { soal: "Deret: 2, 6, 12, 20, 30, ...", opsi: ["40", "42", "44", "46"], jawaban: 1, pembahasan: "Selisih +4, +6, +8, +10. Berikutnya +12. 30+12=42." },
    { soal: "Deret: 1, 4, 9, 16, 25, ...", opsi: ["30", "36", "42", "49"], jawaban: 1, pembahasan: "Pola kuadrat: 6^2=36." },
    { soal: "Deret: 2, 3, 5, 7, 11, ...", opsi: ["12", "13", "14", "15"], jawaban: 1, pembahasan: "Bilangan prima." },
    { soal: "Deret: 100, 50, 25, 12.5, ...", opsi: ["6.25", "5", "7.5", "10"], jawaban: 0, pembahasan: "Dibagi 2." },
    { soal: "Deret: 3, 6, 11, 18, 27, ...", opsi: ["36", "38", "40", "42"], jawaban: 1, pembahasan: "Selisih +3, +5, +7, +9. Berikutnya +11. 27+11=38." },
    { soal: "A, C, E, G, I, ...", opsi: ["J", "K", "L", "M"], jawaban: 1, pembahasan: "Lompat 1 huruf." },
    { soal: "Z, X, V, T, R, ...", opsi: ["Q", "P", "O", "N"], jawaban: 1, pembahasan: "Mundur 2 huruf." },
    { soal: "B, D, G, K, P, ...", opsi: ["U", "V", "W", "X"], jawaban: 1, pembahasan: "Selisih +2, +3, +4, +5, +6. P(16)+6=V(22)." },
    { soal: "Deret: 1, 1, 2, 3, 5, 8, 13, ...", opsi: ["18", "20", "21", "24"], jawaban: 2, pembahasan: "Fibonacci: 8+13=21." },
    { soal: "Deret: 2, 5, 10, 17, 26, ...", opsi: ["35", "37", "36", "38"], jawaban: 1, pembahasan: "Pola n^2+1: 6^2+1=37." }
  ],
  'subtest-ppu': [
    { soal: "Sinonim 'Bengis' adalah...", opsi: ["Ramah", "Kejam", "Pemalu", "Penakut"], jawaban: 1, pembahasan: "Bengis = kejam." },
    { soal: "Sinonim 'Ekstensif' adalah...", opsi: ["Sempit", "Luas", "Dalam", "Tinggi"], jawaban: 1, pembahasan: "Ekstensif = luas." },
    { soal: "Sinonim 'Konvensional' adalah...", opsi: ["Modern", "Tradisional", "Futuristik", "Inovatif"], jawaban: 1, pembahasan: "Konvensional = tradisional." },
    { soal: "Sinonim 'Prematur' adalah...", opsi: ["Tepat waktu", "Terlambat", "Lebih awal", "Tua"], jawaban: 2, pembahasan: "Prematur = sebelum waktunya." },
    { soal: "Sinonim 'Filantropis' adalah...", opsi: ["Pecinta uang", "Pecinta manusia", "Pecinta alam", "Pecinta diri"], jawaban: 1, pembahasan: "Filantropis = dermawan." },
    { soal: "Antonim 'Defisit' adalah...", opsi: ["Rugi", "Surplus", "Merugikan", "Bangkrut"], jawaban: 1, pembahasan: "Defisit = kekurangan. Lawan surplus." },
    { soal: "Antonim 'Esensial' adalah...", opsi: ["Pokok", "Penting", "Sekunder", "Utama"], jawaban: 2, pembahasan: "Esensial = penting. Lawan sekunder." },
    { soal: "Antonim 'Implisit' adalah...", opsi: ["Tersurat", "Tersirat", "Samara", "Tersembunyi"], jawaban: 0, pembahasan: "Implisit = tersirat. Lawan eksplisit (tersurat)." },
    { soal: "Antonim 'Apatis' adalah...", opsi: ["Peduli", "Malas", "Acuh", "Dingin"], jawaban: 0, pembahasan: "Apati = tidak peduli. Lawan peduli." },
    { soal: "Antonim 'Relevan' adalah...", opsi: ["Cocok", "Berkaitan", "Tak nyambung", "Sama"], jawaban: 2, pembahasan: "Relevan = berhubungan. Lawan tak nyambung." },
    { soal: "Ejaan benar: 'Kedua orang tuanya pergi ke Jakarta'. Penulisan 'tuanya'...", opsi: ["tuanya", "tua-nya", "tua nya", "tuanya"], jawaban: 2, pembahasan: "'tua' dan 'nya' dipisah." },
    { soal: "Huruf kapital yang benar...", opsi: ["Presiden Joko Widodo", "presiden Joko widodo", "Presiden joko Widodo", "Presiden Joko widodo"], jawaban: 0, pembahasan: "Gelar di awal kalimat dan nama orang dikapital." },
    { soal: "Imbuhan asing benar...", opsi: ["Di cooperasi", "Dikooperasi", "Di-kooperasi", "Dikooperasikan"], jawaban: 1, pembahasan: "Awalan 'di' pada kata asing digabung." },
    { soal: "Tanda baca: 'Bawa buku pensil dan penghapus'", opsi: ["Bawa buku, pensil, dan penghapus", "Bawa buku pensil, dan penghapus", "Bawa buku pensil dan penghapus.", "Bawa buku; pensil; dan penghapus"], jawaban: 0, pembahasan: "Konjungsi objek terakhir pakai koma." },
    { soal: "Peribahasa 'Sambil menyelam minum air' artinya...", opsi: ["Iring-iringan", "Bekerja sambil ambil kesempatan", "Bekerja keras", "Bermalas-malasan"], jawaban: 1, pembahasan: "Ambil keuntungan pribadi." },
    { soal: "'Bunga bank' dalam 'Bunga bank naik' artinya...", opsi: ["Bunga melati", "Keuntungan", "Bunga simpanan/pinjaman", "Kembang"], jawaban: 2, pembahasan: "Bunga = jasa uang." },
    { soal: "'Kausa' dalam teks hukum artinya...", opsi: ["Kaos", "Penyebab", "Akibat", "Tuntutan"], jawaban: 1, pembahasan: "Kausa = sebab." },
    { soal: "Padanan kata 'Implementasi' adalah...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Majas yang menyindir dengan kata berlawanan...", opsi: ["Sarkasme", "Ironi", "Sinisme", "Satire"], jawaban: 1, pembahasan: "Ironi = sindiran halus kata berlawanan." },
    { soal: "Sinonim 'Inovatif' adalah...", opsi: ["Kuno", "Kreatif", "Statis", "Tradisional"], jawaban: 1, pembahasan: "Inovatif = kreatif/pembaharuan." }
  ],
  'subtest-pk': [
    { soal: "Nilai lim x->3 (x^2 - 9) per (x - 3) adalah...", opsi: ["0", "3", "6", "9"], jawaban: 2, pembahasan: "Faktor: (x+3). Masukkan x=3: 6." },
    { soal: "Nilai lim x->2 (x^2 - 4) per (x^2 - 2x) adalah...", opsi: ["1", "2", "4", "0"], jawaban: 1, pembahasan: "Faktor: (x+2)/x. Masukkan x=2: 2." },
    { soal: "Hasil lim x->inf (3x^2 - 2x + 1) per (x^2 + 5) adalah...", opsi: ["0", "1", "3", "inf"], jawaban: 2, pembahasan: "Ambil koefisien tertinggi: 3 per 1 = 3." },
    { soal: "Nilai lim x->0 (sin 2x) per x adalah...", opsi: ["0", "1", "2", "1/2"], jawaban: 2, pembahasan: "lim sin(ax)/x = a. Maka 2." },
    { soal: "Nilai lim x->5 (sqrt(x+4) - 3) per (x - 5) adalah...", opsi: ["1/6", "6", "0", "1"], jawaban: 0, pembahasan: "Kali akar sekawan: 1 per (sqrt(9) + 3) = 1 per 6." },
    { soal: "Jika ^2log 3 = a dan ^2log 5 = b, nilai ^2log 45...", opsi: ["a + 2b", "2a + b", "a + b", "2ab"], jawaban: 0, pembahasan: "45=3^2 x 5. Maka 2a + b." },
    { soal: "Hasil ^4log 8 + ^4log 2...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "^4log 16 = 2." },
    { soal: "Jika ^2log 3 = a, maka ^8log 81...", opsi: ["a/3", "3a", "4a per 3", "a"], jawaban: 2, pembahasan: "^3 ^2log 3^4 = 4a per 3." },
    { soal: "Nilai ^5log 125 - ^5log 5...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "^5log 25 = 2." },
    { soal: "Hasil (^2log 3) x (^3log 8)...", opsi: ["^2log 8", "^3log 3", "^2log 24", "1"], jawaban: 0, pembahasan: "Sifat rantai: ^2log 8 = 3." },
    { soal: "Satuan dari 2^2026...", opsi: ["2", "4", "6", "8"], jawaban: 1, pembahasan: "Pola 2,4,8,6. 2026 mod 4 = 2, maka 4." },
    { soal: "Satuan dari 7^3035...", opsi: ["1", "3", "5", "7"], jawaban: 1, pembahasan: "Pola 7,9,3,1. 3035 mod 4 = 3, maka 3." },
    { soal: "Nilai 2^3 x 2^-2 x 2^0...", opsi: ["1", "2", "4", "8"], jawaban: 1, pembahasan: "2^(3-2+0) = 2." },
    { soal: "Sederhanakan (x^3 x x^5) per x^6...", opsi: ["x^2", "x^4", "x^8", "x^14"], jawaban: 0, pembahasan: "x^(3+5-6) = x^2." },
    { soal: "Jika f(x)=2x+3, g(x)=x^2-1, nilai (g o f)(2)...", opsi: ["14", "15", "47", "48"], jawaban: 3, pembahasan: "f(2)=7, g(7)=48." },
    { soal: "Jika f(x)=(x-2) per (x+3), maka f^-1(x)...", opsi: ["(3x+2) per (1-x)", "(x+2) per (x-3)", "(2x+3) per (1-x)", "(x-3) per (x+2)"], jawaban: 0, pembahasan: "y=(x-2)/(x+3) -> x=(3y+2)/(1-y)." },
    { soal: "Akar x^2 - 5x + 6 = 0...", opsi: ["1,6", "2,3", "-2,-3", "2,-3"], jawaban: 1, pembahasan: "(x-2)(x-3)=0." },
    { soal: "Jumlah & akar 2x^2 - 4x + 1 = 0...", opsi: ["2 dan 1/2", "4 dan 1", "2 dan 1", "-2 dan -1/2"], jawaban: 0, pembahasan: "Jumlah=2, Hasil=1/2." },
    { soal: "Barang Rp200.000 dijual untung 15%. Harga jual?", opsi: ["215rb", "220rb", "225rb", "230rb"], jawaban: 3, pembahasan: "Untung 30rb. HJ 230rb." },
    { soal: "8 orang 12 hari. 6 orang berapa hari?", opsi: ["14", "15", "16", "18"], jawaban: 2, pembahasan: "8x12=96. 96/6=16." }
  ],
  'subtest-pbm': [
    { soal: "Teks: 'Indonesia tantangan revolusi industri 4.0. Otomasi ganti tenaga kerja. BPS: manufaktur serap 5% lebih sedikit (2023 vs 2020). Ekonomi digital tumbuh. Pemerintah perlu redesain kurikulum vokasi.'\nGagasan utama?", opsi: ["Data BPS", "Tantangan revolusi industri 4.0", "Ekonomi digital tumbuh", "Kurikulum didesain ulang"], jawaban: 1, pembahasan: "Kalimat utama di awal (deduktif)." },
    { soal: "Berdasarkan teks, pernyataan fakta?", opsi: ["Pemerintah perlu redesain", "Manufaktur serap 5% lebih sedikit", "Lulusan siap abad 21", "Industri 4.0 tantangan"], jawaban: 1, pembahasan: "Fakta berisi data (5%, 2023, 2020)." },
    { soal: "Berdasarkan teks, opini penulis?", opsi: ["Indonesia tantangan", "Manufaktur serap 5% lebih sedikit", "Ekonomi digital tumbuh", "Pemerintah perlu redesain"], jawaban: 3, pembahasan: "'Pemerintah perlu...' adalah saran (opini)." },
    { soal: "Teks: 'Masyarakat perkotaan andalkan kendaraan. Akibatnya kemacetan. Polusi meningkat. Kemacetan dan polusi harus ditangani.'\nKalimat utama?", opsi: ["Awal", "Tengah", "Akhir", "Tidak ada"], jawaban: 2, pembahasan: "Induktif, kalimat utama di akhir." },
    { soal: "Perbaiki: 'Bagi siswa yang rajin akan lulus.'", opsi: ["Bagi siswa rajin, akan lulus.", "Siswa yang rajin akan lulus.", "Bagi siswa rajin lulus.", "Siswa rajin, akan lulus."], jawaban: 1, pembahasan: "Hilangkan 'bagi' agar subjek jelas." },
    { soal: "Perbaiki: 'Sejak dari pagi dia belajar.'", opsi: ["Sejak pagi dia belajar.", "Sejak dari pagi, dia belajar.", "Dari pagi dia belajar.", "Sejak pagi, dia belajar."], jawaban: 0, pembahasan: "Pleonasme. Hilangkan 'dari'." },
    { soal: "Perbaiki: 'Karena hujan, maka dia tidak datang.'", opsi: ["Karena hujan, dia tidak datang.", "Hujan, maka dia tidak datang.", "Karena hujan maka dia tidak datang.", "Karena hujan, oleh karena itu dia tidak datang."], jawaban: 0, pembahasan: "Jangan gunakan 'karena' dan 'maka' bersamaan." },
    { soal: "Perbaikan ambigu: 'Ibu bawa tas ke pasar berwarna merah.'", opsi: ["Ibu merah bawa tas ke pasar.", "Ibu bawa tas berwarna merah ke pasar.", "Ke pasar Ibu bawa tas merah.", "Tas merah dibawa Ibu ke pasar."], jawaban: 1, pembahasan: "Penjelas berdekatan dengan yang dijelaskan." },
    { soal: "Perbaiki: 'Adik sangat gembira sekali.'", opsi: ["Adik gembira sekali", "Adik sangat gembira", "Adik sangat gembira sekali", "Adik gembira"], jawaban: 1, pembahasan: "Pleonasme. Hilangkan 'sekali'." },
    { soal: "Kalimat subjek tak jelas karena preposisi 'bagi' disebut...", opsi: ["Ambigu", "Tidak efektif", "Pasif", "Rancu"], jawaban: 1, pembahasan: "Tidak efektif karena subjek tertutup." },
    { soal: "Perbaiki: 'Meskipun hujan, tetapi dia datang.'", opsi: ["Meskipun hujan, dia datang.", "Hujan, tetapi dia datang.", "Meskipun hujan tetapi dia datang.", "Walaupun hujan, tetapi dia datang."], jawaban: 0, pembahasan: "Jangan gunakan 'meskipun' dan 'tetapi' bersamaan." },
    { soal: "Perbaiki: 'Harga beras naik dan juga turun.'", opsi: ["Naik dan turun.", "Naik serta turun.", "Naik tetapi turun.", "Naik atau turun."], jawaban: 0, pembahasan: "Hilangkan 'juga'." },
    { soal: "Penulisan 'di' yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Preposisi tempat dipisah." },
    { soal: "Penulisan pasif 'di' yang benar...", opsi: ["Di makan", "Dimakan", "Di-makan", "Dimakan oleh"], jawaban: 1, pembahasan: "Awalan pasif digabung." },
    { soal: "Ejaan: 'Kedua orang tuanya pergi'. Penulisan 'tuanya'...", opsi: ["tuanya", "tua-nya", "tua nya", "tuanya"], jawaban: 2, pembahasan: "'tua' dan 'nya' dipisah." },
    { soal: "Huruf kapital benar...", opsi: ["Presiden Joko Widodo", "presiden Joko widodo", "Presiden joko Widodo", "Presiden Joko widodo"], jawaban: 0, pembahasan: "Gelar awal kalimat & nama orang dikapital." },
    { soal: "Tanda baca kalimat langsung...", opsi: ["Ia berkata saya lapar", "Ia berkata: 'Saya lapar.'", "Ia berkata saya lapar.", "Ia berkata; saya lapar."], jawaban: 1, pembahasan: "Pakai titik dua dan tanda kutip." },
    { soal: "Gagasan utama paragraf disebut...", opsi: ["Kalimat penjelas", "Ide pokok", "Kesimpulan", "Opini"], jawaban: 1, pembahasan: "Gagasan utama = ide pokok." },
    { soal: "Teks langkah membuat sesuatu disebut...", opsi: ["Eksposisi", "Deskripsi", "Prosedur", "Argumentasi"], jawaban: 2, pembahasan: "Teks prosedur memuat langkah." },
    { soal: "Majas 'seperti' atau 'bagai' adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Personifikasi"], jawaban: 2, pembahasan: "Simile pakai kata pembanding eksplisit." }
  ],
  'subtest-indo': [
    { soal: "Teks: 'Tumbuhan fotosintesis butuh cahaya, air, CO2. Polusi menghambat. Smog tutupi daun, stomata sulit serap CO2. Hujan asam rusak klorofil. Akibatnya, pertumbuhan terhambat.'\nGagasan utama?", opsi: ["Fotosintesis", "Pengaruh polusi terhadap fotosintesis", "Fungsi stomata", "Hujan asam"], jawaban: 1, pembahasan: "Sebab-akibat: polusi menghambat fotosintesis." },
    { soal: "Berdasarkan teks, pernyataan opini?", opsi: ["Tumbuhan fotosintesis", "Butuh cahaya", "Polusi berlebih dapat menghambat", "Smog tutupi daun"], jawaban: 2, pembahasan: "'Dapat menghambat' adalah penilaian penulis." },
    { soal: "Berdasarkan teks, hubungan kausalitas?", opsi: ["Hujan asam merusak klorofil", "Tumbuhan fotosintesis", "Stomata serap CO2", "Cahaya dibutuhkan"], jawaban: 0, pembahasan: "Hujan asam (sebab) merusak klorofil (akibat)." },
    { soal: "Teks: 'Globalisasi dampak ganda. Akses pasar luas untuk UMKM, tapi produk asing mengancam. Pemerintah perlu lindungi UMKM.'\nSimpulan?", opsi: ["Globalisasi dampak negatif", "UMKM tidak mampu bersaing", "Perlindungan pemerintah diperlukan", "Produk asing selalu murah"], jawaban: 2, pembahasan: "Ada tantangan, perlu solusi (perlindungan)." },
    { soal: "'Edukasi karakter penting. Tanpa karakter, ilmu merugikan.' Gagasan utama?", opsi: ["Generasi tangguh butuh ilmu", "Pentingnya edukasi karakter", "Ilmu tanpa karakter merugikan", "Integritas"], jawaban: 1, pembahasan: "Deduktif, di awal." },
    { soal: "'Polusi Jakarta meningkat. Ozon menipis. Penyakit pernapasan meningkat.' Simpulan?", opsi: ["Ozon menipis karena polusi", "Polusi berdampak pernapasan", "Jakarta terpolusi", "Penyakit memicu polusi"], jawaban: 1, pembahasan: "Simpulan mencakup sebab-akibat." },
    { soal: "'Pohon kurangi rumah kaca. Selain itu, pohon sejukkan udara.' Hubungan kalimat?", opsi: ["Sebab-akibat", "Kesimpulan", "Sejajar (menambahkan)", "Perbandingan"], jawaban: 2, pembahasan: "'Selain itu' = penambahan." },
    { soal: "'Riset: tidur 8 jam fokus 40% lebih baik.' Pernyataan ini?", opsi: ["Opini", "Fakta", "Fiksi", "Argumen subjektif"], jawaban: 1, pembahasan: "Riset & data = fakta." },
    { soal: "'Menurut saya, cuaca panas untuk olahraga.' Pernyataan ini?", opsi: ["Fakta", "Opini", "Data", "Argumen logis"], jawaban: 1, pembahasan: "'Menurut saya' = opini." },
    { soal: "Membaca info spesifik (nama/angka) disebut...", opsi: ["Skimming", "Scanning", "Extensive", "Intensive"], jawaban: 1, pembahasan: "Scanning = detail spesifik." },
    { soal: "Membaca intisari/gagasan utama disebut...", opsi: ["Skimming", "Scanning", "Extensive", "Intensive"], jawaban: 0, pembahasan: "Skimming = cepat dapat inti." },
    { soal: "Argumentasi pendapat di awal pakai pola...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Tesis di awal = deduktif." },
    { soal: "Eksposisi mengembangkan gagasan dengan...", opsi: ["Kronologis", "Sebab-akibat", "Definisi & uraian", "Alur cerita"], jawaban: 2, pembahasan: "Definisi & uraian logis." },
    { soal: "Karya ilmiah, latar belakang di bab...", opsi: ["Bab I", "Bab II", "Bab III", "Bab IV"], jawaban: 0, pembahasan: "Pendahuluan (Bab I)." },
    { soal: "Simpulkan teks bahasa sendiri tanpa ubah maksud...", opsi: ["Meringkas", "Memparafrasekan", "Mengevaluasi", "Mensintesis"], jawaban: 1, pembahasan: "Parafrase." },
    { soal: "Gabungkan info beberapa teks untuk kesimpulan baru...", opsi: ["Analisis", "Sintesis", "Evaluasi", "Aplikasi"], jawaban: 1, pembahasan: "Sintesis." },
    { soal: "Sinonim 'Fundamental' adalah...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar." },
    { soal: "Antonim 'Konvensional' adalah...", opsi: ["Tradisional", "Modern", "Umum", "Lama"], jawaban: 1, pembahasan: "Konvensional = tradisional. Lawan modern." },
    { soal: "Majas sifat manusia pada benda mati...", opsi: ["Metafora", "Personifikasi", "Simile", "Hiperbola"], jawaban: 1, pembahasan: "Personifikasi." },
    { soal: "Majas melebih-lebihkan...", opsi: ["Metafora", "Hiperbola", "Simile", "Litotes"], jawaban: 1, pembahasan: "Hiperbola." }
  ],
  'subtest-inggris': [
    { soal: "Text: 'Climate change global crisis. Sea levels rise. Developed nations pollute, developing suffer. Debate climate justice, wealthy help vulnerable. Collective action needed.'\nMain idea?", opsi: ["Developed nations cause pollution", "Climate change requires collective action", "Sea levels rise", "Developing countries suffer"], jawaban: 1, pembahasan: "Krisis klima butuh aksi kolektif." },
    { soal: "Inferred about 'climate justice'?", opsi: ["Plant trees", "Wealthy nations help vulnerable", "Stop industry", "Weather forecast"], jawaban: 1, pembahasan: "Wealthy help vulnerable." },
    { soal: "'Elusive' closest meaning to...", opsi: ["Easy", "Difficult", "Unnecessary", "Done"], jawaban: 1, pembahasan: "Sulit dicapai." },
    { soal: "Text: 'Printing press revolutionized info. Books copied by hand rare. Mass production literacy up.'\nMain effect?", opsi: ["Books expensive", "Books rare", "Spread faster, literacy up", "People stop reading"], jawaban: 2, pembahasan: "Literacy up & spread fast." },
    { soal: "I wish I ___ harder last year.", opsi: ["study", "studied", "had studied", "would study"], jawaban: 2, pembahasan: "Wish + past perfect (had V3)." },
    { soal: "If she ___, she would come.", opsi: ["knows", "knew", "had known", "known"], jawaban: 1, pembahasan: "Conditional type 2 (V2)." },
    { soal: "If I ___ a bird, I would fly.", opsi: ["am", "was", "were", "be"], jawaban: 2, pembahasan: "Type 2 pakai 'were'." },
    { soal: "My brother, ___ lives in Jakarta, is a doctor.", opsi: ["who", "whom", "which", "whose"], jawaban: 0, pembahasan: "Who untuk subjek manusia." },
    { soal: "The book ___ by teacher yesterday.", opsi: ["is bought", "was bought", "bought", "is buying"], jawaban: 1, pembahasan: "Passive past: was + V3." },
    { soal: "Passive: 'Someone stole my car.'", opsi: ["My car was stolen.", "My car is stolen.", "My car stolen.", "My car was steal."], jawaban: 0, pembahasan: "was/were + V3." },
    { soal: "She has been studying ___ 3 hours.", opsi: ["for", "since", "from", "at"], jawaban: 0, pembahasan: "Durasi pakai 'for'." },
    { soal: "Meeting ___ Monday morning.", opsi: ["in", "on", "at", "for"], jawaban: 1, pembahasan: "Hari spesifik pakai 'on'." },
    { soal: "Reported speech: He said, 'I am happy.'", opsi: ["He said he is happy", "He said he was happy", "He said I was happy", "He says he was happy"], jawaban: 1, pembahasan: "Tense mundur. am -> was." },
    { soal: "Synonym 'Abundant'...", opsi: ["Scarce", "Plentiful", "Empty", "Small"], jawaban: 1, pembahasan: "Melimpah." },
    { soal: "Antonym 'Artificial'...", opsi: ["Fake", "Natural", "Synthetic", "Man-made"], jawaban: 1, pembahasan: "Alami." },
    { soal: "Synonym 'Crucial'...", opsi: ["Unimportant", "Essential", "Secondary", "Optional"], jawaban: 1, pembahasan: "Sangat penting." },
    { soal: "Antonym 'Ancient'...", opsi: ["Old", "Modern", "Historical", "Classic"], jawaban: 1, pembahasan: "Modern." },
    { soal: "Synonym 'Diligent'...", opsi: ["Lazy", "Hardworking", "Careless", "Slow"], jawaban: 1, pembahasan: "Rajin." },
    { soal: "Correct sentence:", opsi: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She not like apples."], jawaban: 2, pembahasan: "She + doesn't + V1." },
    { soal: "Tone in scientific report...", opsi: ["Optimistic", "Subjective", "Objective", "Pessimistic"], jawaban: 2, pembahasan: "Objektif." }
  ],
  'subtest-pm': [
    { soal: "Nilai lim x->3 (x^2 - 9) per (x - 3)...", opsi: ["0", "3", "6", "9"], jawaban: 2, pembahasan: "Faktor (x+3), x=3 -> 6." },
    { soal: "Nilai lim x->2 (x^2 - 4) per (x^2 - 2x)...", opsi: ["1", "2", "4", "0"], jawaban: 1, pembahasan: "(x+2)/x = 4/2 = 2." },
    { soal: "Hasil lim x->inf (3x^2 - 2x + 1) per (x^2 + 5)...", opsi: ["0", "1", "3", "inf"], jawaban: 2, pembahasan: "Koefisien x^2: 3." },
    { soal: "Nilai lim x->0 (sin 2x) per x...", opsi: ["0", "1", "2", "1/2"], jawaban: 2, pembahasan: "sin(ax)/x = a." },
    { soal: "Nilai lim x->5 (sqrt(x+4) - 3) per (x - 5)...", opsi: ["1/6", "6", "0", "1"], jawaban: 0, pembahasan: "1 per (sqrt(9) + 3) = 1/6." },
    { soal: "Jika ^2log 3 = a, ^2log 5 = b, nilai ^2log 45...", opsi: ["a+2b", "2a+b", "a+b", "2ab"], jawaban: 0, pembahasan: "45=3^2 x 5. 2a+b." },
    { soal: "Hasil ^4log 8 + ^4log 2...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "^4log 16 = 2." },
    { soal: "Jika ^2log 3 = a, ^8log 81...", opsi: ["a/3", "3a", "4a per 3", "a"], jawaban: 2, pembahasan: "4a per 3." },
    { soal: "Nilai ^5log 125 - ^5log 5...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "^5log 25 = 2." },
    { soal: "Hasil (^2log 3) x (^3log 8)...", opsi: ["^2log 8", "^3log 3", "^2log 24", "1"], jawaban: 0, pembahasan: "^2log 8 = 3." },
    { soal: "Satuan 2^2026...", opsi: ["2", "4", "6", "8"], jawaban: 1, pembahasan: "Pola 2,4,8,6. 2026 mod 4 = 2." },
    { soal: "Satuan 7^3035...", opsi: ["1", "3", "5", "7"], jawaban: 1, pembahasan: "Pola 7,9,3,1. 3035 mod 4 = 3." },
    { soal: "Nilai 2^3 x 2^-2 x 2^0...", opsi: ["1", "2", "4", "8"], jawaban: 1, pembahasan: "2^1 = 2." },
    { soal: "Sederhanakan (x^3 x x^5) per x^6...", opsi: ["x^2", "x^4", "x^8", "x^14"], jawaban: 0, pembahasan: "x^2." },
    { soal: "f(x)=2x+3, g(x)=x^2-1. Nilai (g o f)(2)...", opsi: ["14", "15", "47", "48"], jawaban: 3, pembahasan: "f(2)=7, g(7)=48." },
    { soal: "f(x)=(x-2) per (x+3). f^-1(x)...", opsi: ["(3x+2) per (1-x)", "(x+2) per (x-3)", "(2x+3) per (1-x)", "(x-3) per (x+2)"], jawaban: 0, pembahasan: "(3y+2)/(1-y)." },
    { soal: "Akar x^2 - 5x + 6 = 0...", opsi: ["1,6", "2,3", "-2,-3", "2,-3"], jawaban: 1, pembahasan: "(x-2)(x-3)=0." },
    { soal: "Jumlah & akar 2x^2 - 4x + 1 = 0...", opsi: ["2 dan 1/2", "4 dan 1", "2 dan 1", "-2 dan -1/2"], jawaban: 0, pembahasan: "Jumlah 2, hasil 1/2." },
    { soal: "7 siswa dipilih 3 OSIS. Berapa cara? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 35." },
    { soal: "Joko 60km/jam 06.00. Budi 80km/jam 07.00 mengejar. Budi susul pukul?", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak 60km. Selisih 20km/j. Susul 3 jam. 07.00+3=10.00." }
  ]
};

// ====== VARIABEL STATE GLOBAL ======
let currentGateKey = null;
let currentSoalSource = 'sim';
let soalAktif = [];
let indexSoalSekarang = 0;
let skorBenar = 0;
let chatHistoryGlobal = [];
let abortController = null;
let isTyping = false;
let isUserScrolledUp = false;

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
PENTING: Field "opsi" HARUS BERUPA ARRAY berisi 5 string jawaban. JANGAN memasukkan teks pembahasan ke dalam array opsi.
Jika soal memerlukan jawaban lebih dari satu (multi-jawaban), set field "multi" ke true dan "jawaban" menjadi array berisi indeks jawaban benar (contoh: "jawaban": [0, 2]). Berikan opsi A sampai E (5 opsi).
PENTING: PASTIKAN INDEKS JAWABAN BENAR-BENAR TEPAT SESUAI LOGIKA. CEK 3 KALI KESESUAIAN ANTARA INDEKS JAWABAN DAN TEKS PEMBAHASAN SEBELUM MENGIRIM JSON. JANGAN SALAH MENEMPATKAN INDEKS.
PENTING: Selalu acak angka, nama, dan skenario soal agar tidak ada soal yang berulang setiap kali diminta.
Pada akhir teks "pembahasan", WAJIB sertakan kalimat: "Oleh karena itu, jawaban yang benar adalah (Huruf Opsi)." Contoh: "Oleh karena itu, jawaban yang benar adalah B."
PENTING: Buatlah pembahasan yang SANGAT RINGKAS, PADAT, DAN LANGSUNG MENUNJUK JAWABAN. Jangan bertele-tele. Maksimal 3-4 kalimat saja di pembahasan.
WAJIB balas dalam format JSON murni: {"soal": [{"pertanyaan": "...", "opsi": ["A", "B", "C", "D", "E"], "multi": false, "jawaban": 0, "pembahasan": "..."}]}.`;

    let promptUser = `Buatkan 10 soal PG UTBK SANGAT SULIT untuk subtes: "${dataMateri.title}". Buat 2-3 soal di antaranya memiliki jawaban lebih dari satu (multi-jawaban) dengan opsi A-E. Gunakan angka dan skenario yang benar-benar acak berbeda. `;

    if (gateKey === 'subtest-pu') {
        promptUser += `Sertakan SATU teks naratif panjang (250+ kata) berisi aturan rumit di AWAL field "pertanyaan" soal pertama. Buat 4-5 soal merujuk teks tersebut. Sisanya: silogisme berantai 3-4 premis, deret angka pola bertingkat, deret huruf.`;
    } 
    else if (gateKey === 'subtest-ppu') {
        promptUser += `Buat soal sinonim/antonim kata sulit (ambivalen, esensial, marjinal), peribahasa jarang, ejaan sering salah. Pilihan jawaban sangat mirip.`;
    } 
    if (gateKey === 'subtest-pk') {
        promptUser += `WAJIB sertakan: 1) LIMIT (lim x->3 dari bentuk aljabar/akar), 2) LOGARITMA (^4log 8 + ^4log 2, atau jika ^2log 3 = a maka ^8log 81), 3) Eksponen (satuan dari 2^2026 + 7^3035), 4) Sistem persamaan 3 variabel, 5) Deret tak hingga. 
        
        PENTING UNTUK SOAL PANGKAT TINGGI: Cara mencari satuan pangkat adalah melihat pola 4 angka terakhir yang berulang.
        Contoh: 2^2026. Pola satuan 2: 2, 4, 8, 6 (berulang tiap 4). 2026 dibagi 4 sisa 2, maka ambil angka ke-2 yaitu 4.
        Contoh: 7^3035. Pola satuan 7: 7, 9, 3, 1 (berulang tiap 4). 3035 dibagi 4 sisa 3, maka ambil angka ke-3 yaitu 3.
        Contoh: 5^2026. Pola satuan 5: 5, 5, 5, 5 (selalu 5). Maka jawabannya pasti 5.
        
        Gunakan simbol ^ untuk pangkat dan sqrt() untuk akar. Jangan gunakan $ atau {}.`;
    } 
    else if (gateKey === 'subtest-indo') {
        promptUser += `WAJIB sertakan TEKS OPINI/AKADEMIK PANJANG (350+ kata) di AWAL field "pertanyaan" soal pertama. Buat 5-6 soal merujuk teks (bias, evaluasi argumen, makna kontekstual, inferensi). Sisanya majas/sinonim tingkat lanjut.`;
    } 
    else if (gateKey === 'subtest-inggris') {
        promptUser += `WAJIB sertakan TEKS AKADEMIK PANJANG (350+ words) di AWAL field "pertanyaan" soal pertama. Buat 5-6 soal merujuk teks (tone, inference, contextual vocab, purpose). Sisanya grammar tingkat lanjut (conditional type 3, passive modal, reported speech).`;
    } 
    else if (gateKey === 'subtest-pm') {
        promptUser += `WAJIB sertakan: 1) LIMIT (lim x->a), 2) LOGARITMA (jika ^2log 3 = a, cari ^8log 81), 3) Pangkat tinggi (satuan 2^2026), 4) Soal cerita kecepatan dengan arus sungai, 5) Bunga majemuk vs tunggal, 6) Peluang majemuk. 
        
        PENTING UNTUK SOAL PANGKAT TINGGI: Cara mencari satuan pangkat adalah melihat pola 4 angka terakhir yang berulang.
        Contoh: 2^2026. Pola satuan 2: 2, 4, 8, 6 (berulang tiap 4). 2026 dibagi 4 sisa 2, maka ambil angka ke-2 yaitu 4.
        Contoh: 7^3035. Pola satuan 7: 7, 9, 3, 1 (berulang tiap 4). 3035 dibagi 4 sisa 3, maka ambil angka ke-3 yaitu 3.
        Contoh: 5^2026. Pola satuan 5: 5, 5, 5, 5 (selalu 5). Maka jawabannya pasti 5.
        
        Gunakan simbol ^ untuk pangkat dan sqrt() untuk akar. Jangan gunakan $ atau {}.`;
    }

    promptUser += ` Pastikan jawaban teracak. Setiap soal WAJIB punya pembahasan detail. Pastikan soal selalu berbeda dan acak setiap kali di-generate. Jika ada soal jumlahan pangkat, INGAT bahwa jumlah satuan bisa berupa 2 digit, ambil SATU digit terakhirnya saja sebagai jawaban. Format soal pangkat harus dalam bentuk a^bcde + a^fghi (acak angkanya setiap kali generate).`;

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getActiveApiKey()}` },
            body: JSON.stringify({
                model: AI_MODEL,
                messages: [ { role: "system", content: promptSystem }, { role: "user", content: promptUser } ],
                temperature: 1.3,
                response_format: { type: "json_object" }
            })
        });

        if (response.status === 429) { rotateApiKey(); return generateSoalDariAI(gateKey); }
        if (!response.ok) throw new Error('Gagal memuat soal (Status: ' + response.status + ')');
        const resJson = await response.json();
        let rawContent = resJson.choices[0].message.content;
        
        rawContent = rawContent.replace(/\$\$(.*?)\$\$/g, '$1').replace(/\$(.*?)\$/g, '$1');
        rawContent = rawContent.replace(/\\\((.*?)\\\)/g, '$1').replace(/\\\[(.*?)\\\]/g, '$1');
        rawContent = rawContent.replace(/\\frac\{(.*?)\}\{(.*?)\}/g, '($1 per $2)');
        rawContent = rawContent.replace(/\^\{(.*?)\}/g, '^$1');
        rawContent = rawContent.replace(/\\sqrt\{(.*?)\}/g, 'sqrt($1)');
        rawContent = rawContent.replace(/\\times/g, '*').replace(/\\div/g, '/').replace(/\\pm/g, '+-').replace(/\\cdot/g, '*');

        const parsed = JSON.parse(rawContent);

        parsed.soal.forEach(item => {
            if (item.multi === true) {
                if (!Array.isArray(item.jawaban)) {
                    item.jawaban = []; 
                }
            } else {
                const teksPembahasanLower = (item.pembahasan || "").toLowerCase();
                const regexJawaban = /jawaban\s*(?:yang benar\s*)?(?:adalah|:)\s*([a-e])/i;
                const match = teksPembahasanLower.match(regexJawaban);
                
                if (match) {
                    const hurufJawabanDariTeks = match[1].toLowerCase();
                    const indeksDariTeks = hurufJawabanDariTeks.charCodeAt(0) - 97;
                    
                    if (indeksDariTeks >= 0 && indeksDariTeks < item.opsi.length) {
                        item.jawaban = indeksDariTeks;
                    }
                }
            }
        });

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

// ====== FUNGSI formatMathText (PENGGANTI PAKSA HTML ENTITY) ======
function formatMathText(text) {
    if (!text) return '';
    let formatted = String(text);
    
    // 1. Pembersih Paksa Simbol HTML Entity
    formatted = formatted.replace(/&sup(\d+);/g, '^$1');
    formatted = formatted.replace(/&minus;/g, '-');
    formatted = formatted.replace(/&times;/g, '*');
    formatted = formatted.replace(/&plusmn;/g, '+-');
    formatted = formatted.replace(/&divide;/g, '/');
    formatted = formatted.replace(/&radic;/g, '√');
    formatted = formatted.replace(/&rarr;/g, '->');
    formatted = formatted.replace(/&amp;/g, '&');
    
    // 2. Konversi karakter Unicode pangkat kembali ke format ^
    formatted = formatted.replace(/²/g, '^2');
    formatted = formatted.replace(/³/g, '^3');
    formatted = formatted.replace(/⁴/g, '^4');
    formatted = formatted.replace(/⁵/g, '^5');
    
    // 3. Pecahan visual
    formatted = formatted.replace(/\(\s*(\d+)\s*(?:per|\/)\s*(\d+)\s*\)/g, '$1 per $2');
    formatted = formatted.replace(/(?<=\s|\(|^)(\d+|[a-zA-Z])\s*(?:per|\/)\s*(\d+|[a-zA-Z])(?=\s|\)|$)/g, 
        '<span style="display:inline-block; vertical-align:middle; text-align:center; line-height:1; margin:0 2px;">' +
        '<span style="display:block; border-bottom:1px solid currentColor; padding:0 2px;">$1</span>' +
        '<span style="display:block; padding:0 2px;">$2</span></span>');
    
    // 4. Akar dan Pangkat
    formatted = formatted.replace(/sqrt\(/g, '&radic;(').replace(/√\(/g, '&radic;(');
    formatted = formatted.replace(/\^([0-9]+|[a-zA-Z]+|\([^)]+\))/g, '<sup>$1</sup>');
    
    // 5. Limit
    formatted = formatted.replace(/lim\s*x->(\d+|∞|a)/g, 'lim<sub style="font-size:0.75em;">x&rarr;$1</sub>');
    formatted = formatted.replace(/lim\s*x&rarr;(\d+|∞|a)/g, 'lim<sub style="font-size:0.75em;">x&rarr;$1</sub>');
    return formatted;
}

// ====== FUNGSI tampilkanSoal ======
function tampilkanSoal(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    if (!soalAktif || soalAktif.length === 0) {
        panel.innerHTML = "<div class='locked-state-card'><h3>Soal belum tersedia.</h3></div>";
        return;
    }
    const soal = soalAktif[indexSoalSekarang];
    
    const teksSoal = formatMathText(soal.pertanyaan || soal.soal);
    const isMulti = soal.multi === true;
    
    let opsiHtml = soal.opsi.map((opsi, i) => `
        <button class="opsi-soal" onclick="pilihJawab(${i}, '${panelId}')">
            <span class="opsi-huruf">${String.fromCharCode(65 + i)}</span>
            ${formatMathText(opsi)}
        </button>
    `).join('');
    
    let tombolKirim = '';
    if (isMulti) {
        tombolKirim = `<button class="btn-action" style="margin-top:16px;" onclick="kirimJawabanMulti('${panelId}')">Kirim Jawaban</button>`;
    }
    
    const pembahasanText = formatMathText(soal.pembahasan);

    panel.innerHTML = `
        <div class="latihan-header">
            <div class="info-soal">
                <span class="btn-action shadow">Soal ${indexSoalSekarang + 1} / ${soalAktif.length}</span>
                <span class="btn-action shadow">Skor: ${skorBenar}</span>
                ${isMulti ? '<span class="btn-action shadow" style="border-color: var(--accent-purple); color: var(--accent-purple);">Multi-Jawaban (Pilih 2 atau lebih)</span>' : ''}
            </div>
        </div>
        <div class="box-soal">
            <p class="teks-soal">${teksSoal}</p>
            <div class="opsi-grid">${opsiHtml}</div>
            ${tombolKirim}
            <div class="box-pembahasan" id="box-pembahasan" style="display:none;">
                <h3>Pembahasan</h3>
                <p>${pembahasanText}</p>
                <button class="btn-action" id="btn-selanjutnya" onclick="soalSelanjutnya('${panelId}')">${indexSoalSekarang === soalAktif.length - 1 ? 'Lihat Hasil' : 'Soal Selanjutnya ➜'}</button>
            </div>
        </div>
    `;
}

let pilihanMultiSementara = [];

function pilihJawab(indexPilihan, panelId) {
    const soal = soalAktif[indexSoalSekarang];
    const tombolOpsi = document.querySelectorAll(`#${panelId} .opsi-soal`);
    const isMulti = soal.multi === true;

    if (isMulti) {
        if (pilihanMultiSementara.includes(indexPilihan)) {
            pilihanMultiSementara = pilihanMultiSementara.filter(i => i !== indexPilihan);
            tombolOpsi[indexPilihan].classList.remove('selected');
        } else {
            pilihanMultiSementara.push(indexPilihan);
            tombolOpsi[indexPilihan].classList.add('selected');
        }
    } else {
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
}

function kirimJawabanMulti(panelId) {
    const soal = soalAktif[indexSoalSekarang];
    const tombolOpsi = document.querySelectorAll(`#${panelId} .opsi-soal`);
    const jawabanBenar = Array.isArray(soal.jawaban) ? soal.jawaban : [soal.jawaban];
    
    tombolOpsi.forEach(btn => btn.disabled = true);
    
    let semuaBenar = true;
    pilihanMultiSementara.sort();
    jawabanBenar.sort();
    
    if (pilihanMultiSementara.length !== jawabanBenar.length) {
        semuaBenar = false;
    } else {
        for (let i = 0; i < pilihanMultiSementara.length; i++) {
            if (pilihanMultiSementara[i] !== jawabanBenar[i]) {
                semuaBenar = false;
                break;
            }
        }
    }
    
    tombolOpsi.forEach((btn, i) => {
        if (jawabanBenar.includes(i)) {
            btn.classList.add('benar');
        } else if (pilihanMultiSementara.includes(i)) {
            btn.classList.add('salah');
        }
    });
    
    if (semuaBenar) skorBenar++;
    
    pilihanMultiSementara = []; 
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

// ====== CHAT AI (DENGAN SMART SCROLL) ======
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

    if(chatHistory) {
        chatHistory.addEventListener('scroll', () => {
            if (!isTyping) return;
            const scrollPos = chatHistory.scrollTop + chatHistory.clientHeight;
            const isNearBottom = chatHistory.scrollHeight - scrollPos < 50;
            isUserScrolledUp = !isNearBottom;
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
        return messageDiv;
    }

    function showChatLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('chat-loading');
        loadingDiv.id = 'chat-loading';
        loadingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatHistory.appendChild(loadingDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
        isUserScrolledUp = false;
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
        isUserScrolledUp = false;
        
        for (let i = 0; i < text.length; i++) {
            if (!isTyping) break;
            element.textContent += text.charAt(i);
            
            if (!isUserScrolledUp) {
                chatHistory.scrollTo({
                    top: chatHistory.scrollHeight,
                    behavior: 'smooth' 
                });
            }
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        isTyping = false;
        
        chatHistory.scrollTo({
            top: chatHistory.scrollHeight,
            behavior: 'smooth'
        });
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
