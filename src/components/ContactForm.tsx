
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { openExternalLink } from "@/lib/navigation";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send this data to your backend
    console.log({ name, email, phone });
    
    // Show success message
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    
    // Clear form
    setName("");
    setEmail("");
    setPhone("");
  };
  
  return (
    <section id="contact" className="section-spacing bg-brand-light-blue px-4 lg:px-0">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-brand-navy mb-4 text-center">
          Entre em contato
        </h2>
        <p className="text-base md:text-lg font-opensans font-light text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Fale com nossa equipe para mais informações sobre esta oportunidade
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-card border border-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="name" className="block text-brand-navy font-montserrat font-medium mb-2">Nome completo</Label>
              <Input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue font-opensans"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="email" className="block text-brand-navy font-montserrat font-medium mb-2">E-mail</Label>
              <Input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue font-opensans"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="phone" className="block text-brand-navy font-montserrat font-medium mb-2">Telefone</Label>
              <Input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue font-opensans"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div className="text-center">
              <Button
                onClick={() => openExternalLink('https://wa.me/5547992935685')}
                type="button"
                variant="whatsapp"
                size="lg"
                className="w-full md:w-auto py-4 px-8 text-lg rounded-full"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span className="relative z-10">Tenho interesse</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
