"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  from, 
  to, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  className = "" 
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCount(Math.round(value));
      }
    });

    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
}
