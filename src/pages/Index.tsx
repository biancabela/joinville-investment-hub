import Header from "@/components/Header";
import Highlights from "@/components/Highlights";
import Benefits from "@/components/Benefits";
import ComparisonChart from "@/components/ComparisonChart";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import JoinvilleData from "@/components/JoinvilleData";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-[#0b263b]">
      <Header />
      <Highlights />
      <Benefits />
      <ComparisonChart />
      <Gallery />
      <Stats />
      <JoinvilleData />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
