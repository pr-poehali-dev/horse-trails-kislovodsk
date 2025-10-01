import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    people: '1',
    address: ''
  });

  const cities = [
    { name: 'Кисловодск', price: 6000 },
    { name: 'Ессентуки', price: 5800 },
    { name: 'Пятигорск', price: 5700 },
    { name: 'Минеральные Воды', price: 6000 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения бронирования.",
    });
    setFormData({ name: '', phone: '', email: '', city: '', date: '', people: '1', address: '' });
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedCity = cities.find(c => c.name === formData.city);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img/052c7a08-1d85-4565-a1d6-8c26b4ba4542.jpg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Экскурсия в Чечню на один день: от великих мечетей до небоскребов
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Комфортный тур в мини-группе. Забираем от вашего дома в городах КМВ. Всё самое главное за один день.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Icon name="Car" size={24} className="mx-auto mb-2" />
              <p className="font-semibold">Трансфер от дома</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Icon name="Users" size={24} className="mx-auto mb-2" />
              <p className="font-semibold">До 8 человек</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Icon name="Building2" size={24} className="mx-auto mb-2" />
              <p className="font-semibold">Вся Чечня за день</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Icon name="Star" size={24} className="mx-auto mb-2" />
              <p className="font-semibold">Комфорт и безопасность</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть программу
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-6 text-lg"
              onClick={scrollToBooking}
            >
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Маршрут путешествия
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            От завтрака до самой большой мечети Европы
          </p>

          <div className="space-y-6">
            {[
              { time: '06:00 - 08:00', title: 'Сбор группы и трансфер', desc: 'Вас забирают от указанного адреса. Комфортная дорога по живописным предгорьям Кавказа.', icon: 'MapPin' },
              { time: '08:00 - 09:00', title: 'Завтрак', desc: 'Остановка в дорожном кафе для полноценного завтрака (оплачивается отдельно).', icon: 'Coffee' },
              { time: '09:30 - 10:30', title: 'Магас: Башня Согласия', desc: 'Знакомство с новой столицей Ингушетии и фото на фоне уникальной башни в стиле хай-тек.', icon: 'Building' },
              { time: '11:00 - 13:30', title: 'Грозный: "Сердце Чечни"', desc: 'Посещение одной из самых величественных мечетей мира. Осмотр православного храма Михаила Архангела.', icon: 'Church' },
              { time: '13:30 - 14:30', title: 'Обед (по желанию)', desc: 'Возможность попробовать блюда национальной кухни в кафе Грозного.', icon: 'UtensilsCrossed' },
              { time: '14:30 - 15:30', title: 'Грозный Сити', desc: 'Подъем на смотровую площадку (доп. расход 200 руб.). Панорамные виды на город и мечеть.', icon: 'Building2' },
              { time: '16:00 - 16:45', title: 'Аргун: "Сердце Матери"', desc: 'Посещение ультрасовременной мечети, поражающей своим футуристическим дизайном.', icon: 'Sparkles' },
              { time: '17:30 - 18:30', title: 'Шали: "Гордость Мусульман"', desc: 'Финальный аккорд — самая большая мечеть в Европе, впечатляющая своими масштабами.', icon: 'Crown' },
              { time: '18:30', title: 'Возвращение домой', desc: 'Выезд в сторону КМВ. Прибытие к вашим адресам поздно вечером.', icon: 'Home' }
            ].map((stop, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors border-l-4 border-primary">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={stop.icon as any} size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-semibold text-secondary mb-1">{stop.time}</div>
                  <h3 className="text-xl font-bold mb-2">{stop.title}</h3>
                  <p className="text-muted-foreground">{stop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Стоимость из вашего города
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {cities.map((city) => (
              <Card key={city.name} className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {city.name}
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">{city.price.toLocaleString()} ₽</p>
                      <p className="text-sm text-muted-foreground">с человека</p>
                    </div>
                    <Button onClick={scrollToBooking}>Забронировать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">Что включено в стоимость</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                'Трансфер от/до вашего адреса в указанных городах',
                'Комфортный проезд на внедорожнике/минивэне',
                'Сопровождение профессионального гида',
                'Все экскурсии по программе'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-6 bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl">Оплачивается отдельно</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                'Питание (завтрак, обед) — от 500 руб.',
                'Смотровая площадка «Грозный Сити» — 200 руб.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Icon name="Info" size={20} className="text-amber-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Один день — миллион впечатлений
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                style={{ backgroundImage: 'url(/img/e30e1aa6-cd2e-4d1d-bce7-e521a88e753e.jpg)' }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-semibold">Комфортный транспорт</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                style={{ backgroundImage: 'url(/img/052c7a08-1d85-4565-a1d6-8c26b4ba4542.jpg)' }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-semibold">Мечеть "Сердце Чечни"</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                style={{ backgroundImage: 'url(/img/eb0ca15d-36eb-487a-ae0e-6432a47ccfd6.jpg)' }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-semibold">Грозный Сити</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Условия тура
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Users" size={32} className="text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Размер группы</h3>
                <p className="text-muted-foreground">До 8 человек. Это гарантирует комфорт и индивидуальный подход.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Icon name="Car" size={32} className="text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Транспорт</h3>
                <p className="text-muted-foreground">Вместительный внедорожник или минивэн с кондиционером.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Icon name="Backpack" size={32} className="text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Что взять</h3>
                <p className="text-muted-foreground">Паспорт (обязательно!), удобную обувь, воду, деньги на личные расходы.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Icon name="Clock" size={32} className="text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Продолжительность</h3>
                <p className="text-muted-foreground">Весь тур занимает около 15-16 часов.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Icon name="AlertCircle" size={24} className="text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Важно для женщин</h3>
                  <p className="text-muted-foreground">Для посещения мечетей желательно иметь платок (можно взять на месте).</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Забронируйте ваше место
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Осталось всего несколько мест в мини-группе!
          </p>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя и Фамилия</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (900) 123-45-67"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Город отправления</Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.name} value={city.name}>
                            {city.name} — {city.price.toLocaleString()} ₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="people">Количество человек</Label>
                    <Select value={formData.people} onValueChange={(value) => setFormData({...formData, people: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'человек' : 'человека'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="date">Предпочтительная дата</Label>
                  <Input 
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">Адрес для трансфера</Label>
                  <Textarea 
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Укажите точный адрес, откуда вас забрать (название отеля или адрес квартиры)"
                    rows={3}
                    required
                  />
                </div>

                {selectedCity && (
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Стоимость тура:</span>
                      <span className="text-2xl font-bold text-primary">
                        {(selectedCity.price * parseInt(formData.people)).toLocaleString()} ₽
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Предоплата 50% для бронирования, остальное — гиду в день экскурсии
                    </p>
                  </div>
                )}

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-foreground" size="lg">
                  Забронировать со скидкой 50%
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Точно меня заберут от моего адреса?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Мы осуществляем трансфер по адресу вашего проживания (отель, квартира) в пределах Кисловодска, 
                Ессентуков, Пятигорска и Минеральных Вод.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Нужен ли паспорт?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, оригинал паспорта обязателен для пересечения границы субъектов РФ. Без паспорта в тур не допустят.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Сколько всего мы проедем за день?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Общий километраж около 500-600 км. Дорога комфортная, с остановками для отдыха. 
                Путешествие проходит на современном транспорте с кондиционером.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли с детьми?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, дети от 7 лет допускаются в сопровождении взрослых. Для детей может быть предусмотрена скидка — 
                уточняйте при бронировании.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-lg font-semibold">
                Как происходит оплата?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Предоплата 50% онлайн для бронирования места в группе, остальное — наличными гиду в день экскурсии. 
                После заполнения формы мы вышлем вам реквизиты для оплаты.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готовы к незабываемому путешествию?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Свяжитесь с нами для уточнения деталей или бронирования тура
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <Icon name="Phone" size={32} />
              <div>
                <p className="font-semibold mb-1">Телефон</p>
                <a href="tel:+79281234567" className="opacity-90 hover:opacity-100">+7 (928) 123-45-67</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Icon name="MessageCircle" size={32} />
              <div>
                <p className="font-semibold mb-1">WhatsApp / Telegram</p>
                <a href="https://wa.me/79281234567" className="opacity-90 hover:opacity-100">+7 (928) 123-45-67</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Icon name="Mail" size={32} />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:info@tour-kmv.ru" className="opacity-90 hover:opacity-100">info@tour-kmv.ru</a>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="outline"
            className="bg-white text-primary hover:bg-white/90"
            onClick={scrollToBooking}
          >
            Забронировать тур
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Тур в Чечню из КМВ</p>
            <p className="text-sm opacity-75">© 2025. Все права защищены</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Публичная оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
