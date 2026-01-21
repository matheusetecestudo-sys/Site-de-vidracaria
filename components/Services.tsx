import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal active">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
              Nossas Soluções <br />
              <span className="text-slate-400">em Destaque.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed">
              Equilíbrio perfeito entre <span className="text-blue-600">tecnologia vidreira</span> e sofisticação arquitetônica para seu ambiente.
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('servicos')}
            className="group flex items-center gap-4 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all duration-500"
          >
            Ver catálogo completo
            <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-blue-600 transition-colors"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FEATURED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="reveal active group relative bg-slate-50 rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-900/5 border border-slate-100"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {service.tag && (
                  <div className="absolute top-8 left-8 glass-card px-6 py-2 rounded-full text-[9px] font-black text-slate-900 uppercase tracking-widest shadow-xl">
                    {service.tag}
                  </div>
                )}
              </div>

              <div className="p-10 md:p-14">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors duration-500 italic">0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{service.title}</h3>
                </div>

                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-5 px-10 py-5 bg-[#22c55e] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#16a34a] transition-all duration-500 shadow-lg shadow-green-500/20 active:scale-95 group/btn"
                >
                  {CTA_TEXT}
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal active">
          <div className="inline-flex items-center gap-6 px-10 py-6 bg-slate-900 text-white rounded-3xl shadow-2xl">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800" />)}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest">Equipe própria com ferramentas de precisão a laser.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;