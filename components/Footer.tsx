'use client';

import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div>
              <span className="font-display text-xl tracking-[0.15em] uppercase font-light text-primary-white block">
                Sauchiehall
              </span>
              <span className="font-display text-xs tracking-[0.3em] uppercase text-primary-gold">
                Barbers
              </span>
            </div>
            <p className="text-sm text-primary-white/50 font-light max-w-xs leading-relaxed">
              Premium grooming and classic style in the heart of Glasgow. We don't just cut hair, we craft confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-primary-gold hover:text-primary-gold transition-colors text-primary-white/70">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-primary-gold hover:text-primary-gold transition-colors text-primary-white/70">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-primary-gold hover:text-primary-gold transition-colors text-primary-white/70">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-primary-white">Quick Links</h4>
            <ul className="space-y-3 font-light text-primary-white/60 text-sm">
              <li><a href="#home" className="hover:text-primary-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-gold transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-primary-gold transition-colors">Services & Pricing</a></li>
              <li><a href="#team" className="hover:text-primary-gold transition-colors">The Team</a></li>
              <li><a href="#booking" className="hover:text-primary-gold transition-colors">Book Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-primary-white">Services</h4>
            <ul className="space-y-3 font-light text-primary-white/60 text-sm">
              <li><a href="#" className="hover:text-primary-gold transition-colors">Skin Fade</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Classic Cut</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Beard Sculpting</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Hot Towel Shave</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Styling Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-primary-white">Newsletter</h4>
            <p className="text-sm text-primary-white/50 font-light mb-4">
              Subscribe to receive styling tips, exclusive offers, and updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors w-full text-sm placeholder:text-primary-white/30"
              />
              <button type="submit" className="text-primary-gold text-sm tracking-widest uppercase font-semibold ml-4 hover:text-white transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-light text-primary-white/40 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Sauchiehall Barbers. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
