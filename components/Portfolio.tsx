import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const categories: ProjectCategory[] = [
    'All', 
    'Trap',
    'Funk',
    'Hip Hop', 
    'Pop', 
    'Electronic', 
    'Rock/Alt', 
    'MPB', 
    'Mix & Master', 
    'Sound Design', 
    'Podcasts'
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
    <section className="pt-32 pb-24 bg-obsidian min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-3 py-1 mb-4 rounded-full bg-layer border border-white/10 text-xs font-bold uppercase tracking-wider text-primary-tech"
                >
                  Nosso Trabalho
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Discografia & <span className="text-primary-art">Produções</span></h2>
                <p className="text-gray-400 max-w-md">Ouça alguns dos artistas, MCs e bandas que já passaram pelos nossos microfones e consoles.</p>
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
                        className="group relative aspect-square rounded-xl overflow-hidden cursor-default bg-layer border border-white/5"
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
                            <div className="mt-4 flex gap-2">
                                <span className="text-xs border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">Spotify</span>
                                <span className="text-xs border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">Apple Music</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
                <div className="col-span-full py-12 text-center text-gray-500">
                    <p>Nenhum projeto encontrado nesta categoria.</p>
                </div>
            )}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;