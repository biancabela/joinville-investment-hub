
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
        <span className="inline-block text-brand-blue font-montserrat font-medium text-xl md:text-2xl mb-6 animate-scale-in glass-effect px-6 py-2 rounded-full border border-brand-blue/30">
          🏗️ Joinville Investment Hub
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight mx-auto animate-slide-up max-w-6xl relative">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Invista no Novo Centro Logístico
          </span>
          <br />
          <span className="text-brand-orange">
            de Joinville
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 md:mb-12 max-w-4xl mx-auto animate-fade-in font-opensans leading-relaxed">
          <span className="text-brand-orange font-semibold">Alto rendimento</span>, segurança jurídica e potencial de valorização no maior polo industrial de Santa Catarina.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-gradient-to-r from-brand-orange to-brand-dark-orange hover:from-brand-dark-orange hover:to-brand-orange text-white font-bold py-6 px-10 text-xl rounded-2xl shadow-2xl shadow-brand-orange/40 transform hover:scale-105 transition-all duration-300 animate-fade-in-delayed animate-glow relative overflow-hidden group border-2 border-brand-orange hover:border-white"
          >
            <span className="relative z-10">🔥 QUERO INVESTIR AGORA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
          
          <div className="text-center text-white/80 animate-fade-in-delayed">
            <p className="text-sm font-medium">Rentabilidade estimada:</p>
            <p className="text-2xl font-bold text-brand-orange">1,04% ao mês</p>
            <p className="text-xs">IPCA + 3% ao ano</p>
          </div>
        </div>
      </div>

      {/* Benefícios rápidos - bottom right */}
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-fade-in-delayed">
          <div className="text-white text-sm space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
              <span>32.000 m² de ABL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
              <span>BR-101 estratégica</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
              <span>Contratos BTS assinados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce animate-fade-in-delayed">
        <ArrowDown className="h-8 w-8 text-brand-blue" />
      </div>
    </header>
  );
};

export default HeroSection;
