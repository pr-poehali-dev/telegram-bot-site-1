import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-manga-pink/10 via-white to-manga-yellow/10">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Zap" className="text-manga-pink" size={32} />
          <h1 className="text-2xl font-bold text-tech-blue">TeleBot Store</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-tech-blue hover:text-manga-pink transition-colors">Главная</Link>
          <Link to="/catalog" className="text-tech-blue hover:text-manga-pink transition-colors">Каталог</Link>
          <Link to="/about" className="text-tech-blue hover:text-manga-pink transition-colors">О нас</Link>
        </nav>
        <Button className="bg-manga-pink hover:bg-manga-pink/90">
          <Icon name="User" size={18} className="mr-2" />
          Войти
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/img/977fa33f-f631-4df8-830d-07ccf79221b4.jpg" 
              alt="Телеграм бот в стиле манги" 
              className="w-64 h-64 mx-auto rounded-full border-4 border-manga-pink shadow-lg"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-tech-blue mb-6">
            Крутые <span className="text-manga-pink">Телеграм Боты</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Откройте мир автоматизации с нашими премиальными ботами! 
            От простых помощников до сложных бизнес-решений — все в стиле манги! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-manga-pink hover:bg-manga-pink/90 text-white px-8 py-4 text-lg">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Посмотреть боты
            </Button>
            <Button variant="outline" size="lg" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-4 text-lg">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-tech-blue mb-12">Почему выбирают нас?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-manga-pink/20 hover:border-manga-pink transition-colors">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-manga-pink/10 rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-manga-pink" size={32} />
              </div>
              <CardTitle className="text-tech-blue">Быстрый старт</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Получите готового бота за считанные минуты. Простая установка и настройка.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-manga-yellow/20 hover:border-manga-yellow transition-colors">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-manga-yellow/10 rounded-full flex items-center justify-center">
                <Icon name="Settings" className="text-manga-yellow" size={32} />
              </div>
              <CardTitle className="text-tech-blue">Полная настройка</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Адаптируйте бота под свои нужды. Гибкие настройки и персонализация.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-2 border-tech-blue/20 hover:border-tech-blue transition-colors">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center">
                <Icon name="Shield" className="text-tech-blue" size={32} />
              </div>
              <CardTitle className="text-tech-blue">Надёжность</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                24/7 поддержка и гарантия работы. Ваш бот всегда онлайн.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Bots Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-tech-blue mb-12">Популярные боты</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Магазин-бот", price: "5,990₽", icon: "Store" },
              { name: "CRM-помощник", price: "12,990₽", icon: "Users" },
              { name: "Уведомления", price: "2,990₽", icon: "Bell" },
              { name: "Анкеты", price: "7,990₽", icon: "FileText" }
            ].map((bot, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 w-12 h-12 bg-manga-pink/10 rounded-full flex items-center justify-center">
                    <Icon name={bot.icon as any} className="text-manga-pink" size={24} />
                  </div>
                  <CardTitle className="text-lg text-tech-blue">{bot.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-manga-pink mb-4">{bot.price}</p>
                  <Button size="sm" className="w-full bg-manga-pink hover:bg-manga-pink/90">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-manga-pink text-manga-pink hover:bg-manga-pink hover:text-white">
              Смотреть все боты
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-blue text-white py-12">
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

export default Index;