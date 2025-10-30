"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-black via-blue-900/10 to-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-400 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's build
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Are you building transformative AI solutions? We'd love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 rounded-full bg-blue-500/10">
                <UserIcon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Aubrey Oakes</h3>
                <p className="text-gray-400">Managing Partner</p>
              </div>
            </div>

            <motion.a
              href="mailto:aubrey@oakes.io"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all group"
            >
              <EnvelopeIcon className="w-5 h-5" />
              aubrey@oakes.io
            </motion.a>

            <p className="mt-8 text-sm text-gray-500">
              We typically respond within 48 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
