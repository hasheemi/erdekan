import * as React from 'react';

import { cn } from '@/lib/utils';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'>
>(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'h-12 w-full rounded-xl border border-brown-200 bg-white px-4 text-base text-neutral-800 shadow-sm transition',
        'placeholder:text-neutral-500/50',
        'focus:border-primary-100 focus:ring-4 focus:ring-primary-100/15 focus:outline-none',
        'aria-invalid:border-primary-100 aria-invalid:ring-4 aria-invalid:ring-primary-100/15',
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';