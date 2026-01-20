import React from 'react';
import { WHATSAPP_LINK, USER_BOX_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-white">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-slate-50/50 -z-0 hidden lg:block rounded-l-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 reveal text-center lg:text-left active">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-emerald-100 mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              CONSULTORIA TÉCNICA ESPECIALIZADA
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              A Excelência <br className="hidden md:block"/> 
              que Valoriza o <br className="hidden md:block"/>
              <span className="text-emerald-600 italic">Vidro de Luxo.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Não arrisque sua obra. Tenha a consultoria de quem domina o mercado de vidros com <span className="text-slate-900 font-bold">preço direto de usina</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                className="group inline-flex items-center justify-center gap-4 px-12 py-7 text-sm font-black text-white bg-emerald-600 rounded-2xl shadow-[0_20px_40px_rgba(5,150,105,0.25)] hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest w-full sm:w-auto"
              >
                Peça seu orçamento no WhatsApp
                <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <div className="flex items-center gap-4 px-8 py-7 bg-slate-50 border border-slate-100 rounded-2xl">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-8 h-8 rounded-full border-2 border-white" alt=""/>) }
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight text-left">
                    Especialista Online <br/> <span className="text-emerald-600">Atendimento VIP</span>
                 </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block reveal active">
            <div className="relative rounded-[5rem] bg-slate-100 aspect-[4/5] overflow-hidden shadow-3xl border-[12px] border-white">
              <img
                src={USER_BOX_IMAGE}
                alt="Box de Banheiro de Luxo"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                 <div className="text-white font-black text-lg mb-1 leading-none tracking-tight">Sua Obra, Nossa Missão</div>
                 <p className="text-emerald-100 font-medium text-xs">Exatamente como no projeto.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { animation: bounce-x 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;