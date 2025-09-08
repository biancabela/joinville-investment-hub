
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openExternalLink } from "@/lib/navigation";

const ComparisonChart = () => {
  return (
    <section className="py-20 bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">
          Rentabilidade que supera a Selic
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Retorno superior às principais alternativas de investimento do mercado
        </p>

        <div className="flex flex-col md:flex-row justify-center items-end gap-10 mb-10">
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium text-gray-600 mb-2">Taxa Selic atual média</span>
            <span className="text-2xl font-bold text-[#0aaac6] mb-4">0,87% a.m.</span>
            <div className="w-20 bg-[#0aaac6] h-32 relative rounded-t-md flex items-center justify-center">
              <span className="absolute -top-8 text-lg font-bold text-[#0aaac6]"></span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium text-gray-600 mb-2">Projeto</span>
            <span className="text-2xl font-bold text-[#0b263b] mb-4">2,04% a.m.</span>
            <div className="w-20 bg-[#0b263b] h-64 relative rounded-t-md flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col">
                <div className="bg-[#ff8d08] h-1/2 rounded-t-md flex items-center justify-center">
                  <span className="text-white font-bold">1%</span>
                </div>
                <div className="bg-[#0b263b] h-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">1,04%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-center text-gray-700">
            <span className="font-medium">Projeto: 2,04% a.m.</span> (1,04% rentabilidade + 1% valorização estimada)
          </p>
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

export default ComparisonChart;
