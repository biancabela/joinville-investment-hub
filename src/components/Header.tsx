
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
    <header className="bg-[#0b263b] min-h-screen flex flex-col items-center justify-center text-center relative px-4 lg:px-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b263b]/10 z-0"></div>
      <div className="container mx-auto z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Invista com rentabilidade de 1.04% ao mês
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Oportunidades únicas para investidores e empresários em um mercado em expansão em Joinville
        </p>
        <Button 
          onClick={() => scrollToSection('highlights')} 
          className="bg-[#0aaac6] hover:bg-[#0aaac6]/90 text-white font-medium py-6 px-8 text-lg rounded-md transition-all"
        >
          Saiba Mais <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-8 w-8 text-[#0aaac6]" />
      </div>
    </header>
  );
};

export default Header;
