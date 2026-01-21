import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      <header className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[1280px] z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 px-6 md:px-10 rounded-2xl shadow-xl' : 'py-6 px-4 bg-transparent'
        }`}>
        <div className="flex justify-between items-center h-12">

          <button onClick={() => handleNav('home')} className="flex items-center gap-4 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg transition-all duration-500 ${scrolled ? 'bg-blue-600' : 'bg-slate-900 group-hover:bg-blue-600'}`}>
              C
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-sm font-black tracking-tighter text-slate-900 uppercase">Cristal Glass</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Vidraçaria Premium</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${currentPage === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center px-6 h-12 bg-emerald-500 text-white rounded-xl font-bold text-xs btn-interact shadow-lg shadow-emerald-500/20"
            >
              Peça seu orçamento no WhatsApp
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="h-full flex flex-col justify-center items-center gap-12 px-10">
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-4xl font-black tracking-tighter transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } ${currentPage === item.id ? 'text-blue-600' : 'text-slate-900'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className={`w-24 h-[1px] bg-slate-100 transition-all duration-1000 ${isMenuOpen ? 'scale-x-100' : 'scale-x-0'}`} />
          <a
            href={WHATSAPP_LINK}
            className={`px-10 h-14 flex items-center bg-emerald-500 text-white rounded-2xl font-bold text-sm btn-interact shadow-xl shadow-emerald-500/20 transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            Peça seu orçamento no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
