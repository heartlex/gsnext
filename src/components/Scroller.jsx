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
          'flex items-center select-none w-max-content space-x-16 sm:space-x-24 md:space-x-52 lg:space-x-64 xl:space-x-80 flex-nowrap absolute',
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
