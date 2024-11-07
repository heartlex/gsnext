'use client';

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export function Scroller({ className, shadow, children }) {
  const DEFAULT_DURATION = 5;
  const HOVER_DURATION = 10;

  const [isHovering, setIsHovering] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0); // Dynamic width
  const [pastDelta, setPastDelta] = useState(0); // Dynamic width
  const containerRef = useRef(null);

  // Speed calculation: px per second
  const baseSpeed = containerWidth / (DEFAULT_DURATION * 1000);
  const hoverSpeed = containerWidth / (HOVER_DURATION * 1000);
  const x = useMotionValue(0); // Motion value for the X position

  // Measure the width of the content on load and when content changes
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth); // Full width of content
    }
  }, [children]);

  // Update position based on speed
  useAnimationFrame((delta) => {
    const realDelta = delta - pastDelta;
    const speed = isHovering ? hoverSpeed : baseSpeed;

    setPastDelta(delta);
    const moveBy = realDelta / 1000 + speed;
    x.set(x.get() - moveBy);

    if (x.get() <= -(containerWidth / 2)) {
      x.set(0);
    }
  });

  return (
    <section
      className={clsx(
        className,
        'relative mx-auto py-12',
        shadow === true ? 'overflow-x-hidden' : '',
      )}
    >
      <motion.div
        ref={containerRef}
        style={{ '--tw-space-x-reverse': '1', x }}
        className={clsx(
          'flex items-center select-none w-max-content flex-nowrap -ml-60',
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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
