
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
            Benefícios <span className="text-brand-orange">Exclusivos</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-opensans max-w-4xl mx-auto animate-fade-in">
            Transforme recursos técnicos em benefícios práticos para seu patrimônio
          </p>
          
          {/* CTA destacado */}
          <div className="mt-8 mb-12 animate-scale-in">
            <div className="inline-flex items-center gap-4 bg-brand-orange/10 border border-brand-orange/30 rounded-2xl px-8 py-4">
              <div className="text-2xl">🎯</div>
              <div className="text-left">
                <p className="text-brand-orange font-bold text-lg">Investimento Mínimo: R$ 2 milhões</p>
                <p className="text-gray-600 text-sm">Cotas fracionadas disponíveis</p>
              </div>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-blue mx-auto animate-scale-in"></div>
        </div>
        
        <div className="flex justify-center">
          <FeatureCards compact={true} />
        </div>
        
        {/* CTA Adicional */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-orange/10 to-brand-blue/10 rounded-2xl p-8 max-w-3xl mx-auto border border-brand-orange/20">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              Últimas Oportunidades Disponíveis
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Restam poucas cotas para este investimento exclusivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-orange hover:bg-brand-dark-orange text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                ⚡ RESERVAR AGORA
              </Button>
              <Button 
                onClick={() => {
                  const phoneNumber = "5547992935685";
                  const message = "Gostaria de saber sobre as cotas disponíveis do Hub de Joinville";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-4 px-8 text-lg rounded-xl"
              >
                📞 FALAR COM CONSULTOR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
