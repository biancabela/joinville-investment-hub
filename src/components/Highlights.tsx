
import { Button } from "@/components/ui/button";
import FeatureCards from "./FeatureCards";
import { openExternalLink } from "@/lib/navigation";

const Highlights = () => {
  return (
    <section id="highlights" className="section-spacing bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6 lg:px-0 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 animate-slide-up">
            Por que <span className="text-brand-orange">Investir</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-blue mx-auto mt-8 animate-scale-in"></div>
        </div>
        
        <div className="flex justify-center">
          <FeatureCards compact={true} />
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => openExternalLink('https://wa.me/5547992935685')}
            className="bg-[hsl(var(--whatsapp-green))] hover:bg-[hsl(var(--whatsapp-green))]/90 text-white font-glacial font-bold py-6 px-12 text-xl rounded-xl shadow-xl shadow-[hsl(var(--whatsapp-green))]/40 transform hover:scale-105 transition-all duration-300"
          >
            Fale com um consultor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
