import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Аки Танака",
      role: "CEO & Основатель",
      description: "10+ лет в разработке ботов. Поклонница манги и технологий.",
      icon: "Crown",
      skills: ["Стратегия", "Продукт", "Манга"]
    },
    {
      name: "Рей Сато",
      role: "Lead Developer",
      description: "Фулл-стек разработчик с экспертизой в Telegram Bot API.",
      icon: "Code",
      skills: ["Node.js", "Python", "API"]
    },
    {
      name: "Мику Хаяси",
      role: "UI/UX Designer",
      description: "Создает kawaii интерфейсы, вдохновленные аниме и мангой.",
      icon: "Palette",
      skills: ["Design", "UX", "Anime"]
    },
    {
      name: "Юки Ямада",
      role: "DevOps Engineer",
      description: "Обеспечивает надежность и производительность всех ботов 24/7.",
      icon: "Server",
      skills: ["AWS", "Docker", "CI/CD"]
    }
  ];

  const stats = [
    { label: "Счастливых клиентов", value: "500+", icon: "Heart" },
    { label: "Созданных ботов", value: "1,200+", icon: "Bot" },
    { label: "Стран", value: "25+", icon: "Globe" },
    { label: "Лет опыта", value: "5+", icon: "Calendar" }
  ];

  const values = [
    {
      title: "Качество в стиле манги",
      description: "Каждый бот создается с вниманием к деталям и kawaii эстетике",
      icon: "Star"
    },
    {
      title: "Быстрота и надежность",
      description: "Как в лучших аниме — быстрые решения и стабильная работа",
      icon: "Zap"
    },
    {
      title: "Персонализация",
      description: "Каждый бот уникален, как персонаж любимой манги",
      icon: "Sparkles"
    },
    {
      title: "24/7 поддержка",
      description: "Наша команда всегда готова помочь, как верные друзья из аниме",
      icon: "Shield"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-manga-pink/10 via-white to-manga-yellow/10">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Icon name="Zap" className="text-manga-pink" size={32} />
          <h1 className="text-2xl font-bold text-tech-blue">TeleBot Store</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-tech-blue hover:text-manga-pink transition-colors">Главная</Link>
          <Link to="/catalog" className="text-tech-blue hover:text-manga-pink transition-colors">Каталог</Link>
          <Link to="/about" className="text-manga-pink font-semibold">О нас</Link>
        </nav>
        <Button className="bg-manga-pink hover:bg-manga-pink/90">
          <Icon name="User" size={18} className="mr-2" />
          Войти
        </Button>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/img/15f2b21a-bb52-4acb-87d5-ddc137e7ca7b.jpg" 
              alt="Команда разработчиков в стиле манги" 
              className="w-64 h-64 mx-auto rounded-2xl border-4 border-manga-pink shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-tech-blue mb-6">
            О <span className="text-manga-pink">TeleBot Store</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы — команда passionate разработчиков и дизайнеров, объединенных любовью к манге, аниме и 
            инновационным технологиям. Наша миссия — сделать автоматизацию бизнеса простой, 
            красивой и вдохновляющей! ✨
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-manga-pink/20 hover:border-manga-pink transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-manga-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} className="text-manga-pink" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-tech-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-tech-blue mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Всё началось в 2019 году, когда наш основатель Аки смотрела аниме про программистов 
                  и подумала: "А почему бы не объединить kawaii эстетику с серьезными бизнес-решениями?"
                </p>
                <p>
                  Мы заметили, что большинство Telegram ботов выглядят скучно и безлико. 
                  Нам хотелось создать что-то особенное — ботов, которые не только эффективно работают, 
                  но и радуют глаз своим дизайном в стиле манги.
                </p>
                <p>
                  Сегодня TeleBot Store — это не просто магазин ботов, это сообщество людей, 
                  которые ценят качество, красоту и инновации в мире автоматизации.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-manga-pink/20 to-manga-yellow/20 rounded-2xl p-8">
                <div className="text-center">
                  <Icon name="TrendingUp" className="text-manga-pink mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-tech-blue mb-4">5 лет роста</h3>
                  <p className="text-gray-600">
                    От маленького стартапа до ведущей платформы телеграм ботов 
                    в kawaii стиле
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-tech-blue mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-2 border-manga-yellow/20 hover:border-manga-yellow transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-manga-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} className="text-manga-yellow" size={32} />
                  </div>
                  <CardTitle className="text-tech-blue">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-tech-blue mb-12">Наша kawaii команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-manga-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} className="text-manga-pink" size={32} />
                  </div>
                  <CardTitle className="text-tech-blue">{member.name}</CardTitle>
                  <CardDescription className="text-manga-pink font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-manga-pink to-tech-blue rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h3>
          <p className="text-lg mb-6 opacity-90">
            Свяжитесь с нами, и мы создадим идеального бота для вашего бизнеса!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать нам
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-tech-blue">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-tech-blue text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-manga-pink" size={24} />
                <h4 className="text-xl font-bold">TeleBot Store</h4>
              </div>
              <p className="text-gray-300">Ваш надёжный поставщик телеграм ботов в стиле манги!</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продукты</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/catalog" className="hover:text-manga-pink transition-colors">Каталог ботов</Link></li>
                <li><a href="#" className="hover:text-manga-pink transition-colors">Индивидуальная разработка</a></li>
                <li><a href="#" className="hover:text-manga-pink transition-colors">Техподдержка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-manga-pink transition-colors">О нас</Link></li>
                <li><a href="#" className="hover:text-manga-pink transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-manga-pink transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Связь</h5>
              <div className="flex space-x-4">
                <Icon name="Send" className="text-manga-pink hover:text-manga-yellow cursor-pointer" size={24} />
                <Icon name="Mail" className="text-manga-pink hover:text-manga-yellow cursor-pointer" size={24} />
                <Icon name="Phone" className="text-manga-pink hover:text-manga-yellow cursor-pointer" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 TeleBot Store. Все права защищены. Сделано с ❤️ в стиле манги</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;