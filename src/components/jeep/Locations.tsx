import { useState } from 'react';
import Icon from '@/components/ui/icon';

const locations = [
  {
    emoji: '🏔',
    title: 'Перевал Гум-Баши',
    subtitle: '2037 м над уровнем моря',
    points: ['Панорамная смотровая на Эльбрус', 'Лучшие фото поездки', 'Легенды о горе Бештау'],
    full: 'Перевал Гум-Баши — одна из самых живописных точек маршрута. На высоте более 2000 метров открывается потрясающая панорама двуглавого Эльбруса — высочайшей вершины Европы. Выходим на смотровую площадку, делаем лучшие фото путешествия. Гид расскажет легенды о горе Бештау и историю освоения Кавказа. Здесь воздух особенный — чистый, с запахом горных трав.',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/a4c5b735-99ee-47ca-b324-e43d593ca6ca.jpg',
  },
  {
    emoji: '🧀',
    title: 'Сырные пещеры',
    subtitle: 'Уникальная природная достопримечательность',
    points: ['Натуральные скальные пещеры', 'Зреющий домбайский сыр', 'Необычные фото и дегустация'],
    full: 'Сырные пещеры — место, где природа встречается с традиционным карачаевским сыроделием. В прохладных скальных нишах зреет настоящий домбайский сыр. Вы увидите весь процесс, попробуете продукт прямо здесь и, конечно, сделаете уникальные фотографии. Местные мастера расскажут секреты древнего ремесла.',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2df00b53-24dc-4f4d-8435-d65e87093643.jpg',
  },
  {
    emoji: '⛪',
    title: 'Шоанинский храм X века',
    subtitle: 'Один из древнейших храмов России',
    points: ['Христианский храм тысячелетней давности', 'Потрясающий вид на ущелье', 'Рассказ о раннем христианстве'],
    full: 'Шоанинский храм — жемчужина маршрута. Построен в X веке нашей эры, это один из старейших христианских памятников на Северном Кавказе. Каменная кладка тысячелетней давности сохранилась удивительно хорошо. Храм стоит на скалистом уступе, открывая захватывающий вид на ущелье реки Кубань. Гид расскажет о раннем христианстве в регионе и уникальной истории этого места.',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2d0bdc34-d4aa-47d7-b2f5-924e31c54be7.jpg',
  },
  {
    emoji: '💧',
    title: 'Река Уллу-Муруджу',
    subtitle: 'Одна из чистейших рек Кавказа',
    points: ['Бирюзовая горная вода', 'Мини-водопады и пороги', 'Свежий горный воздух'],
    full: 'Река Уллу-Муруджу считается одной из самых чистых горных рек Кавказа. Прозрачная вода бирюзового цвета, небольшие водопады, зелёные берега — идеальное место для отдыха в середине дня. Здесь можно умыться ледяной горной водой, сделать красивые фото и просто насладиться тишиной нетронутой природы.',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/503546de-e929-47d8-b050-cfa94473f8db.jpg',
  },
  {
    emoji: '🚡',
    title: 'Домбай — канатные дороги',
    subtitle: 'Кульминация тура',
    points: ['Подъём на высоту 3200 м', 'Потрясающие виды на ущелье', 'Свободное время в посёлке'],
    full: 'Домбай — главная цель нашего путешествия. Горнолыжный курорт мирового уровня у слияния нескольких рек в окружении трёхтысячников. Канатная дорога поднимает вас на высоту 3200 метров — отсюда открываются виды на три ущелья и заснеженные вершины. Доплата за подъёмники — на месте. После — свободное время: кафе, сувениры, прогулки.',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/2df00b53-24dc-4f4d-8435-d65e87093643.jpg',
  },
  {
    emoji: '🌄',
    title: 'Дорога через Карачаево-Черкесию',
    subtitle: 'Живописный горный серпантин',
    points: ['Серпантины и ущелья', 'Горные аулы', 'Легенды Кавказа от гида'],
    full: 'Сама дорога — уже аттракцион. Вы проедете по живописным серпантинам через горные аулы Карачаево-Черкесии. По пути открываются виды на ущелья, реки и вершины. Гид сопровождает всю дорогу — рассказывает легенды Кавказа, историю народов региона и интересные факты о природе. Путь туда и обратно — одинаково красивый.',
    img: 'https://cdn.poehali.dev/projects/539e3d76-197f-4d49-8166-a42a2f32d407/files/503546de-e929-47d8-b050-cfa94473f8db.jpg',
  },
];

const Locations = () => {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <section id="locations" className="py-20 px-4 bg-[#0B1A33]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Маршрут</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Что вас ждёт на локациях
          </h2>
          <p className="text-white/60 text-lg">6 уникальных мест — каждое с историей</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-2xl overflow-hidden hover:border-[#E6A817]/50 transition-all hover:shadow-[0_0_30px_rgba(230,168,23,0.15)] cursor-pointer"
              onClick={() => setModal(idx)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={loc.img}
                  alt={loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 text-2xl">{loc.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1">{loc.title}</h3>
                <p className="text-[#E6A817] text-xs font-semibold mb-3">{loc.subtitle}</p>
                <ul className="space-y-1.5 mb-4">
                  {loc.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                      <Icon name="Check" size={14} className="text-[#E6A817] mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <button className="text-[#E6A817] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-[#0f2040] border border-[#E6A817]/30 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={locations[modal].img}
                alt={locations[modal].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2040] to-transparent" />
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="text-3xl mr-2">{locations[modal].emoji}</span>
                <span className="text-white text-2xl font-bold">{locations[modal].title}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#E6A817] text-sm font-semibold mb-3">{locations[modal].subtitle}</p>
              <p className="text-white/80 text-sm leading-relaxed">{locations[modal].full}</p>
              <button
                onClick={() => setModal(null)}
                className="mt-5 btn-gold w-full py-3 rounded-xl font-bold"
              >
                Понятно, хочу туда!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Locations;
