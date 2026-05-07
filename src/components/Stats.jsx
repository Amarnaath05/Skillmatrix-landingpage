import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Building, Globe } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = [1106887, 770453, 694, 25];
  const displayValues = ["1,106,887", "770,453", "694", "25+"];
  const textColors = [
    "text-blue-600",
    "text-indigo-600", 
    "text-cyan-500",
    "text-amber-500"
  ];

  const cardData = [
    {
      title: "ACTIVE LEARNERS",
      description: "Students completing assignments in real-time",
      textColor: textColors[0]
    },
    {
      title: "COMPLETED COURSES", 
      description: "Successfully finished internship programs",
      textColor: textColors[1]
    },
    {
      title: "COMPANIES",
      description: "Partner organizations hiring talent",
      textColor: textColors[2]
    },
    {
      title: "COUNTRIES",
      description: "Global reach across continents",
      textColor: textColors[3]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters(prev => prev.map((_, index) => {
        const target = targetValues[index];
        return Math.floor(target * progress);
      }));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num, index) => {
    if (index === 3) return displayValues[index]; // "25+" stays as is
    return num.toLocaleString();
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Top Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block px-6 py-2 rounded-full border text-xs tracking-widest font-medium bg-white/80 backdrop-blur-md border-blue-200 text-blue-600 shadow-sm">
            REAL-TIME PLATFORM GROWTH POWERED BY ACTIVE LEARNERS COMPLETING ASSIGNMENTS.
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900">
            Trusted by
          </h2>
          <h2 className="font-serif text-6xl md:text-7xl tracking-tight leading-none text-blue-700">
            Students Worldwide
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600"
        >
          Our platform connects ambitious students with real-world internship opportunities, 
          building careers through hands-on experience and professional mentorship.
        </motion.p>

        {/* Metric Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-400 to-cyan-400 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Live Metric Label */}
              <div className="flex items-center gap-2 text-xs mb-4 relative z-10 text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>LIVE METRIC</span>
              </div>

              {/* Number with Gradient */}
              <div className={`font-serif text-4xl md:text-5xl mb-2 relative z-10 ${card.title === "COMPLETED COURSES" ? 'text-6xl font-black tracking-tight bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent' : card.textColor} font-bold tracking-tight`}>
                {formatNumber(counters[index], index)}
              </div>

              {/* Card Title */}
              <div className="font-semibold tracking-wide uppercase relative z-10 text-gray-900">
                {card.title}
              </div>

              {/* Card Description */}
              <div className="text-sm mt-2 relative z-10 text-gray-600">
                {card.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="italic text-center mt-12 max-w-3xl mx-auto text-gray-500 text-lg"
        >
          "Our growth is driven by real learners completing real assignments — not passive course enrollments."
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button 
            className="px-8 py-3 rounded-full transition inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Internship
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Stats;
