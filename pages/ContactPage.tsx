import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">

        {/* --- PREMIUM HERO SECTION (White & Green) --- */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="reveal active text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-10 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Atendimento Premium</span>
                <span className="w-10 h-[1px] bg-brand-accent"></span>
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-[100px] font-black !text-brand-accent leading-[1] md:leading-[0.85] mb-10 tracking-tight text-center">
                Canais de <br className="hidden md:block" />
                <span className="text-slate-400 font-medium italic whitespace-nowrap">Comunicação.</span>
              </h1>

              <p className="text-lg md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-2xl mb-16 mx-auto text-center opacity-80">
                Fale diretamente com nossa engenharia. Soluções de alto luxo com transparência e precisão.
              </p>

              <a
                href={getWhatsAppLink("Contato", "Hero CTA")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-24 flex items-center justify-center gap-6 px-16 bg-brand-accent text-white rounded-[2.5rem] font-black text-2xl btn-interact shadow-2xl shadow-brand-accent/40 whitespace-nowrap transition-all duration-500 hover:scale-[1.05]"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                Iniciar orçamentação
              </a>
            </div>
          </div>
        </section>

        {/* --- CONTACT INFO BLOCK (Layout from Image 4, Colors White/Green) --- */}
        <section className="py-20 bg-white">
          <div className="container-precision">
            <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 overflow-hidden relative reveal active shadow-2xl border border-slate-100">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <span className="w-12 h-[1px] bg-brand-accent"></span>
                  <span className="text-[11px] font-black text-brand-accent uppercase tracking-[0.4em]">Canais Oficiais</span>
                  <span className="w-12 h-[1px] bg-brand-accent"></span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black !text-brand-accent mb-12 leading-[1] tracking-tight">
                  Unidade <br /> <span className="text-slate-300 font-medium italic">São Paulo.</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-slate-200 pt-16 w-full items-start">
                  {/* Email */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">E-mail Corporativo</p>
                    <p className="text-xl md:text-2xl font-black !text-slate-900 tracking-tight">{CLIENT_CONFIG.email}</p>
                  </div>

                  {/* Attendance */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Horário Operacional</p>
                    <p className="text-xl md:text-2xl font-black !text-slate-900 tracking-tight">Segunda a Sábado</p>
                    <p className="text-sm font-medium text-slate-500 mt-2">Das 08:00 às 18:00h</p>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col items-center text-center group lg:col-span-1 md:col-span-2 lg:md:col-auto">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Sede Estratégica</p>
                    <p className="text-xl md:text-2xl font-black !text-slate-900 tracking-tight leading-tight max-w-[280px] uppercase">{CLIENT_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PREPARATION & MAP (Split Layout from Latest Image, Colors White/Green) --- */}
        <section className="py-24 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
          <div className="container-precision">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-32 items-center">

              {/* Info Column */}
              <div className="lg:col-span-6 reveal active space-y-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-brand-accent"></div>
                    <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Agilidade Técnica</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black !text-brand-accent tracking-tighter leading-[0.9]">
                    O que ter <br />
                    <span className="text-slate-400 font-medium italic">em mãos?</span>
                  </h2>
                  <p className="text-xl md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-xl">
                    Prepare estes dados para receber seu orçamento técnico em tempo recorde.
                  </p>
                </div>

                <div className="space-y-10">
                  {[
                    { t: "Medidas Gerais", d: "Largura e altura aproximadas do local desejado." },
                    { t: "Evidência Visual", d: "Fotos ou vídeos facilitam a análise estrutural." },
                    { t: "Configuração", d: "Cor de perfis e ferragens desejadas." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex flex-shrink-0 items-center justify-center text-brand-accent font-black text-lg border border-slate-100 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.t}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Column (Framed Style) */}
              <div className="lg:col-span-6 reveal active relative">
                <div className="relative rounded-[4rem] overflow-hidden shadow-3xl shadow-slate-300/50 border-[16px] border-white ring-1 ring-slate-200/60 group h-[600px] md:h-[750px] w-full bg-slate-100">
                  <iframe
                    title="Sede Técnica Estratégica"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                    className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-10"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>

                  {/* Overlay Badge (White/Green theme) */}
                  <div className="absolute bottom-10 left-10 md:left-auto md:right-10 bg-white shadow-2xl p-8 rounded-3xl border border-slate-100 text-slate-900 z-20 md:max-w-xs transition-all duration-500 group-hover:translate-y-[-10px]">
                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-4">Logística Duno</p>
                    <p className="text-xl font-black mb-6 leading-tight">Cobertura total em toda Grande SP & Interior.</p>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Time Próprio Certificado</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- BRAND PROMISE SECTION (Image 4 Formatting, White/Green Colors) --- */}
        <section className="py-24 bg-white text-center">
          <div className="container-precision">
            <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16 md:p-24 overflow-hidden relative reveal active shadow-2xl flex flex-col items-center">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto items-center flex flex-col">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <span className="w-10 h-[1px] bg-brand-accent"></span>
                  <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.5em]">Garantia de Excelência</span>
                  <span className="w-10 h-[1px] bg-brand-accent"></span>
                </div>

                <h3 className="text-3xl md:text-7xl font-black !text-brand-accent leading-[1.1] tracking-tighter mb-12">
                  O Padrão <br /> <span className="text-slate-400 font-medium italic">de Qualidade.</span>
                </h3>

                <p className="text-xl md:text-3xl !text-slate-900 font-black mb-16 leading-tight max-w-3xl">
                  "Garantimos a paz de espírito estrutural que seu imóvel merece."
                </p>

                <div className="w-24 h-1 bg-brand-accent rounded-full mb-16 opacity-30"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-12 border-t border-slate-200">
                  {[
                    { v: "4.500+", l: "Obras Realizadas" },
                    { v: "Grande SP", l: "Atendimento" },
                    { v: "12 meses", l: "Garantia Técnica" },
                    { v: "Aprovado", l: "Certificação NBR" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-2xl md:text-3xl font-black !text-brand-accent mb-1 italic">{stat.v}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</span>
                    </div>
                  ))}
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
