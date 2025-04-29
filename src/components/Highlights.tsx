
import { MapPin, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Highlights = () => {
  return (
    <section id="highlights" className="section-spacing bg-[#20314e] px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Cards */}
          <div className="flex flex-col">
            <Card className="bg-white p-8 rounded-lg shadow-card border border-gray-100/50 hover:shadow-hover transition-all duration-300 hover:bg-gray-50 active:bg-gray-100 h-full">
              <div className="flex flex-col items-start text-left">
                <MapPin className="text-[#20314e] h-8 w-8 mb-6" />
                <h3 className="text-2xl font-poppins font-semibold text-[#20314e] mb-4">Localização Estratégica</h3>
                <p className="text-gray-600/90 leading-relaxed font-opensans font-light">
                  Ponto de encontro regional e polo comercial de referência em Joinville, com acesso a um público-alvo de mais de 150 mil pessoas.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex flex-col justify-center">
            <div className="text-left">
              <p className="leading-relaxed font-opensans font-light text-base text-white mb-6">
                Este é um projeto exclusivo desenvolvido para entregar resultados concretos e consistentes. Com contratos BTS (Build-to-Suit) já assinados com inquilinos estratégicos, o investimento oferece retorno garantido desde o início das operações. A estrutura foi pensada para atender às demandas de empresas sólidas, com foco em ocupação de longo prazo e geração de caixa previsível.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="bg-brand-orange hover:bg-brand-dark-orange text-white font-medium rounded-lg shadow-card hover:shadow-hover transition-all px-6 py-3">
                Saiba mais
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
