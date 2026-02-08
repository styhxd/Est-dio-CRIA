import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import About from './components/About';
import Contact from './components/Contact';
import Clube from './components/Clube';
import { ProjectCategory, PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [portfolioCategory, setPortfolioCategory] = useState<ProjectCategory>('All');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <Hero />
            <Clients />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div 
            key="about"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <About />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div 
            key="services"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <ServicesGrid />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div 
            key="portfolio"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <Portfolio activeCategory={portfolioCategory} setActiveCategory={setPortfolioCategory} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div 
            key="contact"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <Contact />
          </motion.div>
        );
      case 'clube':
        return (
            <motion.div 
              key="clube"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
            >
              <Clube />
            </motion.div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <main className="bg-obsidian text-white min-h-screen selection:bg-primary-tech selection:text-white flex flex-col justify-between">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onNavigatePortfolio={(cat) => setPortfolioCategory(cat)}
      />
      
      <div className="flex-grow">
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
      </div>
      
      <Footer onNavigate={setCurrentPage} />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;