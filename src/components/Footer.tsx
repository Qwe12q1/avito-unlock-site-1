import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center">
              <span className="emoji-bounce mr-2">🔓</span> АвитоАнблок
            </h3>
            <p className="text-muted-foreground">
              Профессиональная помощь с разблокировкой аккаунтов Авито. Работаем с 2018 года.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <span className="emoji-bounce">📱</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <span className="emoji-bounce">✉️</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <span className="emoji-bounce">💬</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Разблокировка аккаунтов</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Защита от блокировок</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Восстановление рейтинга</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Консультации</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <span className="emoji-bounce mr-2">📞</span> +7 (XXX) XXX-XX-XX
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="emoji-bounce mr-2">✉️</span> info@avitounlock.ru
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="emoji-bounce mr-2">🕘</span> Пн-Пт: 9:00 - 20:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>© 2023 АвитоАнблок. Все права защищены.</p>
          <p className="mt-1">
            Сервис не является официальным представителем Авито и работает независимо.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
