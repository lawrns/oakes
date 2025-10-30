"use client";

import { motion } from "framer-motion";
import { CpuChipIcon, GlobeAltIcon, LightBulbIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function FocusSection() {
  const focuses = [
    {
      icon: CpuChipIcon,
      title: "AI Infrastructure",
      description: "We back companies building the foundational layers of artificial intelligence—from compute optimization to neural architecture innovation.",
    },
    {
      icon: GlobeAltIcon,
      title: "Enterprise AI Integration",
      description: "Transforming traditional industries through intelligent automation, predictive analytics, and decision augmentation systems.",
    },
    {
      icon: LightBulbIcon,
      title: "AI-Native Products",
      description: "Supporting visionary teams creating entirely new categories of products that reimagine human-computer interaction.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Applied Intelligence",
      description: "Accelerating breakthrough applications in healthcare, finance, energy, and beyond—where AI solves real-world challenges.",
    },
  ];

  return (
    <section id="focus" className="relative py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-400 font-medium">Investment Thesis</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Where we
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> invest</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with founders at the intersection of artificial intelligence and industry transformation,
            where technology meets opportunity at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focuses.map((focus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="mb-6 p-3 rounded-xl bg-blue-500/10 inline-block group-hover:bg-blue-500/20 transition-colors">
                <focus.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{focus.title}</h3>
              <p className="text-gray-400 leading-relaxed">{focus.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-10 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We don't just provide capital—we offer strategic guidance, operational expertise, and a global network
              that amplifies our portfolio companies' potential. Every investment is a long-term partnership built on
              shared vision and mutual commitment to excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
