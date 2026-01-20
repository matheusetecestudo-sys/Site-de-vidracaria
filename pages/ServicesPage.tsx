
import React, { useEffect } from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ((window as any).lucide) (window as any).lucide.createIcons();
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header com Gatilhos Mentais */}
        <div className="text-center mb-20 reveal active">
          <span className="text-emerald-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 block">Engenharia e Sofisticação</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1] sm:leading-none">
            Soluções que <br/> <span className="text-emerald-600 italic">valorizam seu imóvel.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Elimine o amadorismo. Escolha vidros certificados NBR com instalação técnica milimétrica e <span className="text-slate-900 font-bold">preço direto de usina.</span>
          </p>
        </div>

        {/* Grid de Serviços Otimizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="reveal active bg-slate-50 rounded-[3rem] p-8 border border-slate-100 flex flex-col h-full hover:bg-white hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 group"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-inner bg-slate-200">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                
                {/* Badge de Destaque para serviços principais - Resolvido através da tipagem Service no arquivo constants.ts */}
                {service.tag && (
                   <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {service.tag}
                   </div>
                )}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-10 flex-grow leading-relaxed font-medium">
                {service.description}
              </p>
              
              <a 
                href={getServiceWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-[11px] text-center uppercase tracking-[0.2em] shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                {service.cta}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          ))}
        </div>

        {/* Banner de Autoridade Final */}
        <div className="mt-32 p-8 sm:p-20 bg-slate-900 rounded-[3rem] sm:rounded-[4rem] text-center relative overflow-hidden reveal active">
           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
           
           <div className="relative z-10">
              <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Negociação Direta com Especialista</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                Fale com quem <br/> <span className="text-emerald-500 italic">entende do assunto.</span>
              </h2>
              <p className="text-slate-400 mb-12 max-w-xl mx-auto text-sm sm:text-lg font-medium leading-relaxed">
                Nossos consultores técnicos estão online para analisar suas fotos e medidas em tempo real. Orçamento sem compromisso e sem burocracia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a 
                  href={getServiceWhatsAppLink("Consultoria Técnica Geral")} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 px-10 py-6 bg-emerald-600 text-white rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] shadow-2xl hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95"
                >
                  ORÇAR NO WHATSAPP
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
