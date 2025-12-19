import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedText = ({ text, className = '', delay = 0 }) => {
    const variants = {
      hidden: { opacity: 0 },
      show: (i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: delay + (i * 0.07) },
      }),
    };
  
    const letters = text.split('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? 'show' : ''}
        variants={variants}
        viewport={{ once: true }}
        className={cn('inline-block', className)}
      >
        {letters.map((letter, i) => (
          <motion.span key={`${letter}-${i}`} variants={variants} custom={i}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  export default AnimatedText;