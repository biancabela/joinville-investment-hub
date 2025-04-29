
import { useEffect } from "react";
import Header from "@/components/Header";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import JoinvilleData from "@/components/JoinvilleData";
import ContactForm from "@/components/ContactForm";
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
        {/* Project Introduction Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-6 md:px-10 max-w-5xl">
            <h2 className="text-brand-orange text-center font-montserrat font-bold text-2xl md:text-3xl mb-8 tracking-wide">
              LIQUIDEZ, SEGURANÇA E ALTA PERFORMANCE
            </h2>
            
            <div className="text-center mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Este é um projeto exclusivo desenvolvido para entregar resultados concretos e consistentes. Com contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos, o investimento oferece retorno garantido desde o início das operações. A estrutura foi pensada para atender às demandas de empresas sólidas, com foco em ocupação de longo prazo e geração de caixa previsível.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026, garantindo um fluxo de rendimentos alinhado ao cronograma de entrega e operação dos ativos. Com localização estratégica e estrutura de alto padrão, este investimento combina liquidez, segurança e alta performance, tornando-se uma excelente opção para quem busca acréscimo patrimonial com retorno real acima da inflação.
              </p>
            </div>
          </div>
        </section>

        <div className="scroll-animate">
          <Highlights />
        </div>
        <div className="scroll-animate">
          <Gallery />
        </div>
        <div className="scroll-animate">
          <JoinvilleData />
        </div>
        <div className="scroll-animate">
          <Stats />
        </div>
        <div className="scroll-animate">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
