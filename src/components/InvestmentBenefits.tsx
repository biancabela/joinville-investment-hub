
import { TrendingUp, Building, PercentIcon, ChartBar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const InvestmentBenefits = () => {
  const benefits = [
    {
      icon: <MapPin className="h-8 w-8 text-brand-blue" />,
      title: "Localização Estratégica",
      description: "Ponto de encontro regional e polo comercial de referência em Navegantes, com acesso a um público-alvo de mais de 150 mil pessoas."
    },
    {
      icon: <Building className="h-8 w-8 text-brand-blue" />,
      title: "Conceito Completo",
      description: "32 mil m² de área bruta locável, reúne em um só lugar: comércio varejista, serviços essenciais, gastronomia, lazer e infraestrutura moderna."
    }
  ];

  return (
    <section className="py-24 bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col gap-10">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-100 rounded-2xl shadow-sm p-8 bg-white">
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-4 bg-gray-50 rounded-full shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Rentabilidade Real, Segurança e Visão de Futuro
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Investir no Navepark significa aproveitar rentabilidade alta,
                valorização acelerada e segurança para seu investimento.
                Com baixa vacância e demanda crescente, os galpões AAA
                do complexo se consolidam como uma oportunidade
                estratégica para investidores que buscam retornos sólidos
                no setor logístico.
              </p>
              <p className="text-gray-600 text-lg">
                Os dividendos estão previstos para iniciar a partir de fevereiro de
                2026, garantindo um fluxo de rendimentos alinhado ao
                cronograma de entrega e operação dos ativos.
              </p>
              <Button className="bg-[#f79149] hover:bg-[#e57f32] text-white rounded-full px-8 py-6 mt-4 flex items-center gap-2">
                SAIBA MAIS
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
