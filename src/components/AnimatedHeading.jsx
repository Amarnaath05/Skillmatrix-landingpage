import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = () => {
  const [currentText, setCurrentText] = useState('Success');
  const [showStrike, setShowStrike] = useState(false);
  const [showStudents, setShowStudents] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowStrike(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setCurrentText('Students');
      setShowStrike(false);
      setShowStudents(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
        Trusted by{' '}
        <span className="relative inline-block">
          <motion.span
            className="relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: currentText === 'Success' ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentText === 'Success' && 'Success'}
          </motion.span>
          
          <motion.span
            className={`absolute inset-0 ${showStudents ? 'font-serif text-6xl md:text-7xl tracking-tight leading-none text-blue-700' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showStudents ? 1 : 0,
              y: showStudents ? 0 : 20
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Students
          </motion.span>
          
          {showStrike && (
            <motion.div
              className="absolute bottom-[8px] left-0 h-[3px] bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </span>{' '}
        Worldwide
      </h1>
    </div>
  );
};

export default AnimatedHeading;
