import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

import { sampleNrp } from '@/data/participants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Pengumuman Hasil Seleksi',
  description:
    'Cek hasil seleksi panitia Ramadan di Kampus 2026 menggunakan NRP kamu.',
};

export default function AnnouncementPage() {
  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#C50662_0%,#720035_100%)] px-4 py-12 sm:py-16'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/annon/bgkaligrafi.svg'
          fill
          alt='kaligrafi'
          className='object-cover opacity-[0.23]'
          priority
        />
      </div>

      <div className='absolute top-0 bottom-0 left-0 z-0 h-full w-[15%] sm:w-[20%] md:w-[25%]'>
        <Image
          src='/images/annon/pilarkiri.svg'
          fill
          alt='pilar kiri'
          className='object-contain object-left-bottom'
          priority
        />
      </div>

      <div className='absolute top-0 right-0 bottom-0 z-0 h-full w-[15%] sm:w-[20%] md:w-[25%]'>
        <Image
          src='/images/annon/pilarkanan.svg'
          fill
          alt='pilar kanan'
          className='object-contain object-right-bottom'
          priority
        />
      </div>

      <div className='absolute top-10 left-1/2 z-20 flex w-[80%] -translate-x-1/2 flex-col sm:top-16'>
        <div className='relative right-0 ml-24 h-48 w-3/4 sm:h-24 md:h-40'>
          <Image
            src='/images/annon/PENGUMUMAN.svg'
            fill
            alt='Pengumuman'
            className='object-contain drop-shadow-xl'
            priority
          />
        </div>

        <div className='relative left-0 -mt-2 mr-12 h-20 w-[50%] self-end sm:-mt-4 sm:h-28 md:h-40'>
          <Image
            src='/images/annon/STAFF.svg'
            fill
            alt='Staff'
            className='object-contain drop-shadow-xl'
            priority
          />
        </div>
      </div>

      <div className='absolute top-2 left-[15.5%] z-20 h-44 w-[15%]'>
        <Image
          src='/images/annon/lampu.svg'
          fill
          alt='lampu'
          className='object-contain'
          priority
        />
      </div>

      <div className='absolute top-[40%] right-[15.5%] z-20 h-44 w-[15%] rotate-180 transform'>
        <Image
          src='/images/annon/lampu.svg'
          fill
          alt='lampu'
          className='object-contain'
          priority
        />
      </div>

      <div className='absolute top-[24%] left-[32.5%] z-20 h-72 w-[25%] transform'>
        <Image
          src='/images/annon/turban.svg'
          fill
          alt='turban'
          className='object-contain'
          priority
        />
      </div>

      <div className='absolute top-[70%] left-1/2 z-20 flex w-[90%] max-w-2xl -translate-x-1/2 flex-col gap-2 sm:w-[70%]'>
        <h3 className='text-sm font-medium text-white sm:text-base'>
          Masukkan NRP
        </h3>

        {/* Input Text */}
        <div className='flex w-full flex-row justify-between gap-8'>
          <input
            type='text'
            placeholder='Contoh : 5027250000'
            className='w-3/4 flex-1 rounded-md border border-transparent bg-white px-4 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
          />

          <button
            type='button'
            className='flex w-1/4 items-center justify-center gap-2 rounded-md bg-[#C50662] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#720035] focus:ring-2 focus:ring-white focus:outline-none'
          >
            <span>Lihat Hasil</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
