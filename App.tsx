import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import About from './components/About';
import Contact from './components/Contact';
import { ProjectCategory } from './types';

function App() {
  const [portfolioCategory, setPortfolioCategory] = useState<ProjectCategory>('All');

  return (
    <main className="bg-obsidian text-white min-h-screen selection:bg-primary-tech selection:text-white">
      <Navbar onNavigatePortfolio={setPortfolioCategory} />
      <Hero />
      <Clients />
      <About />
      <ServicesGrid />
      <Portfolio activeCategory={portfolioCategory} setActiveCategory={setPortfolioCategory} />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;