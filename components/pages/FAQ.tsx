'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
   {
    question: 'Jak funguje vstup do fitness centra?',
    answer: 'Po registraci a rezervaci obdržíte e-mailem a SMS unikátní vstupní kód, kterým se dostanete do fitness centra ve vámi rezervovaném čase.',
  },
  {
    question: 'Jak dlouho trvá jedna tréninková relace?',
    answer: 'Standardní délka tréninku je 75 minut. Délku si můžete přizpůsobit při rezervaci dle svých potřeb je-li následující slot v rezervačním systému volný.',
  },
  {
    question: 'Je fitness centrum vhodné i pro začátečníky?',
    answer: 'Ano, fitness centrum je vhodné pro začátečníky i pokročilé. Díky klidnému prostředí bez přeplněných prostor se můžete plně soustředit na svůj trénink.',
  },
  {
    question: 'Mohu přijít cvičit s někým dalším?',
    answer: 'Ano, jeden vstup je možné využít až pro 3 osoby. Můžete přijít s partnerem, kamarádem nebo trenérem.',
  },
  {
    question: 'Je potřeba si nosit vlastní vybavení?',
    answer: 'Ne, fitness centrum je plně vybavené – k dispozici jsou činky, stroje, kardio i funkční pomůcky.',
  },
  {
    question: 'Mohu si rezervovat více tréninků dopředu?',
    answer: 'Ano, rezervace lze vytvářet na více termínů dopředu podle dostupnosti v systému.',
  },
  {
    question: 'Jak funguje zrušení rezervace?',
    answer: 'Rezervaci lze zrušit v rezervačním systému do 24 hodin před začátkem. Po uplynutí této lhůty je vstup účtován.',
  },
  {
    question: 'Mohu jako trenér/ka trénovat své klienty?',
    answer: 'Ano, osobní trenéři mohou využívat prostor fitness centra, platí však maximální povolený počet osob.',
  },
  {
    question: 'Jak je zajištěna bezpečnost a hygiena?',
    answer: 'Dodržujeme vysoké hygienické standardy. Prostor je pravidelně dezinfikován, monitorován a dobře větraný.',
  },
  {
    question: 'Je možné parkování?',
    answer: 'Ano, parkování je možné v blízkosti fitness centra nebo přímo v areálu v dostupných hodinách.',
  },
  {
    question: 'Mohu přijít s dítětem?',
    answer: 'Ano, fitness centrum disponuje dětským koutkem. Za dítě však plně odpovídá doprovázející osoba.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="min-h-screen px-6 md:px-10 py-20 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Často kladené otázky</h2>
          <p className="text-gray-400 text-lg">Našli sme odpovede na najpopulárnejšie otázky našich klientov</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-left">{item.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0 border-t border-white/10 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
