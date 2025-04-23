import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Cake, Gift } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-peach-darker relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Cake className="text-white/90 w-10 h-10" />
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Happy Birthday!
          </h2>
          
          <p className="max-w-md mx-auto text-white/80 mb-8">
            May your special day be filled with love, laughter, and unforgettable moments.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white"
          >
            <span>Made with</span>
            <Heart className="text-peach-light w-4 h-4" fill="currentColor" />
            <span>for you</span>
          </motion.div>
          
          <div className="mt-12 text-white/60 text-sm">
            24/04/2025
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-peach-darker to-transparent opacity-70"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-peach-light/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/5 rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer;