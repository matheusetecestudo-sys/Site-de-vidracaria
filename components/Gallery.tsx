import React from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const Gallery: React.FC = () => {
  // Mostramos todos os serviços no catálogo para reforçar a autoridade
  const galleryServices = ALL_SERVICES;

  return (
    <section id="solucoes" className="py-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal active">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-blue-600"></span>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest text-center">Catálogo Completo</span>
            <span className="w-10 h-[1px] bg-blue-600"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
            Portfólio de <br />
            <span className="text-slate-400">Soluções Vidreiras.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {galleryServices.map((service, index) => (
            <a
              key={service.id}
              href={getServiceWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal active group relative block aspect-square overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-50 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] leading-tight mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</p>
                <div className="inline-flex max-w-fit bg-[#22c55e] text-white text-[8px] font-black px-4 py-2.5 rounded-xl uppercase tracking-widest shadow-xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Orçar WhatsApp
                </div>
              </div>
            </a>
          ))}

          <a
            href={getServiceWhatsAppLink("Outros Serviços")}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal active flex flex-col items-center justify-center aspect-square rounded-[2.5rem] bg-slate-900 p-8 text-center group hover:bg-blue-600 transition-all duration-500 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
            </div>
            <p className="text-white font-black text-[10px] uppercase tracking-[0.3em] leading-relaxed italic">{CTA_TEXT}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;