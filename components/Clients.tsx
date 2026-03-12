import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-layer border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-tech/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-primary-tech uppercase tracking-widest mb-4 font-bold">Reconhecimento</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Clientes e Prêmios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Marcas que confiam no nosso trabalho e reconhecimentos que marcam nossa trajetória.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENTS.map((client) => (
            <div 
              key={client.id} 
              className="group p-8 rounded-2xl bg-obsidian/50 border border-white/10 hover:border-primary-tech/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center text-center min-h-[140px] shadow-lg hover:shadow-primary-tech/10"
            >
              <h3 className="text-sm md:text-base font-display font-bold text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;