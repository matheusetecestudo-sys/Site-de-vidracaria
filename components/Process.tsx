import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Consultoria",
      desc: "Entendimento total das necessidades estéticas e técnicas do seu projeto.",
      icon: "message-square"
    },
    {
      num: "02",
      title: "Logística",
      desc: "Medição técnica a laser e agendamento imediato da produção.",
      icon: "ruler"
    },
    {
      num: "03",
      title: "Instalação",
      desc: "Execução limpa e segura com equipe própria e certificada.",
      icon: "check-circle"
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Detalhes de iluminação tipo "Vidro" */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-600/5 skew-x-[-20deg] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24 reveal active">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-blue-500"></span>
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest text-center">Metodologia Cristal Glass</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-8">
            Do Projeto à <br />
            <span className="text-slate-500 italic">Entrega Final.</span>
          </h2>
          <p className="text-slate-400 max-w-lg font-medium text-lg leading-relaxed">
            Eficiência técnica para garantir que seu projeto seja executado sem erros e com acabamento impecável.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div key={index} className="reveal active group">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-6xl font-black text-white/5 group-hover:text-blue-600/20 transition-colors duration-700 leading-none tracking-tighter italic">
                  {step.num}
                </span>
                <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-blue-600/30 transition-all duration-700"></div>
              </div>
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 reveal active border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <p className="text-white text-2xl font-black mb-2 tracking-tight">Pronto para começar?</p>
              <p className="text-slate-500 font-medium">Fale agora com nosso time técnico.</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-8 px-12 py-6 bg-[#22c55e] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-500 shadow-2xl shadow-green-500/20"
            >
              {CTA_TEXT}
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;