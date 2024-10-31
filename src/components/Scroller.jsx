'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Scroller({ duration, className, children }) {
  const _duration = duration ?? 10;
  return (
    <div className={clsx('overflow-hidden', className)}>
      <motion.div
        style={{ '--tw-space-x-reverse': '1' }}
        className={clsx(
          'flex items-center select-none w-max-content gap-x-12 sm:space-x-14 lg:space-x-16 flex-nowrap gap-y-8',
        )}
        initial={{ x: '0' }}
        animate={{ x: '-51.65%' }} //TODO: why this?
        transition={{ duration: _duration, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default Scroller;
