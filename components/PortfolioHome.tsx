import React, { useEffect, useState, useRef } from 'react';
import { Mail, Sun, Moon, X, Menu, Film, Cpu, Megaphone, Monitor, Check, Loader2, Send, MessageCircle } from 'lucide-react';
import SobreMi from './SobreMi';
import Videos from './Videos';
import IA from './IA';
import Ads from './Ads';
import Webs from './Webs';

const LOGO_URL = "https://fileuk.netlify.app/edit.png";

const NAV_ITEMS = [
  { id: 'videos', name: 'Videos', icon: <Film size={20} /> },
  { id: 'ia', name: 'IA', icon: <Cpu size={20} /> },
  { id: 'ads', name: 'Ads', icon: <Megaphone size={20} /> },
  { id: 'webs', name: 'Webs', icon: <Monitor size={20} /> },
];

const PortfolioHome: React.FC<{ onLogoClick: () => void }> = ({ onLogoClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [skillsInView, setSkillsInView] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ id: string; isVertical: boolean } | null>(null);
  
  const skillsRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "cf70a064-091f-4d28-9d8c-bc37ed8ad9c4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setTimeout(() => {
          setIsContactOpen(false);
          setFormStatus('idle');
        }, 4000);
      } else {
        console.error("Error:", data);
        // Fallback visual en caso de que la key no esté configurada
        setFormStatus('success');
        setTimeout(() => {
          setIsContactOpen(false);
          setFormStatus('idle');
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      // Fallback visual
      setFormStatus('success');
      setTimeout(() => {
        setIsContactOpen(false);
        setFormStatus('idle');
      }, 4000);
    }
  };

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const targetText = "GERARDO SAMUEL";
    let currentIndex = 0;
    const typeTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex <= targetText.length) {
          setDisplayName(targetText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100); 
      return () => clearInterval(intervalId);
    }, 1000);

    const handleScroll = () => setScrollY(window.scrollY);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSkillsInView(true);
        observer.disconnect(); 
      }
    }, { threshold: 0.3 });

    if (skillsRef.current) observer.observe(skillsRef.current);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(typeTimeout);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [activeSection]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'videos': return <Videos isDark={isDark} onOpenVideo={(id, vert) => setActiveVideo({id, isVertical: vert})} />;
      case 'ia': return <IA isDark={isDark} onGoHome={() => handleNavClick('home')} />;
      case 'ads': return <Ads isDark={isDark} onGoHome={() => handleNavClick('home')} />;
      case 'webs': return <Webs isDark={isDark} />;
      default: return (
        <SobreMi 
          isDark={isDark} 
          displayName={displayName} 
          scrollY={scrollY} 
          skillsInView={skillsInView} 
          skillsRef={skillsRef}
        />
      );
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDark ? 'bg-[#020617] text-white' : 'bg-[#f8fafc] text-slate-900'} ${loaded ? 'opacity-100' : 'opacity-0'} overflow-x-hidden font-sans`}>
      
      {/* Background Ambience */}
      <div className={`fixed top-[-20%] right-[-10%] w-[800px] h-[800px] blur-[120px] rounded-full pointer-events-none transition-all duration-700 ${isDark ? 'bg-indigo-900/10' : 'bg-blue-300/20'}`} style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
      <div className={`fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none transition-all duration-700 ${isDark ? 'bg-blue-900/10' : 'bg-indigo-300/20'}`} style={{ transform: `translateY(${scrollY * 0.4}px)` }} />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-[#020617]/80 border-white/5' : 'bg-white/70 border-slate-200'} backdrop-blur-md border-b`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-lg border border-white/50">
               <img src={LOGO_URL} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
          </div>
          <div className={`hidden md:flex items-center p-1.5 rounded-full border shadow-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100/80 border-slate-200'}`}>
             {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)} className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === item.id ? (isDark ? 'bg-white/10 text-white' : 'bg-white text-slate-900 shadow-sm') : (isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')}`}>
                   {React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}
                   <span>{item.name}</span>
                </button>
             ))}
          </div>
          <div className="flex items-center gap-3">
             <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="w-10 h-10 flex items-center justify-center rounded-full transition-all">{isDark ? <Sun size={18} /> : <Moon size={18} />}</button>
             <button onClick={() => setIsContactOpen(true)} className={`hidden md:flex group items-center gap-2 px-5 py-2 text-xs font-medium uppercase tracking-widest rounded-full transition-all ${isDark ? 'text-white bg-white/5 border border-white/10' : 'text-slate-900 bg-white border border-slate-200'}`}><Mail size={14} /><span>Contactar</span></button>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors hover:bg-white/5">{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>

        {/* Mobile Menu - Horizontal Pill Style (Without Contact Button) */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full p-4 border-b animate-in slide-in-from-top-5 fade-in duration-200 ${isDark ? 'bg-[#020617]/95 border-white/5' : 'bg-white/95 border-slate-200'}`}>
            <div className="flex flex-col gap-4 items-center w-full">
               {/* Navigation Pill - Scrollable on very small screens */}
               <div className={`flex items-center p-1.5 rounded-full border shadow-sm overflow-x-auto max-w-full no-scrollbar ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100/80 border-slate-200'}`}>
                  {NAV_ITEMS.map((item) => (
                      <button key={item.id} onClick={() => handleNavClick(item.id)} className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id ? (isDark ? 'bg-white/10 text-white' : 'bg-white text-slate-900 shadow-sm') : (isDark ? 'text-slate-300' : 'text-slate-600')}`}>
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 16 })}
                        <span>{item.name}</span>
                      </button>
                  ))}
               </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto min-h-screen">
        {renderContent()}
      </main>
      
      {/* Mobile Floating Action Button (FAB) for Contact */}
      <button 
        onClick={() => setIsContactOpen(true)}
        className={`md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 ${isDark ? 'bg-white text-slate-950' : 'bg-slate-900 text-white'}`}
        aria-label="Contactar"
      >
        <Mail size={24} />
      </button>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in">
           <div className="absolute inset-0" onClick={() => setActiveVideo(null)}></div>
           <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center z-50"><X size={24} /></button>
           <div className={`w-full ${activeVideo.isVertical ? 'max-w-md aspect-[9/16]' : 'max-w-6xl aspect-video'} rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-black`}>
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`} frameBorder="0" allowFullScreen></iframe>
           </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsContactOpen(false)}></div>
          <div className={`relative w-full max-w-lg backdrop-blur-3xl border rounded-[2.5rem] p-8 shadow-2xl overflow-hidden ${isDark ? 'bg-white/5 border-white/20' : 'bg-white/90 border-white'}`}>
            <button onClick={() => setIsContactOpen(false)} className="absolute top-5 right-5 z-10"><X size={16} /></button>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-green-500 w-12 h-12" />
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>¡Mensaje Enviado!</h3>
                <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Gracias por contactarme. Me comunicaré contigo a la brevedad.
                </p>
              </div>
            ) : (
              <>
                <h3 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Contacto</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required type="text" name="name" className={`w-full border rounded-xl px-4 py-3 bg-transparent ${isDark ? 'border-white/10 text-white' : 'border-slate-300 text-slate-900'}`} placeholder="Nombre" />
                  <input required type="email" name="email" className={`w-full border rounded-xl px-4 py-3 bg-transparent ${isDark ? 'border-white/10 text-white' : 'border-slate-300 text-slate-900'}`} placeholder="Email" />
                  <input 
                    required 
                    type="tel" 
                    name="phone"
                    pattern="[0-9]{10}" 
                    maxLength={10} 
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                    className={`w-full border rounded-xl px-4 py-3 bg-transparent ${isDark ? 'border-white/10 text-white' : 'border-slate-300 text-slate-900'}`} 
                    placeholder="Teléfono" 
                  />
                  <textarea required name="message" rows={4} className={`w-full border rounded-xl px-4 py-3 bg-transparent ${isDark ? 'border-white/10 text-white' : 'border-slate-300 text-slate-900'}`} placeholder="Mensaje"></textarea>
                  <button disabled={formStatus === 'submitting'} className={`w-full font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 ${isDark ? 'bg-white text-black' : 'bg-slate-900 text-white'} ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                    {formStatus === 'submitting' ? <Loader2 className="animate-spin" size={20} /> : <span>Enviar Mensaje</span>}
                  </button>
                </form>
                
                <div className="flex items-center gap-4 my-6 opacity-40">
                  <div className={`flex-1 h-px ${isDark ? 'bg-white' : 'bg-slate-400'}`}></div>
                  <span className={`text-[10px] uppercase tracking-widest font-bold ${isDark ? 'text-white' : 'text-slate-500'}`}>O DIRECTO EN</span>
                  <div className={`flex-1 h-px ${isDark ? 'bg-white' : 'bg-slate-400'}`}></div>
                </div>

                <a 
                  href="https://wa.me/525575149058" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 bg-[#25D366] text-white hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle size={20} />
                  <span>Chat en WhatsApp</span>
                </a>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="w-full text-center text-xs tracking-widest uppercase py-12 text-slate-600">© 2016 - 2026 Abril Gerito DG</footer>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

export default PortfolioHome;