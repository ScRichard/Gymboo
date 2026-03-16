'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'Ako dlho trvá jedna tréninková relácia?',
    answer: 'Jedna tréninková relácia trvá zvyčajne 60 minút. Máte však možnosť prispôsobiť si dĺžku podľa vašich potrieb pri rezervácii.',
  },
  {
    question: 'Aké sú minimálne požiadavky na fitness nivo?',
    answer: 'Naš fitness center je vhodný pre všetky fitness úrovne - od začiatočníkov až po pokročilých. Máme komplexné vybavenie na všetky druhy tréningov.',
  },
  {
    question: 'Ponúkate aj trénerskú podporu?',
    answer: 'Áno, na požiadanie poskytneme konzultáciu s profesionálnym trénerom. Kontaktujte nás pre viac informácií o dostupnosti.',
  },
  {
    question: 'Čo sa stane, ak musím zrušiť rezerváciu?',
    answer: 'Rezervácie je možné zrušiť do 24 hodín pred plánovaným časom bez poplatkov. Po tejto lehote si môžete stratiť kredit.',
  },
  {
    question: 'Je potrebné si priniesť vlastné vybavenie?',
    answer: 'Nie, máme kompletné vybavenie vrátane činiek, strojov a cvičovacích pomôcok. Máte možnosť priniesť si vlastný nástroj, ak chcete.',
  },
  {
    question: 'Aké sú bezpečnostné opatrenia?',
    answer: 'Dodržiavame najvyššie hygienické štandardy. Všetky zariadenia sú pravidelne dezinfikované a priestor je dobre vetraný.',
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
