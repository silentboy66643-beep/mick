'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col z-50">
          <span className="font-display text-xl tracking-[0.15em] uppercase font-light text-primary-white">
            Sauchiehall
          </span>
          <span className="font-display text-xs tracking-[0.3em] uppercase text-primary-gold">
            Barbers
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-primary-white/70 hover:text-primary-gold transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#booking"
            className="group relative px-6 py-2.5 overflow-hidden rounded-none border border-primary-gold bg-primary-gold/10"
          >
            <div className="absolute inset-0 w-0 bg-primary-gold transition-all duration-300 ease-out group-hover:w-full" />
            <span className="relative text-sm font-semibold tracking-wider uppercase text-primary-gold group-hover:text-primary-black transition-colors duration-300">
              Book Online
            </span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-primary-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: -20, pointerEvents: "none" }
        }}
        className="fixed inset-0 bg-primary-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 pt-20"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-display font-light text-primary-white hover:text-primary-gold transition-colors tracking-widest uppercase"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-8 py-4 border border-primary-gold text-primary-gold font-semibold tracking-widest uppercase"
        >
          Book Online
        </a>
      </motion.div>
    </motion.header>
  );
}
