
import { Building, TrendingUp, MapPin, DollarSign } from "lucide-react";

const JoinvilleData = () => {
  return (
    <section 
      className="section-spacing relative px-4 lg:px-0 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/lovable-uploads/c28f42e3-bd5b-4ef1-957b-b77ffcb807af.png')" 
      }}
    >
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/70"></div>
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4 text-center">
          Joinville: A Cidade do Futuro
        </h2>
        <p className="text-base md:text-lg font-opensans font-light text-center text-gray-200 mb-16 max-w-3xl mx-auto">
          Investir na maior cidade de Santa Catarina é apostar no crescimento contínuo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-hover transition-all card-hover">
            <div className="flex items-start mb-6">
              <MapPin className="text-brand-orange h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-navy mb-2">Maior cidade de SC</h3>
                <p className="text-gray-700 font-opensans font-light">
                  Com população superior a 600 mil habitantes, Joinville é a maior cidade e importante polo econômico de Santa Catarina.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign className="text-brand-orange h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-navy mb-2">PIB acima de R$ 30 bilhões</h3>
                <p className="text-gray-700 font-opensans font-light">
                  Economia pujante, com um dos maiores PIBs do sul do Brasil e constante crescimento econômico.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-hover transition-all card-hover">
            <div className="flex items-start mb-6">
              <Building className="text-brand-orange h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-navy mb-2">Polo industrial e logístico</h3>
                <p className="text-gray-700 font-opensans font-light">
                  Localização estratégica no corredor logístico do sul do Brasil, com acesso facilitado a grandes centros.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <TrendingUp className="text-brand-orange h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-navy mb-2">Alta qualidade de vida</h3>
                <p className="text-gray-700 font-opensans font-light">
                  Infraestrutura urbana completa e índices de desenvolvimento humano entre os mais altos do país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinvilleData;
