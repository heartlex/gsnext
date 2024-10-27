// components/AnimatedText.js
'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export function SplitText({ children }) {
  // Split the text into individual characters
  const letters = children.split('');

  const hoverVariant = {
    initial: {
      y: '0%',
    },
    hover: {
      y: '-100%',
    },
  };

  const staggerChildren = {
    initial: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.span
      className={clsx('relative overflow-y-hidden inline-flex')}
      variants={staggerChildren}
      initial='initial'
      whileHover='hover'
      animate='initial'
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={hoverVariant}
          className={clsx('whitespace-pre')}
          transition={{
            type: 'spring',
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          {letter === ' ' ? '\u0020' : letter}
        </motion.span>
      ))}
      <motion.div
        className={clsx('absolute left-0 inline-flex translate-y-full')}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={hoverVariant}
            style={{ color: 'var(--primary-color)' }}
            className={clsx('whitespace-pre')}
            transition={{
              type: 'spring',
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            {letter === ' ' ? '\u0020' : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.span>
  );
}

export default SplitText;
