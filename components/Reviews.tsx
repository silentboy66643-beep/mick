'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Alasdair T.',
    text: 'Absolutely the best skin fade I have ever had in Glasgow. The attention to detail is unmatched, and the atmosphere is pure luxury. Worth every penny.',
  },
  {
    name: 'Craig M.',
    text: 'Friendly staff, amazing atmosphere, and styling advice that actually works for my hair type. Marcus took his time and the hot towel finish was incredible.',
  },
  {
    name: 'John D.',
    text: 'Been coming here for 3 years. Consistent quality, great chat, and you always leave feeling sharp and confident. Highly recommend James.',
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-32 bg-primary-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-gold/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex justify-center mb-12 text-primary-gold/20"
        >
          <Quote size={80} />
        </motion.div>

        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="text-primary-gold fill-primary-gold" />
                ))}
              </div>
              <p className="text-xl md:text-3xl font-display font-light text-balance leading-relaxed italic mb-8">
                "{reviews[currentIndex].text}"
              </p>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold">
                {reviews[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-12">
          <button 
            onClick={prev}
            className="p-3 border border-white/20 rounded-full hover:border-primary-gold hover:text-primary-gold transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {reviews.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary-gold' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="p-3 border border-white/20 rounded-full hover:border-primary-gold hover:text-primary-gold transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
