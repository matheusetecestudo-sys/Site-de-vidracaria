
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Análise Técnica",
      desc: "Triagem técnica de vãos e estruturas baseada em normas de segurança e engenharia de vidros.",
      icon: "binary"
    },
    {
      num: "02",
      title: "Aferição a Laser",
      desc: "Medição in-loco com precisão milimétrica, garantindo o prumo e nível absoluto da instalação.",
      icon: "ruler"
    },
    {
      num: "03",
      title: "Entrega Técnica",
      desc: "Entrega com selo de conformidade NBR e termo de garantia estrutural de 12 meses.",
      icon: "shield-check"
    }
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none grayscale">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=60&w=2000" 
          alt="Blueprint background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal">
          <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Processo de Qualidade</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Protocolo de Rigor Técnico</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Combinamos precisão técnica com as tecnologias mais modernas de instalação de vidros.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 reveal group" style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="bg-slate-800 border border-emerald-500/30 w-24 h-24 rounded-3xl flex items-center justify-center text-emerald-400 mb-10 mx-auto transition-all group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)]">
                <i data-lucide={step.icon} className="w-10 h-10 stroke-[1px]"></i>
              </div>
              <div className="text-center px-4">
                <div className="text-emerald-500/40 font-black text-[10px] mb-3 tracking-[0.3em] uppercase">Etapa Técnica {step.num}</div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal">
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-6 px-12 py-6 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-[0_20px_40px_rgba(5,150,105,0.3)] active:scale-95">
              Peça seu orçamento no WhatsApp
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
