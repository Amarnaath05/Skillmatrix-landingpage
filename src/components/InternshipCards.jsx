import React from 'react';
import { Globe, Smartphone, Brain, ArrowRight, Clock, Users, Star } from 'lucide-react';

const InternshipCards = () => {
  const internships = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Build modern web applications using React, Node.js, and cloud technologies. Work on real projects from frontend to deployment.",
      duration: "8-12 weeks",
      level: "Beginner to Advanced",
      rating: 4.8,
      students: 2500,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["React", "Node.js", "MongoDB", "AWS", "Git"]
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Create native and cross-platform mobile applications for iOS and Android. Learn UI/UX design and app store optimization.",
      duration: "10-14 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 1800,
      gradient: "from-purple-500 to-pink-500",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Dive into AI/ML with hands-on projects in computer vision, NLP, and predictive modeling using Python and TensorFlow.",
      duration: "12-16 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1200,
      gradient: "from-green-500 to-emerald-500",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Internships
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our wide range of virtual internship programs and kickstart your career in tech
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Icon and Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${internship.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <internship.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center space-x-1 bg-yellow-500/20 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-sm font-semibold">{internship.rating}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {internship.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {internship.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{internship.students}+ students enrolled</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="text-sm">Level: {internship.level}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-3">Skills you'll learn:</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-xs font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full group/btn px-6 py-3 bg-gradient-to-r ${internship.gradient} text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <span className="flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for?
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            View All Internships
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternshipCards;
