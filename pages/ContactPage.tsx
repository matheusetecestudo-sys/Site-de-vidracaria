import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      title: "WhatsApp Direto",
      value: CLIENT_CONFIG.phoneDisplay,
      label: "Resposta imediata de técnicos",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      ),
      link: getWhatsAppLink("Contato", "WhatsApp Principal"),
      primary: true
    },
    {
      title: "E-mail Corporativo",
      value: CLIENT_CONFIG.email,
      label: "Envio de orçamentos e plantas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      link: `mailto:${CLIENT_CONFIG.email}`,
      primary: false
    },
    {
      title: "Atendimento",
      value: "08h às 18h",
      label: "Segunda a Sábado",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      link: null,
      primary: false
    }
  ];

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">
        {/* Header Section - Light & Clean */}
        <header className="py-20 md:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10 text-center">
            <div className="reveal active max-w-4xl mx-auto flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-brand-accent rounded-full"></span>
                <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.4em]">Engenharia de precisão</span>
                <span className="w-8 h-[2px] bg-brand-accent rounded-full"></span>
              </div>

              <h1 className="text-4xl md:text-8xl lg:text-[100px] font-black leading-[0.95] md:leading-[0.85] mb-12 tracking-tighter !text-brand-accent">
                Solicite seu <br />
                <span className="text-slate-400 font-medium italic">Orçamento Technical.</span>
              </h1>

              <p className="text-xl md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                Consultoria técnica especializada e orçamentos em tempo real para projetos de alto luxo.
              </p>

              <div className="flex gap-8 opacity-40 md:opacity-100 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black tracking-widest text-slate-900">ABNT NBR</span>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-300 pl-8">
                  <span className="text-[10px] font-black tracking-widest text-slate-900">SEGURANÇA TOTAL</span>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-300 pl-8">
                  <span className="text-[10px] font-black tracking-widest text-slate-900">PREMIUM FINISHING</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Contact Grid Section */}
        <section className="py-20 md:py-32 container-precision">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-16 reveal active">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black !text-brand-accent tracking-tight leading-tight mb-8">
                  Como quer <br /> <span className="text-slate-400 font-medium italic">nos contatar?</span>
                </h2>

                <div className="space-y-6">
                  {contactMethods.map((method, i) => (
                    <div
                      key={i}
                      className={`group p-8 rounded-[2rem] border transition-all duration-500 ${method.primary
                          ? 'bg-brand-accent/5 border-brand-accent/20 hover:bg-brand-accent/10'
                          : 'bg-white border-slate-100 hover:border-brand-accent/30 hover:shadow-xl'
                        }`}
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${method.primary ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-brand-accent group-hover:text-white'
                          }`}>
                          {method.icon}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{method.title}</h3>
                          <p className="text-xl font-black text-slate-900 mb-1">{method.value}</p>
                          <p className="text-sm font-medium text-slate-500 mb-6">{method.label}</p>
                          {method.link && (
                            <a
                              href={method.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-black text-brand-accent uppercase tracking-widest border-b-2 border-brand-accent/10 hover:border-brand-accent transition-all pb-1"
                            >
                              Falar agora
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xs font-black text-brand-accent uppercase tracking-[0.3em] mb-4">Sede Técnica</h3>
                <p className="text-xl font-black mb-6 leading-tight">{CLIENT_CONFIG.address}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  Atendimento em domicílio & Showroom
                </div>
              </div>
            </div>

            {/* Preparation & Map */}
            <div className="lg:col-span-7 space-y-16 reveal active">
              <div className="bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-[3rem]">
                <h3 className="text-2xl font-black !text-brand-accent mb-10 tracking-tight leading-tight">Prepare seu Orçamento.</h3>
                <p className="!text-slate-900 font-medium mb-12 text-lg">Para um retorno imediato, recomendamos ter em mãos:</p>

                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    "Medidas aproximadas (L x A)",
                    "Tipo do projeto (Box, Espelho...)",
                    "Foto do local da instalação",
                    "Cor preferencial das ferragens"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-lg bg-brand-accent/10 flex flex-shrink-0 items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm font-bold text-slate-900 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/3] md:aspect-auto md:h-[500px] group">
                <iframe
                  title="Localização Estratégica"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-slate-900/5 rounded-[2.5rem]" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">Capacidade Logística</span>
                    <span className="text-sm font-black text-slate-900">Atendimento em toda Grande SP</span>
                  </div>
                  <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-accent/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Brand Promise */}
        <section className="bg-slate-50 py-20 border-t border-slate-200/60">
          <div className="container-precision text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.5em] mb-6">Equipe Duno Precision</p>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 italic max-w-2xl mx-auto leading-tight">
              "Não instalamos apenas vidros. Garantimos a paz de espírito estrutural que seu imóvel merece."
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
