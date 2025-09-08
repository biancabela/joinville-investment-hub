import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openExternalLink } from "@/lib/navigation";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5547992935685"; // Número atualizado para o WhatsApp
    const message = "Olá! Gostaria de saber mais sobre o projeto de investimento em Joinville.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    openExternalLink(whatsappUrl);
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 animate-float group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </Button>
  );
};

export default WhatsAppButton;