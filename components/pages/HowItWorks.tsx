import { Calendar, Link, Sparkles } from 'lucide-react';
import Image from 'next/image';
const prefix = 'https://scrichard.github.io/Gymboo';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Rezervuj si svůj čas",
      description: "Vyber si termín, který ti vyhovuje, a rezervaci dokončí jednoduše online.",
      icon: Calendar,
    },
    {
      number: 2,
      title: "Získej vstup a trénuj",
      description: "Instruktce i přístupový kód ti dorazi emailem nebo sms. Pak už stačí přijít a vycvičit bez čekání.",
      icon: Link,
    },
    {
      number: 3,
      title: "Odjezdj s respektem",
      description: "Po sobě uklid, vrat pomůcky na místo a po-dvoj čas tréninku. Díky tomu má každý stejný komfort jako ty.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="how-it-works" className="min-h-screen  text-white px-4 py-16 md:py-24 flex flex-col justify-center relative bg-stone-950">
        <Image src={`${prefix}/hory.png`} alt="How it works" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950 pointer-events-none z-10" />
      <div className="flex flex-col items-center relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            Tvůj prostor!
            Tvůj trénink!
          </h2>
        </div>

        {/* Cards and Stats Container */}
        <div className="max-w-6xl w-full">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col ">
                  {/* Step number with line */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl md:text-4xl font-bold text-orange-400">{step.number}</span>
                    <div className="flex-1 h-1 bg-gradient-to-r from-primary to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="flex flex-row gap-3 text-center justify-center">
                      <Icon size={32} className="text-primary" />
                      <h3 className="text-xl md:text-lg font-bold mb-4 uppercase text-gray-100">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed md:text-base px-7 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
