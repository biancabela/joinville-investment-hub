
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

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
    <section className="section-spacing bg-brand-navy text-white px-4 lg:px-0" id="gallery">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-3 text-center">
          OPERAÇÕES DE ALTA EFICIÊNCIA
        </h2>
        
        <p className="text-base md:text-lg font-opensans font-light text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          O empreendimento foi projetado para otimizar logística e produtividade, 
          garantindo um ambiente seguro, eficiente e preparado para operações de alta performance.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="border-none rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all bg-transparent"
            >
              <div className="relative group h-full cursor-pointer overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay with text - animated on hover */}
                  <div 
                    className="absolute inset-0 bg-brand-navy/70 flex flex-col justify-center items-center p-4 transition-all duration-300 ease-in-out transform 
                      opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    <h3 className="text-xl font-poppins font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-center font-opensans font-light text-white">{item.description}</p>
                  </div>
                </AspectRatio>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
