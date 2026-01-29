import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">

        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-slate-50 overflow-hidden">
          {/* Refined skew background mirroring Home Hero */}
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[140%] bg-white skew-x-[-15deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="reveal active flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-10 translate-y-[-10px]">
                <span className="w-12 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.6em]">Consultoria de Elite</span>
                <span className="w-12 h-[1px] bg-brand-accent"></span>
              </div>

              <h1 className="text-4xl md:text-8xl lg:text-[120px] font-black !text-brand-accent leading-[0.9] md:leading-[0.8] mb-12 tracking-tight">
                Transforme seu <br />
                <span className="text-slate-400 font-medium italic">Projeto em Realidade.</span>
              </h1>

              <p className="text-xl md:text-3xl !text-slate-900 font-medium leading-relaxed max-w-3xl mb-16 opacity-90">
                Atendimento técnico especializado para arquitetos, engenheiros e clientes que exigem o padrão Duno de qualidade.
              </p>

              <a
                href={getWhatsAppLink("Contato", "Hero Principal")}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto h-24 flex items-center justify-center gap-6 px-16 bg-brand-accent text-white rounded-[2.5rem] font-black text-2xl btn-interact shadow-2xl shadow-brand-accent/40 whitespace-nowrap"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                Solicitar orçamento por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC CHANNELS GRID --- */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-precision">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-stretch">

              {/* Left: Contact Channels */}
              <div className="reveal active space-y-16 flex flex-col justify-center">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black !text-brand-accent tracking-tighter">Canais Diretos</h2>
                  <p className="text-xl font-medium text-slate-500">Escolha a melhor forma de iniciar sua consultoria.</p>
                </div>

                <div className="space-y-12">
                  <div className="group">
                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-3">E-mail Técnico</p>
                    <a href={`mailto:${CLIENT_CONFIG.email}`} className="text-2xl md:text-4xl font-black text-slate-900 border-b-4 border-brand-accent/10 hover:border-brand-accent transition-all duration-500 pb-1">
                      {CLIENT_CONFIG.email}
                    </a>
                  </div>

                  <div className="group">
                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-3">Horário de Atendimento</p>
                    <p className="text-2xl md:text-4xl font-black text-slate-900">Segunda a Sábado</p>
                    <p className="text-lg font-medium text-slate-500 mt-2">Das 08:00 às 18:00 (Sábado até as 13h)</p>
                  </div>
                </div>
              </div>

              {/* Right: Sede Card (Luxury Style) */}
              <div className="reveal active bg-slate-950 p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-12 border border-white/10">
                    <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-xs font-black text-brand-accent uppercase tracking-[0.5em] mb-8">Unidade Corporativa</h3>
                  <p className="text-3xl md:text-4xl font-black mb-12 tracking-tight leading-[1.1] md:w-[80%] uppercase">
                    {CLIENT_CONFIG.address}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest self-start">
                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                    Instalação em toda São Paulo e Litoral
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- PREPARATION & MAP (SPLIT LAYOUT) --- */}
        <section className="py-24 md:py-40 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
          <div className="container-precision">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-32 items-center">

              {/* Info Column */}
              <div className="lg:col-span-6 reveal active space-y-16">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-7xl font-black !text-brand-accent tracking-tighter leading-[0.9]">
                    O que ter <br />
                    <span className="text-slate-400 font-medium italic">em mãos?</span>
                  </h2>
                  <p className="text-xl md:text-2xl !text-slate-900 font-medium leading-relaxed">
                    Para um orçamento técnico imediato, pedimos que forneça as seguintes informações iniciais:
                  </p>
                </div>

                <div className="space-y-10">
                  {[
                    { t: "Medidas Gerais", d: "Largura e altura do vão (mesmo que estimada)." },
                    { t: "Evidência Visual", d: "Fotos do local facilitam a análise estrutural." },
                    { t: "Estética", d: "Cor de ferragens (Preto, Prata, Inox, Dourado)." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-xl flex flex-shrink-0 items-center justify-center text-brand-accent font-black text-sm border border-slate-100 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{item.t}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Column (Framed Style) */}
              <div className="lg:col-span-6 reveal active relative">
                <div className="relative rounded-[4rem] overflow-hidden shadow-3xl shadow-slate-300/50 border-[16px] border-white ring-1 ring-slate-200/60 group h-[600px] md:h-[750px] w-full">
                  <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-center p-8 z-0">
                    <div className="w-16 h-16 border-4 border-slate-200 border-t-brand-accent rounded-full animate-spin"></div>
                  </div>
                  <iframe
                    title="Sede Técnica Estratégica"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                    className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out z-10"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                {/* Visual Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
              </div>

            </div>
          </div>
        </section>

        {/* --- BRAND PROMISE (CONSISTENT WITH ABOUT/HOME) --- */}
        <section className="bg-white py-32 md:py-48 text-center">
          <div className="container-precision">
            <div className="reveal active max-w-5xl mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className="w-12 h-[1px] bg-slate-200"></span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1em]">Duno Precision Seal</span>
                <span className="w-12 h-[1px] bg-slate-200"></span>
              </div>

              <h3 className="text-3xl md:text-7xl font-black !text-slate-950 leading-[1.1] tracking-tighter mb-16">
                "Garantimos a paz de espírito estrutural que seu imóvel merece."
              </h3>

              <div className="w-24 h-2 bg-brand-accent rounded-full"></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContactPage;
