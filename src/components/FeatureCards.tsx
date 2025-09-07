
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Handshake, FileText, DollarSign } from "lucide-react";

interface FeatureCardsProps {
  compact?: boolean;
}

const FeatureCards = ({ compact = false }: FeatureCardsProps) => {
  // If compact mode is enabled, use a different layout
  const cards = [
    {
      icon: TrendingUp,
      title: "Rentabilidade",
      description: "Os dividendos estão previstos para iniciar a partir de fevereiro de 2026",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Handshake,
      title: "Segurança", 
      description: "Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileText,
      title: "Diversificação",
      description: "32.000 m² de área bruta locável",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: DollarSign,
      title: "Localização Estratégica",
      description: "Polo comercial com acesso a mais de 150 mil pessoas",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  if (compact) {
    return (
      <div className="w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={index}
                  className="group w-80 h-96 bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
                  
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full relative z-10">
                    <div className="mb-8">
                      <Icon className="h-16 w-16 text-brand-orange group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 font-montserrat text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-opensans">
                      {card.description}
                    </p>
                  </CardContent>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Regular (non-compact) layout
  return (
    <section className="py-8 bg-white w-full" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Rentabilidade */}
          <Card className="w-[320px] h-[380px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <TrendingUp className="h-12 w-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Rentabilidade</h3>
              <p className="text-lg text-gray-600 p-4 text-justify">
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026
              </p>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="w-[320px] h-[380px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <Handshake className="h-12 w-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Segurança</h3>
              <p className="text-lg text-gray-600 p-4 text-justify">
                Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
              </p>
            </CardContent>
          </Card>

          {/* Diversificação */}
          <Card className="w-[320px] h-[380px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <FileText className="h-12 w-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Diversificação</h3>
              <p className="text-lg text-gray-600 p-4 text-justify">
                32.000 m² de área bruta locável
              </p>
            </CardContent>
          </Card>

          {/* Localização Estratégica */}
          <Card className="w-[320px] h-[380px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <DollarSign className="h-12 w-12 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Localização Estratégica</h3>
              <p className="text-lg text-gray-600 p-4 text-justify">
                Polo comercial com acesso a mais de 150 mil pessoas
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
