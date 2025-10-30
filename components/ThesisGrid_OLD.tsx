"use client";

import { motion } from "framer-motion";
import { CpuChipIcon, BuildingOffice2Icon, SparklesIcon, BeakerIcon } from "@heroicons/react/24/outline";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const theses = [
  {
    icon: CpuChipIcon,
    title: "AI Infrastructure",
    description: "Building the foundational layers of artificial intelligence—from compute optimization to neural architecture innovation that powers the next generation of intelligent systems.",
    gradient: "from-burgundy-500/20 to-royal/10",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Enterprise AI Integration",
    description: "Transforming traditional industries through intelligent automation, predictive analytics, and decision augmentation systems that drive measurable business outcomes.",
    gradient: "from-royal/20 to-burgundy-500/10",
  },
  {
    icon: SparklesIcon,
    title: "AI-Native Products",
    description: "Supporting visionary teams creating entirely new categories of products that reimagine human-computer interaction and unlock unprecedented capabilities.",
    gradient: "from-gold/20 to-burgundy-500/10",
  },
  {
    icon: BeakerIcon,
    title: "Applied Intelligence",
    description: "Accelerating breakthrough applications in healthcare, finance, energy, and beyond—where AI solves real-world challenges at scale with proven impact.",
    gradient: "from-burgundy-500/20 to-gold/10",
  },
];

export default function ThesisGrid() {
  return (
    <section id="focus" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-inkSoft/50 to-ink" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-gold font-medium tracking-wide">Investment Thesis</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-display text-h2 font-bold mb-6 tracking-tighter">
            Where we{" "}
            <span className="gradient-text">invest</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lead text-slate max-w-3xl mx-auto leading-relaxed">
            We partner with founders at the intersection of artificial intelligence and industry transformation,
            where technology meets opportunity at scale.
          </motion.p>
        </motion.div>

        {/* 2x2 Thesis Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {theses.map((thesis, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-xxl glass elevation-1 hover:elevation-2 transition-all duration-300 overflow-hidden"
            >
              {/* Gold rim light effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${thesis.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-card-edge opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon with parallax effect */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mb-6 p-4 rounded-xl bg-burgundy-600/10 inline-block group-hover:bg-burgundy-600/20 transition-colors"
                >
                  <thesis.icon className="w-8 h-8 text-gold" strokeWidth={1.75} />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-mist group-hover:text-white transition-colors">
                  {thesis.title}
                </h3>
                
                <p className="text-slate leading-relaxed group-hover:text-mist/90 transition-colors">
                  {thesis.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
