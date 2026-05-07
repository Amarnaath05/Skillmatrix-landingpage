import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, Globe2 } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import MetricCard from './MetricCard';
import CTAButton from './CTAButton';

const HeroSection = () => {
  const metrics = [
    {
      icon: Users,
      number: '11,06,887',
      title: 'ACTIVE LEARNERS',
      description: 'Students actively building their skills and advancing their careers',
      gradientClass: 'text-blue-600',
      delay: 0.1
    },
    {
      icon: GraduationCap,
      number: '50,000+',
      title: 'Completed Courses',
      description: 'Successfully completed internships and training programs',
      gradientClass: 'text-6xl font-black tracking-tight bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent',
      delay: 0.2
    },
    {
      icon: Building2,
      number: '694',
      title: 'Companies',
      description: 'Partner companies hiring our talented graduates',
      gradientClass: 'text-cyan-500',
      delay: 0.3
    },
    {
      icon: Globe2,
      number: '25+',
      title: 'Countries',
      description: 'Global reach with students and partners worldwide',
      gradientClass: 'text-orange-500',
      delay: 0.4
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#f8fbff] via-[#f3f7ff] to-[#eef4ff] flex items-center justify-center overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Top capsule badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 uppercase tracking-wide font-medium"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Now Accepting Applications
          </motion.div>

          {/* Animated heading */}
          <AnimatedHeading />

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-600 text-xl leading-relaxed font-medium"
          >
            Join thousands of students worldwide in gaining real-world experience through 
            our premium internship programs. Build skills, earn certificates, and launch 
            your career with confidence.
          </motion.p>

          {/* CTA Button */}
          <CTAButton />

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
    </section>
  );
};

export default HeroSection;
