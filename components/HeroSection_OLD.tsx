"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";
import CountUp from "react-countup";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlightX = useSpring(useTransform(mouseX, [0, 1], ["30%", "70%"]), {
    stiffness: 50,
    damping: 20,
  });
  const spotlightY = useSpring(useTransform(mouseY, [0, 1], ["-10%", "10%"]), {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient burgundy spotlight with mouse tracking */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(1200px 700px at ${spotlightX} ${spotlightY}, rgba(142,30,66,0.55) 0%, rgba(20,14,24,0.0) 60%), radial-gradient(900px 500px at 80% 20%, rgba(91,124,255,0.35) 0%, rgba(14,14,22,0.0) 70%)`,
        }}
      />
      
      {/* Floating glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-burgundy-600/40 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-royal/30 rounded-full blur-[100px]"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <SparklesIcon className="w-4 h-4 text-gold" />
          <span className="text-sm text-slate font-medium tracking-wide">Investing in the Future of Intelligence</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-h1 font-bold mb-6 tracking-tighter leading-[1.1]"
        >
          Powering the
          <br />
          <span className="gradient-text">
            AI Revolution
          </span>
        </motion.h1>

        {/* Lead paragraph */}
        <motion.p
          variants={fadeInUp}
          className="text-lead text-slate max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We identify and empower exceptional founders building transformative AI solutions
          that redefine industries and create lasting value across global markets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 mb-24"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-cta-ribbon text-white rounded-xxl font-medium shadow-e2 focus-ring"
          >
            View Portfolio
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="px-8 py-4 glass rounded-xxl font-medium hover:bg-white/[0.06] transition-colors focus-ring"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* KPI Cards with Count-Up */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            { value: 100, suffix: "M+", label: "Assets Under Management", prefix: "$" },
            { value: 12, suffix: "+", label: "Portfolio Companies", prefix: "" },
            { value: 100, suffix: "%", label: "Global Reach", prefix: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-xxl glass elevation-1 hover:elevation-2 transition-shadow group"
            >
              <div className="text-5xl font-bold mb-3 gradient-text font-display">
                {isVisible && (
                  <>
                    {stat.prefix}
                    <CountUp
                      end={stat.value}
                      duration={1.4}
                      delay={1 + index * 0.1}
                      useEasing
                      easingFn={(t: number, b: number, c: number, d: number) => {
                        // easeOutCubic
                        return c * ((t = t / d - 1) * t * t + 1) + b;
                      }}
                    />
                    {stat.suffix}
                  </>
                )}
              </div>
              <div className="text-slate text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          className="w-6 h-10 border-2 border-white/15 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-burgundy-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
