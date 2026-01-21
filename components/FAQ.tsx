
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-3 block">Transparência</span>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Perguntas Frequentes</h2>
          <p className="text-slate-500 font-medium">Tudo o que você precisa saber antes de contratar seu projeto.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="reveal bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className={`text-lg font-black transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-8 pt-0 text-slate-500 font-medium leading-relaxed border-t border-slate-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
