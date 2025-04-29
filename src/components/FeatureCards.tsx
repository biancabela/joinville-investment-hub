
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, LayoutGrid } from "lucide-react";

const FeatureCards = () => {
  return (
    <section className="py-8 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Dividendos */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-brand-light-blue w-12 h-12 flex items-center justify-center">
                <Calendar className="text-brand-blue h-6 w-6" />
              </div>
              <CardTitle className="text-lg text-gray-800 font-semibold">Dividendos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Dividendos estão previstos para iniciar a partir de fevereiro de 2026
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Contratos BTS */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-brand-light-blue w-12 h-12 flex items-center justify-center">
                <FileText className="text-brand-blue h-6 w-6" />
              </div>
              <CardTitle className="text-lg text-gray-800 font-semibold">Contratos BTS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Área Locável */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <CardHeader className="pb-2">
              <div className="mb-2 rounded-full bg-brand-light-blue w-12 h-12 flex items-center justify-center">
                <LayoutGrid className="text-brand-blue h-6 w-6" />
              </div>
              <CardTitle className="text-lg text-gray-800 font-semibold">Área Bruta Locável</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                32.000 m² de área bruta locável
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
