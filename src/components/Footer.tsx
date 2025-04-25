import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-bold flex items-center justify-center">
              <span className="emoji-bounce mr-2">🔓</span> AvitoUnlock
            </h3>
            <p className="text-muted-foreground">
              Профессиональная помощь с разблокировкой аккаунтов Авито. Работаем с 2024 года.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://t.me/avitounlock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 hover:bg-accent hover:text-accent-foreground"
              >
                <img 
                  src="https://cdn.poehali.dev/files/c9f211da-90f7-4667-b9f2-bf1550e71200.png" 
                  alt="Telegram" 
                  width="32" 
                  height="32" 
                  className="object-contain"
                />
              </a>
            </div>
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