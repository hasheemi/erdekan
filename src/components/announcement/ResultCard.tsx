import {
  ArrowLeft,
  CheckCircle2,
  Instagram,
  XCircle,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/ui/button';

import type { AnnouncementStatus, Participant } from '@/types/announcement';

type ResultTheme = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  badgeClassName: string;
  iconClassName: string;
  glowClassName: string;
};

const themes: Record<AnnouncementStatus, ResultTheme> = {
  lolos: {
    icon: CheckCircle2,
    label: 'Lolos Seleksi',
    title: 'Selamat, kamu lolos!',
    description:
      'Kamu resmi menjadi bagian dari Ramadan di Kampus 2026. Informasi teknis dan grup divisi akan dikirimkan oleh penanggung jawab masing-masing.',
    badgeClassName: 'bg-green-300 text-white',
    iconClassName: 'bg-green-300 text-white',
    glowClassName: 'bg-green-200/50',
  },
  'tidak-lolos': {
    icon: XCircle,
    label: 'Belum Lolos',
    title: 'Terima kasih sudah mendaftar',
    description:
      'Kamu belum lolos pada seleksi kali ini. Jangan berkecil hati — masih banyak kesempatan lain untuk berkontribusi. Sampai jumpa di kegiatan berikutnya!',
    badgeClassName: 'bg-primary-100 text-white',
    iconClassName: 'bg-primary-100 text-white',
    glowClassName: 'bg-primary-100/20',
  },
};

export default function ResultCard({
  participant,
}: {
  participant: Participant;
}) {
  const theme = themes[participant.status];
  const Icon = theme.icon;
  const isPassed = participant.status === 'lolos';

  return (
    <section className='card-surface animate-fade-up relative overflow-hidden p-7 text-center sm:p-10'>
      <div
        aria-hidden
        className={cn(
          'absolute -top-12 -right-12 size-44 rounded-full blur-2xl',
          theme.glowClassName,
        )}
      />
      <div
        aria-hidden
        className='absolute -bottom-16 -left-10 size-40 rounded-full bg-yellow-200/30 blur-2xl'
      />

      <div className='relative'>
        <div
          className={cn(
            'animate-pop mx-auto flex size-20 items-center justify-center rounded-full shadow-lg',
            theme.iconClassName,
          )}
        >
          <Icon className='size-10' strokeWidth={2.5} aria-hidden />
        </div>

        <span
          className={cn(
            'mt-6 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
            theme.badgeClassName,
          )}
        >
          {theme.label}
        </span>

        <h1 className='mt-4 text-2xl font-bold text-neutral-800 sm:text-3xl'>
          {theme.title}
        </h1>

        <p className='mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base'>
          {theme.description}
        </p>

        <dl className='mt-8 grid gap-4 rounded-2xl border border-brown-200/70 bg-white/70 p-5 text-left sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <dt className='text-xs font-medium tracking-wide text-neutral-500 uppercase'>
              Nama
            </dt>
            <dd className='mt-1 font-semibold text-neutral-800'>
              {participant.nama}
            </dd>
          </div>

          <div>
            <dt className='text-xs font-medium tracking-wide text-neutral-500 uppercase'>
              NRP
            </dt>
            <dd className='mt-1 font-mono font-semibold text-neutral-800'>
              {participant.nrp}
            </dd>
          </div>

          {participant.divisi ? (
            <div>
              <dt className='text-xs font-medium tracking-wide text-neutral-500 uppercase'>
                Divisi
              </dt>
              <dd className='mt-1 font-semibold text-neutral-800'>
                {participant.divisi}
              </dd>
            </div>
          ) : (
            <div>
              <dt className='text-xs font-medium tracking-wide text-neutral-500 uppercase'>
                Status
              </dt>
              <dd className='mt-1 font-semibold text-neutral-800'>
                {isPassed ? 'Diterima' : 'Tidak diterima'}
              </dd>
            </div>
          )}
        </dl>

        <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link
            href='/announcement'
          >
            <ArrowLeft className='size-4' aria-hidden />
            Cek NRP lain
          </Link>

          {isPassed ? (
            <Link
              href='https://instagram.com/rdk.its'
              target='_blank'
              rel='noreferrer'
              className={buttonVariants({ variant: 'primary' })}
            >
              <Instagram className='size-4' aria-hidden />
              Ikuti @rdk.its
            </Link>
          ) : null}
        </div>

        <p className='mt-6 text-xs text-neutral-500'>
          Screenshot halaman ini sebagai bukti pengumuman.
        </p>
      </div>
    </section>
  );
}
