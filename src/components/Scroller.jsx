'use client';

import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function Scroller({ className, children }) {
  const DEFAULT_DURATION = 15;
  const HOVER_DURATION = 30;
  const controls = useAnimation();

  const startAnimation = (duration) => {
    controls.start({
      x: '-50%',
      transition: { duration, ease: 'linear', repeat: Infinity },
    });
  };

  useEffect(() => {
    // Start the animation as soon as the component mounts
    startAnimation(DEFAULT_DURATION);
    return controls.stop;
  }, []);

  return (
    <div className={clsx(className)}>
      <motion.div
        style={{ '--tw-space-x-reverse': '1' }}
        className={clsx(
          'flex items-center select-none w-max-content flex-nowrap',
        )}
        initial={{ x: '0' }}
        animate={controls}
        onHoverStart={() => startAnimation(HOVER_DURATION)}
        onHoverEnd={() => startAnimation(DEFAULT_DURATION)}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default Scroller;
