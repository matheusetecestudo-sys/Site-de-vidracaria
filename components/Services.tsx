import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal active">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter mb-4">
              Nossas <span className="text-emerald-600">Especialidades.</span>
            </h2>
            <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">
              Equilíbrio perfeito entre <span className="text-emerald-600">estética</span> e funcionalidade técnica.
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('servicos')}
            className="group flex items-center gap-3 px-6 py-3 bg-emerald-50 rounded-xl border border-emerald-100 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
          >
            Ver catálogo completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="reveal active group relative bg-slate-50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10 border border-slate-100"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                {service.tag && (
                  <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {service.tag}
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-[2px] bg-emerald-600"></div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{service.title}</h3>
                </div>

                <p className="text-slate-500 text-base font-medium leading-relaxed mb-8">
                  {service.description}
                </p>

                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-emerald-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
                >
                  {CTA_TEXT}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;