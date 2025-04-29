
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
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/f5706331-a858-4e53-bb63-22d9e941b5c1.png')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-[#0b263b]/60"></div>
      </div>
      
      <div className="container mx-auto z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          Oportunidade única para investidores e empresários em Joinville
        </h1>
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
