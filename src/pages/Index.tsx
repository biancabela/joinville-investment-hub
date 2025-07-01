import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Highlights from "@/components/Highlights";
import HorizontalGallery from "@/components/HorizontalGallery";
import Stats from "@/components/Stats";
import JoinvilleData from "@/components/JoinvilleData";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
    <>
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-white"
        >
          <Header />
          <main>
            <div className="scroll-animate">
              <Highlights />
            </div>
            <div className="scroll-animate">
              <HorizontalGallery />
            </div>
            <div className="scroll-animate py-20">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
                    Localização Estratégica
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Descubra a localização privilegiada do seu investimento
                  </p>
                </motion.div>
                <InteractiveMap />
              </div>
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
        </motion.div>
      )}
    </>
  );
};

export default Index;
