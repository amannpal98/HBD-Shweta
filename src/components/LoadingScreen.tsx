import React from 'react';
import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-peach-lightest flex flex-col items-center justify-center z-50">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
        className="mb-8"
      >
        <Cake className="text-peach-dark w-16 h-16" />
      </motion.div>
      
      <h2 className="text-2xl font-serif font-bold text-peach-darker mb-4">
        Preparing Your Celebration...
      </h2>
      
      <div className="w-64 h-2 bg-peach-light/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-peach-dark to-gold rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;