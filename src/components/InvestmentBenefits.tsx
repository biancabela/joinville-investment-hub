
import { TrendingUp, BarChart2, Building, Percent } from "lucide-react";

const InvestmentBenefits = () => {
  return (
    <section id="investment-benefits" className="py-24 bg-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <p className="text-gray-500 font-light uppercase tracking-wider mb-2">INVESTIMENTO INTELIGENTE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b263b] leading-tight">
            ALTA RENTABILIDADE, <br />
            BAIXA VACÂNCIA E <br />
            INFRAESTRUTURA.
          </h2>
          
          <p className="mt-8 text-gray-600 leading-relaxed">
            Investir no Joinville significa aproveitar rentabilidade alta, valorização acelerada e segurança para seu investimento. 
            Com baixa vacância e demanda crescente, os galpões AAA do complexo se consolidam como uma oportunidade estratégica 
            para investidores que buscam retornos sólidos no setor logístico. Além disso, é a escolha ideal para empresas 
            que buscam localização estratégica, eficiência operacional, sustentabilidade, segurança e infraestrutura de alto nível.
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
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Alta rentabilidade</h3>
            <p className="text-center text-gray-600">
              O preço do m² para locação valorizou 78% nos últimos anos, uma das maiores altas do Brasil.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <BarChart2 size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Crescimento sólido</h3>
            <p className="text-center text-gray-600">
              O PIB de Joinville cresceu 23,72% em um ano, impulsionado pelo setor logístico e industrial.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <Building size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Baixa vacância</h3>
            <p className="text-center text-gray-600">
              Em Joinville, a taxa de ocupação é 97%, refletindo a forte demanda por espaços logísticos.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full border border-gray-200">
                <Percent size={32} className="text-[#0b263b]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#0b263b] mb-4">Incentivos fiscais</h3>
            <p className="text-center text-gray-600">
              ICMS reduzido de 17% para 12% e ISS de apenas 2%, garantindo mais custo-benefício para empresas instaladas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
