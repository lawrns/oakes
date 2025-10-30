"use client";

import { motion } from "framer-motion";

interface TextRevealByCharProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function TextRevealByChar({ 
  text, 
  className = "", 
  delay = 0,
  stagger = 0.03 
}: TextRevealByCharProps) {
  const letters = Array.from(text);

  return (
    <div className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: delay + i * stagger,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
