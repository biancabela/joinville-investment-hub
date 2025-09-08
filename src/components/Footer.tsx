
import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-16 px-6 lg:px-0" style={{backgroundColor: '#1a1f2c'}}>
      <div className="container mx-auto max-w-6xl">
        {/* Badge de segurança */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
            <Shield className="h-5 w-5 mr-2" />
            100% SEGURO - SEU DADO ESTÁ PROTEGIDO
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <a 
              href="https://galpomax.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="/lovable-uploads/5a1ce013-db38-471e-91e2-b2a33f9cf5c7.png" 
                alt="GALPOMAX Logo" 
                className="h-16 mb-6"
              />
            </a>
            <p className="text-gray-300 mb-6 font-opensans font-light">
              Operações de BTS | Venda e aluguel de galpões e terrenos industriais
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/galpomax" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-orange transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 transform hover:scale-105"
                aria-label="Facebook da GALPOMAX"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/galpomax" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-orange transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 transform hover:scale-105"
                aria-label="Instagram da GALPOMAX" 
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/galpomax" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-orange transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 transform hover:scale-105"
                aria-label="LinkedIn da GALPOMAX"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            {/* Botão de segurança abaixo das redes sociais */}
            <div className="mt-6">
              <div className="flex items-center justify-center text-white px-6 py-3 rounded-full font-semibold text-sm" style={{backgroundColor: '#0aaac6'}}>
                <Shield className="h-4 w-4 mr-2" />
                100% SEGURO - SEU DADO ESTÁ PROTEGIDO
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-brand-orange" />
                <span className="text-gray-300 font-opensans font-light">
                  Santa Catarina, Brasil
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-orange" />
                <a href="tel:+5547992935685" className="text-gray-300 hover:text-brand-orange transition-colors font-opensans font-light">
                  (47) 99293-5685
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-orange" />
                <a href="tel:+5547999774795" className="text-gray-300 hover:text-brand-orange transition-colors font-opensans font-light">
                  (47) 99977-4795
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-orange" />
                <a href="mailto:contato@galpomax.com" className="text-gray-300 hover:text-brand-orange transition-colors font-opensans font-light">
                  contato@galpomax.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0 font-opensans font-light">
            &copy; {new Date().getFullYear()} GALPOMAX. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 font-opensans font-light">
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
