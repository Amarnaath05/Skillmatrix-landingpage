import React, { useState } from 'react';
import { UserPlus, Mail, ClipboardCheck, Award } from 'lucide-react';

const ProcessFlow = ({ darkMode }) => {
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
    <section className={`py-24 px-6 relative transition-colors duration-500 ${
      darkMode ? 'bg-[#020617] text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className={`text-xs tracking-[0.3em] uppercase text-center font-medium ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            PROCESS
          </div>
          <h2 className={`text-4xl md:text-5xl text-center mt-4 font-serif ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            How It Works?
          </h2>
        </div>

        {/* Timeline Structure */}
        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Background Line (Inactive) */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-blue-900/40"></div>
          
          {/* Active Progress Line */}
          <div 
            className="absolute top-10 left-0 h-[2px] bg-cyan-400 transition-all duration-500"
            style={{ width: `${activeStep * 25}%` }}
          ></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 group-hover:-translate-y-1"
                  onMouseEnter={() => setActiveStep(index + 1)}
                >
                  {/* Icon Box */}
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-[#0a1628] border border-white/10 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    {/* Icon */}
                    <Icon className="w-6 h-6 text-cyan-400" />
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeStep > index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-[#0f172a] text-gray-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white'
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-4 text-white text-lg font-medium">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-2 max-w-[220px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 italic mt-16">
          Our internships focus on proving skills through completed work, not passive learning.
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
