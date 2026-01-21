import React from 'react';
import { WHATSAPP_LINK, CLIENT_CONFIG, ALL_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  // Dividindo os 15 serviços (8 em uma coluna, 7 na outra)
  const col1 = ALL_SERVICES.slice(0, 8);
  const col2 = ALL_SERVICES.slice(8);

  return (
    <footer className="bg-slate-950 text-slate-500 pt-24 pb-12 relative overflow-hidden font-inter border-t border-slate-900">
      {/* Luz Ambiental Sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

          <div className="lg:col-span-4 space-y-10">
            <button
              onClick={() => onNavigate?.('home')}
              className="flex items-center gap-3 text-left"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-slate-900 font-black text-2xl italic">C</span>
              </div>
              <div>
                <span className="text-xl font-black text-white block tracking-tighter uppercase leading-none">CRISTAL GLASS</span>
                <span className="text-blue-500 font-bold text-[9px] tracking-[0.4em] uppercase">Vidraçaria Premium</span>
              </div>
            </button>

            <p className="text-sm leading-relaxed font-medium max-w-sm">
              Referência em engenharia vidreira em {CLIENT_CONFIG.city}. Projetos sob medida com acabamento técnico milimétrico e suporte especializado.
            </p>

            <div className="flex gap-4 grayscale opacity-40">
              {/* Simulating Trust Badges */}
              <div className="w-10 h-10 border border-slate-800 rounded-lg flex items-center justify-center text-[10px] font-black italic">ABNT</div>
              <div className="w-10 h-10 border border-slate-800 rounded-lg flex items-center justify-center text-[10px] font-black italic">1YR</div>
              <div className="w-10 h-10 border border-slate-800 rounded-lg flex items-center justify-center text-[10px] font-black italic">100%</div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Serviços</h4>
              <ul className="space-y-4">
                {col1.map((s) => (
                  <li key={s.id}>
                    <a
                      href={getServiceWhatsAppLink(s.title)}
                      target="_blank"
                      className="text-[11px] font-bold hover:text-blue-600 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Adicionais</h4>
              <ul className="space-y-4">
                {col2.map((s) => (
                  <li key={s.id}>
                    <a
                      href={getServiceWhatsAppLink(s.title)}
                      target="_blank"
                      className="text-[11px] font-bold hover:text-blue-600 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
              <h4 className="text-white font-black text-2xl tracking-tighter mb-6 italic leading-none">
                Atendimento <br /> <span className="text-slate-400">em Tempo Real.</span>
              </h4>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 w-full py-5 bg-[#22c55e] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-[#16a34a] hover:-translate-y-1 shadow-2xl shadow-green-500/20 px-6"
              >
                {CTA_TEXT}
              </a>

              <div className="mt-8">
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-none mb-3">Atendimento na Capital</p>
                <p className="text-blue-500 font-black text-sm">{CLIENT_CONFIG.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">
            © {currentYear} {CLIENT_CONFIG.name.toUpperCase()} • ENGENHARIA DE VIDROS
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-700">
            <button onClick={() => onNavigate?.('home')}>Início</button>
            <button onClick={() => onNavigate?.('servicos')}>Catálogo</button>
            <button onClick={() => onNavigate?.('sobre')}>Sobre</button>
            <button onClick={() => onNavigate?.('contato')}>Contato</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;