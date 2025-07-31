import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bots = [
    {
      id: 1,
      name: "Умный Помощник",
      description: "ИИ-бот для автоматизации бизнес-процессов",
      price: "5 999₽",
      category: "Бизнес",
      image: "/img/86bc8963-e528-495d-9d67-2925da3f9bed.jpg",
      features: ["24/7 поддержка", "Интеграция с CRM", "Аналитика"]
    },
    {
      id: 2,
      name: "E-commerce Бот",
      description: "Готовое решение для интернет-магазина",
      price: "8 999₽",
      category: "Продажи",
      image: "/img/6a12b1d6-edbb-42f4-b295-3cd8213556ed.jpg",
      features: ["Каталог товаров", "Корзина", "Оплата"]
    },
    {
      id: 3,
      name: "Чат-Бот Консультант",
      description: "Отвечает на вопросы клиентов автоматически",
      price: "3 999₽",
      category: "Поддержка",
      image: "/img/4eb12d51-61be-4b30-a1be-c0db440cd8e4.jpg",
      features: ["База знаний", "Быстрые ответы", "Эскалация"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-manga-pink/10 via-white to-tech-blue/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Bot" size={32} className="text-manga-pink" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-manga-pink to-tech-blue bg-clip-text text-transparent">
              BotShop
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Главная</Button>
            <Button variant="ghost">Каталог</Button>
            <Button variant="ghost">О нас</Button>
            <Button className="bg-manga-pink hover:bg-manga-pink/90">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-manga-pink via-manga-yellow to-tech-blue bg-clip-text text-transparent animate-fade-in">
            Магазин Telegram Ботов
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Готовые решения для вашего бизнеса в стиле манга! 🤖✨
          </p>
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-manga-pink to-manga-yellow text-white hover:scale-105 transition-transform">
              <Icon name="Zap" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Bot Catalog */}
      <section className="container mx-auto px-4 py-16" id="catalog">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-tech-blue">
            🎌 Каталог Ботов
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите готового бота для своих задач или закажите индивидуальную разработку
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bots.map((bot) => (
            <Card key={bot.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-manga-pink/50">
              <CardHeader className="relative overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={bot.image} 
                    alt={bot.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-manga-yellow text-tech-blue">
                    {bot.category}
                  </Badge>
                  <span className="text-2xl font-bold text-manga-pink">
                    {bot.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2 text-tech-blue">
                  {bot.name}
                </CardTitle>
                <CardDescription className="mb-4">
                  {bot.description}
                </CardDescription>
                <div className="space-y-2">
                  {bot.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-manga-pink" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex space-x-2">
                <Button className="flex-1 bg-manga-pink hover:bg-manga-pink/90">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить
                </Button>
                <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                  <Icon name="Eye" size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-r from-tech-blue to-manga-pink/20 py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-white">
              🚀 О нас
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Мы создаем уникальных Telegram ботов в стиле манга! Наша команда объединяет 
              передовые технологии с яркой японской эстетикой.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-manga-yellow rounded-full flex items-center justify-center">
                  <Icon name="Code" size={24} className="text-tech-blue" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Разработка</h4>
                <p className="text-white/80">Современные технологии и чистый код</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-manga-pink rounded-full flex items-center justify-center">
                  <Icon name="Palette" size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Дизайн</h4>
                <p className="text-white/80">Уникальный стиль манга в каждом боте</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-manga-yellow rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={24} className="text-tech-blue" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Поддержка</h4>
                <p className="text-white/80">24/7 помощь и консультации</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-tech-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Bot" size={28} className="text-manga-pink" />
                <span className="text-xl font-bold">BotShop</span>
              </div>
              <p className="text-white/80">
                Лучшие Telegram боты в стиле манга
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Каталог</h5>
              <ul className="space-y-2 text-white/80">
                <li>Бизнес боты</li>
                <li>E-commerce</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 text-white/80">
                <li>Готовые решения</li>
                <li>Кастомная разработка</li>
                <li>Интеграции</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Send" size={16} />
                  <span>@botshop_support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@botshop.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 BotShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;