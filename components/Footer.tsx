import React from 'react';
import { WHATSAPP_LINK, CLIENT_CONFIG, ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const col1 = ALL_SERVICES.slice(0, 8);
  const col2 = ALL_SERVICES.slice(8);

  return (
    <footer className="bg-slate-950 text-slate-500 pt-32 pb-12 relative overflow-hidden font-inter border-t border-white/5">
      <div className="container-precision relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-start">

          <div className="lg:col-span-4 space-y-10">
            <button
              onClick={() => onNavigate?.('home')}
              className="flex items-center gap-4 text-left group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <span className="text-slate-900 font-black text-2xl italic">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">CRISTAL GLASS</span>
                <span className="text-blue-500 font-bold text-[9px] tracking-[0.4em] uppercase mt-1">Vidraçaria Premium</span>
              </div>
            </button>

            <p className="text-sm leading-relaxed font-medium max-w-sm">
              Referência em engenharia vidreira em {CLIENT_CONFIG.city}. Projetos sob medida com acabamento técnico milimétrico e suporte especializado.
            </p>

            <div className="flex gap-4 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-[10px] font-black text-white italic">ABNT</div>
              <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-[10px] font-black text-white italic">1YR</div>
              <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-[10px] font-black text-white italic">100%</div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-6">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em]">Serviços</h4>
              <ul className="space-y-4">
                {col1.map((s) => (
                  <li key={s.id}>
                    <a
                      href={getServiceWhatsAppLink(s.title)}
                      target="_blank"
                      className="text-[11px] font-medium hover:text-blue-500 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em]">Projetos</h4>
              <ul className="space-y-4">
                {col2.map((s) => (
                  <li key={s.id}>
                    <a
                      href={getServiceWhatsAppLink(s.title)}
                      target="_blank"
                      className="text-[11px] font-medium hover:text-blue-500 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
              <h4 className="text-white font-black text-2xl tracking-tighter mb-8 italic leading-tight">
                Atendimento <br /> <span className="text-slate-500 font-medium not-italic text-xl">em tempo real.</span>
              </h4>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 flex items-center justify-center w-full bg-emerald-500 text-white rounded-xl font-bold text-xs btn-interact shadow-lg shadow-emerald-500/10"
              >
                Peça seu orçamento no WhatsApp
              </a>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none mb-3">Linha Direta</p>
                <p className="text-blue-500 font-black text-lg">{CLIENT_CONFIG.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-800">
            © {currentYear} {CLIENT_CONFIG.name.toUpperCase()} • ENGENHARIA TÉCNICA
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-700">
            <button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors">Início</button>
            <button onClick={() => onNavigate?.('servicos')} className="hover:text-white transition-colors">Catálogo</button>
            <button onClick={() => onNavigate?.('sobre')} className="hover:text-white transition-colors">Sobre</button>
            <button onClick={() => onNavigate?.('contato')} className="hover:text-white transition-colors">Contato</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;