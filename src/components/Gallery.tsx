
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openExternalLink } from "@/lib/navigation";

const Gallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/ded6b657-c8af-449c-915a-15a41a187469.png",
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-codec font-bold mb-8 text-center">
          ESPECIFICAÇÕES DO PROJETO
        </h2>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Área Total */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-codec font-bold text-white mb-4">
                54.000
              </div>
              <div className="text-lg font-codec text-gray-300 mb-2">
                m²
              </div>
              <div className="text-base font-codec text-gray-400">
                Área total
              </div>
            </div>
            
            {/* Área Locável */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-codec font-bold text-white mb-4">
                32.000
              </div>
              <div className="text-lg font-codec text-gray-300 mb-2">
                m²
              </div>
              <div className="text-base font-codec text-gray-400">
                Área bruta locável
              </div>
            </div>
            
            {/* Acesso */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-codec font-bold text-white mb-4">
                150k+
              </div>
              <div className="text-lg font-codec text-gray-300 mb-2">
                pessoas
              </div>
              <div className="text-base font-codec text-gray-400">
                Acesso ao polo comercial
              </div>
            </div>
          </div>
        </div>
        
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
                      <h3 className="text-2xl font-bold font-codec mb-3 text-shadow">{item.title}</h3>
                      <p className="text-sm font-codec leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
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
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
        <Button 
          onClick={() => openExternalLink('https://wa.me/5547992935685')}
          variant="whatsapp"
          size="lg"
          className="py-4 px-8 text-lg rounded-full"
        >
          <span className="relative z-10">Tenho interesse</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
