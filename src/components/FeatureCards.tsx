
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Handshake, FileText, DollarSign } from "lucide-react";

interface FeatureCardsProps {
  compact?: boolean;
}

const FeatureCards = ({ compact = false }: FeatureCardsProps) => {
  // If compact mode is enabled, use a different layout
  if (compact) {
    return (
      <section className="w-full bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
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
