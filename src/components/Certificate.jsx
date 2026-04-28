import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certificate = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Recognized Certificates
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Earn verified certificates that showcase your skills to employers. Our certificates are 
              recognized by leading companies and can be verified online for authenticity.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Verifiable online with unique certificate ID</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">LinkedIn profile integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Industry-recognized credentials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Lifetime validity</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Start Your Journey</span>
                </span>
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Verify Certificate</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Certificate Mock */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-white/20 p-8 shadow-2xl">
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
            </div>

            {/* Verified Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Verified & Valid</span>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
