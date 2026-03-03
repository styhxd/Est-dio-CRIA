import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Sliders, Film, Camera, ArrowRight, Zap, MonitorPlay, Image as ImageIcon, Radio, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Briefing & Planejamento',
      desc: 'Alinhamento detalhado de expectativas, referências e cronograma para garantir que o projeto atenda perfeitamente aos seus objetivos.',
      icon: MonitorPlay,
      color: 'text-accent-cyan',
      border: 'border-accent-cyan/20'
    },
    {
      id: '02',
      title: 'Produção & Captação',
      desc: 'Execução técnica com equipamentos de ponta e equipe especializada, seja em estúdio ou em locações externas.',
      icon: Camera,
      color: 'text-primary-tech',
      border: 'border-primary-tech/20'
    },
    {
      id: '03',
      title: 'Pós-Produção',
      desc: 'Edição, color grading, mixagem e finalização com rigoroso controle de qualidade em cada etapa do processo.',
      icon: Sliders,
      color: 'text-primary-art',
      border: 'border-primary-art/20'
    },
    {
      id: '04',
      title: 'Entrega Final',
      desc: 'Arquivos exportados nos formatos ideais para cada plataforma, cumprindo rigorosamente os prazos estabelecidos.',
      icon: Film,
      color: 'text-white',
      border: 'border-white/20'
    }
  ];

  return (
    <section className="bg-layer relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-tech/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 py-24">
            
            {/* COMPANY OVERVIEW SECTION */}
            <div id="about" className="grid md:grid-cols-2 gap-16 items-center mb-32 scroll-mt-28">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-tech font-bold tracking-widest text-xs uppercase mb-4 block">Sobre o Estúdio CRIA</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                        Estrutura completa para <br />
                        <span className="text-white">produções de alto nível.</span>
                    </h2>
                    
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        O Estúdio CRIA é uma produtora multimídia focada em entregar resultados excepcionais em áudio, vídeo, fotografia e animação. Combinamos infraestrutura técnica avançada com uma equipe de profissionais experientes para atender marcas, artistas e empresas com máxima eficiência e confiabilidade.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={20} className="text-primary-tech" />
                            <span>Equipe técnica altamente qualificada</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={20} className="text-primary-tech" />
                            <span>Equipamentos de última geração (Áudio e Vídeo)</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={20} className="text-primary-tech" />
                            <span>Rigoroso cumprimento de prazos e cronogramas</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={20} className="text-primary-tech" />
                            <span>Atendimento personalizado para cada projeto</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                            alt="Infraestrutura do Estúdio CRIA" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-obsidian/20" />
                    </div>
                </motion.div>
            </div>

            {/* METHODOLOGY SECTION */}
            <div id="methodology" className="scroll-mt-28 mb-32">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary-tech font-bold tracking-widest text-xs uppercase mb-2 block">Nosso Processo</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Metodologia de Trabalho</h2>
                    <p className="text-gray-400">Um fluxo de trabalho estruturado para garantir previsibilidade, qualidade e entrega no prazo em todos os projetos.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 bg-obsidian border ${step.border} rounded-xl relative`}
                        >
                            <span className="text-4xl font-display font-bold text-white/5 absolute top-4 right-4 select-none">{step.id}</span>
                            <div className={`mb-4 ${step.color}`}>
                                <step.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
};

export default About;