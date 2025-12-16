import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronDown, Send, ArrowRight, Plus } from 'lucide-react';

const FAQS = [
  {
    question: "Como funciona o processo criativo?",
    answer: "Trabalhamos em 4 etapas: Imersão (Briefing e Pesquisa), Estratégia (Conceito), Criação (Design e Desenvolvimento) e Entrega (Lançamento e Suporte). Mantemos você envolvido em cada aprovação."
  },
  {
    question: "Vocês atendem clientes internacionais?",
    answer: "Sim! Já entregamos projetos para marcas na Europa e América do Norte. Nossa equipe é fluente em inglês e adaptada a fusos horários globais."
  },
  {
    question: "Vocês ajudam a publicar livros?",
    answer: "Com certeza! Cuidamos de tudo: revisão, diagramação, capa, registro ISBN e distribuição."
  }
];

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="contact" className="py-24 bg-obsidian scroll-mt-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-cyan font-bold tracking-widest text-sm uppercase mb-3 block">Vamos Conversar</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pronto para <span className="text-primary-art">transformar</span> sua marca?</h2>
          <p className="text-gray-400 text-lg">
            De ilustrações a produção musical, de sites a livros. Preencha o formulário e vamos começar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Form Side */}
          <div className="bg-layer border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-tech/10 rounded-full blur-3xl group-hover:bg-primary-tech/20 transition-colors"></div>
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Nome</label>
                  <input type="text" placeholder="Seu nome" className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-tech focus:ring-1 focus:ring-primary-tech outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Empresa/Artista</label>
                  <input type="text" placeholder="Sua marca" className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-tech focus:ring-1 focus:ring-primary-tech outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-tech focus:ring-1 focus:ring-primary-tech outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Tipo de Projeto</label>
                <select className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-tech focus:ring-1 focus:ring-primary-tech outline-none transition-all appearance-none cursor-pointer">
                  <option>Selecione uma opção</option>
                  <option>Ilustração Digital</option>
                  <option>Produção Musical</option>
                  <option>Vídeo & Audiovisual</option>
                  <option>Design Gráfico</option>
                  <option>Web Design</option>
                  <option>Restauração de Fotos</option>
                  <option>Publicação de Livro</option>
                  <option>Animação 2D</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Mensagem</label>
                <textarea rows={4} placeholder="Conte um pouco sobre sua ideia..." className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary-tech focus:ring-1 focus:ring-primary-tech outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-primary-tech to-purple-800 rounded-lg font-bold text-white shadow-lg hover:shadow-primary-tech/25 transition-all flex items-center justify-center gap-2 group">
                Enviar Mensagem <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            
            {/* FAQ Section */}
            <div id="faq" className="scroll-mt-32">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="p-2 bg-white/5 rounded-lg text-accent-cyan"><Plus size={20} /></span>
                Dúvidas Frequentes
              </h3>
              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <div key={index} className="border-b border-white/5 pb-4">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between text-left py-2 hover:text-primary-tech transition-colors"
                    >
                      <span className="font-medium text-lg">{faq.question}</span>
                      <ChevronDown size={20} className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 pt-2 pb-2 leading-relaxed text-sm">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Careers */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div id="location" className="p-6 bg-layer border border-white/5 rounded-xl scroll-mt-32">
                <div className="text-primary-art mb-4"><MapPin size={32} /></div>
                <h4 className="font-bold text-xl mb-2">Base Criativa</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Av. Paulista, 1234 - Bela Vista<br/>
                  São Paulo - SP, Brasil
                </p>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-bold text-white border-b border-primary-art/50 hover:text-primary-art transition-colors pb-0.5 cursor-pointer">Ver no Mapa</a>
              </div>

              <div id="careers" className="p-6 bg-layer border border-white/5 rounded-xl scroll-mt-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                   <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-transparent rounded-full"></div>
                </div>
                <h4 className="font-bold text-xl mb-2">Carreiras</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Estamos sempre em busca de talentos visionários. Designers, Devs e Motion Artists.
                </p>
                <a href="mailto:vagas@estudiocria.com" className="inline-flex items-center gap-2 text-sm font-bold text-accent-cyan hover:text-white transition-colors">
                  Enviar Portfólio <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;