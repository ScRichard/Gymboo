'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-7 border-b bg-gray-600/50">
      {/* Left: Logo */}
      <div className="h-8 flex items-center">
        <Image src="/logo_white.png" alt="Gymboo Logo" width={120} height={50} priority/>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-8">
        <a href="/" className="text-white relative text-lg font-bold hover:text-[#FEBA53] transition-all p">
            <span>Jak na to</span>
            <div className="absolute block bottom-0 left-0 right-0 h-0.5 w-full bg-[#FEBA53] transform transition-transform"></div>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Right: Rezervace Button */}
      <button className="hidden md:inline-block px-4 py-2 bg-[#FEBA53] text-black font-bold text-lg rounded-xl hover:bg-blue-700">
        Rezervace
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-gray-900">
              Menu
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 w-full">
              Rezervace
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
