import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "34654101013";
  const message = encodeURIComponent("¡Hola! Quisiera hacer una consulta sr Kowalski de la agencia AntarcTIC Lab ;)");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-24 right-5 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors animate-fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
