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
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать менеджеру описание бота
            </Button>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-tech-blue text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Zap" className="text-manga-pink" size={24} />
              <h4 className="text-xl font-bold">TeleBot Store</h4>
            </div>
            <p className="text-gray-300 mb-8">Ваш надёжный поставщик телеграм ботов в стиле манги!</p>
            <div className="border-t border-gray-600 pt-8">
              <p className="text-gray-300">&copy; 2024 TeleBot Store. Все права защищены. Сделано с ❤️ в стиле манги</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;