"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const theses = [
  {
    title: "AI Infrastructure",
    description: "We invest in companies building the foundational compute, networking, and data infrastructure that enables AI at scale. From GPU optimization to distributed training systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    metrics: "40% of portfolio",
  },
  {
    title: "Enterprise AI Integration",
    description: "Partnering with B2B software companies deploying AI to transform traditional industries. Focus on measurable ROI and enterprise sales cycles.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    metrics: "35% of portfolio",
  },
  {
    title: "Applied Intelligence",
    description: "Healthcare diagnostics, financial modeling, energy optimization, and other vertical-specific AI applications with clear regulatory pathways.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    metrics: "25% of portfolio",
  },
];

export default function ThesisGrid() {
  return (
    <section id="focus" className="section bg-navy-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-burgundy-700 tracking-wide uppercase mb-4">
            Investment Focus
          </div>
          <h2 className="text-h2 text-navy-900 mb-6">
            Where We Invest
          </h2>
          <p className="text-body-lg text-slate">
            Our investment strategy focuses on three core areas where AI creates measurable business value. 
            We seek companies with strong unit economics, defensible technology, and experienced management teams.
          </p>
        </div>

        {/* Thesis Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {theses.map((thesis, index) => (
            <motion.div 
              key={index} 
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={thesis.image}
                    alt={thesis.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                  {thesis.metrics}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-h4 text-navy-900 mb-3">{thesis.title}</h3>
                <p className="text-slate leading-relaxed">{thesis.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Criteria */}
        <div className="mt-16 card p-8">
          <h3 className="text-h3 text-navy-900 mb-6">Investment Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-navy-900 mb-3">Stage & Size</h4>
              <ul className="space-y-2 text-slate">
                <li className="flex items-start gap-2">
                  <span className="text-burgundy-700 mt-1">•</span>
                  <span>Series A through Series C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-burgundy-700 mt-1">•</span>
                  <span>$5M - $25M check size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-burgundy-700 mt-1">•</span>
                  <span>Lead or co-lead preferred</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy-900 mb-3">Company Profile</h4>
              <ul className="space-y-2 text-slate">
                <li className="flex items-start gap-2">
                  <span className="text-burgundy-700 mt-1">•</span>
                  <span>$2M+ ARR with strong growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-burgundy-700 mt-1">•</span>
                  <span>Proven product-market fit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-burgundy-700 mt-1">•</span>
                  <span>Clear path to profitability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
