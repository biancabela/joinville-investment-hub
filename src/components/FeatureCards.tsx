
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Handshake, FileText, DollarSign } from "lucide-react";

interface FeatureCardsProps {
  compact?: boolean;
}

const FeatureCards = ({ compact = false }: FeatureCardsProps) => {
  // If compact mode is enabled, use a different layout
  const cards = [
    {
      icon: TrendingUp,
      title: "Alta Rentabilidade Garantida",
      description: "1,04% ao mês de rendimento com proteção contra inflação e crescimento do setor logístico",
      benefit: "💰 Seu dinheiro trabalha melhor que poupança",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Handshake,
      title: "Segurança Total do Investimento", 
      description: "Contratos BTS já assinados garantem receita desde o primeiro dia de operação",
      benefit: "🛡️ Risco mínimo, retorno máximo",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileText,
      title: "Oportunidade de Grande Escala",
      description: "32.000 m² de alta capacidade de locação em mercado com alta demanda",
      benefit: "📈 Potencial de valorização exponencial",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: DollarSign,
      title: "Localização Estratégica Única",
      description: "Acesso direto BR-101, facilitando escoamento e atraindo grandes centros de distribuição",
      benefit: "🎯 Localização premium, rentabilidade premium",
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
                  className="group w-72 h-80 bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
                  
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full relative z-10">
                    <div className={`mb-8 rounded-3xl bg-gradient-to-br ${card.gradient} w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 font-montserrat text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <div className="mb-4 px-3 py-1 bg-brand-orange/10 rounded-full">
                      <p className="text-sm font-semibold text-brand-orange">
                        {card.benefit}
                      </p>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-opensans">
                      {card.description}
                    </p>
                  </CardContent>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </Card>
              );
            })}
          </div>
          
          {/* CTA após os cards */}
          <div className="text-center mt-16 animate-fade-in-delayed">
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-brand-orange to-brand-dark-orange hover:from-brand-dark-orange hover:to-brand-orange text-white font-bold py-4 px-8 text-lg rounded-xl shadow-xl shadow-brand-orange/30 transform hover:scale-105 transition-all duration-300 animate-glow relative overflow-hidden group"
            >
              <span className="relative z-10">💼 QUERO RECEBER PROPOSTA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              Sem compromisso • Análise gratuita • Resposta em 24h
            </p>
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
