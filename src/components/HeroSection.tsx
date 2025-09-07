
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = "/lovable-uploads/543fb73e-f7c6-4b7d-b2f3-eb46f2307152.png";
  }, []);

  const backgroundImage = !imageError ? "/lovable-uploads/543fb73e-f7c6-4b7d-b2f3-eb46f2307152.png" : "/placeholder.svg";

  return (
    <header 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
      style={imageLoaded ? {
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(30, 41, 59, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-executive/80 to-brand-navy/90"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center max-w-6xl">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 tracking-wide uppercase">
              Oportunidade Exclusiva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-8 leading-tight">
            Joinville Investment Hub
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-light leading-relaxed">
            Empreendimento logístico de alto padrão no maior polo industrial de Santa Catarina
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-brand-gold">
              <span className="text-2xl font-bold">1,04%</span>
              <span className="text-sm font-medium">ao mês</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-sm">IPCA + 3% ao ano</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Investir Agora
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => {
                const phoneNumber = "5547992935685";
                const message = "Gostaria de receber mais informações sobre o Joinville Investment Hub";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm"
            >
              Consultoria Personalizada
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-delayed">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-brand-gold mb-2">32.000m²</h3>
            <p className="text-white/90 text-sm">Área Bruta Locável</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-brand-gold mb-2">BR-101</h3>
            <p className="text-white/90 text-sm">Localização Estratégica</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-brand-gold mb-2">100%</h3>
            <p className="text-white/90 text-sm">Contratos Garantidos</p>
          </div>
        </div>
        
        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('highlights')}>
          <ArrowDown className="h-8 w-8 text-white/70 mx-auto" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
