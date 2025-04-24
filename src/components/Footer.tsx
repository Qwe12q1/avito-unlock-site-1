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
              <a 
                href="https://t.me/avitounlock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 hover:bg-accent hover:text-accent-foreground"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#29B6F6"/>
                  <path d="M5.43187 11.8733L13.6419 8.76826C17.7543 7.14888 18.6082 6.83779 19.1649 6.825C19.2822 6.8225 19.5334 6.8526 19.6965 6.98231C19.8342 7.0926 19.8716 7.24357 19.8897 7.34748C19.9077 7.45139 19.9302 7.68549 19.9123 7.86942C19.7112 9.95383 18.8355 15.3786 18.3967 17.861C18.216 18.8837 17.8581 19.2373 17.5091 19.2765C16.7383 19.3618 16.1609 18.7908 15.4219 18.3149L12.4755 16.2294C10.6424 17.3363 10.2502 17.6445 9.8403 17.9161C9.75189 17.9706 9.6608 18.0242 9.5434 18.0814C8.81908 18.4336 8.2453 18.2876 7.94351 17.9021C7.7101 17.5981 7.6871 17.184 7.9145 16.8248C7.93445 16.7912 7.95378 16.7607 7.9775 16.7367L9.4248 14.8845L12.4223 12.1511L12.5296 12.0555C12.7137 11.8954 12.7996 11.8223 12.7864 11.7414C12.7732 11.6605 12.6576 11.6202 12.5383 11.6203C12.477 11.6203 12.3975 11.6498 12.2381 11.7088L7.9291 14.1111C6.9634 14.6441 6.05005 14.9055 5.16062 14.6512C4.60928 14.4946 4.26855 14.2284 4.03616 13.8483C3.7942 13.451 3.72717 13.0891 3.89768 12.5971C4.0405 12.1884 4.46307 11.9859 5.43187 11.8733Z" fill="white"/>
                </svg>
              </a>
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
