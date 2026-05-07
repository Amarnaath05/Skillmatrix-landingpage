import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certificate = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
      >
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs uppercase tracking-wider text-blue-600">
            VERIFIED CREDENTIAL
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mt-4 text-gray-900">
            Earn a Recognized <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificate of Completion</span>
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Showcase your achievements with industry-recognized certificates that verify your skills and open doors to top opportunities.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 mt-6"
          >
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Verifiable online with unique certificate ID</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>LinkedIn profile integration</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Industry-recognized credentials</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Lifetime validity</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition"
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Start Your Journey
              </span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full border border-slate-300 text-gray-700 hover:bg-slate-50 transition"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side (3D Interactive Card) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative [perspective:1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Certificate Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
            className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl transition-transform duration-200 ease-out overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
            
            {/* Certificate Content */}
            <div className="relative text-center">
              {/* Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Completion</h3>
              
              {/* Subtitle */}
              <p className="text-gray-600 mb-6">Internship Program</p>
              
              {/* Student Name */}
              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-1">This certifies that</p>
                <p className="text-xl font-semibold text-gray-900">John Doe</p>
              </div>
              
              {/* Completion Date */}
              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-1">Completed on</p>
                <p className="text-gray-900">June 15, 2024</p>
              </div>
              
              {/* Certificate ID */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-1">Certificate ID</p>
                <p className="text-blue-600 font-mono">INF-2024-0615-001</p>
              </div>
              
              {/* Glare Effect */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-300"/>
              </div>
            </div>

            {/* Floating Verified Badge */}
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="absolute top-[-12px] right-[-12px] bg-green-500 text-white px-4 py-1 rounded-full flex items-center gap-2 shadow-lg"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Verified & Valid</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Certificate;
