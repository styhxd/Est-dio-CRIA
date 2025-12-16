import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const categories: ProjectCategory[] = [
    'All', 
    'Illustration', 
    'Music', 
    'Video', 
    'Design', 
    'Web', 
    'Restoration', 
    'Editorial', 
    'Animation'
];

interface PortfolioProps {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ activeCategory, setActiveCategory }) => {
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-obsidian border-t border-white/5 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-display font-bold mb-4">Galeria de <span className="text-primary-art">Projetos</span></h2>
                <p className="text-gray-400 max-w-md">Uma seleção curada de trabalhos onde exploramos os limites da criatividade.</p>
            </div>
        </div>

        {/* Filters - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar mask-gradient-right">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap ${
                        activeCategory === cat 
                        ? 'bg-white text-black border-white' 
                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/40 hover:text-white'
                    }`}
                >
                    {cat === 'All' ? 'Todos' : cat}
                </button>
            ))}
        </div>

        {/* Masonry-ish Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.id}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-default bg-layer border border-white/5"
                    >
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-primary-tech text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                            <h3 className="text-xl font-bold font-display">{project.title}</h3>
                            <p className="text-sm text-gray-300">{project.client}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;