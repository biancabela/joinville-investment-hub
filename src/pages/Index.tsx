
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
        <div className="scroll-animate">
          <Highlights />
        </div>
        <div className="scroll-animate">
          <Gallery />
        </div>
        <div className="scroll-animate">
          <Stats />
        </div>
        <div className="scroll-animate">
          <JoinvilleData />
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
