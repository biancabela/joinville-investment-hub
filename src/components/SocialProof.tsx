import { Shield, Award, Users, Building2 } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "A localização estratégica na BR-101 torna este investimento uma oportunidade única no mercado logístico de SC.",
      author: "João Silva",
      role: "Investidor Imobiliário",
      company: "Silva Investimentos"
    },
    {
      quote: "Contratos BTS já assinados demonstram a solidez e segurança deste empreendimento.",
      author: "Maria Santos",
      role: "Analista de Investimentos",
      company: "Capital Partners"
    }
  ];

  const stats = [
    {
      icon: Building2,
      number: "32.000m²",
      label: "Área Bruta Locável",
      subtitle: "Alta capacidade de geração de receita"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Contratos Assinados",
      subtitle: "Segurança garantida desde o início"
    },
    {
      icon: Users,
      number: "150mil+",
      label: "Pessoas na Região",
      subtitle: "Mercado consumidor robusto"
    },
    {
      icon: Award,
      number: "IPCA+3%",
      label: "Rentabilidade Anual",
      subtitle: "Proteção contra inflação"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 via-white to-brand-blue/5 px-6 lg:px-0 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 animate-slide-up">
            Por que <span className="text-brand-orange">Confiar</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-opensans max-w-4xl mx-auto animate-fade-in">
            Números e fatos que comprovam a solidez deste investimento
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-blue mx-auto mt-8 animate-scale-in"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-dark-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-600">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-blue"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="text-brand-orange text-6xl font-bold opacity-20 absolute -top-2 -left-2">"</div>
                  <p className="text-gray-700 font-opensans text-lg leading-relaxed italic relative z-10 pl-8">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-orange font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Contratos Garantidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Localização Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-brand-orange" />
              <span className="text-sm font-semibold text-gray-700">Projeto Aprovado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;