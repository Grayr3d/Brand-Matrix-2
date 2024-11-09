import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default HomePage;