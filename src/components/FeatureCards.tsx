
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Handshake, Percent } from "lucide-react";

interface FeatureCardsProps {
  compact?: boolean;
}

const FeatureCards = ({ compact = false }: FeatureCardsProps) => {
  // If compact mode is enabled, use a different layout
  const cards = [
    {
      icon: TrendingUp,
      title: "Rentabilidade",
      description: "Dividendos a partir de fevereiro de 2026",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Handshake,
      title: "Segurança", 
      description: "Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Percent,
      title: "Rentabilidade",
      description: "Rentabilidade de 1%",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  if (compact) {
    return (
      <div className="w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
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
                  
                  <CardContent className="p-10 flex flex-col items-center justify-center text-center h-full relative z-10">
                    <div className="mb-10">
                      <Icon className="h-20 w-20 text-brand-orange group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <p className="text-2xl text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-opensans">
                      {card.description}
                    </p>
                  </CardContent>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </Card>
              );
            })}
          </div>
          
          {/* Condições de Pagamento */}
          <div className="mt-16 text-center">
            <div className="bg-brand-navy rounded-2xl p-8 shadow-xl">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Apenas 05 cotas de R$ 2.000.000,00
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                com entrada e saldo parcelado!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular (non-compact) layout
  return (
    <section className="py-8 bg-white w-full" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Rentabilidade */}
          <Card className="w-[320px] h-[340px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <TrendingUp className="h-16 w-16 text-brand-orange" />
              </div>
              <p className="text-xl text-gray-600 px-2 text-justify leading-relaxed">
                Dividendos a partir de fevereiro de 2026
              </p>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="w-[320px] h-[340px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <Handshake className="h-16 w-16 text-brand-orange" />
              </div>
              <p className="text-xl text-gray-600 px-2 text-justify leading-relaxed">
                Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
              </p>
            </CardContent>
          </Card>

          {/* Rentabilidade 1% */}
          <Card className="w-[320px] h-[340px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <Percent className="h-16 w-16 text-brand-orange" />
              </div>
              <p className="text-xl text-gray-600 px-2 text-justify leading-relaxed">
                Rentabilidade de 1%
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Condições de Pagamento */}
        <div className="mt-16 text-center">
          <div className="bg-brand-navy rounded-2xl p-8 shadow-xl">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Apenas 05 cotas de R$ 2.000.000,00
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white">
              com entrada e saldo parcelado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
