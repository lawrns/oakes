"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedProgressProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  className?: string;
}

export default function AnimatedProgress({ 
  value, 
  max = 100, 
  label, 
  color = "bg-burgundy-700",
  className = "" 
}: AnimatedProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const percentage = (value / max) * 100;

  return (
    <div ref={ref} className={className}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-navy-900">{label}</span>
          <span className="text-sm text-slate">{value}%</span>
        </div>
      )}
      <div className="h-2 bg-navy-50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
}
