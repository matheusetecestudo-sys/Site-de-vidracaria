
import React from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

const Gallery: React.FC = () => {
  // Pegamos os serviços que não estão nos 4 principais para mostrar aqui em formato menor
  const secondaryServices = ALL_SERVICES.slice(4);

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal active">
          <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Catálogo de Soluções</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Variedade e <span className="text-emerald-600 italic">Especialização.</span></h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com toda a linha de vidros temperados e laminados para projetos residenciais e comerciais.
          </p>
        </div>

        {/* Grid de imagens menores para os outros serviços */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {secondaryServices.map((service, index) => (
            <a 
              key={service.id}
              href={getServiceWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal active group relative block aspect-square overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100 transition-all duration-500 hover:shadow-xl"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100">
                <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full text-center md:text-left">
                  <p className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest leading-tight mb-2">{service.title}</p>
                  <div className="inline-block bg-emerald-600 text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    ORÇAR AGORA
                  </div>
                </div>
              </div>
            </a>
          ))}
          
          {/* Card Final de Chamada */}
          <a 
            href={getServiceWhatsAppLink("Consultoria Geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal active flex flex-col items-center justify-center aspect-square rounded-[2rem] bg-emerald-600 p-6 text-center group hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              <i data-lucide="plus" className="w-6 h-6"></i>
            </div>
            <p className="text-white font-black text-[10px] uppercase tracking-widest leading-tight">Peça seu orçamento no WhatsApp</p>
          </a>
        </div>

        <div className="mt-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center reveal active">
          <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-widest">Precisa de um modelo específico de vidro ou ferragem?</p>
          <a 
            href={getServiceWhatsAppLink("Estoque e Ferragens")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[#00966d] font-black text-sm uppercase tracking-widest border-b-2 border-[#00966d] pb-1 hover:text-emerald-700 transition-all"
          >
            Peça seu orçamento no WhatsApp
            <i data-lucide="chevron-right" className="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
