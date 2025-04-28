import React from 'react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
