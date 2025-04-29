
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/81777ba2-514c-4be3-af98-f8f75e93cb19.png')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b263b]/90 via-[#0b263b]/70 to-[#0b263b]/90"></div>
      </div>
      
      <div className="container mx-auto z-10 px-6 md:px-10 lg:px-20 max-w-7xl">
        <span className="inline-block text-[#0aaac6] font-medium text-xl md:text-2xl mb-4 animate-fade-in">Projeto Multiuso Inovador</span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12 tracking-tight leading-tight max-w-4xl animate-fade-in">
          Oportunidade única para investidores e empresários em Joinville
        </h1>

        {/* Feature card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-white/20 max-w-lg transform hover:scale-[1.02] transition-all animate-fade-in">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center gap-4">
              <p className="text-white text-lg font-medium">Rentabilidade mensal</p>
              <p className="text-[#ff8d08] text-2xl font-bold">1,04% a.m.</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p className="text-white text-lg font-medium">Área bruta locável</p>
              <p className="text-[#ff8d08] text-2xl font-bold">32.000 m²</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p className="text-white text-lg font-medium">Dividendos previstos</p>
              <p className="text-white text-lg">A partir de Fev/2026</p>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={() => scrollToSection('highlights')} 
          className="bg-[#0aaac6] hover:bg-[#0aaac6]/90 text-white font-medium py-6 px-10 text-lg rounded-full shadow-lg shadow-[#0aaac6]/20 transform hover:translate-y-[-2px] transition-all animate-fade-in"
        >
          Saiba Mais <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce animate-fade-in">
        <ArrowDown className="h-8 w-8 text-[#0aaac6]" />
      </div>
    </header>
  );
};

export default Header;
