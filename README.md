# Ruang Belajar UTBK

Website tracker belajar UTBK-SNBT dengan checklist jadwal, error log, dan tracker skor tryout. Datanya tersimpan di Supabase (database cloud gratis) supaya sinkron di semua device.

## 1. Buat database di Supabase (gratis, ~5 menit)

1. Buka https://supabase.com → daftar/login (bisa pakai akun GitHub)
2. Klik **New Project** → isi nama project bebas → pilih region terdekat (Singapore) → buat password database (simpan, tapi tidak dipakai di website ini)
3. Tunggu project selesai dibuat (~1-2 menit)
4. Di sidebar kiri, klik **SQL Editor** → **New query**
5. Buka file `supabase-setup.sql` di folder ini, copy semua isinya, paste ke SQL Editor, lalu klik **Run**
6. Di sidebar kiri, klik **Project Settings** (ikon gear) → **API**
7. Salin dua hal ini, nanti dipakai di website:
   - **Project URL** (contoh: `https://xxxxx.supabase.co`)
   - **anon public key** (string panjang di bagian "Project API keys")

## 2. Coba dulu di komputer/HP kamu

Buka file `index.html` langsung di browser (double click), lalu masukkan Project URL dan anon key yang sudah disalin tadi. Kalau berhasil, layar setup akan hilang dan tampil halaman utama.

## 3. Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misal `utbk-tracker`
2. Upload semua file di folder ini (`index.html`, `style.css`, `app.js`) ke repo tersebut
   - **Jangan upload** `supabase-setup.sql` kalau tidak mau orang lain melihat struktur tabelmu (opsional, tidak wajib aman karena anon key memang didesain untuk publik, tapi tetap rapi)
3. Di repo, buka **Settings** → **Pages**
4. Di bagian **Source**, pilih branch `main` dan folder `/ (root)` → **Save**
5. Tunggu 1-2 menit, lalu buka `https://username-kamu.github.io/utbk-tracker/`
6. Masukkan lagi Project URL dan anon key di layar setup (tersimpan di browser, jadi cuma perlu isi sekali per device/browser)

## Catatan keamanan

Anon key Supabase memang didesain aman untuk dipakai di frontend publik — siapa pun yang membuka websitemu bisa baca/tulis data lewat key itu (karena policy yang dibuat di SQL setup mengizinkan akses penuh, tanpa login). Untuk dipakai sendiri ini tidak masalah. Kalau nanti mau lebih aman (misal supaya cuma kamu yang bisa edit), Supabase punya fitur Authentication yang bisa ditambahkan belakangan.

## Struktur file

- `index.html` — struktur halaman
- `style.css` — tampilan
- `app.js` — logika aplikasi & koneksi ke Supabase
- `supabase-setup.sql` — query untuk membuat tabel database
