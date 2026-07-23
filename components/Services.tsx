'use client';

import { motion } from 'motion/react';
import { Scissors, Zap, Droplet, User, HandHeart, Sparkles, Baby, GraduationCap } from 'lucide-react';

const services = [
  { name: 'Skin Fade', price: '£25', icon: Zap, desc: 'Seamless precision fading to the skin with sharp line-up.' },
  { name: 'Classic Haircut', price: '£22', icon: Scissors, desc: 'Timeless scissor or clipper cut tailored to your face shape.' },
  { name: 'Beard Trim', price: '£15', icon: User, desc: 'Detailed shaping and fading to complement your style.' },
  { name: 'Beard Styling', price: '£20', icon: Sparkles, desc: 'Full reshape with luxury oils and hot towel finish.' },
  { name: 'Hot Towel Finish', price: '£12', icon: Droplet, desc: 'Relaxing hot towel treatment with premium moisturizers.' },
  { name: 'Hair Styling Advice', price: 'Free', icon: HandHeart, desc: 'Expert consultation on styles and product application.' },
  { name: 'Kids Haircuts', price: '£16', icon: Baby, desc: 'Patient and professional cuts for the young gentlemen.' },
  { name: 'Student Cuts', price: '£18', icon: GraduationCap, desc: 'Premium grooming for students (Valid ID required).' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4"
          >
            Premium Grooming
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light"
          >
            Our Services
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-primary-black p-8 border border-white/5 hover:border-primary-gold/30 transition-colors duration-300"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <service.icon className="w-8 h-8 text-primary-gold mb-6 stroke-[1.5]" />
                
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-lg font-medium tracking-wide">{service.name}</h4>
                  <span className="text-primary-gold font-display font-medium">{service.price}</span>
                </div>
                
                <p className="text-sm text-primary-white/60 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
