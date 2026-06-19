-- Jalankan semua query ini di Supabase: SQL Editor > New query > Run

create table checklist_items (
  id uuid primary key default gen_random_uuid(),
  phase text not null,
  position int not null,
  label text not null,
  checked boolean not null default false
);

create table error_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  topic text not null,
  soal_type text,
  error_type text,
  note text
);

create table score_tracker (
  id uuid primary key default gen_random_uuid(),
  tanggal date not null,
  tps int,
  lit_indo int,
  lit_inggris int,
  pen_matematika int
);

-- Aktifkan akses publik (karena ini app personal tanpa login).
-- PENTING: siapa pun yang punya URL + anon key kamu bisa baca/tulis data ini.
-- Jangan share kredensial ini secara publik (jangan commit ke GitHub).

alter table checklist_items enable row level security;
alter table error_log enable row level security;
alter table score_tracker enable row level security;

create policy "allow all checklist_items" on checklist_items
  for all using (true) with check (true);

create policy "allow all error_log" on error_log
  for all using (true) with check (true);

create policy "allow all score_tracker" on score_tracker
  for all using (true) with check (true);
