import type { AnnouncementStatus } from '@/types/announcement';

/** Path halaman hasil untuk tiap status. */
export function getResultPath(status: AnnouncementStatus): string {
  return status === 'lolos' ? '/lolos' : '/tidak-lolos';
}

/** URL halaman hasil lengkap dengan query NRP. */
export function getResultUrl(status: AnnouncementStatus, nrp: string): string {
  return `${getResultPath(status)}?nrp=${encodeURIComponent(nrp)}`;
}