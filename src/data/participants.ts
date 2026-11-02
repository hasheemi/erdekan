import type { AnnouncementStatus, Participant } from '@/types/announcement';

/**
 * Sumber data pengumuman.
 *
 * Tambahkan / ubah baris di bawah ini untuk mengisi hasil seleksi.
 * `nrp` cukup ditulis sebagai string angka (tanpa spasi / tanda hubung).
 * `status` hanya boleh `'lolos'` atau `'tidak-lolos'`.
 */
export const PARTICIPANTS: Participant[] = [
  {
    nrp: '5025221001',
    nama: 'Ahmad Fauzan',
    status: 'lolos',
    divisi: 'Acara',
  },
  {
    nrp: '5025221002',
    nama: 'Nadia Putri Ramadhani',
    status: 'lolos',
    divisi: 'Media & Kreatif',
  },
  {
    nrp: '5025221003',
    nama: 'Rizky Pratama',
    status: 'lolos',
    divisi: 'Hubungan Masyarakat',
  },
  {
    nrp: '5025221004',
    nama: 'Salsabila Azzahra',
    status: 'lolos',
    divisi: 'Kesekretariatan',
  },
  {
    nrp: '5025221005',
    nama: 'Bagas Dwi Nugroho',
    status: 'lolos',
    divisi: 'Perlengkapan',
  },
  {
    nrp: '5025221006',
    nama: 'Alya Rahmawati',
    status: 'lolos',
    divisi: 'Konsumsi',
  },
  {
    nrp: '5025221007',
    nama: 'Fajar Hidayat',
    status: 'lolos',
    divisi: 'Acara',
  },
  {
    nrp: '5025221008',
    nama: 'Intan Permata Sari',
    status: 'lolos',
    divisi: 'Sponsorship',
  },
  {
    nrp: '5025221009',
    nama: 'Yoga Adi Saputra',
    status: 'tidak-lolos',
  },
  {
    nrp: '5025221010',
    nama: 'Citra Ayu Lestari',
    status: 'tidak-lolos',
  },
  {
    nrp: '5025221011',
    nama: 'Dimas Aryo Wibowo',
    status: 'tidak-lolos',
  },
  {
    nrp: '5025221012',
    nama: 'Putri Amelia',
    status: 'tidak-lolos',
  },
];

/**
 * Map sederhana `NRP -> status` untuk pemakaian cepat di tempat lain.
 *
 * ```ts
 * import { NRP_STATUS } from '@/data/participants';
 * NRP_STATUS['5025221001']; // 'lolos'
 * ```
 */
export const NRP_STATUS: Record<string, AnnouncementStatus> =
  Object.fromEntries(
    PARTICIPANTS.map(({ nrp, status }) => [nrp, status]),
  );

/**
 * Membersihkan input NRP: hanya menyisakan digit.
 * "5025 221 001" / "5025-221-001" -> "5025221001"
 */
export function normalizeNrp(input: string): string {
  return input.replace(/\D/g, '');
}

/** Cari peserta berdasarkan NRP (input bebas, akan dinormalisasi). */
export function findParticipant(input: string): Participant | undefined {
  const nrp = normalizeNrp(input);

  if (!nrp) {
    return undefined;
  }

  return PARTICIPANTS.find((participant) => participant.nrp === nrp);
}

/** Contoh NRP untuk mempermudah testing di halaman /announcement. */
export const sampleNrp = {
  lolos: PARTICIPANTS.find((p) => p.status === 'lolos')?.nrp ?? '',
  tidakLolos: PARTICIPANTS.find((p) => p.status === 'tidak-lolos')?.nrp ?? '',
} as const;