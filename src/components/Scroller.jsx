'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Scroller({ className, shadow, children }) {
  return (
    <section
      className={clsx(
        className,
        'relative mx-auto pt-12 container',
        shadow === true ? 'overflow-x-hidden' : '',
      )}
    >
      <motion.div
        style={{ '--tw-space-x-reverse': '1' }}
        className={clsx(
          'flex items-center select-none w-max-content flex-nowrap -ml-60',
        )}
      >
        {children}
        {children} {/* Duplicate content for seamless looping */}
      </motion.div>
      {shadow === true && (
        <>
          <div className='absolute bottom-0 left-0 top-0 w-1/3 max-w-64 bg-gradient-to-r from-zinc-950 to-zinc-950/0'></div>
          <div className='absolute bottom-0 right-0 top-0 w-1/3 max-w-64 bg-gradient-to-l from-zinc-950 to-zinc-950/0'></div>
        </>
      )}
    </section>
  );
}

export default Scroller;
