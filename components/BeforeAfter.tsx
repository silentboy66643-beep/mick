'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-primary-black relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4"
          >
            Transformations
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light"
          >
            Before & After
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm select-none cursor-ew-resize group"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => handleInteractionStart(e.clientX)}
          onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop"
              alt="After Haircut"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-primary-black/80 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-widest uppercase text-primary-gold z-10">
              After
            </div>
          </div>

          {/* Before Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[100vw] max-w-[1024px] h-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop"
                alt="Before Haircut"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary-white/90 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-widest uppercase text-primary-black z-10">
                Before
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary-gold cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronsLeftRight className="text-primary-black w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
