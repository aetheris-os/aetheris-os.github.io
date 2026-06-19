// ====== KONFIGURASI AI (GROQ API) ======
const GROQ_API_KEY = "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"; 
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// ====== SOURCE BANK MATERI UTBK ======
const DATA_MATERI = {
  'subtest-pu': {
    title: 'Penalaran Umum (PU)',
    category: 'TPS Module',
    desc: 'Menguji kemampuan bernalar secara logis melalui Penalaran Induktif, Deduktif, dan Kuantitatif.',
    htmlContent: `
      <div class="materi-card">
        <h2>1. Penalaran Deduktif (Logika Formal)</h2>
        <p>Penarikan kesimpulan dari premis umum. Tiga aturan baku:</p>
        <ul>
          <li><strong>Modus Ponens:</strong> [p → q] dan [p], maka <strong>q</strong>.</li>
          <li><strong>Modus Tollens:</strong> [p → q] dan [~q], maka <strong>~p</strong>.</li>
          <li><strong>Silogisme:</strong> [p → q] dan [q → r], maka <strong>p → r</strong>.</li>
        </ul>
      </div>
      <div class="materi-card">
        <h2>2. Penalaran Induktif (Pola Deret Angka)</h2>
        <p>Mencari pola umum dari data spesifik. Cek pola selang satu angka atau deret bertingkat.</p>
      </div>
    `
  },
  'subtest-ppu': {
    title: 'Pengetahuan & Pemahaman Umum (PPU)',
    category: 'TPS Module',
    desc: 'Menguji kemampuan dalam memahami dan menguasai pengetahuan serta kebahasaan umum.',
    htmlContent: `<div class="materi-card"><h2>Materi PPU</h2><p>Sinonim, antonim, dan pengetahuan umum.</p></div>`
  },
  'subtest-pbm': {
    title: 'Memahami Bacaan & Menulis (PBM)',
    category: 'TPS Module',
    desc: 'Menguji keterampilan tata bahasa, penerapan ejaan resmi, dan kepaduan struktur paragraf.',
    htmlContent: `<div class="materi-card"><h2>Materi PBM</h2><p>Kalimat efektif dan EYD.</p></div>`
  },
  'subtest-pk': {
    title: 'Pengetahuan Kuantitatif (PK)',
    category: 'TPS Module',
    desc: 'Menguji pemahaman dasar konsep matematika, aljabar, statistika, dan geometri.',
    htmlContent: `<div class="materi-card"><h2>Materi PK</h2><p>Aljabar, geometri, statistik.</p></div>`
  },
  'subtest-indo': {
    title: 'Literasi dalam Bahasa Indonesia',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan memahami, menganalisis, dan mengevaluasi isi teks esai kompleks.',
    htmlContent: `<div class="materi-card"><h2>Materi Literasi Indo</h2><p>Gagasan utama dan simpulan teks.</p></div>`
  },
  'subtest-inggris': {
    title: 'Literasi dalam Bahasa Inggris',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan pemahaman bacaan tingkat lanjut teks berbahasa Inggris.',
    htmlContent: `<div class="materi-card"><h2>Materi Literasi Inggris</h2><p>Reading comprehension & grammar.</p></div>`
  },
  'subtest-pm': {
    title: 'Penalaran Matematika (PM)',
    category: 'Literasi Module',
    desc: 'Menguji kemampuan memecahkan masalah matematika terapan dalam konteks realistik.',
    htmlContent: `<div class="materi-card"><h2>Materi PM</h2><p>Soal cerita dan pemodelan matematika.</p></div>`
  }
};

// ====== BANK SOAL SIMULASI (40 SOAL UNTUK PU) ======
const BANK_SIMULASI = {
  'subtest-pu': [
    { soal: "Jika hujan turun, maka jalan basah. Jalan tidak basah. Kesimpulan yang sah adalah...", opsi: ["Hujan turun", "Hujan tidak turun", "Jalan kering", "Tidak bisa disimpulkan"], jawaban: 1, pembahasan: "Modus Tollens: p→q dan ~q, maka ~p." },
    { soal: "Deret: 2, 5, 10, 17, 26, ... Bilangan selanjutnya adalah...", opsi: ["35", "36", "37", "38"], jawaban: 2, pembahasan: "Selisih: 3, 5, 7, 9. Selisih berikutnya 11. 26+11=37." },
    { soal: "Semua mahasiswa wajib mengambil KRS. Sebagian mahasiswa tidak membayar SPP. Kesimpulannya...", opsi: ["Semua yang tidak bayar SPP tidak wajib KRS", "Sebagian yang wajib KRS tidak bayar SPP", "Semua mahasiswa tidak bayar SPP", "Tidak ada hubungan KRS dan SPP"], jawaban: 1, pembahasan: "Silogisme部分 (sebagian). Yang wajib KRS = mahasiswa. Sebagian mahasiswa tidak bayar SPP." },
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
    { soal: "Semau dokter lulus S1. Sebagian dokter spesialis. Maka...", opsi: ["Semua spesialis lulus S1", "Sebagian lulus S1 adalah spesialis", "Semua lulus S1 spesialis", "Tidak ada kaitannya"], jawaban: 1, pembahasan: "Silogisme sebagian." },
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

// ====== TEMA DROPDOWN ======
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

// ====== SISTEM SIMULASI BANK SOAL ======
function mulaiSimulasi(gateKey) {
  const bank = BANK_SIMULASI[gateKey];
  const panelSim = document.getElementById('panel-latihan-sim');

  if (!bank || bank.length === 0) {
    panelSim.innerHTML = `<div class="locked-state-card"><div class="lock-icon">⚙️</div><h3>Bank Soal Belum Tersedia</h3><p>Bank soal simulasi untuk subtes ini sedang dalam pengembangan. Silakan coba subtes Penalaran Umum (PU) terlebih dahulu!</p></div>`;
    return;
  }

  soalAktif = [...bank].sort(() => Math.random() - 0.5);
  indexSoalSekarang = 0;
  skorBenar = 0;
  tampilkanSoal('panel-latihan-sim');
}

// ====== FUNGSI RENDER SOAL UNIVERSAL ======
function tampilkanSoal(panelId) {
  if (indexSoalSekarang >= soalAktif.length) { renderHasilAkhir(panelId); return; }

  const soal = soalAktif[indexSoalSekarang];
  const opsiHtml = soal.opsi.map((ops, i) => `
    <button class="opsi-soal" onclick="jawabSoal(${i}, '${panelId}')">
      <span class="opsi-huruf">${String.fromCharCode(65 + i)}</span>
      <span class="opsi-teks">${ops}</span>
    </button>
  `).join('');

  document.getElementById(panelId).innerHTML = `
    <div class="latihan-header">
      <div class="info-soal">
        <span class="node-tag tps">Soal ${indexSoalSekarang + 1} / ${soalAktif.length}</span>
        <span class="node-tag lit">Skor: ${skorBenar}</span>
      </div>
      <button class="btn-action shadow" onclick="keluarLatihan()">Keluar</button>
    </div>
    <div class="box-soal">
      <p class="teks-soal">${soal.pertanyaan || soal.soal}</p>
      <div class="opsi-grid">${opsiHtml}</div>
    </div>
  `;
}

function jawabSoal(indexJawaban, panelId) {
  const soal = soalAktif[indexSoalSekarang];
  const benar = indexJawaban === soal.jawaban;
  if (benar) skorBenar++;

  const opsiButtons = document.querySelectorAll('.opsi-soal');
  opsiButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === soal.jawaban) btn.classList.add('benar');
    else if (i === indexJawaban) btn.classList.add('salah');
  });

  const pembahasanBox = document.createElement('div');
  pembahasanBox.className = 'box-pembahasan';
  pembahasanBox.innerHTML = `
    <h3>${benar ? '✅ Jawaban Benar!' : '❌ Jawaban Kurang Tepat'}</h3>
    <p>${soal.pembahasan}</p>
    <button class="btn-action" onclick="lanjutSoal('${panelId}')">${indexSoalSekarang + 1 === soalAktif.length ? 'Lihat Hasil Akhir' : 'Soal Berikutnya →'}</button>
  `;
  document.querySelector('.box-soal').appendChild(pembahasanBox);
  pembahasanBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function lanjutSoal(panelId) { indexSoalSekarang++; tampilkanSoal(panelId); }

function renderHasilAkhir(panelId) {
  const persentase = (skorBenar / soalAktif.length) * 100;
  const btnText = panelId.includes('sim') ? "Ulangi Simulasi (Acak)" : "Ulangi Latihan AI";
  const btnAction = panelId.includes('sim') ? `mulaiSimulasi('${currentGateKey}')` : `generateSoalDariAI('${currentGateKey}')`;
  
  document.getElementById(panelId).innerHTML = `
    <div class="hasil-akhir">
      <div class="ikon-hasil">${persentase > 70 ? '🏆' : '📚'}</div>
      <h2>Sesi Latihan Selesai!</h2>
      <h1>${skorBenar} / ${soalAktif.length}</h1>
      <p>Skor kamu: ${persentase.toFixed(0)}%. ${persentase > 70 ? 'Pertahankan!' : 'Terus berlatih!'}</p>
      <button class="btn-action" onclick="${btnAction}">${btnText}</button>
      <button class="btn-action shadow" onclick="keluarLatihan()">Kembali ke Materi</button>
    </div>
  `;
}

function keluarLatihan() {
  switchSubPanel('materi');
  document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.sub-tab-btn[data-mode="materi"]').classList.add('active');
}

// ====== CHRONO TIMER & FLOATING TIMER MODULE ======
let chronoInterval = null;
let chronoRemainingSeconds = 25 * 60;
let isChronoRunning = false;

const timerToggleSwitch = document.getElementById('timer-toggle-switch');
const timerDurationSelect = document.getElementById('timer-duration-select');
const chronoDisplayContainer = document.getElementById('chrono-display-container');
const timerDigits = document.getElementById('timer-digits');
const btnTimerState = document.getElementById('btn-timer-state');
const btnTimerReset = document.getElementById('btn-timer-reset');

const floatingTimer = document.getElementById('floating-timer');
const ftDigits = document.getElementById('ft-digits');
const ftPauseBtn = document.getElementById('ft-pause-btn');
const ftCloseBtn = document.getElementById('ft-close-btn');

timerDurationSelect.addEventListener('change', () => {
  if (!isChronoRunning) {
    chronoRemainingSeconds = parseInt(timerDurationSelect.value) * 60;
    updateChronoDisplay();
  }
});

timerToggleSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    chronoDisplayContainer.classList.remove('hidden');
    chronoRemainingSeconds = parseInt(timerDurationSelect.value) * 60;
    updateChronoDisplay();
    startChronoTimer();
    floatingTimer.classList.remove('hidden');
    updateFloatingTimer();
  } else {
    chronoDisplayContainer.classList.add('hidden');
    floatingTimer.classList.add('hidden');
    pauseChronoTimer();
  }
});

function updateChronoDisplay() {
  const mins = Math.floor(chronoRemainingSeconds / 60);
  const secs = chronoRemainingSeconds % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  timerDigits.textContent = timeStr;
  ftDigits.textContent = timeStr;
}

function startChronoTimer() {
  if (isChronoRunning) return;
  isChronoRunning = true;
  btnTimerState.textContent = 'Pause';
  ftPauseBtn.textContent = '⏸️';
  chronoInterval = setInterval(() => {
    if (chronoRemainingSeconds > 0) {
      chronoRemainingSeconds--;
      updateChronoDisplay();
    } else {
      clearInterval(chronoInterval);
      alert('Waktu latihan selesai! Saatnya istirahat.');
      resetChronoTimer();
    }
  }, 1000);
}

function pauseChronoTimer() {
  isChronoRunning = false;
  btnTimerState.textContent = 'Start';
  ftPauseBtn.textContent = '▶️';
  clearInterval(chronoInterval);
}

function resetChronoTimer() {
  pauseChronoTimer();
  chronoRemainingSeconds = parseInt(timerDurationSelect.value) * 60;
  updateChronoDisplay();
}

btnTimerState.addEventListener('click', () => { if (isChronoRunning) pauseChronoTimer(); else startChronoTimer(); });
btnTimerReset.addEventListener('click', resetChronoTimer);
ftPauseBtn.addEventListener('click', () => { if (isChronoRunning) pauseChronoTimer(); else startChronoTimer(); });
ftCloseBtn.addEventListener('click', () => { 
  timerToggleSwitch.checked = false; 
  timerToggleSwitch.dispatchEvent(new Event('change')); 
});
