import React, { useEffect } from 'react';
import { getWhatsAppLink, WHATSAPP_LINK, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24 pb-32">
        <header className="py-16 bg-slate-50 border-b border-slate-100 mb-16">
          <div className="container-precision">
            <div className="max-w-3xl reveal active mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Atendimento Direto</span>
                <span className="w-10 h-[1px] bg-brand-accent"></span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black !text-brand-accent leading-[1] mb-8 tracking-tight">
                Vamos projetar <br />
                <span className="!text-slate-400 font-medium">Sua ideia.</span>
              </h1>
              <p className="text-xl !text-slate-900 font-medium leading-relaxed max-w-xl mx-auto">
                Escolha o canal mais rápido para falar com nossos especialistas técnicos.
              </p>
            </div>
          </div>
        </header>

        <section className="container-precision">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-20 items-start">

            <div className="lg:col-span-12 reveal active">
              <div className="bg-slate-950 rounded-3xl p-6 md:p-16 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />

                <h2 className="text-xl md:text-3xl font-black mb-10 tracking-tight leading-none italic text-center !text-brand-accent">Atendimento Imediato.</h2>

                <div className="space-y-12 mb-12 max-w-2xl mx-auto">
                  <a
                    href={getWhatsAppLink("Página de Contato", "Botão WhatsApp Imediato")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-6 p-10 bg-white/5 rounded-3xl border border-white/5 hover:bg-brand-accent transition-all duration-500 text-center"
                  >
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-slate-950 shadow-xl group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-black tracking-tight group-hover:text-white transition-colors mb-2">WhatsApp comercial</span>
                      <span className="text-[10px] font-bold !text-slate-300 uppercase tracking-widest group-hover:text-white/70 transition-colors">Resposta imediata</span>
                    </div>
                  </a>

                  <div className="p-10 bg-white/5 rounded-3xl border border-white/5 text-center flex flex-col items-center">
                    <p className="text-[10px] font-bold !text-slate-300 uppercase tracking-widest leading-none mb-6">Unidade de Atendimento</p>
                    <p className="text-2xl font-black mb-4 !text-white leading-tight">{CLIENT_CONFIG.address}</p>
                    <p className="!text-slate-300 font-medium text-lg">Serviço imediato para toda Grande São Paulo e Interior.</p>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-wrap justify-center gap-10">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none mb-2">Telefone Comercial</span>
                    <span className="text-lg font-black text-brand-accent">{CLIENT_CONFIG.phoneDisplay}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none mb-2">Horário Operacional</span>
                    <span className="text-lg font-black">Seg a Sex • 08h às 18h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 reveal active">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100 shadow-sm text-center flex flex-col items-center">
                <h3 className="text-2xl font-black !text-brand-accent mb-8 tracking-tight leading-none text-center">Prepare seu Orçamento.</h3>
                <p className="!text-slate-900 font-medium leading-relaxed mb-10 text-center mx-auto">
                  Dica: Para um retorno técnico mais preciso, tenha em mãos:
                </p>

                <ul className="space-y-6 max-w-md mx-auto text-center w-full">
                  {[
                    "Medidas aproximadas (largura x altura)",
                    "Tipo do vidro (temperado, laminado, etc)",
                    "Foto do local da instalação",
                    "Cor do vidro e das ferragens"
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="!text-slate-900 font-bold leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 p-6 bg-brand-accent/5 rounded-3xl border border-brand-accent/10 max-w-xl mx-auto">
                  <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-3">Dúvida Técnica?</p>
                  <p className="text-sm font-medium !text-slate-900 leading-relaxed">Nossos orçamentistas são técnicos experientes. Não cobramos pela consultoria inicial.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
