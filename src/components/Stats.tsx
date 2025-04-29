
import { Landmark, Check, Clock } from "lucide-react";

const Stats = () => {
  return (
    <section id="stats" className="section-spacing bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-[#20314e] mb-4 text-center">
          Números que Impressionam
        </h2>
        <p className="text-base md:text-lg font-opensans font-light text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Experiência e credibilidade para transformar investimentos em resultados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-card text-left border border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-all cursor-pointer h-full flex flex-col">
            <p className="text-4xl md:text-5xl font-montserrat font-bold text-[#20314e] mb-4">16.000+</p>
            <p className="text-gray-700 font-medium font-montserrat">Lotes entregues</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card text-left border border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-all cursor-pointer h-full flex flex-col">
            <p className="text-4xl md:text-5xl font-montserrat font-bold text-[#20314e] mb-4">14+</p>
            <p className="text-gray-700 font-medium font-montserrat">Municípios atendidos</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card text-left border border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-all cursor-pointer h-full flex flex-col">
            <p className="text-4xl md:text-5xl font-montserrat font-bold text-[#20314e] mb-4">27.000</p>
            <p className="text-gray-700 font-medium font-montserrat">Projetos em andamento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
