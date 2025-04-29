
const Stats = () => {
  return (
    <section className="py-20 bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">
          Números que Impressionam
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Experiência e credibilidade para transformar investimentos em resultados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
            <p className="text-4xl font-bold text-[#0aaac6] mb-2">16.000+</p>
            <p className="text-gray-700 font-medium">Lotes entregues</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
            <p className="text-4xl font-bold text-[#0aaac6] mb-2">14+</p>
            <p className="text-gray-700 font-medium">Municípios atendidos</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
            <p className="text-4xl font-bold text-[#0aaac6] mb-2">27.000</p>
            <p className="text-gray-700 font-medium">Projetos em andamento</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
            <p className="text-4xl font-bold text-[#0aaac6] mb-2">17+</p>
            <p className="text-gray-700 font-medium">Anos de experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
