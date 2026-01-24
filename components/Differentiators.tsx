import React from 'react';

const Differentiators: React.FC = () => {
    const diffs = [
        {
            title: "Garantia Estendida",
            description: "Segurança total com até 5 anos de garantia em ferragens e 12 meses em vedações técnica.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            )
        },
        {
            title: "Prazo Recorde",
            description: "Logística própria que garante a instalação de box e espelhos em até 5 dias úteis.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Vidros Certificados",
            description: "Trabalhamos apenas com vidros temperados e laminados que excedem as normas NBR 7199.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            title: "Suporte Pós-Venda",
            description: "Canal exclusivo para ajustes e manutenção, com atendimento técnico em até 24h úteis.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M11.999 12h.01M12 12a1 1 0 110-2 1 1 0 010 2zm0 0a1 1 0 110 2 1 1 0 010-2z" /></svg>
            )
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-precision text-center">
                <header className="mb-20 reveal active max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[1px] bg-brand-accent"></span>
                        <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest text-center">Diferencial Duno</span>
                        <span className="w-8 h-[1px] bg-brand-accent"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black !text-brand-accent mb-8 tracking-tight leading-tight">
                        Por que escolher <br />
                        <span className="text-slate-400 font-medium italic">a nossa engenharia?</span>
                    </h2>
                    <p className="text-lg md:text-xl !text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
                        Combinamos a precisão técnica da ABNT com um atendimento focado na sua paz de espírito.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {diffs.map((d, i) => (
                        <div
                            key={i}
                            className="reveal active group flex flex-col items-center bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-accent/20 hover:shadow-2xl transition-all duration-500"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="w-20 h-20 bg-brand-accent/5 rounded-3xl flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-sm">
                                {d.icon}
                            </div>
                            <h3 className="text-xl font-bold !text-brand-accent mb-4 tracking-tight">{d.title}</h3>
                            <p className="!text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                {d.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
