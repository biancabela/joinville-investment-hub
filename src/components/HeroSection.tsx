
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
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat`}
        style={{ 
          backgroundImage: !imageError ? `url('${backgroundImageUrl}')` : 'none',
          backgroundColor: !imageLoaded ? '#1a1f2c' : 'transparent'
        }}
      >
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(26, 31, 44, 0.6)'}}></div>
      </div>
      
      <div className="container mx-auto z-10 px-6 md:px-10 lg:px-20 max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-glacial font-bold text-white mb-10 md:mb-12 tracking-tight leading-tight mx-auto animate-slide-up max-w-5xl relative">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Oportunidade única para investidores
          </span>
          <br />
          <span className="text-brand-orange">
            e empresários em Joinville
          </span>
        </h1>
        
        <Button 
          onClick={() => window.open('https://wa.me/5547992935685', '_blank')} 
          className="bg-[#0aaac6] hover:bg-[#0aaac6]/90 text-white font-glacial font-bold py-10 px-16 text-2xl rounded-2xl shadow-2xl shadow-[#0aaac6]/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-delayed animate-glow relative overflow-hidden group"
        >
          <span className="relative z-10">Fale com um consultor</span>
          <ArrowDown className="ml-3 h-6 w-6 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </Button>
      </div>

      {/* Saiba Mais CTA button - bottom right */}
      <div className="absolute bottom-20 right-10">
        <Button 
          onClick={() => window.open('https://wa.me/5547992935685', '_blank')} 
          className="bg-[#0aaac6] hover:bg-[#0aaac6]/90 text-white font-glacial font-bold py-5 px-10 text-xl rounded-xl shadow-xl shadow-[#0aaac6]/40 transform hover:scale-105 transition-all duration-300 animate-glow border-2 border-[#0aaac6] hover:border-white"
        >
          Fale com um consultor
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
