import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';
import { Link } from "react-router-dom";
import { useState } from "react";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const bots = [
    {
      id: 1,
      name: "Магазин-бот Pro",
      price: "5,990₽",
      category: "ecommerce",
      description: "Полнофункциональный бот для интернет-магазина с корзиной, оплатой и уведомлениями",
      features: ["Каталог товаров", "Корзина", "Оплата", "Заказы"],
      icon: "Store",
      popular: true
    },
    {
      id: 2,
      name: "CRM-помощник",
      price: "12,990₽",
      category: "business",
      description: "Управление клиентами, задачами и продажами прямо в Телеграм",
      features: ["База клиентов", "Воронка продаж", "Задачи", "Аналитика"],
      icon: "Users",
      popular: true
    },
    {
      id: 3,
      name: "Уведомления+",
      price: "2,990₽",
      category: "utility",
      description: "Система умных уведомлений с расписанием и персонализацией",
      features: ["Расписание", "Группы", "Персонализация", "API"],
      icon: "Bell",
      popular: false
    },
    {
      id: 4,
      name: "Анкеты & Опросы",
      price: "7,990₽",
      category: "survey",
      description: "Создание интерактивных форм и опросов с аналитикой ответов",
      features: ["Конструктор форм", "Аналитика", "Экспорт", "Логика ветвления"],
      icon: "FileText",
      popular: false
    },
    {
      id: 5,
      name: "Бронирование",
      price: "9,990₽",
      category: "business",
      description: "Система бронирования услуг с календарем и напоминаниями",
      features: ["Календарь", "Напоминания", "Оплата", "Отмены"],
      icon: "Calendar",
      popular: false
    },
    {
      id: 6,
      name: "Техподдержка AI",
      price: "15,990₽",
      category: "ai",
      description: "ИИ-помощник для автоматических ответов на вопросы клиентов",
      features: ["ИИ ответы", "База знаний", "Эскалация", "Обучение"],
      icon: "MessageCircle",
      popular: true
    }
  ];

  const categories = [
    { id: "all", name: "Все категории", icon: "Grid3X3" },
    { id: "ecommerce", name: "E-commerce", icon: "Store" },
    { id: "business", name: "Бизнес", icon: "Briefcase" },
    { id: "utility", name: "Утилиты", icon: "Settings" },
    { id: "survey", name: "Опросы", icon: "FileText" },
    { id: "ai", name: "ИИ", icon: "Brain" }
  ];

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bot.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || bot.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          <Link to="/catalog" className="text-manga-pink font-semibold">Каталог</Link>
          <Link to="/about" className="text-tech-blue hover:text-manga-pink transition-colors">О нас</Link>
        </nav>
        <Button className="bg-manga-pink hover:bg-manga-pink/90">
          <Icon name="User" size={18} className="mr-2" />
          Войти
        </Button>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img 
              src="/img/26975f67-0534-421f-9b97-3692db539b61.jpg" 
              alt="Коллекция ботов в стиле манги" 
              className="w-48 h-48 mx-auto rounded-lg border-4 border-manga-pink shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-tech-blue mb-4">
            Каталог <span className="text-manga-pink">Ботов</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите идеального помощника для вашего бизнеса из нашей коллекции премиальных телеграм ботов
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Поиск ботов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-manga-pink hover:bg-manga-pink/90"
                    : "border-manga-pink/30 text-tech-blue hover:bg-manga-pink hover:text-white"
                }`}
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Найдено {filteredBots.length} {filteredBots.length === 1 ? 'бот' : 'ботов'}
          </p>
        </div>

        {/* Bots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredBots.map((bot) => (
            <Card key={bot.id} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-manga-pink/30">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-manga-pink/10 rounded-full flex items-center justify-center">
                      <Icon name={bot.icon as any} className="text-manga-pink" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-tech-blue flex items-center gap-2">
                        {bot.name}
                        {bot.popular && (
                          <Badge className="bg-manga-yellow text-tech-blue">
                            ⭐ Популярный
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">
                  {bot.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-tech-blue mb-2">Возможности:</h4>
                  <div className="flex flex-wrap gap-1">
                    {bot.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-manga-pink">{bot.price}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-1" />
                      Демо
                    </Button>
                    <Button size="sm" className="bg-manga-pink hover:bg-manga-pink/90">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredBots.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-tech-blue mb-2">Ничего не найдено</h3>
            <p className="text-gray-600">Попробуйте изменить критерии поиска</p>
          </div>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-manga-pink to-manga-yellow rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Не нашли подходящего бота?</h3>
          <p className="text-lg mb-6 opacity-90">
            Мы создадим индивидуального бота специально для ваших задач!
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Заказать разработку
          </Button>
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

export default Catalog;