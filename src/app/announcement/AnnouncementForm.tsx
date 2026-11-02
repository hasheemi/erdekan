'use client';

import { Search } from 'lucide-react';
import { useActionState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  checkAnnouncement,
  type CheckAnnouncementState,
} from './action';

const initialState: CheckAnnouncementState = { error: null };

type AnnouncementFormProps = {
  samples: {
    lolos: string;
    tidakLolos: string;
  };
};

export default function AnnouncementForm({ samples }: AnnouncementFormProps) {
  const [state, formAction, isPending] = useActionState(
    checkAnnouncement,
    initialState,
  );

  return (
    <form action={formAction} className='mt-8 space-y-5'>
      <div className='space-y-2 text-left'>
        <label
          htmlFor='nrp'
          className='block text-sm font-semibold text-neutral-800'
        >
          Nomor Registrasi Peserta (NRP)
        </label>

        <Input
          id='nrp'
          name='nrp'
          type='text'
          inputMode='numeric'
          autoComplete='off'
          maxLength={12}
          placeholder='Contoh: 5025221001'
          required
          aria-invalid={state.error ? true : undefined}
          aria-describedby={state.error ? 'nrp-error' : 'nrp-help'}
        />

        {state.error ? (
          <p
            id='nrp-error'
            role='alert'
            className='text-sm font-medium text-primary-100'
          >
            {state.error}
          </p>
        ) : (
          <p id='nrp-help' className='text-xs text-neutral-500'>
            Masukkan NRP tanpa spasi atau tanda hubung.
          </p>
        )}
      </div>

      <Button
        type='submit'
        isLoading={isPending}
        leftIcon={Search}
        className='w-full'
      >
        {isPending ? 'Memeriksa...' : 'Lihat Hasil'}
      </Button>

      {samples.lolos && samples.tidakLolos ? (
        <div className='space-y-2 text-center text-xs leading-relaxed text-neutral-500'>
          <p>Contoh untuk testing:</p>
          <div className='flex flex-wrap justify-center gap-2'>
            <code className='rounded bg-brown-100/60 px-2 py-1 font-mono text-[11px] text-primary-200'>
              {samples.lolos} · lolos
            </code>
            <code className='rounded bg-brown-100/60 px-2 py-1 font-mono text-[11px] text-primary-200'>
              {samples.tidakLolos} · tidak lolos
            </code>
          </div>
        </div>
      ) : null}
    </form>
  );
}