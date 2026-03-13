import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
    onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: PageView) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian pt-12 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-5">
            <img 
              src="/logo.svg" 
              alt="Estúdio CRIA" 
              className="h-20 md:h-28 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md text-sm">
              Potencializamos marcas e artistas com produção multimídia de nível global. Do roteiro à tela, do acorde ao streaming.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-layer flex items-center justify-center hover:bg-primary-tech hover:text-white transition-all text-gray-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-layer flex items-center justify-center hover:bg-primary-tech hover:text-white transition-all text-gray-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-layer flex items-center justify-center hover:bg-primary-tech hover:text-white transition-all text-gray-400">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Menu</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-primary-art transition-colors">Serviços Multimídia</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'portfolio')} className="hover:text-primary-art transition-colors">Portfólio</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'about')} className="hover:text-primary-art transition-colors">Sobre Nós</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'contact')} className="hover:text-primary-art transition-colors">Iniciar Projeto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" onClick={(e) => handleNav(e, 'terms')} className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'privacy')} className="hover:text-white transition-colors">Política de Cancelamento</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'copyright')} className="hover:text-white transition-colors">Copyright</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          <p>© 2024 Estúdio CRIA. Produção Audiovisual & Design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;