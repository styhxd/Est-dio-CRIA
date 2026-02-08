import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!href || href === '#') return;
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-obsidian">
      {/* Background Ambience - Adjusted to look more like 'sound waves' */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-tech/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-art/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Gravação Ao Vivo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Sua Música <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-tech to-primary-art">Em Outro Nível.</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            O Estúdio CRIA é a casa do áudio de alta fidelidade. Mixagem analógica, masterização para streaming e produção musical que respeita sua identidade artística.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              onClick={(e) => handleScroll(e, '#portfolio')}
              className="px-8 py-4 bg-gradient-to-r from-primary-tech to-purple-800 text-white rounded-lg font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Ouvir Produções <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="px-8 py-4 bg-layer border border-white/10 text-white rounded-lg font-bold hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              Agendar Sessão
            </a>
          </div>
        </motion.div>

        {/* Abstract 3D/Visual Placeholder - Music Vibe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                 {/* Image of a Mixing Console or Studio Mic */}
                 <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                    alt="Mixing Console" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
                 
                 {/* Floating UI Cards - Music Stats */}
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 p-4 bg-layer/80 backdrop-blur-md border border-white/10 rounded-xl max-w-xs"
                 >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary-art flex items-center justify-center">
                            <Mic2 size={16} className="text-white"/>
                        </div>
                        <span className="text-sm font-bold">On Air</span>
                    </div>
                    <p className="text-xs text-gray-400">Captação Valvulada & Pré-amps Class A.</p>
                 </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;