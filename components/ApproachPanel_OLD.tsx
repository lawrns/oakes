"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const approaches = [
  {
    title: "Strategic Capital",
    description: "We provide patient, long-term capital that aligns with your vision and growth trajectory.",
  },
  {
    title: "Operational Expertise",
    description: "Decades of experience scaling AI companies from seed to market leadership.",
  },
  {
    title: "Global Network",
    description: "Access to enterprise customers, technical talent, and strategic partners worldwide.",
  },
  {
    title: "Hands-On Support",
    description: "Active partnership in product strategy, go-to-market, and organizational development.",
  },
];

export default function ApproachPanel() {
  return (
    <section id="approach" className="relative py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-inkSoft/30 via-ink to-inkSoft/30" />
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        <motion.div
          variants={fadeInUp}
          className="p-12 rounded-xxl glass elevation-2 relative overflow-hidden"
        >
          {/* Gradient edge effect */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-card-edge" />
          
          <div className="relative z-10">
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="font-display text-h2 font-bold mb-4 tracking-tighter">
                Our <span className="gradient-text">Approach</span>
              </h2>
              <p className="text-lead text-slate leading-relaxed max-w-3xl">
                We don't just provide capital—we offer strategic guidance, operational expertise, and a global network
                that amplifies our portfolio companies' potential. Every investment is a long-term partnership built on
                shared vision and mutual commitment to excellence.
              </p>
            </motion.div>

            {/* Timeline bullets */}
            <motion.div variants={staggerContainer} className="space-y-6 mt-12">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircleIcon className="w-6 h-6 text-gold group-hover:text-burgundy-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mist mb-2 group-hover:text-white transition-colors">
                      {approach.title}
                    </h3>
                    <p className="text-slate leading-relaxed group-hover:text-mist/90 transition-colors">
                      {approach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
