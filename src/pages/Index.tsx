import { useEffect } from "react";
import Header from "@/components/Header";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";

import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Initialize AOS-like scroll animations using Intersection Observer
    const animateOnScroll = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
        // Initially hide the element using classList instead of style
        el.classList.add('opacity-0');
      });
    };

    animateOnScroll();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="scroll-animate animate-slide-up">
          <Highlights />
        </div>
        <div className="scroll-animate animate-fade-in">
          <Gallery />
        </div>
      </main>
      
      {/* Botão para outras opções de galpões */}
      <div className="py-8 bg-white flex justify-center">
        <a 
          href="https://www.galpomax.com.br/terrenos-galpoes/busca/lotes-condominios-venda"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="/lovable-uploads/006f0eec-8bce-4637-9c47-9526dc796843.png"
            alt="Mais opções de investimento"
            className="max-w-md h-auto rounded-lg shadow-lg"
          />
        </a>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
