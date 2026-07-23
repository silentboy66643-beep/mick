'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-primary-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop"
                alt="Barber Shop Interior"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-primary-gold/30 -z-10 translate-x-4 translate-y-4" />
            </div>
            
            {/* Floating element */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 glass-panel p-6 max-w-[200px]"
            >
              <p className="font-display text-4xl text-primary-gold mb-2">Est. 2009</p>
              <p className="text-xs uppercase tracking-widest text-primary-white/70">A Tradition of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4">
                Our Story
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-light text-balance leading-tight">
                Crafting Confidence Through <span className="font-medium italic">Exceptional Detail</span>
              </h3>
            </div>

            <div className="space-y-6 text-primary-white/70 font-light leading-relaxed">
              <p>
                Located in the heart of Glasgow, Sauchiehall Barbers has redefined the modern grooming experience. We merge traditional barbering techniques with contemporary style, delivering more than just a haircut—we deliver an experience.
              </p>
              <p>
                Our team of master barbers is dedicated to precision, artistry, and unparalleled customer service. Every detail of our luxury space has been designed to make you feel relaxed, confident, and sharp. 
              </p>
              <p>
                Whether you're looking for a classic gentleman's cut, a seamless skin fade, or a hot towel shave, you can trust our expertise.
              </p>
            </div>

            <div className="pt-6">
              <Image 
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=200&auto=format&fit=crop" 
                alt="Signature" 
                width={120} 
                height={60} 
                className="opacity-50 grayscale contrast-200 brightness-200"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs tracking-widest uppercase mt-4 text-primary-white/50">Master Barber & Founder</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
