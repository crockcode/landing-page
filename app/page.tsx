import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <FinalCTA />
    </main>
  );
} 