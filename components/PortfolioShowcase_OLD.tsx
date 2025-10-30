"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";
import portfolioData from "@/content/portfolio.json";

export default function PortfolioShowcase() {
  const { featured, portfolio } = portfolioData;

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-burgundy-900/5 to-ink" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-burgundy-400 font-medium tracking-wide">Portfolio</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-display text-h2 font-bold mb-6 tracking-tighter">
            Building the{" "}
            <span className="gradient-text">future</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lead text-slate max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with exceptional teams creating transformative AI solutions across industries.
          </motion.p>
        </motion.div>

        {/* Featured Company Ribbon */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="mb-16"
        >
          {featured.map((company, index) => (
            <motion.a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -2 }}
              className="block p-10 rounded-xxl glass elevation-1 hover:elevation-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600/10 via-royal/5 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Gold edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-card-edge opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-burgundy-600/20 text-burgundy-300 text-sm font-medium mb-4">
                      {company.category}
                    </div>
                    <h3 className="text-4xl font-display font-bold mb-3 flex items-center gap-3 text-mist group-hover:text-white transition-colors">
                      {company.name}
                      <ArrowTopRightOnSquareIcon className="w-6 h-6 text-slate group-hover:text-gold transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="text-xl text-slate group-hover:text-mist/90 transition-colors mb-4">
                      {company.description}
                    </p>
                    <p className="text-sm text-slate/70 italic">
                      {company.thesis}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-center text-slate mb-8">
            Additional Portfolio Companies
          </motion.h3>
          
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {portfolio.map((company, index) => (
              <motion.div
                key={company.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateX: 1.5, rotateY: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-xl glass text-center hover:bg-white/[0.06] transition-all cursor-default group"
              >
                <span className="text-mist font-medium group-hover:text-white transition-colors">
                  {company.name}
                </span>
                <p className="text-xs text-slate/70 mt-2 group-hover:text-slate transition-colors">
                  {company.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate/50 italic text-sm">
            And more exceptional companies building the future of AI...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
