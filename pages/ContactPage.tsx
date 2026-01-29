import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">
        {/* --- LUXURY HEADER --- */}
        <header className="relative py-24 md:py-40 bg-slate-50 overflow-hidden border-b border-slate-200/50">
          {/* Decorative background element mirroring Hero.tsx */}
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10 text-center">
            <div className="reveal active flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="w-10 h-[2px] bg-brand-accent rounded-full"></span>
                <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.6em]">Consultoria Técnica</span>
                <span className="w-10 h-[2px] bg-brand-accent rounded-full"></span>
              </div>

              <h1 className="text-4xl md:text-8xl lg:text-[110px] font-black leading-[0.95] md:leading-[0.85] mb-12 tracking-tighter !text-brand-accent">
                Projetar com <br />
                <span className="text-slate-400 font-medium italic">Precisão Técnica.</span>
              </h1>

              <p className="text-xl md:text-3xl !text-slate-900 font-medium leading-relaxed max-w-3xl mx-auto mb-16 opacity-90">
                Fale diretamente com orçamentistas experientes e garanta a viabilidade do seu projeto hoje mesmo.
              </p>

              {/* Central WhatsApp Action */}
              <a
                href={getWhatsAppLink("Contato", "Hero CTA Central")}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-24 min-w-[320px] flex items-center justify-center gap-4 px-12 bg-brand-accent text-white rounded-[2.5rem] font-black text-2xl btn-interact shadow-2xl shadow-brand-accent/40"
              >
                <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* --- INFO & CHANNELS --- */}
        <section className="py-24 md:py-32 container-precision">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">

            {/* Left Col: Core Details */}
            <div className="lg:col-span-5 reveal active space-y-20">
              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.5em] mb-4">E-mail Corporativo</h3>
                  <a href={`mailto:${CLIENT_CONFIG.email}`} className="text-2xl md:text-3xl font-black text-slate-900 border-b-4 border-brand-accent/10 group-hover:border-brand-accent transition-all duration-500">
                    {CLIENT_CONFIG.email}
                  </a>
                  <p className="text-slate-500 font-medium mt-4">Para envio de plantas, editais e propostas formais.</p>
                </div>

                <div className="group">
                  <h3 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.5em] mb-4">Horário Operacional</h3>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">Segunda a Sábado</p>
                  <p className="text-slate-500 font-medium mt-2">Atendimento técnico das 08h às 18h.</p>
                </div>
              </div>

              {/* Sede Técnica - Bento Box Style */}
              <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                    <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h3 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-6 whitespace-nowrap">Unidade Industrial & Showroom</h3>
                  <p className="text-2xl md:text-3xl font-black mb-10 tracking-tight leading-tight uppercase">{CLIENT_CONFIG.address}</p>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                    Atendimento Full-Service
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Preparation Guide */}
            <div className="lg:col-span-7 reveal active bg-slate-50 border border-slate-200/60 p-12 md:p-20 rounded-[4rem]">
              <div className="mb-20">
                <h2 className="text-3xl md:text-5xl font-black !text-brand-accent mb-8 tracking-tighter leading-tight">
                  Como preparar <br /> <span className="text-slate-400 font-medium italic">o seu pedido.</span>
                </h2>
                <p className="text-xl !text-slate-900 font-medium leading-relaxed">
                  Para que possamos emitir um orçamento técnico em tempo recorde, recomendamos ter os seguintes dados:
                </p>
              </div>

              <div className="grid gap-10">
                {[
                  { t: "Dimensões", d: "Largura e altura aproximadas do vão." },
                  { t: "Especificações", d: "Tipo do vidro (Incolor, Fumê, Refletivo)." },
                  { t: "Condição Local", d: "Fotos do local facilitam a análise estrutural." },
                  { t: "Acabamento", d: "Cor de perfis e ferragens desejadas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-lg flex flex-shrink-0 items-center justify-center text-brand-accent font-black text-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{item.t}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- MAP SECTION --- */}
        <section className="pb-32 container-precision reveal active">
          <div className="relative rounded-[4rem] overflow-hidden shadow-3xl shadow-slate-200/50 border-[16px] border-white ring-1 ring-slate-200/60 group h-[500px] md:h-[700px] bg-slate-100">

            {/* Fail-safe Background / Skeleton */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 border-4 border-slate-200 border-t-brand-accent rounded-full animate-spin mb-6"></div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Carregando Mapa Técnico...</p>
              <a
                href="https://maps.app.goo.gl/uXvXh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white shadow-xl rounded-xl text-[10px] font-black text-brand-accent uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all z-20"
              >
                Abrir diretamente no Google Maps
              </a>
            </div>

            <iframe
              title="Sede Estratégica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full grayscale opacity-0 group-hover:grayscale-0 transition-all duration-1000 ease-in-out z-10"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              onLoad={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            ></iframe>

            {/* Geographic Overlay */}
            <div className="absolute top-10 left-10 hidden md:block max-w-xs z-20">
              <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white">
                <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-4">Logística de Instalação</h4>
                <p className="text-slate-900 font-black text-lg mb-4 leading-tight">Cobertura total em toda Grande SP & Interior.</p>
                <div className="space-y-3">
                  {["Grande São Paulo", "Região do ABC", "Interior e Litoral"].map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- BRAND PROMISE --- */}
        <section className="bg-slate-950 py-32 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <div className="container-precision relative z-10">
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-[1em] mb-12 opacity-50">Equipe Duno Technical</p>
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black max-w-4xl mx-auto leading-[1.1] tracking-tighter mb-12">
              "Garantimos a paz de espírito estrutural que seu imóvel merece."
            </h3>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
