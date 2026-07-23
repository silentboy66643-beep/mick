'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Disable scrolling while intro is playing
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Animated Gold Barber Pole - simplified using CSS or simple shapes since we don't have a 3D asset */}
          <div className="relative w-12 h-32 rounded-full overflow-hidden border-2 border-primary-gold/30 mb-8 bg-primary-charcoal">
            <motion.div 
              className="absolute inset-0 opacity-50"
              style={{
                background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #C8A45D 10px, #C8A45D 20px, transparent 20px, transparent 30px, #F7F7F7 30px, #F7F7F7 40px)',
                backgroundSize: '100% 200%'
              }}
              animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 rounded-full" />
            <div className="absolute top-0 left-2 right-2 h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
            className="h-[1px] w-64 bg-primary-gold origin-center mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-display text-2xl tracking-[0.2em] text-primary-white uppercase font-light"
          >
            Sauchiehall <span className="text-primary-gold font-medium">Barbers</span>
          </motion.h1>

          <button 
            onClick={() => setShow(false)}
            className="absolute bottom-12 text-sm text-primary-white/50 hover:text-primary-white transition-colors tracking-widest uppercase cursor-pointer z-10"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
