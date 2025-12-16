import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const highlightClass = {
    tech: 'group-hover:text-primary-tech group-hover:border-primary-tech/50',
    art: 'group-hover:text-primary-art group-hover:border-primary-art/50',
    cyan: 'group-hover:text-accent-cyan group-hover:border-accent-cyan/50',
  }[service.highlightColor];

  const bgHighlight = {
    tech: 'group-hover:bg-primary-tech/5',
    art: 'group-hover:bg-primary-art/5',
    cyan: 'group-hover:bg-accent-cyan/5',
  }[service.highlightColor];

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 bg-layer border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 scroll-mt-32 h-full flex flex-col"
    >
      <div className={`absolute inset-0 transition-colors duration-500 ${bgHighlight}`}></div>
      
      <div className="relative z-10 flex-grow">
        <div className={`mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 transition-colors duration-500 ${highlightClass}`}>
          <service.icon size={28} />
        </div>
        
        <h3 className="text-xl md:text-2xl font-display font-bold mb-3">{service.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-obsidian scroll-mt-28">
      <div className="container mx-auto px-6">
        
        {/* Updated grid for 8 items: 1 column mobile, 2 columns tablet, 4 columns desktop */}
        {/* Grid moved to top to show services immediately */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr mb-16">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Text moved to bottom as per user request */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto border-t border-white/5 pt-12"
        >
          <span className="text-primary-tech font-bold tracking-wider uppercase text-sm mb-3 block">Ecossistema Digital</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Soluções Criativas 360 Graus</h2>
          <p className="text-gray-400 text-lg">
            Um ecossistema completo. Da música à ilustração, do código à publicação editorial. Tudo em um só lugar para alavancar sua marca.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesGrid;