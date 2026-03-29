import Icon from '@/components/ui/icon';

const Footer = () => {
  const tourLinks = [
    'Тур на Домбай',
    'Тур на Эльбрус',
    'Тур на Джилысу',
    'Плато Бермамыт',
    'Северная Осетия',
    'Чечня',
    'Ингушетия',
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060f1e] border-t border-white/10 pt-16 pb-24 md:pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <div className="font-extrabold text-white text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  JEEP TOUR <span className="text-[#E6A817]">DOMBAY</span>
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Джип-туры по Кавказу из городов Кавказских Минеральных Вод. Профессиональные гиды, подготовленные внедорожники, незабываемые впечатления.
            </p>
            <a href="tel:+79678284699" className="flex items-center gap-2 text-[#E6A817] font-bold text-lg mb-3 hover:text-[#F0BC3A] transition-colors">
              <Icon name="Phone" size={18} />
              +7 967 828-46-99
            </a>
            <div className="flex gap-3">
              <a
                href="https://wa.me/79678284699"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-600/30 transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
              </a>
              <a
                href="https://t.me/+79678284699"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 transition-colors"
              >
                <Icon name="Send" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 transition-colors"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-blue-800/20 border border-blue-700/30 flex items-center justify-center text-blue-300 hover:bg-blue-800/30 transition-colors"
              >
                <Icon name="Users" size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Tours */}
          <div>
            <h3 className="text-white font-bold mb-4">Наши туры</h3>
            <ul className="space-y-2">
              {tourLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(idx === 0 ? 'about' : 'other-tours')}
                    className="text-white/50 hover:text-[#E6A817] transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Информация</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'О туре', id: 'about' },
                { label: 'Локации', id: 'locations' },
                { label: 'Наши авто', id: 'cars' },
                { label: 'Контакты', id: 'booking' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/50 hover:text-[#E6A817] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-white/40 text-xs space-y-1">
              <p className="flex items-center gap-2">
                <Icon name="Clock" size={12} />
                Режим: 8:00 – 20:00 ежедневно
              </p>
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={12} />
                Кавказские Минеральные Воды, Россия
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Jeep Tour Dombay. ИП, договор оферты. Все права защищены.
          </p>
          <p className="text-white/30 text-xs">
            Джип-тур на Домбай из КМВ — канатные дороги, храм X века, перевал Гум-Баши
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
