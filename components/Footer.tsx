"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const footerLinks = {
  company: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Focus", href: "#focus" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Investor Relations", href: "#" },
    { label: "Disclosures", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-white/[0.08] bg-inkSoft/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="text-3xl font-display font-bold mb-3 text-mist">Oakes</div>
            <p className="text-slate leading-relaxed mb-6 max-w-md">
              Strategic investments in artificial intelligence and AI integrations across major international industries.
            </p>
            <p className="text-sm text-slate/70">
              Investing in the AI revolution
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-sm font-bold text-mist mb-4 uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={`company-${index}`}>
                  <a
                    href={link.href}
                    className="text-sm text-slate hover:text-mist transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-sm font-bold text-mist mb-4 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={`legal-${index}`}>
                  <a
                    href={link.href}
                    className="text-sm text-slate hover:text-mist transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate/70">
            © {currentYear} Oakes. All rights reserved.
          </p>
          <p className="text-xs text-slate/50">
            This site does not constitute an offer to sell or a solicitation of an offer to buy any securities.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
