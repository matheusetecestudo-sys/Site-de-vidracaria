import React from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

const Gallery: React.FC = () => {
  const galleryServices = ALL_SERVICES;

  return (
    <section id="solucoes" className="py-8 pb-16 md:py-10 bg-white font-inter">
      <div className="container-precision">
        <div className="text-center mb-8 reveal active">

          <h2 className="text-4xl md:text-6xl font-black !text-brand-accent mb-8 tracking-tight leading-[1] text-center">
            Portfólio de <br />
            <span className="text-brand-accent font-normal">Soluções Vidreiras.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryServices.map((service, index) => (
            <a
              key={service.id}
              href={getServiceWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal active group relative block aspect-square overflow-hidden rounded-[2rem] bg-brand-light border border-brand-accent/10 transition-all duration-500 hover:shadow-2xl btn-interact"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 pb-10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-[0.3em] leading-tight mb-5 drop-shadow-2xl">{service.title}</p>
                <div className="inline-flex items-center gap-2 bg-brand-accent text-black text-[9px] md:text-[11px] font-black px-5 py-3 rounded-full shadow-2xl scale-90 md:scale-100 border-2 border-transparent group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Orçar via WhatsApp
                </div>
              </div>
            </a>
          ))}

          <a
            href={getServiceWhatsAppLink("Outros Serviços")}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal active flex flex-col items-center justify-center aspect-square rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-brand-accent via-brand-accent to-[#B8860B] p-8 text-center group transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(212,175,55,0.3)] relative overflow-hidden btn-interact border-b-4 border-black/10"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-3xl flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500 shadow-2xl relative">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-3xl animate-ping group-hover:block hidden" />
              <svg className="w-8 h-8 md:w-10 md:h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <div className="space-y-2">
              <p className="text-black font-black text-[10px] md:text-xs uppercase tracking-[0.4em] leading-none mb-1">Explore Mais</p>
              <h4 className="text-black font-normal text-lg md:text-2xl tracking-tighter leading-none opacity-80">Possibilidades.</h4>
            </div>

            <div className="mt-8 flex items-center gap-2 px-5 py-2.5 bg-black text-brand-accent rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-xl group-hover:scale-105 transition-transform duration-500">
              WhatsApp Direto
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;