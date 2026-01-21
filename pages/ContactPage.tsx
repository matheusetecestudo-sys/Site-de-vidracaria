import React, { useEffect } from 'react';
import { CLIENT_CONFIG, WHATSAPP_LINK, CTA_TEXT } from '../constants.ts';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-32 bg-slate-50 min-h-screen font-inter">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-20 reveal active">
          <div className="inline-flex items-center gap-3 mb-6 bg-blue-50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Atendimento Digital Imediato</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
            Orçamentos via <br />
            <span className="text-blue-600">WhatsApp.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Eliminamos a burocracia. Envie suas medidas e fotos agora para uma análise técnica em tempo real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          <div className="reveal active flex flex-col gap-8">
            <a
              href={WHATSAPP_LINK}
              className="relative group bg-[#22c55e] rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-[100px] pointer-events-none" />

              <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner transition-transform duration-700 group-hover:rotate-12">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </div>

              <h3 className="text-4xl font-black mb-4 tracking-tight">{CTA_TEXT}</h3>
              <p className="text-green-100 text-xl font-medium mb-10 opacity-90">Tempo médio de resposta: 10 minutos.</p>

              <div className="px-8 py-4 bg-white/10 backdrop-blur rounded-2xl border border-white/20 text-xs font-black uppercase tracking-[0.2em]">
                Iniciar Consultoria Técnica
              </div>
            </a>

            <div className="grid sm:grid-cols-2 gap-6 pb-20">
              <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Localização</p>
                <p className="text-lg font-black text-slate-900 mb-2">{CLIENT_CONFIG.city}</p>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{CLIENT_CONFIG.address}</p>
              </div>
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Horário</p>
                <p className="text-lg font-black mb-2 italic">Atuação Comercial</p>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{CLIENT_CONFIG.openingHours}</p>
              </div>
            </div>
          </div>

          <div className="reveal active">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] h-full">
              <h4 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter">Prepare seu Orçamento</h4>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 text-2xl font-black shrink-0 italic">01</div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">Envie as Medidas</h5>
                    <p className="text-slate-500 font-medium text-base">Altura e largura aproximadas do vão para um cálculo realista.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 text-2xl font-black shrink-0 italic">02</div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">Fotos do Local</h5>
                    <p className="text-slate-500 font-medium text-base">Imagens ajudam nossos técnicos a identificar as ferragens ideais.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 text-2xl font-black shrink-0 italic">03</div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">Defina o Modelo</h5>
                    <p className="text-slate-500 font-medium text-base">Incolor, fumê, bronze, jateado ou com acabamentos especiais.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-50 text-center">
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] mb-4">Segurança de Usina</p>
                <div className="flex justify-center gap-8 grayscale opacity-40">
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
