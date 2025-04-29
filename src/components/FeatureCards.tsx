
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Handshake, FileText, DollarSign } from "lucide-react";

interface FeatureCardsProps {
  compact?: boolean;
}

const FeatureCards = ({ compact = false }: FeatureCardsProps) => {
  return (
    <section className={`${compact ? 'py-0' : 'py-8'} bg-white w-full`} id={compact ? undefined : "features"}>
      <div className={`${compact ? '' : 'container mx-auto px-4 md:px-6'}`}>
        <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2 gap-4' : 'md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'}`}>
          {/* Rentabilidade */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
            <CardContent className={`${compact ? 'p-4' : 'p-6'} flex flex-col items-center text-center`}>
              <div className={`mb-3 rounded-full bg-white ${compact ? 'w-12 h-12' : 'w-16 h-16'} flex items-center justify-center shadow-sm`}>
                <TrendingUp className={`${compact ? 'h-6 w-6' : 'h-8 w-8'} text-brand-navy`} />
              </div>
              <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold mb-2 font-montserrat text-gray-900`}>Rentabilidade</h3>
              <p className={`text-gray-600 ${compact ? 'text-xs' : 'text-sm'}`}>
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026
              </p>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-300">
            <CardContent className={`${compact ? 'p-4' : 'p-6'} flex flex-col items-center text-center`}>
              <div className={`mb-3 rounded-full bg-white ${compact ? 'w-12 h-12' : 'w-16 h-16'} flex items-center justify-center shadow-sm`}>
                <Handshake className={`${compact ? 'h-6 w-6' : 'h-8 w-8'} text-brand-navy`} />
              </div>
              <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold mb-2 font-montserrat text-gray-900`}>Segurança</h3>
              <p className={`text-gray-700 ${compact ? 'text-xs' : 'text-sm'}`}>
                Contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos
              </p>
            </CardContent>
          </Card>

          {/* Diversificação */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
            <CardContent className={`${compact ? 'p-4' : 'p-6'} flex flex-col items-center text-center`}>
              <div className={`mb-3 rounded-full bg-white ${compact ? 'w-12 h-12' : 'w-16 h-16'} flex items-center justify-center shadow-sm`}>
                <FileText className={`${compact ? 'h-6 w-6' : 'h-8 w-8'} text-brand-navy`} />
              </div>
              <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold mb-2 font-montserrat text-gray-900`}>Diversificação</h3>
              <p className={`text-gray-600 ${compact ? 'text-xs' : 'text-sm'}`}>
                32.000 m² de área bruta locável
              </p>
            </CardContent>
          </Card>

          {/* Localização Estratégica */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-300">
            <CardContent className={`${compact ? 'p-4' : 'p-6'} flex flex-col items-center text-center`}>
              <div className={`mb-3 rounded-full bg-white ${compact ? 'w-12 h-12' : 'w-16 h-16'} flex items-center justify-center shadow-sm`}>
                <DollarSign className={`${compact ? 'h-6 w-6' : 'h-8 w-8'} text-brand-navy`} />
              </div>
              <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-semibold mb-2 font-montserrat text-gray-900`}>Localização Estratégica</h3>
              <p className={`text-gray-700 ${compact ? 'text-xs' : 'text-sm'}`}>
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
