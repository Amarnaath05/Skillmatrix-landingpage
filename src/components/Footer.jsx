import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`pt-20 pb-10 px-6 transition-colors duration-500 ${
      darkMode ? 'bg-[#020617] text-gray-400' : 'bg-gray-900 text-gray-500'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h2 className={`text-xl font-semibold font-sans ${
              darkMode ? 'text-white' : 'text-white'
            }`}>Infospark Technologies</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Empowering students worldwide with real-world internship experiences and industry-recognized certifications.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className={`font-medium mb-4 font-sans ${
              darkMode ? 'text-white' : 'text-white'
            }`}>Explore</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">Internships</li>
              <li className="hover:text-white transition cursor-pointer">Certificates</li>
              <li className="hover:text-white transition cursor-pointer">Companies</li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className={`font-medium mb-4 font-sans ${
              darkMode ? 'text-white' : 'text-white'
            }`}>Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">About Us</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
              <li className="hover:text-white transition cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className={`font-medium mb-4 font-sans ${
              darkMode ? 'text-white' : 'text-white'
            }`}>Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">📧</span>
                info@codealpha.tech
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">📞</span>
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">📍</span>
                India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-white/10' : 'border-white/20'
        }`}>
          {/* Copyright */}
          <p className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            © 2026 Infospark Technologies. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full transition cursor-pointer ${
              darkMode ? 'bg-[#0a1628] hover:bg-cyan-500' : 'bg-gray-800 hover:bg-cyan-600'
            }`}>
              <span className="text-white">in</span>
            </div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full transition cursor-pointer ${
              darkMode ? 'bg-[#0a1628] hover:bg-cyan-500' : 'bg-gray-800 hover:bg-cyan-600'
            }`}>
              <span className="text-white">X</span>
            </div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full transition cursor-pointer ${
              darkMode ? 'bg-[#0a1628] hover:bg-cyan-500' : 'bg-gray-800 hover:bg-cyan-600'
            }`}>
              <span className="text-white">IG</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className={`flex gap-6 text-sm ${
            darkMode ? '' : ''
          }`}>
            <span className={`transition cursor-pointer ${
              darkMode ? 'hover:text-white' : 'hover:text-white'
            }`}>Privacy Policy</span>
            <span className={`transition cursor-pointer ${
              darkMode ? 'hover:text-white' : 'hover:text-white'
            }`}>Terms</span>
            <span className={`transition cursor-pointer ${
              darkMode ? 'hover:text-white' : 'hover:text-white'
            }`}>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
