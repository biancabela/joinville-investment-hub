
import { TrendingUp, Banknote, ChartBar, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-gray-500 uppercase tracking-wider font-medium text-center mb-3">INVESTIMENTO INTELIGENTE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b263b] mb-8 text-center max-w-3xl mx-auto leading-tight">
            ALTA RENTABILIDADE, BAIXA VACÂNCIA E INFRAESTRUTURA.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-8">
            Um conceito único que combina rentabilidade com infraestrutura moderna para seu investimento
          </p>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Investir no projeto significa aproveitar rentabilidade alta,
            valorização acelerada e segurança para seu investimento.
            Com baixa vacância e demanda crescente, o complexo se consolida como uma oportunidade
            estratégica para investidores que buscam retornos sólidos no setor.
          </p>
          <div className="text-center">
            <Button variant="outline" className="border-2 border-[#0b263b] text-[#0b263b] hover:bg-[#0b263b] hover:text-white rounded-full px-8 py-6 h-auto">
              SAIBA MAIS
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 - Alta rentabilidade */}
          <Card className="bg-gradient-to-br from-white to-[#f1f9fe] p-8 rounded-xl shadow-md border-0 hover:shadow-lg transition-all text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 inline-flex items-center justify-center">
                <TrendingUp className="text-[#0b263b] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0b263b] mb-4">Alta rentabilidade</h3>
              <p className="text-gray-600">
                O preço do m² para locação valorizou 78% nos últimos anos, uma das maiores altas do Brasil.
              </p>
            </div>
          </Card>
          
          {/* Card 2 - Crescimento sólido */}
          <Card className="bg-gradient-to-br from-white to-[#f1f9fe] p-8 rounded-xl shadow-md border-0 hover:shadow-lg transition-all text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 inline-flex items-center justify-center">
                <Banknote className="text-[#0b263b] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0b263b] mb-4">Crescimento sólido</h3>
              <p className="text-gray-600">
                O PIB de Navegantes cresceu 23,72% em um ano, impulsionado pelo setor logístico e industrial.
              </p>
            </div>
          </Card>
          
          {/* Card 3 - Baixa vacância */}
          <Card className="bg-gradient-to-br from-white to-[#f1f9fe] p-8 rounded-xl shadow-md border-0 hover:shadow-lg transition-all text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 inline-flex items-center justify-center">
                <ChartBar className="text-[#0b263b] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0b263b] mb-4">Baixa vacância</h3>
              <p className="text-gray-600">
                Em Navegantes, a taxa de ocupação é 97%, refletindo a forte demanda por espaços logísticos.
              </p>
            </div>
          </Card>
          
          {/* Card 4 - Incentivos fiscais */}
          <Card className="bg-gradient-to-br from-white to-[#f1f9fe] p-8 rounded-xl shadow-md border-0 hover:shadow-lg transition-all text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 inline-flex items-center justify-center">
                <Percent className="text-[#0b263b] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0b263b] mb-4">Incentivos fiscais</h3>
              <p className="text-gray-600">
                ICMS reduzido de 17% para 12% e ISS de apenas 2%, garantindo mais custo-benefício para empresas instaladas.
              </p>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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
