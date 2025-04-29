
import { TrendingUp, Building, PercentIcon, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const InvestmentBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-brand-orange" />,
      title: "Alta rentabilidade",
      description: "O preço do m² para locação valorizou 78% nos últimos anos, uma das maiores altas do Brasil."
    },
    {
      icon: <Building className="h-12 w-12 text-brand-orange" />,
      title: "Baixa vacância",
      description: "Em Navegantes, a taxa de ocupação é 97%, refletindo a forte demanda por espaços logísticos."
    },
    {
      icon: <ChartBar className="h-12 w-12 text-brand-orange" />,
      title: "Crescimento sólido",
      description: "O PIB de Navegantes cresceu 23,72% em um ano, impulsionado pelo setor logístico e industrial."
    },
    {
      icon: <PercentIcon className="h-12 w-12 text-brand-orange" />,
      title: "Incentivos fiscais",
      description: "ICMS reduzido de 17% para 12% e ISS de apenas 2%, garantindo mais custo-benefício para empresas instaladas."
    }
  ];

  return (
    <section className="py-20 bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-brand-blue uppercase tracking-wider font-medium mb-2">INVESTIMENTO INTELIGENTE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
            ALTA RENTABILIDADE,<br />
            BAIXA VACÂNCIA E<br />
            INFRAESTRUTURA.
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Investir no Navepark significa aproveitar rentabilidade alta,
            valorização acelerada e segurança para seu investimento.
            Com baixa vacância e demanda crescente, os galpões AAA
            do complexo se consolidam como uma oportunidade
            estratégica para investidores que buscam retornos sólidos
            no setor logístico.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-brand-navy border-2 border-brand-navy rounded-full px-8 py-6">
            SAIBA MAIS
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
