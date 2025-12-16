import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Heart, Layers, Search, PenTool, Rocket, BookOpen, Users, Lightbulb, Zap, Mic2, Clapperboard, Palette, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Imersão',
      desc: 'Mergulhamos no seu universo. Pesquisa de mercado, benchmarking e workshops de co-criação.',
      icon: Search,
      color: 'text-accent-cyan',
      border: 'border-accent-cyan/20'
    },
    {
      id: '02',
      title: 'Estratégia',
      desc: 'Definimos o caminho. Planejamento tático, tom de voz e arquitetura de informação.',
      icon: Lightbulb,
      color: 'text-primary-tech',
      border: 'border-primary-tech/20'
    },
    {
      id: '03',
      title: 'Criação',
      desc: 'A mágica acontece. Design visual, desenvolvimento de código, modelagem 3D e animação.',
      icon: PenTool,
      color: 'text-primary-art',
      border: 'border-primary-art/20'
    },
    {
      id: '04',
      title: 'Entrega',
      desc: 'Lançamento e sustentação. Garantimos que tudo funcione perfeitamente no mundo real.',
      icon: Rocket,
      color: 'text-white',
      border: 'border-white/20'
    }
  ];

  return (
    <section className="bg-layer relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-tech/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 py-24">
            
            {/* MANIFESTO SECTION */}
            <div id="manifesto" className="grid md:grid-cols-2 gap-16 items-center mb-32 scroll-mt-28">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary-art font-bold tracking-widest text-xs uppercase mb-4 block">O Manifesto</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                        Mais que uma produtora.<br />
                        Seu parceiro de <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-tech to-accent-cyan">Inovação Criativa</span>.
                    </h2>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        No Estúdio CRIA, acreditamos que a comunicação moderna exige a fusão de três pilares: identidade forte, tecnologia de ponta e conexão humana. Não criamos apenas "conteúdo"; construímos ecossistemas digitais que posicionam sua marca no futuro.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit border border-white/10 text-primary-tech">
                                <Layers size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Visão Omnichannel</h4>
                                <p className="text-gray-400 text-sm">Sua marca unificada no físico, digital e metaverso.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit border border-white/10 text-primary-art">
                                <Heart size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Abordagem Tailor-made</h4>
                                <p className="text-gray-400 text-sm">Soluções artesanais para problemas complexos.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <img 
                            src="https://picsum.photos/600/800?grayscale" 
                            alt="Estúdio CRIA Team" 
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                                <p className="text-lg font-display font-bold italic text-white mb-2">"Criar é dar forma ao futuro."</p>
                                <p className="text-sm text-primary-art font-medium">— DNA Estúdio CRIA</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* METHODOLOGY SECTION */}
            <div id="methodology" className="scroll-mt-28 mb-32">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent-cyan font-bold tracking-widest text-xs uppercase mb-2 block">Como Trabalhamos</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Do Caos à Arte</h2>
                    <p className="text-gray-400">Nosso processo é estruturado para garantir criatividade com propósito e entregas consistentes.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 bg-obsidian border ${step.border} rounded-xl relative group hover:-translate-y-2 transition-transform duration-300`}
                        >
                            <span className="text-6xl font-display font-bold text-white/5 absolute top-2 right-4 select-none">{step.id}</span>
                            <div className={`mb-4 ${step.color}`}>
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* EDUCATION SECTION - Como é que CRIA */}
            <div id="education" className="scroll-mt-28">
                <div className="bg-gradient-to-r from-obsidian to-layer border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
                                <Zap size={14} className="text-yellow-500" />
                                <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">Como é que CRIA</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Domine o Workflow <br/>da Indústria</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                Quer aprender a criar no nível do Estúdio CRIA? Oferecemos <strong>mentorias particulares premium</strong> onde abrimos nossa caixa preta. 
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Sem aulas gravadas genéricas. Você terá sessões individuais com nossos especialistas para dominar as ferramentas e técnicas que usamos em projetos reais. Escolha sua área e acelere sua carreira.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    Agendar Aula Particular <ArrowRight size={18}/>
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative">
                             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-primary-art/10 blur-3xl rounded-full"></div>
                             
                             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl relative">
                                <div className="bg-obsidian/80 rounded-lg p-6">
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-6 text-center">Menu de Mentorias</h4>
                                    
                                    <div className="space-y-3">
                                        {/* Mentoria 1 */}
                                        <div className="p-4 rounded-lg bg-layer border border-white/5 hover:border-yellow-500/50 transition-colors cursor-pointer group flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-white/5 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                                <Clapperboard size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Edição & Motion</h5>
                                                <p className="text-xs text-gray-500">Premiere, After Effects e Color Grading.</p>
                                            </div>
                                        </div>

                                        {/* Mentoria 2 */}
                                        <div className="p-4 rounded-lg bg-layer border border-white/5 hover:border-primary-art/50 transition-colors cursor-pointer group flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-white/5 text-primary-art group-hover:bg-primary-art group-hover:text-white transition-all">
                                                <Palette size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-white group-hover:text-primary-art transition-colors">Ilustração Digital</h5>
                                                <p className="text-xs text-gray-500">Concept Art, Desenho Vetorial e Pintura.</p>
                                            </div>
                                        </div>

                                        {/* Mentoria 3 */}
                                        <div className="p-4 rounded-lg bg-layer border border-white/5 hover:border-accent-cyan/50 transition-colors cursor-pointer group flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-white/5 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white transition-all">
                                                <Mic2 size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-white group-hover:text-accent-cyan transition-colors">Produção Musical</h5>
                                                <p className="text-xs text-gray-500">Beatmaking, Mixagem e Masterização.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                                        <p className="text-xs text-gray-500 mb-2">Vagas limitadas por mês.</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default About;