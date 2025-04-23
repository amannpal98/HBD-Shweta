import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-peach-light/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Cake size={24} className={`${scrolled ? 'text-peach-darker' : 'text-gold-dark'}`} />
          <h1 className={`text-xl font-serif font-bold ${scrolled ? 'text-peach-darker' : 'text-gold-dark'}`}>
            Happy Birthday Cutiee 🎂♥️
          </h1>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#message" 
                className={`font-medium ${scrolled ? 'text-peach-darker' : 'text-gold-dark'} hover:text-gold transition-colors`}
              >
                Message
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`font-medium ${scrolled ? 'text-peach-darker' : 'text-gold-dark'} hover:text-gold transition-colors`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#timeline" 
                className={`font-medium ${scrolled ? 'text-peach-darker' : 'text-gold-dark'} hover:text-gold transition-colors`}
              >
                Timeline
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;