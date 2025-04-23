import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '../hooks/useGSAP';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Any GSAP animations could be initialized here
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="content-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-peach-lightest/90 via-peach-lightest/70 to-peach-lightest/90"></div>
      
      <motion.div
        className="text-center z-10 px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-8 border-4 border-gold/50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
        >
          <img
            src="/HeroImg.jpg"
            alt="Birthday celebration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-gradient">
          Happy Birthday Cutiee! 🎂♥️
        </h1>
        
        <p className="text-xl md:text-2xl text-peach-darker max-w-2xl mx-auto mb-8">
        Cheers to another year of success, happiness, and all your dreams coming true!
        </p>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a 
          href="#message" 
          className="animate-bounce bg-peach/40 backdrop-blur-sm p-3 rounded-full hover:bg-peach/60 transition-colors"
        >
          <ChevronDown className="text-peach-darker" size={24} />
        </a>
      </motion.div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-gold/20 animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-peach-dark/20 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-peach-medium/20 animate-float-slower"></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-gold/20 animate-float-slow"></div>
    </section>
  );
};

export default HeroSection;