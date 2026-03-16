'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 md:px-10 py-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Kontaktujte nás</h2>
          <p className="text-gray-400 text-lg">Máme pre vás vždy čas. Neváhajte nás kontaktovať s akýmikoľvek otázkami</p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@gymboo.cz" className="text-gray-400 hover:text-white transition-colors">
                  info@gymboo.cz
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefónne číslo</h3>
                <a href="tel:+421950000000" className="text-gray-400 hover:text-white transition-colors">
                  +421 950 000 000
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lokalita</h3>
                <p className="text-gray-400 hover:text-white transition-colors">
                  Hlavná ulica 123<br />
                  12345 Praha<br />
                  Česká Republika
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-96 rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9656471632453!2d14.4368!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ1JzIwLjAiTiAxNMK0MjYnMTYuNSJF!5e0!3m2!1scs!2scz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
