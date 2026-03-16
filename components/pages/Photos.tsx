'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Photos() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setColumns(2); // Tablet
      } else {
        setColumns(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const photos = [
    { id: 1, image: "/gym1.jpg", title: "Silový trénink" },
    { id: 2, image: "/gym2.jpg", title: "CrossFit" },
    { id: 3, image: "/gym3.jpg", title: "Kardio" },
    { id: 4, image: "/gym4.jpg", title: "Yoga & Stretch" },
    { id: 5, image: "/gym5.jpg", title: "Cvičenie" },
    { id: 6, image: "/gym6.jpg", title: "Tréning" },
    { id: 7, image: "/gym7.jpg", title: "Fitness" },
    { id: 8, image: "/gym8.jpg", title: "Kondícia" },
    { id: 9, image: "/gym9.jpg", title: "Sily" },
  ];

  const getMosaicSpan = (index: number) => {
    // Pattern for mosaic layout: create varying sizes
    const pattern = [2, 1, 1, 1, 2, 1, 1, 1, 2]; // Which items span 2 columns
    return pattern[index % pattern.length];
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 py-12 md:py-16 relative text-white">
      {/* Mosaic Grid Layout */}
      <div className="max-w-7xl mx-auto" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '0.75rem',
        gridAutoRows: '250px'
      }}>
        {photos.map((item, index) => {
          const span = columns > 1 ? getMosaicSpan(index) : 1;
          const isLarge = span === 2 && columns > 1;
          
          return (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
              style={{
                gridColumn: `span ${Math.min(span, columns)}`,
                gridRow: isLarge ? 'span 1' : 'span 1'
              }}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                priority={item.id <= 3}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
