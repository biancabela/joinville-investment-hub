
import { TrendingUp, Briefcase, DollarSign, ExternalLink, Building } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">Benefícios para Investidores</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          área total 54.000 m2, 32.000 m² de área bruta locável, Polo comercial com acesso a mais de 150 mil pessoas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-[#0aaac6]/10 p-4 rounded-full mb-5">
              <TrendingUp className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0b263b] mb-3">Mercado em crescimento</h3>
            <p className="text-gray-600">Investimento em uma das regiões de maior desenvolvimento econômico de Santa Catarina.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-[#0aaac6]/10 p-4 rounded-full mb-5">
              <Building className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0b263b] mb-3">Infraestrutura moderna</h3>
            <p className="text-gray-600">Projeto com conceitos inovadores de arquitetura e sustentabilidade para máxima eficiência.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-[#0aaac6]/10 p-4 rounded-full mb-5">
              <TrendingUp className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0b263b] mb-3">Construção eficiente</h3>
            <p className="text-gray-600">Processos otimizados garantem entrega no prazo e qualidade superior de construção.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-[#0aaac6]/10 p-4 rounded-full mb-5">
              <Briefcase className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0b263b] mb-3">Fabricação própria</h3>
            <p className="text-gray-600">Controle total sobre a qualidade dos materiais utilizados em toda a construção.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
