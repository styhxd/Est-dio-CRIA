import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)]">
        <MessageCircle size={28} />
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black animate-bounce">
          1
        </div>
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-75 animate-ping"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        Fale com a gente
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
