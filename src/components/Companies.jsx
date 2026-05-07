import React from 'react';
import { motion } from 'framer-motion';

const Companies = () => {
  const row1Companies = [
    { name: "Netflix", color: "text-red-500", borderColor: "border-red-200", glow: "hover:border-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.3)]" },
    { name: "Google", color: "text-blue-500", borderColor: "border-blue-200", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]" },
    { name: "Amazon", color: "text-orange-500", borderColor: "border-orange-200", glow: "hover:border-orange-400 hover:shadow-[0_0_12px_rgba(249,115,22,0.3)]" },
    { name: "Meta", color: "text-blue-600", borderColor: "border-blue-200", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]" },
    { name: "Apple", color: "text-gray-900", borderColor: "border-gray-200", glow: "hover:border-gray-400 hover:shadow-[0_0_12px_rgba(107,114,128,0.3)]" },
    { name: "Microsoft", color: "text-cyan-600", borderColor: "border-cyan-200", glow: "hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(8,145,178,0.3)]" },
    { name: "Tesla", color: "text-red-600", borderColor: "border-red-200", glow: "hover:border-red-400 hover:shadow-[0_0_12px_rgba(220,38,38,0.3)]" },
    { name: "LinkedIn", color: "text-blue-700", borderColor: "border-blue-200", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(29,78,216,0.3)]" }
  ];

  const row2Companies = [
    { name: "Adobe", color: "text-red-600", borderColor: "border-red-200", glow: "hover:border-red-400 hover:shadow-[0_0_12px_rgba(220,38,38,0.3)]" },
    { name: "Intel", color: "text-blue-700", borderColor: "border-blue-200", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(29,78,216,0.3)]" },
    { name: "Samsung", color: "text-blue-800", borderColor: "border-blue-200", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(30,64,175,0.3)]" },
    { name: "Uber", color: "text-gray-700", borderColor: "border-gray-200", glow: "hover:border-gray-400 hover:shadow-[0_0_12px_rgba(107,114,128,0.3)]" },
    { name: "IBM", color: "text-blue-800", borderColor: "border-blue-200", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(30,64,175,0.3)]" },
    { name: "Oracle", color: "text-red-700", borderColor: "border-red-200", glow: "hover:border-red-400 hover:shadow-[0_0_12px_rgba(185,28,28,0.3)]" },
    { name: "Salesforce", color: "text-cyan-600", borderColor: "border-cyan-200", glow: "hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(8,145,178,0.3)]" },
    { name: "Spotify", color: "text-green-600", borderColor: "border-green-200", glow: "hover:border-green-400 hover:shadow-[0_0_12px_rgba(22,163,74,0.3)]" }
  ];

  // Duplicate for infinite scroll
  const duplicatedRow1 = [...row1Companies, ...row1Companies];
  const duplicatedRow2 = [...row2Companies, ...row2Companies];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-gray-50 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-blue-600 text-xs tracking-[0.3em] uppercase text-center font-medium">
            TRUSTED BY
          </div>
          <h2 className="text-4xl md:text-5xl text-center mt-4 font-serif text-gray-900">
            Leading Companies
          </h2>
          <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Our interns get hired by the world's most innovative companies
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative mt-16 overflow-hidden group">
          {/* Row 1 - Moving Left */}
          <div className="flex gap-6 w-max animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicatedRow1.map((company, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-5 py-2 rounded-full bg-white border ${company.borderColor} text-sm font-medium transition-all duration-300 ${company.color} ${company.glow} opacity-60 group-hover:opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-md`}
              >
                {company.name}
              </div>
            ))}
          </div>

          {/* Row 2 - Moving Right */}
          <div className="flex gap-6 w-max animate-[marquee_20s_linear_infinite_reverse] group-hover:[animation-play-state:paused] mt-6">
            {duplicatedRow2.map((company, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-5 py-2 rounded-full bg-white border ${company.borderColor} text-sm font-medium transition-all duration-300 ${company.color} ${company.glow} opacity-60 group-hover:opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-md`}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>

        {/* Metric Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg text-center"
          >
            <div className="text-3xl font-semibold text-blue-600">500+</div>
            <div className="text-gray-600 mt-2">Company Partnerships</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg text-center"
          >
            <div className="text-3xl font-semibold text-blue-600">85%</div>
            <div className="text-gray-600 mt-2">Placement Rate</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg text-center"
          >
            <div className="text-3xl font-semibold text-blue-600">$75K</div>
            <div className="text-gray-600 mt-2">Average Starting Salary</div>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 italic mt-10 text-sm"
        >
          Join thousands of successful professionals who started their journey with us
        </motion.div>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 mx-auto block px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
        >
          View Success Stories
        </motion.button>
      </motion.div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.section>
  );
};

export default Companies;
