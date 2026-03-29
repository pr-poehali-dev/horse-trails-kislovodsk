import Icon from '@/components/ui/icon';

const tours = [
  {
    emoji: '🏔',
    title: 'Эльбрус',
    subtitle: 'Джип-тур к подножию',
    desc: 'Самая высокая гора Европы. Поляна Нарзанов, Азау, вид на двуглавый великан.',
    duration: '10–12 ч',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/a4c5b735-99ee-47ca-b324-e43d593ca6ca.jpg',
  },
  {
    emoji: '💧',
    title: 'Джилысу',
    subtitle: 'Водопады и источники',
    desc: 'Северный склон Эльбруса. Нарзанные источники, водопад Султан, горные луга.',
    duration: '12–14 ч',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2df00b53-24dc-4f4d-8435-d65e87093643.jpg',
  },
  {
    emoji: '🌄',
    title: 'Бермамыт',
    subtitle: 'Самая красивая смотровая',
    desc: 'Плато над облаками. Рассвет над Эльбрусом, бескрайние виды, живая природа.',
    duration: '8–10 ч',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/503546de-e929-47d8-b050-cfa94473f8db.jpg',
  },
  {
    emoji: '⚔️',
    title: 'Северная Осетия',
    subtitle: 'Куртатинское ущелье',
    desc: 'Мидаграбинские водопады, замки аланов, Реком — языческое святилище.',
    duration: '12–14 ч',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2d0bdc34-d4aa-47d7-b2f5-924e31c54be7.jpg',
  },
  {
    emoji: '🕌',
    title: 'Чечня',
    subtitle: 'Озеро Кезеной-Ам',
    desc: 'Высокогорное озеро Кезеной-Ам, Аргунское ущелье, башенные комплексы.',
    duration: '12–14 ч',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/503546de-e929-47d8-b050-cfa94473f8db.jpg',
  },
  {
    emoji: '🗼',
    title: 'Ингушетия',
    subtitle: 'Средневековые замки',
    desc: 'Башенные комплексы Вовнушки и Эрзи — ЮНЕСКО. Средневековая архитектура.',
    duration: '10–12 ч',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2df00b53-24dc-4f4d-8435-d65e87093643.jpg',
  },
];

const OtherTours = () => {
  return (
    <section id="other-tours" className="py-20 px-4 bg-[#0B1A33]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Другие направления</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Другие наши туры
          </h2>
          <p className="text-white/60 text-lg">Джип-туры по всему Кавказу — из городов КМВ</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-2xl overflow-hidden hover:border-[#E6A817]/50 transition-all cursor-pointer hover:shadow-[0_0_25px_rgba(230,168,23,0.15)]"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/80 to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Icon name="Clock" size={12} className="text-[#E6A817]" />
                  <span className="text-white text-xs font-semibold">{tour.duration}</span>
                </div>
                <div className="absolute top-3 left-3 text-2xl">{tour.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-xl mb-1">{tour.title}</h3>
                <p className="text-[#E6A817] text-xs font-semibold mb-2">{tour.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{tour.desc}</p>
                <button className="text-[#E6A817] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Узнать подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTours;
