import React from 'react';
import { Calendar, Clock, Award, Target } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Target,
      title: "Structured Assignments",
      description: "Well-designed curriculum with clear objectives and progressive learning path to build your skills systematically.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with our flexible timeline that fits around your academic and personal commitments.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description: "Earn industry-recognized certificates that validate your skills and enhance your resume credibility.",
      gradient: "from-indigo-500 to-teal-500"
    },
    {
      icon: Calendar,
      title: "Real Projects",
      description: "Work on actual industry projects that mirror real-world challenges and build your portfolio.",
      gradient: "from-teal-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#0b0f19] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Why Choose
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              SkillMatrix?
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We provide the perfect blend of theoretical knowledge and practical experience to accelerate your career growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
