'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <section id="booking" className="py-32 bg-primary-black relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4"
          >
            Reserve Your Chair
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light"
          >
            Book Appointment
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary-white/50">Full Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary-white/50">Phone Number</label>
                    <input required type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-primary-white/50">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary-white/50">Service</label>
                    <select required className="w-full bg-primary-black border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors appearance-none">
                      <option value="" disabled selected>Select a service...</option>
                      <option>Skin Fade</option>
                      <option>Classic Haircut</option>
                      <option>Beard Trim</option>
                      <option>Beard Styling</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary-white/50">Preferred Barber</label>
                    <select className="w-full bg-primary-black border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors appearance-none">
                      <option value="" disabled selected>No preference</option>
                      <option>James Harrison</option>
                      <option>Marcus Thorne</option>
                      <option>David MacLeod</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary-white/50">Date</label>
                    <input required type="date" className="w-full bg-transparent border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors [color-scheme:dark]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary-white/50">Time</label>
                    <input required type="time" className="w-full bg-transparent border-b border-white/20 pb-2 text-primary-white focus:outline-none focus:border-primary-gold transition-colors [color-scheme:dark]" />
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative px-8 py-4 overflow-hidden bg-primary-gold text-center disabled:opacity-50"
                  >
                    <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
                    <span className="relative text-sm font-bold tracking-widest uppercase text-primary-black transition-colors duration-300">
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-primary-gold w-10 h-10" />
                </div>
                <h4 className="text-3xl font-display font-light mb-2">Booking Confirmed</h4>
                <p className="text-primary-white/60 font-light max-w-sm mx-auto">
                  Thank you for booking with Sauchiehall Barbers. We have sent a confirmation email with your appointment details.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
