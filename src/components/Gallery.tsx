
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/52ce38d1-39f4-4df7-95d5-3b29323472dc.png",
      title: "Localização estratégica",
      description: "Posicionado em área de alta valorização e fácil acesso"
    },
    {
      image: "/lovable-uploads/e7fcbc20-167a-4ee8-87a6-f7e091bcf947.png",
      title: "Design moderno",
      description: "Arquitetura contemporânea com acabamentos premium"
    },
    {
      image: "/lovable-uploads/ee3f2ead-2d67-4114-956e-3c6e4bba33e4.png",
      title: "Espaços amplos",
      description: "Ambientes planejados para máximo conforto e funcionalidade"
    },
    {
      image: "/lovable-uploads/aaefb1fb-060b-4c73-94c0-3d6172a42241.png", 
      title: "Áreas verdes",
      description: "Integração com a natureza para bem-estar"
    },
    {
      image: "/lovable-uploads/03ec4379-fcb3-4e92-8bca-3592d53f03a3.png",
      title: "Segurança 24h",
      description: "Sistema completo de monitoramento e controle de acesso"
    },
    {
      image: "/lovable-uploads/63b39c83-ee96-4e03-9045-5f32fc9ecd5e.png",
      title: "Flexibilidade de uso",
      description: "Espaços adaptáveis para diversas necessidades comerciais"
    }
  ];

  return (
    <section className="section-spacing text-white px-4 lg:px-0" id="gallery" style={{backgroundColor: '#1a1f2c'}}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-3 text-center">
          OPERAÇÕES DE ALTA EFICIÊNCIA
        </h2>
        
        <p className="text-base md:text-lg font-opensans font-light text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          O empreendimento foi projetado para otimizar logística e produtividade, 
          garantindo um ambiente seguro, eficiente e preparado para operações de alta performance.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="border-none rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-transparent group card-hover"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="relative h-full cursor-pointer overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <h3 className="text-2xl font-bold font-montserrat mb-3 text-shadow">{item.title}</h3>
                      <p className="text-sm font-opensans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="w-0 h-1 bg-gradient-to-r from-brand-orange to-brand-blue group-hover:w-20 transition-all duration-500 delay-300 mt-4"></div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </AspectRatio>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA no final da Gallery */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Viu o <span className="text-brand-orange">Potencial</span>?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Este é o momento ideal para investir no futuro logístico de Santa Catarina
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-brand-orange to-brand-dark-orange hover:from-brand-dark-orange hover:to-brand-orange text-white font-bold py-4 px-8 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🎯 GARANTIR MINHA COTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
