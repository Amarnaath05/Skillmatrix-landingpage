import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Database, 
  Cpu, 
  Code2, 
  Coffee, 
  Terminal, 
  Cloud, 
  Shield, 
  Palette, 
  Brush,
  ArrowRight, 
  Clock, 
  Users 
} from 'lucide-react';

const InternshipCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I apply for an internship?",
      answer: "Click on Apply Now, fill the form, and you'll receive further instructions via email."
    },
    {
      question: "Are the internships free or paid?",
      answer: "Most internships are free to join, with optional paid certifications."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you will receive a verified certificate after completing all assignments."
    },
    {
      question: "What is the duration of internships?",
      answer: "Internships typically last between 8 to 16 weeks depending on the domain."
    },
    {
      question: "Can beginners apply?",
      answer: "Yes, we offer beginner-friendly programs as well as advanced tracks."
    }
  ];

  const internships = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Build modern web applications using React, Node.js, and cloud technologies.",
      duration: "8-12 weeks",
      level: "Beginner to Advanced",
      students: 2500,
      iconBg: "bg-blue-500"
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Create native and cross-platform mobile applications for iOS and Android.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 1800,
      iconBg: "bg-green-500"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Dive into AI/ML with hands-on projects in computer vision and NLP.",
      duration: "12-16 weeks",
      level: "Advanced",
      students: 1200,
      iconBg: "bg-purple-500"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Master data analysis, visualization, and statistical modeling techniques.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 1600,
      iconBg: "bg-indigo-500"
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Explore advanced AI concepts including deep learning and neural networks.",
      duration: "14-18 weeks",
      level: "Advanced",
      students: 900,
      iconBg: "bg-pink-500"
    },
    {
      icon: Code2,
      title: "C++ Programming",
      description: "Learn system programming, game development, and high-performance computing.",
      duration: "8-12 weeks",
      level: "Intermediate",
      students: 1400,
      iconBg: "bg-orange-500"
    },
    {
      icon: Coffee,
      title: "Java Programming",
      description: "Master enterprise-level development with Spring and Android applications.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 2000,
      iconBg: "bg-yellow-500"
    },
    {
      icon: Terminal,
      title: "Python Programming",
      description: "Build versatile applications in web, data science, and automation.",
      duration: "8-12 weeks",
      level: "Beginner to Advanced",
      students: 3200,
      iconBg: "bg-cyan-500"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Learn cloud deployment, containerization, and infrastructure management.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 1100,
      iconBg: "bg-violet-500"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Master ethical hacking, network security, and threat protection.",
      duration: "12-16 weeks",
      level: "Advanced",
      students: 800,
      iconBg: "bg-red-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive user interfaces and exceptional user experiences.",
      duration: "8-12 weeks",
      level: "Beginner to Intermediate",
      students: 1900,
      iconBg: "bg-emerald-500"
    },
    {
      icon: Brush,
      title: "Graphic Design",
      description: "Develop visual design skills for branding, marketing, and digital media.",
      duration: "8-12 weeks",
      level: "Beginner to Intermediate",
      students: 1500,
      iconBg: "bg-rose-500"
    }
  ];

  return (
    <>
      {/* Internship Section */}
      <section className="bg-[#020617] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="text-cyan-400 text-xs tracking-widest uppercase font-semibold mb-3">
            OPPORTUNITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-medium">
            Explore Our <span className="text-cyan-400">Internships</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose from our wide range of virtual internship programs and kickstart your career in tech
          </p>

          {/* Card Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {internships.map((internship, index) => {
              const Icon = internship.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0a1628] border border-white/10 rounded-2xl p-6 text-left transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:border-cyan-400/30"
                >
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${internship.iconBg}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white font-sans">
                    {internship.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed font-sans">
                    {internship.description}
                  </p>

                  {/* Meta Info */}
                  <div className="text-gray-500 text-xs mt-3 space-y-1 font-sans">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      <span>{internship.students}+ students</span>
                    </div>
                    <div>
                      <span>Level: {internship.level}</span>
                    </div>
                  </div>

                  {/* Apply Link */}
                  <a 
                    href="#" 
                    className="text-cyan-400 font-medium mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all font-sans"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#020617] py-24 px-6 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mt-4">
            Got questions? We've got answers.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="bg-[#0a1628] border border-white/10 rounded-xl p-5 cursor-pointer transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InternshipCards;
