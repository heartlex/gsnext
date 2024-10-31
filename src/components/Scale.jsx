'use client';

// components/AnimatedText.js
import { motion } from 'framer-motion';

export function Scale({ scale, className, children }) {
  const scaleAnimation = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: scale,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 150,
      },
      overflow: 'visible',
    },
  };

  return (
    <motion.span
      className={className}
      variants={scaleAnimation}
      whileHover='hover'
      initial='initial'
    >
      {children}
    </motion.span>
  );
}

export default Scale;
