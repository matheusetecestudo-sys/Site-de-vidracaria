import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-slate-50 overflow-hidden">
      {/* Elementos Decorativos de Fundo (Simulando Vidro e Profundidade) */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] shadow-[0_0_100px_rgba(0,0,0,0.01)] z-0 pointer-events-none" />
      <div className="absolute top-[15%] left-[-5%] w-96 h-96 bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 reveal active">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-blue-600 rounded-full"></span>
              <span className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[0.4em]">Vidraçaria de Alta Performance</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter">
              A Engenharia do <br />
              <span className="text-slate-400">Vidro Moderno.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12">
              Projetos sob medida em vidros e espelhos com <span className="text-slate-900 font-bold">instalação técnica imedidada</span> e acabamento padrão arquitetura.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-6 px-12 py-6 bg-[#22c55e] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#16a34a] hover:-translate-y-1.5 transition-all duration-500 shadow-[0_20px_40px_rgba(34,197,94,0.3)]"
              >
                {CTA_TEXT}
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>

              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-blue-600/10" />
                    </div>
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-black text-slate-900">4.500+</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-slate-200/50">
              <div className="space-y-1">
                <p className="text-2xl font-black text-slate-900">20+</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Anos de Mercado</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-slate-900">48h</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Prazo de Entrega</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-slate-900">SP</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Atendimento Local</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-slate-900">100%</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Aprovação Técnica</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal active hidden lg:block">
            <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[3.5/5] shadow-2xl border-[12px] border-white">
              <img src="/images/fachada-principal.jpg" alt="Vidraçaria Premium" className="w-full h-full object-cover scale-105" />

              {/* Floating Micro-UI Component */}
              <div className="absolute inset-x-10 bottom-10 glass-card p-10 rounded-[2.5rem] shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Certificado de Segurança</p>
                    <p className="text-xl font-black text-slate-900 leading-tight">Garantia na Instalação</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Backdrop shapes */}
            <div className="absolute -top-12 -right-12 w-full h-full bg-blue-600/5 rounded-[5rem] -z-10 rotate-6" />
            <div className="absolute -top-12 -right-12 w-full h-full bg-blue-600/5 rounded-[5rem] -z-10 -rotate-3 border-2 border-blue-100" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;