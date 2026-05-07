import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  BarChart3, 
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
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Create native and cross-platform mobile applications for iOS and Android.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 1800,
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-600"
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description: "Dive into AI/ML with hands-on projects in computer vision and NLP.",
      duration: "12-16 weeks",
      level: "Advanced",
      students: 1200,
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Master data analysis, visualization, and statistical modeling techniques.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 1600,
      iconBg: "bg-gradient-to-br from-cyan-500 to-sky-600"
    },
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "Explore advanced AI concepts including deep learning and neural networks.",
      duration: "14-18 weeks",
      level: "Advanced",
      students: 900,
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      icon: Code2,
      title: "C++ Programming",
      description: "Learn system programming, game development, and high-performance computing.",
      duration: "8-12 weeks",
      level: "Intermediate",
      students: 1400,
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600"
    },
    {
      icon: Coffee,
      title: "Java Programming",
      description: "Master enterprise-level development with Spring and Android applications.",
      duration: "10-14 weeks",
      level: "Intermediate",
      students: 2000,
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      icon: Terminal,
      title: "Python Programming",
      description: "Build versatile applications in web, data science, and automation.",
      duration: "8-12 weeks",
      level: "Beginner to Advanced",
      students: 3200,
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600"
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
          className="max-w-6xl mx-auto text-center"
        >
          {/* Header */}
          <div className="text-blue-600 text-xs tracking-widest uppercase font-semibold mb-3">
            OPPORTUNITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-medium text-gray-900">
            Explore Our <span className="text-blue-600">Internships</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose from our wide range of virtual internship programs and kickstart your career in tech
          </p>

          {/* Card Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16"
          >
            {internships.map((internship, index) => {
              const Icon = internship.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:border-blue-300"
                >
                  {/* Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border border-white/40 mb-6 ${internship.iconBg}`}>
                    <Icon className="w-7 h-7 text-white stroke-[2.4] drop-shadow-sm" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 font-sans">
                    {internship.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed font-sans">
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
                  <motion.a 
                    href="#" 
                    className="text-blue-600 font-medium mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all font-sans"
                    whileHover={{ x: 4 }}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-gray-50"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Got questions? We've got answers.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                viewport={{ once: true }}
                onClick={() => toggle(index)}
                className="bg-white border border-slate-200 rounded-2xl p-5 cursor-pointer transition-all hover:shadow-lg hover:border-blue-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                  >
                    ▼
                  </motion.span>
                </div>
                <motion.div
                  animate={{ 
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 text-sm leading-relaxed pt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default InternshipCards;
