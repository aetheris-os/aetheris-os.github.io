
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
          <li><strong>Silogisme Rantai:</strong> p&rarr;q, q&rarr;r, maka p&rarr;r.</li>
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
        <p><strong>Pembahasan:</strong> Ini adalah modus tollens berantai. p&rarr;q, q&rarr;r. ~r maka ~p. Jadi, harga BBM tidak naik.</p>
      </div>
      <div class="materi-card">
        <h2>Penalaran Analitis: Deret Angka & Huruf</h2>
        <p>Deret angka menggunakan pola aritmatika (+a), geometri (&times;a), atau kombinasi. Deret huruf menggunakan urutan abjad (A=1, B=2, dst).</p>
        <h3>Pola Deret Tingkat Lanjut</h3>
        <ul>
          <li><strong>Pola Bertingkat (Selisih Berbeda):</strong> Selisih antar suku tidak konstan, tapi membentuk pola baru (misal: +2, +4, +6, +8).</li>
          <li><strong>Pola Silang (Alternating):</strong> Dua pola yang berselang-seling (misal: &times;2, &minus;2, &times;2, &minus;2).</li>
          <li><strong>Fibonacci:</strong> Suku ke-n adalah jumlah dua suku sebelumnya (1,1,2,3,5,8,...).</li>
          <li><strong>Pola Pangkat:</strong> Kuadrat (n&sup2;), Kubik (n&sup3;), atau kombinasi (n&sup2;+1). Contoh: 2, 5, 10, 17, 26 (pola n&sup2;+1).</li>
          <li><strong>Pola Akar:</strong> 1, &radic;2, &radic;3, 2, &radic;5... (pola &radic;n).</li>
          <li><strong>Pola Selisih Bertingkat Dua Kali:</strong> Selisih pertama tidak pola, tapi selisih dari selisihnya membentuk pola.</li>
        </ul>
        <h3>Contoh Soal Deret (Tipe UTBK 2024)</h3>
        <p><strong>Soal:</strong> Deret: 2, 5, 10, 17, 26, ...</p>
        <p><strong>Pembahasan:</strong> Selisih: +3, +5, +7, +9. Berikutnya +11. 26+11=37. Atau pola n&sup2;+1: 1&sup2;+1=2, 2&sup2;+1=5, 3&sup2;+1=10, 4&sup2;+1=17, 5&sup2;+1=26, 6&sup2;+1=37.</p>
      </div>
      <div class="materi-card">
        <h2>Penalaran Analitis: Soal Cerita Logis</h2>
        <p>Soal cerita logis melibatkan pengaturan posisi, pencocokan karakteristik, hoặc urutan peristiwa. Contoh tipe soal "Siapa yang duduk di sebelah siapa?" atau "Siapa yang memakai baju apa?".</p>
        <h3>Strategi Pengerjaan</h3>
        <ul>
          <li><strong>Buat Tabel/Grid:</strong> Pour soal pencocokan, buat tabel dengan baris (orang) dan kolom (atribut).</li>
          <li><strong>Tandai Clue Pasti vs Tidak Pasti:</strong> "A duduk di ujung" (pasti), "B tidak duduk di samping C" (tidak pasti, gunakan eliminasi).</li>
          <li><strong>Gunakan Eliminasi:</strong> Jika atribut A sudah diambil oleh orang 1, maka orang lain tidak bisa pakai atribut A.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Penalaran Kuantitatif (PU)</h2>
        <p>Berbeda dari PK, PU Kuantitatif lebih fokus pada logika perbandingan dan analisis data singkat, bukan hitungan rumit.</p>
        <ul>
          <li><strong>Perbandingan Senilai & Berbalik Nilai:</strong> Memahami hubungan kausal antar variabel. Jika a~b, maka a/b konstan. Jika a~1/b, maka a&times;b konstan.</li>
          <li><strong>Analisis Diagram Venn:</strong> Membaca Venn diagram 3-4 himpunan untuk menarik kesimpulan irisan. Rumus: n(A&cup;B) = n(A) + n(B) &minus; n(A&cap;B).</li>
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
          <li><strong>Digabung:</strong> Pada kata tertentu (meskipun, walaupun, bagaimanapun, kendatipun, biarpun).</li>
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
          <li><strong>Hiperbola:</strong> Melebih-lebihkan (Darah mengalir deras sebagi air bah).</li>
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
          <li><strong>Besar pasak daripada tiang:</strong> Pengeluaran más besar dari pemasukan.</li>
          <li><strong>Di mana bumi dipijak, di situ langit dijunjung:</strong> Menghormati adat istiadat setempat.</li>
          <li><strong>Bagai air dengan minyak:</strong> Tidak bisa bersatu.</li>
          <li><strong>Buat alur, alur lepas:</strong> Siasat yang kalah licik dengan siasat lawan.</li>
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
          <li><strong>Keseparasan (Struktur S-P):</strong> Subjek dan predikat harus jelas. Hindari kalimat tanpa subjek (misal: "Bagi siswa yang rajin akan lulus" &rarr; "Siswa yang rajin akan lulus").</li>
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
          <li><strong>Untung:</strong> Harga Jual &gt; Harga Beli. Untung = HJ &minus; HB.</li>
          <li><strong>Rugi:</strong> Harga Jual &lt; Harga Beli. Rugi = HB &minus; HJ.</li>
          <li><strong>Diskon:</strong> Potongan harga. Harga setelah diskon = Harga &times; (1 &minus; %diskon).</li>
          <li><strong>Pajak:</strong> Persentase dari penghasilan/penjualan.</li>
          <li><strong>Bunga Tunggal:</strong> Bunga = Modal &times; i &times; n (i = suku bunga, n = periode).</li>
          <li><strong>Bruto vs Neto:</strong> Bruto = berat kotor. Neto = berat bersih (berat kotor &minus; tara).</li>
        </ul>
        <h3>Contoh Soal Aritmatika Sosial</h3>
        <p><strong>Soal:</strong> Sebuah barang dibeli Rp200.000. Dijual dengan untung 15%. Harga jual?</p>
        <p><strong>Pembahasan:</strong> Untung = 15% &times; 200.000 = 30.000. HJ = 200.000 + 30.000 = 230.000.</p>
      </div>
      <div class="materi-card">
        <h2>Limit, Logaritma & Eksponen</h2>
        <h3>Limit (Mendekati)</h3>
        <ul>
          <li><strong>Definisi:</strong> Nilai yang didekati fungsi f(x) saat x mendekati a. Ditulis: lim<sub>x&rarr;a</sub> f(x).</li>
          <li><strong>Limit Fungsi Aljabar:</strong> Faktorkan untuk menghilangkan bentuk 0/0. Contoh: lim<sub>x&rarr;3</sub> (x&sup2; &minus; 9)/(x &minus; 3) = lim<sub>x&rarr;3</sub> (x+3) = 6.</li>
          <li><strong>Limit Fungsi Akar:</strong> Kalikan dengan akar sekawan. Contoh: lim<sub>x&rarr;5</sub> (&radic;(x+4) &minus; 3)/(x &minus; 5) = 1/6.</li>
          <li><strong>Limit Menuju Tak Hingga:</strong> Ambil koefisien pangkat tertinggi. Contoh: lim<sub>x&rarr;&infin;</sub> (3x&sup2; &minus; 2x + 1)/(x&sup2; + 5) = 3.</li>
          <li><strong>Limit Trigonometri:</strong> lim<sub>x&rarr;0</sub> (sin ax)/x = a. lim<sub>x&rarr;0</sub> (tan bx)/x = b.</li>
        </ul>
        <h3>Logaritma</h3>
        <ul>
          <li><strong>Definisi:</strong> <sup>a</sup>log b = c &harr; a<sup>c</sup> = b.</li>
          <li><strong>Sifat:</strong> <sup>a</sup>log(b&times;c) = <sup>a</sup>log b + <sup>a</sup>log c. <sup>a</sup>log(b/c) = <sup>a</sup>log b &minus; <sup>a</sup>log c. <sup>a</sup>log b<sup>n</sup> = n &times; <sup>a</sup>log b.</li>
          <li><strong>Contoh:</strong> <sup>4</sup>log 8 + <sup>4</sup>log 2 = <sup>4</sup>log(8&times;2) = <sup>4</sup>log 16 = 2.</li>
        </ul>
        <h3>Eksponen (Pangkat)</h3>
        <ul>
          <li><strong>Sifat:</strong> a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup>. (a<sup>m</sup>)<sup>n</sup> = a<sup>m&times;n</sup>. a<sup>&minus;n</sup> = 1/a<sup>n</sup>.</li>
          <li><strong>Contoh Pangkat Tinggi:</strong> Satuan dari 2<sup>2026</sup>. Pola satuan 2: 2, 4, 8, 6 (ulang tiap 4). 2026 mod 4 = 2, maka satuan = 4.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Deret Aritmatika & Geometri</h2>
        <h3>Barisan Aritmatika</h3>
        <ul>
          <li><strong>Suku ke-n:</strong> U<sub>n</sub> = a + (n&minus;1)b</li>
          <li><strong>Jumlah n suku:</strong> S<sub>n</sub> = n/2 &times; (2a + (n&minus;1)b) atau S<sub>n</sub> = n/2 &times; (a + U<sub>n</sub>)</li>
        </ul>
        <h3>Barisan Geometri</h3>
        <ul>
          <li><strong>Suku ke-n:</strong> U<sub>n</sub> = a &times; r<sup>n&minus;1</sup></li>
          <li><strong>Jumlah n suku:</strong> S<sub>n</sub> = a &times; (r<sup>n</sup> &minus; 1) / (r &minus; 1) untuk r &gt; 1</li>
          <li><strong>Jumlah n suku tak hingga:</strong> S<sub>&infin;</sub> = a / (1 &minus; r) untuk |r| &lt; 1</li>
        </ul>
        <h3>Contoh Soal Deret</h3>
        <p><strong>Soal:</strong> Suku pertama deret aritmatika 5, beda 3. Jumlah 10 suku pertama?</p>
        <p><strong>Pembahasan:</strong> S<sub>n</sub> = 10/2 &times; (2(5) + 9(3)) = 5 &times; (10 + 27) = 5 &times; 37 = 185.</p>
      </div>
      <div class="materi-card">
        <h2>Geometri & Trigonometri</h2>
        <h3>Bangun Datar</h3>
        <ul>
          <li><strong>Persegi:</strong> Luas = s&sup2;. Keliling = 4s.</li>
          <li><strong>Persegi Panjang:</strong> Luas = p &times; l. Keliling = 2(p + l).</li>
          <li><strong>Segitiga:</strong> Luas = 1/2 &times; a &times; t. Keliling = jumlah sisi.</li>
          <li><strong>Lingkaran:</strong> Luas = &pi; r&sup2;. Keliling = 2 &pi; r.</li>
          <li><strong>Trapesium:</strong> Luas = 1/2 &times; (sisi sejajar) &times; t.</li>
          <li><strong>Jajaran genjang:</strong> Luas = alas &times; tinggi.</li>
          <li><strong>Layang-layang:</strong> Luas = 1/2 &times; d1 &times; d2.</li>
        </ul>
        <h3>Bangun Ruang</h3>
        <ul>
          <li><strong>Kubus:</strong> Volume = s&sup3;. Luas permukaan = 6s&sup2;.</li>
          <li><strong>Balok:</strong> Volume = p &times; l &times; t. Luas = 2(pl + pt + lt).</li>
          <li><strong>Tabung:</strong> Volume = &pi; r&sup2; t. Luas = 2&pi;r(r + t).</li>
          <li><strong>Kerucut:</strong> Volume = 1/3 &pi; r&sup2; t. Luas = &pi;r(r + s).</li>
          <li><strong>Bola:</strong> Volume = 4/3 &pi; r&sup3;. Luas = 4 &pi; r&sup2;.</li>
          <li><strong>Limas:</strong> Volume = 1/3 &times; luas alas &times; t.</li>
          <li><strong>Prisma:</strong> Volume = luas alas &times; t.</li>
        </ul>
        <h3>Trigonometri</h3>
        <ul>
          <li><strong>Pythagoras:</strong> a&sup2; + b&sup2; = c&sup2; (segitiga siku-siku).</li>
          <li><strong>Perbandingan:</strong> sin = depan/miring, cos = samping/miring, tan = depan/samping.</li>
          <li><strong>Aturan Sinus:</strong> a/sin A = b/sin B = c/sin C = 2R (segitiga sembarang).</li>
          <li><strong>Aturan Cosinus:</strong> c&sup2; = a&sup2; + b&sup2; &minus; 2ab cos C (segitiga sembarang).</li>
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
          <li><strong>Peluang Komplemen:</strong> P(A') = 1 &minus; P(A).</li>
          <li><strong>Permutasi (Urutan penting):</strong> P(n,r) = n! / (n&minus;r)!</li>
          <li><strong>Kombinasi (Urutan tidak penting):</strong> C(n,r) = n! / (r!(n&minus;r)!)</li>
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
        <p><strong>Soal:</strong> Jika 3x + 2y = 12 dan x &minus; y = 1, maka nilai y adalah...</p>
        <p><strong>Pembahasan:</strong> Dari x &minus; y = 1, didapat x = 1 + y. Substitusi: 3(1+y) + 2y = 12 &rarr; 3 + 5y = 12 &rarr; 5y = 9 &rarr; y = 9/5 = 1.8.</p>
      </div>
      <div class="materi-card">
        <h2>Limit, Logaritma & Eksponen</h2>
        <h3>Limit (Mendekati)</h3>
        <ul>
          <li><strong>Definisi:</strong> Nilai yang didekati fungsi f(x) saat x mendekati a. Ditulis: lim<sub>x&rarr;a</sub> f(x).</li>
          <li><strong>Limit Fungsi Aljabar:</strong> Faktorkan untuk menghilangkan bentuk 0/0. Contoh: lim<sub>x&rarr;3</sub> (x&sup2; &minus; 9)/(x &minus; 3) = lim<sub>x&rarr;3</sub> (x+3) = 6.</li>
          <li><strong>Limit Fungsi Akar:</strong> Kalikan dengan akar sekawan. Contoh: lim<sub>x&rarr;5</sub> (&radic;(x+4) &minus; 3)/(x &minus; 5) = 1/6.</li>
          <li><strong>Limit Menuju Tak Hingga:</strong> Ambil koefisien pangkat tertinggi. Contoh: lim<sub>x&rarr;&infin;</sub> (3x&sup2; &minus; 2x + 1)/(x&sup2; + 5) = 3.</li>
          <li><strong>Limit Trigonometri:</strong> lim<sub>x&rarr;0</sub> (sin ax)/x = a. lim<sub>x&rarr;0</sub> (tan bx)/x = b.</li>
        </ul>
        <h3>Logaritma</h3>
        <ul>
          <li><strong>Definisi:</strong> <sup>a</sup>log b = c &harr; a<sup>c</sup> = b.</li>
          <li><strong>Sifat:</strong> <sup>a</sup>log(b&times;c) = <sup>a</sup>log b + <sup>a</sup>log c. <sup>a</sup>log(b/c) = <sup>a</sup>log b &minus; <sup>a</sup>log c. <sup>a</sup>log b<sup>n</sup> = n &times; <sup>a</sup>log b.</li>
          <li><strong>Contoh:</strong> <sup>4</sup>log 8 + <sup>4</sup>log 2 = <sup>4</sup>log(8&times;2) = <sup>4</sup>log 16 = 2.</li>
        </ul>
        <h3>Eksponen (Pangkat)</h3>
        <ul>
          <li><strong>Sifat:</strong> a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup>. (a<sup>m</sup>)<sup>n</sup> = a<sup>m&times;n</sup>. a<sup>&minus;n</sup> = 1/a<sup>n</sup>.</li>
          <li><strong>Contoh Pangkat Tinggi:</strong> Satuan dari 2<sup>2026</sup>. Pola satuan 2: 2, 4, 8, 6 (ulang tiap 4). 2026 mod 4 = 2, maka satuan = 4.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>Statistika & Peluang Lanjutan</h2>
        <ul>
          <li><strong>Deskripsi Data:</strong> Menghitung mean, median, modus dari data berbentuk tabel atau grafik.</li>
          <li><strong>Peluang Kejadian Majemuk:</strong> Kejadian saling bebas (P(A&cap;B) = P(A) &times; P(B)) dan saling lepas (P(A&cup;B) = P(A) + P(B)).</li>
          <li><strong>Expected Value (Nilai Ekspektasi):</strong> E(x) = &Sigma; x &times; P(x).</li>
        </ul>
        <h3>Contoh Soal Peluang</h3>
        <p><strong>Soal:</strong> Dari 7 orang siswa, akan dipilih 3 orang untuk menjadi pengurus OSIS. Berapa banyak cara pemilihan yang mungkin? (Kombinasi)</p>
        <p><strong>Pembahasan:</strong> C(7,3) = 7! / (3!4!) = (7&times;6&times;5) / 6 = 35.</p>
      </div>
      <div class="materi-card">
        <h2>Geometri Terapan</h2>
        <ul>
          <li><strong>Skala & Perbandingan:</strong> Hubungan antara ukuran pada peta dan ukuran sebenarnya.</li>
          <li><strong>Transformasi Geometri:</strong> Translasi, refleksi, rotasi, dan dilatasi.</li>
          <li><strong>Trigonometri dalam Konteks:</strong> Menghitung ketinggian, jarak, dan sudut elevasi/depresi.</li>
        </ul>
        <h3>Contoh Soal Skala</h3>
        <p><strong>Soal:</strong> Jarak kota A dan B pada peta 1:1.000.000 là 5 cm. Jarak sebenarnya?</p>
        <p><strong>Pembahasan:</strong> Jarak = 5 cm &times; 1.000.000 = 5.000.000 cm = 50 km.</p>
      </div>
      <div class="materi-card">
        <h2>Bunga Majemuk & Pertumbuhan</h2>
        <p>Bunga majemuk adalah bunga yang dihitung dari modal awal ditambah bunga sebelumnya (bunga berbunga).</p>
        <h3>Rumus Bunga Majemuk</h3>
        <p>M<sub>n</sub> = M<sub>0</sub> &times; (1 + i)<sup>n</sup></p>
        <ul>
          <li>M<sub>n</sub> = Modal setelah n periode</li>
          <li>M<sub>0</sub> = Modal awal</li>
          <li>i = Suku bunga per periode</li>
          <li>n = Jumlah periode</li>
        </ul>
        <h3>Pertumbuhan Populasi</h3>
        <p>P<sub>n</sub> = P<sub>0</sub> &times; (1 + r)<sup>n</sup> (sama dengan bunga majemuk, r = laju pertumbuhan).</p>
      </div>
    `
  }
};

// ====== BANK SOAL SIMULASI (SIMBOL HTML ENTITY, TEKS RAPI, MULTI-JAWABAN) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Lima orang mahasiswa (A, B, C, D, E) mengikuti tryout dengan urutan peringkat 1-5. Jika A peringkatnya lebih baik dari B tapi lebih buruk dari C. D menempati peringkat tepat di tengah-tengah A dan E. E tidak juara 1 dan tidak terakhir. Jika E menempati peringkat 2, maka peringkat 1 adalah...", opsi: ["A", "B", "C", "D"], jawaban: 2, pembahasan: "Jika E = 2, dan C lebih baik dari A, dan A lebih baik dari B. Kemungkinan: C=1, E=2, A=3, D=4, B=5." },
    { soal: "Perhatikan syarat beasiswa berikut:\n\n(1) IPK minimal 3.50.\n(2) Skor TOEFL minimal 500.\n(3) Mendapat surat rekomendasi dari Dekan.\n\nJika Andi memenuhi syarat 1 dan 3, namun TOEFL-nya baru 480, pernyataan yang benar adalah...", opsi: ["Andi pasti diterima", "Andi pasti ditolak", "Andi bisa diterima jika ada syarat yang dilonggarkan", "Andi harus mengulang TOEFL"], jawaban: 2, pembahasan: "Berdasarkan premis, Andi tidak memenuhi satu syarat. Maka dia bisa diterima jika ada pengecualian." },
    { soal: "Pada sebuah turnamen, jika Tim X menang melawan Y, maka Y tereliminasi. Jika Y tereliminasi, Z melaju ke final. Jika Z melaju ke final, Z akan melawan X. Diketahui Z tidak melawan X di final. Kesimpulan yang benar adalah...", opsi: ["X menang", "Y tidak tereliminasi", "Z tereliminasi", "X kalah"], jawaban: 1, pembahasan: "Silogisme rantai: p&rarr;q, q&rarr;r, r&rarr;s. ~s &rarr; ~r &rarr; ~q &rarr; ~p. Karena Z tidak melawan X (~s), maka Y tidak tereliminasi (~q)." },
    { soal: "Budi dipanggil sebelum Ani, tapi setelah Citra. Doni dipanggil terakhir. Eka dipanggil setelah Ani. Jika Doni dipanggil ke-5, dan Citra dipanggil pertama, urutan yang benar adalah...", opsi: ["Citra, Budi, Ani, Eka, Doni", "Citra, Ani, Budi, Eka, Doni", "Budi, Citra, Ani, Eka, Doni", "Citra, Budi, Eka, Ani, Doni"], jawaban: 0, pembahasan: "Citra (1) > Budi (2) > Ani (3) > Eka (4) > Doni (5)." },
    { soal: "Sebuah regu terdiri dari 4 orang: P, Q, R, S. Jika P bertugas sebagai penjaga, maka Q bertugas sebagai penyerang. Jika R bertugas sebagai penyerang, maka S tidak bisa menjadi penyerang. Jika Q tidak menjadi penyerang, maka R yang menjadi penyerang. Jika P bertugas sebagai penjaga, maka posisi S adalah...", opsi: ["Penyerang", "Penjaga", "Tidak bisa ditentukan", "Bebas"], jawaban: 2, pembahasan: "Jika P jaga &rarr; Q serang. Karena Q serang, R tidak serang. S bisa apa saja, posisi S tidak ditentukan." },
    { soal: "Semua siswa kelas 12 wajib mengikuti tryout. Sebagian siswa kelas 12 adalah anggota OSIS. Kesimpulan yang benar adalah...", opsi: ["Semua anggota OSIS wajib tryout", "Sebagian yang wajib tryout adalah anggota OSIS", "Sebagian anggota OSIS tidak wajib tryout", "Tidak ada yang wajib tryout"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika harga sembako naik, maka inflasi naik. Jika inflasi naik, maka BI rate naik. Diketahui BI rate tidak naik. Kesimpulan yang benar adalah...", opsi: ["Harga sembako naik", "Harga sembako turun", "Harga sembako tidak naik", "Inflasi tetap"], jawaban: 2, pembahasan: "Modus tollens berantai: p&rarr;q, q&rarr;r. ~r &rarr; ~q &rarr; ~p." },
    { soal: "Semua peserta ujian wajib membawa KTP. Sebagian peserta yang membawa KTP lupa membawa kartu ujian. Maka...", opsi: ["Semua peserta lupa kartu ujian", "Sebagian peserta ujian lupa membawa kartu ujian", "Tidak ada yang membawa KTP", "Semua yang lupa kartu ujian adalah peserta ujian"], jawaban: 1, pembahasan: "Silogisme partikular." },
    { soal: "Jika cuaca cerah, Budi bermain bola. Budi tidak bermain bola. Maka...", opsi: ["Cuaca cerah", "Cuaca tidak cerah", "Budi sakit", "Hujan deras"], jawaban: 1, pembahasan: "Modus tollens: p&rarr;q, ~q &rarr; ~p." },
    { soal: "Tidak ada ikan yang mamalia. Hiu adalah ikan. Paus adalah mamalia. Kesimpulan yang benar adalah...", opsi: ["Hiu là paus", "Hiu bukan mamalia", "Paus adalah ikan", "Paus là hiu"], jawaban: 1, pembahasan: "Semua ikan bukan mamalia, hiu adalah ikan, maka hiu bukan mamalia." },
    { soal: "Deret: 2, 6, 12, 20, 30, ...", opsi: ["40", "42", "44", "46"], jawaban: 1, pembahasan: "Selisih: +4, +6, +8, +10. Berikutnya +12. 30+12=42. Atau n(n+1): 6&times;7=42." },
    { soal: "Deret: 1, 4, 9, 16, 25, ...", opsi: ["30", "36", "42", "49"], jawaban: 1, pembahasan: "Pola kuadrat: 1&sup2;, 2&sup2;, 3&sup2;, 4&sup2;, 5&sup2;, 6&sup2;=36." },
    { soal: "Deret: 2, 3, 5, 7, 11, ...", opsi: ["12", "13", "14", "15"], jawaban: 1, pembahasan: "Deret bilangan prima." },
    { soal: "Deret: 100, 50, 25, 12.5, ...", opsi: ["6.25", "5", "7.5", "10"], jawaban: 0, pembahasan: "Deret geometri dibagi 2." },
    { soal: "Deret: 3, 6, 11, 18, 27, ...", opsi: ["36", "38", "40", "42"], jawaban: 1, pembahasan: "Selisih: +3, +5, +7, +9. Berikutnya +11. 27+11=38." },
    { soal: "A, C, E, G, I, ...", opsi: ["J", "K", "L", "M"], jawaban: 1, pembahasan: "Melompati satu huruf. I selanjutnya là K." },
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
    { soal: "Antonim dari 'Defisit' là...", opsi: ["Rugi", "Surplus", "Merugikan", "Bangkrut"], jawaban: 1, pembahasan: "Defisit = kekurangan. Lawannya surplus." },
    { soal: "Antonim dari 'Esensial' là...", opsi: ["Pokok", "Penting", "Sekunder", "Utama"], jawaban: 2, pembahasan: "Esensial = sangat penting. Lawannya sekunder." },
    { soal: "Antonim dari 'Implisit' là...", opsi: ["Tersurat", "Tersirat", "Samara", "Tersembunyi"], jawaban: 0, pembahasan: "Implisit = tersirat. Lawannya eksplisit = tersurat." },
    { soal: "Antonim dari 'Apatis' là...", opsi: ["Peduli", "Malas", "Acuh", "Dingin"], jawaban: 0, pembahasan: "Apati = tidak peduli. Lawannya peduli." },
    { soal: "Antonim từ 'Relevan' là...", opsi: ["Cocok", "Berkaitan", "Tak nyambung", "Sama"], jawaban: 2, pembahasan: "Relevan = berhubungan. Lawannya tak nyambung." },
    { soal: "Penulisan ejaan yang benar: 'Kedua orang tuanya pergi ke Jakarta'. Penulisan 'tuanya' seharusnya...", opsi: ["tuanya (benar)", "tua-nya", "tua nya", "tuanya (salah total)"], jawaban: 2, pembahasan: "Kata 'tua' dan 'nya' dipisah karena 'nya' sebagai penegas." },
    { soal: "Pemakaian huruf kapital yang benar...", opsi: ["Presiden Joko Widodo", "presiden Joko widodo", "Presiden joko Widodo", "Presiden Joko widodo"], jawaban: 0, pembahasan: "Gelar jabatan di awal kalimat dikapital, nama orang dikapital." },
    { soal: "Penulisan imbuhan asing yang benar...", opsi: ["Di cooperasi", "Dikooperasi", "Di-kooperasi", "Dikooperasikan"], jawaban: 1, pembahasan: "Awalan 'di' pada kata asing digabung tanpa tanda hubung." },
    { soal: "Penggunaan tanda baca yang tepat: 'Bawa buku pensil dan penghapus'", opsi: ["Bawa buku, pensil, dan penghapus", "Bawa buku pensil, dan penghapus", "Bawa buku pensil dan penghapus.", "Bawa buku; pensil; dan penghapus"], jawaban: 0, pembahasan: "Konjungsi antara objek terakhir menggunakan koma." },
    { soal: "Arti dari peribahasa 'Sambil menyelam minum air' adalah...", opsi: ["Iring-iringan", "Bekerja sambil mengambil kesempatan", "Bekerja keras", "Bermalas-malasan"], jawaban: 1, pembahasan: "Mengerjakan sesuatu sambil mengambil keuntungan pribadi." },
    { soal: "Arti dari 'Bunga bank' dalam kalimat 'Bunga bank bulan ini naik' là...", opsi: ["Bunga melati", "Keuntungan tambahan", "Bunga simpanan/pinjaman", "Kembang indah"], jawaban: 2, pembahasan: "Sinonim kontekstual: bunga = jasa uang." },
    { soal: "Arti kata 'Kausa' dalam teks hukum là...", opsi: ["Kaos baju", "Penyebab", "Akibat", "Tuntutan"], jawaban: 1, pembahasan: "Kausa = sebab." },
    { soal: "Padanan kata 'Implementasi' là...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Padanan kata 'Resiprokitas' là...", opsi: ["Saling menguntungkan", "Saling menukar", "Saling merugikan", "Hubungan timbal balik"], jawaban: 3, pembahasan: "Resiprokal = timbal balik." },
    { soal: "Kata 'Mitra' trong konteks bisnis berarti...", opsi: ["Lawan", "Rekan kerja", "Pesaing", "Pembeli"], jawaban: 1, pembahasan: "Mitra = partner/rekan." },
    { soal: "Sinonim từ 'Fundamental' là...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Sinonim từ 'Ambigu' là...", opsi: ["Jelas", "Bermakna ganda", "Tegas", "Pasti"], jawaban: 1, pembahasan: "Ambigu = bermakna ganda." },
    { soal: "Antonim từ 'Optimis' là...", opsi: ["Positif", "Pesimis", "Realistis", "Apatis"], jawaban: 1, pembahasan: "Optimis lawan pesimis." },
    { soal: "Sinonim từ 'Relevan' là...", opsi: ["Berkaitan", "Terpisah", "Asing", "Jauh"], jawaban: 0, pembahasan: "Relevan = berhubungan/berkaitan." },
    { soal: "Peribahasa 'Bagai aur dengan tebing' bermakna...", opsi: ["Saling membantu", "Saling merusak", "Tidak peduli", "Bermusuhan"], jawaban: 0, pembahasan: "Saling membantu/membutuhkan." },
    { soal: "Sinonim từ 'Krusial' là...", opsi: ["Tambahan", "Sangat penting", "Biasa", "Kecil"], jawaban: 1, pembahasan: "Krusial = sangat penting." },
    { soal: "Penulisan kata depan yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Preposisi tempat ditulis terpisah." },
    { soal: "Majas yang menyindir với kata-kata berlawanan disebut...", opsi: ["Sarkasme", "Ironi", "Sinisme", "Satire"], jawaban: 1, pembahasan: "Ironi = sindiran halus dengan kata berlawanan." },
    { soal: "Sinonim dari 'Inovatif' là...", opsi: ["Kuno", "Kreatif/Pembaharuan", "Statis", "Tradisional"], jawaban: 1, pembahasan: "Inovatif = pembaharuan/kreatif." },
    { soal: "Antonim từ 'Generik' là...", opsi: ["Umum", "Spesifik", "Biasa", "Biasa"], jawaban: 1, pembahasan: "Generik = umum. Lawan spesifik/khusus." },
    { soal: "Peribahasa 'Tak bisa menari dikatakan lantai berbatu' menggambarkan...", opsi: ["Jujur", "Mencari alasan untuk kegagalan", "Kreatif", "Tekun"], jawaban: 1, pembahasan: "Mencari alasan untuk menutupi kelemahan diri." },
    { soal: "Sinonim dari 'Mudarat' là...", opsi: ["Bermanfaat", "Merugikan/Berbahaya", "Menenangkan", "Menyenangkan"], jawaban: 1, pembahasan: "Mudarat = merugikan/berbahaya." },
    { soal: "Padanan kata 'Eksplisit' là...", opsi: ["Tersirat", "Tersurat/Jelas", "Tersembunyi", "Samara"], jawaban: 1, pembahasan: "Eksplisit = tersurat/jelas." },
    { soal: "Antonim dari 'Marjinal' là...", opsi: ["Tepi", "Sentral/Penting", "Samping", "Pinggir"], jawaban: 1, pembahasan: "Marjinal = di tepi/tidak penting. Lawan sentral." }
  ],
  'subtest-pk': [
    { soal: "Nilai dari lim<sub>x&rarr;3</sub> (x&sup2; &minus; 9) / (x &minus; 3) là...", opsi: ["0", "3", "6", "9"], jawaban: 2, pembahasan: "Faktorkan: (x&minus;3)(x+3)/(x&minus;3) = x+3. Masukkan x=3: 3+3=6." },
    { soal: "Nilai dari lim<sub>x&rarr;2</sub> (x&sup2; &minus; 4) / (x&sup2; &minus; 2x) là...", opsi: ["1", "2", "4", "0"], jawaban: 1, pembahasan: "Faktorkan: (x&minus;2)(x+2) / x(x&minus;2) = (x+2)/x. Masukkan x=2: 4/2=2." },
    { soal: "Hasil dari lim<sub>x&rarr;&infin;</sub> (3x&sup2; &minus; 2x + 1) / (x&sup2; + 5) là...", opsi: ["0", "1", "3", "&infin;"], jawaban: 2, pembahasan: "Ambil koefisien pangkat tertinggi (x&sup2;): 3/1 = 3." },
    { soal: "Nilai lim<sub>x&rarr;0</sub> (sin 2x) / x là...", opsi: ["0", "1", "2", "1/2"], jawaban: 2, pembahasan: "lim<sub>x&rarr;0</sub> sin(ax)/x = a. Maka 2." },
    { soal: "Nilai dari lim<sub>x&rarr;5</sub> (&radic;(x+4) &minus; 3) / (x &minus; 5) là...", opsi: ["1/6", "6", "0", "1"], jawaban: 0, pembahasan: "Kalikan akar sekawan: (x+4&minus;9)/((x&minus;5)(&radic;(x+4)+3)) = 1/(&radic;(x+4)+3). Masukkan x=5: 1/(3+3)=1/6." },
    { soal: "Jika &sup2;log 3 = a dan &sup²;log 5 = b, maka nilai dari &sup²;log 45 là...", opsi: ["a + 2b", "2a + b", "a + b", "2ab"], jawaban: 0, pembahasan: "45 = 9 &times; 5 = 3&sup2; &times; 5. Maka &sup²;log 45 = 2&middot;&sup²;log 3 + &sup²;log 5 = 2a + b." },
    { soal: "Hasil dari &sup4;log 8 + &sup4;log 2 là...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup4;log(8&times;2) = &sup4;log 16 = 2 (karena 4&sup2;=16)." },
    { soal: "Jika &sup²;log 3 = a, maka &sup8;log 81 là...", opsi: ["a/3", "3a", "4a/3", "a"], jawaban: 2, pembahasan: "&sup8;log 81 = &sup3;&sup²;log 3&sup4; = (4/3) &times; &sup²;log 3 = 4a/3." },
    { soal: "Nilai dari &sup5;log 125 &minus; &sup5;log 5 là...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup5;log(125/5) = &sup5;log 25 = 2." },
    { soal: "Hasil dari (&sup²;log 3) &times; (&sup³;log 8) là...", opsi: ["&sup²;log 8", "&sup³;log 3", "&sup²;log 24", "1"], jawaban: 0, pembahasan: "Sifat rantai logaritma: &sup(a)log b &times; &sup(b)log c = &sup(a)log c. Maka &sup²;log 8 = 3." },
    { soal: "Satuan dari 2<sup>2026</sup> là...", opsi: ["2", "4", "6", "8"], jawaban: 1, pembahasan: "Pola satuan 2: 2,4,8,6 berulang tiap 4. 2026 mod 4 = 2. Maka satuan=4." },
    { soal: "Satuan dari 7<sup>3035</sup> là...", opsi: ["1", "3", "5", "7"], jawaban: 1, pembahasan: "Pola satuan 7: 7,9,3,1 berulang. 3035 mod 4 = 3. Maka satuan=3." },
    { soal: "Nilai dari 2<sup>3</sup> &times; 2<sup>&minus;2</sup> &times; 2<sup>0</sup> là...", opsi: ["1", "2", "4", "8"], jawaban: 1, pembahasan: "2<sup>(3&minus;2+0)</sup> = 2<sup>1</sup> = 2." },
    { soal: "Bentuk sederhana dari (x<sup>3</sup> &times; x<sup>5</sup>) / x<sup>6</sup> là...", opsi: ["x&sup2;", "x&sup4;", "x<sup>8</sup>", "x<sup>14</sup>"], jawaban: 0, pembahasan: "x<sup>(3+5&minus;6)</sup> = x&sup2;." },
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x&sup2; &minus; 1, maka nilai (g o f)(2) là...", opsi: ["14", "15", "47", "48"], jawaban: 2, pembahasan: "f(2) = 2(2)+3 = 7. g(7) = 7&sup2; &minus; 1 = 49&minus;1 = 48." },
    { soal: "Jika f(x) = (x&minus;2)/(x+3), x&ne;&minus;3, maka f&minus;<sup>1</sup>(x) là...", opsi: ["(3x+2)/(1&minus;x)", "(x+2)/(x&minus;3)", "(2x+3)/(1&minus;x)", "(x&minus;3)/(x+2)"], jawaban: 0, pembahasan: "y = (x&minus;2)/(x+3) &rarr; yx + 3y = x &minus; 2 &rarr; x(y&minus;1) = &minus;3y&minus;2 &rarr; x = (3y+2)/(1&minus;y). Maka f&minus;<sup>1</sup>(x) = (3x+2)/(1&minus;x)." },
    { soal: "Akar-akar persamaan kuadrat x&sup2; &minus; 5x + 6 = 0 là...", opsi: ["1 dan 6", "2 dan 3", "&minus;2 dan &minus;3", "2 dan &minus;3"], jawaban: 1, pembahasan: "(x&minus;2)(x&minus;3)=0. Maka x=2 hoặc x=3." },
    { soal: "Jumlah dan hasil kali akar persamaan 2x&sup2; &minus; 4x + 1 = 0 là...", opsi: ["2 dan 1/2", "4 dan 1", "2 dan 1", "&minus;2 dan &minus;1/2"], jawaban: 0, pembahasan: "Jumlah = &minus;b/a = 4/2 = 2. Hasil kali = c/a = 1/2." },
    { soal: "Sebuah barang dibeli dengan harga Rp200.000. Jika dijual dengan untung 15%, maka harga jualnya là...", opsi: ["Rp 215.000", "Rp 220.000", "Rp 225.000", "Rp 230.000"], jawaban: 3, pembahasan: "Untung = 15% &times; 200.000 = 30.000. Harga jual = 230.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang trong 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = 8 &times; 12 = 96. Hari = 96/6 = 16 hari." },
    { soal: "Joko berangkat pukul 06.00 với kecepatan 60 km/jam. Budi berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Budi akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko saat 07.00 = 60 km. Selisih kecepatan = 20 km/jam. Waktu susul = 60/20 = 3 jam. 07.00 + 3 = 10.00." },
    { soal: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Volume tabung tersebut là... (&pi; = 22/7)", opsi: ["1540 cm&sup3;", "1440 cm&sup3;", "1340 cm&sup3;", "1240 cm&sup3;"], jawaban: 0, pembahasan: "V = &pi; r&sup2; t = 22/7 &times; 7 &times; 7 &times; 10 = 22 &times; 70 = 1540." },
    { soal: "Jika sin x = 3/5 dan x sudut lancip, maka nilai cos x là...", opsi: ["3/4", "4/5", "5/4", "4/3"], jawaban: 1, pembahasan: "Cos x = &radic;(1 &minus; sin&sup2;x) = &radic;(1 &minus; 9/25) = &radic;(16/25) = 4/5." },
    { soal: "Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 là...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "6 muncul 3 lần (paling sering)." },
    { soal: "Median dari data: 3, 5, 7, 8, 10, 12, 15 là...", opsi: ["7", "8", "10", "12"], jawaban: 1, pembahasan: "Tengah dari 7 data adalah urutan ke-4: 8." },
    { soal: "Dari 5 buku matematika và 4 buku fisika, akan dipilih 2 buku masing-masing satu. Berapa banyak cara memilih?", opsi: ["9", "16", "20", "24"], jawaban: 2, pembahasan: "C(5,1) &times; C(4,1) = 5 &times; 4 = 20." },
    { soal: "Jarak kota A dan B pada peta dengan skala 1:1.000.000 adalah 5 cm. Jarak sebenarnya là...", opsi: ["50 km", "500 km", "50 m", "5 km"], jawaban: 0, pembahasan: "5 cm &times; 1.000.000 = 5.000.000 cm = 50 km." },
    { soal: "Rata-rata nilai ujian 5 siswa là 80. Jika ditambah nilai seorang siswa baru menjadi 78, berapa nilai siswa baru tersebut?", opsi: ["68", "70", "72", "75"], jawaban: 0, pembahasan: "Total awal = 400. Total baru = 468. Nilai siswa baru = 68." }
  ],
  'subtest-pbm': [
    { soal: "Bacalah teks berikut!\n\n'Indonesia menghadapi tantangan besar dalam era revolusi industri 4.0. Otomasi dan digitalisasi menggantikan tenaga kerja manual. Menurut data BPS, sektor manufaktur menyerap 5% lebih sedikit tenaga kerja pada tahun 2023 dibandingkan 2020. Namun, sektor ekonomi digital justru tumbuh signifikan. Pemerintah perlu mendesain ulang kurikulum vokasi agar lulusan siap dengan kompetensi abad 21.'\n\nGagasan utama teks tersebut adalah...", opsi: ["Data BPS tentang penyerapan tenaga kerja", "Tantangan Indonesia di era revolusi industri 4.0", "Sektor ekonomi digital tumbuh signifikan", "Kurikulum vokasi perlu didesain ulang"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) ada di awal paragraf." },
    { soal: "Berdasarkan teks di atas, pernyataan yang merupakan fakta adalah...", opsi: ["Pemerintah perlu mendesain ulang kurikulum", "Sektor manufaktur menyerap 5% lebih sedikit tenaga kerja", "Lulusan siap dengan kompetensi abad 21", "Revolusi industri 4.0 adalah tantangan besar"], jawaban: 1, pembahasan: "Fakta berisi data/angka: BPS, 5%, 2023, 2020." },
    { soal: "Berdasarkan teks di atas, opini penulis terdapat pada kalimat...", opsi: ["Indonesia menghadapi tantangan besar", "Sektor manufaktur menyerap 5% lebih sedikit", "Sektor ekonomi digital tumbuh signifikan", "Pemerintah perlu mendesain ulang kurikulum"], jawaban: 3, pembahasan: "'Pemerintah perlu...' là pendapat/saran penulis." },
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
    { soal: "Gagasan utama trong sebuah paragraf disebut juga...", opsi: ["Kalimat penjelas", "Ide pokok", "Kesimpulan", "Opini"], jawaban: 1, pembahasan: "Gagasan utama = ide pokok." },
    { soal: "Teks yang bertujuan menjelaskan langkah-langkah membuat sesuatu disebut teks...", opsi: ["Eksposisi", "Deskripsi", "Prosedur", "Argumentasi"], jawaban: 2, pembahasan: "Teks prosedur memuat langkah-langkah." },
    { soal: "Majas yang membandingkan sesuatu dengan kata 'seperti' atau 'bagai' là...", opsi: ["Metafora", "Hiperbola", "Simile", "Personifikasi"], jawaban: 2, pembahasan: "Simile menggunakan kata pembanding eksplisit." },
    { soal: "Majas yang berarti melebih-lebihkan adalah...", opsi: ["Metafora", "Hiperbola", "Simile", "Litotes"], jawaban: 1, pembahasan: "Hiperbola là majas lebay." },
    { soal: "Sinonim dari kata 'Implementasi' là...", opsi: ["Perencanaan", "Pelaksanaan", "Penundaan", "Pembatalan"], jawaban: 1, pembahasan: "Implementasi = pelaksanaan." },
    { soal: "Antonim dari kata 'Implisit' là...", opsi: ["Tersirat", "Tersurat", "Samara", "Tersembunyi"], jawaban: 1, pembahasan: "Implisit (tersirat), lawannya eksplisit (tersurat)." }
  ],
  'subtest-indo': [
    { soal: "Bacalah teks berikut dengan saksama!\n\n'Tumbuhan hijau melakukan fotosintesis untuk menghasilkan makanan. Proses ini memerlukan cahaya matahari, air, dan karbon dioksida.\n\nNamun, polusi udara yang berlebihan dapat menghambat proses ini. Partikel smog menutupi permukaan daun sehingga stomata sulit menyerap CO2. Selain itu, hujan asam yang diakibatkan oleh polusi dapat merusak klorofil.\n\nAkibatnya, pertumbuhan tanaman terhambat dan produktivitas pertanian menurun.'\n\nGagasan utama teks tersebut là...", opsi: ["Proses fotosintesis pada tumbuhan", "Pengaruh polusi udara terhadap fotosintesis", "Fungsi stomata pada daun", "Hujan asam merusak klorofil"], jawaban: 1, pembahasan: "Teks membahas sebab-akibat: polusi menghambat fotosintesis." },
    { soal: "Berdasarkan teks di atas, pernyataan yang merupakan opini adalah...", opsi: ["Tumbuhan hijau melakukan fotosintesis", "Proses ini memerlukan cahaya matahari", "Polusi udara yang berlebihan dapat menghambat proses ini", "Partikel smog menutupi permukaan daun"], jawaban: 2, pembahasan: "Meskipun masuk akal, 'dapat menghambat' là kesimpulan/penilaian penulis (opini), bukan data mentah." },
    { soal: "Berdasarkan teks di atas, hubungan kausalitas (sebab-akibat) terdapat pada...", opsi: ["Hujan asam merusak klorofil", "Tumbuhan melakukan fotosintesis", "Stomata menyerap CO2", "Cahaya matahari dibutuhkan"], jawaban: 0, pembahasan: "Hujan asam (sebab) &rarr; merusak klorofil (akibat)." },
    { soal: "Bacalah teks berikut!\n\n'Globalisasi membawa dampak ganda bagi ekonomi lokal. Di satu sisi, akses pasar yang lebih luas membuka peluang bagi UMKM untuk berkembang. Di sisi lain, masuknya produk asing yang lebih murah mengancam keberlangsungan produksi dalam negeri.\n\nOleh karena itu, pemerintah perlu memberikan perlindungan dan subsidi agar UMKM dapat bersaing.'\n\nSimpulan yang tepat dari teks tersebut là...", opsi: ["Globalisasi hanya membawa dampak negatif", "UMKM tidak mampu bersaing dengan produk asing", "Perlindungan pemerintah diperlukan agar UMKM bertahan di era globalisasi", "Produk asing selalu lebih murah dari produk dalam negeri"], jawaban: 2, pembahasan: "Simpulan harus mencakup keseluruhan teks: ada tantangan, perlu solusi (perlindungan)." },
    { soal: "Teks: 'Edukasi karakter sangat penting untuk membentuk generasi yang tangguh. Tanpa karakter kuat, ilmu yang didapatkan justru bisa merugikan.' Gagasan utama teks tersebut là...", opsi: ["Generasi tangguh butuh ilmu", "Pentingnya edukasi karakter", "Ilmu tanpa karakter merugikan", "Integritas bagian dari pendidikan"], jawaban: 1, pembahasan: "Kalimat utama (deduktif) berada di awal paragraf." },
    { soal: "Teks: 'Polusi udara di Jakarta meningkat. Hal ini ditandai dengan menipisnya lapisan ozon. Dampaknya, penyakit pernapasan meningkat.' Simpulan yang tepat dari teks là...", opsi: ["Lapisan ozon menipis karena polusi", "Polusi udara berdampak pada kesehatan pernapasan", "Jakarta kota terpolusi", "Penyakit pernapasan memicu polusi"], jawaban: 1, pembahasan: "Simpulan harus mencakup sebab dan akibat." },
    { soal: "Teks: 'Penanaman pohon di perkotaan mampu mengurangi efek rumah kaca. Selain itu, pohon juga menyejukkan udara.' Hubungan kedua kalimat tersebut là...", opsi: ["Sebab-akibat", "Kesimpulan", "Sejajar (menambahkan)", "Perbandingan"], jawaban: 2, pembahasan: "Kata 'Selain itu' menandakan penambahan argumen." },
    { soal: "Teks: 'Berdasarkan riset, siswa yang tidur 8 jam memiliki fokus 40% lebih baik.' Pernyataan ini merupakan bagian dari teks...", opsi: ["Opini", "Fakta", "Fiksi", "Argumentasi subjektif"], jawaban: 1, pembahasan: "Berdasarkan riset dan data persentase = fakta." },
    { soal: "Teks: 'Menurut saya, cuaca hari ini terlalu panas untuk berolahraga.' Pernyataan ini merupakan...", opsi: ["Fakta", "Opini", "Data", "Argumentasi logis"], jawaban: 1, pembahasan: "'Menurut saya' = penilaian pribadi (opini)." },
    { soal: "Membaca untuk menemukan informasi spesifik seperti nama atau angka pada teks disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 1, pembahasan: "Scanning = mencari detail spesifik dengan cepat." },
    { soal: "Membaca untuk memahami intisari atau gagasan utama bacaan disebut...", opsi: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"], jawaban: 0, pembahasan: "Skimming = membaca cepat untuk mendapat inti." },
    { soal: "Teks argumentasi yang menampilkan pendapat penulis di awal menggunakan pola...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 0, pembahasan: "Tesis di awal lalu argumen = deduktif." },
    { soal: "Dalam teks eksposisi, penulis biasanya menggunakan pola pengembangan berupa...", opsi: ["Kronologis", "Sebab-akibat", "Definisi dan uraian", "Alur cerita"], jawaban: 2, pembahasan: "Teks eksposisi mengembangkan gagasan melalui definisi dan uraian." },
    { soal: "Dalam karya ilmiah, bagian yang berisi latar belakang masalah dan tujuan penelitian terdapat di bab...", opsi: ["Bab I", "Bab II", "Bab III", "Bab IV"], jawaban: 0, pembahasan: "Pendahuluan berisi latar belakang dan tujuan." },
    { soal: "Menyimpulkan isi teks dengan bahasa sendiri tanpa mengubah maksud asli disebut...", opsi: ["Meringkas", "Memparafrasekan", "Mengevaluasi", "Mensintesis"], jawaban: 1, pembahasan: "Memparafrasekan = menulis ulang dengan bahasa sendiri." },
    { soal: "Menggabungkan informasi dari beberapa teks untuk membentuk kesimpulan baru disebut...", opsi: ["Analisis", "Sintesis", "Evaluasi", "Aplikasi"], jawaban: 1, pembahasan: "Sintesis menggabungkan berbagai sumber." },
    { soal: "Sinonim dari kata 'Fundamental' dalam konteks teks akademis là...", opsi: ["Tambahan", "Dasar/Pokok", "Pengganti", "Akhir"], jawaban: 1, pembahasan: "Fundamental = mendasar/pokok." },
    { soal: "Antonim dari kata 'Konvensional' là...", opsi: ["Tradisional", "Modern/Inovatif", "Umum", "Lama"], jawaban: 1, pembahasan: "Konvensional = tradisional. Lawannya modern." },
    { soal: "Majas yang memberikan sifat manusia pada benda mati disebut...", opsi: ["Metafora", "Personifikasi", "Simile", "Hiperbola"], jawaban: 1, pembahasan: "Personifikasi = benda mati seolah hidup." }
  ],
  'subtest-inggris': [
    { soal: "Read the following text!\n\n'Climate change has become an undeniable global crisis. Rising sea levels, extreme weather events, and shifting agricultural zones are just a few of its consequences.\n\nWhile developed nations have historically contributed the most to greenhouse gas emissions, developing countries often bear the brunt of the impact. This inequality has sparked debates about climate justice and the responsibility of wealthy nations to provide financial and technological support to vulnerable regions.\n\nWithout collective action, the goal of limiting global warming to 1.5 degrees Celsius will remain elusive.'\n\nWhat is the main idea of the text?", opsi: ["Developed nations cause the most pollution", "Climate change is a global crisis requiring collective action and justice", "Sea levels are rising rapidly", "Developing countries cannot handle climate change"], jawaban: 1, pembahasan: "The text discusses climate change as a crisis and the need for collective action and justice." },
    { soal: "Based on the text, what can be inferred about 'climate justice'?", opsi: ["It means planting more trees", "It involves wealthy nations helping vulnerable regions", "It is about stopping industrialization", "It refers to weather forecasting"], jawaban: 1, pembahasan: "The text mentions 'responsibility of wealthy nations to provide financial... support to vulnerable regions'." },
    { soal: "The word 'elusive' in the last sentence is closest in meaning to...", opsi: ["Easy to achieve", "Difficult to achieve", "Unnecessary", "Already done"], jawaban: 1, pembahasan: "Elusive = sulit dicapai/didapat." },
    { soal: "Read the text!\n\n'The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the way information was disseminated. Before this, books were copied by hand, making them rare and expensive.\n\nThe printing press allowed for mass production of texts, leading to increased literacy rates and the rapid spread of new ideas during the Renaissance.'\n\nWhat was the main effect of the printing press?", opsi: ["Books became more expensive", "Books became rare", "Information spread faster and literacy increased", "People stopped reading"], jawaban: 2, pembahasan: "The text states it led to 'increased literacy rates and rapid spread of new ideas'." },
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
    { soal: "Nilai dari lim<sub>x&rarr;3</sub> (x&sup2; &minus; 9) / (x &minus; 3) là...", opsi: ["0", "3", "6", "9"], jawaban: 2, pembahasan: "Faktorkan: (x&minus;3)(x+3)/(x&minus;3) = x+3. Masukkan x=3: 6." },
    { soal: "Nilai dari lim<sub>x&rarr;2</sub> (x&sup2; &minus; 4) / (x&sup2; &minus; 2x) là...", opsi: ["1", "2", "4", "0"], jawaban: 1, pembahasan: "Faktorkan: (x+2)/x. Masukkan x=2: 4/2=2." },
    { soal: "Hasil dari lim<sub>x&rarr;&infin;</sub> (3x&sup2; &minus; 2x + 1) / (x&sup2; + 5) là...", opsi: ["0", "1", "3", "&infin;"], jawaban: 2, pembahasan: "Ambil koefisien pangkat tertinggi (x&sup2;): 3/1 = 3." },
    { soal: "Nilai lim<sub>x&rarr;0</sub> (sin 2x) / x là...", opsi: ["0", "1", "2", "1/2"], jawaban: 2, pembahasan: "lim<sub>x&rarr;0</sub> sin(ax)/x = a. Maka 2." },
    { soal: "Nilai dari lim<sub>x&rarr;5</sub> (&radic;(x+4) &minus; 3) / (x &minus; 5) là...", opsi: ["1/6", "6", "0", "1"], jawaban: 0, pembahasan: "Kalikan akar sekawan: 1/(&radic;(x+4)+3). Masukkan x=5: 1/6." },
    { soal: "Jika &sup²;log 3 = a và &sup²;log 5 = b, maka nilai dari &sup²;log 45 là...", opsi: ["a + 2b", "2a + b", "a + b", "2ab"], jawaban: 0, pembahasan: "45 = 9 &times; 5 = 3&sup2; &times; 5. Maka &sup²;log 45 = 2&middot;&sup²;log 3 + &sup²;log 5 = 2a + b." },
    { soal: "Hasil dari &sup4;log 8 + &sup4;log 2 là...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup4;log(8&times;2) = &sup4;log 16 = 2." },
    { soal: "Jika &sup²;log 3 = a, maka &sup8;log 81 là...", opsi: ["a/3", "3a", "4a/3", "a"], jawaban: 2, pembahasan: "&sup8;log 81 = &sup3;&sup²;log 3&sup4; = (4/3) &times; &sup²;log 3 = 4a/3." },
    { soal: "Nilai dari &sup5;log 125 &minus; &sup5;log 5 là...", opsi: ["1", "2", "3", "4"], jawaban: 1, pembahasan: "&sup5;log(125/5) = &sup5;log 25 = 2." },
    { soal: "Hasil dari (&sup²;log 3) &times; (&sup³;log 8) là...", opsi: ["&sup²;log 8", "&sup³;log 3", "&sup²;log 24", "1"], jawaban: 0, pembahasan: "Sifat rantai: &sup²;log 8 = 3." },
    { soal: "Satuan dari 2<sup>2026</sup> là...", opsi: ["2", "4", "6", "8"], jawaban: 1, pembahasan: "Pola satuan 2: 2,4,8,6 berulang tiap 4. 2026 mod 4 = 2. Maka satuan=4." },
    { soal: "Satuan dari 7<sup>3035</sup> là...", opsi: ["1", "3", "5", "7"], jawaban: 1, pembahasan: "Pola satuan 7: 7,9,3,1 berulang. 3035 mod 4 = 3. Maka satuan=3." },
    { soal: "Nilai dari 2<sup>3</sup> &times; 2<sup>&minus;2</sup> &times; 2<sup>0</sup> là...", opsi: ["1", "2", "4", "8"], jawaban: 1, pembahasan: "2<sup>(3&minus;2+0)</sup> = 2<sup>1</sup> = 2." },
    { soal: "Bentuk sederhana dari (x<sup>3</sup> &times; x<sup>5</sup>) / x<sup>6</sup> là...", opsi: ["x&sup2;", "x&sup4;", "x<sup>8</sup>", "x<sup>14</sup>"], jawaban: 0, pembahasan: "x<sup>(3+5&minus;6)</sup> = x&sup2;." },
    { soal: "Jika f(x) = 2x + 3 dan g(x) = x&sup2; &minus; 1, maka nilai (g o f)(2) là...", opsi: ["14", "15", "47", "48"], jawaban: 2, pembahasan: "f(2) = 7. g(7) = 49&minus;1 = 48." },
    { soal: "Jika f(x) = (x&minus;2)/(x+3), x&ne;&minus;3, maka f&minus;<sup>1</sup>(x) là...", opsi: ["(3x+2)/(1&minus;x)", "(x+2)/(x&minus;3)", "(2x+3)/(1&minus;x)", "(x&minus;3)/(x+2)"], jawaban: 0, pembahasan: "y = (x&minus;2)/(x+3) &rarr; x = (3y+2)/(1&minus;y). Maka f&minus;<sup>1</sup>(x) = (3x+2)/(1&minus;x)." },
    { soal: "Akar-akar persamaan kuadrat x&sup2; &minus; 5x + 6 = 0 là...", opsi: ["1 dan 6", "2 dan 3", "&minus;2 dan &minus;3", "2 dan &minus;3"], jawaban: 1, pembahasan: "(x&minus;2)(x&minus;3)=0. Maka x=2 hoặc x=3." },
    { soal: "Jumlah dan hasil kali akar persamaan 2x&sup2; &minus; 4x + 1 = 0 là...", opsi: ["2 và 1/2", "4 và 1", "2 và 1", "&minus;2 và &minus;1/2"], jawaban: 0, pembahasan: "Jumlah = &minus;b/a = 2. Hasil kali = c/a = 1/2." },
    { soal: "Dari 7 orang siswa, akan dipilih 3 orang untuk menjadi pengurus OSIS. Berapa banyak cara pemilihan yang mungkin? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 7! / (3!4!) = 35." },
    { soal: "Dari 5 orang calon ketua, wakil, dan sekretaris akan dipilih. Berapa banyak susunan yang mungkin? (Permutasi)", opsi: ["10", "20", "60", "120"], jawaban: 2, pembahasan: "P(5,3) = 5! / 2! = 60." },
    { soal: "Joko berangkat pukul 06.00 dengan kecepatan 60 km/jam. Budi berangkat pukul 07.00 dengan kecepatan 80 km/jam mengejar Joko. Budi akan menyusul Joko pada pukul...", opsi: ["09.00", "10.00", "11.00", "12.00"], jawaban: 1, pembahasan: "Jarak Joko saat 07.00 = 60 km. Selisih = 20 km/jam. Waktu susul = 3 jam. 07.00 + 3 = 10.00." },
    { soal: "Harga sembako naik 20% dari harga awal Rp50.000. Berapa harga sekarang?", opsi: ["Rp 55.000", "Rp 60.000", "Rp 70.000", "Rp 40.000"], jawaban: 1, pembahasan: "Naik 20% = 10.000. Harga baru = 60.000." },
    { soal: "Sebuah pekerjaan dapat diselesaikan oleh 8 orang trong 12 hari. Jika dikerjakan oleh 6 orang, berapa hari pekerjaan itu selesai?", opsi: ["14 hari", "15 hari", "16 hari", "18 hari"], jawaban: 2, pembahasan: "P = 8 &times; 12 = 96. Hari = 96/6 = 16 hari." },
    { soal: "Jarak kota A và B pada peta dengan skala 1:1.000.000 là 5 cm. Jarak sebenarnya là...", opsi: ["50 km", "500 km", "50 m", "5 km"], jawaban: 0, pembahasan: "5 cm &times; 1.000.000 = 50 km." },
    { soal: "Sebuah tabung memiliki jari-jari 7 cm và tinggi 10 cm. Volume tabung tersebut là... (&pi; = 22/7)", opsi: ["1540 cm&sup3;", "1440 cm&sup3;", "1340 cm&sup3;", "1240 cm&sup3;"], jawaban: 0, pembahasan: "V = &pi; r&sup2; t = 1540." },
    { soal: "Jika sin x = 3/5 dan x sudut lancip, maka nilai cos x là...", opsi: ["3/4", "4/5", "5/4", "4/3"], jawaban: 1, pembahasan: "Cos x = &radic;(1 &minus; sin&sup2;x) = 4/5." },
    { soal: "Sebuah segitiga siku-siku memiliki sisi 3 cm và 4 cm. Panjang sisi miringnya là...", opsi: ["5 cm", "6 cm", "7 cm", "8 cm"], jawaban: 0, pembahasan: "Pythagoras: &radic;(3&sup2; + 4&sup2;) = 5." },
    { soal: "Modus dari data: 5, 6, 7, 6, 8, 5, 6, 7, 9 là...", opsi: ["5", "6", "7", "8"], jawaban: 1, pembahasan: "6 muncul 3 kali." },
    { soal: "Median dari data: 3, 5, 7, 8, 10, 12, 15 là...", opsi: ["7", "8", "10", "12"], jawaban: 1, pembahasan: "Tengah dari 7 data: urutan ke-4 = 8." },
    { soal: "Dari 5 buku matematika và 4 buku fisika, akan dipilih 2 buku masing-masing satu. Berapa banyak cara memilih?", opsi: ["9", "16", "20", "24"], jawaban: 2, pembahasan: "5 &times; 4 = 20." },
    { soal: "Rata-rata nilai ujian 5 siswa là 80. Jika ditambah nilai seorang siswa baru menjadi 78, berapa nilai siswa baru tersebut?", opsi: ["68", "70", "72", "75"], jawaban: 0, pembahasan: "Total awal = 400. Total baru = 468. Siswa baru = 68." },
    { soal: "Jika log 2 = 0.3, maka log 8 là...", opsi: ["0.6", "0.9", "1.2", "0.3"], jawaban: 1, pembahasan: "8 = 2&sup3;. log 8 = 3 &times; log 2 = 0.9." }
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
Jika soal memerlukan jawaban lebih dari satu (multi-jawaban), set field "multi" ke true dan "jawaban" menjadi array berisi indeks jawaban benar (contoh: "jawaban": [0, 2]). Berikan opsi A sampai E (5 opsi).
WAJIB balas dalam format JSON murni: {"soal": [{"pertanyaan": "...", "opsi": ["A", "B", "C", "D", "E"], "multi": false, "jawaban": 0, "pembahasan": "..."}]}.`;

    let promptUser = `Buatkan 10 soal PG UTBK SANGAT SULIT untuk subtes: "${dataMateri.title}". Buat 2-3 soal di antaranya memiliki jawaban lebih dari satu (multi-jawaban) dengan opsi A-E. `;

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
        promptUser += `WAJIB sertakan: 1) LIMIT (lim x->3 dari bentuk aljabar/akar), 2) LOGARITMA (^4log 8 + ^4log 2, atau jika ^2log 3 = a maka ^8log 81), 3) Eksponen (satuan dari 2^2026 + 7^3035), 4) Sistem persamaan 3 variabel, 5) Deret tak hingga. Gunakan simbol ^ untuk pangkat và sqrt() cho akar. Jangan gunakan $ hoặc {}.`;
    } 
    else if (gateKey === 'subtest-indo') {
        promptUser += `WAJIB sertakan TEKS OPINI/AKADEMIK PANJANG (350+ kata) di AWAL field "pertanyaan" soal pertama. Buat 5-6 soal merujuk teks (bias, evaluasi argumen, makna kontekstual, inferensi). Sisanya majas/sinonim tingkat lanjut.`;
    } 
    else if (gateKey === 'subtest-inggris') {
        promptUser += `WAJIB sertakan TEKS AKADEMIK PANJANG (350+ words) di AWAL field "pertanyaan" soal pertama. Buat 5-6 soal merujuk teks (tone, inference, contextual vocab, purpose). Sisanya grammar tingkat lanjut (conditional type 3, passive modal, reported speech).`;
    } 
    else if (gateKey === 'subtest-pm') {
        promptUser += `WAJIB sertakan: 1) LIMIT (lim x->a), 2) LOGARITMA (jika ^2log 3 = a, cari ^8log 81), 3) Pangkat tinggi (satuan 2^2026), 4) Soal cerita kecepatan dengan arus sungai, 5) Bunga majemuk vs tunggal, 6) Peluang majemuk. Gunakan simbol ^ untuk pangkat dan sqrt() untuk akar. Jangan gunakan $ hoặc {}.`;
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
    const isMulti = soal.multi === true;
    
    let opsiHtml = soal.opsi.map((opsi, i) => `
        <button class="opsi-soal" onclick="pilihJawab(${i}, '${panelId}')">
            <span class="opsi-huruf">${String.fromCharCode(65 + i)}</span>
            ${opsi}
        </button>
    `).join('');
    
    let tombolKirim = '';
    if (isMulti) {
        tombolKirim = `<button class="btn-action" style="margin-top:16px;" onclick="kirimJawabanMulti('${panelId}')">Kirim Jawaban</button>`;
    }
    
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
                <p>${soal.pembahasan}</p>
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
        // Toggle selected
        if (pilihanMultiSementara.includes(indexPilihan)) {
            pilihanMultiSementara = pilihanMultiSementara.filter(i => i !== indexPilihan);
            tombolOpsi[indexPilihan].classList.remove('selected');
        } else {
            pilihanMultiSementara.push(indexPilihan);
            tombolOpsi[indexPilihan].classList.add('selected');
        }
    } else {
        // Single answer
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
    // Cek apakah pilihan user sama persis dengan jawaban benar
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
    
    // Tandai benar/salah
    tombolOpsi.forEach((btn, i) => {
        if (jawabanBenar.includes(i)) {
            btn.classList.add('benar');
        } else if (pilihanMultiSementara.includes(i)) {
            btn.classList.add('salah');
        }
    });
    
    if (semuaBenar) skorBenar++;
    
    pilihanMultiSementara = []; // Reset
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
\
