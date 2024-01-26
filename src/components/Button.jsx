import Link from 'next/link';
import clsx from 'clsx';
import { forwardRef } from 'react';

export const Button = forwardRef(function Button(
  { disabled, invert, href, className, children, ...props },
  ref
) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition overflow-hidden',
    !disabled
      ? invert
        ? 'bg-white text-neutral-950 hover:bg-neutral-200'
        : 'bg-neutral-950 text-white hover:bg-neutral-800'
      : '',
    disabled ? 'bg-neutral-300 text-gray-500 hover:bg-neutral-300' : ''
  );

  let inner = (
    <span className={clsx('relative top-px flex items-center justify-center')}>
      {children}
    </span>
  );

  if (href) {
    return (
      <Link
        ref={ref}
        disabled={disabled}
        href={href}
        className={className}
        {...props}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button ref={ref} disabled={disabled} className={className} {...props}>
      {inner}
    </button>
  );
});
