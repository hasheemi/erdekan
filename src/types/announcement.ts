export type AnnouncementStatus = 'lolos' | 'tidak-lolos';

export type Participant = {
  /** Nomor Registrasi Peserta, disimpan sebagai digit saja. */
  nrp: string;
  nama: string;
  status: AnnouncementStatus;
  /** Opsional: divisi yang diterima / alasan tidak lolos. */
  divisi?: string;
};