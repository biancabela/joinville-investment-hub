import { useState } from "react";
import { Button } from "@/components/ui/button";

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-navy to-brand-executive shadow-2xl border-t border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-white">
              <span className="text-sm font-medium">Investimento exclusivo:</span>
              <span className="ml-2 text-brand-gold font-bold">1,04% ao mês</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300"
            >
              Investir Agora
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors duration-200 p-1"
              aria-label="Fechar banner"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;