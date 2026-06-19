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
        <p>⚠️ <em>Hati-hati Jebakan!</em> Jika [p → q] lalu yang diketahui [q], kamu <strong>TIDAK BISA</strong> menyimpulkan [p]. Ini kesalahan logika yang paling sering dipasang pembuat soal.</p>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Soal Deduktif + Solusi</h2>
        <p><strong>Soal:</strong> Jika siswa rajin belajar (p), maka ia lulus UTBK (q). Jika siswa lulus UTBK (q), maka orang tua bahagia (r). Diketahui orang tua tidak bahagia (~r). Apa simpulan yang sah?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Gunakan Silogisme terlebih dahulu: (p → q) + (q → r) menghasilkan (p → r) "Jika siswa rajin belajar, maka orang tua bahagia".<br>
        Selanjutnya gunakan Modus Tollens dengan fakta baru: (p → r) dan (~r). Kesimpulannya adalah <strong>~p</strong>.<br>
        <strong>Jawaban Akhir:</strong> Siswa tidak rajin belajar.</p>
      </div>
      <div class="materi-card">
        <h2>3. Penalaran Induktif (Pola Deret Angka)</h2>
        <p>Mencari pola umum dari data-data spesifik. Strategi eksekusi kilat:</p>
        <ul>
          <li><strong>Pola Lompat:</strong> Jangan terpaku pada urutan berdampingan (+1, +2). Coba cek pola selang satu angka (angka ke-1 ke angka ke-3, dst).</li>
          <li><strong>Deret Bertingkat:</strong> Jika selisih pertama acak, cari selisih dari selisih tersebut (operasi tingkat 2).</li>
          <li><strong>Fibonacci:</strong> Angka berikutnya adalah hasil penjumlahan dua angka sebelumnya.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>4. Studi Kasus Soal Induktif + Solusi</h2>
        <p><strong>Soal:</strong> Tentukan angka berikutnya dari barisan: 3, 4, 7, 11, 18, 29, ...</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Mari analisis polanya:<br>
        3 + 4 = 7<br>
        4 + 7 = 11<br>
        7 + 11 = 18<br>
        11 + 18 = 29<br>
        Ini adalah struktur deret <strong>Fibonacci</strong>. Maka suku berikutnya adalah 18 + 29 = 47.<br>
        <strong>Jawaban Akhir:</strong> 47.</p>
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
        <p>PPU sering menguji arti kata serapan ilmiah atau kosakata bahasa Indonesia yang jarang digunakan. Kuncinya: Jangan artikan kata secara harfiah, bacalah satu kalimat utuh karena makna bisa bergeser mengikuti konteks teks.</p>
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
        Menurut KBBI, mitigasi berarti tindakan mengurangi dampak bencana atau risiko. Dalam konteks ekonomi pangan, tindakan ini berkaitan dengan pencegahan atau pengurangan dampak buruk.<br>
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
        <p>Kalimat yang baik harus memiliki struktur yang jelas (minimal memiliki <strong>Subjek (S)</strong> dan <strong>Predikat (P)</strong>) serta hemat kata. Ciri kalimat rusak/tidak efektif:</p>
        <ul>
          <li><strong>Subjek Hilang:</strong> Terjadi karena penggunaan kata depan di awal kalimat (Contoh salah: <em>"Bagi siswa yang ingin sukses harus belajar."</em> Kata 'Bagi' membuat subjek menjadi kabur).</li>
          <li><strong>Predikat Hilang:</strong> Menggunakan kata "yang" sebelum predikat (Contoh salah: <em>"Ayah yang membeli koran."</em>).</li>
          <li><strong>Pleonasme:</strong> Pemborosan kata (Contoh salah: <em>"Sejak dari pagi..."</em> atau <em>"Para bapak-bapak..."</em>).</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Kalimat Efektif + Solusi</h2>
        <p><strong>Soal:</strong> Perbaiki kalimat berikut agar menjadi kalimat efektif: <em>"Menurut analisis para ahli hukum menyatakan bahwa undang-undang tersebut harus direvisi."</em></p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Kalimat di atas kehilangan Subjek karena adanya konjungsi 'Menurut' di depan, serta rancu dengan kata 'menyatakan bahwa'.<br>
        Opsi Perbaikan 1 (Hilangkan 'Menurut'): <em>Analisis para ahli hukum menyatakan bahwa undang-undang tersebut harus direvisi.</em><br>
        Opsi Perbaikan 2 (Hilangkan 'menyatakan bahwa'): <em>Menurut analisis para ahli hukum, undang-undang tersebut harus direvisi.</em></p>
      </div>
      <div class="materi-card">
        <h2>3. Aturan Ejaan (EYD V) & Kalimat Sumbang</h2>
        <p>Kuasai aturan penulisan kata depan <strong>di</strong> (dipisah jika menunjukkan tempat: <em>di rumah</em>, digabung jika kata kerja pasif: <em>dimakan</em>). Kalimat sumbang adalah kalimat yang keluar dari topik utama paragraf.</p>
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
        <p>Di UTBK, tipe soal PK sering kali meminta kamu membandingkan nilai pada kolom P dan kolom Q, atau menganalisis apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan.</p>
        <ul>
          <li><strong>Tips:</strong> Jangan habiskan waktu mencari angka eksak jika yang ditanyakan hanya "apakah data tersebut cukup".</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Aljabar Fungsi + Solusi</h2>
        <p><strong>Soal:</strong> Jika f(x) = 3x - 1 dan g(x) = x² + 2. Berapakah nilai dari komposisi fungsi (g ∘ f)(2)?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Selesaikan dari fungsi yang paling dalam dulu, yaitu cari nilai f(2):<br>
        f(2) = 3(2) - 1 = 6 - 1 = 5.<br>
        Masukkan hasil f(2) ke fungsi g(x):<br>
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
        <p>Teks Literasi Indonesia di UTBK sangat panjang (3-4 paragraf ilmiah). Jangan membaca kata per kata dari awal karena akan menghabiskan waktu.</p>
        <ul>
          <li><strong>Metode Skimming:</strong> Baca kalimat pertama dan kalimat terakhir di setiap paragraf untuk memetakan ide pokok secara kilat.</li>
          <li>Kalimat utama di awal disebut paragraf <strong>Deduktif</strong>, di akhir disebut <strong>Induktif</strong>.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Simpulan Implisit + Solusi</h2>
        <p><strong>Teks:</strong> "Pendidikan karakter sejak usia dini di wilayah luar kota besar, seperti Pangkalan Kerinci, memperlihatkan korelasi positif terhadap ketahanan mental pelajar SMA. Survei terbaru berbasis angket menunjukkan siswa yang mendapatkan edukasi karakter lebih adaptif menghadapi ujian nasional dibandingkan siswa yang hanya fokus pada bimbingan belajar kognitif murni."<br><br>
        <strong>Soal:</strong> Apa simpulan yang paling didukung oleh teks di atas?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Teks membandingkan dua variabel: edukasi karakter usia dini vs bimbingan belajar kognitif murni. Hasilnya, edukasi karakter membuat siswa lebih tangguh secara mental.<br>
        <strong>Jawaban Simpulan:</strong> Edukasi karakter usia dini memberikan kontribusi penting bagi kesiapan mental siswa SMA menghadapi tekanan ujian.</p>
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
        <p>Soal sering menanyakan: <em>"What is the author’s attitude towards the topic?"</em> Berikut glosarium kata kunci intonasi penulis yang wajib dihapal:</p>
        <ul>
          <li><strong>Objective / Neutral:</strong> Penulis menyajikan fakta apa adanya tanpa memihak.</li>
          <li><strong>Critical / Skeptical:</strong> Penulis mempertanyakan keabsahan data atau tidak langsung percaya.</li>
          <li><strong>Optimistic:</strong> Penulis yakin akan ada dampak baik di masa depan.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Advanced Grammar: Subjunctive Patterns (Past Regret)</h2>
        <p>Pola pengandaian masa lalu menggunakan kata <strong>wish</strong> sering muncul untuk menguji ketelitian tata bahasamu.</p>
        <ul>
          <li><strong>Rumus Kunci:</strong> <code>Subject + wish + Subject + Had + Verb-3</code></li>
          <li>Rumus ini dipakai untuk menunjukkan penyesalan atas peristiwa yang telanjur terjadi di masa lampau.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>3. Studi Kasus Soal Bahasa Inggris + Solusi</h2>
        <p><strong>Soal:</strong> The debate team lost the selection match yesterday due to a simple misunderstanding. The captain said, "I wish we ___ more attention to the structural constitution rules."</p>
        <p>A. paid<br>B. have paid<br>C. had paid<br>D. would pay</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Kalimat di atas menceritakan penyesalan masa lalu (terdapat penanda waktu <em>"yesterday"</em>). Sesuai aturan <em>Past Subjunctive Regret</em>, tenses yang wajib digunakan setelah kata 'wish' adalah <strong>Past Perfect (Had + V3)</strong>.<br>
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
        <p>Membedakan kapan harus menggunakan rumus Permutasi atau Kombinasi dalam masalah dunia nyata:</p>
        <ul>
          <li><strong>Permutasi (Urutan Penting):</strong> Digunakan untuk menentukan posisi/jabatan (Ketua, Wakil, Sekretaris). Urutan AB tidak sama dengan BA.</li>
          <li><strong>Kombinasi (Urutan Diabaikan):</strong> Digunakan untuk memilih anggota tim, delegasi, atau bersalaman. Susunan delegasi [Andi, Budi] dihitung sama dengan [Budi, Andi].</li>
          <li><strong>Rumus Kombinasi:</strong> <code>C(n, r) = n! / (r! × (n - r)!)</code></li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Studi Kasus Kombinatorika Tim Debat + Solusi</h2>
        <p><strong>Soal:</strong> Dari 7 orang siswa kelas 11 di sebuah SMA, akan dipilih 3 orang siswa untuk mewakili sekolah dalam kompetisi debat hukum tata negara. Berapa banyak cara pemilihan yang mungkin?</p>
        <p><strong>Pembahasan Teknis:</strong><br>
        Karena urutan pemilihan siswa masuk ke dalam tim tidak diperhatikan, kita gunakan rumus Kombinasi C(7, 3):<br>
        C(7, 3) = 7! / (3! × (7 - 3)!)<br>
        C(7, 3) = 7! / (3! × 4!)<br>
        C(7, 3) = (7 × 6 × 5 × 4!) / ((3 × 2 × 1) × 4!)<br>
        C(7, 3) = (7 × 6 × 5) / 6 = 7 × 5 = 35.<br>
        <strong>Jawaban Akhir:</strong> 35 cara.</p>
      </div>
      <div class="materi-card">
        <h2>3. Pemodelan Rasio Keuangan & Rasionalisasi APBN</h2>
        <p>Sering muncul soal cerita mengenai persentase kenaikan utang negara, suku bunga bank, atau perbandingan alokasi dana subsidi. Tips utamanya adalah: Ubah narasi soal cerita yang panjang menjadi persamaan matematika sederhana terlebih dahulu sebelum berhitung.</p>
      </div>
    `
  }
};
// ====== DOM CONTROLLERS ======
const sidebar = document.getElementById('sidebar');
const menuTrigger = document.getElementById('menu-trigger');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const viewDashboard = document.getElementById('view-dashboard');
const viewSubtest = document.getElementById('view-subtest');
// Hamburger State Toggle
function toggleSidebar() {
  sidebar.classList.toggle('open');
}
menuTrigger.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);
// ====== TEMA DROPDOWN & CIRCULAR REVEAL ANIMATION ======
const themeSelectorWrapper = document.querySelector('.theme-selector-wrapper');
const themeCurrentBtn = document.getElementById('theme-current-btn');
const themeDropdown = document.getElementById('theme-dropdown');
const themeOptions = document.querySelectorAll('.theme-option');
const themeIcon = document.querySelector('.theme-icon');
const themeName = document.querySelector('.theme-name');
themeCurrentBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  themeDropdown.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!themeSelectorWrapper.contains(e.target)) {
    themeDropdown.classList.remove('open');
  }
});
function updateThemeButton(theme) {
  if (theme === 'dark') {
    themeIcon.textContent = '🌙';
    themeName.textContent = 'Dark';
  } else {
    themeIcon.textContent = '☀️';
    themeName.textContent = 'Light';
  }
}
themeOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    const targetTheme = option.dataset.theme;
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (targetTheme === currentTheme) {
      themeDropdown.classList.remove('open');
      return;
    }
    if (document.body.classList.contains('is-revealing')) return;
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty('--reveal-x', x + 'px');
    document.body.style.setProperty('--reveal-y', y + 'px');
    if (targetTheme === 'light') {
      document.body.classList.add('reveal-to-light');
    } else {
      document.body.classList.add('reveal-to-dark');
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('is-revealing');
      });
    });
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', targetTheme);
      updateThemeButton(targetTheme);
    }, 400);
    setTimeout(() => {
      document.body.classList.remove('is-revealing');
      document.body.classList.remove('reveal-to-light');
      document.body.classList.remove('reveal-to-dark');
      themeDropdown.classList.remove('open');
    }, 850);
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
document.querySelectorAll('.node-card').forEach(card => {
  card.addEventListener('click', () => {
    const gate = card.dataset.gate;
    navigateTo('subtest', gate);
  });
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    const target = link.dataset.target;
    if (target === 'dashboard') {
      navigateTo('dashboard');
    } else {
      navigateTo('subtest', target);
    }
  });
});
// ====== RENDER DYNAMIC SUBTEST VIEW ======
function renderSubtestPage(key) {
  const data = DATA_MATERI[key];
  if (!data) return;
  document.getElementById('subtest-title').textContent = data.title;
  document.getElementById('subtest-category').textContent = data.category;
  document.getElementById('subtest-category').className = `node-tag ${data.category.includes('TPS') ? 'tps' : 'lit'}`;
  document.getElementById('subtest-desc').textContent = data.desc;
  
  document.getElementById('materi-dynamic-content').innerHTML = data.htmlContent;
  switchSubPanel('materi');
  resetChronoTimer();
}
const subTabBtns = document.querySelectorAll('.sub-tab-btn');
subTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    subTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    switchSubPanel(btn.dataset.mode);
  });
});
function switchSubPanel(mode) {
  document.getElementById('panel-materi').classList.toggle('active', mode === 'materi');
  document.getElementById('panel-latihan').classList.toggle('active', mode === 'latihan');
}
// ====== CHRONO TIMER MODULE ======
let chronoInterval = null;
let chronoRemainingSeconds = 25 * 60;
let isChronoRunning = false;
const timerToggleSwitch = document.getElementById('timer-toggle-switch');
const chronoDisplayContainer = document.getElementById('chrono-display-container');
const timerDigits = document.getElementById('timer-digits');
const btnTimerState = document.getElementById('btn-timer-state');
const btnTimerReset = document.getElementById('btn-timer-reset');
timerToggleSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    chronoDisplayContainer.classList.remove('hidden');
  } else {
    chronoDisplayContainer.classList.add('hidden');
    pauseChronoTimer();
  }
});
function updateChronoDisplay() {
  const mins = Math.floor(chronoRemainingSeconds / 60);
  const secs = chronoRemainingSeconds % 60;
  timerDigits.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
function startChronoTimer() {
  if (isChronoRunning) return;
  isChronoRunning = true;
  btnTimerState.textContent = 'Pause';
  chronoInterval = setInterval(() => {
    if (chronoRemainingSeconds > 0) {
      chronoRemainingSeconds--;
      updateChronoDisplay();
    } else {
      clearInterval(chronoInterval);
      alert('Sesi fokus materi selesai! Istirahatlah sejenak.');
      resetChronoTimer();
    }
  }, 1000);
}
function pauseChronoTimer() {
  isChronoRunning = false;
  btnTimerState.textContent = 'Start';
  clearInterval(chronoInterval);
}
function resetChronoTimer() {
  pauseChronoTimer();
  chronoRemainingSeconds = 25 * 60;
  updateChronoDisplay();
}
btnTimerState.addEventListener('click', () => {
  if (isChronoRunning) {
    pauseChronoTimer();
  } else {
    startChronoTimer();
  }
});
btnTimerReset.addEventListener('click', resetChronoTimer);
