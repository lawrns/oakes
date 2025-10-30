"use client";

import { useState } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#focus", label: "Investment Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/oaks.webp"
              alt="Oakes"
              width={797}
              height={437}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate hover:text-navy-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton href="#contact" variant="primary" className="px-5 py-2.5 text-sm">
              Get in Touch
            </MagneticButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
