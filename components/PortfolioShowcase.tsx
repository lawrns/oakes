"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import portfolioData from "@/content/portfolio.json";
import SmoothTabs from "./SmoothTabs";
import AnimatedProgress from "./AnimatedProgress";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function PortfolioShowcase() {
  const { featured, portfolio } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} id="portfolio" className="section bg-white border-t border-border relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-burgundy-700 tracking-wide uppercase mb-4">
            Portfolio
          </div>
          <h2 className="text-h2 text-navy-900 mb-6">
            Companies We've Backed
          </h2>
          <p className="text-body-lg text-slate">
            We partner with exceptional teams building transformative AI companies. 
            Our portfolio represents $2.5B+ in aggregate valuation across infrastructure, enterprise software, and applied AI.
          </p>
        </div>

        {/* Featured Investment */}
        <div className="mb-16">
          {featured.map((company) => (
            <div key={company.id} className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-96">
                  <Image
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
                    alt={company.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-block px-3 py-1 bg-burgundy-700 text-white text-xs font-semibold rounded mb-2">
                      Featured Investment
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="text-sm text-burgundy-700 font-semibold mb-2">{company.category}</div>
                  <h3 className="text-h3 text-navy-900 mb-4">{company.name}</h3>
                  <p className="text-body-lg text-slate mb-6">{company.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-border">
                    <div>
                      <div className="text-2xl font-bold text-navy-900">Series A</div>
                      <div className="text-sm text-slate">Investment Stage</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy-900">2024</div>
                      <div className="text-sm text-slate">Investment Year</div>
                    </div>
                  </div>
                  
                  <p className="text-slate italic text-sm mb-6">"{company.thesis}"</p>
                  
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-burgundy-700 hover:text-burgundy-800 font-semibold"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div>
          <h3 className="text-h3 text-navy-900 mb-8">Active Portfolio</h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {portfolio.map((company, index) => (
              <motion.div
                key={company.id}
                variants={item}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="card p-6 text-center hover:shadow-md transition-shadow cursor-default"
              >
                <div className="font-semibold text-navy-900 mb-2">{company.name}</div>
                <div className="text-xs text-slate">{company.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Allocation */}
        <div className="mt-16 card p-8">
          <h3 className="text-h3 text-navy-900 mb-8">Portfolio Allocation</h3>
          <div className="space-y-6">
            <AnimatedProgress value={40} label="AI Infrastructure" />
            <AnimatedProgress value={35} label="Enterprise AI" />
            <AnimatedProgress value={25} label="Applied Intelligence" />
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={2.5} duration={2} prefix="$" suffix="B+" />
            </div>
            <div className="text-slate text-sm">Aggregate Portfolio Valuation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={3.2} duration={2.2} suffix="x" />
            </div>
            <div className="text-slate text-sm">Average MOIC (Realized)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={18} duration={1.8} suffix=" Months" />
            </div>
            <div className="text-slate text-sm">Average Hold Period</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy-900 mb-2">
              <AnimatedCounter from={0} to={100} duration={1.5} suffix="%" />
            </div>
            <div className="text-slate text-sm">Companies Still Operating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
