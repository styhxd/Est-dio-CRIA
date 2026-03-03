import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: PageView) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-obsidian pt-24 pb-12">
      {/* Reliable Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian/85 z-10" /> {/* Dark Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
          alt="Estúdio Multimídia" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        {/* Gradient fade to bottom to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-obsidian to-transparent z-20" />
      </div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 md:mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-tech"></span>
            <span className="text-[10px] md:text-xs font-medium text-gray-300 uppercase tracking-[0.2em]">Estúdio Multimídia</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Produção Multimídia <br className="hidden sm:block" />
            <span className="text-primary-tech">
              de Alta Performance.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Áudio, vídeo, animação e fotografia. Estrutura completa e equipe especializada para entregar o melhor resultado para o seu projeto com excelência e pontualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#"
              onClick={(e) => handleNav(e, 'portfolio')}
              className="px-8 py-4 bg-primary-tech text-white rounded-lg font-bold text-sm uppercase tracking-widest transition-all hover:bg-primary-tech/90 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Ver Portfólio <ArrowRight size={18} />
            </a>
            
            <a
              href="#"
              onClick={(e) => handleNav(e, 'services')}
              className="px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm w-full sm:w-auto"
            >
              <Play size={18} className="text-primary-tech" />
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;