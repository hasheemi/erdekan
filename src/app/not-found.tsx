import { ArrowLeft, FileQuestion } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 overflow-hidden'
      >
        <div className='absolute -top-24 -left-24 size-72 rounded-full bg-yellow-200/40 blur-3xl' />
        <div className='absolute -right-20 bottom-0 size-80 rounded-full bg-primary-100/10 blur-3xl' />
      </div>

      <div className='card-surface animate-fade-up relative z-10 w-full max-w-md p-8 text-center'>
        <div className='mx-auto flex size-16 items-center justify-center rounded-full bg-brown-100 text-primary-200'>
          <FileQuestion className='size-8' aria-hidden />
        </div>

        <h1 className='mt-5 text-2xl font-bold text-neutral-800'>
          Halaman tidak ditemukan
        </h1>
        <p className='mt-2 text-sm text-neutral-600'>
          Alamat yang kamu buka tidak tersedia. Kembali ke halaman pengumuman
          untuk mengecek NRP.
        </p>

        <Link
          href='/announcement'
          className={buttonVariants({ variant: 'primary', className: 'mt-6' })}
        >
          <ArrowLeft className='size-4' aria-hidden />
          Kembali ke Pengumuman
        </Link>
      </div>
    </main>
  );
}