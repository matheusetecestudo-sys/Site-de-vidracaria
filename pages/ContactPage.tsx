import React, { useEffect } from 'react';
import { getWhatsAppLink, WHATSAPP_LINK, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      title: "WhatsApp",
      value: CLIENT_CONFIG.phoneDisplay,
      label: "Resposta em até 15 min",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      ),
      link: getWhatsAppLink("Página de Contato", "WhatsApp Card")
    },
    {
      title: "E-mail Oficial",
      value: CLIENT_CONFIG.email,
      label: "Envio de projetos e editais",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      link: `mailto:${CLIENT_CONFIG.email}`
    },
    {
      title: "Horário",
      value: "Seg a Sex • 08h às 18h",
      label: "Sábados • 08h às 13h",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      link: null
    }
  ];

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">
        {/* Header Hero Section */}
        <header className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none hidden md:block" />
          <div className="container-precision relative z-10">
            <div className="max-w-4xl mx-auto text-center reveal active">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-brand-accent"></span>
                <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.4em]">Canal de Engenharia</span>
                <span className="w-12 h-[2px] bg-brand-accent"></span>
              </div>
              <h1 className="text-4xl md:text-8xl lg:text-[100px] font-black leading-[0.95] md:leading-[0.85] mb-12 tracking-tighter !text-brand-accent">
                Fale com a <br />
                <span className="text-slate-400 font-medium italic">especialista.</span>
              </h1>
              <p className="text-xl md:text-2xl !text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                Orçamentos técnicos imediatos e consultoria especializada para o seu projeto em vidro.
              </p>
            </div>
          </div>
        </header>

        {/* Contact Cards Grid */}
        <section className="py-12 -mt-16 md:-mt-24 container-precision relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-accent/5 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                  {method.icon}
                </div>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">{method.title}</h3>
                <p className="text-xl md:text-2xl font-black text-slate-900 mb-2">{method.value}</p>
                <p className="text-sm font-medium text-slate-500 mb-8">{method.label}</p>
                {method.link && (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-black text-brand-accent uppercase tracking-widest border-b-2 border-brand-accent/20 hover:border-brand-accent transition-all pb-1"
                  >
                    Iniciar contato
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Map & Forms Section */}
        <section className="py-20 md:py-32 container-precision">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left: Info & Advice */}
            <div className="reveal active space-y-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-black !text-brand-accent mb-8 tracking-tight leading-tight">
                  Unidade de <br /> <span className="text-slate-400 font-medium italic">Atendimento.</span>
                </h2>
                <p className="text-xl !text-slate-900 font-medium leading-relaxed mb-8">
                  {CLIENT_CONFIG.address}
                </p>
                <p className="!text-slate-600 font-medium leading-relaxed">
                  Operamos com logística própria para garantir entrega pontual em toda a Grande São Paulo e Interior.
                  Nossa sede técnica coordena squads de instalação certificados pela ABNT.
                </p>
              </div>

              <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                <h3 className="text-xl font-black !text-brand-accent mb-8 tracking-tight">O que ter em mãos?</h3>
                <ul className="space-y-6">
                  {[
                    "Medidas aproximadas (L x A)",
                    "Tipo de Vidro (Temperado/Laminado)",
                    "Fotos do local da instalação",
                    "Preferência de cor e ferragens"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="!text-slate-900 font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Map Integration */}
            <div className="reveal active group">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:shadow-brand-accent/10 transition-shadow duration-700 aspect-square md:aspect-auto md:h-[600px]">
                <iframe
                  title="Localização Duno"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating Badge on Map */}
                <div className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-1">Área de Cobertura</p>
                    <p className="text-sm font-bold">SP • ABC • Interior • Litoral</p>
                  </div>
                  <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Brand Promise Section */}
        <section className="bg-slate-50 py-20 border-t border-slate-100">
          <div className="container-precision text-center">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 italic">"Compromisso técnico que gera tranquilidade real."</h3>
            <p className="text-slate-500 font-medium">Equipe Duno • Garantia de 12 meses em toda instalação.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
