'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-primary-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-gold mb-4">
                Visit Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-light mb-6">
                Our Location
              </h3>
              <p className="text-primary-white/70 font-light leading-relaxed max-w-md">
                Located in the heart of Glasgow's vibrant city centre, easily accessible by public transport and with nearby parking facilities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-gold mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-primary-white/50 mb-1">Address</h4>
                  <p className="text-lg font-light">279 Sauchiehall Street<br/>Glasgow G2 3HQ<br/>United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-gold mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-primary-white/50 mb-1">Opening Hours</h4>
                  <ul className="text-lg font-light space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Fri</span> <span>9am - 7pm</span></li>
                    <li className="flex justify-between w-48"><span>Saturday</span> <span>8am - 6pm</span></li>
                    <li className="flex justify-between w-48"><span>Sunday</span> <span className="text-primary-gold">Closed</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary-gold mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-primary-white/50 mb-1">Contact</h4>
                  <p className="text-lg font-light">+44 141 332 0900</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://maps.google.com/?q=279+Sauchiehall+Street+Glasgow"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-gold text-primary-black font-semibold tracking-widest uppercase text-sm hover:bg-white transition-colors"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:+441413320900"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-primary-gold hover:text-primary-gold transition-colors font-medium tracking-widest uppercase text-sm"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700 relative border border-white/10 p-2"
          >
            {/* Embedded map placeholder since actual iframe might fail without valid API key or have UI restrictions. Using a visual approximation or a basic iframe. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.117178873722!2d-4.2646!3d55.8659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888442a8b9f7831%3A0x1b1c67d71fc7c768!2s279%20Sauchiehall%20St%2C%20Glasgow%20G2%203HQ%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
