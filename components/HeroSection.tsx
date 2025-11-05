"use client";

import AnimatedCounter from "./AnimatedCounter";
import TextRevealByChar from "./TextRevealByChar";
import MagneticButton from "./MagneticButton";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="section bg-white border-b border-border relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div style={{ y, opacity }}>
            {/* Trust Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-sm font-semibold text-burgundy-700 tracking-wide uppercase">
                Investment Management
              </div>
              <div className="h-1 w-1 rounded-full bg-slate"></div>
              <div className="text-sm text-slate">Est. 2019</div>
            </div>
            
            {/* Headline */}
            <h1 className="text-h1 text-navy-900 mb-6 leading-none">
              <TextRevealByChar text="Strategic Capital for" delay={0.2} />
              <br />
              <TextRevealByChar text="AI Infrastructure" delay={0.8} />
            </h1>
            
            {/* Subheading */}
            <p className="text-body-lg text-slate mb-8">
              Oakes provides growth capital to established AI companies with proven business models 
              and clear paths to profitability. We partner with management teams building the foundational 
              infrastructure powering the next generation of intelligent systems.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate">Growth Capital Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate">AI Infrastructure Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate">Partner-Led Approach</span>
              </div>
            </div>
            
            {/* CTA with magnetic effect */}
            <div className="flex items-center gap-4">
              <MagneticButton href="#portfolio" variant="primary">
                View Portfolio
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Contact Us
              </MagneticButton>
            </div>
          </motion.div>
          
          {/* Hero Image with parallax */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Modern office building representing institutional investment"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent"></div>
          </motion.div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={100} duration={2.5} prefix="$" suffix="M+" />
            </div>
            <div className="text-slate text-sm">Assets Under Management</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={12} duration={2} suffix="+" />
            </div>
            <div className="text-slate text-sm">Portfolio Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={6} duration={1.8} suffix=" Years" />
            </div>
            <div className="text-slate text-sm">Track Record</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={3} duration={1.5} suffix=" Exits" />
            </div>
            <div className="text-slate text-sm">Successful Realizations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
