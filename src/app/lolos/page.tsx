import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Selamat, Kamu Lolos',
  description: 'Hasil seleksi panitia Ramadan di Kampus 2026.',
};

export default function LolosPage() {
  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#FFF1BC_0%,#FEBB7C_100%)] px-4 py-12 sm:py-16'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/annon/desktop.svg'
          fill
          alt='kaligrafi'
          className='relative z-10 object-cover mix-blend-darken'
          priority
        />
      </div>

      <div className='absolute top-0 bottom-0 left-0 z-0 h-full w-[15%] sm:w-[20%] md:w-[25%]'>
        <Image
          src='/images/annon/pilarkiri2.svg'
          fill
          alt='pilar kiri'
          className='object-contain object-left-bottom'
          priority
        />
      </div>

      <div className='absolute top-0 right-0 bottom-0 z-0 h-full w-[15%] sm:w-[20%] md:w-[25%]'>
        <Image
          src='/images/annon/pilarkanan2.svg'
          fill
          alt='pilar kanan'
          className='object-contain object-right-bottom'
          priority
        />
      </div>

      <div className='absolute top-10 left-1/2 z-20 flex w-[80%] -translate-x-1/2 flex-col sm:top-16'>
        <div className='relative right-0 ml-6 h-48 w-3/4 sm:h-24 md:h-40'>
          <Image
            src='/images/annon/SELAMAT.svg'
            fill
            alt='Selamat'
            className='object-contain drop-shadow-xl'
            priority
          />
        </div>

        <div className='relative left-0 -mt-2 mr-12 h-20 w-[50%] self-end sm:-mt-12 sm:h-28 md:h-40'>
          <Image
            src='/images/annon/LOLOS.svg'
            fill
            alt='Lolos'
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

      <div className='absolute top-[32%] left-[23%] z-20 h-56 w-[25%] transform'>
        <Image
          src='/images/annon/turban.svg'
          fill
          alt='turban'
          className='object-contain'
          priority
        />
      </div>

      <div className='absolute top-[32%] left-[38%] z-20 h-24 w-[25%] transform'>
        <Image
          src='/images/annon/TELAH.svg'
          fill
          alt='Telah'
          className='object-contain'
          priority
        />
      </div>
    </main>
  );
}
