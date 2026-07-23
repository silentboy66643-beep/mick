'use client';

import { motion } from 'motion/react';
import { Award, Eye, Users, Tag, ThumbsUp, Diamond } from 'lucide-react';

const reasons = [
  { title: 'Highly Experienced Barbers', icon: Award, desc: 'Decades of combined master barbering experience.' },
  { title: 'Attention to Detail', icon: Eye, desc: 'Meticulous precision in every cut, fade, and line-up.' },
  { title: 'Friendly Team', icon: Users, desc: 'A welcoming atmosphere where every client is family.' },
  { title: 'Affordable Prices', icon: Tag, desc: 'Premium luxury grooming without the premium price tag.' },
  { title: 'Thousands of Happy Clients', icon: ThumbsUp, desc: 'Over 2,300 five-star reviews from satisfied gentlemen.' },
  { title: 'Luxury Experience', icon: Diamond, desc: 'From hot towels to premium styling products.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4"
            >
              The Sauchiehall Standard
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-light"
            >
              Why Choose Us
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-white/60 font-light mt-6 lg:mt-0 max-w-md lg:text-right"
          >
            We don't just cut hair, we elevate your personal style through dedication to the craft.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-6 p-6 rounded-lg hover:bg-primary-charcoal/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <reason.icon className="w-8 h-8 text-primary-gold stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-lg font-medium tracking-wide mb-2">{reason.title}</h4>
                <p className="text-sm text-primary-white/60 font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
