// ====== SOURCE BANK MATERI UTBK ======
const DATA_MATERI = {
  'subtest-pu': {
    title: 'Penalaran Umum (PU)',
    category: 'TPS Module',
    desc: 'Menguji kemampuan bernalar secara logis melalui Penalaran Induktif, Deduktif, dan Kuantitatif.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Penalaran Induktif</h2>
        <p>Proses penarikan kesimpulan dari kasus khusus ke umum. Di UTBK sering keluar dalam bentuk pola barisan angka atau analogi gambar.</p>
        <ul>
          <li>Perhatikan selisih atau operasi kuadrat antar elemen.</li>
          <li>Uji konsistensi pola minimal pada 3 deret pertama.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Penalaran Deduktif</h2>
        <p>Penarikan kesimpulan dari premis-premis umum yang sudah dianggap benar. Menggunakan hukum logika matematika dasar silogisme.</p>
        <ul>
          <li><strong>Silogisme:</strong> Jika p → q dan q → r, maka kesimpulannya p → r.</li>
          <li><strong>Modus Ponens:</strong> Jika p → q benar, dan p terjadi, maka q pasti terjadi.</li>
          <li><strong>Modus Tollens:</strong> Jika p → q benar, dan tidak terjadi q, maka tidak terjadi p.</li>
        </ul>
      </div>
    `
  },
  'subtest-ppu': {
    title: 'Pengetahuan & Pemahaman Umum (PPU)',
    category: 'TPS Module',
    desc: 'Menguji kemampuan dalam memahami dan menguasai pengetahuan serta kebahasaan umum.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Hubungan Makna Kata (Semantik)</h2>
        <p>Menganalisis keterkaitan antar kata dalam teks, seperti sinonim kontekstual, antonim, maupun polisemi.</p>
      </div>
      <div class="materi-card">
        <h2>2. Pemahaman Konteks Paragraf</h2>
        <p>Mengidentifikasi kata rujukan, idiom, serta maksud implisit dari sudut pandang penulis dalam bacaan ilmiah.</p>
      </div>
    `
  },
  'subtest-pbm': {
    title: 'Memahami Bacaan & Menulis (PBM)',
    category: 'TPS Module',
    desc: 'Menguji keterampilan tata bahasa, penerapan ejaan resmi, dan kepaduan struktur paragraf.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Kepaduan Paragraf (Koherensi)</h2>
        <p>Menyusun kalimat acak menjadi paragraf yang logis atau membuang kalimat yang tidak padu (kalimat sumbang).</p>
      </div>
      <div class="materi-card">
        <h2>2. Konvensi Bahasa & Ejaan</h2>
        <p>Fokus utama pada penggunaan tanda baca (koma, titik dua), penulisan kata berimbuhan, kata depan, serta huruf kapital sesuai PUEBI/EYD.</p>
      </div>
    `
  },
  'subtest-pk': {
    title: 'Pengetahuan Kuantitatif (PK)',
    category: 'TPS Module',
    desc: 'Menguji pemahaman dasar konsep matematika, aljabar, statistika, dan geometri.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Aljabar & Sistem Persamaan</h2>
        <p>Menyelesaikan operasi matriks, fungsi komposisi, kuadratik, serta perbandingan kuantitatif antara variabel P dan Q.</p>
      </div>
      <div class="materi-card">
        <h2>2. Analisis Geometri Dasar</h2>
        <p>Menghitung luas, keliling, koordinat kartesius, sudut pada garis sejajar, serta properti bangun ruang/datar dasar.</p>
      </div>
    `
  },
  'subtest-indo': {
    title: 'Literasi dalam Bahasa Indonesia',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan memahami, menganalisis, dan mengevaluasi isi teks esai kompleks.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Evaluasi Gagasan & Inferensi</h2>
        <p>Menemukan kesimpulan tersirat, menganalisis tujuan penulisan, serta menentukan opini vs fakta dalam teks eksplanatif.</p>
      </div>
    `
  },
  'subtest-inggris': {
    title: 'Literasi dalam Bahasa Inggris',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan pemahaman bacaan tingkat lanjut (*reading comprehension*) teks berbahasa Inggris.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Tone, Purpose, and Author’s Attitude</h2>
        <p>Menentukan sikap penulis (objective, biased, optimistic) dan mendeteksi ide utama dari teks akademik (jurnal/artikel).</p>
      </div>
      <div class="materi-card">
        <h2>2. Subjunctive Wish & Past Regret</h2>
        <p>Pola kalimat pengandaian masa lalu: <code>I wish + Subject + Had + V3</code>. Contoh: "I wish I had come earlier." (Faktanya: saya datang terlambat).</p>
      </div>
    `
  },
  'subtest-pm': {
    title: 'Penalaran Matematika (PM)',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan memecahkan masalah matematika terapan dalam konteks realistik kehidupan nyata.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Kombinatorika dalam Kasus Riil</h2>
        <p>Menghitung banyak kemungkinan susunan tim atau rute perjalanan tanpa memperhatikan urutan menggunakan Kombinasi.</p>
        <p><strong>Rumus Kombinasi:</strong> C(n, r) = n! / (r! × (n-r)!)</p>
      </div>
      <div class="materi-card">
        <h2>2. Pemodelan Finansial & Persentase</h2>
        <p>Menganalisis rasio keuangan, kalkulasi pertumbuhan ekonomi, fluktuasi APBN, inflasi, atau kalkulasi bunga majemuk.</p>
      </div>
    `
  }
};

// ====== DOM CONTROLLERS ======
const sidebar = document.getElementById('sidebar');
const menuTrigger = document.getElementById('menu-trigger');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const themeToggle = document.getElementById('theme-toggle');

const viewDashboard = document.getElementById('view-dashboard');
const viewSubtest = document.getElementById('view-subtest');

// Hamburger State Toggle
function toggleSidebar() {
  sidebar.classList.toggle('open');
}
menuTrigger.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Theme Switcher (Dark vs Light)
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetTheme);
  themeToggle.textContent = targetTheme === 'dark' ? '🌙' : '☀️';
});

// Navigation View Router
function navigateTo(viewId, gateKey = null) {
  sidebar.classList.remove('open'); // Tutup sidebar otomatis jika terbuka
  
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

// Bind Home-Brand Click
document.getElementById('brand-home').addEventListener('click', () => navigateTo('dashboard'));
document.getElementById('btn-back-dashboard').addEventListener('click', () => navigateTo('dashboard'));

// Bind Card Grid Dashboard Clicks
document.querySelectorAll('.node-card').forEach(card => {
  card.addEventListener('click', () => {
    const gate = card.dataset.gate;
    navigateTo('subtest', gate);
  });
});

// Bind Sidebar Links Clicks
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
  
  // Masukkan konten materi ke zona render
  document.getElementById('materi-dynamic-content').innerHTML = data.htmlContent;

  // Reset tab submateri kembali ke tab 'materi'
  switchSubPanel('materi');
  resetChronoTimer();
}

// Inner Subtest Tab Switcher
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

// ====== CHRONO TIMER MODULE (UNIQUE UX FEATURE) ======
let chronoInterval = null;
let chronoRemainingSeconds = 25 * 60; // Default Pomodoro 25 Menit
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
