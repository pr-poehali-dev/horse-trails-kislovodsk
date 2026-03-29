import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const slides = [
  {
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2df00b53-24dc-4f4d-8435-d65e87093643.jpg',
    label: 'Канатные дороги Домбая',
  },
  {
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2d0bdc34-d4aa-47d7-b2f5-924e31c54be7.jpg',
    label: 'Шоанинский храм X века',
  },
  {
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/a4c5b735-99ee-47ca-b324-e43d593ca6ca.jpg',
    label: 'Перевал Гум-Баши · Эльбрус',
  },
];

const facts = [
  { icon: 'Clock', text: '10–12 часов' },
  { icon: 'MapPin', text: 'Выезд из КМВ' },
  { icon: 'Truck', text: 'Внедорожники' },
  { icon: 'Users', text: 'до 8 человек' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [nextSeat, setNextSeat] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Countdown to next tour (mock)
  const [countdown, setCountdown] = useState({ days: 2, hours: 5, mins: 30 });
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, mins } = prev;
        mins--;
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 3, hours: 12, mins: 0 };
        return { days, hours, mins };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: idx === current ? 1 : 0,
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33]/90 via-[#0B1A33]/70 to-[#0B1A33]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-24 pb-32 md:pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="animate-fade-in-up">
            {/* Countdown */}
            <div className="inline-flex items-center gap-2 bg-[#E6A817]/20 border border-[#E6A817]/40 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#E6A817] animate-pulse" />
              <span className="text-[#E6A817] text-sm font-semibold">
                Следующий выезд через {countdown.days}д {countdown.hours}ч {countdown.mins}м
              </span>
            </div>

            {/* Seats left */}
            <div className="flex items-center gap-2 mb-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${i < nextSeat ? 'bg-[#E6A817]' : 'bg-white/20'}`}
                  title={i < nextSeat ? 'Место занято' : 'Свободно'}
                />
              ))}
              <span className="text-white/70 text-sm ml-2">осталось {8 - nextSeat} мест</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Тур «Домбай –<br />
              <span className="text-[#E6A817]">сердце гор</span>»<br />
              из КМВ
            </h1>

            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              Канатные дороги, храм X века и сырные пещеры за один день.
              Выезд <strong className="text-white">6:00–7:00</strong> из любого города КМВ.
              Возвращение <strong className="text-white">20:00–21:00</strong>.
            </p>

            {/* Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {facts.map((f, i) => (
                <div key={i} className="glass-card rounded-xl p-3 flex flex-col items-center text-center">
                  <Icon name={f.icon} size={20} className="text-[#E6A817] mb-1" />
                  <span className="text-white text-xs font-semibold">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold pulse-gold"
              >
                <Icon name="Calendar" size={18} />
                Забронировать место
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white border border-white/30 hover:border-[#E6A817] hover:text-[#E6A817] transition-all"
              >
                <Icon name="PlayCircle" size={18} />
                Смотреть программу
              </button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://wa.me/79678284699" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/60 hover:text-green-400 transition-colors text-sm">
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </a>
              <a href="https://t.me/+79678284699" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/60 hover:text-blue-400 transition-colors text-sm">
                <Icon name="Send" size={16} />
                Telegram
              </a>
              <a href="tel:+79678284699" className="flex items-center gap-1 text-white/60 hover:text-[#E6A817] transition-colors text-sm">
                <Icon name="Phone" size={16} />
                +7 967 828-46-99
              </a>
            </div>
          </div>

          {/* Right: slide info on desktop */}
          <div className="hidden md:flex flex-col items-end gap-4">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-64 h-40 rounded-2xl overflow-hidden border-2 transition-all ${
                  idx === current ? 'border-[#E6A817] scale-105 shadow-[0_0_20px_rgba(230,168,23,0.5)]' : 'border-white/20 opacity-60'
                }`}
                style={{ backgroundImage: `url(${slide.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{slide.label}</span>
                </div>
              </button>
            ))}

            {/* Slide indicators */}
            <div className="flex gap-2 mt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === current ? 'w-8 bg-[#E6A817]' : 'w-3 bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs">Листай вниз</span>
        <Icon name="ChevronDown" size={20} className="text-white/40" />
      </div>
    </section>
  );
};

export default Hero;