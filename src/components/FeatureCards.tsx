
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
      <section className="w-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="features">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 py-12">
          <div className="grid grid-cols-2 gap-8">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={index}
                  className="group w-[280px] h-[320px] bg-white/80 backdrop-blur-sm rounded-2xl border-none shadow-lg hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full relative z-10">
                    <div className={`mb-6 rounded-2xl bg-gradient-to-br ${card.gradient} w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 font-montserrat text-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {card.description}
                    </p>
                  </CardContent>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Regular (non-compact) layout
  return (
    <section className="py-8 bg-white w-full" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Rentabilidade */}
          <Card className="w-[250px] h-[300px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4 rounded-full bg-white w-12 h-12 flex items-center justify-center shadow-sm">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-montserrat text-gray-900">Rentabilidade</h3>
              <p className="text-sm text-gray-600 p-4 text-justify">
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026
              </p>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="w-[250px] h-[300px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4 rounded-full bg-white w-12 h-12 flex items-center justify-center shadow-sm">
                <Handshake className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-montserrat text-gray-900">Segurança</h3>
              <p className="text-sm text-gray-600 p-4 text-justify">
                Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
              </p>
            </CardContent>
          </Card>

          {/* Diversificação */}
          <Card className="w-[250px] h-[300px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4 rounded-full bg-white w-12 h-12 flex items-center justify-center shadow-sm">
                <FileText className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-montserrat text-gray-900">Diversificação</h3>
              <p className="text-sm text-gray-600 p-4 text-justify">
                32.000 m² de área bruta locável
              </p>
            </CardContent>
          </Card>

          {/* Localização Estratégica */}
          <Card className="w-[250px] h-[300px] bg-white rounded-xl shadow-md border-none hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-4 rounded-full bg-white w-12 h-12 flex items-center justify-center shadow-sm">
                <DollarSign className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-montserrat text-gray-900">Localização Estratégica</h3>
              <p className="text-sm text-gray-600 p-4 text-justify">
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
