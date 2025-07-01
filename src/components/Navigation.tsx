
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavigationProps = {
  scrollPosition: number;
  scrollToSection: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Navigation = ({ 
  scrollPosition, 
  scrollToSection, 
  isMenuOpen, 
  setIsMenuOpen 
}: NavigationProps) => {
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="relative z-20">
          <img 
            src="/lovable-uploads/5cb0ddb3-da63-4cee-80f8-148159cb95bd.png" 
            alt="GALPOMAX Logo" 
            className="h-10"
          />
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
  );
};

export default Navigation;
