import { useState } from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  { time: '06:00–07:00', title: 'Выезд из вашего города', desc: 'Забираем от вашего адреса. Комфортная посадка, знакомство с группой и гидом. Старт путешествия!', icon: 'MapPin' },
  { time: '07:00–10:30', title: 'Дорога + рассказ гида', desc: 'Живописная дорога через предгорья. Гид рассказывает легенды Кавказа, историю региона и готовит вас к встрече с горами.', icon: 'Navigation' },
  { time: '10:30–11:30', title: 'Перевал Гум-Баши', desc: 'Останавливаемся на смотровой площадке. Панорама двуглавого Эльбруса — лучшие фото поездки! Легенды о горе Бештау.', icon: 'Mountain' },
  { time: '11:30–12:30', title: 'Сырные пещеры', desc: 'Уникальное место! Натуральные скальные «пещеры», где зреет домбайский сыр. Фото, дегустация, необычные ракурсы.', icon: 'Aperture' },
  { time: '12:30–13:30', title: 'Шоанинский храм X века', desc: 'Один из древнейших христианских храмов России. Каменная кладка тысячелетней давности, потрясающий вид на ущелье.', icon: 'Church' },
  { time: '13:30–14:30', title: 'Обед', desc: 'Свободное время для обеда. Рядом несколько кафе с блюдами кавказской кухни. Рекомендуем хычин и айран!', icon: 'UtensilsCrossed' },
  { time: '14:30–15:30', title: 'Река Уллу-Муруджу', desc: 'Одна из чистейших горных рек Кавказа. Прозрачная вода бирюзового цвета, водопады, свежий горный воздух.', icon: 'Waves' },
  { time: '15:30–18:00', title: 'Домбай — канатные дороги', desc: 'Кульминация тура! Посёлок Домбай у подножия гор. Канатная дорога (доп. плата), прогулки, свободное время.', icon: 'ArrowUpFromLine' },
  { time: '18:00–21:00', title: 'Возвращение домой', desc: 'Выезд в сторону КМВ. Делимся впечатлениями, пьём чай из термоса. Развозим по адресам.', icon: 'Home' },
];

const Timing = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-4 section-gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Программа</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Тайминг поездки
          </h2>
          <p className="text-white/60 text-lg">10–12 часов насыщенного путешествия. Нажмите на этап — узнайте подробности</p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mb-8">
          <div className="flex items-start gap-0 relative">
            {/* Line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-[#E6A817] to-[#1A4A6B]" />

            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center relative">
                <button
                  onClick={() => setActive(active === idx ? null : idx)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 transition-all mb-3 ${
                    active === idx
                      ? 'bg-[#E6A817] border-[#E6A817] scale-110 shadow-[0_0_15px_rgba(230,168,23,0.6)]'
                      : 'bg-[#0B1A33] border-[#E6A817]/50 hover:border-[#E6A817] hover:scale-105'
                  }`}
                >
                  <Icon name={step.icon as 'MapPin'} size={18} className={active === idx ? 'text-[#0B1A33]' : 'text-[#E6A817]'} />
                </button>
                <span className="text-[#E6A817] text-xs font-bold text-center">{step.time}</span>
                <span className="text-white/80 text-xs text-center mt-1 px-1 leading-tight">{step.title}</span>

                {active === idx && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 z-20 glass-card rounded-xl p-4 text-sm text-white/90 shadow-xl border border-[#E6A817]/30">
                    <p className="font-bold text-[#E6A817] mb-1">{step.time}</p>
                    <p className="font-semibold mb-2">{step.title}</p>
                    <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#E6A817]/20 border-l border-t border-[#E6A817]/30 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-3">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setActive(active === idx ? null : idx)}
                  className={`w-10 h-10 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    active === idx
                      ? 'bg-[#E6A817] border-[#E6A817]'
                      : 'bg-[#0B1A33] border-[#E6A817]/50'
                  }`}
                >
                  <Icon name={step.icon as 'MapPin'} size={16} className={active === idx ? 'text-[#0B1A33]' : 'text-[#E6A817]'} />
                </button>
                {idx < steps.length - 1 && <div className="w-0.5 flex-1 mt-1 bg-[#E6A817]/20" style={{ minHeight: 24 }} />}
              </div>
              <div className="pb-4 flex-1">
                <button
                  onClick={() => setActive(active === idx ? null : idx)}
                  className="text-left w-full"
                >
                  <span className="text-[#E6A817] text-xs font-bold block">{step.time}</span>
                  <span className="text-white font-semibold">{step.title}</span>
                </button>
                {active === idx && (
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{step.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PDF button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border border-[#E6A817]/40 text-[#E6A817] hover:bg-[#E6A817]/10 transition-colors px-6 py-3 rounded-xl font-semibold text-sm">
            <Icon name="Download" size={16} />
            Скачать тайминг в PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timing;
