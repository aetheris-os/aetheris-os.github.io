// ====== KONFIGURASI AI (GROQ API) ======
const GROQ_API_KEY = "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"; 
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// ====== SOURCE BANK MATERI UTBK (AETHERIS SYSTEM CORE) ======
const DATA_MATERI = {
  'subtest-pu': {
    title: 'Penalaran Umum (PU)',
    category: 'TPS Module',
    desc: 'Menguji kemampuan bernalar secara logis melalui Penalaran Induktif, Deduktif, dan Kuantitatif.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Penalaran Deduktif (Logika Formal)</h2>
        <p>Penarikan kesimpulan dari premis umum. Tiga aturan baku yang mutlak harus dikuasai:</p>
        <ul>
          <li><strong>Modus Ponens:</strong> [p → q] dan [p] terjadi, maka kesimpulannya <strong>q</strong>.</li>
          <li><strong>Modus Tollens:</strong> [p → q] dan [~q (tidak q)] terjadi, maka kesimpulannya <strong>~p</strong>.</li>
          <li><strong>Silogisme:</strong> [p → q] dan [q → r], maka kesimpulannya <strong>p → r</strong>.</li>
        </ul>
        <p>⚠️ <em>Hati-hati Jebakan!</em> Jika [p → q] lalu yang diketahui [q], kamu <strong>TIDAK BISA</strong> menyimpulkan [p].</p>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Soal Deduktif + Solusi</h2>
        <p><strong>Soal:</strong> Jika siswa rajin belajar (p), maka ia lulus UTBK (q). Jika siswa lulus UTBK (q), maka orang tua bahagia (r). Diketahui orang tua tidak bahagia (~r). Apa simpulan yang sah?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Gunakan Silogisme terlebih dahulu: (p → q) + (q → r) menghasilkan (p → r).<br>
        Selanjutnya gunakan Modus Tollens dengan fakta baru: (p → r) dan (~r). Kesimpulannya adalah <strong>~p</strong>.<br>
        <strong>Jawaban Akhir:</strong> Siswa tidak rajin belajar.</p>
      </div>
      <div class="materi-card">
        <h2>3. Penalaran Induktif (Pola Deret Angka)</h2>
        <p>Mencari pola umum dari data-data spesifik. Strategi eksekusi kilat:</p>
        <ul>
          <li><strong>Pola Lompat:</strong> Coba cek pola selang satu angka (angka ke-1 ke angka ke-3, dst).</li>
          <li><strong>Deret Bertingkat:</strong> Jika selisih pertama acak, cari selisih dari selisih tersebut (operasi tingkat 2).</li>
          <li><strong>Fibonacci:</strong> Angka berikutnya adalah hasil penjumlahan dua angka sebelumnya.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>4. Studi Kasus Soal Induktif + Solusi</h2>
        <p><strong>Soal:</strong> Tentukan angka berikutnya dari barisan: 3, 4, 7, 11, 18, 29, ...</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        3 + 4 = 7<br>4 + 7 = 11<br>7 + 11 = 18<br>11 + 18 = 29<br>
        Ini adalah struktur deret <strong>Fibonacci</strong>. Maka suku berikutnya adalah 18 + 29 = 47.</p>
      </div>
    `
  },
  'subtest-ppu': {
    title: 'Pengetahuan & Pemahaman Umum (PPU)',
    category: 'TPS Module',
    desc: 'Menguji kemampuan dalam memahami dan menguasai pengetahuan serta kebahasaan umum.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Sinonim Kontekstual & Polisemi</h2>
        <p>PPU sering menguji arti kata serapan ilmiah. Kuncinya: Bacalah satu kalimat utuh karena makna bisa bergeser mengikuti konteks teks.</p>
        <ul>
          <li><strong>Aklamasi:</strong> Pernyataan setuju secara lisan dari seluruh peserta rapat.</li>
          <li><strong>Fluktuasi:</strong> Gejala yang menunjukkan turun-naiknya harga atau nilai.</li>
          <li><strong>Insinuasi:</strong> Tuduhan tersembunyi atau sindiran tidak langsung.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Makna Kata + Solusi</h2>
        <p><strong>Soal:</strong> Pemerintah melakukan <em>mitigasi</em> secara masif untuk menekan dampak inflasi global di sektor pangan. Kata yang paling tepat menggantikan kata <em>mitigasi</em> adalah...</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Menurut KBBI, mitigasi berarti tindakan mengurangi dampak bencana atau risiko. Dalam konteks ekonomi pangan, tindakan ini berkaitan dengan pencegahan.<br>
        <strong>Jawaban Akhir:</strong> Penanggulangan / Pengurangan dampak risiko.</p>
      </div>
      <div class="materi-card">
        <h2>3. Hubungan Antar-paragraf & Sikap Penulis (Attitude)</h2>
        <p>Soal tipe ini menanyakan fungsi paragraf kedua terhadap paragraf kesatu. Opsinya biasanya berupa: memperjelas, mempertanyakan, menentang, atau memberikan contoh konkret.</p>
      </div>
    `
  },
  'subtest-pbm': {
    title: 'Memahami Bacaan & Menulis (PBM)',
    category: 'TPS Module',
    desc: 'Menguji keterampilan tata bahasa, penerapan ejaan resmi, dan kepaduan struktur paragraf.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Kalimat Efektif & Struktur Inti</h2>
        <p>Kalimat yang baik harus memiliki struktur yang jelas (minimal S dan P) serta hemat kata. Ciri kalimat rusak:</p>
        <ul>
          <li><strong>Subjek Hilang:</strong> Penggunaan kata depan di awal kalimat (Contoh salah: <em>"Bagi siswa yang ingin sukses harus belajar."</em>).</li>
          <li><strong>Predikat Hilang:</strong> Menggunakan kata "yang" sebelum predikat (Contoh salah: <em>"Ayah yang membeli koran."</em>).</li>
          <li><strong>Pleonasme:</strong> Pemborosan kata (Contoh salah: <em>"Sejak dari pagi..."</em>).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Kalimat Efektif + Solusi</h2>
        <p><strong>Soal:</strong> Perbaiki kalimat berikut: <em>"Menurut analisis para ahli hukum menyatakan bahwa undang-undang tersebut harus direvisi."</em></p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Kalimat di atas kehilangan Subjek karena adanya konjungsi 'Menurut' di depan.<br>
        Opsi Perbaikan 1: <em>Analisis para ahli hukum menyatakan bahwa undang-undang tersebut harus direvisi.</em><br>
        Opsi Perbaikan 2: <em>Menurut analisis para ahli hukum, undang-undang tersebut harus direvisi.</em></p>
      </div>
      <div class="materi-card">
        <h2>3. Aturan Ejaan (EYD V) & Kalimat Sumbang</h2>
        <p>Kuasai aturan penulisan kata depan <strong>di</strong> (dipisah jika menunjukkan tempat: <em>di rumah</em>, digabung jika kata kerja pasif: <em>dimakan</em>).</p>
      </div>
    `
  },
  'subtest-pk': {
    title: 'Pengetahuan Kuantitatif (PK)',
    category: 'TPS Module',
    desc: 'Menguji pemahaman dasar konsep matematika, aljabar, statistika, dan geometri.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Strategi Soal Kecukupan Data (P dan Q)</h2>
        <p>Soal PK sering meminta membandingkan nilai pada kolom P dan kolom Q.</p>
        <ul>
          <li><strong>Tips:</strong> Jangan habiskan waktu mencari angka eksak jika yang ditanyakan hanya "apakah data tersebut cukup".</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Aljabar Fungsi + Solusi</h2>
        <p><strong>Soal:</strong> Jika f(x) = 3x - 1 dan g(x) = x² + 2. Berapakah nilai dari komposisi fungsi (g ∘ f)(2)?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        f(2) = 3(2) - 1 = 6 - 1 = 5.<br>
        (g ∘ f)(2) = g(f(2)) = g(5)<br>
        g(5) = (5)² + 2 = 25 + 2 = 27.<br>
        <strong>Jawaban Akhir:</strong> 27.</p>
      </div>
      <div class="materi-card">
        <h2>3. Geometri Sudut & Garis Sejajar</h2>
        <p>Kuasai sifat-sifat sudut jika dua garis sejajar dipotong oleh sebuah garis melintang: Sudut bertolak belakang besarnya sama, sudut dalam berseberangan besarnya sama, dan jumlah sudut sepihak adalah 180°.</p>
      </div>
    `
  },
  'subtest-indo': {
    title: 'Literasi dalam Bahasa Indonesia',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan memahami, menganalisis, dan mengevaluasi isi teks esai kompleks.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Menemukan Gagasan Utama Bersirat</h2>
        <p>Teks Literasi Indonesia di UTBK sangat panjang (3-4 paragraf ilmiah).</p>
        <ul>
          <li><strong>Metode Skimming:</strong> Baca kalimat pertama dan kalimat terakhir di setiap paragraf untuk memetakan ide pokok.</li>
          <li>Kalimat utama di awal disebut paragraf <strong>Deduktif</strong>, di akhir disebut <strong>Induktif</strong>.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Simpulan Implisit + Solusi</h2>
        <p><strong>Teks:</strong> "Pendidikan karakter sejak usia dini memperlihatkan korelasi positif terhadap ketahanan mental pelajar SMA. Survei menunjukkan siswa yang mendapatkan edukasi karakter lebih adaptif menghadapi ujian nasional dibandingkan siswa yang hanya fokus pada bimbingan belajar kognitif murni."<br><br>
        <strong>Soal:</strong> Apa simpulan yang paling didukung oleh teks di atas?</p>
        <p><strong>Pembahasan Teknis:</strong> Teks membandingkan edukasi karakter vs bimbingan kognitif murni. Hasilnya, edukasi karakter membuat siswa lebih tangguh.<br>
        <strong>Jawaban Simpulan:</strong> Edukasi karakter usia dini memberikan kontribusi penting bagi kesiapan mental siswa menghadapi ujian.</p>
      </div>
    `
  },
  'subtest-inggris': {
    title: 'Literasi dalam Bahasa Inggris',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan pemahaman bacaan tingkat lanjut (reading comprehension) teks berbahasa Inggris.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Deciphering Author's Tone and Attitude</h2>
        <p>Soal sering menanyakan: <em>"What is the author’s attitude towards the topic?"</em></p>
        <ul>
          <li><strong>Objective / Neutral:</strong> Penulis menyajikan fakta apa adanya tanpa memihak.</li>
          <li><strong>Critical / Skeptical:</strong> Penulis mempertanyakan keabsahan data atau tidak langsung percaya.</li>
          <li><strong>Optimistic:</strong> Penulis yakin akan ada dampak baik di masa depan.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Advanced Grammar: Subjunctive Patterns (Past Regret)</h2>
        <p>Pola pengandaian masa lalu menggunakan kata <strong>wish</strong>.</p>
        <ul>
          <li><strong>Rumus Kunci:</strong> <code>Subject + wish + Subject + Had + Verb-3</code></li>
          <li>Rumus ini dipakai untuk menunjukkan penyesalan atas peristiwa yang telanjur terjadi di masa lampau.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>3. Studi Kasus Soal Bahasa Inggris + Solusi</h2>
        <p><strong>Soal:</strong> The debate team lost the selection match yesterday. The captain said, "I wish we ___ more attention to the rules."</p>
        <p>A. paid<br>B. have paid<br>C. had paid<br>D. would pay</p>
        <p><strong>Pembahasan Teknis:</strong> Kalimat menceritakan penyesalan masa lalu (terdapat penanda waktu <em>"yesterday"</em>). Sesuai aturan <em>Past Subjunctive Regret</em>, tenses yang wajib digunakan setelah kata 'wish' adalah <strong>Past Perfect (Had + V3)</strong>.<br>
        <strong>Jawaban Akhir:</strong> C. had paid</p>
      </div>
    `
  },
  'subtest-pm': {
    title: 'Penalaran Matematika (PM)',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan memecahkan masalah matematika terapan dalam konteks realistik kehidupan nyata.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Aturan Kombinatorika Terapan</h2>
        <p>Membedakan kapan harus menggunakan rumus Permutasi atau Kombinasi:</p>
        <ul>
          <li><strong>Permutasi (Urutan Penting):</strong> Digunakan untuk menentukan posisi/jabatan (Ketua, Wakil, Sekretaris). Urutan AB tidak sama dengan BA.</li>
          <li><strong>Kombinasi (Urutan Diabaikan):</strong> Digunakan untuk memilih anggota tim atau delegasi. Susunan [Andi, Budi] sama dengan [Budi, Andi].</li>
          <li><strong>Rumus Kombinasi:</strong> <code>C(n, r) = n! / (r! × (n - r)!)</code></li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Kombinatorika Tim Debat + Solusi</h2>
        <p><strong>Soal:</strong> Dari 7 orang siswa, akan dipilih 3 orang siswa untuk mewakili sekolah. Berapa banyak cara pemilihan yang mungkin?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Karena urutan tidak diperhatikan, gunakan Kombinasi C(7, 3):<br>
        C(7, 3) = 7! / (3! × 4!)<br>
        C(7, 3) = (7 × 6 × 5) / 6 = 35.<br>
        <strong>Jawaban Akhir:</strong> 35 cara.</p>
      </div>
      <div class="materi-card">
        <h2>3. Pemodelan Rasio Keuangan & Rasionalisasi APBN</h2>
        <p>Sering muncul soal cerita mengenai persentase kenaikan utang negara atau perbandingan alokasi dana subsidi. Tips: Ubah narasi soal cerita menjadi persamaan matematika sederhana terlebih dahulu sebelum berhitung.</p>
      </div>
    `
  }
};

// ====== BANK SOAL SIMULASI (40 SOAL UTBK PU) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Jika hujan turun, maka jalan basah. Jalan tidak basah. Kesimpulan yang sah adalah...", opsi: ["Hujan turun", "Hujan tidak turun", "Jalan kering", "Tidak bisa disimpulkan"], jawaban: 1, pembahasan: "Modus Tollens: p→q dan ~q, maka ~p." },
    { soal: "Deret: 2, 5, 10, 17, 26, ... Bilangan selanjutnya adalah...", opsi: ["35", "36", "37", "38"], jawaban: 2, pembahasan: "Selisih: 3, 5, 7, 9. Selisih berikutnya 11. 26+11=37." },
    { soal: "Semua mahasiswa wajib mengambil KRS. Sebagian mahasiswa tidak membayar SPP. Kesimpulannya...", opsi: ["Semua yang tidak bayar SPP tidak wajib KRS", "Sebagian yang wajib KRS tidak bayar SPP", "Semua mahasiswa tidak bayar SPP", "Tidak ada hubungan KRS dan SPP"], jawaban: 1, pembahasan: "Silogisme sebagian. Yang wajib KRS = mahasiswa. Sebagian mahasiswa tidak bayar SPP." },
    { soal: "Jika x adalah bilangan prima dan x > 2, maka x pasti bilangan ganjil. Jika x bilangan genap, maka...", opsi: ["x pasti prima", "x pasti ganjil", "x bukan prima atau x <= 2", "x tidak terdefinisi"], jawaban: 2, pembahasan: "Kontraposisif: ~q -> ~p. Jika genap (~ganjil), maka bukan prima ATAU <= 2." },
    { soal: "Deret: A, C, F, J, O, ... Huruf selanjutnya adalah...", opsi: ["S", "T", "U", "V"], jawaban: 2, pembahasan: "Selisih huruf: +2, +3, +4, +5. Selanjutnya +6. O(15) + 6 = U(21)." },
    { soal: "Semua dokter pandai. Sebagian dokter kaya. Maka...", opsi: ["Semua yang kaya pandai", "Sebagian yang pandai kaya", "Semua yang pandai kaya", "Sebagian yang kaya tidak pandai"], jawaban: 1, pembahasan: "Sebagian yang pandai (dokter) adalah orang kaya." },
    { soal: "Jika sebuah persegi memiliki sisi 5 cm, maka luasnya 25 cm². Persegi A memiliki luas 25 cm². Kesimpulan yang sah...", opsi: ["Sisi persegi A 5 cm", "Sisi persegi A bukan 5 cm", "Tidak tentu sisi persegi A", "Persegi A bukan persegi"], jawaban: 0, pembahasan: "Dalam konteks geometri dasar, luas 25 hanya bisa didapat dari sisi 5." },
    { soal: "Deret: 1, 1, 2, 3, 5, 8, 13, ... Bilangan selanjutnya adalah...", opsi: ["18", "20", "21", "22"], jawaban: 2, pembahasan: "Deret Fibonacci: 8+13=21." },
    { soal: "Tidak ada manusia yang sempurna. Sebagian manusia sombong. Kesimpulannya...", opsi: ["Manusia sempurna itu sombong", "Sebagian yang sombong tidak sempurna", "Semua yang tidak sempurna sombong", "Tidak ada manusia sombong"], jawaban: 1, pembahasan: "Karena semua manusia tidak sempurna, maka yang sombong pasti tidak sempurna." },
    { soal: "Jika p maka q. Jika q maka r. Jika ~r, maka...", opsi: ["p", "q", "~p", "Tidak tentu"], jawaban: 2, pembahasan: "Silogisme p->r. Modus tollens ~r -> ~p." },
    { soal: "Deret: 3, 6, 11, 18, 27, ... Bilangan selanjutnya adalah...", opsi: ["36", "38", "40", "42"], jawaban: 1, pembahasan: "Selisih: 3, 5, 7, 9. Selanjutnya 11. 27+11=38." },
    { soal: "Semua benda logam menghantarkan listrik. Besi adalah logam. Kesimpulannya...", opsi: ["Besi tidak menghantarkan listrik", "Besi menghantarkan listrik", "Semua penghantar adalah besi", "Tidak ada hubungannya"], jawaban: 1, pembahasan: "Silogisme positif." },
    { soal: "Jika hari libur, Andi pergi liburan. Hari ini Andi tidak pergi liburan. Maka...", opsi: ["Hari ini libur", "Hari ini tidak libur", "Andi sakit", "Tidak tentu"], jawaban: 1, pembahasan: "Modus tollens." },
    { soal: "Deret: 2, 4, 8, 16, 32, ... Bilangan selanjutnya adalah...", opsi: ["48", "56", "64", "72"], jawaban: 2, pembahasan: "Deret Geometri rasio x2." },
    { soal: "Semua siswa kelas 12 mengikuti UTBK. Sebagian siswa kelas 12 tidak lulus. Maka...", opsi: ["Semua yang ikut UTBK lulus", "Sebagian yang ikut UTBK tidak lulus", "Tidak ada yang lulus", "Sebagian yang lulus tidak ikut UTBK"], jawaban: 1, pembahasan: "Subjek yang sama, sebagian tidak lulus." },
    { soal: "Jika A > B dan B > C, maka...", opsi: ["A < C", "A = C", "A > C", "B = A"], jawaban: 2, pembahasan: "Sifat transitif." },
    { soal: "Deret: 1, 4, 9, 16, 25, ... Bilangan selanjutnya adalah...", opsi: ["30", "36", "49", "50"], jawaban: 1, pembahasan: "Deret kuadrat: 6² = 36." },
    { soal: "Semua pemalas miskin. Sebagian pemalas sakit. Maka...", opsi: ["Semua yang sakit miskin", "Sebagian yang miskin sakit", "Semua yang miskin sakit", "Sebagian yang sakit miskin"], jawaban: 1, pembahasan: "Irisan himpunan." },
    { soal: "Jika nilai x positif, maka x² positif. Jika x = -2, maka...", opsi: ["x² negatif", "x² positif", "x² nol", "Tidak tentu"], jawaban: 1, pembahasan: "Bilangan negatif dikuadratkan pasti positif." },
    { soal: "Deret huruf: B, D, G, K, P, ... Huruf selanjutnya...", opsi: ["U", "V", "W", "X"], jawaban: 2, pembahasan: "Selisih +2, +3, +4, +5, +6. P+6=W." },
    { soal: "Semua dokter lulus S1. Sebagian dokter spesialis. Maka...", opsi: ["Semua spesialis lulus S1", "Sebagian lulus S1 adalah spesialis", "Semua lulus S1 spesialis", "Tidak ada kaitannya"], jawaban: 1, pembahasan: "Silogisme sebagian." },
    { soal: "Jika baterai habis, HP mati. HP tidak mati. Maka...", opsi: ["Baterai habis", "Baterai tidak habis", "HP di-charge", "Tidak tentu"], jawaban: 1, pembahasan: "Modus tollens." },
    { soal: "Deret: 100, 50, 25, 12.5, ... Bilangan selanjutnya...", opsi: ["6.25", "5", "4", "0"], jawaban: 0, pembahasan: "Deret geometri bagi 2." },
    { soal: "Tidak ada ikan yang mamalia. Hiu adalah ikan. Maka...", opsi: ["Hiu mamalia", "Hiu bukan mamalia", "Sebagian hiu mamalia", "Tidak tentu"], jawaban: 1, pembahasan: "Silogisme negatif." },
    { soal: "Jika sebuah segitiga sama sisi, maka semua sudutnya 60°. Segitiga A tidak memiliki sudut 60°. Maka...", opsi: ["A segitiga sama sisi", "A bukan segitiga sama sisi", "A segitiga siku-siku", "A tidak terdefinisi"], jawaban: 1, pembahasan: "Modus tollens." },
    { soal: "Deret: 2, 6, 12, 20, 30, ... Bilangan selanjutnya...", opsi: ["40", "42", "44", "46"], jawaban: 1, pembahasan: "Selisih +4, +6, +8, +10, +12. 30+12=42." },
    { soal: "Semua tanaman butuh air. Sebagian tanaman berbunga. Maka...", opsi: ["Semua yang berbunga butuh air", "Sebagian yang butuh air berbunga", "Semua yang butuh air berbunga", "Sebagian yang berbunga tidak butuh air"], jawaban: 1, pembahasan: "Irisan himpunan." },
    { soal: "Jika x > 10, maka x > 5. Jika x = 4, maka...", opsi: ["x > 10", "x > 5", "x < 10", "Tidak tentu"], jawaban: 2, pembahasan: "4 pasti < 10." },
    { soal: "Deret: 1, 8, 27, 64, ... Bilangan selanjutnya...", opsi: ["100", "125", "144", "121"], jawaban: 1, pembahasan: "Deret pangkat 3: 5³ = 125." },
    { soal: "Semua programmer paham logika. Sebagian programmer tidak paham desain. Maka...", opsi: ["Semua yang paham logika paham desain", "Sebagian yang paham logika tidak paham desain", "Tidak ada programmer paham desain", "Sebagian yang paham desain paham logika"], jawaban: 1, pembahasan: "Subjek sama, sebagian tidak." },
    { soal: "Jika hujan, tanaman tumbuh. Tanaman tidak tumbuh. Maka...", opsi: ["Hujan turun", "Tidak hujan", "Tanaman mati", "Tidak tentu"], jawaban: 1, pembahasan: "Modus tollens." },
    { soal: "Deret: 5, 10, 20, 40, 80, ... Bilangan selanjutnya...", opsi: ["100", "120", "150", "160"], jawaban: 3, pembahasan: "Deret x2." },
    { soal: "Tidak ada penjudi yang kaya. Sebagian penjudi bangkrut. Maka...", opsi: ["Sebagian yang kaya bangkrut", "Sebagian yang bangkrut tidak kaya", "Semua yang bangkrut tidak kaya", "Semua yang tidak kaya bangkrut"], jawaban: 1, pembahasan: "Irisan himpunan." },
    { soal: "Jika kotak berisi bola, maka beratnya 5kg. Kotak A beratnya 5kg. Maka...", opsi: ["Kotak A berisi bola", "Kotak A kosong", "Tidak tentu isinya", "Kotak A berisi besi"], jawaban: 2, pembahasan: "Bisa saja ada benda lain seberat 5kg. (Jebakan Affirming the Consequent)." },
    { soal: "Deret: 10, 9, 7, 4, 0, ... Bilangan selanjutnya...", opsi: ["-5", "-4", "-3", "-2"], jawaban: 0, pembahasan: "Selisih -1, -2, -3, -4, -5. 0-5=-5." },
    { soal: "Semua siswa SMU wajib Ekskul. Sebagian siswa SMU bandel. Maka...", opsi: ["Semua yang bandel wajib ekskul", "Sebagian yang wajib ekskul bandel", "Tidak ada yang bandel ekskul", "Semua ekskul bandel"], jawaban: 1, pembahasan: "Silogisme." },
    { soal: "Jika lampu menyala, maka ada listrik. Tidak ada listrik. Maka...", opsi: ["Lampu menyala", "Lampu mati", "Lampu rusak", "Tidak tentu"], jawaban: 1, pembahasan: "Modus tollens." },
    { soal: "Deret: 81, 27, 9, 3, ... Bilangan selanjutnya...", opsi: ["0", "1", "1.5", "2"], jawaban: 1, pembahasan: "Deret bagi 3." },
    { soal: "Semua dosen bersarjana. Sebagian dosen ketat. Maka...", opsi: ["Semua yang ketat bersarjana", "Sebagian yang bersarjana ketat", "Semua sarjana ketat", "Sebagian yang ketat tidak sarjana"], jawaban: 1, pembahasan: "Irisan." },
    { soal: "Jika x bilangan asli, maka x positif. Jika x = 0, maka...", opsi: ["x bilangan asli", "x bukan bilangan asli", "x positif", "x negatif"], jawaban: 1, pembahasan: "0 bukan bilangan asli (Modus Tollens)." }
  ]
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

function switchSubPanel(mode) {
  document.getElementById('panel-materi').classList.toggle('active', mode === 'materi');
  document.getElementById('panel-latihan-ai').classList.toggle('active', mode === 'latihan-ai');
  document.getElementById('panel-latihan-sim').classList.toggle('active', mode === 'latihan-sim');
}

// ====== SISTEM LATIHAN AI (GROQ) ======
// ====== SISTEM LATIHAN AI (GROQ) ======
async function generateSoalDariAI(gateKey) {
  const dataMateri = DATA_MATERI[gateKey];
  const panelLatihan = document.getElementById('panel-latihan-ai');
  
  // Tampilkan Loading
  panelLatihan.innerHTML = `
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <h3>Sedang Meracik 20 Soal HOTS...</h3>
      <p>AI sedang menyusun soal ${dataMateri.title} tingkat ekstrem. Mohon tunggu 10-20 detik.</p>
    </div>
  `;

  // Prompt Sistem: Mensimulasikan pembuat soal UTBK yang sangat kejam
  const promptSystem = `
    Kamu adalah "Tim Pembuat Soal UTBK SNBT Tingkat Nasional" yang sangat kejam, kritis, dan licik.
    Tugasmu adalah membuat 20 SOAL PILIHAN GANDA yang SANGAT SULIT, analitis, dan membutuhkan penalaran tingkat tinggi (HOTS).

    Aturan Mutlak (WAJIB DIPATUHI):
    1. KOMPLEKSITAS: Setiap soal HARUS berbentuk studi kasus, paragraf ilmiah, data tabel, atau pemodelan matematika. JANGAN ADA soal definisi hafalan!
    2. JEBAKAN MEMATIKAN (Distractor): Buat 4 opsi (A, B, C, D). 3 opsi yang salah harus dirancang sedemikian rupa sehingga "terlihat 100% benar" jika siswa salah membaca satuan, cepat berpikir, atau salah paham logika.
    3. VARIASI: Setiap soal harus memiliki tema/konteks yang benar-benar berbeda satu sama lain. DILARANG mengulang pola soal!
    4. ANGKA SULIT: Jika soal hitungan, gunakan pecahan, desimal, atau angka yang tidak bulat.
    5. PEMBAHASAN: Jelaskan dengan detail mengapa jawaban benar itu benar, dan mengapa 3 opsi lain adalah jebakan.

    WAJIB balas menggunakan format JSON murni tanpa markdown (\`\`\`json) dan tanpa teks tambahan apapun.
  `;

  // Prompt User: Meminta 20 soal sesuai subtes yang dipilih
  const promptUser = `
    Buatkan 20 SOAL BARU untuk subtes "${dataMateri.title}".
    Kategori materi: ${dataMateri.desc}.

    Struktur JSON WAJIB persis seperti ini:
    {
      "soal": [
        {
          "pertanyaan": "Teks kasus/studi panjang diikuti pertanyaan analitis",
          "opsi": ["Opsi A (jebakan)", "Opsi B (jebakan)", "Opsi C (benar)", "Opsi D (jebakan)"],
          "jawaban": 2,
          "pembahasan": "Penjelasan detail mengapa C benar dan opsi lain adalah jebakan."
        }
      ]
    }
    Acak posisi jawaban benar (index 0=A, 1=B, 2=C, 3=D) di setiap soal, jangan selalu di C.
  `;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Model paling pintar di Groq
        messages: [
          { role: "system", content: promptSystem },
          { role: "user", content: promptUser }
        ],
        temperature: 0.6, // Suhu diturunkan agar fokus bikin jebakan logis, bukan ngasal
        max_tokens: 8000, // Token dipercing agar 20 soal panjang tidak terpotong
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Detail Error dari Groq:", errorData);
      throw new Error(`HTTP ${response.status}: ${errorData.error?.message || 'Gagal memuat soal'}`);
    }
    
    const resJson = await response.json();
    const textResult = resJson.choices[0].message.content;
    const parsed = JSON.parse(textResult);

    if (!parsed.soal || parsed.soal.length === 0) throw new Error('Format soal kosong');

    soalAktif = parsed.soal;
    indexSoalSekarang = 0;
    skorBenar = 0;
    tampilkanSoal('panel-latihan-ai');

  } catch (error) {
    console.error("Catch Error:", error);
    panelLatihan.innerHTML = `
      <div class="locked-state-card">
        <div class="lock-icon">⚠️</div>
        <h3>Gagal Menghubungi AI</h3>
        <p>Pastikan API Key Groq valid dan kuota internet mencukupi.<br><small>Error: ${error.message}</small></p>
        <button class="btn-action" onclick="generateSoalDariAI('${gateKey}')">Coba Lagi</button>
      </div>
    `;
  }
}

// ====== BANK SOAL & DYNAMIC GENERATOR (ANTI BUG & SOAL TAK TERHINGGA) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Jika hujan, jalan basah. Jalan tidak basah. Maka...", opsi: ["Hujan turun", "Hujan tidak turun", "Jalan kering", "Tidak tentu"], jawaban: 1, pembahasan: "Modus Tollens: p→q dan ~q, maka ~p." },
    { soal: "Semua mahasiswa wajib KRS. Sebagian mahasiswa belum bayar SPP. Maka...", opsi: ["Semua yang belum bayar tidak wajib KRS", "Sebagian yang wajib KRS belum bayar SPP", "Semua mahasiswa miskin", "Tidak ada hubungannya"], jawaban: 1, pembahasan: "Silogisme sebagian." },
    { soal: "Deret: 2, 5, 10, 17, 26, ...", opsi: ["35", "36", "37", "38"], jawaban: 2, pembahasan: "Selisih +3, +5, +7, +9. Berikutnya +11. 26+11=37." },
    { soal: "Deret huruf: B, D, G, K, P, ...", opsi: ["U", "V", "W", "X"], jawaban: 2, pembahasan: "Selisih +2, +3, +4, +5, +6. P(16)+6=V(22)." },
    { soal: "Jika x prima dan x > 2, maka x ganjil. Jika x genap, maka...", opsi: ["x prima", "x ganjil", "x bukan prima atau x <= 2", "x nol"], jawaban: 2, pembahasan: "Kontraposisif logika." }
  ],
  'subtest-ppu': [
    { soal: "Sinonim dari 'Mitigasi' adalah...", opsi: ["Pencegahan", "Penghancuran", "Pembangunan", "Penolakan"], jawaban: 0, pembahasan: "Mitigasi = usaha mengurangi dampak buruk/pencegahan." },
    { soal: "Sinonim dari 'Fluktuasi' adalah...", opsi: ["Kestabilan", "Turun naik", "Kehilangan", "Kenaikan"], jawaban: 1, pembahasan: "Fluktuasi = naik turunnya nilai." },
    { soal: "Sinonim dari 'Aklamasi' adalah...", opsi: ["Penolakan", "Perhitungan suara", "Persetujuan serentak", "Perdebatan"], jawaban: 2, pembahasan: "Aklamasi = persetujuan tanpa voting." },
    { soal: "Sinonim dari 'Insinuasi' adalah...", opsi: ["Pujian", "Sindiran", "Perintah", "Janji"], jawaban: 1, pembahasan: "Insinuasi = tuduhan/sindiran tidak langsung." },
    { soal: "Sinonim dari 'Bikameral' adalah...", opsi: ["Satu kamar", "Dua kamar", "Rapat paripurna", "Veto presiden"], jawaban: 1, pembahasan: "Bikameral = sistem dua kamar (DPR & DPD)." }
  ],
  'subtest-pbm': [
    { soal: "Perbaiki kalimat: 'Bagi siswa yang rajin belajar akan lulus.'", opsi: ["Bagi siswa rajin belajar, akan lulus.", "Siswa yang rajin belajar akan lulus.", "Bagi siswa yang rajin belajar lulus.", "Siswa yang rajin belajar, akan lulus."], jawaban: 1, pembahasan: "Hilangkan kata depan 'Bagi' agar subjek (Siswa) jelas." },
    { soal: "Perbaiki kalimat: 'Sejak dari pagi dia belajar.'", opsi: ["Sejak pagi dia belajar.", "Sejak dari pagi, dia belajar.", "Dari pagi dia belajar.", "Sejak pagi, dia belajar."], jawaban: 0, pembahasan: "Pleonasme (pemborosan). 'Sejak' dan 'dari' maknanya sama, hapus salah satu." },
    { soal: "Penulisan kata depan 'di' yang benar...", opsi: ["Dirumah", "Di rumah", "Di-rumah", "Di Rumah"], jawaban: 1, pembahasan: "Kata depan 'di' dipisah jika menunjukkan tempat." },
    { soal: "Penulisan kata kerja pasif 'di' yang benar...", opsi: ["Di makan", "Dimakan", "Di-makan", "Dimakan oleh"], jawaban: 1, pembahasan: "Kata kerja pasif 'di' harus digabung." },
    { soal: "Kalimat efektif harus memiliki...", opsi: ["Subjek dan Obyek", "Subjek dan Predikat", "Predikat dan Obyek", "Keterangan"], jawaban: 1, pembahasan: "Struktur inti minimal S dan P." }
  ],
  'subtest-indo': [
    { soal: "Teks: 'Edukasi karakter membuat siswa tangguh.' Gagasan utamanya adalah...", opsi: ["Siswa butuh bimbel", "Edukasi karakter penting untuk mental", "Ujian nasional menakutkan", "Siswa suka mencontek"], jawaban: 1, pembahasan: "Gagasan utama ada di kalimat pertama (deduktif)." },
    { soal: "Paragraf yang gagasan utamanya di akhir disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Deskriptif"], jawaban: 1, pembahasan: "Induktif: khusus ke umum." },
    { soal: "Paragraf yang gagasan utamanya di awal disebut...", opsi: ["Deduktif", "Induktif", "Campuran", "Naratif"], jawaban: 0, pembahasan: "Deduktif: umum ke khusus." },
    { soal: "Teks: 'Penanaman pohon mengurangi polusi.' Simpulan yang tepat...", opsi: ["Pohon itu indah", "Pohon bermanfaat bagi ekologi", "Pohon butuh air", "Pohon harus ditebang"], jawaban: 1, pembahasan: "Simpulan harus sesuai isi teks." },
    { soal: "Menyimpulkan isi teks disebut juga...", opsi: ["Skimming", "Menyimpulkan/Sintesis", "Scanning", "Membaca cepat"], jawaban: 1, pembahasan: "Sintesis adalah penggabungan gagasan untuk menyimpulkan." }
  ],
  'subtest-inggris': [
    { soal: "I wish I ___ harder for the exam yesterday.", opsi: ["study", "studied", "had studied", "would study"], jawaban: 2, pembahasan: "Past regret (penyesalan masa lalu) pakai S + wish + S + had V3." },
    { soal: "If she ___, she would come.", opsi: ["knows", "knew", "had known", "known"], jawaban: 1, pembahasan: "Conditional type 2 (hypothetical), pakai V2." },
    { soal: "The author's tone in a scientific fact report is usually...", opsi: ["Optimistic", "Subjective", "Objective", "Pessimistic"], jawaban: 2, pembahasan: "Laporan ilmiah bersifat objektif (netral)." },
    { soal: "Synonym of 'Abundant' is...", opsi: ["Scarce", "Plentiful", "Empty", "Small"], jawaban: 1, pembahasan: "Abundant = melimpah (plentiful)." },
    { soal: "Antonym of 'Artificial' is...", opsi: ["Fake", "Natural", "Synthetic", "Man-made"], jawaban: 1, pembahasan: "Artificial (buatan) lawannya Natural (alami)." }
  ],
  'subtest-pk': [
    { soal: "Jika f(x)=2x+1 dan g(x)=x², maka (g o f)(2)=", opsi: ["5", "10", "25", "20"], jawaban: 2, pembahasan: "f(2)=5, g(5)=25." },
    { soal: "Faktorial 4! (4 faktorial) adalah...", opsi: ["12", "16", "24", "4"], jawaban: 2, pembahasan: "4x3x2x1 = 24." },
    { soal: "Sudut bertolak belakang selalu...", opsi: ["90 derajat", "180 derajat", "Sama besar", "Berbeda"], jawaban: 2, pembahasan: "Sifat sudut bertolak belakang." },
    { soal: "Log 100 basis 10 adalah...", opsi: ["1", "2", "10", "100"], jawaban: 1, pembahasan: "10 pangkat 2 = 100." },
    { soal: "Mean (rata-rata) dari 2, 4, 6, 8 adalah...", opsi: ["4", "5", "6", "8"], jawaban: 1, pembahasan: "Jumlah 20 dibagi 4 data = 5." }
  ],
  'subtest-pm': [
    { soal: "7 orang dipilih 3 untuk delegasi. Berapa caranya? (Kombinasi)", opsi: ["21", "35", "42", "210"], jawaban: 1, pembahasan: "C(7,3) = 7!/(3!4!) = 35." },
    { soal: "Ketua, wakil, sekretaris dari 5 orang. (Permutasi)", opsi: ["10", "20", "60", "120"], jawaban: 2, pembahasan: "P(5,3) = 5!/2! = 60." },
    { soal: "Modal Rp100.000, bunga 12%/tahun. Bunga 3 bulan?", opsi: ["Rp 1.000", "Rp 3.000", "Rp 12.000", "Rp 4.000"], jawaban: 1, pembahasan: "(12%/12) x 3 bln = 3%. 3% x 100k = 3000." },
    { soal: "Jarak kota A-B 120 km. Motor 60 km/jam. Waktu tempuh?", opsi: ["1 jam", "2 jam", "3 jam", "0.5 jam"], jawaban: 1, pembahasan: "Jarak / Kecepatan = 120/60 = 2 jam." },
    { soal: "Harga naik 20%, brg mula-mula Rp 50.000. Harga sekarang?", opsi: ["Rp 55.000", "Rp 60.000", "Rp 70.000", "Rp 10.000"], jawaban: 1, pembahasan: "20% x 50k = 10k. 50k+10k = 60k." }
  ]
};

// Fungsi Generator Soal Otomatis (Membuat bank soal tak terhingga)
function generateDynamicSoal(jumlah = 35) {
  const arr = [];
  for(let i=0; i<jumlah; i++) {
    const tipe = Math.floor(Math.random() * 3);
    
    if(tipe === 0) { // Deret Aritmatika
      const a = Math.floor(Math.random() * 10) + 2;
      const b = a + Math.floor(Math.random() * 5) + 2;
      const sel = b - a;
      const c = b + sel;
      const d = c + sel;
      const ans = d + sel;
      arr.push({
        soal: `Deret Aritmatika: ${a}, ${b}, ${c}, ${d}, ... Bilangan selanjutnya adalah?`,
        opsi: [`${ans}`, `${ans+2}`, `${ans-2}`, `${ans+sel}`].sort(() => Math.random() - 0.5),
        jawaban: 0,
        pembahasan: `Pola selisih +${sel}. Maka ${d} + ${sel} = ${ans}.`
      });
    } 
    else if(tipe === 1) { // Kombinasi Sederhana
      const n = Math.floor(Math.random() * 4) + 5; // 5-8
      const r = 3;
      // Rumus C(n,3) = n(n-1)(n-2)/6
      const ans = (n * (n-1) * (n-2)) / 6;
      arr.push({
        soal: `Dari ${n} orang siswa, akan dipilih 3 orang sebagai pengurus OSIS. Berapa banyak cara pemilihan tim yang mungkin? (Abaikan urutan)`,
        opsi: [`${ans}`, `${ans+5}`, `${ans-3}`, `${n*3}`].sort(() => Math.random() - 0.5),
        jawaban: 0,
        pembahasan: `Kombinasi C(${n}, 3) = ${n}!/ (3! x ${n-3}!) = (${n}x${n-1}x${n-2}) / 6 = ${ans}.`
      });
    }
    else { // Logika Silogisme
      arr.push({
        soal: "Jika p maka q. Jika q maka r. Jika diketahui p terjadi, maka kesimpulan yang sah adalah?",
        opsi: ["q terjadi", "r terjadi", "p dan q terjadi", "r tidak terjadi"],
        jawaban: 1,
        pembahasan: "Silogisme rantai: (p→q) + (q→r) = (p→r). Jika p maka kesimpulannya r."
      });
    }
  }
  return arr;
}

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
  // RESET TOTAL SOAL AGAR TIDAK BUG CAMPUR SUBTES
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

function switchSubPanel(mode) {
  document.getElementById('panel-materi').classList.toggle('active', mode === 'materi');
  document.getElementById('panel-latihan-ai').classList.toggle('active', mode === 'latihan-ai');
  document.getElementById('panel-latihan-sim').classList.toggle('active', mode === 'latihan-sim');
}

// ====== SISTEM LATIHAN AI (GROQ) ======
let soalAktif = [], indexSoalSekarang = 0, skorBenar = 0;

async function generateSoalDariAI(gateKey) {
  const dataMateri = DATA_MATERI[gateKey];
  const panelLatihan = document.getElementById('panel-latihan-ai');
  panelLatihan.innerHTML = `<div class="loading-state"><div class="loading-spinner"></div><h3>Sedang Meracik 10 Soal Tipe UTBK...</h3><p>AI sedang menyusun soal ${dataMateri.title} tingkat sulit (HOTS). Mohon tunggu sejenak.</p></div>`;

  const promptSystem = `Kamu adalah seorang "Tim Pembuat Soal UTBK Resmi". Buat soal SULIT & HOTS. WAJIB balas JSON murni.`;
  const promptUser = `Buatkan 10 soal PG untuk subtes "${dataMateri.title}". Struktur JSON: { "soal": [ { "pertanyaan": "...", "opsi": ["A", "B", "C", "D"], "jawaban": 0, "pembahasan": "..." } ] }`;

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

    if (!response.ok) throw new Error('Gagal memuat soal dari AI');
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

// ====== SISTEM SIMULASI BANK SOAL (ANTI BUG) ======
function mulaiSimulasi(gateKey) {
  // Ambil soal statis dari bank (jika ada)
  let bank = BANK_SIMULASI[gateKey] || [];
  
  // Jika bank soal statis kurang dari 40, generate sisanya secara dinamis
  let combinedBank = [...bank];
  if(combinedBank.length < 40) {
    const dynamicNeeded = 40 - combinedBank.length;
    const dynamicSoal = generateDynamicSoal(dynamicNeeded);
    combinedBank = combinedBank.concat(dynamicSoal);
  }

  // Acak urutan soal (Shuffle)
  soalAktif = combinedBank.sort(() => Math.random() - 0.5);
  indexSoalSekarang = 0;
  skorBenar = 0;
  tampilkanSoal('panel-latihan-sim');
}
