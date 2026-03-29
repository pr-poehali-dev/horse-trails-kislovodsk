import Icon from '@/components/ui/icon';

const reasons = [
  { icon: 'Clock', title: 'Полный день без гонки', desc: '10–12 часов — всё успеваем, нигде не спешим' },
  { icon: 'MapPin', title: 'Трансфер от адреса', desc: 'Забираем из любого города КМВ прямо от вашего дома' },
  { icon: 'Mic', title: 'Гид-профессионал', desc: 'Легенды, лучшие ракурсы, интересные факты весь день' },
  { icon: 'Heart', title: 'Для всей семьи', desc: 'Подходит парам, семьям с детьми и людям постарше' },
  { icon: 'Sunrise', title: 'Ранний выезд', desc: 'Стартуем в 6:00 — успеваем всё без пробок и толпы' },
];

const reviews = [
  {
    name: 'Анна К.',
    city: 'Кисловодск',
    text: 'Потрясающий тур! Гид Руслан знает каждый камень в горах. Шоанинский храм произвёл невероятное впечатление. Уже планируем повторить с детьми.',
    stars: 5,
    date: 'Март 2026',
  },
  {
    name: 'Сергей М.',
    city: 'Пятигорск',
    text: 'Ездили на Домбай впервые. Land Cruiser 200 — машина мечты для таких дорог. Канатка, сырные пещеры, храм — всё уместилось в один день. Рекомендую!',
    stars: 5,
    date: 'Февраль 2026',
  },
  {
    name: 'Наталья В.',
    city: 'Ессентуки',
    text: 'Ехали с мамой (65 лет). Всё продумано: комфортные кресла, остановки, гид следит за группой. Мама в восторге! Спасибо за внимание к пожилым.',
    stars: 5,
    date: 'Январь 2026',
  },
];

const faq = [
  {
    q: 'Что взять с собой?',
    a: 'Тёплую куртку (в горах прохладно), удобную обувь, документы, деньги на канатку и обед. Всё остальное обеспечим мы.',
  },
  {
    q: 'Безопасно ли детям?',
    a: 'Да! Маршрут подходит детям от 5 лет. Высота до 1750 м — без акклиматизации. Гид следит за всеми.',
  },
  {
    q: 'Как работает рассадка в авто?',
    a: 'Места не бронируются заранее. На каждой локации гид меняет людей местами, чтобы все получили лучший вид. При проблемах со здоровьем — вы остаётесь в удобном месте.',
  },
  {
    q: 'Что входит в стоимость?',
    a: 'Трансфер, сопровождение гида, все переезды. Дополнительно оплачиваются: канатная дорога, обед, сувениры.',
  },
];

const WhyUs = () => {
  return (
    <>
      {/* Why us */}
      <section className="py-16 px-4 bg-[#0f2040]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Наши преимущества</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Почему выбирают этот тур
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {reasons.map((r, idx) => (
              <div key={idx} className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-[#E6A817]/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E6A817]/15 flex items-center justify-center flex-shrink-0">
                  <Icon name={r.icon as 'Clock'} size={18} className="text-[#E6A817]" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{r.title}</h3>
                  <p className="text-white/60 text-sm">{r.desc}</p>
                </div>
              </div>
            ))}
            {/* Guide quote */}
            <div className="glass-card rounded-xl p-5 border border-[#E6A817]/30 flex flex-col justify-center">
              <Icon name="Quote" size={24} className="text-[#E6A817] mb-2" />
              <p className="text-white/80 text-sm italic leading-relaxed">
                «Здесь воздух похож на надежду — чистый и горький»
              </p>
              <p className="text-[#E6A817] text-xs font-bold mt-2">— Наш гид, 7 лет в горах</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-[#0B1A33]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Отзывы</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Что говорят путешественники
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((rev, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[#E6A817]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1 mb-4">«{rev.text}»</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">{rev.name}</p>
                    <p className="text-white/50 text-xs">{rev.city}</p>
                  </div>
                  <span className="text-white/40 text-xs">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0f2040]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-3">
            {faq.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-semibold pr-4">{q}</span>
        <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size={18} className="text-[#E6A817] flex-shrink-0" />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-white/70 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

import { useState } from 'react';

export default WhyUs;
