'use client';

import { AlertTriangle, RotateCcw } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12'>
      <div className='card-surface animate-fade-up relative z-10 w-full max-w-md p-8 text-center'>
        <div className='mx-auto flex size-16 items-center justify-center rounded-full bg-primary-100/10 text-primary-100'>
          <AlertTriangle className='size-8' aria-hidden />
        </div>

        <h1 className='mt-5 text-2xl font-bold text-neutral-800'>
          Terjadi kesalahan
        </h1>
        <p className='mt-2 text-sm text-neutral-600'>
          Halaman gagal dimuat. Silakan coba lagi beberapa saat lagi.
        </p>

        <Button
          variant='primary'
          leftIcon={RotateCcw}
          className='mt-6'
          onClick={reset}
        >
          Coba lagi
        </Button>
      </div>
    </main>
  );
}