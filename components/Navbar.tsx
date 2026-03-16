'use client';

import Image from 'next/image';
const prefix = 'https://scrichard.github.io/Gymboo';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarLinkButton from './NavbarLinkButton';

const navLinks = [
  { sectionId: "how-it-works", label: "Jak na to" },
  { sectionId: "equipment", label: "Vybavení" },
  { sectionId: "photos", label: "Galerie" },
  { sectionId: "pricing", label: "Ceník" },
  { sectionId: "faq", label: "FAQ" },
  { sectionId: "contact", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollTo = elementTop - navbarHeight / 2;
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 w-full z-40 flex items-center justify-between px-6 lg:px-10 py-7 transform transition-all duration-300 ease-in-out ${hasScrolled ? 'glass-dark' : 'bg-transparent'}`}>
      {/* Left: Logo */}
      <div className="h-8 flex items-center">
        <Image src={`${prefix}/logo_white.png`} alt="Gymboo Logo" width={180} height={50} priority/>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden lg:flex gap-8">
        {navLinks.map((link) => (
          <NavbarLinkButton key={link.label} label={link.label} onClick={() => handleSmoothScroll(link.sectionId)} />
        ))}
      </div>

      {/* Right: Menu Button (Mobile) */}
      <button
        className="lg:hidden p-2 text-white hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Right: Rezervace Button (Desktop) */}
      <button className="hidden lg:inline-block btn-primary uppercase text-sm font-bold">
        Rezervace
      </button>
    </nav>

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 z-50 h-screen w-full overflow-hidden bg-stone-950/60 backdrop-blur-xl
       lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Mobile Menu Header: Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="h-8 flex items-center">
            <Image src={`${prefix}/logo_white.png`} alt="Gymboo Logo" width={120} height={50} priority/>
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
        <div className="flex flex-col gap-2 px-6 py-4">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => handleSmoothScroll(link.sectionId)} className="group text-white hover:text-primary transition-all w-full h-12 flex items-center justify-center hover:bg-white/5 bg-transparent border-none cursor-pointer">
              <span className="relative">
                {link.label}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 w-full bg-white transform transition-all scale-x-0 group-hover:bg-primary group-hover:scale-x-100"></div>
              </span>
            </button>
          ))}
          <button className="px-4 py-3 uppercase btn-primary font-bold w-full mt-2">
            Rezervace
          </button>
        </div>
      </div>
    </>
  );
}
