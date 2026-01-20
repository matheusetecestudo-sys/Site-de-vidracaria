import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 reveal active">
          <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Consultoria Técnica de Elite</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">O Que Você <span className="text-emerald-600 italic">Precisa Hoje?</span></h2>
        </div>
        
        {/* GRID DE DESTAQUES (OS 4 PRINCIPAIS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {FEATURED_SERVICES.map((service) => (
            <div key={service.id} className="reveal active bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                />
                {service.tag && (
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    {service.tag}
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{service.description}</p>
                <a 
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 bg-emerald-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  {service.cta}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal active">
           <button 
             onClick={() => onNavigate?.('servicos')}
             className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-emerald-600 transition-colors border-b border-transparent hover:border-emerald-600 pb-1"
           >
             Analisar Todos os 15 Serviços Técnicos
           </button>
        </div>
      </div>
    </section>
  );
};

export default Services;