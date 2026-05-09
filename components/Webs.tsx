import React from 'react';
import { Layers, Code2, Database, Github, Triangle, Globe, Layout, ArrowRight, Rocket, Monitor, Sparkles } from 'lucide-react';

interface WebsProps {
  isDark: boolean;
}

const Webs: React.FC<WebsProps> = ({ isDark }) => {
  return (
    <div className="w-full flex flex-col gap-12 animate-in fade-in zoom-in-95 duration-700 pb-20">
      
      {/* HERO SECTION */}
      <div className="relative w-full py-24 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          <div className="relative flex flex-col items-center justify-center text-center w-full">
            
            {/* VENTANA DE CÓDIGO DE FONDO (DETRÁS DEL TEXTO) */}
            <div className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 w-[320px] md:w-[450px] aspect-video z-0 pointer-events-none opacity-40 md:opacity-80 blur-[0.5px]">
               <div className={`w-full h-full rounded-[2rem] border shadow-2xl animate-[float_12s_ease-in-out_infinite] transition-colors duration-700 ${isDark ? 'bg-[#020617]/80 border-white/10' : 'bg-white/90 border-slate-200 shadow-slate-200'}`}>
                  {/* Traffic Lights */}
                  <div className="flex gap-2 p-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  {/* Code Content with Theme Support */}
                  <div className={`px-10 py-2 font-mono text-[10px] md:text-sm leading-relaxed text-left transition-colors duration-700 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    <div className="flex items-center gap-2">
                      <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>const</span> 
                      <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>createWeb</span> 
                      <span>= () ={">"} {"{"}</span>
                    </div>
                    <div className="pl-6">
                      <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>return</span> 
                      <span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}> "Innovation"</span>;
                    </div>
                    <div>{"}"}</div>
                  </div>
               </div>
            </div>

            {/* Icon */}
            <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border mb-8 mx-auto ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
              <Monitor size={28} />
            </div>

            {/* Título centrado */}
            <h2 className={`relative z-10 text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl drop-shadow-sm transition-colors duration-700 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Innovación en Diseño y Desarrollo Web
            </h2>
          </div>

          {/* Descripción */}
          <p className={`text-base md:text-xl font-light leading-relaxed text-center max-w-4xl mx-auto mt-24 md:mt-32 relative z-10 transition-colors duration-700 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Me especializo en el diseño y desarrollo de páginas web desde cero, asegurando que cada plataforma ofrezca una experiencia de usuario única y memorable a través de animaciones innovadoras. Gestiono todo el proceso, desde la conceptualización hasta la implementación final en el servidor.
          </p>

          {/* TECH STACK ROW */}
          <div className="grid grid-cols-4 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mt-16 relative z-10 max-w-2xl mx-auto place-items-center">
            {[
              { icon: <Layers size={22} />, name: "STACK", color: "text-blue-400" },
              { icon: <Code2 size={22} />, name: "VS CODE", color: "text-sky-500" },
              { icon: <Database size={22} />, name: "FIREBASE", color: "text-yellow-500" },
              { icon: <Github size={22} />, name: "GITHUB", color: isDark ? "text-white" : "text-slate-900" },
              { icon: <Triangle size={22} />, name: "VERCEL", color: isDark ? "text-white" : "text-slate-900" },
              { icon: <Globe size={22} />, name: "NETLIFY", color: "text-teal-400" },
              { icon: <Rocket size={22} />, name: "ANTIGRAVITY", color: "text-pink-500" }
            ].map((tech) => (
              <div key={tech.name} className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-[1.5rem] flex flex-col items-center justify-center gap-2 sm:gap-3 backdrop-blur-xl border transition-all hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className={`${tech.color} scale-75 sm:scale-100 transition-transform group-hover:scale-110`}>{tech.icon}</div>
                <span className={`text-[7px] sm:text-[9px] uppercase font-bold tracking-widest text-center px-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* TARJETA UNIVERSIDAD UK */}
        <div className={`md:col-span-2 group relative h-[550px] rounded-[2.5rem] overflow-hidden border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <img 
            src="https://arquiuk.netlify.app/assets/img/arqui_1.png" 
            alt="Universidad Uk" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
            <div className="mb-4">
              <span className="px-4 py-1.5 rounded-full bg-[#1e293b]/80 backdrop-blur-md border border-white/20 text-[10px] uppercase font-bold tracking-widest text-white">
                Design Web
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Universidad Uk</h3>
            
            <div className="w-full max-w-2xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transform transition-transform group-hover:-translate-y-2">
              <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                Trabajé en el diseño de una landing page pensando en hacerla más atractiva e interactiva para los alumnos. 
                Rediseñé la paleta de colores, integré fotografías generadas con IA y cuidé que la experiencia visual se sintiera más cercana y moderna. 
                Fue un proyecto largo y desafiante, pero al final logramos que la página transmitiera mejor la identidad de la universidad.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA PROYECTOS DE DISEÑO */}
        <div className={`group relative h-[550px] rounded-[2.5rem] overflow-hidden border transition-all ${isDark ? 'bg-[#0a0f1e] border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <img 
            src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop" 
            alt="Proyectos de Diseño" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
          
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <h3 className="text-3xl font-bold text-white mb-1">Proyectos de Diseño</h3>
            <p className="text-white/60 text-xs font-light mb-8">Explora más interfaces y experiencias digitales.</p>
            
            <div className="grid gap-3">
              <a href="https://projectukmex.vercel.app/" target="_blank" className="w-full py-3.5 rounded-2xl bg-[#1e293b]/60 backdrop-blur-md border border-white/10 text-white text-sm px-6 flex justify-between items-center hover:bg-white/20 transition-all group/btn">
                <div className="flex items-center gap-3">
                  <Layout size={18} className="text-indigo-400" />
                  <span className="font-semibold">Site Web</span>
                </div>
              </a>
              <a href="https://projectmaestriasuk.netlify.app/" target="_blank" className="w-full py-3.5 rounded-2xl bg-[#1e293b]/60 backdrop-blur-md border border-white/10 text-white text-sm px-6 flex justify-between items-center hover:bg-white/20 transition-all group/btn">
                <div className="flex items-center gap-3">
                  <Sparkles size={18} className="text-amber-400" />
                  <span className="font-semibold">Landing Page</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* TARJETA DIPLOMADO POLÍTICO */}
        <div className={`md:col-span-3 group relative h-[500px] rounded-[2.5rem] overflow-hidden border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <img 
            src="https://fileuk.netlify.app/politica.png" 
            alt="Diplomado Político" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
            <div className="flex flex-col md:flex-row items-end justify-between w-full gap-8">
              <div className="flex flex-col items-start max-w-3xl">
                <div className="mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#1e293b]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white tracking-wide">
                    Landing Page
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Diplomado Político</h3>
                <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transform transition-transform group-hover:-translate-y-1">
                  <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                    La landing page promociona un diplomado en política respaldado por certificaciones de META y YALE. El programa ofrece formación integral en ciencia política, comunicación digital y liderazgo, preparando a los participantes para influir globalmente. Con un enfoque en contenido relevante y certificaciones de prestigio, invita a los usuarios a inscribirse y avanzar en su carrera política.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 mb-2">
                <a href="https://diplomadouk.netlify.app/" target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                  <Monitor size={18} /> 
                  <span className="text-sm">Site Web</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TARJETA PSIA */}
        <div className={`md:col-span-3 group relative h-[500px] rounded-[2.5rem] overflow-hidden border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <img 
            src="https://fileuk.netlify.app/Sia_v7.png" 
            alt="Psia" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
            <div className="flex flex-col md:flex-row items-end justify-between w-full gap-8">
              <div className="flex flex-col items-start max-w-3xl">
                <div className="mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#4c1d95]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white tracking-wide">
                    AI & Psychology
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Psia</h3>
                <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transform transition-transform group-hover:-translate-y-1">
                  <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                    Diseñé una landing innovadora para psicología integrada con un sistema de IA. El proyecto incluyó la creación de un widget con ElevenLabs, el desarrollo de un portal con login y la implementación de Firebase para respaldar la información y administrar la base de datos de cada alumno. Fue un reto grande y técnico, pero me permitió combinar diseño, IA y desarrollo para ofrecer una experiencia funcional y atractiva.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 mb-2">
                <a href="https://projectpsia.dgcode.company/" target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                  <Monitor size={18} /> 
                  <span className="text-sm">Site Web</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TARJETA DIAMOND AIRCRAFT */}
        <div className={`md:col-span-3 group relative h-[500px] rounded-[2.5rem] overflow-hidden border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <img 
            src="https://fileuk.netlify.app/aviation.jpg" 
            alt="Diamond Aircraft" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
            <div className="flex flex-col md:flex-row items-end justify-between w-full gap-8">
              <div className="flex flex-col items-start max-w-3xl">
                <div className="mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#083344]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white tracking-wide">
                    Web Design & Automation
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Diamond Aircraft</h3>
                <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transform transition-transform group-hover:-translate-y-1">
                  <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                    Junto con mi compañera Lorenza, trabajamos en el diseño y la automatización de la página web con el objetivo de transmitir elegancia, seguridad y confianza a los clientes. Buscamos que la navegación fuera intuitiva, fácil y atractiva, logrando una experiencia digital alineada con la imagen premium de la marca.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 mb-2">
                <a href="https://www.diamondaircraft.com/en/" target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                  <Monitor size={18} /> 
                  <span className="text-sm">Site Web</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TARJETA LEADS DESCUENTOS UK */}
        <div className={`md:col-span-3 group relative h-[500px] rounded-[2.5rem] overflow-hidden border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
            alt="Leads Descuentos Uk" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
            <div className="flex flex-col md:flex-row items-end justify-between w-full gap-8">
              
              <div className="flex flex-col items-start max-w-3xl">
                <div className="mb-4">
                  <span className="px-4 py-2 rounded-full bg-[#166534]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white tracking-wide">
                    Marketing & Leads
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Leads Descuentos Uk</h3>
                <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 transform transition-transform group-hover:-translate-y-1">
                  <p className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                    Diseñé una landing page estratégica enfocada en la captación de leads a nivel global. La plataforma permite a los usuarios acceder a planes de financiamiento y descuentos exclusivos, ya sea por cuatrimestre o carrera completa. La interfaz fue optimizada para la conversión, facilitando el acceso a la educación desde cualquier país.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 mb-2">
                <a href="https://leadsuk.netlify.app/" target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                  <Globe size={18} /> 
                  <span className="text-sm">Site Web</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -10px) rotate(0deg); }
          50% { transform: translate(-50%, 10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

export default Webs;