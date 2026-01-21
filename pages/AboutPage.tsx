import React, { useEffect } from 'react';
import { CLIENT_CONFIG, CTA_TEXT, WHATSAPP_LINK } from '../constants.ts';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen font-inter">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="reveal active">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-blue-600"></span>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Nossa Identidade</span>
            </div>
            <h1 className="text-5xl md:text-[5rem] font-black text-slate-900 mb-10 tracking-tighter leading-[0.95]">
              Vinte Anos de <br />
              <span className="text-slate-400">Tradição Técnica.</span>
            </h1>
            <div className="space-y-8 text-xl text-slate-500 leading-relaxed font-medium">
              <p>
                A <strong>{CLIENT_CONFIG.name}</strong> nasceu com o propósito de elevar o padrão da vidraçaria local, trazendo processos de engenharia para projetos de qualquer escala.
              </p>
              <p>
                Acreditamos que o vidro não é apenas um fechamento, mas um elemento de design que exige <span className="text-slate-900 font-bold italic">precisão milimétrica</span> e responsabilidade técnica.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-slate-100">
                <div>
                  <p className="text-3xl font-black text-slate-900">100%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Materiais Certificados</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">Local</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Atendimento em toda a Capital</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal active relative">
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] aspect-[3.5/4] border-[16px] border-slate-50">
              <img
                src="/images/Fachadas de vidro.png"
                alt="Projetos Cristal Glass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
            {/* Elemento flutuante de autoridade */}
            <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-3xl shadow-2xl max-w-xs md:block hidden">
              <p className="text-2xl font-black text-slate-900 mb-2">Engenharia</p>
              <p className="text-sm text-slate-500 font-medium">Equipes treinadas sob normas de segurança da ABNT.</p>
            </div>
          </div>
        </div>

        <section className="reveal active grid md:grid-cols-3 gap-12 py-24 border-y border-slate-100 mb-32">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black">01</div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Transparência</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Orçamentos claros, sem taxas ocultas e com explicação técnica de cada material.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black">02</div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Pontualidade</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Respeito rigoroso aos prazos de medição e entrega. Seu tempo é nossa prioridade.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black">03</div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Garantia</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Suporte pós-instalação e garantia de 1 ano em todas as ferragens e vedações.</p>
          </div>
        </section>

        <div className="reveal active text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter">
            A confiança de quem entende <br />
            de <span className="text-blue-600">vidro de verdade.</span>
          </h2>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center justify-center gap-6 px-12 py-6 bg-[#22c55e] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-green-500/30 hover:bg-[#16a34a] hover:-translate-y-1.5 transition-all duration-500"
          >
            {CTA_TEXT}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;