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
                <svg width="24" height="24" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="500" cy="500" r="500" fill="#29B6F6" />
                  <path d="M226.328 494.722L568.411 365.344C739.753 297.87 775.34 284.908 798.539 284.376C803.425 284.279 813.895 285.509 820.694 290.928C826.426 295.531 827.985 301.809 828.736 306.146C829.486 310.484 830.427 320.229 829.682 327.893C821.298 414.743 784.793 640.776 766.528 744.191C758.995 786.826 744.084 801.554 729.545 803.188C697.431 806.717 673.371 782.949 642.58 763.12L519.823 676.223C443.433 722.345 427.084 735.194 410.009 746.506C406.329 748.775 402.541 751.008 397.654 753.392C367.462 768.07 343.555 761.982 330.98 745.917C321.256 733.251 320.293 715.998 329.771 701.033C330.603 699.796 331.407 698.665 332.396 697.356L392.703 620.186L517.596 506.302L522.063 502.303C529.738 495.64 533.318 492.595 532.768 489.225C532.219 485.855 527.4 484.508 522.429 484.512C519.883 484.514 516.564 485.728 509.926 488.157L330.377 587.959C290.142 610.174 252.085 621.065 215.026 610.464C192.054 603.945 177.856 592.852 168.173 577.011C158.038 560.456 155.299 545.375 162.404 524.876C168.37 507.85 185.96 498.995 226.328 494.722Z" fill="white"/>
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
