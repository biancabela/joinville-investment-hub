
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Handshake } from "lucide-react";

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
    }
  ];

  if (compact) {
    return (
      <div className="w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center max-w-4xl mx-auto">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={index}
                  className="group w-80 h-64 bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Rentabilidade */}
          <Card className="w-[300px] h-[240px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4">
                <TrendingUp className="h-12 w-12 text-brand-orange" />
              </div>
              <p className="text-lg text-gray-600 px-2 text-justify">
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026
              </p>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="w-[300px] h-[240px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4">
                <Handshake className="h-12 w-12 text-brand-orange" />
              </div>
              <p className="text-lg text-gray-600 px-2 text-justify">
                Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
