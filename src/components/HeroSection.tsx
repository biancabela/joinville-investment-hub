
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { openExternalLink } from "@/lib/navigation";

type HeroSectionProps = {
  scrollToSection: (id: string) => void;
};

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const backgroundImageUrl = "/lovable-uploads/ded6b657-c8af-449c-915a-15a41a187469.png";
  
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
      </div>

      {/* Saiba Mais CTA button - bottom right */}
      <div className="absolute bottom-20 right-10">
        <Button 
          onClick={() => {
            console.log('Botão secundário do hero clicado');
            openExternalLink('https://wa.me/5547992935685');
          }}
          variant="whatsapp"
          size="lg"
          className="py-4 px-8 text-lg rounded-full"
        >
          <span className="relative z-10">Tenho interesse</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
