'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const team = [
  {
    name: 'James Harrison',
    role: 'Master Barber',
    exp: '15 Years',
    specialty: 'Skin Fades & Scissor Cuts',
    image: 'https://images.unsplash.com/photo-1595956553066-fe24a8c33395?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Barber',
    exp: '10 Years',
    specialty: 'Beard Sculpting & Hot Towel',
    image: 'https://images.unsplash.com/photo-1621532057639-c12e3e6024dc?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'David MacLeod',
    role: 'Stylist',
    exp: '7 Years',
    specialty: 'Modern Styling & Texturing',
    image: 'https://images.unsplash.com/photo-1593702287287-142469a53ec2?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-primary-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4"
          >
            The Craftsmen
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light"
          >
            Meet Our Team
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] relative w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-display font-light mb-1">{member.name}</h4>
                  <p className="text-primary-gold uppercase tracking-widest text-xs font-semibold mb-4">{member.role}</p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-sm text-primary-white/70 font-light mb-1">
                      <span className="text-primary-white font-medium">Exp:</span> {member.exp}
                    </p>
                    <p className="text-sm text-primary-white/70 font-light">
                      <span className="text-primary-white font-medium">Specialty:</span> {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
