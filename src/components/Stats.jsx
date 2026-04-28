import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Stats = ({ darkMode }) => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = [1106887, 770453, 694, 25];
  const displayValues = ["1,106,887", "770,453", "694", "25+"];
  const gradients = [
    "from-blue-500 to-purple-500",
    "from-purple-500 to-pink-500", 
    "from-cyan-400 to-green-400",
    "from-yellow-400 to-orange-400"
  ];

  const cardData = [
    {
      title: "ACTIVE LEARNERS",
      description: "Students completing assignments in real-time",
      gradient: gradients[0]
    },
    {
      title: "COMPLETED COURSES", 
      description: "Successfully finished internship programs",
      gradient: gradients[1]
    },
    {
      title: "COMPANIES",
      description: "Partner organizations hiring talent",
      gradient: gradients[2]
    },
    {
      title: "COUNTRIES",
      description: "Global reach across continents",
      gradient: gradients[3]
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
    <section ref={sectionRef} className={`py-24 px-6 transition-colors duration-500 ${
      darkMode ? 'bg-[#020617] text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Pill Tag */}
        <div className="text-center mb-8">
          <div className={`inline-block px-4 py-1 rounded-full border text-xs tracking-widest backdrop-blur-md ${
            darkMode 
              ? 'border-cyan-400/30 text-cyan-400 bg-white/5' 
              : 'border-gray-300 text-gray-600 bg-gray-50'
          }`}>
            REAL-TIME PLATFORM GROWTH POWERED BY ACTIVE LEARNERS COMPLETING ASSIGNMENTS.
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className={`font-serif text-5xl md:text-6xl ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Trusted by
          </h2>
          <h2 className="font-serif text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Students Worldwide
          </h2>
        </div>

        {/* Description */}
        <p className={`max-w-2xl mx-auto mt-4 text-lg text-center ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Our platform connects ambitious students with real-world internship opportunities, 
          building careers through hands-on experience and professional mentorship.
        </p>

        {/* Metric Cards Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? 'bg-[#0a1628] border-white/10' : 'bg-gray-50 border-gray-200'
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${card.gradient}`}></div>
              
              {/* Live Metric Label */}
              <div className={`flex items-center gap-2 text-xs mb-4 relative z-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>LIVE METRIC</span>
              </div>

              {/* Number with Gradient */}
              <div className={`font-serif text-4xl md:text-5xl mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}`}>
                {formatNumber(counters[index], index)}
              </div>

              {/* Card Title */}
              <div className={`font-semibold tracking-wide uppercase relative z-10 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {card.title}
              </div>

              {/* Card Description */}
              <div className={`text-sm mt-2 relative z-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {card.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`italic text-center mt-12 max-w-3xl mx-auto ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
          "Our growth is driven by real learners completing real assignments — not passive course enrollments."
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className={`px-8 py-3 rounded-full transition inline-flex items-center gap-2 hover:translate-x-1 ${
            darkMode 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}>
            Start Your Internship
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
