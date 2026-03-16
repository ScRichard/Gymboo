'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const categories = [
    { label: 'Jak na to', href: '#' },
    { label: 'Vybavení', href: '#' },
    { label: 'Galerie', href: '#' },
    { label: 'Ceník', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Kontakt', href: '#' },
  ];

  return (
    <footer className="bg-stone-900/50 border-t border-white/10 px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="h-8 flex items-center mb-6">
              <Image src="/logo_white.png" alt="Gymboo Logo" width={140} height={40} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Moderní privátní fitness centrum s vrcholovým vybavením a maximálnym komfortom.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase">Kategórie</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase">Otváracie hodiny</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-gray-400">Pon - Ne</span>
                <span className="text-gray-300 font-medium">00:00 - 24:00</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@gymboo.cz" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@gymboo.cz
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+421950000000" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +421 950 000 000
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <address className="text-gray-400 text-sm not-italic">
                  Hlavná ulica 123<br />
                  12345 Praha, CZ
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Gymboo. Všetky práva vyhradené.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Súkromie
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Podmienky použitia
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
