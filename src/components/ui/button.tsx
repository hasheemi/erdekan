import { Loader2, type LucideIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary';

const baseStyles =
  'inline-flex items-center justify-center rounded-xl font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-4 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'flex-1 gap-2 bg-linear-to-b from-[#C50662] to-[#720035] px-4 py-2 focus-visible:ring-[#C50662]/30',
  secondary:
    'gap-1 bg-linear-to-b from-[#F7B75D] to-[#B80059] px-6 py-2 focus-visible:ring-[#B80059]/30',
};

export function buttonVariants({
  variant = 'primary',
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
} = {}) {
  return cn(baseStyles, variantStyles[variant], className);
}

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  isLoading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      isLoading,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      variant = 'primary',
      type = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={isLoading || disabled}
        className={buttonVariants({ variant, className })}
        {...props}
      >
        {isLoading ? (
          <Loader2 className='size-4 animate-spin' aria-hidden />
        ) : LeftIcon ? (
          <LeftIcon className='size-4' aria-hidden />
        ) : null}
        {children}
        {RightIcon && !isLoading ? (
          <RightIcon className='size-4' aria-hidden />
        ) : null}
      </button>
    );
  },
);

Button.displayName = 'Button';
