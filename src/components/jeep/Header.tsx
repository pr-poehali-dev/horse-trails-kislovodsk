import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'О туре', href: '#about' },
    { label: 'Локации', href: '#locations' },
    { label: 'Наши авто', href: '#cars' },
    { label: 'Другие туры', href: '#other-tours' },
    { label: 'Контакты', href: '#booking' },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0B1A33]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20 4L35 15V32H5V15L20 4Z" fill="#1A4A6B" stroke="#E6A817" strokeWidth="1.5"/>
                <path d="M14 32V22H26V32" fill="#0B1A33" stroke="#E6A817" strokeWidth="1.2"/>
                <circle cx="20" cy="14" r="3" fill="#E6A817"/>
                <path d="M8 20C8 20 14 26 20 24C26 22 32 20 32 20" stroke="#E6A817" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="35" r="3" fill="#E6A817" stroke="#0B1A33" strokeWidth="1"/>
                <circle cx="28" cy="35" r="3" fill="#E6A817" stroke="#0B1A33" strokeWidth="1"/>
                <rect x="10" y="31" width="20" height="4" rx="2" fill="#E6A817"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>JEEP TOUR</div>
              <div className="text-[#E6A817] text-xs leading-tight font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>DOMBAY</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/80 hover:text-[#E6A817] transition-colors text-sm font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79678284699"
              className="flex items-center gap-2 text-white hover:text-[#E6A817] transition-colors font-semibold"
            >
              <Icon name="Phone" size={16} className="text-[#E6A817]" />
              +7 967 828-46-99
            </a>
            <button
              onClick={() => scrollTo('#booking')}
              className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold pulse-gold"
            >
              <Icon name="Calendar" size={16} />
              Забронировать
            </button>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+79678284699" className="text-[#E6A817]">
              <Icon name="Phone" size={20} />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0B1A33]/98 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-white/80 hover:text-[#E6A817] py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#booking')}
              className="btn-gold w-full py-3 rounded-lg text-sm font-bold mt-2"
            >
              Забронировать место
            </button>
          </div>
        )}
      </header>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#0B1A33]/95 backdrop-blur-md border-t border-white/10">
        <a
          href="tel:+79678284699"
          className="flex items-center gap-2 text-white font-bold text-sm"
        >
          <div className="w-9 h-9 bg-[#1A4A6B] rounded-full flex items-center justify-center">
            <Icon name="Phone" size={16} className="text-[#E6A817]" />
          </div>
          +7 967 828-46-99
        </a>
        <button
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-gold px-5 py-2.5 rounded-lg text-sm font-bold"
        >
          Забронировать
        </button>
      </div>
    </>
  );
};

export default Header;
