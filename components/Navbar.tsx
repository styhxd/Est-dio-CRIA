import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCategory, PageView } from '../types';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
  onNavigatePortfolio: (category: ProjectCategory) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', page: 'home' as PageView },
    { name: 'Sobre', page: 'about' as PageView },
    { name: 'Serviços', page: 'services' as PageView },
    { name: 'Portfólio', page: 'portfolio' as PageView },
    { name: 'Contato', page: 'contact' as PageView },
  ];

  const handleNavigation = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-obsidian/90 backdrop-blur-lg border-b border-white/5 py-4"
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo */}
        <button onClick={() => handleNavigation('home')} className="relative z-50 cursor-pointer flex items-center">
          <img 
            src="/logo.svg" 
            alt="Estúdio CRIA" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative py-4"
            >
              <button
                onClick={() => handleNavigation(link.page)}
                className={`text-sm font-medium transition-colors relative group flex items-center gap-1 cursor-pointer ${currentPage === link.page ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-tech to-primary-art transition-all duration-300 ${currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-obsidian z-40 overflow-y-auto pt-24 px-6 pb-12"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 pb-4 last:border-0">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className={`text-2xl font-display font-bold cursor-pointer ${currentPage === link.page ? 'text-white' : 'text-gray-400'}`}
                    >
                      {link.name}
                    </button>
                  </div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;