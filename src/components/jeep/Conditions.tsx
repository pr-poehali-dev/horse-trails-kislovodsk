import Icon from '@/components/ui/icon';

const conditions = [
  { icon: 'Truck', title: 'Транспорт', desc: 'Подготовленные внедорожники и минивэны с кондиционером' },
  { icon: 'Users', title: 'Группы', desc: 'До 8 человек — камерно и комфортно, не толпа' },
  { icon: 'MapPin', title: 'Выезд', desc: 'Со всех городов КМВ — забираем от вашего адреса' },
  { icon: 'Armchair', title: 'Рассадка', desc: 'Места в авто не бронируются заранее. Гид меняет местами на локациях' },
  { icon: 'Heart', title: 'Здоровье', desc: 'При проблемах со здоровьем — вы всегда в комфортном кресле' },
  { icon: 'Mountain', title: 'Высота', desc: 'До 1750 м — подходит для семей, пар и людей постарше' },
];

const Conditions = () => {
  return (
    <section className="py-16 px-4 bg-[#0f2040]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Важно знать</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Условия поездки
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 glass-card rounded-xl p-5 hover:border-[#E6A817]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#E6A817]/15 flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as 'Truck'} size={18} className="text-[#E6A817]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-8 glass-card rounded-xl p-5 border-l-4 border-[#E6A817] flex gap-4 items-start">
          <Icon name="AlertTriangle" size={20} className="text-[#E6A817] flex-shrink-0 mt-0.5" />
          <p className="text-white/80 text-sm leading-relaxed">
            <strong className="text-white">Важно запомнить:</strong> Места в авто не бронируются заранее.
            Гид меняет местами на локациях, но если есть проблемы со здоровьем — вы остаётесь в комфортном кресле.
            Канатные дороги Домбая оплачиваются отдельно на месте.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
