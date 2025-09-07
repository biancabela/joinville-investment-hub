
import { Building2, MapPin, TrendingUp, Shield, Banknote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureCards = () => {
  const features = [
    {
      icon: Building2,
      title: "Infraestrutura Premium",
      description: "32.000m² de área bruta locável com especificações técnicas de alto padrão",
      benefits: ["700 vagas de estacionamento", "Pé direito otimizado", "Docas de carga modernas"]
    },
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Posicionamento privilegiado na BR-101, principal corredor logístico do Sul",
      benefits: ["Acesso direto à rodovia", "Proximidade aos portos", "Centro de distribuição ideal"]
    },
    {
      icon: TrendingUp,
      title: "Rentabilidade Consistente",
      description: "Performance financeira estruturada com proteção inflacionária",
      benefits: ["1,04% ao mês", "IPCA + 3% ao ano", "Receita previsível"]
    },
    {
      icon: Shield,
      title: "Segurança Jurídica",
      description: "Contratos BTS já assinados garantindo estabilidade desde o início",
      benefits: ["100% pré-locado", "Inquilinos qualificados", "Garantias contratuais"]
    },
    {
      icon: Banknote,
      title: "Estrutura de Investimento",
      description: "Modelo de cotas acessível para investidores qualificados",
      benefits: ["Cotas fracionadas", "Gestão profissional", "Liquidez estruturada"]
    },
    {
      icon: Users,
      title: "Mercado Consolidado",
      description: "Região com mais de 150 mil habitantes e forte atividade industrial",
      benefits: ["Economia diversificada", "Polo tecnológico", "Crescimento sustentável"]
    }
  ];

  return (
    <section className="section-spacing bg-white px-6 lg:px-0">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl executive-heading mb-6">
            Fundamentos do <span className="text-brand-gold">Investimento</span>
          </h2>
          <p className="text-xl executive-text max-w-3xl mx-auto">
            Características técnicas e comerciais que sustentam a performance deste ativo
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-brand-blue mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-brand-gold/30"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="executive-text leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      <span className="text-sm text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200/50">
            <h3 className="text-2xl font-bold executive-heading mb-4">
              Pronto para Conhecer os Detalhes?
            </h3>
            <p className="executive-text mb-6 max-w-2xl mx-auto">
              Solicite uma apresentação detalhada do investimento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                Solicitar Apresentação
              </Button>
              <Button 
                onClick={() => {
                  const phoneNumber = "5547992935685";
                  const message = "Gostaria de conhecer os detalhes do investimento em Joinville";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                variant="outline"
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-3 font-semibold rounded-lg"
              >
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

export default FeatureCards;
