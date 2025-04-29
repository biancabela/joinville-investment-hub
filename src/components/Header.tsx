
import { useState, useEffect } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="relative z-20">
            <span className={`text-2xl font-montserrat font-bold ${scrollPosition > 50 ? 'text-brand-navy' : 'text-white'}`}>
              Joinville<span className="text-brand-orange">Invest</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#highlights" 
              className={`font-montserrat text-base hover:text-brand-orange transition-colors relative group ${
                scrollPosition > 50 ? 'text-brand-navy' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('highlights');
              }}
            >
              Projeto
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#gallery" 
              className={`font-montserrat text-base hover:text-brand-orange transition-colors relative group ${
                scrollPosition > 50 ? 'text-brand-navy' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}
            >
              Galeria
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#stats" 
              className={`font-montserrat text-base hover:text-brand-orange transition-colors relative group ${
                scrollPosition > 50 ? 'text-brand-navy' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('stats');
              }}
            >
              Números
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className={`font-montserrat text-base hover:text-brand-orange transition-colors relative group ${
                scrollPosition > 50 ? 'text-brand-navy' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contato
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-brand-orange hover:bg-brand-dark-orange text-white rounded-lg px-6 py-3 font-montserrat shadow-card transition-all duration-300 hover:shadow-hover"
            >
              Saiba mais
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden relative z-20 ${scrollPosition > 50 ? 'text-brand-navy' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white h-full w-full flex flex-col">
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col space-y-6 items-center">
              <a 
                href="#highlights" 
                className="font-montserrat text-xl text-brand-navy hover:text-brand-orange transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('highlights');
                }}
              >
                Projeto
              </a>
              <a 
                href="#gallery" 
                className="font-montserrat text-xl text-brand-navy hover:text-brand-orange transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gallery');
                }}
              >
                Galeria
              </a>
              <a 
                href="#stats" 
                className="font-montserrat text-xl text-brand-navy hover:text-brand-orange transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('stats');
                }}
              >
                Números
              </a>
              <a 
                href="#contact" 
                className="font-montserrat text-xl text-brand-navy hover:text-brand-orange transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contato
              </a>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="mt-6 bg-brand-orange hover:bg-brand-dark-orange text-white rounded-lg px-8 py-3 font-montserrat shadow-card transition-all duration-300"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
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

          {/* Removido o cartão de feature com os dados de rentabilidade */}
          
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
    </>
  );
};

export default Header;
