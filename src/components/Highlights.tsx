
import { Building, MapPin, TrendingUp, ExternalLink } from "lucide-react";

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start mb-4">
              <Building className="text-[#0aaac6] h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Conceito Completo</h3>
                <p className="text-gray-700">
                  Reúne em um só lugar: comércio varejista, serviços essenciais, gastronomia, lazer e infraestrutura moderna.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start mb-4">
              <MapPin className="text-[#0aaac6] h-6 w-6 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#0b263b] mb-2">Localização Estratégica</h3>
                <p className="text-gray-700">
                  Ponto de encontro regional e polo comercial de referência em Joinville, com acesso a um público-alvo de mais de 150 mil pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Área bruta locável</h4>
            <p className="text-3xl font-bold text-[#ff8d08]">32.000 m²</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Rentabilidade</h4>
            <p className="text-3xl font-bold text-[#ff8d08]">1,04% a.m.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Projeto exclusivo</h4>
            <p className="text-xl font-medium text-[#0b263b]">Contratos BTS assinados</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg text-[#0b263b] mb-2">Dividendos previstos</h4>
            <p className="text-xl font-medium text-[#0b263b]">A partir de Fev/2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
