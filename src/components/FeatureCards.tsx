
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Handshake, FileText, DollarSign } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="py-8 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Alta rentabilidade */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-sm">
                <TrendingUp className="h-8 w-8 text-brand-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-gray-900">Alta rentabilidade</h3>
              <p className="text-gray-600 text-sm">
                O preço do m² para locação valorizou 78% nos últimos anos, uma das maiores altas do Brasil.
              </p>
            </CardContent>
          </Card>

          {/* Crescimento sólido */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-sm">
                <Handshake className="h-8 w-8 text-brand-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-gray-900">Crescimento sólido</h3>
              <p className="text-gray-700 text-sm">
                O PIB de Navegantes cresceu 23.72% em um ano, impulsionado pelo setor logístico e industrial.
              </p>
            </CardContent>
          </Card>

          {/* Baixa vacância */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-sm">
                <FileText className="h-8 w-8 text-brand-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-gray-900">Baixa vacância</h3>
              <p className="text-gray-600 text-sm">
                Em Navegantes, a taxa de ocupação é 97%, refletindo a forte demanda por espaços logísticos.
              </p>
            </CardContent>
          </Card>

          {/* Incentivos fiscais */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-sm">
                <DollarSign className="h-8 w-8 text-brand-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-gray-900">Incentivos fiscais</h3>
              <p className="text-gray-700 text-sm">
                ICMS reduzido de 17% para 12% e ISS de apenas 2%, garantindo mais custo-benefício para empresas instaladas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
