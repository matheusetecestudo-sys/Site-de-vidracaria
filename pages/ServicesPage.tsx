import React, { useEffect } from 'react';
import { ALL_SERVICES, FEATURED_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredIds = FEATURED_SERVICES.map(s => s.id);

  return (
    <div className="pt-40 pb-32 bg-slate-50 min-h-screen font-inter">
      <div className="max-w-7xl mx-auto px-6">

        <header className="max-w-3xl mb-24 reveal active">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-blue-600"></span>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Nosso Portfólio Técnico</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
            Soluções Completas <br />
            em <span className="text-slate-400">Vidros e Espelhos.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            De reparos imediatos a grandes projetos arquitetônicos. Selecione o serviço desejado e receba seu orçamento agora.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service) => {
            const isFeatured = featuredIds.includes(service.id);
            return (
              <div
                key={service.id}
                className={`reveal active group flex flex-col transition-all duration-500 ${isFeatured ? 'lg:col-span-1' : ''
                  }`}
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-200 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />
                  {isFeatured && (
                    <div className="absolute top-6 left-6 glass-card px-5 py-2 rounded-full">
                      <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest italic">Destaque</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                    <p className="text-white text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 flex-grow">
                  <h3 className={`text-2xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors`}>
                    {service.title}
                  </h3>

                  <a
                    href={getServiceWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-4 bg-[#22c55e] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-green-500/20"
                  >
                    {CTA_TEXT}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <section className="mt-40 reveal active">
          <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-[-15deg] pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                Projetos corporativos e <br />
                demandas de <span className="text-blue-500 italic">alto volume.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                Atendemos construtoras, condomínios e arquitetos com condições exclusivas e gestão técnica dedicada.
              </p>
              <a
                href={getServiceWhatsAppLink("Projeto Corporativo")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-12 py-6 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl"
              >
                Consultar Gerente Técnico
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;