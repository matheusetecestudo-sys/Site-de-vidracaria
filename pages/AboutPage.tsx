
import React, { useState } from 'react';
import { CLIENT_CONFIG } from '../constants.ts';

const AboutPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal active">
            <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4 block">Sobre a Cristal Glass</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Excelência e Precisão em <br/><span className="text-emerald-600">Engenharia de Vidros.</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                A <strong>{CLIENT_CONFIG.name}</strong> é referência em soluções de vidraçaria de luxo em {CLIENT_CONFIG.city}. Nosso foco é unir a transparência do vidro com o rigor da segurança estrutural.
              </p>
              <p>
                Nossa história é pautada pela entrega de projetos impecáveis. Investimos continuamente em tecnologias de medição a laser e ferragens de alto desempenho para garantir que cada instalação seja única e duradoura.
              </p>
              <p className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 italic text-emerald-900">
                "Vidro não é apenas estética, é segurança. Nosso compromisso é entregar a tranquilidade e o brilho que seu imóvel merece através de uma execução profissional."
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-3xl font-black text-emerald-600 mb-1">Elite</p>
                <p className="text-sm font-bold text-slate-900">Equipe Técnica</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-3xl font-black text-emerald-600 mb-1">+4.5k</p>
                <p className="text-sm font-bold text-slate-900">Projetos Executados</p>
              </div>
            </div>
          </div>
          
          <div className="reveal active relative">
            <div className={`relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 aspect-[4/5] lg:aspect-auto lg:h-[600px] img-placeholder ${loaded ? 'loaded' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=75&w=1000" 
                alt="Especialista em Vidros" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                onLoad={() => setLoaded(true)}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[240px] z-20">
               <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               </div>
               <p className="text-slate-900 font-black text-lg leading-tight">Conformidade Técnica ABNT em cada obra.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
