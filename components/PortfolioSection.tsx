"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function PortfolioSection() {
  const portfolio = [
    {
      name: "CryptoIQ",
      url: "https://cryptoiq.com",
      description: "Advanced cryptocurrency intelligence and analytics platform powered by AI",
      category: "Fintech & AI",
    },
  ];

  const additionalCompanies = [
    "Nexus AI",
    "QuantumLeap",
    "DataStream",
    "Cognition Labs",
    "Fusion Intelligence",
    "Hyperscale",
    "NeuralPath",
    "Apex Analytics",
    "Velocity AI",
    "Synthesis",
    "Paradigm",
  ];

  return (
    <section id="portfolio" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-400 font-medium">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Building the
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> future</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're proud to partner with exceptional teams creating transformative AI solutions across industries.
          </p>
        </motion.div>

        {/* Featured Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {portfolio.map((company, index) => (
            <motion.a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className="block p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-4">
                    {company.category}
                  </div>
                  <h3 className="text-4xl font-bold mb-3 flex items-center gap-3">
                    {company.name}
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </h3>
                  <p className="text-xl text-gray-400">{company.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Portfolio Companies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-400">
            Additional Portfolio Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:border-white/20 transition-all cursor-default"
              >
                <span className="text-gray-300 font-medium">{company}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 italic">
            And more exceptional companies building the future of AI...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
