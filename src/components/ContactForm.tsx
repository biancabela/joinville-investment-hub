
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

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
    <section id="contact" className="py-20 bg-white px-4 lg:px-0">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b263b] mb-4 text-center">
          Entre em contato
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Fale com nossa equipe para mais informações sobre esta oportunidade
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#0b263b] font-medium mb-2">Nome completo</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0aaac6]"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#0b263b] font-medium mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0aaac6]"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-[#0b263b] font-medium mb-2">Telefone</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0aaac6]"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                className="bg-[#ff8d08] hover:bg-[#ff8d08]/90 text-white font-medium py-6 px-8 text-lg rounded-md transition-all w-full md:w-auto"
              >
                <Mail className="mr-2 h-5 w-5" /> Solicitar informações
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
