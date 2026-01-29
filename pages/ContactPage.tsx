import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">

        {/* --- HERO SECTION (Identical to Home Design) --- */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-slate-50 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="reveal active text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Consultoria Técnica</span>
                <span className="w-10 h-[1px] bg-brand-accent"></span>
              </div>

              <h1 className="text-3xl md:text-7xl lg:text-[92px] font-black !text-brand-accent leading-[1.1] md:leading-[0.85] mb-8 tracking-tight text-center">
                Fale com a <br className="hidden md:block" />
                <span className="text-slate-400 font-medium italic whitespace-nowrap">Nossa Equipe.</span>
              </h1>

              <p className="text-lg md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-2xl mb-16 mx-auto text-center">
                Orçamentos imediatos e consultoria técnica especializada para transformar seu ambiente com o padrão Duno.
              </p>

              <a
                href={getWhatsAppLink("Contato", "Hero CTA")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-20 flex items-center justify-center gap-4 px-12 bg-brand-accent text-white rounded-[2rem] font-bold text-base btn-interact shadow-2xl shadow-brand-accent/30 whitespace-nowrap"
              >
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar orçamento por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* --- CONTACT CHANNELS (Services Section Design) --- */}
        <section className="py-20 bg-white">
          <div className="container-precision">
            <div className="text-center mb-16 reveal active">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Atendimento Direto</span>
                <span className="w-10 h-[1px] bg-brand-accent"></span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black !text-brand-accent leading-[1] mb-8 tracking-tight">
                Canais <br />
                <span className="text-slate-400 font-medium italic">de Comunicação.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Email Card */}
              <div className="reveal active flex flex-col bg-white rounded-[2.5rem] p-10 md:p-12 border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-700 btn-interact text-center items-center">
                <div className="w-16 h-16 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-accent/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">E-mail Técnico</h3>
                <p className="text-xl md:text-2xl font-black text-slate-900 mb-8">{CLIENT_CONFIG.email}</p>
                <a href={`mailto:${CLIENT_CONFIG.email}`} className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-accent/20 hover:scale-[1.05] transition-all">Enviar E-mail</a>
              </div>

              {/* Work Hours Card */}
              <div className="reveal active flex flex-col bg-white rounded-[2.5rem] p-10 md:p-12 border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-700 btn-interact text-center items-center">
                <div className="w-16 h-16 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-accent/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Disponibilidade</h3>
                <p className="text-xl md:text-2xl font-black text-slate-900 mb-4">Segunda a Sábado</p>
                <p className="text-slate-500 font-medium">Das 08:00 às 18:00h</p>
              </div>
            </div>

            {/* Address Card (Full Width in Inner Grid) */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="reveal active flex flex-col md:flex-row items-center gap-8 bg-slate-950 p-10 md:p-12 rounded-[2.5rem] text-white overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex flex-shrink-0 items-center justify-center text-brand-accent border border-white/10 relative z-10">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-3">Unidade São Paulo</h3>
                  <p className="text-xl md:text-2xl font-black mb-4 tracking-tight leading-tight">{CLIENT_CONFIG.address}</p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Showroom Industrial & Logística</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PREPARATION STEPS (HowItWorks Design) --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
          <div className="container-precision">
            <div className="text-center mb-16 reveal active">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Agilize sua proposta</span>
                <span className="w-10 h-[1px] bg-brand-accent"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black !text-brand-accent mb-6 tracking-tight">
                O que ter <span className="text-slate-400 font-medium italic">em mãos?</span>
              </h2>
              <p className="text-slate-900 font-medium max-w-lg mx-auto">Prepare estes itens para receber seu orçamento em tempo recorde.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative lg:px-12">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0 opacity-50" />

              {[
                {
                  n: "01", t: "Medidas", d: "Largura e altura aproximadas do local desejado.", i: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 12.5 2-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.5 9.5 2-2" /></svg>
                  )
                },
                {
                  n: "02", t: "Evidência", d: "Foto ou vídeo do local da futura instalação.", i: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  )
                },
                {
                  n: "03", t: "Acabamento", d: "Cor desejada para perﬁs e acessórios de metal.", i: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white p-10 rounded-[2.5rem] group border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-20 h-20 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-500 relative">
                    {step.i}
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 border-4 border-white text-white rounded-full text-[10px] font-black flex items-center justify-center">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="text-xl font-black !text-brand-accent mb-4 tracking-tight uppercase">{step.t}</h3>
                  <p className="!text-slate-900 font-medium leading-relaxed text-sm">
                    {step.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MAP INTERACTION --- */}
        <section className="py-24 bg-white">
          <div className="container-precision">
            <div className="max-w-6xl mx-auto reveal active relative rounded-[3rem] overflow-hidden shadow-3xl shadow-slate-200/50 border-[10px] md:border-[20px] border-white group h-[500px] md:h-[650px]">
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-center z-0">
                <div className="w-16 h-16 border-4 border-slate-200 border-t-brand-accent rounded-full animate-spin"></div>
              </div>
              <iframe
                title="Geolocalização Duno"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 z-10"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>

              {/* Overlay Badge */}
              <div className="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 bg-slate-950/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-white z-20 md:max-w-xs shadow-2xl">
                <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-4">Logística Própria</p>
                <p className="text-xl font-black mb-6 leading-tight">Cobertura total SP, ABC e Interior.</p>
                <div className="flex -space-x-3 mb-6">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&auto=format&fit=crop&fm=webp"
                  ].map((url, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                      <img src={url} alt="Técnico" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Equipe técnica pronta para atuar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BRAND PROMISE (Section Conclusion) --- */}
        <section className="bg-slate-50 py-32 md:py-48 text-center relative overflow-hidden">
          <div className="container-precision flex flex-col items-center">
            <div className="inline-flex items-center gap-6 mb-12 bg-white px-8 py-3 rounded-full shadow-sm border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">Compromisso Duno</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black !text-slate-950 max-w-4xl mx-auto leading-[1.1] tracking-tighter mb-16">
              "Garantimos a paz de espírito estrutural que seu imóvel merece."
            </h3>
            <div className="w-24 h-2 bg-brand-accent rounded-full mb-12"></div>
            <p className="text-slate-500 font-medium uppercase tracking-[0.3em] text-[10px]">Padrão Engenharia de Vidro</p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContactPage;
