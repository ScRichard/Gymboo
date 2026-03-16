import Image from 'next/image';
import { Dumbbell, Activity, Wind } from 'lucide-react';

export default function Equipment() {
  const equipment = [
    {
      title: "Silový trénink",
      description: "Kompletní sada činek, výztuží a fitness strojů pro budování svalové hmoty a zvyšování síly. Od začátečníků až po pokročilé atlety.",
      icon: Dumbbell,
    },
    {
      title: "Funkční trénink",
      description: "Kettlebelly různých vah pro funkční trénink, který kombinuje sílu, vytrvalost a flexibilitu tela.",
      icon: Wind,
    },
    {
      title: "Kardio",
      description: "Moderní kardio vybavení pro zlepšení vytrvalosti a zdraví srdce. Běžecké pásy, eliptické trenažéry a další.",
      icon: Activity,
    },
  ];

  const images = [
    { src: "/dumbell_nobg.png", alt: "Fitness vybavení 1" },
    { src: "/dumbell_nobg.png", alt: "Fitness vybavení 2" },
    { src: "/dumbell_nobg.png", alt: "Fitness vybavení 3" },
  ];

  return (
    <section id="equipment" className="px-6 md:px-10 py-6 md:py-12 relative text-white flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center z-20">


        <div className="flex flex-col gap-8 order-1 md:order-1">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              Naše <span className="text-primary">vybavení</span>
            </h2>
            <p className="text-lg md:text-xl text-white mb-8">
              V Gymboo najdeš vše, co potřebuješ pro kompletní trénink. Ať jsi zaměřený na budování svalů, zlepšování kondice nebo funkční trénink, máme pro tebe to správné vybavení.
            </p>
          </div>

          {/* Equipment Items */}
          <div className="flex flex-col gap-6">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-orange-400  flex items-center justify-center">
                    <Icon size={24} className="text-stone-950 font-bold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white text-base">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Image Grid */}
        <div className="flex flex-row gap-4 flex-nowrap order-2 md:order-2 h-full overflow-hidden">
          {images.map((image, index) => (
            <div key={index} className="relative h-full rotate-45 w-56 rounded-lg overflow-hidden transition-colors duration-300 flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover p-3 -rotate-45 transition-transform duration-300"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


