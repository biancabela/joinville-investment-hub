
import { TrendingUp, BarChart2, Building, Percent } from "lucide-react";

const InvestmentBenefits = () => {
  return (
    <section id="investment-benefits" className="py-24 bg-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <p className="text-gray-500 font-light uppercase tracking-wider mb-2">INVESTIMENTO INTELIGENTE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b263b] leading-tight">
            LOCALIZAÇÃO PRIVILEGIADA, <br />
            ESTRUTURA MODERNA E <br />
            ALTA QUALIDADE.
          </h2>
          
          <p className="mt-8 text-gray-600 leading-relaxed">
            Nosso empreendimento oferece uma combinação única de localização estratégica e 
            infraestrutura de alto padrão, criando o ambiente ideal para seu negócio prosperar.
            Com design moderno e espaços versáteis, proporcionamos a base perfeita para operações 
            eficientes e produtivas.
          </p>

          <button className="mt-8 border-2 border-[#0b263b] text-[#0b263b] hover:bg-[#0b263b] hover:text-white transition-colors duration-300 rounded-full px-8 py-3 font-medium inline-flex items-center">
            SAIBA MAIS
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <TrendingUp size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Localização estratégica</h3>
            <p className="text-center text-gray-600">
              Acesso rápido às principais rodovias e rotas logísticas, otimizando sua cadeia de suprimentos.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <BarChart2 size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Estrutura moderna</h3>
            <p className="text-center text-gray-600">
              Espaços projetados com as mais recentes tecnologias e padrões internacionais de construção.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <Building size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Espaços flexíveis</h3>
            <p className="text-center text-gray-600">
              Adaptabilidade para diferentes operações, permitindo crescimento e ajustes conforme sua necessidade.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <Percent size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Segurança avançada</h3>
            <p className="text-center text-gray-600">
              Sistema de segurança completo com monitoramento 24h, controle de acesso e equipe especializada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
