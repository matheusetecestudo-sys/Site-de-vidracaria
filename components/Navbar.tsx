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
    { label: 'A Marca', id: 'sobre' },
    { label: 'Atendimento', id: 'contato' }
  ];

  return (
    <>
      <header className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-500 ${scrolled ? 'glass-effect py-3 px-6 rounded-2xl shadow-xl' : 'py-5 px-4 bg-transparent'
        }`}>
        <div className="flex justify-between items-center">

          <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm transition-all ${scrolled ? 'bg-emerald-600' : 'bg-slate-900 group-hover:bg-emerald-600'}`}>C</div>
            <span className="text-base font-black tracking-tighter text-slate-900 uppercase">Cristal Glass</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-[9px] font-black uppercase tracking-widest transition-all relative py-1 ${currentPage === item.id ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-600'
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-3 px-5 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all ${scrolled ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-900 text-white hover:bg-emerald-600'
                }`}
            >
              Orçamento WhatsApp
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`h-[2px] bg-emerald-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`h-[2px] bg-emerald-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[2px] bg-emerald-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[90] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="h-full flex flex-col justify-center items-center gap-8 px-10">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-4xl font-black tracking-tighter transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${currentPage === item.id ? 'text-emerald-600' : 'text-slate-900'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            className="mt-4 px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-600/20"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
