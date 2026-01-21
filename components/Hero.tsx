import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden">
      {/* Detalhe Decorativo de Fundo em Verde */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          <div className="lg:col-span-3">
            <div className="reveal active flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-emerald-600/20">Referência em São Paulo</span>
              <div className="h-[1px] flex-1 bg-emerald-100"></div>
            </div>

            <h1 className="reveal active text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              A Engenharia do <br />
              <span className="text-emerald-600 italic">Vidro de Elite.</span>
            </h1>

            <p className="reveal active text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-10">
              Projetos sob medida com <span className="text-emerald-600 font-bold uppercase tracking-wider">segurança máxima</span> e design contemporâneo para residências e empresas.
            </p>

            <div className="reveal active flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 px-10 py-5 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-emerald-600/30"
              >
                <div className="flex flex-col">
                  <span className="font-black text-[10px] uppercase tracking-widest opacity-80 leading-none mb-1">Falar com Especialista</span>
                  <span className="font-black text-sm uppercase tracking-[0.1em]">Orçamento WhatsApp</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>

              <div className="flex items-center gap-4 px-6 py-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-emerald-200" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest leading-tight">
                  +4.500 Projetos <br /> Entregues com Sucesso
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 reveal active hidden lg:block">
            <div className="relative">
              <div className="absolute inset-x-4 -inset-y-4 bg-emerald-600 rounded-[3rem] rotate-3 opacity-5"></div>
              <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl border-4 border-emerald-50">
                <img src="/images/box-banheiro.jpg" alt="Vidraçaria Premium" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-effect rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      Instalação Garantida <br /> em até 48 horas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;