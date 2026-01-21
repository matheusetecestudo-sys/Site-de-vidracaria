import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Trust: React.FC = () => {
  const stats = [
    { label: "Obras Realizadas", value: "4.500+" },
    { label: "Bairros Atendidos", value: "Toda Grande SP" },
    { label: "Garantia Técnica", value: "12 meses" },
    { label: "Certificação NBR", value: "Aprovado" }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative reveal active shadow-2xl">
          {/* Detalhes Arquitônicos de Fundo */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/5 skew-x-[-15deg] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[2px] bg-blue-500"></span>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Credibilidade Técnica</span>
              </div>
              <h2 className="text-4xl md:text-[4.5rem] font-black text-white mb-10 leading-[0.95] tracking-tighter">
                O Padrão <br /> <span className="text-slate-500 italic">de Excelência.</span>
              </h2>
              <p className="text-slate-400 font-medium text-xl mb-12 leading-relaxed max-w-lg">
                Projetos que exigem rigor técnico e acabamento de alto luxo. Unimos o preço direto de usina à precisão de engenharia.
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-t border-white/5 pt-12">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-white mb-2 tracking-tighter italic">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 ring-1 ring-white/10 backdrop-blur-3xl p-12 lg:p-16 rounded-[3.5rem] shadow-2xl">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-3xl flex items-center justify-center text-blue-500 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">Análise Gratuita</h3>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Engenharia Consultiva</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-12 font-medium text-lg leading-relaxed">
                  Enviamos um especialista para avaliar seu projeto sem compromisso. Segurança e economia desde a primeira conversa.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-6 w-full py-7 bg-[#22c55e] text-white font-black text-sm rounded-2xl hover:bg-[#16a34a] transition-all duration-500 shadow-2xl shadow-green-500/30 hover:-translate-y-1.5 active:scale-95 uppercase tracking-widest px-4"
                >
                  {CTA_TEXT}
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-2 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
