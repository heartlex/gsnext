'use client';

// components/AnimatedText.js
import { motion } from 'framer-motion';

export function SpringText({ children }) {
  // Split the text into individual characters
  const letters = children.split('');

  const springAnimation = {
    hover: {
      y: -10,
      color: 'var(--primary-color)',
      rotate: -10,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 150,
      },
    },
  };

  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={springAnimation}
          whileHover='hover'
          className={'inline-block whitespace-pre'}
        >
          {letter === ' ' ? '\u0020' : letter}
        </motion.span>
      ))}
    </>
  );
}

export default SpringText;
