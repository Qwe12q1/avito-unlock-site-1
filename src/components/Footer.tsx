import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="/" className="text-2xl font-bold mb-4 flex items-center">
              <span className="emoji-bounce mr-2 text-primary">🔓</span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-bold">
                AvitoUnlock
              </span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Профессиональная помощь с разблокировкой аккаунтов Авито. Работаем с 2024 года.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-xl mb-6">Навигация</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('process-section')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Как это работает
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonial-section')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Отзывы клиентов
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq-section')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Часто задаваемые вопросы
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-xl mb-6">Контакты</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://t.me/avito_unlock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="w-full justify-center rounded-full bg-white">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.81-.62 3.15-1.37 5.26-2.27 6.33-2.71 3.01-1.24 3.64-1.46 4.05-1.47.09 0 .29.02.42.19.11.13.13.31.15.44.02.09.03.33.01.51z"/>
                  </svg>
                  Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AvitoUnlock. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-muted-foreground text-sm">
                Мы не связаны с Авито. Это независимый сервис.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
