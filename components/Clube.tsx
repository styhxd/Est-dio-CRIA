import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap, Lock, Star, CheckCircle2 } from 'lucide-react';

const Clube: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-obsidian min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6"
          >
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">Comunidade Exclusiva</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Clube <span className="text-primary-art">CRIA</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Entre para o backstage da indústria. Receba drum kits exclusivos, presets de mixagem, dicas de carreira e descontos em sessões de estúdio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Card Form */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-layer border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-primary-art/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-2 relative z-10">Garanta seu acesso</h3>
            <p className="text-gray-400 text-sm mb-8 relative z-10">Junte-se a mais de 2.000 produtores e artistas.</p>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Nome Artístico</label>
                <input type="text" className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 focus:border-primary-art outline-none transition-colors text-white" placeholder="MC..." />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">E-mail Principal</label>
                <input type="email" className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 focus:border-primary-art outline-none transition-colors text-white" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Interesse</label>
                <select className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 focus:border-primary-art outline-none transition-colors text-white cursor-pointer">
                    <option>Beatmaking & Produção</option>
                    <option>Carreira Artística (MC/Cantor)</option>
                    <option>Engenharia de Áudio</option>
                </select>
              </div>
              
              <button className="w-full py-4 bg-primary-art hover:bg-red-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-red-500/25 mt-4">
                Entrar para o Clube
              </button>
              <p className="text-xs text-center text-gray-600 mt-4 flex items-center justify-center gap-1">
                <Lock size={12} /> Seus dados estão seguros. Sem spam.
              </p>
            </form>
          </motion.div>

          {/* Benefits List */}
          <div className="space-y-8">
            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-tech border border-white/10 shrink-0">
                    <Zap size={24} />
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Assets Gratuitos Mensais</h4>
                    <p className="text-gray-400 text-sm">Todo mês enviamos um pack com Drum Kits (Trap/Funk/Boombap), Samples e Presets de VSTs curados pelos nossos engenheiros.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan border border-white/10 shrink-0">
                    <CheckCircle2 size={24} />
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Workshops & Masterclasses</h4>
                    <p className="text-gray-400 text-sm">Acesso antecipado e descontos para nossos cursos presenciais e online sobre Mixagem, Music Business e Produção.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-yellow-500 border border-white/10 shrink-0">
                    <Mail size={24} />
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Networking Real</h4>
                    <p className="text-gray-400 text-sm">Fique sabendo de eventos do estúdio, cyphers e oportunidades de colaboração com outros artistas do clube.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clube;