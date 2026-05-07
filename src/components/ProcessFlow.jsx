import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Mail, ClipboardCheck, Award } from 'lucide-react';

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      icon: UserPlus,
      number: '01',
      title: 'Apply',
      description: 'Fill out the simple registration form. It\'s completely free and takes less than 2 minutes.'
    },
    { 
      icon: Mail,
      number: '02',
      title: 'Selection',
      description: 'Get your selection letter via email. Join our community channels for updates. You\'ll receive a curated set of practical assignments for your selected domain.'
    },
    { 
      icon: ClipboardCheck,
      number: '03',
      title: 'Complete Tasks',
      description: 'Receive task lists for your domain. Complete them within the 4-week deadline. Only completed assignments are evaluated for certification.'
    },
    { 
      icon: Award,
      number: '04',
      title: 'Get Certified',
      description: 'Submit your work. Upon verification, receive your internship completion certificate.'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-gradient-to-br from-white via-indigo-50 to-purple-50"
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
          className="text-center"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-center font-medium text-blue-600">
            PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl text-center mt-4 font-serif text-gray-900">
            How It Works?
          </h2>
        </motion.div>

        {/* Timeline Structure */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          {/* Background Line (Inactive) */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-slate-200"></div>
          
          {/* Active Progress Line */}
          <motion.div 
            animate={{ width: `${activeStep * 25}%` }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 left-0 h-[2px] bg-blue-600"
          ></motion.div>

          {/* Steps Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setActiveStep(index + 1)}
                >
                  {/* Icon Box */}
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-lg transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-xl">
                    {/* Icon */}
                    <Icon className="w-6 h-6 text-blue-600" />
                    
                    {/* Step Number Badge */}
                    <motion.div 
                      animate={{ 
                        backgroundColor: activeStep > index ? '#2563EB' : '#f1f5f9',
                        color: activeStep > index ? '#ffffff' : '#64748b'
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold border-2 border-white"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-4 text-gray-900 text-lg font-medium">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-2 max-w-[220px] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 italic mt-16"
        >
          Our internships focus on proving skills through completed work, not passive learning.
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProcessFlow;
