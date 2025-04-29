
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  isMenuOpen: boolean;
  scrollToSection: (id: string) => void;
};

const MobileMenu = ({ isMenuOpen, scrollToSection }: MobileMenuProps) => {
  if (!isMenuOpen) return null;
  
  return (
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
  );
};

export default MobileMenu;
