import React, { useEffect } from 'react';
import { getWhatsAppLink, CLIENT_CONFIG } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-24">
        {/* --- LIGHT HERO (Consistent with Home Hero) --- */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="reveal active text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-brand-accent rounded-full"></span>
                <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.4em]">Engenharia de precisão</span>
                <span className="w-8 h-[2px] bg-brand-accent rounded-full"></span>
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-[100px] font-black !text-brand-accent leading-[1.1] md:leading-[0.85] mb-10 tracking-tight text-center">
                Dúvidas Técnicas ou <br className="hidden md:block" />
                <span className="text-slate-400 font-medium italic">Novo Projeto?</span>
              </h1>

              <p className="text-lg md:text-2xl !text-slate-900 font-medium leading-relaxed max-w-2xl mb-16 mx-auto text-center opacity-80">
                Fale com nossos especialistas. Projetos sob medida com acabamento padrão arquitetura de alto luxo.
              </p>

              <a
                href={getWhatsAppLink("Contato", "Botão Hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-20 flex items-center justify-center gap-4 px-12 bg-brand-accent text-white rounded-[2rem] font-bold text-lg btn-interact shadow-2xl shadow-brand-accent/30 whitespace-nowrap"
              >
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar orçamento agora
              </a>
            </div>
          </div>
        </section>

        {/* --- CONTACT CHANNELS --- */}
        <section className="py-24 bg-white">
          <div className="container-precision">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              <div className="reveal active bg-slate-50 p-10 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:border-brand-accent/30 transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 mb-8 border border-slate-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">E-mail</h3>
                <p className="text-xl font-bold text-slate-900 mb-6">{CLIENT_CONFIG.email}</p>
                <a href={`mailto:${CLIENT_CONFIG.email}`} className="text-xs font-black text-brand-accent uppercase tracking-widest border-b-2 border-brand-accent/10 hover:border-brand-accent transition-all pb-1">Enviar mensagem</a>
              </div>

              <div className="reveal active bg-slate-50 p-10 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:border-brand-accent/30 transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 mb-8 border border-slate-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Atendimento</h3>
                <p className="text-xl font-bold text-slate-900 mb-6">Segunda a Sábado</p>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">08:00 às 18:00</span>
              </div>

              <div className="reveal active bg-slate-950 p-10 rounded-[2rem] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8 border border-white/10">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-xs font-black text-brand-accent uppercase tracking-widest mb-2">Sede Técnica</h3>
                <p className="text-lg font-bold mb-6 tracking-tight">{CLIENT_CONFIG.address}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  Showroom & Logística
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PREPARATION GUIDE --- */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container-precision">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal active">
                <h2 className="text-3xl md:text-5xl font-black !text-brand-accent mb-8 leading-tight tracking-tight">
                  Como preparar <br /> <span className="text-slate-400 font-medium italic">o seu pedido?</span>
                </h2>
                <p className="text-lg !text-slate-700 font-medium leading-relaxed mb-12">
                  Ter estas informações em mãos agiliza nosso processo de orçamento e garante maior precisão técnica na sua proposta.
                </p>

                <div className="grid gap-6">
                  {[
                    { t: "Medidas Gerais", d: "Largura e altura aproximadas (mesmo que estimadas)." },
                    { t: "Fotos do Local", d: "Ajudam a identificar interferências estruturais precocemente." },
                    { t: "Opções de Cor", d: "Defina sua preferência para perfis e ferragens." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex flex-shrink-0 items-center justify-center text-brand-accent">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">{item.t}</h4>
                        <p className="text-sm text-slate-500 font-medium">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Container */}
              <div className="reveal active relative rounded-[3rem] overflow-hidden shadow-3xl shadow-slate-200/50 border-[12px] border-white group h-[450px] bg-slate-100">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-12 h-12 border-4 border-slate-200 border-t-brand-accent rounded-full animate-spin mb-4"></div>
                </div>
                <iframe
                  title="Localização Duno"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117025.21557007722!2d-46.72759902325372!3d-23.56681023214845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d344a1e93%3A0xc3f58e1762c4c82c!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 z-10"
                  style={{ border: 0, opacity: 0.8 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* --- BRAND PROMISE (REFACTORED TO LIGHT) --- */}
        <section className="bg-white py-24 text-center border-t border-slate-100">
          <div className="container-precision">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em] mb-10 opacity-70">Equipe Duno Precision</p>
            <h3 className="text-2xl md:text-5xl font-black !text-slate-900 max-w-4xl mx-auto leading-tight tracking-tight">
              "Garantimos a paz de espírito estrutural que seu imóvel merece."
            </h3>
            <div className="w-20 h-1 bg-brand-accent mx-auto mt-12 rounded-full opacity-30"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
