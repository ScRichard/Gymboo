import Image from 'next/image';
const prefix = 'https://scrichard.github.io/Gymboo';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-12 md:py-0 relative flex items-center justify-center">
      
      {/* BACKGROUND */}
      <div className="-z-10">
        <Image
          src={`${prefix}/background.png`}
          alt="Hero Image"
          width={1920}
          height={1080}
          className="absolute object-cover object-right right-0 top-0 bottom-0 h-full w-full md:w-auto grayscale opacity-10 md:opacity-50 -z-6"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950 pointer-events-none -z-5" />
      </div>

      {/* CENTERED CONTENT */}
      <div className="hero__text flex flex-col items-center text-center max-w-3xl mx-auto gap-5">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            Místo, kde začíná tvoje nejlepší forma
          </h1>

          <h3 className="text-xl text-gray-400 mb-6">
            <strong className="text-gray-300 font-medium">
              Moderní privátní fitness centrum
            </strong>, které si rezervuješ jen pro sebe. 
            Špičkové vybavení, maximální soukromí a prostor, 
            kde se můžeš soustředit jen na svůj trénink.
          </h3>
        </div>
