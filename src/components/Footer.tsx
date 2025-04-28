
const Footer = () => {
  return (
    <footer className="bg-[#0b263b] text-white py-10 px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Joinville Investment Hub. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-[#0aaac6] transition-colors">Termos de Uso</a>
            <a href="#" className="text-white hover:text-[#0aaac6] transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
