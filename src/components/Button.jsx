import Link from 'next/link';
import clsx from 'clsx';

export function Button({
  disabled,
  invert,
  href,
  className,
  children,
  animated,
  ...props
}) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    !disabled
      ? invert
        ? 'bg-white text-neutral-950 hover:bg-neutral-200'
        : 'bg-neutral-950 text-white hover:bg-neutral-800'
      : '',
    disabled ? 'bg-neutral-300 text-gray-500 hover:bg-neutral-300' : ''
  );

  let inner = (
    <span
      className={clsx(
        'relative top-px',
        animated ? 'flex items-center justify-center' : ''
      )}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link disabled={disabled} href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className} {...props}>
      {inner}
    </button>
  );
}
