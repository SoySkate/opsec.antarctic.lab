import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuración EmailJS
      console.log('Enviando email con datos:', formData);
      
      const templateParams = {
        from_name: formData.name, // Coincide con {{from_name}} en tu template
        email: formData.email,     // Coincide con {{email}} para el Auto-Reply
        company: formData.company, // Coincide con {{company}}
        message: formData.message, // Coincide con {{message}}
      };

      console.log('TemplateParams:', templateParams);

      const result = await emailjs.send(
        'service_ucvs29c',  // Tu Service ID
        'template_eartm6m', // Template ID (necesitas crearlo en EmailJS)
        templateParams,
        'DQwRpjemP0ilzIhnC'  // Tu Public Key (de EmailJS)
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
        setAcceptedPrivacy(false);
      } else {
        throw new Error('Error al enviar email');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error al enviar",
        description: "No hemos podido enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
              Hablemos de tu negocio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Cuéntanos qué tareas te quitan más tiempo y te diremos qué se
              puede automatizar, en cuánto tiempo y qué retorno esperar. Primera
              consulta sin coste ni compromiso.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border border-border">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:antarctic.lab26@gmail.com"
                    className="text-foreground hover:text-ice transition-colors"
                  >
                    antarctic.lab26@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border border-border">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <a
                    href="tel:+34654101013"
                    className="text-foreground hover:text-ice transition-colors"
                  >
                    +34 654 10 10 13
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border border-border">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-foreground">Puigcerdà, España</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-ice focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-ice focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-ice focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-ice focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3">
              <Checkbox
                  id="privacy"
                  checked={acceptedPrivacy}
                  onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
                  className="mt-0.5 h-5 w-5 border-2 border-muted-foreground data-[state=checked]:bg-ice data-[state=checked]:border-ice"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  He leído y acepto la{" "}
                  <Link
                    to="/politica-de-privacidad"
                    className="text-ice hover:underline"
                    target="_blank"
                  >
                    Política de Privacidad
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !acceptedPrivacy}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-medium bg-primary text-primary-foreground hover:bg-ice hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Hablar con un Consultor
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
