# RDK FE 2026

Frontend pengumuman seleksi **Ramadan di Kampus 2026**. Dibuat dengan struktur
yang mengacu pada `rdk-fe-2025-main`, tanpa menyalin asset apa pun.

## Stack

- ⚡️ Next.js 15 (App Router)
- ⚛️ React 19
- ✨ TypeScript (strict)
- 💨 Tailwind CSS 4
- 📦 pnpm
- 📏 ESLint + Prettier (auto sort import, Tailwind class sorting)
- 🐶 Husky + lint-staged + commitlint

## Menjalankan project

> Dependency **belum** di-install. Jalankan sendiri:

```bash
git init                 # wajib sebelum pnpm install agar hook husky terpasang
pnpm install
cp .env.example .env.local
pnpm dev
```

Buka <http://localhost:3000> — otomatis redirect ke `/announcement`.

## Route

| Route           | Keterangan                                                      |
| --------------- | --------------------------------------------------------------- |
| `/`             | Redirect ke `/announcement`                                     |
| `/announcement` | Form input NRP, lalu redirect ke `/lolos` atau `/tidak-lolos`   |
| `/lolos`        | Halaman hasil untuk NRP berstatus `lolos` (butuh `?nrp=`)       |
| `/tidak-lolos`  | Halaman hasil untuk NRP berstatus `tidak-lolos` (butuh `?nrp=`) |

Alur:

```
/announcement  ──submit NRP──▶  server action cek data
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
          /lolos?nrp=xxxxx                /tidak-lolos?nrp=xxxxx
```

Jika NRP tidak ada, atau status tidak cocok dengan halaman hasil, user
dikembalikan ke `/announcement`.

## Mengisi data NRP

Semua data ada di **`src/data/participants.ts`**. Tinggal tambah/ubah objek:

```ts
{
  nrp: '5025221001',        // digit saja
  nama: 'Ahmad Fauzan',
  status: 'lolos',          // 'lolos' | 'tidak-lolos'
  divisi: 'Acara',          // opsional
}
```

Tipe datanya ada di `src/types/announcement.ts`, helper lookup & normalisasi
(`normalizeNrp`, `findParticipant`) ada di file data yang sama. Untuk pemakaian
cepat tersedia juga map `NRP_STATUS`:

```ts
import { NRP_STATUS } from '@/data/participants';

NRP_STATUS['5025221001']; // 'lolos'
```

Pencarian dilakukan di **server action** (`src/app/announcement/action.ts`),
jadi seluruh daftar peserta tidak ikut terkirim ke browser.

## Struktur folder

```
src/
├── app/
│   ├── announcement/        # form + server action pengecekan NRP
│   ├── lolos/               # halaman hasil lolos
│   ├── tidak-lolos/         # halaman hasil tidak lolos
│   ├── layout.tsx
│   ├── page.tsx             # redirect ke /announcement
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── announcement/        # Backdrop, ResultCard
│   └── ui/                  # Button, Input
├── constant/config.ts       # site config (title, description, url)
├── data/participants.ts     # ⬅️ DATA NRP + STATUS
├── lib/
│   ├── announcement.ts      # helper path hasil
│   └── utils.ts             # cn()
├── styles/globals.css       # Tailwind theme + brand color
└── types/announcement.ts    # tipe Participant & AnnouncementStatus
```

## Scripts

| Script              | Fungsi                            |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Jalankan dev server               |
| `pnpm build`        | Build production                  |
| `pnpm start`        | Jalankan hasil build              |
| `pnpm lint`         | Lint via `next lint`              |
| `pnpm lint:fix`     | Lint + auto-fix + format          |
| `pnpm lint:strict`  | Lint tanpa warning                |
| `pnpm typecheck`    | Cek TypeScript                    |
| `pnpm format`       | Format semua file dengan Prettier |
| `pnpm format:check` | Cek format tanpa mengubah file    |

## Git hooks

- `.husky/pre-commit` → `pnpm lint-staged` (ESLint + Prettier untuk file staged)
- `.husky/commit-msg` → commitlint (conventional commit)
- `.husky/pre-push` → `pnpm typecheck`

Contoh commit message:

```
feat(announcement): add NRP result page
fix(lolos): handle unknown NRP
```

## Catatan

- Asset (font/gambar) dari project 2025 tidak disalin.
- Warna brand, animasi, dan token Tailwind didefinisikan di
  `src/styles/globals.css` (`@theme`).
- Alias import: `@/*` → `src/*`, `~/*` → `public/*`.
