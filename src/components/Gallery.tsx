
const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">
          O Empreendimento
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Conheça o projeto que está transformando Joinville
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div>
            <img 
              src="/lovable-uploads/52ce38d1-39f4-4df7-95d5-3b29323472dc.png" 
              alt="Vista aérea do empreendimento" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src="/lovable-uploads/e7fcbc20-167a-4ee8-87a6-f7e091bcf947.png" 
              alt="Vista frontal do empreendimento" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src="/lovable-uploads/ee3f2ead-2d67-4114-956e-3c6e4bba33e4.png" 
              alt="Vista interna do shopping" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src="/lovable-uploads/aaefb1fb-060b-4c73-94c0-3d6172a42241.png" 
              alt="Corredor com vegetação" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src="/lovable-uploads/03ec4379-fcb3-4e92-8bca-3592d53f03a3.png" 
              alt="Fachada do empreendimento" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <img 
              src="/lovable-uploads/63b39c83-ee96-4e03-9045-5f32fc9ecd5e.png" 
              alt="Lojas do empreendimento" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
