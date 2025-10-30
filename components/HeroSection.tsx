"use client";

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
            <h1 className="text-h1 text-navy-900 mb-6">
              Strategic Capital for<br />AI Infrastructure
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
                <span className="text-sm text-slate">SEC Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate">FINRA Member</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-burgundy-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate">Fiduciary Standard</span>
              </div>
            </div>
            
            {/* CTA with magnetic effect */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center px-6 py-3 bg-burgundy-700 text-white font-semibold rounded-md hover:bg-burgundy-800 transition-colors shadow-lg hover:shadow-xl"
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "rgba(139, 38, 53, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center px-6 py-3 border border-border text-charcoal font-semibold rounded-md hover:bg-navy-50 transition-colors"
              >
                Contact Us
              </motion.a>
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
            <div className="text-4xl font-bold text-navy-900 mb-2">$100M+</div>
            <div className="text-slate text-sm">Assets Under Management</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">12+</div>
            <div className="text-slate text-sm">Portfolio Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">6 Years</div>
            <div className="text-slate text-sm">Track Record</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-navy-900 mb-2">3 Exits</div>
            <div className="text-slate text-sm">Successful Realizations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
