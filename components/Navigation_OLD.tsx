"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#focus", label: "Focus" },
  { href: "#approach", label: "Approach" },
];

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("");
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ opacity: navOpacity }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl font-display font-bold tracking-tight text-mist hover:text-white transition-colors"
        >
          Oakes
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setActiveLink(link.href)}
              onMouseLeave={() => setActiveLink("")}
              className="relative text-sm text-slate hover:text-mist transition-colors group"
            >
              {link.label}
              {activeLink === link.href && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-burgundy-500 to-royal"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-sm bg-cta-ribbon text-white px-5 py-2.5 rounded-xl font-medium shadow-e1 hover:shadow-e2 transition-shadow focus-ring"
          >
            <EnvelopeIcon className="w-4 h-4" />
            Contact
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
