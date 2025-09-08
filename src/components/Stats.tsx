
import { Landmark, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openExternalLink } from "@/lib/navigation";

const Stats = () => {
  return (
    <section id="stats" className="section-spacing bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#20314e] mb-4 text-center">
          Números que Impressionam
        </h2>
        <p className="text-base md:text-lg font-opensans font-light text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Experiência e credibilidade para transformar investimentos em resultados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col card-hover overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-blue"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <p className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
              16.000<span className="text-brand-orange">+</span>
            </p>
            <p className="text-gray-700 font-semibold font-montserrat text-lg relative z-10">Lotes entregues</p>
            
            <div className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-t from-brand-orange/5 to-transparent group-hover:w-full transition-all duration-500"></div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col card-hover overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-orange"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <p className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
              14<span className="text-brand-blue">+</span>
            </p>
            <p className="text-gray-700 font-semibold font-montserrat text-lg relative z-10">Municípios atendidos</p>
            
            <div className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-t from-brand-blue/5 to-transparent group-hover:w-full transition-all duration-500"></div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col card-hover overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-orange"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-navy/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <p className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
              27.000
            </p>
            <p className="text-gray-700 font-semibold font-montserrat text-lg relative z-10">Projetos em andamento</p>
            
            <div className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-t from-brand-navy/5 to-transparent group-hover:w-full transition-all duration-500"></div>
          </div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
