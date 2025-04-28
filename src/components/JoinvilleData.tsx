
import { Building, TrendingUp, MapPin, ExternalLink } from "lucide-react";

const JoinvilleData = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">
          Joinville: A Cidade do Futuro
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Investir na maior cidade de Santa Catarina é apostar no crescimento contínuo
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <MapPin className="text-[#0aaac6] h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Maior cidade de SC</h3>
                <p className="text-gray-600">
                  Com população superior a 600 mil habitantes, Joinville é a maior cidade e importante polo econômico de Santa Catarina.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <DollarSign className="text-[#0aaac6] h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">PIB acima de R$ 30 bilhões</h3>
                <p className="text-gray-600">
                  Economia pujante, com um dos maiores PIBs do sul do Brasil e constante crescimento econômico.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <Building className="text-[#0aaac6] h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Polo industrial e logístico</h3>
                <p className="text-gray-600">
                  Localização estratégica no corredor logístico do sul do Brasil, com acesso facilitado a grandes centros.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <TrendingUp className="text-[#0aaac6] h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Alta qualidade de vida</h3>
                <p className="text-gray-600">
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
