import React, { useEffect, useState } from 'react';
import { Layers, Monitor, Smartphone, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const PortfolioHome: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading internal assets
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`min-h-screen bg-[#02040a] text-white transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Gradient Spot */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-[#02040a]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded flex items-center justify-center text-slate-950 font-black">G</span>
            <span>Samuel.dev</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Sobre mí</a>
          </div>
          <button className="px-5 py-2 text-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-full transition-colors">
            Contactar
          </button>
        </div>
      </nav>

      {/* Hero Content (Inside) */}
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-1000 relative z-10">
            <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase bg-cyan-950/30 px-3 py-1 rounded border border-cyan-900/50">Disponible para Freelance</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Creando experiencias <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                digitales únicas.
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Especialista en diseño de interfaces y desarrollo web moderno. Transformo ideas complejas en soluciones digitales elegantes y funcionales.
            </p>
            
            <div className="flex gap-4 pt-4">
              <SocialButton icon={<Github size={20} />} label="GitHub" />
              <SocialButton icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialButton icon={<Mail size={20} />} label="Email" />
            </div>
          </div>

          {/* Abstract Visual Placeholder for Portfolio Content */}
          <div className="relative h-[500px] w-full bg-slate-900/20 rounded-2xl border border-slate-800 overflow-hidden group backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-50"></div>
            
            {/* Grid pattern inside box */}
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-600 text-center">
              <Layers size={64} className="mx-auto mb-4 text-slate-700 group-hover:text-cyan-500 transition-colors duration-500" />
              <p className="font-mono text-sm tracking-widest text-slate-500">PROYECTOS RECIENTES</p>
            </div>
            
            {/* Floating cards animation mock */}
            <FloatingCard title="E-Commerce" icon={<Monitor size={16} />} color="bg-cyan-600" position="top-10 left-10" delay="0s" />
            <FloatingCard title="Mobile App" icon={<Smartphone size={16} />} color="bg-emerald-600" position="bottom-20 right-10" delay="2s" />
            <FloatingCard title="Branding" icon={<ExternalLink size={16} />} color="bg-blue-600" position="top-40 right-20" delay="1s" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800/50 pt-16 mb-20">
          <Stat number="5+" label="Años de Experiencia" />
          <Stat number="40+" label="Proyectos Entregados" />
          <Stat number="100%" label="Clientes Satisfechos" />
          <Stat number="24/7" label="Soporte Dedicado" />
        </div>
      </main>
    </div>
  );
};

// Helper Components for the internal page
const SocialButton: React.FC<{icon: React.ReactNode, label: string}> = ({ icon, label }) => (
  <button className="w-12 h-12 rounded-full border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 flex items-center justify-center transition-all text-slate-400" aria-label={label}>
    {icon}
  </button>
);

const FloatingCard: React.FC<{title: string, icon: React.ReactNode, color: string, position: string, delay: string}> = ({ title, icon, color, position, delay }) => (
  <div 
    className={`absolute ${position} p-4 bg-slate-900/90 backdrop-blur border border-slate-700/50 rounded-xl shadow-xl animate-float`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-white`}>
        {icon}
      </div>
      <span className="font-semibold text-sm text-slate-200">{title}</span>
    </div>
  </div>
);

const Stat: React.FC<{number: string, label: string}> = ({ number, label }) => (
  <div>
    <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
    <p className="text-slate-500 text-sm">{label}</p>
  </div>
);

export default PortfolioHome;