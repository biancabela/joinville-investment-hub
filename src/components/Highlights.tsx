
import { Building, MapPin, TrendingUp, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">Projeto Multiuso Inovador</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Um conceito único que combina rentabilidade com infraestrutura moderna para seu investimento
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side - Cards */}
          <div className="flex flex-col gap-8">
            <Card className="bg-gradient-to-br from-white to-[#f1f9fe] p-8 rounded-xl shadow-lg border-0 hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0aaac6]/20 p-4 rounded-full mb-6">
                  <MapPin className="text-[#0aaac6] h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b263b] mb-4">Localização Estratégica</h3>
                <p className="text-gray-600 mb-4">
                  Ponto de encontro regional e polo comercial de referência em Joinville, com acesso a um público-alvo de mais de 150 mil pessoas.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-white to-[#f1f9fe] p-8 rounded-xl shadow-lg border-0 hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#0aaac6]/20 p-4 rounded-full mb-6">
                  <Building className="text-[#0aaac6] h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b263b] mb-4">Conceito Completo</h3>
                <p className="text-gray-600 mb-4">
                  32 mil m² de área bruta locável, reúne em um só lugar: comércio varejista, serviços essenciais, gastronomia, lazer e infraestrutura moderna.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b263b] mb-6">
              Rentabilidade Real, Segurança e Visão de Futuro
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Este é um projeto exclusivo desenvolvido para entregar resultados concretos e consistentes. Com contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos, o investimento oferece retorno garantido desde o início das operações. A estrutura foi pensada para atender às demandas de empresas sólidas, com foco em ocupação de longo prazo e geração de caixa previsível.
              </p>
              
              <p>
                Os dividendos estão previstos para iniciar a partir de fevereiro de 2026, garantindo um fluxo de rendimentos alinhado ao cronograma de entrega e operação dos ativos. Com localização estratégica e estrutura de alto padrão, este investimento combina liquidez, segurança e alta performance, tornando-se uma excelente opção para quem busca acréscimo patrimonial com retorno real acima da inflação.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="bg-[#ff8d08] hover:bg-[#e67d00] text-white font-medium">
                Saiba mais
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          <Card className="bg-gradient-to-r from-white to-[#f1f9fe] p-6 rounded-xl shadow-md border-0 hover:shadow-lg transition-all group">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Área bruta locável</h4>
            <p className="text-3xl font-bold text-[#ff8d08] group-hover:scale-105 transition-transform">32.000 m²</p>
          </Card>
          
          <Card className="bg-gradient-to-r from-white to-[#f1f9fe] p-6 rounded-xl shadow-md border-0 hover:shadow-lg transition-all group">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Rentabilidade</h4>
            <p className="text-3xl font-bold text-[#ff8d08] group-hover:scale-105 transition-transform">1,04% a.m.</p>
          </Card>
          
          <Card className="bg-gradient-to-r from-white to-[#f1f9fe] p-6 rounded-xl shadow-md border-0 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Projeto exclusivo</h4>
            <p className="text-xl font-medium text-[#0b263b]">Contratos BTS assinados</p>
          </Card>
          
          <Card className="bg-gradient-to-r from-white to-[#f1f9fe] p-6 rounded-xl shadow-md border-0 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Dividendos previstos</h4>
            <p className="text-xl font-medium text-[#0b263b]">A partir de Fev/2026</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
