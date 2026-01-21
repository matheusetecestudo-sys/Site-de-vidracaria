import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { WHATSAPP_LINK } from '../constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { t: "Tradição Técnica", d: "Duas décadas entregando precisão milimétrica em cada projeto." },
    { t: "Compromisso Real", d: "Prazos cumpridos à risca com logística própria e eficiente." },
    { t: "Materiais Elite", d: "Trabalhos apenas com vidros certificados e ferragens premium." },
    { t: "Preço Direto", d: "Economia real comprando direto de quem domina a engenharia." }
  ];

  return (
    <div className="bg-white min-h-screen font-inter">
      <Navbar currentPage="sobre" />

      <main className="pt-32">
        <header className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 skew-x-[-15deg] pointer-events-none" />

          <div className="container-precision relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8 reveal active">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-[2px] bg-blue-500"></span>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Nossa História</span>
                </div>
                <h1 className="text-5xl md:text-[80px] font-black leading-[0.9] mb-10 tracking-tight">
                  Autoridade em <br />
                  <span className="text-slate-500 italic">Engenharia do Vidro.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                  Mais que uma vidraçaria, somos especialistas em transformar ambientes com transparência, segurança e design de alto padrão.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="py-28 container-precision">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center mb-32">
            <div className="lg:col-span-5 reveal active">
              <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                <img src="/images/espelhos-premium.jpg" alt="Equipe Técnica" className="w-full h-full object-cover scale-105" />
                <div className="absolute inset-0 bg-blue-600/10" />
              </div>
            </div>
            <div className="lg:col-span-7 reveal active">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Precisão técnica que <br /> <span className="text-slate-400">gera confiança.</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                <p>
                  A Cristal Glass nasceu da necessidade de um mercado que pedia mais que apenas instalação; pedia inteligência técnica aplicada ao vidro.
                </p>
                <p>
                  Hoje, com mais de 4.500 projetos realizados em toda a Grande São Paulo, nossa marca é sinônimo de segurança estrutural e acabamento fino para os arquitetos mais exigentes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 reveal active pt-20 border-t border-slate-100">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-blue-600 font-black text-3xl mb-4 italic">0{i + 1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{v.t}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 bg-slate-50">
          <div className="container-precision text-center reveal active">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Pronto para elevar o <br /> <span className="text-slate-400">nível do seu projeto?</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
              Escolha uma empresa que trata seu vidro com a técnica que ele exige.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="h-[64px] flex items-center justify-center px-12 bg-emerald-500 text-white rounded-2xl font-bold text-sm btn-interact shadow-xl shadow-emerald-500/20 mx-auto sm:w-auto inline-flex"
            >
              Peça seu orçamento no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;