
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import FarmerShowcase from '../components/home/FarmerShowcase';
import CallToAction from '../components/home/CallToAction';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'FarmSE - Empowering Farmers, Enriching Lives';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <FarmerShowcase />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
