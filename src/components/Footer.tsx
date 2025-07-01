
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16 px-6 lg:px-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Joinville Investment Hub</h3>
            <p className="text-gray-300 mb-6 font-opensans font-light">
              Soluções de investimento imobiliário com foco em rentabilidade e segurança para investidores.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-brand-blue transition-colors bg-white/10 p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-brand-blue transition-colors bg-white/10 p-2 rounded-full"
                aria-label="Instagram" 
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-brand-blue transition-colors bg-white/10 p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3 font-opensans font-light">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-blue transition-colors">Início</a>
              </li>
              <li>
                <a href="#highlights" className="text-gray-300 hover:text-brand-blue transition-colors">Projeto</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-brand-blue transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-brand-blue transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Contatos</h3>
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 mr-3 text-brand-blue" />
              <a href="tel:+5547992935685" className="text-gray-300 hover:text-brand-blue transition-colors font-opensans font-light">
                (47) 99293-5685
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-brand-blue" />
              <a href="mailto:contato@galpomax.com.br" className="text-gray-300 hover:text-brand-blue transition-colors font-opensans font-light">
                contato@galpomax.com.br
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Endereço</h3>
            <p className="text-gray-300 font-opensans font-light">
              Av. Santos Dumont, 1000<br />
              Centro, Joinville - SC<br />
              CEP: 89200-000
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0 font-opensans font-light">
            &copy; {new Date().getFullYear()} Joinville Investment Hub. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 font-opensans font-light">
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
