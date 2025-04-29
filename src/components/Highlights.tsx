
import { MapPin, Building, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side - Cards */}
          <div className="flex flex-col gap-8">
            <Card className="bg-gradient-to-br from-white to-[#f3f9fe] p-8 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0aaac6]/10 p-4 rounded-full mb-6">
                  <MapPin className="text-[#0aaac6] h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium text-[#0b263b] mb-4">Localização Estratégica</h3>
                <p className="text-gray-600/90 leading-relaxed">
                  Ponto de encontro regional e polo comercial de referência em Joinville, com acesso a um público-alvo de mais de 150 mil pessoas.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-[#f3f9fe] p-8 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0aaac6]/10 p-4 rounded-full mb-6">
                  <Building className="text-[#0aaac6] h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium text-[#0b263b] mb-4">Conceito Completo</h3>
                <p className="text-gray-600/90 leading-relaxed">
                  32 mil m² de área bruta locável, reúne em um só lugar: comércio varejista, serviços essenciais, gastronomia, lazer e infraestrutura moderna.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-medium text-[#0b263b] mb-6 leading-tight">
              Rentabilidade Real, Segurança e Visão de Futuro
            </h3>
            
            <div className="space-y-5 text-gray-600/90">
              <p className="leading-relaxed">
                Este é um projeto exclusivo desenvolvido para entregar resultados concretos e consistentes. Com contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos, o investimento oferece retorno garantido desde o início das operações. A estrutura foi pensada para atender às demandas de empresas sólidas, com foco em ocupação de longo prazo e geração de caixa previsível.
              </p>
              
              <p className="leading-relaxed">
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026, garantindo um fluxo de rendimentos alinhado ao cronograma de entrega e operação dos ativos. Com localização estratégica e estrutura de alto padrão, este investimento combina liquidez, segurança e alta performance, tornando-se uma excelente opção para quem busca acréscimo patrimonial com retorno real acima da inflação.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="bg-[#ff8d08] hover:bg-[#ff8d08]/90 text-white font-normal rounded-xl shadow-md hover:shadow-lg transition-all px-6 py-2.5">
                Saiba mais
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
