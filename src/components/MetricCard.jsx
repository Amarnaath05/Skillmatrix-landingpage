import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ 
  icon: Icon, 
  number, 
  title, 
  description, 
  gradientClass,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
        scale: 1.02
      }}
      className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-slate-50 rounded-xl">
          <Icon className="w-6 h-6 text-slate-600" />
        </div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide font-medium">
          LIVE METRIC
        </span>
      </div>
      
      <div className={`text-6xl font-black tracking-tight mb-3 ${gradientClass.includes('from') ? `bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent` : gradientClass}`}>
        {number}
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        {title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default MetricCard;
