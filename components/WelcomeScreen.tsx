import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

// CONFIGURACIÓN DE IMÁGENES
// Actualizado con tus nuevos assets
const ASSETS = {
  BACKGROUND: "https://fileuk.netlify.app/BG.webp",
  LOGO: "https://fileuk.netlify.app/logo.png"
};

interface WelcomeScreenProps {
  onEnter: () => void;
  isExiting: boolean;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter, isExiting }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  // Add a subtle parallax effect to the background based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // Move up to 20px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleIngresarClick = () => {
    setShowModal(true);
    // If you ever want to actually enter the site later, uncomment the line below and remove setShowModal
    // onEnter(); 
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black transition-all duration-1000 ${isExiting ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url('${ASSETS.BACKGROUND}')`,
          transform: `scale(1.05) translate(${offset.x * -1}px, ${offset.y * -1}px)`, // Slight opposing movement
        }}
      />

      {/* Dark Overlay for readability */}
      <div className={`absolute inset-0 bg-black/50 backdrop-blur-[1px] transition-all duration-500 ${showModal ? 'bg-black/60 backdrop-blur-sm' : ''}`}></div>

      {/* Main Content Container */}
      <div className={`relative z-10 flex flex-col items-center text-center w-full max-w-4xl px-4 animate-in fade-in zoom-in duration-1000 transition-all duration-500 ${showModal ? 'blur-md opacity-40 scale-95 pointer-events-none' : ''}`}>
        
        {/* Logo Section */}
        <div className="mb-2 flex flex-col items-center">
          <img 
            src={ASSETS.LOGO}
            alt="Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-float"
          />
          <h2 className="text-amber-500 font-bold tracking-[0.2em] text-sm md:text-base mt-4 uppercase drop-shadow-md">
            Portafolio
          </h2>
        </div>

        {/* Main Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mt-4 mb-2 drop-shadow-2xl text-center leading-tight">
          Gerardo Rodríguez
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-gray-200 tracking-wide mb-16 drop-shadow-lg">
          Design Web & Digital
        </p>

        {/* Glass Button "Ingresar" */}
        <button
          onClick={handleIngresarClick}
          className="group relative px-12 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full group-hover:bg-white/20 transition-colors"></div>
          
          {/* Button Text */}
          <span className="relative z-10 text-white font-medium text-lg tracking-wide group-hover:text-amber-400 transition-colors">
            Ingresar
          </span>

          {/* Shine effect */}
          <div className="absolute top-0 -left-[100%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </button>

      </div>

      {/* APPLE STYLE LIQUID GLASS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-500">
           {/* Click outside to close */}
           <div className="absolute inset-0" onClick={() => setShowModal(false)}></div>
           
           {/* Liquid Blobs (Behind the Glass) */}
           <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
           <div className="absolute w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 pointer-events-none animate-float"></div>
           
           {/* The Glass Card */}
           <div className="relative w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 text-center shadow-2xl overflow-hidden ring-1 ring-white/10">
              
              {/* Glossy Reflection Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 z-20 backdrop-blur-md border border-white/5"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 flex flex-col items-center gap-5 pt-4">
                 
                 {/* Icon Container with Glow */}
                 <div className="relative group">
                    <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-inner">
                        <span className="text-4xl drop-shadow-md">🚧</span>
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow-sm">Próximamente</h3>
                    <p className="text-white/70 font-light leading-relaxed text-sm px-4">
                      Construyendo una experiencia digital inmersiva.
                      <br/>
                      <span className="text-white/90 font-medium bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
                        ¡Algo increíble está por llegar!
                      </span>
                    </p>
                 </div>

                 <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-2"></div>

                 <div className="flex flex-col items-center gap-3 w-full">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">Contáctame</p>

                    <a 
                      href="mailto:geritoteam@proton.me" 
                      className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
                      aria-label="Contactar por correo"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <Mail size={24} className="text-white/80 group-hover:text-white transition-colors relative z-10" />
                    </a>
                 </div>

                 <button 
                  onClick={() => setShowModal(false)}
                  className="mt-6 text-[10px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest font-medium"
                 >
                   Cerrar
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Bottom Copyright/Footer */}
      <div className={`absolute bottom-4 text-white/30 text-xs font-light tracking-widest uppercase transition-opacity ${showModal ? 'opacity-0' : 'opacity-100'}`}>
        © 2024
      </div>
      
      {/* Helper style for shimmer and float */}
      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;