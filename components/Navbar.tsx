"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Dual Focus", href: "#market-focus" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Consultation", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 dark:bg-black/75 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Branding */}
          <div className="flex-shrink-0">
            <a href="#" className="font-michroma text-xl md:text-2xl tracking-widest text-black dark:text-white transition-colors">
              MANZARKASH<span className="text-primary font-bold">.</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-300 dark:hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-primary hover:bg-primary/90 text-white transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 duration-300 transform hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:white focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-black/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-primary dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-primary transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-full bg-primary hover:bg-primary/90 text-white transition-all shadow-md shadow-primary/10"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
