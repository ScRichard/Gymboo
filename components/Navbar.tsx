'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarLinkButton from './NavbarLinkButton';

const navLinks = [
  { href: "#", label: "Jak na to" },
  { href: "#", label: "Vybavení" },
  { href: "#", label: "Cenník" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className={`relative flex items-center justify-between px-10 py-7 bg-gray-600/30 transform transition-transform duration-300 ease-in-out md:translate-y-0 ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Left: Logo */}
      <div className="h-8 flex items-center">
        <Image src="/logo_white.png" alt="Gymboo Logo" width={120} height={50} priority/>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <NavbarLinkButton key={link.label} href={link.href} label={link.label} />
        ))}
      </div>

      {/* Right: Menu Button (Mobile) */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Right: Rezervace Button (Desktop) */}
      <button className="hidden md:inline-block px-6 py-2 bg-[#FEBA53] text-black font-bold text-lg rounded-xl hover:bg-[#fdb343] hover:shadow-[0_0_15px_#fdb343] transition-all ease-in-out transition-duration-400">
        Rezervace
      </button>
    </nav>

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 h-screen w-full overflow-hidden bg-gray-800/65 backdrop-blur-lg border-b border-gray-600 md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Mobile Menu Header: Logo and Close Button */}
        <div className="flex items-center justify-between px-10 py-7 border-b border-gray-600">
          <div className="h-8 flex items-center">
            <Image src="/logo_white.png" alt="Gymboo Logo" width={120} height={50} priority/>
          </div>
          <button
            className="p-2 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-white hover:text-[#FEBA53] transition-all w-full h-12 flex items-center justify-center">
              <span className="group relative">
                {link.label}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 w-full bg-white transform transition-all scale-x-0 group-hover:bg-[#FEBA53] group-hover:scale-x-100"></div>
              </span>
            </a>
          ))}
          <button className="px-4 py-4 bg-[#FEBA53] text-black font-bold rounded-xl hover:shadow-[0_0_15px_#FEBA53] transition-all w-full">
            Rezervace
          </button>
        </div>
      </div>
    </>
  );
}
