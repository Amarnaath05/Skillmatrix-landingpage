import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend",
      subtitle: "User Interface & Experience",
      technologies: [
        { name: "HTML", color: "bg-orange-400", glow: "hover:border-orange-400 hover:shadow-[0_0_12px_rgba(251,146,60,0.6)]" },
        { name: "CSS", color: "bg-blue-400", glow: "hover:border-blue-400 hover:shadow-[0_0_12px_rgba(96,165,250,0.6)]" },
        { name: "React", color: "bg-cyan-400", glow: "hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]" },
        { name: "Angular", color: "bg-red-400", glow: "hover:border-red-400 hover:shadow-[0_0_12px_rgba(248,113,113,0.6)]" },
        { name: "Vue", color: "bg-green-400", glow: "hover:border-green-400 hover:shadow-[0_0_12px_rgba(74,222,128,0.6)]" },
        { name: "JavaScript", color: "bg-yellow-400", glow: "hover:border-yellow-400 hover:shadow-[0_0_12px_rgba(250,204,21,0.6)]" },
        { name: "TypeScript", color: "bg-blue-500", glow: "hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]" }
      ],
      glowColor: "bg-blue-500/10"
    },
    {
      icon: Database,
      title: "Backend",
      subtitle: "Server & Database Technologies",
      technologies: [
        { name: "Python", color: "bg-yellow-400", glow: "hover:border-yellow-400 hover:shadow-[0_0_12px_rgba(250,204,21,0.6)]" },
        { name: "Java", color: "bg-red-500", glow: "hover:border-red-500 hover:shadow-[0_0_12px_rgba(239,68,68,0.6)]" },
        { name: "C++", color: "bg-blue-600", glow: "hover:border-blue-600 hover:shadow-[0_0_12px_rgba(37,99,235,0.6)]" },
        { name: "Node.js", color: "bg-green-500", glow: "hover:border-green-500 hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]" }
      ],
      glowColor: "bg-green-500/10"
    },
    {
      icon: Cloud,
      title: "DevOps",
      subtitle: "Cloud & Deployment Tools",
      technologies: [
        { name: "AWS", color: "bg-orange-500", glow: "hover:border-orange-500 hover:shadow-[0_0_12px_rgba(249,115,22,0.6)]" },
        { name: "Kubernetes", color: "bg-blue-600", glow: "hover:border-blue-600 hover:shadow-[0_0_12px_rgba(37,99,235,0.6)]" },
        { name: "Docker", color: "bg-cyan-500", glow: "hover:border-cyan-500 hover:shadow-[0_0_12px_rgba(6,182,212,0.6)]" },
        { name: "Git", color: "bg-red-600", glow: "hover:border-red-600 hover:shadow-[0_0_12px_rgba(220,38,38,0.6)]" },
        { name: "Linux", color: "bg-yellow-500", glow: "hover:border-yellow-500 hover:shadow-[0_0_12px_rgba(234,179,8,0.6)]" }
      ],
      glowColor: "bg-purple-500/10"
    },
    {
      icon: Brain,
      title: "AI",
      subtitle: "Artificial Intelligence & Machine Learning",
      technologies: [
        { name: "TensorFlow", color: "bg-orange-500", glow: "hover:border-orange-500 hover:shadow-[0_0_12px_rgba(249,115,22,0.6)]" },
        { name: "PyTorch", color: "bg-red-500", glow: "hover:border-red-500 hover:shadow-[0_0_12px_rgba(239,68,68,0.6)]" },
        { name: "Jupyter", color: "bg-yellow-500", glow: "hover:border-yellow-500 hover:shadow-[0_0_12px_rgba(234,179,8,0.6)]" }
      ],
      glowColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="bg-[#020617] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="text-blue-400 text-xs tracking-[0.3em] uppercase text-center font-medium">
            SKILLS & TOOLS
          </div>
          <h2 className="text-4xl md:text-5xl text-center mt-4 font-serif">
            Technologies You'll <span className="text-cyan-400">Work With</span> During Your Internship
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            Master cutting-edge technologies that power today's most innovative companies
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-[#0a1628] border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${category.glowColor} blur-3xl rounded-full`}></div>

                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a]">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-3 mt-4 relative z-10">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[#020617] border border-white/10 text-xs font-semibold text-white transition-all duration-300 ${tech.glow}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${tech.color}`}></span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center text-gray-500 italic mt-16">
          "The best way to predict the future is to invent it."
        </div>

        {/* CTA Button */}
        <button className="mt-6 mx-auto block px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition group">
          Explore All Technologies
          <svg className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TechStack;
