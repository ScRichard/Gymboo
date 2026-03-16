import Image from 'next/image';
const prefix = 'https://scrichard.github.io/Gymboo';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen px-10 py-12 md:py-0 relative">
        <div className="-z-10">
        <Image src={`${prefix}/background.png`} alt="Hero Image"
         width={1920} height={1080}
         className="absolute object-cover object-right right-0 top-0 bottom-0 h-full w-full md:w-auto grayscale opacity-10 md:opacity-50 -z-6" priority />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950 pointer-events-none -z-5" />
        </div>

        <div className="hero__text min-h-screen flex flex-col justify-center max-w-3xl relative gap-5">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Místo, kde začíná tvoje nejlepší forma</h1>
            <h3 className="text-xl md:text-xl text-gray-400 mb-6"><strong className="text-gray-300 font-medium">Moderní privátní fitness centrum</strong>, které si rezervuješ jen pro sebe. Špičkové vybavení, maximální soukromí a prostor, kde se můžeš soustředit jen na svůj trénink.</h3>
            </div>
        
            <div className="flex flex-col md:flex-row gap-4">
                <a href="#" className="btn-primary w-full md:w-40 flex flex-row items-center justify-center gap-2 uppercase text-sm font-bold">
                    Rezervace
                </a>
                <a href="#" className=" btn-secondary w-full md:w-40 flex flex-row items-center justify-center gap-2 uppercase text-sm font-bold">
                    Zjistit více
                </a>
            </div>
        </div>

        <div className="absolute bottom-10 inset-x-0 flex justify-center">
          <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-500 hover:border-gray-600 transition-all duration-300 animate-bounce animation-delay-500">
            <ArrowDown size={24} className="text-gray-600" />
          </button>
        </div>
    </section>
  );
}