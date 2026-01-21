
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Trust: React.FC = () => {
  const stats = [
    { label: "Obras Realizadas", value: "+4.500" },
    { label: "Bairros Atendidos", value: "Toda Grande SP" },
    { label: "Garantia Total", value: "12 meses" },
    { label: "Certificação NBR", value: "Aprovado" }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-20 overflow-hidden relative reveal active">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Por que confiar na Cristal?</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                Excelência em <br/> <span className="text-emerald-400 italic">engenharia técnica.</span>
              </h2>
              <p className="text-emerald-100/70 font-medium text-lg mb-12 leading-relaxed max-w-lg">
                Não somos apenas uma vidraçaria comum. Unimos precisão, materiais certificados e uma equipe altamente treinada para entregar o melhor resultado.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 {stats.map((stat, i) => (
                   <div key={i} className="border-l-2 border-emerald-500/30 pl-6">
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl p-10 lg:p-14 rounded-[3rem] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl font-black text-white">Consultoria Técnica</h3>
              </div>
              <p className="text-emerald-100/60 mb-10 font-medium text-sm">
                Aproveite o conhecimento de especialistas para o seu projeto. Evite prejuízos com materiais mal dimensionados.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 w-full py-6 bg-emerald-600 text-white font-black text-sm rounded-2xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
              >
                Peça seu orçamento no WhatsApp
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <p className="text-center mt-6 text-[9px] text-white/30 font-bold uppercase tracking-widest italic">
                Clique acima para atendimento direto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
