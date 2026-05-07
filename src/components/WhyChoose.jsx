import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Calendar, ShieldCheck, Briefcase } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Learning",
      description: "Accelerate your skills with our optimized learning paths designed for rapid progress and immediate impact.",
      iconGradient: "bg-blue-900",
      glowGradient: "bg-blue-900"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Learn at your own pace with our flexible timeline that fits around your academic and personal commitments.",
      iconGradient: "bg-purple-700",
      glowGradient: "bg-purple-700"
    },
    {
      icon: ShieldCheck,
      title: "Verified Certificates",
      description: "Earn industry-recognized certificates that validate your skills and enhance your resume credibility.",
      iconGradient: "bg-green-800",
      glowGradient: "bg-green-800"
    },
    {
      icon: Briefcase,
      title: "Real Projects",
      description: "Work on actual industry projects that mirror real-world challenges and build your portfolio.",
      iconGradient: "bg-red-900",
      glowGradient: "bg-red-900"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#f8fbff] to-[#eef5ff]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 text-center">
            Why Choose Infospark Technologies?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center mt-6 max-w-3xl mx-auto">
            We provide the perfect blend of theoretical knowledge and practical experience to accelerate your career growth
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20"
        >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative p-8 bg-white border border-slate-200 rounded-[32px] shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] group"
              >
              {/* Icon Box */}
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.18)] border-2 border-white opacity-100 ${index === 0 ? 'bg-[#1E3A8A]' : index === 1 ? 'bg-[#7C3AED]' : index === 2 ? 'bg-[#15803D]' : 'bg-[#991B1B]'} mb-6`}>
                <feature.icon className="w-10 h-10 text-white stroke-[2.8] opacity-100" />
              </div>

              {/* Card Title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-base mt-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhyChoose;
