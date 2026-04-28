import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#", "PHP", "Ruby", "Go", "Express.js", "Django"]
    },
    {
      title: "DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD", "Terraform", "Linux", "Nginx"]
    },
    {
      title: "AI/ML",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Keras", "OpenCV", "NLP"]
    }
  ];

  const getGradientForCategory = (index) => {
    const gradients = [
      "from-blue-500 to-purple-500",
      "from-purple-500 to-indigo-500", 
      "from-indigo-500 to-teal-500",
      "from-teal-500 to-orange-500"
    ];
    return gradients[index];
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#0b0f19] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Technologies You'll
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Work With
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Master the latest tools and technologies that are in high demand in the industry
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Title */}
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${getGradientForCategory(categoryIndex)} bg-clip-text text-transparent mb-6`}>
                {category.title}
              </h3>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            And many more cutting-edge technologies added regularly
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 bg-size-200 animate-gradient">
            View Full Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
