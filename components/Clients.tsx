import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 bg-layer border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-10 font-medium">Quem confia no nosso processo</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
          {CLIENTS.map((client) => (
            <div key={client.id} className="text-xl md:text-2xl font-display font-bold text-white hover:text-primary-art transition-colors cursor-default">
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;