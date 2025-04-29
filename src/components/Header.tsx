
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-32">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('public/lovable-uploads/8c57c079-da26-4b4f-bd8b-1826175a2893.png')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-[#0b263b]/60"></div>
      </div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <div className="text-white text-3xl font-bold flex items-center">
          <span>GALPO</span>
          <span className="text-brand-blue">MAX</span>
          <span className="text-brand-orange text-4xl ml-1">&gt;</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto z-10 px-4">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 max-w-5xl mx-auto">
          Seu galpão no melhor condomínio
          <br />
          Logístico de Santa Catarina
        </h1>
        
        {/* CTA Button */}
        <Button 
          onClick={() => scrollToSection('highlights')} 
          className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-6 px-8 text-lg rounded-md transition-all mb-32"
        >
          Entrar em Contato <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        {/* Price card */}
        <Card className="bg-white/95 rounded-lg p-8 max-w-xl mx-auto mb-32">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Galpão industrial chave na mão
            </h2>
            <p className="text-5xl font-bold">
              <span className="text-brand-orange">R$ 4.128,50/m².</span>
            </p>
          </div>
        </Card>
      </div>
      
      {/* Footer section headline */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-orange">
          INFRAESTRUTURA COMPLETA E MODERNA
        </h2>
      </div>
      
      {/* Chat button */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center">
          <span className="text-white text-2xl">💬</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
