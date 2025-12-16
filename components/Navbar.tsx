import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, NAV_CONTENT } from '../constants';
import { ProjectCategory } from '../types';

interface NavbarProps {
  onNavigatePortfolio: (category: ProjectCategory) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigatePortfolio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScrollListener = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollListener);
    return () => window.removeEventListener('scroll', handleScrollListener);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero', hasSubmenu: false },
    { name: 'Sobre', href: '#manifesto', hasSubmenu: true },
    { name: 'Serviços', href: '#services', hasSubmenu: true },
    { name: 'Portfólio', href: '#portfolio', hasSubmenu: true },
    { name: 'Contato', href: '#contact', hasSubmenu: true },
  ];

  // Robust smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (!href || href === '#') return;

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
        console.warn(`Target element "${targetId}" not found.`);
    }
    
    // Close menus
    setIsMobileMenuOpen(false);
    setHoveredLink(null);
    setMobileExpanded(null);
  };

  const renderMegaMenuContent = (linkName: string) => {
    if (linkName === 'Serviços') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              onClick={(e) => handleScroll(e, `#${service.id}`)}
              className="group flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer"
            >
              <div className={`p-2 rounded-lg bg-layer border border-white/10 group-hover:border-${service.highlightColor === 'cyan' ? 'accent-cyan' : `primary-${service.highlightColor}`} transition-colors`}>
                <service.icon size={20} className={
                  service.highlightColor === 'tech' ? 'text-primary-tech' :
                  service.highlightColor === 'art' ? 'text-primary-art' :
                  'text-accent-cyan'
                } />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-white text-sm group-hover:text-primary-tech transition-colors flex items-center justify-between">
                  {service.title}
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                </h5>
                <p className="text-xs text-gray-500 line-clamp-1">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      );
    }

    if (linkName === 'Sobre') {
      return (
        <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
                 <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">A Agência</h4>
                 <div className="grid grid-cols-1 gap-2">
                    {NAV_CONTENT.sobre.map((item) => (
                        <a 
                          key={item.title} 
                          href={item.href} 
                          onClick={(e) => handleScroll(e, item.href)}
                          className="group flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5 cursor-pointer"
                        >
                            <div className="text-primary-art group-hover:text-white transition-colors bg-white/5 p-2 rounded-md">
                                <item.icon size={18} />
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm group-hover:text-primary-art transition-colors">{item.title}</div>
                                <div className="text-xs text-gray-500">{item.description}</div>
                            </div>
                        </a>
                    ))}
                 </div>
            </div>
            <div className="bg-layer p-6 rounded-xl border border-white/10 flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img src="https://picsum.photos/400/300?grayscale" alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="relative z-20">
                    <h5 className="text-white font-bold mb-1">Cultura CRIA</h5>
                    <p className="text-xs text-gray-300 mb-3">Conheça os bastidores da nossa criatividade.</p>
                    <a href="#manifesto" onClick={(e) => handleScroll(e, '#manifesto')} className="text-xs font-bold text-primary-tech hover:text-white transition-colors flex items-center gap-1 cursor-pointer">Saiba mais <ArrowRight size={10} /></a>
                </div>
            </div>
        </div>
      );
    }

    if (linkName === 'Portfólio') {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {NAV_CONTENT.portfolio.map((item, index) => (
                    <a 
                        key={item.title} 
                        href={item.href} 
                        onClick={(e) => {
                            handleScroll(e, item.href);
                            if (item.category) onNavigatePortfolio(item.category as ProjectCategory);
                        }}
                        className={`group p-4 rounded-xl bg-layer border border-white/10 hover:border-primary-tech/50 hover:bg-white/5 transition-all text-center flex flex-col items-center justify-center cursor-pointer ${index === 0 ? 'bg-primary-tech/10 border-primary-tech/30' : ''}`}
                    >
                        <div className={`mb-3 p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-primary-tech group-hover:bg-primary-tech/10 transition-colors ${index === 0 ? 'text-primary-tech bg-primary-tech/20' : ''}`}>
                            <item.icon size={20} />
                        </div>
                        <h5 className="font-bold text-white text-xs mb-1">{item.title}</h5>
                    </a>
                ))}
            </div>
        )
    }

    if (linkName === 'Contato') {
        return (
            <div className="grid grid-cols-3 gap-6">
                {NAV_CONTENT.contato.map((item) => (
                    <a 
                      key={item.title} 
                      href={item.href} 
                      onClick={(e) => handleScroll(e, item.href)}
                      className="group p-6 rounded-xl bg-layer border border-white/10 hover:border-accent-cyan/50 hover:bg-white/5 transition-all flex flex-col items-start cursor-pointer"
                    >
                        <div className="mb-4 p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform">
                            <item.icon size={24} />
                        </div>
                        <h5 className="font-bold text-white text-lg mb-2">{item.title}</h5>
                        <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                        <span className="text-xs font-bold text-accent-cyan flex items-center gap-1 uppercase tracking-wider group-hover:gap-2 transition-all">
                            Acessar <ArrowRight size={12} />
                        </span>
                    </a>
                ))}
            </div>
        )
    }

    return null;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-obsidian/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="text-2xl font-display font-bold tracking-tighter relative z-50 cursor-pointer">
          ESTÚDIO<span className="text-primary-tech">CRIA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative py-4"
              onMouseEnter={() => link.hasSubmenu && setHoveredLink(link.name)}
            >
              <a
                href={link.href}
                onClick={(e) => !link.hasSubmenu && handleScroll(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group flex items-center gap-1 cursor-pointer"
              >
                {link.name}
                {link.hasSubmenu && <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180' : ''}`} />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-tech to-primary-art group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          ))}
          <a
            href="#newsletter"
            onClick={(e) => handleScroll(e, '#newsletter')}
            className="px-5 py-2 bg-layer border border-white/10 rounded-full text-sm font-medium hover:border-primary-art/50 hover:bg-primary-art/10 transition-all duration-300 cursor-pointer"
          >
            Clube CRIA
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {hoveredLink && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full pt-2 hidden md:block"
              onMouseEnter={() => setHoveredLink(hoveredLink)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="bg-obsidian/95 backdrop-blur-2xl border border-white/10 rounded-xl p-8 shadow-2xl shadow-purple-900/10 max-w-5xl mx-auto">
                {renderMegaMenuContent(hoveredLink)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                    <a
                      href={link.href}
                      onClick={(e) => {
                          if(!link.hasSubmenu) handleScroll(e, link.href);
                          else setMobileExpanded(mobileExpanded === link.name ? null : link.name);
                      }}
                      className="text-2xl font-display font-bold text-white cursor-pointer"
                    >
                      {link.name}
                    </a>
                    {link.hasSubmenu && (
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className="p-2 text-gray-400"
                      >
                        <ChevronDown className={`transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Submenu Rendering */}
                  {link.hasSubmenu && (
                    <AnimatePresence>
                      {mobileExpanded === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pl-4 space-y-4 overflow-hidden"
                        >
                          {link.name === 'Serviços' && SERVICES.map((service) => (
                            <a 
                              key={service.id} 
                              href={`#${service.id}`} 
                              onClick={(e) => handleScroll(e, `#${service.id}`)} 
                              className="flex items-center gap-3 text-gray-400 hover:text-primary-tech cursor-pointer"
                            >
                              <service.icon size={16} /> <span className="text-sm">{service.title}</span>
                            </a>
                          ))}
                          
                          {link.name === 'Sobre' && NAV_CONTENT.sobre.map((item) => (
                              <a 
                                key={item.title} 
                                href={item.href} 
                                onClick={(e) => handleScroll(e, item.href)} 
                                className="flex items-center gap-3 text-gray-400 hover:text-primary-art cursor-pointer"
                              >
                                  <item.icon size={16} /> <span className="text-sm">{item.title}</span>
                              </a>
                          ))}

                          {link.name === 'Portfólio' && NAV_CONTENT.portfolio.map((item) => (
                              <a 
                                key={item.title} 
                                href={item.href} 
                                onClick={(e) => {
                                    handleScroll(e, item.href);
                                    if (item.category) onNavigatePortfolio(item.category as ProjectCategory);
                                }} 
                                className="flex items-center gap-3 text-gray-400 hover:text-primary-tech cursor-pointer"
                              >
                                  <item.icon size={16} /> <span className="text-sm">{item.title}</span>
                              </a>
                          ))}

                          {link.name === 'Contato' && NAV_CONTENT.contato.map((item) => (
                              <a 
                                key={item.title} 
                                href={item.href} 
                                onClick={(e) => handleScroll(e, item.href)} 
                                className="flex items-center gap-3 text-gray-400 hover:text-accent-cyan cursor-pointer"
                              >
                                  <item.icon size={16} /> <span className="text-sm">{item.title}</span>
                              </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <a
                href="#newsletter"
                onClick={(e) => handleScroll(e, '#newsletter')}
                className="text-lg font-medium text-primary-art text-center mt-4 border border-primary-art/30 rounded-full py-3 cursor-pointer"
              >
                Clube CRIA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;