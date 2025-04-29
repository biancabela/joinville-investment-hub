
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

type HeroSectionProps = {
  scrollToSection: (id: string) => void;
};

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/5ae04f9e-db27-48b9-ae06-d84050b4efc2.png')"
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/50"></div>
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
  );
};

export default HeroSection;
