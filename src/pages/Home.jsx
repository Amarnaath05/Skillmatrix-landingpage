import React from 'react';
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
  return (
    <div className="min-h-screen bg-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <Stats />
      <WhyChoose />
      <ProcessFlow />
      <TechStack />
      <Companies />
      <AnalyticsSection />
      <Certificate />
      <InternshipCards />
      <Footer />
    </div>
  );
};

export default Home;
