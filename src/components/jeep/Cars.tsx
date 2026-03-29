import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const cars = [
  {
    name: 'Lincoln Navigator',
    seats: '7+1 пассажиров',
    features: ['Премиум-комфорт', 'Полный привод 4x4', 'Кондиционер, климат-контроль'],
    tag: 'Флагман',
    tagColor: '#E6A817',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/cd1ad5e8-3b71-4e52-ab09-5a2a6f9f9e11.jpg',
    specs: { clearance: '254 мм', drive: 'Полный привод', power: '450 л.с.' },
  },
  {
    name: 'Land Rover Discovery III',
    seats: '6+1 пассажиров',
    features: ['Полный привод', 'Кондиционер', 'Просторный салон'],
    tag: 'Надёжность',
    tagColor: '#4A9B7F',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/533b880a-1adb-4e24-9241-967e4fc06c6b.jpg',
    specs: { clearance: '210 мм', drive: 'Полный привод', power: '190 л.с.' },
  },
  {
    name: 'Hyundai H-1',
    seats: '8 пассажиров',
    features: ['8 мест', 'Просторный салон', 'Идеален для компаний'],
    tag: 'Для группы',
    tagColor: '#1A6A9B',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/0a1cc44d-75e3-4a0d-9ec3-4d6357a1364b.jpg',
    specs: { clearance: '175 мм', drive: 'Задний привод', power: '170 л.с.' },
  },
  {
    name: 'UAZ Patriot',
    seats: '4+1 пассажира',
    features: ['Клиренс 210 мм', 'Внедорожный', 'Для смелых маршрутов'],
    tag: 'Приключение',
    tagColor: '#9B4A1A',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/41036e3e-1839-4945-a78e-08b345d56a27.jpg',
    specs: { clearance: '210 мм', drive: 'Полный привод', power: '150 л.с.' },
  },
  {
    name: 'Toyota Land Cruiser Prado 150',
    seats: '5 пассажиров',
    features: ['Комфорт и мощь', 'Климат-контроль', 'Плавный ход'],
    tag: 'Комфорт',
    tagColor: '#4A1A9B',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/b242c2a1-cf99-4100-b589-0a37c02140da.jpg',
    specs: { clearance: '215 мм', drive: 'Полный привод', power: '249 л.с.' },
  },
  {
    name: 'Mercedes-Benz GL-Class',
    seats: '6 пассажиров',
    features: ['Немецкая надёжность', 'Премиум-салон', 'Горные дороги'],
    tag: 'Премиум',
    tagColor: '#1A4A6B',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/3edba8ad-b8d1-4b9e-a478-7d9ee053f0d0.jpg',
    specs: { clearance: '217 мм', drive: 'Полный привод', power: '340 л.с.' },
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
            Наши подготовленные внедорожники
          </h2>
          <p className="text-white/60 text-lg">6 автомобилей для комфортного путешествия по горам</p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-5">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden hover:border-[#E6A817]/50 transition-all cursor-pointer group hover-lift"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-transparent to-transparent" />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: car.tagColor + '30', color: car.tagColor, border: `1px solid ${car.tagColor}40` }}
                >
                  {car.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1">{car.name}</h3>
                <p className="text-[#E6A817] text-sm mb-3 flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  {car.seats}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {car.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6A817]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {hoveredIdx === idx && (
                  <div className="border-t border-white/10 pt-3 mt-3 space-y-1.5 animate-fade-in">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Клиренс</span>
                      <span className="text-white/70 font-semibold">{car.specs.clearance}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Привод</span>
                      <span className="text-white/70 font-semibold">{car.specs.drive}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Мощность</span>
                      <span className="text-white/70 font-semibold">{car.specs.power}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

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
              className="flex-shrink-0 w-72 glass-card rounded-2xl overflow-hidden snap-center"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] to-transparent" />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: car.tagColor + '30', color: car.tagColor, border: `1px solid ${car.tagColor}40` }}
                >
                  {car.tag}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-1">{car.name}</h3>
                <p className="text-[#E6A817] text-sm mb-2 flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  {car.seats}
                </p>
                <ul className="space-y-1">
                  {car.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6A817]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
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
