
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type HeroSectionProps = {
  scrollToSection: (id: string) => void;
};

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const backgroundImageUrl = "/lovable-uploads/543fb73e-f7c6-4b7d-b2f3-eb46f2307152.png";
  
  // Pre-load the image to check if it loads correctly
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [backgroundImageUrl]);

  // Console log for debugging - moved outside of JSX
  console.log("Background image status:", { imageLoaded, imageError, backgroundImageUrl });

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${!imageLoaded && 'bg-brand-navy'}`}
        style={{ 
          backgroundImage: !imageError ? `url('${backgroundImageUrl}')` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-navy/60 to-black/80"></div>
      </div>
      
      <div className="container mx-auto z-10 px-6 md:px-10 lg:px-20 max-w-7xl text-center">
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-brand-orange font-montserrat font-medium text-xl md:text-2xl mb-4"
        >
          Projeto Multiuso Inovador
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight mx-auto max-w-4xl"
        >
          Oportunidade única para investidores e empresários em Joinville
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            onClick={() => scrollToSection('gallery')} 
            className="bg-brand-orange hover:bg-brand-dark-orange text-white font-medium py-6 px-10 text-lg rounded-xl shadow-xl shadow-brand-orange/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/40"
          >
            Saiba Mais <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-brand-orange drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
