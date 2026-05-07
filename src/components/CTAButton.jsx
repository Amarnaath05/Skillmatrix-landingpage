import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTAButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <span className="text-lg">Start Your Internship</span>
      <motion.div
        className="flex items-center"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative">{/* Ensures text stays above gradient overlay */}</span>
    </motion.button>
  );
};

export default CTAButton;
