"use client";

import { motion } from "framer-motion";
import { type MouseEvent, type ReactNode, useState } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function MagneticButton({ 
  children, 
  href, 
  onClick, 
  className = "",
  variant = "primary" 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "inline-flex items-center px-6 py-3 font-semibold rounded-md transition-all duration-300";
  const variantClasses = variant === "primary" 
    ? "bg-burgundy-700 text-white hover:bg-burgundy-800 shadow-lg hover:shadow-xl"
    : "border border-border text-charcoal hover:bg-navy-50";

  const MotionComponent = href ? "a" : "button";

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MotionComponent
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </MotionComponent>
    </motion.div>
  );
}
