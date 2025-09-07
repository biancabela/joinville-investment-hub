import { Button } from "@/components/ui/button";
import { X, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 500px and if not dismissed
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-orange to-brand-dark-orange text-white shadow-2xl animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TrendingUp className="h-6 w-6" />
            <div>
              <p className="font-bold text-lg">🔥 Oferta Limitada!</p>
              <p className="text-sm opacity-90">Últimas cotas disponíveis - 1,04% ao mês</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              INVESTIR AGORA
            </Button>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;