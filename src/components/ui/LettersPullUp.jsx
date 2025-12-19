'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export function LettersPullUp({ text, className = '' }) {
  const splittedText = text.split('');

  const variants = {
    hidden: { y: 10 , opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={cn('flex flex-wrap', className)}>
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? 'show' : ''}
          custom={i}
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.span>
      ))}
    </div>
  );
}
