import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center">
              <span className="emoji-bounce mr-2">🔓</span> AvitoUnlock
            </h3>
            <p className="text-muted-foreground">
              Профессиональная помощь с разблокировкой аккаунтов Авито. Работаем с 2024 года.
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
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <span className="emoji-bounce mr-2">📞</span> +7 (982) 971-01-74
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="emoji-bounce mr-2">✉️</span> avitounlock@gmail.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="emoji-bounce mr-2">🕘</span> Пн-Вс: 10:00 - 00:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>© 2025 AvitoUnlock. Все права защищены.</p>
          <p className="mt-1">
            Сервис не является официальным представителем Авито и работает независимо.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
