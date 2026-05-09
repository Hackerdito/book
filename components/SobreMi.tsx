import React, { useState } from 'react';
import { Download, Linkedin, Calendar, Mail, Mic, Bot, Ship, Sparkles, Triangle, Banana, Video, Palette, Layers, ImageIcon, Type, X, Code, LineChart, Target } from 'lucide-react';

const PROFILE_PHOTO = "https://fileuk.netlify.app/Love-v1.png";
const LAPTOP_IMG = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop";

const SKILLS = [
  {
    category: "Diseño & Dirección Creativa",
    icon: <Palette size={24} className="text-pink-400" />,
    items: [
      "Adobe Illustrator · Photoshop · InDesign · After Effects · Premiere Pro",
      "UI/UX Design · Wireframing · Prototipado · Design Systems"
    ]
  },
  {
    category: "Desarrollo Web",
    icon: <Code size={24} className="text-blue-400" />,
    items: [
      "HTML5 · CSS3 · JavaScript · Firebase · APIs REST",
      "Responsive Design · Git · Vercel · Netlify"
    ]
  },
  {
    category: "Producción Multimedia",
    icon: <Video size={24} className="text-emerald-400" />,
    items: [
      "Edición de video · Motion graphics · Color grading",
      "CapCut · Automatización con IA"
    ]
  },
  {
    category: "Inteligencia Artificial",
    icon: <Bot size={24} className="text-purple-400" />,
    items: [
      "Midjourney · Runway · Claude · ElevenLabs · HeyGen",
      "Ingeniería de prompts · Flujos automatizados"
    ]
  },
  {
    category: "Marketing Digital",
    icon: <LineChart size={24} className="text-orange-400" />,
    items: [
      "Email marketing (SendGrid, Mailchimp)",
      "Diseño de ads (Google, Meta)",
      "A/B testing · CRO · Estrategia de contenido"
    ]
  }
];

const WORK_EXPERIENCE = [
  {
    company: "Universidad Uk",
    role: "Especialista Multimedia & Marketing Digital",
    period: "2016 - 2026 Abril",
    description: "Lideré la estrategia digital completa de la institución, desde contenido para redes sociales hasta producción de eventos en vivo. Logré:\n• +30% de engagement interanual en campañas multicanal\n• +25% en conversión con video marketing optimizado por IA\n• +40% en alcance orgánico mediante A/B testing de landing pages\n• Producción de 50+ activos multimedia que redujeron costos en 35%\n• Ejecución de eventos masivos con 1,000+ asistentes",
    logoUrl: "https://fileuk.netlify.app/Ukjobs.png", 
    image: "https://fileuk.netlify.app/UniUk.webp"
  },
  {
    company: "Diamond Aircraft",
    role: "Diseñador Digital & Web",
    period: "2014 - 2016",
    description: "Diseñé la identidad visual completa para comunicación corporativa, traduciendo información técnica aeronáutica en contenido accesible y efectivo.\n• Creé experiencias visuales para 5 exposiciones en Centro Banamex que atrajeron 1,000+ visitantes corporativos\n• Desarrollé materiales para redes sociales, catálogos digitales y lanzamientos de productos\n• Gestioné el desarrollo web completo asegurando diseño responsivo y experiencia optimizada",
    logoUrl: "https://fileuk.netlify.app/diamond.png", 
    image: "https://fileuk.netlify.app/aviation.jpg"
  },
  {
    company: "Coca-Cola FEMSA",
    role: "Editor Digital & Multimedia",
    period: "2012 - 2014",
    description: "Produje contenido audiovisual para campañas internas, comunicación corporativa y marketing dirigido a directores de plantas de producción.\n• Edité contenido para múltiples canales: video corporativo, redes sociales y publicidad\n• Desarrollé simulaciones multimedia para centros de distribución\n• Colaboré con equipos multidisciplinarios adaptando mensajes a distintas audiencias",
    logoUrl: "https://fileuk.netlify.app/cocacola.png", 
    image: "https://fileuk.netlify.app/cocajobs.webp"
  }
];

interface SobreMiProps {
  isDark: boolean;
  displayName: string;
  scrollY: number;
  skillsInView: boolean;
  skillsRef: React.RefObject<HTMLDivElement | null>;
}

const SobreMi: React.FC<SobreMiProps> = ({ isDark, displayName, scrollY, skillsInView, skillsRef }) => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-32">
      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        <div className="relative order-1 flex justify-center lg:justify-end animate-in slide-in-from-left duration-1000">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <div className={`absolute inset-0 rounded-full border scale-105 animate-[spin_10s_linear_infinite] ${isDark ? 'border-indigo-500/30' : 'border-indigo-400/50'}`} style={{ borderStyle: 'dashed' }}></div>
            <div className={`absolute inset-0 rounded-full overflow-hidden border-4 shadow-2xl z-10 ${isDark ? 'border-[#020617]' : 'border-white'}`}>
              {/* Foto con tinte específico #9c9eba y zoom al pasar el mouse */}
              <div className="relative w-full h-full group/photo overflow-hidden cursor-pointer">
                <img 
                  src={PROFILE_PHOTO} 
                  alt="Gerardo" 
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover/photo:grayscale-0 group-hover/photo:scale-110"
                />
                {/* Overlay de color moradito solicitado */}
                <div 
                  className="absolute inset-0 bg-[#9c9eba] mix-blend-color transition-opacity duration-500 opacity-100 group-hover/photo:opacity-0 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 text-center lg:text-left space-y-4 animate-in slide-in-from-right duration-1000">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className={`block text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-white to-slate-400' : 'bg-gradient-to-r from-slate-900 to-slate-500'}`}>{displayName}<span className="animate-pulse ml-1 text-indigo-400">|</span></span>
          </h1>
          <h2 className={`text-base md:text-xl font-medium tracking-[0.3em] uppercase border-b pb-2 inline-block ${isDark ? 'text-indigo-400 border-indigo-500/20' : 'text-indigo-600 border-indigo-500/30'}`}>Rodríguez López</h2>
          <p className={`text-sm md:text-base font-light pl-4 border-l-2 leading-relaxed ${isDark ? 'text-slate-400 border-indigo-500/50' : 'text-slate-600 border-indigo-400'}`}>Llevo más de 10 años convirtiendo ideas en diseño que funciona. He trabajado con marcas como Coca-Cola FEMSA y Diamond Aircraft, y hoy me especializo en experiencias digitales que combinan creatividad, tecnología e IA para generar impacto medible.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <button 
              onClick={() => setIsPdfOpen(true)}
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <span>Curriculum</span><Download size={18} />
            </button>
            <a 
              href="https://www.linkedin.com/in/geritodg" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-8 py-3 border font-medium rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/5 ${isDark ? 'border-white/20 text-white' : 'border-slate-300 text-slate-700'}`}
            >
              <Linkedin size={18} /><span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* SKILLS & EXTRAS */}
      <div className={`w-full backdrop-blur-2xl border rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch transition-all duration-1000 ${isDark ? 'bg-white/[0.07] border-white/10' : 'bg-white/60 border-white/40 shadow-slate-200/50'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-stretch w-full">
          <div className="relative w-full h-[300px] lg:h-auto lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:rounded-l-[2.5rem] overflow-hidden lg:-ml-16 lg:-my-16 order-first">
            <img src={LAPTOP_IMG} alt="Work" className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block"></div>
          <div className="space-y-12 flex flex-col justify-center py-4 lg:py-12" ref={skillsRef}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Habilidades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((skill, index) => (
                  <div key={skill.category} className={`flex flex-col gap-4 p-5 rounded-3xl border transition-all hover:scale-[1.02] ${isDark ? 'bg-white-[0.02] border-white/10 hover:bg-white/5' : 'bg-slate-50 border-slate-200 hover:shadow-md'}`}>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className={`p-2.5 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                        {skill.icon}
                      </div>
                      <h4 className="font-bold text-sm tracking-wide">{skill.category}</h4>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      {skill.items.map((item, i) => (
                        <span key={i} className={`text-xs font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Extras</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: 'SendGrid', icon: <Mail size={24} className="text-blue-400" /> },
                  { name: 'ElevenLabs', icon: <Mic size={24} className={isDark ? "text-white" : "text-slate-700"} /> },
                  { name: 'OpenAI', icon: <Bot size={24} className="text-green-400" /> },
                  { name: 'Midjourney', icon: <Ship size={24} className="text-purple-400" /> },
                  { name: 'Gemini', icon: <Sparkles size={24} className="text-sky-400" /> },
                  { name: 'Vercel', icon: <Triangle size={24} className={isDark ? "text-white fill-white" : "text-slate-900 fill-slate-900"} /> },
                  { name: 'HeyGen', icon: <Video size={24} className="text-violet-400" /> },
                  { name: 'NanoBanana', icon: <Banana size={24} className="text-yellow-400" /> },
                ].map((item) => (
                  <div key={item.name} className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all hover:scale-105 ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                    {item.icon}
                    <span className="text-[10px] uppercase font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="w-full pb-20">
        <div className="text-center space-y-2 mb-20">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-slate-500">Trayecto</h2>
          <h3 className="text-5xl font-bold tracking-tight">Laboral</h3>
        </div>
        <div className="flex flex-col gap-16">
          {WORK_EXPERIENCE.map((job, index) => {
            // Lógica de inversión de layout:
            // 0: Universidad Uk -> Imagen Izquierda (Invertido)
            // 1: Diamond Aircraft -> Imagen Derecha (Normal)
            // 2: Coca Cola -> Imagen Izquierda (Invertido)
            const isReversed = index === 0 || index === 2;
            
            return (
              <div 
                key={job.company} 
                className={`group relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch border rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 ${isDark ? 'bg-[#0a0f1e] border-white/10' : 'bg-white border-slate-200'}`}
              >
                {/* Lado del contenido */}
                <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col items-start relative z-10 overflow-hidden">
                  
                  {/* Número de fondo (01, 02, 03) - Posicionado en la esquina superior derecha del texto */}
                  <div className={`absolute -top-10 -right-6 text-[10rem] md:text-[14rem] font-bold select-none pointer-events-none transition-colors duration-500 ${isDark ? 'text-white/[0.03]' : 'text-black/[0.03]'}`}>
                    0{index + 1}
                  </div>

                  {/* Logo Empresa - Lógica de colores (Blanco en oscuro, Negro en claro) */}
                  <img 
                    src={job.logoUrl} 
                    alt={job.company} 
                    className={`h-8 md:h-10 w-auto mb-10 object-contain transition-all duration-500 relative z-20 ${isDark ? 'brightness-0 invert' : 'brightness-0'}`} 
                  />
                  
                  <h4 className={`text-3xl md:text-4xl font-bold mb-2 relative z-20 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {job.company}
                  </h4>
                  
                  <p className="text-indigo-500 text-lg md:text-xl font-medium mb-8 relative z-20">
                    {job.role}
                  </p>
                  
                  <p className={`text-sm md:text-base whitespace-pre-line font-light leading-relaxed mb-10 relative z-20 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {job.description}
                  </p>
                  
                  {/* Pastilla de fecha */}
                  <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-semibold uppercase relative z-20 ${isDark ? 'bg-white/5 text-slate-400 border border-white/10' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>

                {/* Lado de la imagen */}
                <div className="w-full lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
                  <img 
                    src={job.image} 
                    alt={job.company} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Overlay suave para integrar mejor la imagen */}
                  <div className={`absolute inset-0 ${isDark ? 'bg-indigo-950/10' : 'bg-transparent'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PDF MODAL */}
      {isPdfOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in-95">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsPdfOpen(false)}></div>
          
          <button 
            onClick={() => setIsPdfOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-[110] border border-white/10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 w-full max-w-5xl h-[85vh] flex flex-col items-center gap-6">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <iframe 
                src="https://docs.google.com/viewer?url=https%3A%2F%2Ffileuk.netlify.app%2FCV%2FGerardo%2520Samuel%2520Rodri%25CC%2581guez%2520Lo%25CC%2581pez.pdf&embedded=true" 
                className="w-full h-full border-0"
                title="CV Gerardo Rodriguez"
              ></iframe>
            </div>
            <a 
              href="https://fileuk.netlify.app/CV/Gerardo%20Samuel%20Rodri%CC%81guez%20Lo%CC%81pez.pdf" 
              download="Gerardo_Samuel_Rodriguez_Lopez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
            >
              <Download size={18} />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default SobreMi;