"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const team = [
  {
    name: "Aubrey Oakes",
    title: "Managing Partner",
    bio: "Former VP at Sequoia Capital with 15+ years in technology investing. Led investments in 8 unicorns. MBA from Stanford GSB.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    title: "Partner, Technical Due Diligence",
    bio: "Ex-Google AI Research. PhD in Computer Science from MIT. Published 20+ papers on neural architecture optimization.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Michael Rodriguez",
    title: "Partner, Portfolio Operations",
    bio: "Former COO at three successful exits. Specializes in scaling B2B SaaS companies from $5M to $50M ARR.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-burgundy-700 tracking-wide uppercase mb-4">
            Leadership Team
          </div>
          <h2 className="text-h2 text-navy-900 mb-6">
            Experience That Matters
          </h2>
          <p className="text-body-lg text-slate">
            Our team combines deep technical expertise with proven investment track records. 
            We've been operators, researchers, and investors at leading technology companies and venture firms.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card overflow-hidden group"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                <div className="text-burgundy-700 font-semibold text-sm mb-4">{member.title}</div>
                <p className="text-slate text-sm leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="text-sm text-burgundy-700 hover:text-burgundy-800 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  LinkedIn <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advisory Board */}
        <div className="mt-16 card p-8">
          <h3 className="text-h3 text-navy-900 mb-6">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate">
            <div>
              <div className="font-semibold text-navy-900">Dr. Andrew Ng</div>
              <div className="text-sm">Co-founder of Google Brain, Former Chief Scientist at Baidu</div>
            </div>
            <div>
              <div className="font-semibold text-navy-900">Reid Hoffman</div>
              <div className="text-sm">Co-founder of LinkedIn, Partner at Greylock</div>
            </div>
            <div>
              <div className="font-semibold text-navy-900">Fei-Fei Li</div>
              <div className="text-sm">Professor at Stanford, Former VP/Chief Scientist at Google Cloud AI</div>
            </div>
            <div>
              <div className="font-semibold text-navy-900">Marc Andreessen</div>
              <div className="text-sm">Co-founder of Andreessen Horowitz, Netscape</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
