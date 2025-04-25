import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 border-t overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -z-10 bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -z-10 top-0 right-0 w-60 h-60 bg-secondary/5 rounded-full blur-3xl opacity-60"></div>
      
      {/* Фоновые узоры */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:w-1/3">
            <h3 className="text-xl font-bold flex items-center">
              <span className="emoji-bounce mr-2">🔓</span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                AvitoUnlock
              </span>
            </h3>
            <p className="text-muted-foreground">
              Профессиональная помощь с разблокировкой аккаунтов Авито. Работаем с 2024 года.
            </p>
          </div>
          
          <div className="md:w-1/3 space-y-4">
            <h4 className="font-medium text-lg">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a href="#process-section" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2"></span>
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#testimonial-section" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2"></span>
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#faq-section" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2"></span>
                  Часто задаваемые вопросы
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/3 space-y-4">
            <h4 className="font-medium text-lg">Контакты</h4>
            <div className="pt-2">
              <a 
                href="https://t.me/avito_unlock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors premium-shadow"
              >
                <img 
                  src="https://cdn.poehali.dev/files/c9f211da-90f7-4667-b9f2-bf1550e71200.png" 
                  alt="Telegram" 
                  width="20" 
                  height="20" 
                  className="object-contain mr-2"
                />
                Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t text-center text-muted-foreground text-sm">
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