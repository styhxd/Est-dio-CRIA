import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  
  // Format: Country Code + Area Code + Number (No special chars)
  const phoneNumber = "5511944677759";
  const message = "Olá! Vim pelo site do Estúdio CRIA e gostaria de agendar uma gravação/produção.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show the engaging bubble after 3 minutes (true easter egg for super engaged users)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 180000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Surprise: "Live" Chat Bubble Notification */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="pointer-events-auto bg-white text-obsidian p-4 rounded-2xl rounded-br-sm shadow-2xl shadow-green-500/20 max-w-[260px] relative border border-white/20"
          >
            <button 
              onClick={(e) => { e.preventDefault(); setShowBubble(false); }}
              className="absolute -top-2 -left-2 bg-gray-100 text-gray-500 hover:bg-red-500 hover:text-white rounded-full p-1 transition-colors shadow-sm"
            >
              <X size={12} />
            </button>
            
            <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Engenheiro Online
                </span>
                <p className="text-sm font-medium leading-relaxed text-gray-800">
                   Quer gravar seu som? <br/>
                   <span className="font-bold text-primary-tech">Vamos agendar seu horário.</span> 🎙️
                </p>
            </div>
            
            {/* Pointer triangle */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45 border-r border-b border-transparent"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] group-hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-shadow duration-500">
          <MessageCircle size={32} fill="white" className="text-white" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-obsidian animate-bounce shadow-sm">
            1
          </div>
          
          {/* Radar/Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
        </div>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;