import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Bot, 
  Image as ImageIcon, 
  Video, 
  Languages, 
  X, 
  Maximize2, 
  Play,
  Terminal,
  Wand2,
  Aperture,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Box,
  Banana,
  Zap,
  Mic
} from 'lucide-react';

// --- CONFIGURACIÓN DE HERRAMIENTAS IA (Iconos y Colores) ---
const AI_TOOLS = {
  gemini: { name: 'Gemini Nano', icon: <Sparkles size={14} />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  midjourney: { name: 'Midjourney', icon: <Aperture size={14} />, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
  dalle: { name: 'DALL-E 3', icon: <ImageIcon size={14} />, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  stable: { name: 'Stable Diffusion', icon: <Cpu size={14} />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  runway: { name: 'Runway Gen-2', icon: <Video size={14} />, color: 'text-pink-400 border-pink-500/30 bg-pink-500/10' },
  pika: { name: 'Pika Labs', icon: <Sparkles size={14} />, color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10' },
  leonardo: { name: 'Leonardo AI', icon: <Wand2 size={14} />, color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' },
  veo: { name: 'Veo 3', icon: <Video size={14} />, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  sora: { name: 'Sora', icon: <Video size={14} />, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  hedra: { name: 'Hedra', icon: <Bot size={14} />, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' }
};

// --- DATA: IMÁGENES GENERADAS (8 ITEMS) ---
const AI_IMAGES = [
  {
    id: 1,
    url: "https://fileuk.netlify.app/CV/1.1.png", 
    tool: 'gemini',
    title: "Profesional Moderna",
    promptEn: "A young professional woman wearing a green blazer and glasses, working on a tablet at a desk in a modern home office, natural lighting, realistic photography.",
    promptEs: "Una joven profesional con un blazer verde y anteojos, trabajando en una tablet en un escritorio en una oficina en casa moderna, iluminación natural, fotografía realista."
  },
  {
    id: 2,
    url: "https://fileuk.netlify.app/CV/1.2.png", 
    tool: 'gemini',
    title: "Estudio Colaborativo",
    promptEn: "Two young men sitting at a dining table studying together, one pointing at a laptop screen, textbooks and snacks on the table, cozy apartment setting, warm lighting.",
    promptEs: "Dos jóvenes sentados en una mesa de comedor estudiando juntos, uno señalando la pantalla de una computadora portátil, libros de texto y bocadillos en la mesa, ambiente acogedor de apartamento, iluminación cálida."
  },
  {
    id: 3,
    url: "https://fileuk.netlify.app/CV/1.3.png", 
    tool: 'gemini',
    title: "Día de Graduación",
    promptEn: "A happy young man in a graduation gown and cap, holding his diploma and smiling at the camera, graduation ceremony in an auditorium in the background, high quality portrait.",
    promptEs: "Un joven feliz con toga y birrete de graduación, sosteniendo su diploma y sonriendo a la cámara, ceremonia de graduación en un auditorio al fondo, retrato de alta calidad."
  },
  {
    id: 4,
    url: "https://fileuk.netlify.app/CV/1.4.png", 
    tool: 'gemini',
    title: "Oficina Futurista",
    promptEn: "A businessman in a suit working on a laptop in a high-tech office, surrounded by floating holographic screens displaying maps, data charts, and drone analysis, futuristic corporate environment.",
    promptEs: "Un hombre de negocios con traje trabajando en una computadora portátil en una oficina de alta tecnología, rodeado de pantallas holográficas flotantes que muestran mapas, gráficos de datos y análisis de drones, entorno corporativo futurista."
  },
  {
    id: 5,
    url: "https://fileuk.netlify.app/CV/1.5.png", 
    tool: 'gemini',
    title: "Videollamada Casual",
    promptEn: "A young man wearing white headphones, smiling while having a video call on his laptop, sitting at a desk in a well-lit room with shelves in the background, casual and friendly atmosphere.",
    promptEs: "Un joven con auriculares blancos, sonriendo mientras tiene una videollamada en su computadora portátil, sentado en un escritorio en una habitación bien iluminada con estantes al fondo, ambiente informal y amigable."
  },
  {
    id: 6,
    url: "https://fileuk.netlify.app/CV/1.6.png", 
    tool: 'gemini',
    title: "Holograma Interactivo",
    promptEn: "Three diverse friends sitting on an orange couch eating popcorn, looking excitedly at a tablet that projects a futuristic holographic interface, cozy living room, cinematic lighting.",
    promptEs: "Tres amigos diversos sentados en un sofá naranja comiendo palomitas de maíz, mirando emocionados una tableta que proyecta una interfaz holográfica futurista, sala de estar acogedora, iluminación cinematográfica."
  },
  {
    id: 7,
    url: "https://fileuk.netlify.app/CV/1.7.png", 
    tool: 'gemini',
    title: "Espíritu Navideño",
    promptEn: "A young woman standing in a living room with a decorated Christmas tree in the background, holding a tablet and wearing a brown leather backpack, warm holiday lighting, portrait photography.",
    promptEs: "Una joven de pie en una sala de estar con un árbol de Navidad decorado al fondo, sosteniendo una tableta y usando una mochila de cuero marrón, cálida iluminación navideña, fotografía de retrato."
  },
  {
    id: 8,
    url: "https://fileuk.netlify.app/CV/1.8.png", 
    tool: 'gemini',
    title: "Setup de Desarrollo",
    promptEn: "A modern developer workspace at night, featuring a large ultrawide monitor displaying a dashboard and code, a laptop, and a smartphone on a stand, dark aesthetic with warm string lights in the background.",
    promptEs: "Un espacio de trabajo de desarrollador moderno por la noche, que presenta un gran monitor ultraancho que muestra un panel y código, una computadora portátil y un teléfono inteligente en un soporte, estética oscura con cálidas luces de cadena al fondo."
  }
];

// --- DATA: VIDEOS GENERADOS ---
const AI_VIDEOS = [
  {
    id: 1,
    youtubeId: "",
    videoUrl: "https://fileuk.netlify.app/V/V9.mp4",
    tool: 'hedra',
    title: "El Origen del Hospital",
    promptEn: "Type of shot: Aerial zenithal (top-down) satellite-style shot, completely stable camera at start, transition to a smooth cinematic dolly forward. Scene / Subject: Hyper-realistic Google Maps style interface, with streets, buildings, and subtle traffic. A bright glowing blue neon pin marker highlights a specific location. Action: The marker begins to pulse with energy, emitting light waves that expand in circles. The digital interface begins to gradually transform: the map's textures become three-dimensional. From the marker point, the terrain rises and geometric fragments emerge from the ground. Digital particles and energy lines form the structure of a modern hospital. The building is constructed in real-time: foundation, walls, windows, interior lighting, all assembling fluidly and accurately, as if generated by an invisible intelligence. Transition: The digital interface progressively disappears while the scene becomes completely photorealistic. The camera descends slightly and moves forward (dolly forward) towards the finished hospital. Final Result: A fully constructed modern hospital, warm interior lighting visible from the outside, contrasting with the realistic urban environment. Visual Style: Ultra-realistic, cinematic quality, volumetric lighting, natural reflections, dynamic particles, depth of field, Sony A7III style lens, premium Apple-style commercial look. Color & Mood: Start with cool neon blue tones (digital UI) transition to warm and natural tones (real hospital). Audio (SFX): Digital interface sounds, electronic pulses, transition to subtle construction ambiance and then clean silence.",
    promptEs: "Tipo de toma: Toma aérea cenital (top-down) estilo satélite, cámara completamente estable al inicio, transición a un suave dolly forward cinematográfico. Escena / Sujeto: Interfaz estilo Google Maps hiperrealista, con calles, edificios y tráfico sutil. Un marcador luminoso tipo pin en color neón azul brillante resalta una ubicación específica. Acción: El marcador comienza a pulsar con energía, emitiendo ondas de luz que se expanden en círculos. La interfaz digital empieza a transformarse gradualmente: las texturas del mapa se vuelven tridimensionales. Desde el punto del marcador, el terreno se eleva y fragmentos geométricos emergen del suelo. Partículas digitales y líneas de energía forman la estructura de un hospital moderno. El edificio se construye en tiempo real: cimientos, paredes, ventanas, iluminación interior, todo ensamblándose de forma fluida y precisa, como si fuera generado por una inteligencia invisible. Transición: La interfaz digital desaparece progresivamente mientras la escena se vuelve completamente fotorrealista. La cámara desciende ligeramente y avanza (dolly forward) hacia el hospital terminado. Resultado final: Un hospital moderno completamente construido, iluminación cálida en interiores visible desde el exterior, contraste con el entorno urbano realista. Estilo visual: Ultra realista, calidad cinematográfica, iluminación volumétrica, reflejos naturales, partículas dinámicas, profundidad de campo, lente tipo Sony A7III, look comercial premium estilo Apple. Color & Ambiente: Inicio en tonos fríos azul neón (UI digital) → transición a tonos cálidos y naturales (hospital real). Audio (SFX): Sonidos digitales tipo interfaz, pulsos electrónicos, transición a ambiente de construcción sutil y luego silencio limpio."
  },
  {
    id: 2,
    youtubeId: "",
    videoUrl: "https://fileuk.netlify.app/V/V8.mp4",
    tool: 'veo',
    title: "El Origen del Espacio",
    promptEn: "Cinematic transition in a single space. Scene 1: A completely empty, minimalist room with light walls and a large window showing the city at sunset. In the center is a closed box. Quiet, slightly dark atmosphere. Suddenly, the box begins to vibrate subtly. A deep and immersive sound is heard. The box opens slowly and explodes in slow motion. From inside, floating objects emerge: a modern bed, minimalist furniture, lamps, paintings, a rug, a decorative plant. Everything comes out in particles, fragments, and pieces that spin in space with light and energy effects. The pieces rearrange in the air as if attracted by an invisible force. Each object finds its place perfectly: the bed is assembled, the rug unfolds, the lamp falls gently into position, the paintings align on the wall. As the transformation happens, the lighting progressively changes from a dark environment to intense natural daylight. The sky goes from sunset to a clear, sunny day. Final scene: A modern, minimalist room, fully furnished, bathed in natural light, clean, elegant, and quiet. Everything perfectly organized, with no trace of the box. Visual style: ultra-realistic, cinematic, slow motion, dynamic particles, volumetric lighting, 8K quality, Sony A7III type lens, depth of field, fluid Apple commercial style transition.",
    promptEs: "Transición cinematográfica en un solo espacio. Escena 1: Un cuarto completamente vacío, minimalista, con paredes claras y una gran ventana mostrando la ciudad al atardecer. En el centro hay una caja cerrada. Ambiente silencioso, ligeramente oscuro. De pronto, la caja comienza a vibrar sutilmente. Se escucha un sonido profundo y envolvente. La caja se abre lentamente y explota en cámara lenta. De su interior emergen objetos flotando en el aire: cama moderna, muebles minimalistas, lámparas, cuadros, alfombra, planta decorativa. Todo sale en partículas, fragmentos y piezas que giran en el espacio con efectos de luz y energía. Las piezas se reorganizan en el aire como si fueran atraídas por una fuerza invisible. Cada objeto encuentra su lugar perfectamente: la cama se ensambla, la alfombra se despliega, la lámpara cae suavemente en su posición, los cuadros se alinean en la pared. Mientras ocurre la transformación, la iluminación cambia progresivamente de un ambiente oscuro a una luz natural intensa de día. El cielo pasa de atardecer a un día claro y soleado. Escena final: Una habitación moderna, minimalista, completamente amueblada, bañada en luz natural, limpia, elegante y silenciosa. Todo perfectamente ordenado, sin rastro de la caja. Estilo visual: ultra realista, cinematográfico, cámara lenta, partículas dinámicas, iluminación volumétrica, calidad 8K, lente tipo Sony A7III, profundidad de campo, transición fluida tipo comercial de Apple."
  },
  {
    id: 3,
    youtubeId: "",
    videoUrl: "https://fileuk.netlify.app/V/V7.mp4",
    tool: 'veo',
    title: "Estudiante 3D",
    promptEn: "Young student working on his computer in a modern and slightly dark space. While editing content, the screen begins to come alive and suddenly elements emerge from it in the form of 3D graphics, videos, interfaces and particles that surround him. The environment turns into an immersive digital experience. Cinematic lighting, soft light effects, depth of field, fluid camera movement, tech style, ultra realistic, 4K quality.",
    promptEs: "Estudiante joven trabajando en su computadora en un espacio moderno y ligeramente oscuro. Mientras edita contenido, la pantalla comienza a cobrar vida y de pronto los elementos salen de ella en forma de gráficos, videos, interfaces y partículas en 3D que lo rodean. El entorno se transforma en una experiencia digital inmersiva. Iluminación cinematográfica, efectos de luz suaves, profundidad de campo, movimiento de cámara fluido, estilo tecnológico, ultra realista, calidad 4K."
  },
  {
    id: 4,
    youtubeId: "",
    videoUrl: "https://fileuk.netlify.app/V/V14.mp4",
    tool: 'veo',
    title: "Estudiante Online",
    promptEn: "Young Latino man sitting in a modern café, holding an iPad. A futuristic hologram interface projects from the screen, showing data, charts and UI elements floating in the air. Cinematic lighting, depth of field, realistic reflections, soft ambient light, slow camera movement, tech-inspired, ultra realistic, 4K.",
    promptEs: "Joven latino sentado en un café moderno, sosteniendo un iPad. Una interfaz de holograma futurista se proyecta desde la pantalla, mostrando datos, gráficos y elementos de la interfaz de usuario flotando en el aire. Iluminación cinematográfica, profundidad de campo, reflejos realistas, luz ambiental suave, movimiento lento de la cámara, inspirado en la tecnología, ultra realista, 4K."
  },
  {
    id: 5,
    youtubeId: "",
    videoUrl: "https://fileuk.netlify.app/V/V15.mp4",
    tool: 'veo',
    title: "Star Médica",
    promptEn: "A cinematic ultra-realistic shot inside a modern, clean hospital corridor. Soft white daylight, professional environment, no visual effects.  A young female doctor (Latina, 25–30) walks through the hallway wearing a clean medical uniform. The camera follows her with a smooth dolly movement.  In the background, the Star Médica logo is clearly visible on a wall or reception area, naturally integrated into the hospital environment.  She stops in front of a clinical sink.  She looks at her hands for a brief moment.",
    promptEs: "Una toma cinematográfica ultra realista dentro de un pasillo de hospital moderno y limpio. Iluminación blanca suave, ambiente profesional, sin efectos visuales.  Una joven doctora (latina, de 25 a 30 años) camina por el pasillo vistiendo un uniforme médico impecable. La cámara la sigue con un movimiento suave tipo dolly.  En el fondo, el logotipo de Star Médica es claramente visible en una pared o área de recepción, integrado de manera natural en el entorno del hospital.  Ella se detiene frente a un lavabo clínico.  Observa sus manos por un breve momento."
  },
  {
    id: 6,
    youtubeId: "",
    videoUrl: "https://fileuk.netlify.app/V/V6.mp4",
    tool: 'hedra',
    title: "Marca de tenis",
    promptEn: "Premium sneaker product showcase. Close-up shots of a modern sneaker with smooth cinematic zoom, unboxing sequence, detailed textures, slow motion shots, clean background, soft shadows, product modeling shots, studio lighting, high-end commercial style, ultra realistic, 4K.",
    promptEs: "Exhibición de producto de zapatillas premium. Primeros planos de una zapatilla moderna con zoom cinematográfico suave, secuencia de desempaquetado, texturas detalladas, tomas en cámara lenta, fondo limpio, sombras suaves, tomas de modelado de productos, iluminación de estudio, estilo comercial de alta gama, ultra realista, 4K."
  }
];

// --- EXTRA IMAGES FOR GALLERY ---
const EXTRA_IMAGES = [
  "https://fileuk.netlify.app/CV/v10.png",
  "https://fileuk.netlify.app/CV/v11.png",
  "https://fileuk.netlify.app/CV/v12.png",
  "https://fileuk.netlify.app/CV/v13.png",
  "https://fileuk.netlify.app/CV/v14.png",
  "https://fileuk.netlify.app/CV/v15.png",
  "https://fileuk.netlify.app/CV/v16.png"
];

const EXTRA_VIDEOS = [
  "https://fileuk.netlify.app/V/V13.mp4",
  "https://fileuk.netlify.app/V/V10.mp4",
  "https://fileuk.netlify.app/V/V11.mp4",
  "https://fileuk.netlify.app/V/V12.mp4"
];

const IA: React.FC<{isDark: boolean, onGoHome: () => void}> = ({ isDark, onGoHome }) => {
  const [translatedItems, setTranslatedItems] = useState<Set<string>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [videoGalleryIndex, setVideoGalleryIndex] = useState<number | null>(null);

  const toggleTranslation = (id: string) => {
    setTranslatedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const getToolConfig = (key: string) => {
    return AI_TOOLS[key as keyof typeof AI_TOOLS] || { name: key, icon: <Bot size={14} />, color: 'text-slate-400 border-slate-500/30' };
  };

  return (
    <div className="w-full flex flex-col gap-24 animate-in fade-in duration-700 pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="text-center flex flex-col items-center max-w-4xl mx-auto px-4 mt-8">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center border mb-8 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
          <Bot size={28} />
        </div>

        <h2 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Prompt Engineering
        </h2>
        
        <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-16 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Galería curada de exploraciones con Inteligencia Artificial. La clave no es la herramienta, sino la precisión del lenguaje.
        </p>

        {/* Tool Stack */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4 max-w-2xl mx-auto place-items-center">
          {[
            { name: "CHAT GPT", icon: <MessageSquare size={22} />, color: "text-emerald-400" },
            { name: "GRAZIA", icon: <Sparkles size={22} />, color: "text-pink-400" },
            { name: "HEDRA", icon: <Box size={22} />, color: "text-indigo-400" },
            { name: "HEYGEN", icon: <Bot size={22} />, color: "text-violet-400" },
            { name: "FREEPIK", icon: <ImageIcon size={22} />, color: "text-blue-400" },
            { name: "NANOBANAN", icon: <Banana size={22} />, color: "text-yellow-400" },
            { name: "GEMINI", icon: <Wand2 size={22} />, color: "text-blue-500" },
            { name: "RUNWAY", icon: <Video size={22} />, color: "text-purple-400" },
            { name: "PIKA LABS", icon: <Zap size={22} />, color: "text-orange-400" },
            { name: "ELEVEN LABS", icon: <Mic size={22} />, color: isDark ? "text-white" : "text-black" },
          ].map((tool) => (
            <div key={tool.name} className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-[1.5rem] flex flex-col items-center justify-center gap-2 sm:gap-3 border transition-all hover:scale-105 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`${tool.color} scale-75 sm:scale-100`}>{tool.icon}</div>
              <span className={`text-[7px] sm:text-[9px] font-bold tracking-widest text-center px-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN 1: IMÁGENES (Grid Uniforme Tipo Ads) --- */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 px-2">
          <ImageIcon size={24} className="text-pink-500" />
          <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Generación de Imagen</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_IMAGES.map((item) => {
            const tool = getToolConfig(item.tool);
            const uniqueId = `img-${item.id}`;
            const isTranslated = translatedItems.has(uniqueId);

            return (
              <div 
                key={item.id} 
                className={`group flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white border-slate-200 shadow-lg hover:shadow-xl'}`}
              >
                {/* Image Area - Square Aspect Ratio */}
                <div 
                  className="relative aspect-square cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
                  </div>
                </div>

                {/* Info Area - Compact & Uniform */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                    <div className={`flex-shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-full border text-[9px] font-bold uppercase tracking-wider ${tool.color}`}>
                        {tool.icon}
                        <span className="hidden sm:inline">{tool.name.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Prompt Box */}
                  <div className={`flex-1 rounded-xl p-3 border overflow-hidden flex flex-col gap-2 ${isDark ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-50 uppercase tracking-widest">
                          <Terminal size={10} />
                          <span>Prompt</span>
                        </div>
                        <button 
                          onClick={() => toggleTranslation(uniqueId)}
                          className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-all ${isTranslated ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-500 hover:bg-white/10'}`}
                          title="Traducir"
                        >
                          <Languages size={10} />
                          <span>{isTranslated ? 'ES' : 'EN'}</span>
                        </button>
                     </div>
                     
                     <div className="overflow-y-auto max-h-[80px] no-scrollbar">
                        <p className={`text-xs font-light font-mono leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          "{isTranslated ? item.promptEs : item.promptEn}"
                        </p>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setGalleryIndex(0)}
            className={`px-8 py-3 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 ${isDark ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}
          >
            <ImageIcon size={18} />
            Ver más
          </button>
        </div>
      </section>

      {/* --- SECCIÓN 2: VIDEOS (Layout Grid) --- */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 px-2">
          <Video size={24} className="text-indigo-500" />
          <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Video & Motion</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_VIDEOS.map((item) => {
            const tool = getToolConfig(item.tool);
            const uniqueId = `vid-${item.id}`;
            const isTranslated = translatedItems.has(uniqueId);

            return (
              <div key={item.id} className={`flex flex-col rounded-[2.5rem] overflow-hidden border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
                
                {/* Thumbnail / Video Area */}
                <div 
                  className="relative aspect-video group cursor-pointer overflow-hidden bg-black"
                  onClick={() => setActiveVideo(item.videoUrl || item.youtubeId)}
                >
                   {item.videoUrl ? (
                     <video 
                       src={item.videoUrl} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       muted 
                       loop 
                       playsInline
                       onMouseOver={e => (e.target as HTMLVideoElement).play()}
                       onMouseOut={e => {
                         const v = e.target as HTMLVideoElement;
                         v.pause();
                       }}
                     />
                   ) : (
                     <img 
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`} 
                      alt={item.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   )}
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 pointer-events-auto">
                        <Play className="fill-white text-white ml-1" size={24} />
                      </div>
                   </div>
                   
                   <div className="absolute top-6 left-6 pointer-events-none">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-[10px] font-bold uppercase tracking-wider ${tool.color}`}>
                        {tool.icon}
                        <span>{tool.name}</span>
                      </div>
                   </div>
                </div>

                {/* Info Area */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                   <div className="space-y-4">
                      <h4 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      
                      <div className={`flex-1 rounded-xl p-4 border overflow-hidden flex flex-col gap-3 ${isDark ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-50 uppercase tracking-widest">
                              <Terminal size={12} />
                              <span>Prompt</span>
                            </div>
                           <button 
                            onClick={() => toggleTranslation(uniqueId)}
                            className={`flex items-center gap-2 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${isTranslated ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-500 hover:bg-white/5'}`}
                            title="Traducir"
                          >
                            <Languages size={12} />
                            <span>{isTranslated ? 'ES' : 'EN'}</span>
                          </button>
                        </div>
                        
                        <div className="overflow-y-auto max-h-[100px] no-scrollbar">
                           <p className={`text-sm font-light font-mono leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                             <span className="text-indigo-400 mr-2">$</span>
                             {isTranslated ? item.promptEs : item.promptEn}
                           </p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setVideoGalleryIndex(0)}
            className={`px-8 py-3 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 ${isDark ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}
          >
            <Video size={18} />
            Ver más
          </button>
        </div>
      </section>

      {/* --- MODALES --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in bg-black/95 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      {galleryIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in bg-black/95 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setGalleryIndex(null)}></div>
          
          <button 
            onClick={() => setGalleryIndex(null)} 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <X size={24} />
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setGalleryIndex(prev => prev !== null ? (prev === 0 ? EXTRA_IMAGES.length - 1 : prev - 1) : null);
            }}
            className="absolute left-4 md:left-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft size={32} />
          </button>

          <img 
            src={EXTRA_IMAGES[galleryIndex]} 
            alt={`Gallery image ${galleryIndex + 1}`} 
            loading="lazy"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl z-10"
          />

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setGalleryIndex(prev => prev !== null ? (prev === EXTRA_IMAGES.length - 1 ? 0 : prev + 1) : null);
            }}
            className="absolute right-4 md:right-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
            {galleryIndex + 1} / {EXTRA_IMAGES.length}
          </div>
        </div>
      )}

      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in">
           <div className="absolute inset-0" onClick={() => setActiveVideo(null)}></div>
           <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center z-50 hover:bg-white/20 transition-colors"><X size={24} /></button>
           <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-black">
              {activeVideo.includes('.mp4') ? (
                <video src={activeVideo} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`} frameBorder="0" allowFullScreen></iframe>
              )}
           </div>
        </div>
      )}

      {videoGalleryIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in">
          <div className="absolute inset-0" onClick={() => setVideoGalleryIndex(null)}></div>
          
          <button 
            onClick={() => setVideoGalleryIndex(null)} 
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <X size={24} />
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setVideoGalleryIndex(prev => prev !== null ? (prev === 0 ? EXTRA_VIDEOS.length - 1 : prev - 1) : null);
            }}
            className="absolute left-4 md:left-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-black flex items-center justify-center">
            <video 
              key={EXTRA_VIDEOS[videoGalleryIndex]}
              src={EXTRA_VIDEOS[videoGalleryIndex]} 
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setVideoGalleryIndex(prev => prev !== null ? (prev === EXTRA_VIDEOS.length - 1 ? 0 : prev + 1) : null);
            }}
            className="absolute right-4 md:right-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
            {videoGalleryIndex + 1} / {EXTRA_VIDEOS.length}
          </div>
        </div>
      )}

    </div>
  );
};

export default IA;