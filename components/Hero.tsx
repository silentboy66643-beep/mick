'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax / Scale */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Barber cutting hair"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black/80 via-primary-black/50 to-primary-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/90 via-primary-black/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-primary-gold fill-primary-gold" />
              ))}
            </div>
            <span className="text-sm font-medium tracking-wider text-primary-white/80 uppercase">
              Glasgow's Top Rated Barber
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="text-5xl md:text-7xl font-display font-light leading-[1.1] mb-6 text-balance"
          >
            Precision Haircuts.<br />
            <span className="font-medium">Classic Style.</span><br />
            <span className="text-primary-gold italic font-serif">Modern Confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="text-lg text-primary-white/70 mb-10 max-w-xl font-light leading-relaxed"
          >
            Experience Glasgow's trusted barber shop with thousands of five-star reviews, expert barbers, and premium grooming services in a luxury environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#booking"
              className="group relative px-8 py-4 overflow-hidden bg-primary-gold text-center"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative text-sm font-bold tracking-widest uppercase text-primary-black transition-colors duration-300">
                Book Appointment
              </span>
            </a>
            
            <a
              href="#services"
              className="px-8 py-4 border border-white/20 hover:border-primary-gold hover:bg-primary-gold/5 text-center transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-widest uppercase">
                View Services
              </span>
            </a>
          </motion.div>
        </div>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12"
        >
          {[
            { label: 'Five-Star Reviews', value: '2,382+' },
            { label: 'Happy Clients', value: '10k+' },
            { label: 'Expert Barbers', value: '6' },
            { label: 'Years Experience', value: '15+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <span className="text-3xl md:text-4xl font-display font-light text-primary-gold">
                {stat.value}
              </span>
              <span className="text-xs tracking-widest uppercase text-primary-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
