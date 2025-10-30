"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Custom cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-50 h-8 w-8 rounded-full bg-burgundy-700/20 backdrop-blur-sm border border-burgundy-700/40"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-burgundy-700"
        style={{
          left: useSpring(useMotionValue(0), { damping: 30, stiffness: 800 }),
          top: useSpring(useMotionValue(0), { damping: 30, stiffness: 800 }),
        }}
      />
    </>
  );
}
