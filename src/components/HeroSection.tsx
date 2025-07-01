
import { Button } from "@/components/ui/button";
import { ArrowDown, TrendingUp, Handshake, FileText, DollarSign } from "lucide-react";
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
    <>
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
          <span className="inline-block text-brand-blue font-montserrat font-medium text-xl md:text-2xl mb-4 animate-fade-in">
            Projeto Multiuso Inovador
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight mx-auto animate-fade-in max-w-4xl">
            Oportunidade única para investidores e empresários em Joinville
          </h1>
          
          <Button 
            onClick={() => scrollToSection('highlights')} 
            className="bg-brand-orange hover:bg-brand-dark-orange text-white font-medium py-6 px-10 text-lg rounded-lg shadow-lg shadow-brand-orange/20 transform hover:translate-y-[-2px] transition-all animate-fade-in-delayed"
          >
            Saiba Mais <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce animate-fade-in-delayed">
          <ArrowDown className="h-8 w-8 text-brand-blue" />
        </div>
      </header>

      {/* Feature Cards Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-montserrat">INVESTIMENTO INTELIGENTE</p>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 leading-tight">
              SEGURANÇA, RENTABILIDADE E ALTA PERFORMANCE
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Rentabilidade */}
            <div className="w-[280px] h-[320px] bg-white rounded-2xl shadow-lg border-none hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-gray-900">Rentabilidade</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Os dividendos estão previstos para iniciar a partir de fevereiro de 2026
                </p>
              </div>
            </div>

            {/* Segurança */}
            <div className="w-[280px] h-[320px] bg-white rounded-2xl shadow-lg border-none hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 rounded-full bg-gradient-to-br from-green-50 to-green-100 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-gray-900">Segurança</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
                </p>
              </div>
            </div>

            {/* Diversificação */}
            <div className="w-[280px] h-[320px] bg-white rounded-2xl shadow-lg border-none hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-gray-900">Diversificação</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  32.000 m² de área bruta locável
                </p>
              </div>
            </div>

            {/* Localização Estratégica */}
            <div className="w-[280px] h-[320px] bg-white rounded-2xl shadow-lg border-none hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat text-gray-900">Localização Estratégica</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Polo comercial com acesso a mais de 150 mil pessoas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
