import { Shield, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "A posição estratégica na BR-101 representa uma oportunidade de investimento sólida no setor logístico de Santa Catarina.",
      author: "João Silva",
      role: "Diretor de Investimentos",
      company: "Silva Capital"
    },
    {
      quote: "Os contratos BTS já firmados demonstram a consistência e segurança que buscamos em nossos investimentos.",
      author: "Maria Santos",
      role: "Analista Sênior",
      company: "Capital Partners"
    }
  ];

  const stats = [
    {
      icon: Building2,
      number: "32.000m²",
      label: "Área Bruta Locável",
      subtitle: "Capacidade otimizada de receita"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Contratos Garantidos",
      subtitle: "Segurança desde o início"
    },
    {
      icon: Users,
      number: "150mil+",
      label: "Mercado Regional",
      subtitle: "Base sólida de consumidores"
    },
    {
      icon: Award,
      number: "IPCA+3%",
      label: "Rentabilidade Anual",
      subtitle: "Proteção inflacionária"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-50 to-white px-6 lg:px-0 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl executive-heading mb-6 animate-slide-up">
            Por que <span className="text-brand-gold">Investir</span>?
          </h2>
          <p className="text-xl md:text-2xl executive-text max-w-4xl mx-auto animate-fade-in">
            Fundamentos sólidos que sustentam este investimento
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-brand-blue mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-slate-800 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm executive-text">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50"
            >
              <div className="relative">
                <div className="mb-6">
                  <div className="text-brand-gold text-5xl font-bold opacity-20 absolute -top-2 -left-2">"</div>
                  <p className="executive-text text-lg leading-relaxed italic relative z-10 pl-8">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">{testimonial.author}</p>
                    <p className="text-sm executive-text">{testimonial.role}</p>
                    <p className="text-sm text-brand-gold font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-brand-navy to-brand-executive rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Pronto para <span className="text-brand-gold">Investir</span>?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Garanta sua participação neste investimento de alto padrão com segurança comprovada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold py-4 px-8 text-lg rounded-xl shadow-xl transition-all duration-300"
                >
                  Investir Agora
                </Button>
                <Button 
                  onClick={() => {
                    const phoneNumber = "5547992935685";
                    const message = "Gostaria de mais informações sobre o investimento em Joinville";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy font-semibold py-4 px-8 text-lg rounded-xl"
                >
                  Consultoria WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-xl px-8 py-4 shadow-lg border border-slate-200/50">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">Contratos Garantidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-brand-blue" />
              <span className="text-sm font-medium text-slate-700">Localização Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-brand-gold" />
              <span className="text-sm font-medium text-slate-700">Projeto Aprovado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;