import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Code, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [internshipsOpen, setInternshipsOpen] = useState(false);
  const [careerToolsOpen, setCareerToolsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Infospark Technologies</span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200">
          <a href="#home" className="px-4 py-2 rounded-full transition bg-blue-50 text-blue-600 font-medium hover:bg-blue-100">Home</a>
          <a href="#services" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600 font-medium">Services</a>
          
          {/* Internships Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setInternshipsOpen(true)}
            onMouseLeave={() => setInternshipsOpen(false)}
          >
            <button className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1">
              Internships
              <ChevronDown className="w-3 h-3" />
            </button>
            {internshipsOpen && (
              <div className="absolute top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 w-48 transition-all duration-200 ease-out opacity-100 translate-y-0">
                <a href="#web-dev" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Web Development</a>
                <a href="#data-science" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Data Science</a>
                <a href="#mobile-dev" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Mobile Development</a>
              </div>
            )}
          </div>

          {/* Career Tools Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCareerToolsOpen(true)}
            onMouseLeave={() => setCareerToolsOpen(false)}
          >
            <button className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1">
              Career Tools
              <ChevronDown className="w-3 h-3" />
            </button>
            {careerToolsOpen && (
              <div className="absolute top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 w-48 transition-all duration-200 ease-out opacity-100 translate-y-0">
                <a href="#resume-builder" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Resume Builder</a>
                <a href="#skill-assessment" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Skill Assessment</a>
                <a href="#career-path" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Career Path</a>
              </div>
            )}
          </div>

          <a href="#quiz" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600 font-medium">Quiz</a>

          {/* More Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1">
              More
              <ChevronDown className="w-3 h-3" />
            </button>
            {moreOpen && (
              <div className="absolute top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg p-2 w-48 transition-all duration-200 ease-out opacity-100 translate-y-0">
                <a href="#about" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">About Us</a>
                <a href="#contact" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Contact</a>
                <a href="#blog" className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Blog</a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Profile Button */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 bg-white/70 border border-slate-200 px-3 py-1.5 rounded-full transition hover:bg-white/80"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                <span className="text-sm font-medium">D</span>
              </div>
              <span className="text-sm text-gray-900">Demo</span>
              <ChevronDown className="w-3 h-3 text-gray-900" />
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg p-2">
                <div className="px-4 py-2 text-sm text-gray-600">demo@example.com</div>
                <div className="border-t border-slate-200 my-2"></div>
                <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition text-gray-900"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-6 mb-4 rounded-xl border p-4 transition-all duration-200 bg-white/90 backdrop-blur-lg border-slate-200">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="px-4 py-2 rounded-full transition bg-blue-50 text-blue-600 font-medium">Home</a>
            <a href="#services" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600">Services</a>
            <a href="#internships" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600">Internships</a>
            <a href="#career-tools" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600">Career Tools</a>
            <a href="#quiz" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600">Quiz</a>
            <a href="#more" className="px-4 py-2 rounded-full transition text-gray-600 hover:text-blue-600">More</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
