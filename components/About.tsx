import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Sliders, Music, Disc, ArrowRight, Zap, Speaker, Headphones, Radio } from 'lucide-react';

const About: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Pré-Produção',
      desc: 'Análise de referências, definição de tom, arranjos e estrutura da música. Onde a "demo" ganha corpo.',
      icon: Music,
      color: 'text-accent-cyan',
      border: 'border-accent-cyan/20'
    },
    {
      id: '02',
      title: 'Captação',
      desc: 'Gravação em sala tratada com microfones Neumann e AKG. Vocal coaching durante a sessão para o melhor take.',
      icon: Mic2,
      color: 'text-primary-tech',
      border: 'border-primary-tech/20'
    },
    {
      id: '03',
      title: 'Mix & Master',
      desc: 'A mágica do estúdio. Equilíbrio de frequências, compressão, efeitos e loudness competitivo para o mercado.',
      icon: Sliders,
      color: 'text-primary-art',
      border: 'border-primary-art/20'
    },
    {
      id: '04',
      title: 'Lançamento',
      desc: 'Upload para Spotify, Apple Music e Deezer. Registro de ISRC e estratégia de pitching para playlists.',
      icon: Disc,
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
                    <span className="text-primary-art font-bold tracking-widest text-xs uppercase mb-4 block">Sonic Branding</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                        Mais que um estúdio.<br />
                        Um laboratório de <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-tech to-accent-cyan">Identidade Sonora</span>.
                    </h2>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        No Estúdio CRIA, não apenas apertamos o botão "REC". Nós esculpimos o som. Entendemos que cada artista tem uma assinatura única e nossa missão é traduzir emoção em frequências. Do analógico ao digital, buscamos a perfeição técnica sem matar a alma da música.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit border border-white/10 text-primary-tech">
                                <Speaker size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Híbrido Analógico/Digital</h4>
                                <p className="text-gray-400 text-sm">O calor das válvulas com a precisão dos plugins modernos.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-white/5 rounded-lg h-fit border border-white/10 text-primary-art">
                                <Headphones size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Acústica Precision</h4>
                                <p className="text-gray-400 text-sm">Sala projetada matematicamente para resposta plana.</p>
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
                            src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop" 
                            alt="Estúdio CRIA Control Room" 
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                                <p className="text-lg font-display font-bold italic text-white mb-2">"Se soa bem, é bom."</p>
                                <p className="text-sm text-primary-art font-medium">— Joe Meek (Filosofia CRIA)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* METHODOLOGY SECTION */}
            <div id="methodology" className="scroll-mt-28 mb-32">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent-cyan font-bold tracking-widest text-xs uppercase mb-2 block">Workflow de Produção</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Do Rascunho ao Streaming</h2>
                    <p className="text-gray-400">Nosso processo garante que sua música saia da cabeça e chegue aos ouvidos do mundo com qualidade de rádio.</p>
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

            {/* EDUCATION SECTION - Mentoria de Áudio */}
            <div id="education" className="scroll-mt-28">
                <div className="bg-gradient-to-r from-obsidian to-layer border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
                                <Zap size={14} className="text-yellow-500" />
                                <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">Academy CRIA</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Domine as Ferramentas <br/>da Indústria</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                Quer aprender a produzir seus próprios beats ou mixar suas faixas? Oferecemos <strong>mentorias presenciais e online</strong>.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Aprenda Ableton Live, Pro Tools, técnicas de microfonação e Music Business. Sem segredos, direto da nossa mesa de som para a sua.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    Quero Aprender a Produzir <ArrowRight size={18}/>
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative">
                             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-primary-art/10 blur-3xl rounded-full"></div>
                             
                             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl relative">
                                <div className="bg-obsidian/80 rounded-lg p-6">
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-6 text-center">Tracks de Ensino</h4>
                                    
                                    <div className="space-y-3">
                                        {/* Mentoria 1 */}
                                        <div className="p-4 rounded-lg bg-layer border border-white/5 hover:border-yellow-500/50 transition-colors cursor-pointer group flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-white/5 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                                <Sliders size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Mixagem In-The-Box</h5>
                                                <p className="text-xs text-gray-500">EQ, Compressão e Automação no Pro Tools.</p>
                                            </div>
                                        </div>

                                        {/* Mentoria 2 */}
                                        <div className="p-4 rounded-lg bg-layer border border-white/5 hover:border-primary-art/50 transition-colors cursor-pointer group flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-white/5 text-primary-art group-hover:bg-primary-art group-hover:text-white transition-all">
                                                <Music size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-white group-hover:text-primary-art transition-colors">Beatmaking & Produção</h5>
                                                <p className="text-xs text-gray-500">Do sample ao arranjo no Ableton/FL Studio.</p>
                                            </div>
                                        </div>

                                        {/* Mentoria 3 */}
                                        <div className="p-4 rounded-lg bg-layer border border-white/5 hover:border-accent-cyan/50 transition-colors cursor-pointer group flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-white/5 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white transition-all">
                                                <Radio size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-white group-hover:text-accent-cyan transition-colors">Music Business</h5>
                                                <p className="text-xs text-gray-500">Direitos autorais, ECAD e Distribuição.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                                        <p className="text-xs text-gray-500 mb-2">Turmas presenciais reduzidas.</p>
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