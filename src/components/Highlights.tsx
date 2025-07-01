
import { Button } from "@/components/ui/button";
import FeatureCards from "./FeatureCards";

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
          <p className="text-xl md:text-2xl text-gray-600 font-opensans max-w-4xl mx-auto animate-fade-in">
            Descubra as vantagens exclusivas que fazem deste projeto uma oportunidade única de investimento
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-blue mx-auto mt-8 animate-scale-in"></div>
        </div>
        
        <div className="flex justify-center">
          <FeatureCards compact={true} />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
