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
