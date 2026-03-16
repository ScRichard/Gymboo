'use client';

import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string | number;
  description: string;
  highlighted?: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: "Vstup",
    price: "210 Kč",
    description: "75 minutovej vstup do našeho fitness centra. Ideální pro jednorázový trénink nebo zkoušku našeho prostoru.",
    cta: "Koupit vstup"
  },
  {
    name: "Vstupy 10 + 1",
    price: "1999 Kč",
    description: "11 cvičení v ceně 10 vstupů pro pravidelné návštěvníky. Ušetři a získej flexibilitu pro své tréninky.",
    highlighted: true,
    cta: "Koupit členství"
  }
];

export default function Pricing() {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16 relative text-white bg-stone-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            Začněte svou <span className="text-primary">cestu</span> ještě dnes
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl justify-center mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-100'
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-primary to-orange-400 text-stone-950 px-4 py-0.5 rounded-full text-xs font-bold uppercase">
                    Nejpopulárnější
                  </span>
                </div>
              )}

              <div className={`p-6 md:p-7 border rounded-lg h-full ${
                plan.highlighted
                  ? 'border-primary bg-gradient-to-br from-stone-900 to-stone-950'
                  : 'border-gray-700 bg-stone-900 transition-colors duration-300'
              }`}>
                {/* Plan Name */}
                <h3 className="text-2xl md:text-2xl font-bold mb-1 uppercase">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-300 ml-2 text-base">/ 75 minút</span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-5 rounded-xl font-bold mb-7 uppercase transition-all duration-300 text-sm bg-gradient-to-r from-primary to-orange-400 text-stone-950 hover:shadow-lg hover:shadow-primary/50`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
