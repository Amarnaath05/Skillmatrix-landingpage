import React, { useState } from 'react';
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
    <section className="bg-[#020617] text-white py-24 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Side (Text) */}
        <div>
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-wider text-gray-300">
            VERIFIED CREDENTIAL
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif mt-4">
            Earn a Recognized <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certificate of Completion</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-4 leading-relaxed">
            Showcase your achievements with industry-recognized certificates that verify your skills and open doors to top opportunities.
          </p>

          {/* Checklist Items */}
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Verifiable online with unique certificate ID</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>LinkedIn profile integration</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Industry-recognized credentials</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Lifetime validity</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:opacity-90 transition">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Start Your Journey
              </span>
            </button>
            
            <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
              <span className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </span>
            </button>
          </div>
        </div>

        {/* Right Side (3D Interactive Card) */}
        <div 
          className="relative [perspective:1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Certificate Card */}
          <div 
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
            className="relative transition-transform duration-200 ease-out"
          >
            <div 
              style={{ transform: "translateZ(20px)" }}
              className="bg-[#0a1628] border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
              {/* Certificate Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Certificate of Completion</h3>
                <p className="text-gray-400">Virtual Internship Program</p>
              </div>

              {/* Certificate Body */}
              <div className="text-center mb-8">
                <p className="text-gray-300 mb-4">This is to certify that</p>
                <p className="text-2xl font-bold text-white mb-4">John Doe</p>
                <p className="text-gray-300 mb-4">has successfully completed</p>
                <p className="text-xl font-semibold text-blue-400 mb-4">Web Development Internship</p>
                <p className="text-gray-400 mb-2">with distinction</p>
              </div>

              {/* Certificate Footer */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Date</p>
                  <p className="text-white font-semibold">April 2026</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-400 text-xs">QR Code</span>
                  </div>
                  <p className="text-gray-400 text-xs">Verify Online</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-1">Certificate ID</p>
                  <p className="text-white font-semibold">CA-2026-0427</p>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
