import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const cars = [
  {
    name: 'Toyota Land Cruiser 200',
    seats: '4+1 пассажира',
    features: ['Клиренс 225 мм', 'Полный привод 4x4', 'Кондиционер, печка'],
    tag: 'Флагман',
    tagColor: '#E6A817',
  },
  {
    name: 'Mitsubishi Pajero Sport',
    seats: '5 пассажиров',
    features: ['Полный привод', 'Кондиционер', 'Широкий салон'],
    tag: 'Популярный',
    tagColor: '#4A9B7F',
  },
  {
    name: 'Hyundai H-1 Минивэн',
    seats: '8 пассажиров',
    features: ['8 мест', 'Просторный салон', 'Идеал для компаний'],
    tag: 'Для группы',
    tagColor: '#1A6A9B',
  },
  {
    name: 'UAZ Patriot',
    seats: '4+1 пассажира',
    features: ['Клиренс 205 мм', 'Внедорожный', 'Для смелых маршрутов'],
    tag: 'Приключение',
    tagColor: '#9B4A1A',
  },
  {
    name: 'Kia Mohave',
    seats: '5 пассажиров',
    features: ['Мощный двигатель', 'Комфорт-пакет', 'Плавный ход'],
    tag: 'Комфорт',
    tagColor: '#4A1A9B',
  },
  {
    name: 'Nissan Patrol',
    seats: '5 пассажиров',
    features: ['Надёжность', 'V8 двигатель', 'Горные дороги'],
    tag: 'Надёжность',
    tagColor: '#1A4A6B',
  },
];

const Cars = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  return (
    <section id="cars" className="py-20 px-4 section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Парк автомобилей</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Наши авто
          </h2>
          <p className="text-white/60 text-lg">6 подготовленных внедорожников и минивэнов</p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 hover:border-[#E6A817]/50 transition-all cursor-pointer group hover:shadow-[0_0_25px_rgba(230,168,23,0.15)]"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Car icon with hover effect */}
              <div className="relative flex items-center justify-center h-32 mb-5">
                <div className={`transition-transform duration-300 ${hoveredIdx === idx ? 'scale-110' : ''}`}>
                  <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-16">
                    <rect x="10" y="25" width="100" height="22" rx="4" fill="#1A4A6B"/>
                    <path d="M20 25 L32 8 L88 8 L100 25" fill="#0B1A33" stroke="#E6A817" strokeWidth="1.5"/>
                    <rect x="35" y="11" width="22" height="12" rx="2" fill="#1A6A9B" opacity="0.8"/>
                    <rect x="63" y="11" width="22" height="12" rx="2" fill="#1A6A9B" opacity="0.8"/>
                    <circle cx="30" cy="47" r="9" fill="#0B1A33" stroke="#E6A817" strokeWidth="2"/>
                    <circle cx="30" cy="47" r="4" fill="#E6A817"/>
                    <circle cx="90" cy="47" r="9" fill="#0B1A33" stroke="#E6A817" strokeWidth="2"/>
                    <circle cx="90" cy="47" r="4" fill="#E6A817"/>
                    <rect x="8" y="29" width="10" height="6" rx="2" fill="#E6A817" opacity={hoveredIdx === idx ? 1 : 0.3}/>
                    <rect x="102" y="29" width="10" height="6" rx="2" fill="#E6A817" opacity="0.3"/>
                    {hoveredIdx === idx && (
                      <>
                        <circle cx="14" cy="32" r="8" fill="#E6A817" opacity="0.15"/>
                        <circle cx="14" cy="32" r="5" fill="#E6A817" opacity="0.1"/>
                      </>
                    )}
                  </svg>
                </div>
              </div>

              {/* Tag */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 text-white"
                style={{ backgroundColor: car.tagColor + '30', color: car.tagColor, border: `1px solid ${car.tagColor}40` }}
              >
                {car.tag}
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{car.name}</h3>
              <p className="text-[#E6A817] text-sm mb-3 flex items-center gap-1">
                <Icon name="Users" size={14} />
                {car.seats}
              </p>

              <ul className="space-y-1.5">
                {car.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E6A817]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          style={{ scrollbarWidth: 'none' }}
        >
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 glass-card rounded-2xl p-6 snap-center"
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ backgroundColor: car.tagColor + '30', color: car.tagColor, border: `1px solid ${car.tagColor}40` }}
              >
                {car.tag}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{car.name}</h3>
              <p className="text-[#E6A817] text-sm mb-3 flex items-center gap-1">
                <Icon name="Users" size={14} />
                {car.seats}
              </p>
              <ul className="space-y-1.5">
                {car.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E6A817]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 border border-[#E6A817]/40 text-[#E6A817] hover:bg-[#E6A817]/10 transition-colors px-6 py-3 rounded-xl font-semibold text-sm"
          >
            <Icon name="Car" size={16} />
            Закрепить авто при бронировании
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cars;
