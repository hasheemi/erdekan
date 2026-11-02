'use server';

import { redirect } from 'next/navigation';

import { getResultUrl } from '@/lib/announcement';

import { findParticipant, normalizeNrp } from '@/data/participants';

export type CheckAnnouncementState = {
  error: string | null;
};

export async function checkAnnouncement(
  _prevState: CheckAnnouncementState,
  formData: FormData,
): Promise<CheckAnnouncementState> {
  const nrp = normalizeNrp(String(formData.get('nrp') ?? ''));

  if (!nrp) {
    return { error: 'NRP wajib diisi.' };
  }

  const participant = findParticipant(nrp);

  if (!participant) {
    return { error: 'NRP tidak ditemukan. Periksa kembali nomor kamu.' };
  }

  redirect(getResultUrl(participant.status, participant.nrp));
}