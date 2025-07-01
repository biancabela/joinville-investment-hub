
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

type HeroSectionProps = {
  scrollToSection: (id: string) => void;
};

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const backgroundImageUrl = "/lovable-uploads/543fb73e-f7c6-4b7d-b2f3-eb46f2307152.png";
  
  // Pre-load the image to check if it loads correctly
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [backgroundImageUrl]);

  // Console log for debugging - moved outside of JSX
  console.log("Background image status:", { imageLoaded, imageError, backgroundImageUrl });

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${!imageLoaded && 'bg-brand-navy'}`}
        style={{ 
          backgroundImage: !imageError ? `url('${backgroundImageUrl}')` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/60"></div>
      </div>
      
      <div className="container mx-auto z-10 px-6 md:px-10 lg:px-20 max-w-7xl text-center">
        <span className="inline-block text-brand-blue font-montserrat font-medium text-xl md:text-2xl mb-6 animate-scale-in glass-effect px-6 py-2 rounded-full border border-brand-blue/30">
          Projeto Multiuso Inovador
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-10 md:mb-12 tracking-tight leading-tight mx-auto animate-slide-up max-w-5xl relative">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Oportunidade única para investidores
          </span>
          <br />
          <span className="text-brand-orange animate-shimmer">
            e empresários em Joinville
          </span>
        </h1>
        
        <Button 
          onClick={() => scrollToSection('highlights')} 
          className="bg-gradient-to-r from-brand-orange to-brand-dark-orange hover:from-brand-dark-orange hover:to-brand-orange text-white font-semibold py-8 px-12 text-xl rounded-2xl shadow-2xl shadow-brand-orange/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-delayed animate-glow relative overflow-hidden group"
        >
          <span className="relative z-10">Saiba Mais</span>
          <ArrowDown className="ml-3 h-6 w-6 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce animate-fade-in-delayed">
        <ArrowDown className="h-8 w-8 text-brand-blue" />
      </div>
    </header>
  );
};

export default HeroSection;
