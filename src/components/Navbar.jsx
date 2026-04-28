import React, { useState } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, Code, LogOut } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [internshipsOpen, setInternshipsOpen] = useState(false);
  const [careerToolsOpen, setCareerToolsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 dark:bg-[#020617]/70 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-xl ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>SkillMatrix</span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 dark:bg-white/5 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
          <a href="#home" className={`px-4 py-2 rounded-full transition ${
            darkMode 
              ? 'bg-white/10 text-white' 
              : 'bg-gray-200 text-black'
          }`}>Home</a>
          <a href="#services" className={`px-4 py-2 rounded-full transition text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white`}>Services</a>
          
          {/* Internships Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setInternshipsOpen(true)}
            onMouseLeave={() => setInternshipsOpen(false)}
          >
            <button className={`px-4 py-2 rounded-full transition text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white flex items-center gap-1`}>
              Internships
              <ChevronDown className="w-3 h-3" />
            </button>
            {internshipsOpen && (
              <div className={`absolute top-full mt-2 bg-[#020617] dark:bg-[#020617] border border-white/10 rounded-xl shadow-lg p-2 w-48 transition-all duration-200 ease-out opacity-100 translate-y-0 ${
                darkMode ? '' : 'bg-white border-gray-200'
              }`}>
                <a href="#web-dev" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Web Development</a>
                <a href="#data-science" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Data Science</a>
                <a href="#mobile-dev" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Mobile Development</a>
              </div>
            )}
          </div>

          {/* Career Tools Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCareerToolsOpen(true)}
            onMouseLeave={() => setCareerToolsOpen(false)}
          >
            <button className={`px-4 py-2 rounded-full transition text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white flex items-center gap-1`}>
              Career Tools
              <ChevronDown className="w-3 h-3" />
            </button>
            {careerToolsOpen && (
              <div className={`absolute top-full mt-2 bg-[#020617] dark:bg-[#020617] border border-white/10 rounded-xl shadow-lg p-2 w-48 transition-all duration-200 ease-out opacity-100 translate-y-0 ${
                darkMode ? '' : 'bg-white border-gray-200'
              }`}>
                <a href="#resume-builder" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Resume Builder</a>
                <a href="#skill-assessment" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Skill Assessment</a>
                <a href="#career-path" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Career Path</a>
              </div>
            )}
          </div>

          <a href="#quiz" className={`px-4 py-2 rounded-full transition text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white`}>Quiz</a>

          {/* More Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className={`px-4 py-2 rounded-full transition text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white flex items-center gap-1`}>
              More
              <ChevronDown className="w-3 h-3" />
            </button>
            {moreOpen && (
              <div className={`absolute top-full mt-2 bg-[#020617] dark:bg-[#020617] border border-white/10 rounded-xl shadow-lg p-2 w-48 transition-all duration-200 ease-out opacity-100 translate-y-0 ${
                darkMode ? '' : 'bg-white border-gray-200'
              }`}>
                <a href="#about" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>About Us</a>
                <a href="#contact" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Contact</a>
                <a href="#blog" className={`block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition ${
                  darkMode ? '' : 'text-gray-700 hover:bg-gray-100'
                }`}>Blog</a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
          
          {/* Profile Button */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full transition"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                <span className="text-sm font-medium">D</span>
              </div>
              <span className={`text-sm ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Demo</span>
              <ChevronDown className={`w-3 h-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`} />
            </button>
            
            {isProfileOpen && (
              <div className={`absolute right-0 mt-2 w-48 bg-[#020617] border border-white/10 rounded-xl shadow-lg p-2 ${
                darkMode ? '' : 'bg-white border-gray-200'
              }`}>
                <div className={`px-4 py-2 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>demo@example.com</div>
                <div className="border-t border-white/10 my-2"></div>
                <button className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition`}>
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full hover:bg-white/10 transition ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden mx-6 mb-4 rounded-xl border p-4 transition-all duration-200 ${
          darkMode 
            ? 'bg-white/5 backdrop-blur-lg border-white/10' 
            : 'bg-white/90 backdrop-blur-lg border-gray-200'
        }`}>
          <div className="flex flex-col space-y-3">
            <a href="#home" className={`px-4 py-2 rounded-full transition ${
              darkMode 
                ? 'bg-white/10 text-white' 
                : 'bg-gray-200 text-black'
            }`}>Home</a>
            <a href="#services" className={`px-4 py-2 rounded-full transition ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}>Services</a>
            <a href="#internships" className={`px-4 py-2 rounded-full transition ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}>Internships</a>
            <a href="#career-tools" className={`px-4 py-2 rounded-full transition ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}>Career Tools</a>
            <a href="#quiz" className={`px-4 py-2 rounded-full transition ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}>Quiz</a>
            <a href="#more" className={`px-4 py-2 rounded-full transition ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
            }`}>More</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
