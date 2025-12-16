import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
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
    <footer className="bg-obsidian pt-24 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-display font-bold mb-6">ESTÚDIO<span className="text-primary-tech">CRIA</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transformamos ideias complexas em experiências visuais memoráveis. Da consultoria à entrega final, somos parceiros na construção do seu legado digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-layer flex items-center justify-center hover:bg-primary-tech hover:text-white transition-all text-gray-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-layer flex items-center justify-center hover:bg-primary-tech hover:text-white transition-all text-gray-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-layer flex items-center justify-center hover:bg-primary-tech hover:text-white transition-all text-gray-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-bold mb-6">Mapa do Site</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-primary-art transition-colors cursor-pointer">Serviços</a></li>
              <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="hover:text-primary-art transition-colors cursor-pointer">Portfólio</a></li>
              <li><a href="#manifesto" onClick={(e) => handleScroll(e, '#manifesto')} className="hover:text-primary-art transition-colors cursor-pointer">Sobre a Agência</a></li>
              <li><a href="#careers" onClick={(e) => handleScroll(e, '#careers')} className="hover:text-primary-art transition-colors cursor-pointer">Carreiras</a></li>
            </ul>
          </div>

          {/* Newsletter / Clube */}
          <div id="newsletter" className="lg:col-span-4">
            <h4 className="text-white font-bold mb-2">Clube CRIA</h4>
            <p className="text-sm text-gray-500 mb-6">Insights semanais sobre Design, Tech e Futuro.</p>
            
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-layer border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-art/50 transition-colors"
              />
              <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-primary-art hover:text-white transition-all duration-300">
                Entrar para o Clube
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <p>© 2024 Estúdio CRIA. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;