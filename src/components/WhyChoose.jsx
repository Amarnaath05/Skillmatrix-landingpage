import React from 'react';
import { Zap, Calendar, ShieldCheck, Briefcase } from 'lucide-react';

const WhyChoose = ({ darkMode }) => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Learning",
      description: "Accelerate your skills with our optimized learning paths designed for rapid progress and immediate impact.",
      iconGradient: "from-orange-400 to-yellow-400",
      glowGradient: "from-orange-400 to-yellow-400"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Learn at your own pace with our flexible timeline that fits around your academic and personal commitments.",
      iconGradient: "from-blue-500 to-indigo-500",
      glowGradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: ShieldCheck,
      title: "Verified Certificates",
      description: "Earn industry-recognized certificates that validate your skills and enhance your resume credibility.",
      iconGradient: "from-green-400 to-emerald-500",
      glowGradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Briefcase,
      title: "Real Projects",
      description: "Work on actual industry projects that mirror real-world challenges and build your portfolio.",
      iconGradient: "from-purple-500 to-pink-500",
      glowGradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className={`py-20 px-6 transition-colors duration-500 ${
      darkMode ? 'bg-[#020617] text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-semibold text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose Infospark Technologies?
          </h2>
          <p className={`text-center mt-4 max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We provide the perfect blend of theoretical knowledge and practical experience to accelerate your career growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? 'bg-[#0a1628] border-white/10' : 'bg-gray-50 border-gray-200'
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${feature.glowGradient}`}></div>

              {/* Icon Box */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-white mb-4 bg-gradient-to-br ${feature.iconGradient}`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Card Title */}
              <h3 className={`font-semibold text-lg ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className={`text-sm mt-2 leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
