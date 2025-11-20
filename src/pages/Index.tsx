import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Home',
      title: 'Укладка плитки в ванной',
      description: 'Профессиональная укладка керамической и керамогранитной плитки с идеальными швами'
    },
    {
      icon: 'ChefHat',
      title: 'Плитка на кухне',
      description: 'Стильный фартук и напольное покрытие, устойчивое к влаге и температурам'
    },
    {
      icon: 'Building2',
      title: 'Плитка в коридоре',
      description: 'Износостойкое покрытие для зон с высокой проходимостью'
    },
    {
      icon: 'Waves',
      title: 'Укладка мозаики',
      description: 'Художественная укладка мозаичной плитки любой сложности'
    },
    {
      icon: 'Grid3x3',
      title: 'Облицовка фасадов',
      description: 'Наружная отделка зданий керамогранитом и клинкерной плиткой'
    },
    {
      icon: 'Ruler',
      title: 'Выравнивание поверхностей',
      description: 'Подготовка основания под укладку плитки с гарантией качества'
    }
  ];

  const works = [
    {
      image: 'https://cdn.poehali.dev/projects/4e359f39-217b-4eb6-9005-b5112194cfb8/files/920d6eb1-beb6-4e16-a19d-ac23a3780a79.jpg',
      title: 'Современная ванная',
      area: '12 м²'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4e359f39-217b-4eb6-9005-b5112194cfb8/files/c25cc8a4-4a3a-4f6e-a4fe-7ac3b6fb2013.jpg',
      title: 'Кухонный фартук',
      area: '8 м²'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4e359f39-217b-4eb6-9005-b5112194cfb8/files/2d27dc27-aa2f-4f3e-b0f2-82ba61a9c1de.jpg',
      title: 'Напольное покрытие',
      area: '25 м²'
    }
  ];

  const advantages = [
    { icon: 'Award', text: 'Опыт более 10 лет' },
    { icon: 'Shield', text: 'Гарантия 3 года' },
    { icon: 'Clock', text: 'Точные сроки' },
    { icon: 'Sparkles', text: 'Качественные материалы' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0EA5E9] via-[#8B5CF6] to-[#D946EF] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <nav className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Grid3x3" size={32} className="text-white" />
              <span className="text-2xl font-bold">ПлиткаПро</span>
            </div>
            <Button variant="secondary" size="lg" className="hidden md:flex items-center gap-2">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </Button>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Профессиональная укладка плитки
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Превратим ваше помещение в произведение искусства. Качество, скорость, гарантия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-[#0EA5E9] transition-all">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {advantages.map((adv, index) => (
              <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center mb-4">
                  <Icon name={adv.icon} size={28} className="text-white" />
                </div>
                <p className="font-semibold text-gray-800">{adv.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к укладке плитки любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#0EA5E9] animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600">
              Портфолио выполненных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <p className="flex items-center gap-2">
                    <Icon name="Ruler" size={16} />
                    Площадь: {work.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Получите бесплатную консультацию
              </h2>
              <p className="text-xl text-white/90">
                Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>

            <Card className="backdrop-blur-lg bg-white/95">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 text-lg"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 text-lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите ваш проект (необязательно)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 text-lg"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:opacity-90 transition-opacity">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Grid3x3" size={28} />
                <span className="text-xl font-bold">ПлиткаПро</span>
              </div>
              <p className="text-gray-400">
                Профессиональная укладка плитки в Москве и Московской области
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@plitkpro.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">График работы</h4>
              <p className="text-gray-400">
                Пн-Пт: 9:00 - 20:00<br />
                Сб-Вс: 10:00 - 18:00
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПлиткаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
