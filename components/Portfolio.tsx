import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Music, X, ChevronLeft, ChevronRight, SplitSquareHorizontal, Disc } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';

const categories: ProjectCategory[] = [
    'All', 
    'Animação 2D',
    'Fotografia',
    'Fotos Restauradas', 
    'Música', 
    'Vídeos'
];

interface PortfolioProps {
  activeCategory: ProjectCategory;
  setActiveCategory: (category: ProjectCategory) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ activeCategory, setActiveCategory }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [compareSliderPos, setCompareSliderPos] = useState(50);
  const [mediaError, setMediaError] = useState(false);
  const compareRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleCompareMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!compareRef.current) return;
    const rect = compareRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setCompareSliderPos((x / rect.width) * 100);
  };

  const renderMediaIcon = (type?: string) => {
    switch (type) {
        case 'video': return <Play size={16} />;
        case 'audio': return <Music size={16} />;
        case 'music_release': return <Disc size={16} />;
        case 'compare': return <SplitSquareHorizontal size={16} />;
        case 'gallery': return <ImageIcon size={16} />;
        default: return <ImageIcon size={16} />;
    }
  };

  const renderMediaLabel = (type?: string) => {
    switch (type) {
        case 'video': return 'Assistir';
        case 'audio': return 'Ouvir';
        case 'music_release': return 'Ouvir Lançamento';
        case 'compare': return 'Ver Restauração';
        case 'gallery': return 'Ver Galeria';
        default: return 'Ver Imagem';
    }
  };

  const getFallbackUrl = (url: string) => {
      if (!url) return '';
      const idMatch = url.match(/id=([^&]+)/);
      if (idMatch && idMatch[1]) {
          return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
      }
      return url;
  };

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
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Portfólio <span className="text-primary-art">Multimídia</span></h2>
                <p className="text-gray-400 max-w-md">Explore nossos trabalhos em áudio, vídeo, animação e fotografia. Arte em todas as suas formas.</p>
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
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
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
                        onClick={() => {
                            setSelectedProject(project);
                            setGalleryIndex(0);
                            setCompareSliderPos(50);
                            setMediaError(false);
                        }}
                        className="group relative rounded-xl overflow-hidden cursor-pointer bg-layer border border-white/5 break-inside-avoid"
                    >
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (!target.src.includes('unsplash')) {
                                    target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
                                }
                            }}
                        />
                        
                        {/* Media Type Icon */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 text-white">
                            {renderMediaIcon(project.mediaType)}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-primary-tech text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                            <h3 className="text-xl font-bold font-display">{project.title}</h3>
                            <p className="text-sm text-gray-300">{project.client}</p>
                            <div className="mt-4 flex gap-2">
                                <span className="text-xs border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-1">
                                    {renderMediaLabel(project.mediaType)}
                                </span>
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

      {/* Media Modal */}
      <AnimatePresence>
        {selectedProject && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
                onClick={() => setSelectedProject(null)}
                onContextMenu={(e) => e.preventDefault()}
            >
                <button 
                    className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
                    onClick={() => setSelectedProject(null)}
                >
                    <X size={24} />
                </button>

                <motion.div 
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative max-w-6xl w-full max-h-[90vh] bg-layer rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex-grow overflow-hidden bg-black flex items-center justify-center relative min-h-[50vh] md:min-h-[60vh]">
                        {/* Anti-download overlay */}
                        <div className="absolute inset-0 z-40 pointer-events-none" onContextMenu={(e) => e.preventDefault()}></div>

                        {selectedProject.mediaType === 'video' && selectedProject.mediaUrl && (
                            mediaError ? (
                                <div className="w-full max-w-4xl aspect-video relative z-30 rounded-xl overflow-hidden shadow-2xl">
                                    <iframe 
                                        src={getFallbackUrl(selectedProject.mediaUrl)} 
                                        className="absolute inset-0 w-full h-full border-0" 
                                        allow="autoplay"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <video 
                                    src={selectedProject.mediaUrl} 
                                    poster={selectedProject.imageUrl}
                                    controls 
                                    autoPlay 
                                    controlsList="nodownload nofullscreen noremoteplayback"
                                    disablePictureInPicture
                                    className="w-full h-full max-h-[80vh] object-contain relative z-30" 
                                    onContextMenu={(e) => e.preventDefault()}
                                    onError={() => setMediaError(true)}
                                />
                            )
                        )}

                        {selectedProject.mediaType === 'audio' && selectedProject.mediaUrl && (
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-layer to-obsidian relative z-30">
                                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-64 h-64 object-cover rounded-xl shadow-2xl mb-8" draggable={false} />
                                {mediaError ? (
                                    <iframe 
                                        src={getFallbackUrl(selectedProject.mediaUrl)} 
                                        className="w-full max-w-md h-32 border-0 rounded-xl relative z-30" 
                                        allow="autoplay"
                                    ></iframe>
                                ) : (
                                    <audio 
                                        src={selectedProject.mediaUrl} 
                                        controls 
                                        autoPlay 
                                        controlsList="nodownload"
                                        className="w-full max-w-md" 
                                        onContextMenu={(e) => e.preventDefault()}
                                        onError={() => setMediaError(true)}
                                    />
                                )}
                            </div>
                        )}

                        {selectedProject.mediaType === 'image' && (
                            <div className="w-full h-full max-h-[80vh] flex items-center justify-center p-4">
                                <img 
                                    src={selectedProject.mediaUrl || selectedProject.imageUrl} 
                                    alt={selectedProject.title} 
                                    referrerPolicy="no-referrer" 
                                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain shadow-2xl rounded-xl relative z-30" 
                                    draggable={false}
                                />
                            </div>
                        )}

                        {selectedProject.mediaType === 'gallery' && selectedProject.galleryUrls && (
                            <div className="w-full h-full max-h-[80vh] relative flex items-center justify-center group z-30 p-4">
                                <img 
                                    src={selectedProject.galleryUrls[galleryIndex]} 
                                    alt={`${selectedProject.title} - ${galleryIndex + 1}`} 
                                    referrerPolicy="no-referrer" 
                                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain shadow-2xl rounded-xl" 
                                    draggable={false}
                                />
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                                    {galleryIndex + 1} / {selectedProject.galleryUrls.length}
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev > 0 ? prev - 1 : selectedProject.galleryUrls!.length - 1); }}
                                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev < selectedProject.galleryUrls!.length - 1 ? prev + 1 : 0); }}
                                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        )}

                        {selectedProject.mediaType === 'compare' && selectedProject.beforeImageUrl && selectedProject.afterImageUrl && (
                            <div className="w-full h-full flex items-center justify-center p-4">
                                <div 
                                    ref={compareRef}
                                    className="relative inline-block max-w-full max-h-[80vh] cursor-ew-resize select-none z-30 shadow-2xl rounded-xl overflow-hidden"
                                    onMouseMove={handleCompareMove}
                                    onTouchMove={handleCompareMove}
                                >
                                    {/* After Image (Bottom) */}
                                    <img src={selectedProject.afterImageUrl} alt="After" className="block max-w-full max-h-[80vh] w-auto h-auto pointer-events-none" draggable={false} referrerPolicy="no-referrer" />
                                    
                                    {/* Before Image (Top, Clipped) */}
                                    <img 
                                        src={selectedProject.beforeImageUrl} 
                                        alt="Before" 
                                        className="absolute top-0 left-0 w-full h-full object-fill pointer-events-none" 
                                        style={{ clipPath: `inset(0 ${100 - compareSliderPos}% 0 0)` }} 
                                        draggable={false} 
                                        referrerPolicy="no-referrer" 
                                    />
                                    
                                    <div 
                                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
                                        style={{ left: `${compareSliderPos}%`, transform: 'translateX(-50%)' }}
                                    >
                                        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                            <SplitSquareHorizontal size={16} className="text-black" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-white text-xs font-bold uppercase tracking-wider pointer-events-none">Original</div>
                                    <div className="absolute top-4 right-4 bg-primary-tech/80 backdrop-blur-md px-3 py-1 rounded-md text-white text-xs font-bold uppercase tracking-wider pointer-events-none">Restaurada</div>
                                </div>
                            </div>
                        )}

                        {selectedProject.mediaType === 'music_release' && (
                            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-br from-layer to-obsidian relative z-30 gap-8">
                                <div className="w-full md:w-1/2 flex flex-col items-center">
                                    <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-64 h-64 object-cover rounded-xl shadow-2xl mb-6" draggable={false} />
                                    <div className="flex gap-4">
                                        {selectedProject.spotifyUrl && (
                                            <a href={selectedProject.spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#1DB954] text-white rounded-full font-bold text-sm hover:bg-[#1ed760] transition-colors flex items-center gap-2">
                                                Ouvir no Spotify
                                            </a>
                                        )}
                                        {selectedProject.youtubeUrl && (
                                            <a href={selectedProject.youtubeUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold text-sm hover:bg-[#ff3333] transition-colors flex items-center gap-2">
                                                Ver no YouTube
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                                    {selectedProject.mediaUrl ? (
                                        mediaError ? (
                                            <div className="w-full aspect-video relative z-30 rounded-xl overflow-hidden shadow-2xl">
                                                <iframe 
                                                    src={getFallbackUrl(selectedProject.mediaUrl)} 
                                                    className="absolute inset-0 w-full h-full border-0" 
                                                    allow="autoplay"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        ) : (
                                            <video 
                                                src={selectedProject.mediaUrl} 
                                                poster={selectedProject.imageUrl}
                                                controls 
                                                autoPlay 
                                                controlsList="nodownload nofullscreen noremoteplayback"
                                                disablePictureInPicture
                                                className="w-full rounded-xl shadow-2xl max-h-[40vh] object-contain relative z-30" 
                                                onContextMenu={(e) => e.preventDefault()}
                                                onError={() => setMediaError(true)}
                                            />
                                        )
                                    ) : (
                                        selectedProject.galleryUrls && selectedProject.galleryUrls[0] && (
                                            <img src={selectedProject.galleryUrls[0]} alt="Preview" className="w-full rounded-xl shadow-2xl object-cover" draggable={false} />
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="p-6 bg-layer border-t border-white/10 relative z-50">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-primary-tech text-xs font-bold uppercase tracking-wider">{selectedProject.category}</span>
                            <span className="text-gray-400 text-sm">{selectedProject.client}</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display text-white">{selectedProject.title}</h3>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;