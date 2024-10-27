'use client';

// components/AnimatedText.js
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

export function SplitText({ children }) {
  // Split the text into individual characters
  const letters = children.split('');

  const hoverVariant = {
    start: {
      y: '0',
    },
    hover: {
      y: '-100%',
    },
  };

  const staggerChildren = {
    hover: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <motion.span
        className={clsx('relative overflow-y-hidden inline-flex')}
        whileHover='hover'
        transition={{
          staggerChildren: 0.01,
          staggerDirection: 1,
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={hoverVariant}
            className={clsx('whitespace-pre')}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
          >
            {letter === ' ' ? '\u0020' : letter}
          </motion.span>
        ))}
        <motion.div
          className={clsx('absolute left-0 inline-flex translate-y-full')}
          transition={{
            staggerChildren: 0.01,
            staggerDirection: 1,
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={hoverVariant}
              style={{ color: 'var(--primary-color)' }}
              className={clsx('whitespace-pre')}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
            >
              {letter === ' ' ? '\u0020' : letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.span>
    </>
  );
}

export default SplitText;
