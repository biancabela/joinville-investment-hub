
import { TrendingUp } from "lucide-react";

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-[#0b263b] text-white px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">OPERAÇÕES DE ALTA EFICIÊNCIA</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um projeto focado em resultados concretos, com ocupação garantida e distribuição de dividendos já contratada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#0aaac6]/50 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-[#0aaac6]/20 rounded-full mb-6 mx-auto">
              <TrendingUp className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2 text-[#ff8d08]">1,04% a.m.</h3>
            <p className="text-center text-gray-300">Rendimento alvo mensal</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#0aaac6]/50 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-[#0aaac6]/20 rounded-full mb-6 mx-auto">
              <TrendingUp className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2 text-[#ff8d08]">13,2% a.a.</h3>
            <p className="text-center text-gray-300">Rendimento alvo anual</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#0aaac6]/50 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-[#0aaac6]/20 rounded-full mb-6 mx-auto">
              <TrendingUp className="h-8 w-8 text-[#0aaac6]" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2 text-[#ff8d08]">5,32%</h3>
            <p className="text-center text-gray-300">Acima da inflação projetada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
