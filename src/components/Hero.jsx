import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [scrambledText, setScrambledText] = useState('Real World Experience');
  const [isScrambling, setIsScrambling] = useState(false);
  
  const originalText = 'Real World Experience';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const scrambleIntervalRef = useRef(null);
  const hoverIntervalRef = useRef(null);
  const currentScrambleRef = useRef(null);

  const scrambleText = () => {
    let iterations = 0;
    const maxIterations = originalText.length;
    
    // Clear any existing scramble interval
    if (currentScrambleRef.current) {
      clearInterval(currentScrambleRef.current);
    }
    
    setIsScrambling(true);
    
    currentScrambleRef.current = setInterval(() => {
      if (iterations <= maxIterations) {
        setScrambledText(originalText.split('').map((char, index) => {
          if (char === ' ') return ' '; // Don't scramble spaces
          if (index < iterations) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        iterations++;
      } else {
        setScrambledText(originalText);
        setIsScrambling(false);
        clearInterval(currentScrambleRef.current);
        currentScrambleRef.current = null;
      }
    }, 30);
  };

  const handleMouseEnter = () => {
    // Start scramble immediately
    scrambleText();
    
    // Then repeat every 2 seconds while hovering
    hoverIntervalRef.current = setInterval(() => {
      scrambleText();
    }, 2000);
  };

  const handleMouseLeave = () => {
    // Clear all intervals
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current);
      hoverIntervalRef.current = null;
    }
    if (currentScrambleRef.current) {
      clearInterval(currentScrambleRef.current);
      currentScrambleRef.current = null;
    }
    
    // Reset to original text
    setScrambledText(originalText);
    setIsScrambling(false);
  };

  useEffect(() => {
    // Run scramble animation once on page load
    scrambleText();
    
    // Cleanup on unmount
    return () => {
      if (currentScrambleRef.current) {
        clearInterval(currentScrambleRef.current);
      }
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 space-y-8 relative z-10"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-600 shadow-sm"
        >
          #1 PLATFORM FOR VIRTUAL INTERNSHIPS
        </motion.div>

        {/* Hero Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-tight text-gray-900"
        >
          <span className="block">Where Learning Meets</span>
          <motion.span 
            className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {scrambledText}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600"
        >
          Gain hands-on experience through our virtual internship programs. Work on real projects, 
          build your portfolio, and earn verified certificates that employers value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            className="group px-8 py-4 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Apply for Internship</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button 
            className="px-8 py-4 rounded-full font-medium bg-white border border-slate-300 text-gray-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center space-x-2">
              <span>Verify Certificate</span>
              <ExternalLink className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Stat Cards */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="space-y-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1.1M+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">770K+</div>
                <div className="text-sm text-gray-600">Certificates Issued</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-green-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">694</div>
                <div className="text-sm text-gray-600">Partner Companies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
