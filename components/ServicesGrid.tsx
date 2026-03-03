import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-layer scroll-mt-20">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-tech font-bold tracking-widest text-sm uppercase mb-3 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Soluções Completas em Multimídia</h2>
          <p className="text-gray-400 text-lg">
            Oferecemos uma gama completa de serviços para atender todas as necessidades do seu projeto, com excelência e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-obsidian border border-white/10 rounded-xl p-8 hover:border-primary-tech/50 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary-${service.highlightColor} group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;