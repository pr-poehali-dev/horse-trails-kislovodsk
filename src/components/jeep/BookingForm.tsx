import { useState } from 'react';
import Icon from '@/components/ui/icon';

const cities = ['Кисловодск', 'Ессентуки', 'Пятигорск', 'Железноводск', 'Минеральные Воды', 'Георгиевск', 'Нальчик'];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    people: '2',
    city: '',
    comment: '',
    agreed: false,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🏔 Заявка на тур Домбай\n👤 ${form.name}\n📞 ${form.phone}\n📅 ${form.date}\n👥 ${form.people} чел.\n🏙 ${form.city}${form.comment ? `\n💬 ${form.comment}` : ''}`
    );
    window.open(`https://wa.me/79678284699?text=${msg}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <section id="booking" className="py-20 px-4 section-gradient">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#E6A817]/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={40} className="text-[#E6A817]" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">Заявка открыта в WhatsApp!</h2>
          <p className="text-white/70 mb-8">Отправьте сообщение — менеджер подтвердит бронирование в ближайшее время.</p>
          <button onClick={() => setSent(false)} className="text-[#E6A817] underline text-sm">Отправить ещё одну заявку</button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 px-4 section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#E6A817] text-sm font-bold tracking-widest uppercase mb-3 block">Бронирование</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Забронировать место
          </h2>
          <p className="text-white/60 text-lg">Заполните форму — ответим за 15 минут</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">Ваше имя *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Как вас зовут?"
                  className="w-full bg-[#0B1A33] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#E6A817] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">Телефон *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-[#0B1A33] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#E6A817] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">Дата поездки *</label>
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#0B1A33] border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#E6A817] focus:outline-none transition-colors"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-semibold mb-2">Количество человек *</label>
                <select
                  name="people"
                  value={form.people}
                  onChange={handleChange}
                  className="w-full bg-[#0B1A33] border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#E6A817] focus:outline-none transition-colors"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'человек' : n < 5 ? 'человека' : 'человек'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-sm font-semibold mb-2">Ваш город КМВ *</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full bg-[#0B1A33] border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#E6A817] focus:outline-none transition-colors"
              >
                <option value="">Выберите город</option>
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-white/70 text-sm font-semibold mb-2">Комментарий / пожелания</label>
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                rows={3}
                placeholder="Особые пожелания, вопросы..."
                className="w-full bg-[#0B1A33] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#E6A817] focus:outline-none transition-colors resize-none"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 rounded border-white/30 bg-[#0B1A33] accent-[#E6A817]"
              />
              <span className="text-white/60 text-sm">
                Я согласен(а) с условиями поездки и обработкой персональных данных
              </span>
            </label>

            <button
              type="submit"
              className="btn-gold w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
            >
              <Icon name="MessageCircle" size={18} />
              Забронировать сейчас
            </button>

            <p className="text-white/40 text-xs text-center">
              Нажимая кнопку, вы откроете WhatsApp с заполненной заявкой
            </p>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Свяжитесь напрямую</h3>

              <a
                href="tel:+79678284699"
                className="flex items-center gap-4 mb-6 hover:text-[#E6A817] transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E6A817]/15 flex items-center justify-center group-hover:bg-[#E6A817]/25 transition-colors">
                  <Icon name="Phone" size={24} className="text-[#E6A817]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Позвонить</p>
                  <p className="text-white font-bold text-xl">+7 967 828-46-99</p>
                </div>
              </a>

              <div className="flex gap-3 mb-6">
                <a
                  href="https://wa.me/79678284699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600/20 border border-green-500/30 rounded-xl py-3 text-green-400 font-semibold hover:bg-green-600/30 transition-colors"
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/+79678284699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-xl py-3 text-blue-400 font-semibold hover:bg-blue-600/30 transition-colors"
                >
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/60 text-sm border-t border-white/10 pt-4">
                <Icon name="Clock" size={16} className="text-[#E6A817]" />
                Режим работы: <span className="text-white font-semibold">8:00 – 20:00</span>
              </div>
            </div>

            {/* Tour highlights */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Что включено в тур</h3>
              {[
                'Трансфер от/до вашего адреса (КМВ)',
                'Проезд на подготовленном внедорожнике',
                'Гид-профессионал весь день',
                'Все локации по программе',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                  <Icon name="Check" size={16} className="text-[#E6A817] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
              {[
                'Канатные дороги (доп. плата)',
                'Обед (самостоятельно)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                  <Icon name="Minus" size={16} className="text-white/30 flex-shrink-0" />
                  <span className="text-white/40 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
