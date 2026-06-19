// ====== KONFIGURASI ======
const UTBK_TARGET = new Date('2027-04-21T00:00:00+07:00');

const PHASES = [
  {
    key: 'fase1',
    title: 'Fase 1 &middot; Fondasi & Pemetaan',
    range: 'Juli – September 2026',
    items: [
      '1 topik baru per minggu (jangan loncat-loncat)',
      'Tiap habis 1 sub-bab, tutup catatan lalu kerjakan 5-10 soal dari ingatan',
      'Buat flashcard untuk rumus/konsep yang sering salah',
      'Review flashcard di hari ke-1, ke-3, ke-7 setelah dibuat',
      'Kuasai: Penalaran Umum',
      'Kuasai: Pengetahuan & Pemahaman Umum',
      'Kuasai: Pemahaman Bacaan dan Menulis',
      'Kuasai: Pengetahuan Kuantitatif',
      'Kuasai: Literasi Bahasa Indonesia',
      'Kuasai: Literasi Bahasa Inggris',
      'Kuasai: Penalaran Matematika',
    ]
  },
  {
    key: 'fase2',
    title: 'Fase 2 &middot; Konsolidasi & Interleaving',
    range: 'Oktober – Desember 2026',
    items: [
      'Latihan soal campuran, jangan 1 jenis soal seharian',
      '1x tryout mini per minggu (subtes bergantian)',
      'Review materi lama: minggu ke-2, ke-4, ke-8 setelah belajar',
      'Mulai isi Error Log tiap habis latihan',
      'Oktober: tryout TPS dan Literasi',
      'November: tryout Penalaran Matematika',
      'Desember: evaluasi total topik lemah',
    ]
  },
  {
    key: 'fase3',
    title: 'Fase 3 &middot; Tryout Penuh',
    range: 'Januari – Februari 2027',
    items: [
      '1x tryout UTBK full (semua subtes, waktu asli) per minggu',
      'Analisis tiap soal salah: konsep / teliti / kehabisan waktu',
      '70% waktu belajar untuk topik lemah',
      '30% waktu belajar untuk maintenance topik kuat',
    ]
  },
  {
    key: 'fase4',
    title: 'Fase 4 &middot; Pemantapan',
    range: 'Maret – April 2027',
    items: [
      'Tryout full 2x per minggu',
      'Simulasikan kondisi ujian asli (waktu ketat, tempat sepi)',
      'Stop materi baru di H-14, fokus review error log',
      'Jaga tidur 7-8 jam terutama H-3 sebelum ujian',
    ]
  }
];

let supabase = null;

// ====== SETUP / KONEKSI ======
const setupScreen = document.getElementById('setup-screen');
const appEl = document.getElementById('app');

function getStoredCreds(){
  return {
    url: localStorage.getItem('utbk_sb_url'),
    key: localStorage.getItem('utbk_sb_key')
  };
}

async function tryConnect(url, key, persist){
  const errEl = document.getElementById('setup-error');
  errEl.textContent = '';
  try{
    const client = supabaseClientLib.createClient(url, key);
    // sanity check: try a harmless query
    const { error } = await client.from('checklist_items').select('id').limit(1);
    if (error && error.code !== 'PGRST116') {
      if (error.message && error.message.toLowerCase().includes('relation')) {
        errEl.textContent = 'Tersambung, tapi tabel belum dibuat. Jalankan dulu SQL setup dari README.';
        return;
      }
      errEl.textContent = 'Gagal konek: ' + error.message;
      return;
    }
    supabase = client;
    if (persist){
      localStorage.setItem('utbk_sb_url', url);
      localStorage.setItem('utbk_sb_key', key);
    }
    setupScreen.classList.add('hidden');
    appEl.classList.remove('hidden');
    initApp();
  }catch(e){
    errEl.textContent = 'Gagal konek: ' + e.message;
  }
}

document.getElementById('btn-connect').addEventListener('click', () => {
  const url = document.getElementById('input-url').value.trim();
  const key = document.getElementById('input-key').value.trim();
  if (!url || !key){
    document.getElementById('setup-error').textContent = 'Isi URL dan Anon Key dulu.';
    return;
  }
  tryConnect(url, key, true);
});

document.getElementById('btn-disconnect').addEventListener('click', () => {
  localStorage.removeItem('utbk_sb_url');
  localStorage.removeItem('utbk_sb_key');
  location.reload();
});

let supabaseClientLib;
window.addEventListener('DOMContentLoaded', () => {
  supabaseClientLib = window.supabase;
  const { url, key } = getStoredCreds();
  if (url && key){
    document.getElementById('input-url').value = url;
    document.getElementById('input-key').value = key;
    tryConnect(url, key, false);
  }
});

// ====== TABS ======
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ====== COUNTDOWN ======
function updateCountdown(){
  const now = new Date();
  let diff = UTBK_TARGET - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ====== INIT APP ======
async function initApp(){
  await seedChecklistIfEmpty();
  await renderPhases();
  await renderErrorLog();
  await renderScores();
}

// ====== CHECKLIST / JADWAL ======
async function seedChecklistIfEmpty(){
  const { count } = await supabase.from('checklist_items').select('*', { count: 'exact', head: true });
  if (count && count > 0) return;
  const rows = [];
  PHASES.forEach(phase => {
    phase.items.forEach((label, i) => {
      rows.push({ phase: phase.key, position: i, label: label, checked: false });
    });
  });
  await supabase.from('checklist_items').insert(rows);
}

async function renderPhases(){
  const { data, error } = await supabase.from('checklist_items').select('*').order('phase').order('position');
  if (error){ console.error(error); return; }

  const container = document.getElementById('phases-container');
  container.innerHTML = '';
  let totalDone = 0;
  let totalAll = data.length;

  PHASES.forEach(phase => {
    const items = data.filter(d => d.phase === phase.key);
    const card = document.createElement('div');
    card.className = 'phase-card';
    card.innerHTML = `
      <h2>${phase.title}</h2>
      <p class="phase-range">${phase.range}</p>
      <ul class="phase-items"></ul>
    `;
    const ul = card.querySelector('.phase-items');
    items.forEach(item => {
      if (item.checked) totalDone++;
      const li = document.createElement('li');
      li.className = 'phase-item' + (item.checked ? ' checked' : '');
      li.innerHTML = `<input type="checkbox" ${item.checked ? 'checked' : ''}><span>${item.label}</span>`;
      
      // FIX BUG: Mengubah status secara lokal tanpa renderPhases() agar tidak berkedip
      li.querySelector('input').addEventListener('change', async (e) => {
        await supabase.from('checklist_items').update({ checked: e.target.checked }).eq('id', item.id);
        
        if (e.target.checked) {
          li.classList.add('checked');
        } else {
          li.classList.remove('checked');
        }
        
        // Update progress bar atas secara real-time tanpa kedipan halaman
        const allChecks = container.querySelectorAll('.phase-item input[type="checkbox"]');
        const checkedCount = container.querySelectorAll('.phase-item input[type="checkbox"]:checked').length;
        const totalCount = allChecks.length;
        const pct = totalCount ? Math.round((checkedCount / totalCount) * 100) : 0;
        document.getElementById('overall-bar').style.width = pct + '%';
        document.getElementById('overall-label').textContent = `${checkedCount} / ${totalCount} selesai`;
      });
      ul.appendChild(li);
    });
    container.appendChild(card);
  });

  const pct = totalAll ? Math.round((totalDone / totalAll) * 100) : 0;
  document.getElementById('overall-bar').style.width = pct + '%';
  document.getElementById('overall-label').textContent = `${totalDone} / ${totalAll} selesai`;
}

// ====== ERROR LOG ======
document.getElementById('error-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const topic = document.getElementById('err-topic').value.trim();
  const soalType = document.getElementById('err-soaltype').value.trim();
  const errType = document.getElementById('err-type').value;
  const note = document.getElementById('err-note').value.trim();
  if (!topic) return;
  await supabase.from('error_log').insert({ topic, soal_type: soalType, error_type: errType, note });
  e.target.reset();
  renderErrorLog();
});

async function renderErrorLog(){
  const { data, error } = await supabase.from('error_log').select('*').order('created_at', { ascending: false });
  if (error){ console.error(error); return; }
  const tbody = document.getElementById('error-tbody');
  tbody.innerHTML = '';
  document.getElementById('error-empty').classList.toggle('hidden', data.length > 0);
  data.forEach(row => {
    const tr = document.createElement('tr');
    const tgl = new Date(row.created_at).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
    tr.innerHTML = `
      <td>${tgl}</td>
      <td>${row.topic}</td>
      <td>${row.soal_type || '-'}</td>
      <td>${labelErrorType(row.error_type)}</td>
      <td>${row.note || '-'}</td>
      <td><button class="row-delete">Hapus</button></td>
    `;
    tr.querySelector('.row-delete').addEventListener('click', async () => {
      await supabase.from('error_log').delete().eq('id', row.id);
      renderErrorLog();
    });
    tbody.appendChild(tr);
  });
}
function labelErrorType(t){
  return { konsep: 'Salah konsep', teliti: 'Salah teliti', waktu: 'Kehabisan waktu' }[t] || t || '-';
}

// ====== SKOR TRYOUT ======
document.getElementById('score-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const tanggal = document.getElementById('sc-date').value;
  if (!tanggal) return;
  const tps = numOrNull('sc-tps');
  const litIndo = numOrNull('sc-indo');
  const litInggris = numOrNull('sc-inggris');
  const penMtk = numOrNull('sc-matematika');
  await supabase.from('score_tracker').insert({
    tanggal, tps, lit_indo: litIndo, lit_inggris: litInggris, pen_matematika: penMtk
  });
  e.target.reset();
  renderScores();
});
function numOrNull(id){
  const v = document.getElementById(id).value;
  return v === '' ? null : Number(v);
}

async function renderScores(){
  const { data, error } = await supabase.from('score_tracker').select('*').order('tanggal', { ascending: true });
  if (error){ console.error(error); return; }
  const tbody = document.getElementById('score-tbody');
  tbody.innerHTML = '';
  document.getElementById('score-empty').classList.toggle('hidden', data.length > 0);

  [...data].reverse().forEach(row => {
    const avg = average([row.tps, row.lit_indo, row.lit_inggris, row.pen_matematika]);
    const tgl = new Date(row.tanggal).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${tgl}</td>
      <td>${row.tps ?? '-'}</td>
      <td>${row.lit_indo ?? '-'}</td>
      <td>${row.lit_inggris ?? '-'}</td>
      <td>${row.pen_matematika ?? '-'}</td>
      <td><strong>${avg !== null ? avg : '-'}</strong></td>
      <td><button class="row-delete">Hapus</button></td>
    `;
    tr.querySelector('.row-delete').addEventListener('click', async () => {
      await supabase.from('score_tracker').delete().eq('id', row.id);
      renderScores();
    });
    tbody.appendChild(tr);
  });

  drawChart(data);
}
function average(nums){
  const valid = nums.filter(n => n !== null && n !== undefined);
  if (!valid.length) return null;
  return Math.round(valid.reduce((a,b) => a+b, 0) / valid.length);
}

function drawChart(data){
  const canvas = document.getElementById('score-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth;
  const cssHeight = 220;
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  const points = data.map(r => average([r.tps, r.lit_indo, r.lit_inggris, r.pen_matematika])).filter(v => v !== null);
  if (points.length < 2){
    ctx.fillStyle = '#646A6F';
    ctx.font = '13px IBM Plex Sans';
    ctx.fillText('Tambahkan minimal 2 skor untuk melihat grafik tren', 14, cssHeight/2);
    return;
  }

  const pad = 30;
  const max = Math.max(...points, 700);
  const min = Math.min(...points, 0);
  const range = max - min || 1;

  ctx.strokeStyle = '#DEDAD0';
  ctx.lineWidth = 1;
  for (let i=0;i<=4;i++){
    const y = pad + (cssHeight - pad*2) * (i/4);
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(cssWidth - 10, y);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.strokeStyle = '#16425B';
  ctx.lineWidth = 2.5;
  points.forEach((p, i) => {
    const x = pad + (cssWidth - pad - 20) * (i / (points.length - 1));
    const y = cssHeight - pad - ((p - min) / range) * (cssHeight - pad*2);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = '#D98E3B';
  points.forEach((p, i) => {
    const x = pad + (cssWidth - pad - 20) * (i / (points.length - 1));
    const y = cssHeight - pad - ((p - min) / range) * (cssHeight - pad*2);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI*2);
    ctx.fill();
  });

  ctx.fillStyle = '#646A6F';
  ctx.font = '11px IBM Plex Mono';
  ctx.fillText('Rata-rata skor tryout dari waktu ke waktu', pad, 16);
}


// ====== CODESYNC: FITUR TRYOUT MINI ======
const SOAL_TRYOUT = [
  {
    topik: "Penalaran Kuantitatif",
    teks: "Berdasarkan analisis fiskal, sebuah negara mencatat APBN tahun ini dengan rasio utang terhadap PDB sebesar 30%. Jika tahun depan PDB negara tersebut diproyeksikan naik 20% namun nominal utang dipertahankan tetap (tidak menambah utang baru), berapakah rasio utang terhadap PDB yang baru?",
    opsi: ["20%", "24%", "25%", "36%", "50%"],
    jawaban: 2, 
    pembahasan: "Misal PDB awal adalah 100, maka nilai utang adalah 30. Saat PDB naik 20%, PDB baru menjadi 120. Karena nominal utang bernotasi tetap yaitu 30, rasio yang baru adalah 30/120 = 1/4 = 25%."
  },
  {
    topik: "Penalaran Matematika",
    teks: "Dari sebuah sekolah di wilayah Pangkalan Kerinci, 5 orang siswa akan dipilih menjadi perwakilan tim debat konstitusi. Jika terdapat 8 orang siswa potensial yang mendaftar, banyak susunan tim berbeda yang mungkin terbentuk adalah...",
    opsi: ["28 susunan", "40 susunan", "56 susunan", "336 susunan", "6720 susunan"],
    jawaban: 2, 
    pembahasan: "Masalah ini menggunakan rumus kombinatorika karena urutan siswa dalam tim tidak diperhatikan (tim A, B, C sama dengan B, C, A). Rumus Kombinasi C(8,5) = 8! / (5! × 3!) = (8 × 7 × 6) / (3 × 2 × 1) = 56 susunan."
  },
  {
    topik: "Literasi Bahasa Indonesia",
    teks: "Pendidikan karakter sejak usia dini sangat berpengaruh terhadap kualitas moral siswa SMA. Nilai-nilai yang ditanamkan sebelum usia tujuh tahun terbukti menjadi fondasi utama dalam merespons tekanan akademik. Berdasarkan angket penelitian terbaru, siswa dengan edukasi karakter yang kuat memiliki tingkat empati dan kedisiplinan 40% lebih tinggi dibandingkan yang tidak.\n\nSimpulan yang paling tepat untuk paragraf di atas adalah...",
    opsi: ["Cara mengatasi tekanan lingkungan pada siswa SMA", "Pentingnya angket untuk mengukur tingkat empati siswa", "Pengaruh edukasi karakter secara dini terhadap kualitas karakter siswa SMA", "Masa kritis pembentukan nilai moral sebelum usia tujuh tahun", "Tingkat kedisiplinan siswa yang tidak mendapat pendidikan karakter"],
    jawaban: 2,
    pembahasan: "Teks tersebut bersifat deduktif di mana gagasan utamanya diletakkan di kalimat awal, yaitu menyoroti pengaruh signifikan dari pendidikan secara dini dan edukasi karakter terhadap kualitas siswa SMA (dalam hal ini moral, empati, dan kedisiplinan)."
  }
];

let currentQuizAnswers = [];

document.getElementById('btn-start-quiz')?.addEventListener('click', renderQuiz);

function renderQuiz() {
  document.getElementById('quiz-start').classList.add('hidden');
  const qContainer = document.getElementById('quiz-questions');
  qContainer.classList.remove('hidden');
  qContainer.innerHTML = '';
  currentQuizAnswers = new Array(SOAL_TRYOUT.length).fill(null);

  SOAL_TRYOUT.forEach((soal, i) => {
    const div = document.createElement('div');
    div.style.marginBottom = '24px';
    let opsiHtml = soal.opsi.map((opsi, j) => `
      <label style="display:block; padding:10px; border:1px solid var(--line); border-radius:9px; margin-bottom:8px; cursor:pointer; font-size:0.9rem;">
        <input type="radio" name="q${i}" value="${j}" style="width:auto; margin:0 8px 0 0;"> ${opsi}
      </label>
    `).join('');

    div.innerHTML = `
      <p class="eyebrow">${soal.topik}</p>
      <p style="font-size:0.95rem; line-height:1.5; margin-bottom:14px; font-weight:500;">${i+1}. ${soal.teks}</p>
      <div>${opsiHtml}</div>
    `;
    qContainer.appendChild(div);

    div.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', (e) => {
        currentQuizAnswers[i] = parseInt(e.target.value);
      });
    });
  });

  const btnSubmit = document.createElement('button');
  btnSubmit.className = 'btn-primary';
  btnSubmit.textContent = 'Kumpulkan & Cek Skor';
  btnSubmit.style.marginTop = '12px';
  btnSubmit.addEventListener('click', checkQuiz);
  qContainer.appendChild(btnSubmit);
}

function checkQuiz() {
  const qContainer = document.getElementById('quiz-questions');
  const rContainer = document.getElementById('quiz-result');
  qContainer.classList.add('hidden');
  rContainer.classList.remove('hidden');

  let benar = 0;
  let reviewHtml = '';

  SOAL_TRYOUT.forEach((soal, i) => {
    const jwbUser = currentQuizAnswers[i];
    const isCorrect = jwbUser === soal.jawaban;
    if(isCorrect) benar++;

    const userText = jwbUser !== null ? soal.opsi[jwbUser] : "Tidak dijawab";
    const correctText = soal.opsi[soal.jawaban];

    reviewHtml += `
      <div style="margin-bottom:16px; padding:16px; border-radius:9px; background:${isCorrect ? 'var(--accent-soft)' : '#FCE8E4'}; border-left: 4px solid ${isCorrect ? 'var(--good)' : 'var(--bad)'}">
        <p style="margin:0 0 8px 0; font-size:0.95rem;"><strong>Soal ${i+1}</strong>: ${isCorrect ? '✅ Benar' : '❌ Salah'}</p>
        <p style="margin:0 0 4px 0; font-size:0.85rem; color:var(--ink-soft);">Jawabanmu: ${userText}</p>
        ${!isCorrect ? `<p style="margin:0 0 6px 0; font-size:0.85rem; color:var(--bad);">Kunci: ${correctText}</p>` : ''}
        <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(0,0,0,0.05);">
          <p style="margin:0; font-size:0.85rem; line-height:1.5;"><strong>Pembahasan:</strong> ${soal.pembahasan}</p>
        </div>
      </div>
    `;
  });

  const skorAkhir = Math.round((benar / SOAL_TRYOUT.length) * 1000);
  rContainer.innerHTML = `
    <h2 style="margin-bottom:6px;">Skor Tryout: ${skorAkhir}</h2>
    <p class="phase-range" style="margin-bottom:20px;">Benar ${benar} dari ${SOAL_TRYOUT.length} soal.</p>
    <div>${reviewHtml}</div>
    <button id="btn-retry-quiz" class="btn-ghost" style="margin-top:16px; width:100%;">Coba Lagi</button>
  `;

  document.getElementById('btn-retry-quiz').addEventListener('click', () => {
    rContainer.classList.add('hidden');
    renderQuiz();
  });
}
