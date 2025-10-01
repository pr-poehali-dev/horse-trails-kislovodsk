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
    date: '',
    route: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', date: '', route: '', message: '' });
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img/d625549e-e4b0-4b7f-9f02-083a40638bff.jpg)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Откройте Кисловодск с новой высоты — с высоты седла!
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Конные прогулки для начинающих и опытных всадников по живописным окрестностям Кавказских Минеральных Вод
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              onClick={scrollToBooking}
            >
              Забронировать прогулку
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              onClick={() => document.getElementById('routes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать маршрут
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Незабываемые эмоции наедине с природой
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Наш конный клуб расположен в самом сердце предгорья Кавказа. Мы предлагаем вам не просто прокатиться на лошади, 
              а совершить настоящее путешествие по самым красивым тропам Кисловодска. Наши опытные инструкторы и спокойные, 
              обученные лошади гарантируют вашу безопасность и комфорт.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-scale-in">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Дружелюбные лошади</h3>
              <p className="text-muted-foreground">Подбираем лошадь под ваш уровень подготовки</p>
            </div>

            <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Опытные инструкторы</h3>
              <p className="text-muted-foreground">Каждую группу сопровождает профессионал</p>
            </div>

            <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mountain" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Уникальные маршруты</h3>
              <p className="text-muted-foreground">Тропы туда, куда не проехать на машине</p>
            </div>

            <div className="text-center p-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Вся экипировка</h3>
              <p className="text-muted-foreground">Предоставляем необходимое снаряжение</p>
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Выберите свое приключение
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url(/img/41522576-c944-43a1-ace0-5cd8400c0f84.jpg)' }}
              />
              <CardHeader>
                <CardTitle className="text-3xl flex items-center justify-between">
                  Лесная сказка
                  <span className="text-lg font-normal text-muted-foreground">2 часа</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Идеальный маршрут для первого знакомства с верховой ездой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Неспешная прогулка по хвойному лесу, наполненному ароматом сосен. 
                  Вы почувствуете умиротворение и насладитесь чистым горным воздухом.
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>Сосновый бор, поляны, виды на предгорья</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">2 500 ₽</span>
                  <Button onClick={scrollToBooking}>Забронировать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url(/img/d8f4752c-6a7b-4209-b0cf-bcf3b943419e.jpg)' }}
              />
              <CardHeader>
                <CardTitle className="text-3xl flex items-center justify-between">
                  Горные панорамы
                  <span className="text-lg font-normal text-muted-foreground">3 часа</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Для тех, кто хочет большего!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Этот маршрут приведет вас на живописные возвышенности, откуда открываются 
                  захватывающие виды на город-курорт Кисловодск и Главный Кавказский хребет.
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>Панорамы Кисловодска, горные долины, альпийские луга</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">3 500 ₽</span>
                  <Button onClick={scrollToBooking}>Забронировать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Как проходит прогулка?
          </h2>

          <div className="space-y-6">
            {[
              { icon: 'Handshake', title: 'Встреча и инструктаж', desc: 'Знакомство с инструктором и лошадью. Краткий инструктаж по основам управления.' },
              { icon: 'GraduationCap', title: 'Вводная часть', desc: 'Небольшая прогулка по манежу для привыкания к лошади.' },
              { icon: 'TreePine', title: 'Путешествие', desc: 'Выход на выбранный маршрут в сопровождении инструктора.' },
              { icon: 'Camera', title: 'Фотосессия', desc: 'Остановки на самых красивых точках для памятных фотографий.' },
              { icon: 'Home', title: 'Возвращение', desc: 'Возвращение на конюшню, где вы сможете угостить лошадь яблоком или морковкой.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 rounded-lg hover:bg-accent/20 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <Icon name={step.icon as any} size={24} className="text-primary" />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Забронировать прогулку
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами для подтверждения бронирования
          </p>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
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

                <div>
                  <Label htmlFor="date">Желаемая дата</Label>
                  <Input 
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="route">Выберите маршрут</Label>
                  <Select value={formData.route} onValueChange={(value) => setFormData({...formData, route: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите маршрут" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="forest">Лесная сказка (2 часа) — 2 500 ₽</SelectItem>
                      <SelectItem value="mountain">Горные панорамы (3 часа) — 3 500 ₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Опыт верховой езды, количество человек..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Нужен ли опыт верховой езды?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, большинство наших гостей — новички. Мы подбираем спокойных лошадей и даем подробный инструктаж перед прогулкой.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Что надеть на прогулку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Удобная, закрытая обувь без каблука (лучше кроссовки или ботинки). Одежда по погоде, которая не стесняет движений. 
                Рекомендуем джинсы или спортивные брюки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Есть ли ограничения по возрасту и весу?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Дети с 12 лет в сопровождении взрослых. Ограничение по весу — до 100 кг. 
                В отдельных случаях возможны исключения, уточняйте при бронировании.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Как забронировать прогулку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Просто заполните форму бронирования на нашем сайте или позвоните нам по телефону +7 (928) 123-45-67. 
                Мы свяжемся с вами для подтверждения времени и даты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли приехать с детьми?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы принимаем детей от 12 лет. Для них предусмотрены специальные спокойные лошади и особое внимание инструкторов. 
                Дети должны быть в сопровождении взрослых.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готовы к приключениям? Ждем вас!
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Свяжитесь с нами, чтобы задать вопросы или забронировать прогулку на удобную дату
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
              <Icon name="MapPin" size={32} />
              <div>
                <p className="font-semibold mb-1">Адрес</p>
                <p className="opacity-90">Кисловодск, пос. Зеленый Мыс</p>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="outline"
            className="bg-white text-primary hover:bg-white/90"
            onClick={scrollToBooking}
          >
            Забронировать прогулку
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Конные тропы Кисловодска</p>
            <p className="text-sm opacity-75">© 2025. Все права защищены</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Главная</a>
            <a href="#routes" className="hover:text-accent transition-colors">Маршруты</a>
            <a href="#booking" className="hover:text-accent transition-colors">Бронирование</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
