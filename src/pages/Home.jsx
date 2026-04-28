import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhyChoose from '../components/WhyChoose';
import ProcessFlow from '../components/ProcessFlow';
import TechStack from '../components/TechStack';
import Companies from '../components/Companies';
import AnalyticsSection from '../components/AnalyticsSection';
import Certificate from '../components/Certificate';
import InternshipCards from '../components/InternshipCards';
import Footer from '../components/Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-[#020617]' : 'bg-white'
    }`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <WhyChoose darkMode={darkMode} />
      <ProcessFlow darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <Companies darkMode={darkMode} />
      <AnalyticsSection darkMode={darkMode} />
      <Certificate darkMode={darkMode} />
      <InternshipCards darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
