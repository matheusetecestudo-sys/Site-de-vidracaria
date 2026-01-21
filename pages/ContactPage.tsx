
import React, { useEffect } from 'react';
import { CLIENT_CONFIG, WHATSAPP_LINK } from '../constants.ts';

const ContactPage: React.FC = () => {
  useEffect(() => {
    if ((window as any).lucide) (window as any).lucide.createIcons();
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Idêntico ao Print */}
        <div className="text-center mb-16 reveal active">
          <span className="text-[#2563eb] font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 block">Central de Atendimento</span>
          <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[1] sm:leading-[0.9]">
            Orçamento direto <br className="hidden sm:block"/> <span className="text-[#2563eb]">via WhatsApp.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-500 max-w-xl mx-auto font-medium leading-relaxed px-2">
            Nossa equipe técnica analisa seu projeto em tempo real. Sem formulários lentos, sem espera.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Card Principal de Ação */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <a 
              href={WHATSAPP_LINK}
              className="relative group bg-[#2563eb] rounded-[3.5rem] p-10 shadow-2xl shadow-blue-600/20 hover:bg-blue-700 transition-all hover:-translate-y-2 active:scale-95 reveal active"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-[100px] pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center md:items-start md:flex-row gap-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center text-white shadow-inner shrink-0">
                  <i data-lucide="message-circle" className="w-10 h-10"></i>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-white text-3xl font-black mb-1 tracking-tight">Falar com Consultor</h3>
                  <p className="text-blue-100 font-bold text-lg mb-6 leading-tight">Envie fotos e medidas agora.</p>
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur px-5 py-2.5 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                    <span className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-pulse" />
                    Engenheiro Online
                  </div>
                </div>
              </div>
            </a>

            <div className="grid md:grid-cols-2 gap-6 reveal active">
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 flex flex-col items-center md:items-start text-center md:text-left h-full">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2563eb] shadow-sm mb-6">
                  <i data-lucide="map-pin" className="w-6 h-6"></i>
                </div>
                <h4 className="font-black text-slate-900 text-xl mb-2">Unidade Central</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">{CLIENT_CONFIG.address}</p>
                <div className="mt-auto">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">E-mail</p>
                   <p className="text-slate-900 font-bold text-sm">{CLIENT_CONFIG.email}</p>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[3rem] text-center md:text-left flex flex-col items-center md:items-start h-full text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-white/5">
                  <i data-lucide="clock" className="w-6 h-6"></i>
                </div>
                <h4 className="font-black text-white text-xl mb-2">Horário Comercial</h4>
                <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">{CLIENT_CONFIG.openingHours}</p>
                <div className="mt-auto">
                  <span className="inline-block px-5 py-2 bg-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-500/30">
                    Atendimento Imediato
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Contextual */}
          <div className="lg:col-span-5 reveal active">
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] h-full">
              <h4 className="text-2xl font-black text-slate-900 mb-8 tracking-tight flex items-center justify-center md:justify-start gap-4">
                <span className="w-10 h-10 bg-blue-50 text-[#2563eb] rounded-xl flex items-center justify-center text-lg">⚙️</span>
                Checklist Orçamento
              </h4>
              
              <ul className="space-y-6">
                {[
                  { title: "Foto do Local", desc: "Para identificar fixação.", icon: "camera" },
                  { title: "Medidas Gerais", desc: "Altura e largura.", icon: "ruler" },
                  { title: "Cor do Vidro", desc: "Incolor, Fumê ou Jateado.", icon: "palette" },
                  { title: "Bairro", desc: "Para logística.", icon: "navigation" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#2563eb] group-hover:text-white transition-all shrink-0">
                      <i data-lucide={item.icon} className="w-5 h-5 stroke-[2px]"></i>
                    </div>
                    <div className="text-center md:text-left">
                      <h5 className="font-black text-slate-900 text-sm leading-tight mb-1">{item.title}</h5>
                      <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 text-center">
                 <p className="text-[10px] font-black text-[#2563eb] uppercase tracking-[0.2em] mb-3">Qualidade de Usina</p>
                 <p className="text-[11px] text-slate-500 font-bold leading-relaxed italic">
                   "Trabalhamos apenas com vidros temperados certificados e ferragens de alta durabilidade."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
