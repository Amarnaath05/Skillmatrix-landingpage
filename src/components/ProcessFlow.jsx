import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  const steps = [
    { id: 1, name: 'Discover', description: 'Identify your goals and interests' },
    { id: 2, name: 'Define', description: 'Create a personalized learning path' },
    { id: 3, name: 'Design', description: 'Build real-world projects' },
    { id: 4, name: 'Deliver', description: 'Launch your career with confidence' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineWidth(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#0b0f19] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Your Journey to
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Success
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Follow our proven 4-step process to transform your skills into real-world experience
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
              style={{ width: `${lineWidth}%` }}
            />
          </div>

          {/* Animated Dot */}
          <div 
            className="absolute top-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-y-1/2 hidden md:block animate-pulse"
            style={{ left: `${lineWidth}%`, transform: 'translate(-50%, -50%)' }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep >= index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-110' 
                      : 'bg-white/10 border border-white/20'
                  }`}>
                    {activeStep >= index ? (
                      <CheckCircle className="w-10 h-10 text-white" />
                    ) : (
                      <Circle className="w-10 h-10 text-white/50" />
                    )}
                  </div>
                  
                  {/* Animated Glow */}
                  {activeStep === index && (
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-30" />
                  )}
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-white mb-2">{step.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-4 md:hidden">
                    <ArrowRight className="w-6 h-6 text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 bg-size-200 animate-gradient">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
