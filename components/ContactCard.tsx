"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, UserCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";
import { useState } from "react";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aubrey@oakes.io");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-royal/5 to-ink" />
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-royal font-medium tracking-wide">Get in Touch</span>
          </div>
          
          <h2 className="font-display text-h2 font-bold mb-6 tracking-tighter">
            Let's build{" "}
            <span className="gradient-text">together</span>
          </h2>
          
          <p className="text-lead text-slate max-w-2xl mx-auto leading-relaxed">
            Are you building transformative AI solutions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="p-10 rounded-xxl glass elevation-2 relative overflow-hidden"
        >
          {/* Gold edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-card-edge" />
          
          <div className="relative z-10">
            {/* Executive Card */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="p-4 rounded-full bg-burgundy-600/10">
                <UserCircleIcon className="w-12 h-12 text-gold" strokeWidth={1.5} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold mb-1 text-mist">Aubrey Oakes</h3>
                <p className="text-slate">Managing Partner</p>
              </div>
            </div>

            {/* Email Button with Copy */}
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto mx-auto flex items-center justify-center gap-3 px-8 py-4 bg-cta-ribbon text-white rounded-xl font-medium shadow-e2 hover:shadow-e2 transition-all focus-ring group"
            >
              <EnvelopeIcon className="w-5 h-5" />
              <span>{copied ? "Email Copied!" : "aubrey@oakes.io"}</span>
            </motion.button>

            {/* Response SLA */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate/70">
              <ClockIcon className="w-4 h-4" />
              <span>We typically respond within 48 hours</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Categories */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Founders",
              description: "Building an AI-first company? Let's explore partnership opportunities.",
            },
            {
              title: "Investors",
              description: "Interested in co-investing? We welcome strategic partnerships.",
            },
            {
              title: "General Inquiries",
              description: "Questions about our thesis or portfolio? Reach out anytime.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 rounded-xl glass hover:bg-white/[0.06] transition-colors"
            >
              <h4 className="text-lg font-bold mb-2 text-mist">{item.title}</h4>
              <p className="text-sm text-slate leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
