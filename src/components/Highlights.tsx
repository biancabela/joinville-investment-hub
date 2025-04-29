
import { Building, MapPin, TrendingUp, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">Projeto Multiuso Inovador</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Um conceito único que combina rentabilidade com infraestrutura moderna para seu investimento
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white to-[#e7f0fd] p-8 rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
            <div className="flex items-start mb-4">
              <div className="bg-[#0aaac6]/20 p-3 rounded-full mr-4">
                <Building className="text-[#0aaac6] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Conceito Completo</h3>
                <p className="text-gray-600">
                  Reúne em um só lugar: comércio varejista, serviços essenciais, gastronomia, lazer e infraestrutura moderna.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-[#e7f0fd] p-8 rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]">
            <div className="flex items-start mb-4">
              <div className="bg-[#0aaac6]/20 p-3 rounded-full mr-4">
                <MapPin className="text-[#0aaac6] h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Localização Estratégica</h3>
                <p className="text-gray-600">
                  Ponto de encontro regional e polo comercial de referência em Joinville, com acesso a um público-alvo de mais de 150 mil pessoas.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
