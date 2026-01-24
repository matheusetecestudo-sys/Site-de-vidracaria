import React from 'react';

const Partners: React.FC = () => {
    const brands = [
        "Cebrace",
        "Blindex",
        "Guardian",
        "Belmetal",
        "Saint-Gobain",
        "Alcoa"
    ];

    return (
        <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="container-precision">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-shrink-0 text-center md:text-left">
                        <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-2">Padrão Indústria</p>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Utilizamos as <br /> <span className="text-slate-400 font-medium italic">melhores marcas.</span></h3>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        {brands.map((brand, i) => (
                            <span key={i} className="text-2xl md:text-3xl font-black text-slate-400 tracking-tighter hover:text-brand-accent transition-colors cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
