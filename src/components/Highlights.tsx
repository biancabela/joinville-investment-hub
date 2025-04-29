
import { Button } from "@/components/ui/button";
import FeatureCards from "./FeatureCards";

const Highlights = () => {
  return (
    <section id="highlights" className="section-spacing bg-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column with title and text */}
          <div className="flex flex-col justify-start">
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-montserrat">INVESTIMENTO INTELIGENTE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-gray-900 leading-tight">
                SEGURANÇA, RENTABILIDADE E ALTA PERFORMANCE
              </h2>
              
              <p className="leading-relaxed font-opensans font-light text-base text-gray-600/90 mb-6">
                Este é um projeto exclusivo desenvolvido para entregar resultados concretos e consistentes. Com contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos, o investimento oferece retorno garantido desde o início das operações. A estrutura foi pensada para atender às demandas de empresas sólidas, com foco em ocupação de longo prazo e geração de caixa previsível.
              </p>
              
              <p className="leading-relaxed font-opensans font-light text-base text-gray-600/90 mb-6">
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026, garantindo um fluxo de rendimentos alinhado ao cronograma de entrega e operação dos ativos. Com localização estratégica e estrutura de alto padrão, este investimento combina liquidez, segurança e alta performance, tornando-se uma excelente opção para quem busca acréscimo patrimonial com retorno real acima da inflação.
              </p>
            </div>
            
            <div className="mt-4">
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium rounded-full shadow-sm transition-all px-8 py-2 uppercase text-sm">
                Saiba mais
              </Button>
            </div>
          </div>
          
          {/* Right column with feature cards */}
          <div className="flex items-center justify-center">
            <FeatureCards compact={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
