import React, { useRef } from 'react';
import { Clapperboard, Monitor, Smartphone, Play, ChevronLeft, ChevronRight, Layers, Video, Scissors, Bot, MonitorPlay, Film } from 'lucide-react';

const HORIZONTAL_VIDEOS = [
  { id: 1, title: "Universidad Uk", description: "Producción Completa de Evento en Vivo\n+1,000 asistentes · +50% audiencia vs. eventos anteriores\nGrabación multicámara con dron, transmisión en tiempo real, post-producción profesional", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop", youtubeId: "WcpxuyYujFM" },
  { id: 2, title: "Pet Mata Pez", description: "Animación Educativa con After Effects\nProyecto viral · 10K+ vistas orgánicas en 48h\nMotion graphics dinámico + storytelling visual para campaña de concientización", image: "https://images.pexels.com/photos/4813983/pexels-photo-4813983.jpeg", youtubeId: "OOAED-p56oI" },
  { id: 3, title: "Prepa Uk", description: "Video Animado de Captación\n+30% engagement en redes sociales\nDiseñado para captar atención en primeros 3 segundos y generar leads", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", youtubeId: "efhOW8RhDBI" },
  { id: 4, title: "Trendy Accessories", description: "Campaña Publicitaria Comercial\n+25% CTR en ads de Meta\nEstética moderna + edición rápida optimizada para mobile", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", youtubeId: "JCkhk5Jy1Yw" }
];

const VERTICAL_VIDEOS = [
  { id: 1, title: "Inglés Intensivo", subtitle: "Educación Digital", youtubeId: "8-Bptx37mRk" },
  { id: 2, title: "Universidad UK", subtitle: "Promo Institucional", youtubeId: "yWLpDwBf8x0" },
  { id: 3, title: "Estrategia Visual", subtitle: "Marketing & Ads", youtubeId: "auBjTt4tHDc" },
  { id: 4, title: "Contenido Pro", subtitle: "Creative Edition", youtubeId: "eoiPY4JbT7A" },
  { id: 5, title: "Dinamismo Social", subtitle: "Trend Content", youtubeId: "gIlUuNoMgCc" }
];

interface VideosProps {
  isDark: boolean;
  onOpenVideo: (id: string, isVertical: boolean) => void;
}

const Videos: React.FC<VideosProps> = ({ isDark, onOpenVideo }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-24 animate-in fade-in duration-700 pb-20">
      
      {/* HEADER SECTION - RECONSTRUCTED FROM IMAGE */}
      <div className="text-center flex flex-col items-center max-w-4xl mx-auto px-4">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center border mb-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
          <Clapperboard size={28} />
        </div>

        {/* Title */}
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Narrativa Visual
        </h2>

        {/* Subtitle */}
        <h3 className="text-xl md:text-2xl font-medium uppercase tracking-[0.1em] text-indigo-400/90 mb-8">
          EDICIÓN Y ANIMACIÓN
        </h3>

        {/* Description */}
        <p className={`text-sm md:text-base font-light leading-relaxed mb-16 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Produzco contenido audiovisual que genera resultados: +25% en conversión, +50% de audiencia en eventos, 50+ videos optimizados con IA. Cada pieza combina narrativa estratégica, animación dinámica y edición orientada a engagement para maximizar retención y conversión.
        </p>

        {/* Tool Stack */}
        <div className="grid grid-cols-4 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 max-w-2xl mx-auto place-items-center">
          {[
            { name: "AFTER", icon: <Layers size={22} />, color: "text-purple-400" },
            { name: "PREMIERE", icon: <Video size={22} />, color: "text-indigo-400" },
            { name: "CAPCUT", icon: <Scissors size={22} />, color: isDark ? "text-white" : "text-black" },
            { name: "HEYGEN", icon: <Bot size={22} />, color: "text-violet-400" },
            { name: "FINAL CUT", icon: <Film size={22} />, color: "text-pink-400" },
          ].map((tool) => (
            <div key={tool.name} className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-[1.5rem] flex flex-col items-center justify-center gap-2 sm:gap-3 border transition-all hover:scale-105 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`${tool.color} scale-75 sm:scale-100`}>{tool.icon}</div>
              <span className={`text-[7px] sm:text-[10px] font-bold tracking-widest text-center px-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* HORIZONTAL PROJECTS */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 px-2">
          <Monitor size={20} className="text-indigo-500" />
          <h3 className="text-2xl font-bold">Proyectos Destacados</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HORIZONTAL_VIDEOS.map((v) => (
            <div key={v.id} className="group relative aspect-video rounded-[2.5rem] overflow-hidden border cursor-pointer" onClick={() => onOpenVideo(v.youtubeId, false)}>
              <img src={v.image} alt={v.title} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="fill-white text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div>
                  <h4 className="text-3xl font-bold text-white leading-tight drop-shadow-md">{v.title}</h4>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-white/90 text-sm whitespace-pre-line mt-3 drop-shadow-md pb-2">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VERTICAL PROJECTS */}
      <div className="space-y-8 relative">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <Smartphone size={20} className="text-indigo-500" />
            <h3 className="text-2xl font-bold">Shorts & TikTok</h3>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={carouselRef} className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-4 scroll-smooth">
          {VERTICAL_VIDEOS.map((v) => (
            <div key={v.id} className="flex-none w-[85%] sm:w-[45%] lg:w-[calc(25%-18px)] snap-center group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border cursor-pointer transition-all hover:-translate-y-2 shadow-lg" onClick={() => onOpenVideo(v.youtubeId, true)}>
              <img src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`} alt={v.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-xl shadow-red-600/40">
                  <Play className="fill-white text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h4 className="text-xl font-bold text-white">{v.title}</h4>
                <p className="text-white/70 text-xs uppercase font-medium tracking-wider">{v.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;