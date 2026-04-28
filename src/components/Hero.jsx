import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Hero = ({ darkMode }) => {
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
  }, [darkMode]);

  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center items-center text-center pt-16 transition-colors duration-500 ${
      darkMode ? 'bg-[#020617]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-1 rounded-full text-sm backdrop-blur-sm ${
          darkMode 
            ? 'border border-white/20 text-white/80' 
            : 'border border-gray-300 text-gray-600'
        }`}>
          #1 PLATFORM FOR VIRTUAL INTERNSHIPS
        </div>

        {/* Hero Heading */}
        <h1 className={`font-serif text-5xl md:text-7xl font-semibold tracking-tight leading-tight ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="block">Where Learning Meets</span>
          <span 
            className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {scrambledText}
          </span>
        </h1>

        {/* Description */}
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Gain hands-on experience through our virtual internship programs. Work on real projects, 
          build your portfolio, and earn verified certificates that employers value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className={`group px-6 py-3 rounded-xl font-medium transition-all hover:translate-x-1 ${
            darkMode 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}>
            <span className="flex items-center space-x-2">
              <span>Apply for Internship</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className={`px-6 py-3 rounded-xl font-medium transition-all ${
            darkMode 
              ? 'border border-white/20 text-white bg-transparent hover:bg-white/10' 
              : 'border border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100'
          }`}>
            <span className="flex items-center space-x-2">
              <span>Verify Certificate</span>
              <ExternalLink className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
