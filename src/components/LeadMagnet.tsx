import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileSearch, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
// IMPORTANTE: Asegúrate de que la ruta a tu cliente de supabase es correcta
import { supabase } from "../lib/supabase"; 

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Validaciones básicas
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Por favor, introduce tu email.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Por favor, introduce un email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // 2. INSERCIÓN REAL EN SUPABASE
      console.log('Intentando guardar lead:', email);
      console.log('Supabase client:', supabase);
      
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            email: email.toLowerCase().trim(), 
            tipo: 'informe_infiltracion',
            estado: 'pendiente' 
          }
        ]);

      console.log('Resultado inserción:', { error });

      if (error) {
        // Manejo de error si el email ya existe (gracias al 'unique' que pusimos)
        if (error.code === '23505') {
          toast({
            title: "Ya estás en la lista",
            description: "Este email ya ha solicitado un informe. ¡Revisa tu bandeja!",
          });
        } else {
          throw error;
        }
      } else {
        // 3. Éxito
        toast({
          title: "¡Solicitud recibida!",
          description: "Estamos analizando tu caso. Recibirás tu auditoría muy pronto.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Error guardando lead:", error);
      toast({
        title: "Error de conexión",
        description: "No hemos podido enviar tu solicitud. Reinténtalo en unos minutos.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lead-magnet" className="section-padding bg-ice/5 border-y border-ice/20">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 border border-ice/50 bg-ice/10 mb-8">
            <FileSearch size={28} strokeWidth={1.5} className="text-ice" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4">
            Descubre cuántas horas puedes{" "}
            <span className="text-ice">ahorrar cada mes</span>
          </h2>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Pide tu <strong className="text-foreground">Auditoría Gratuita de Automatización</strong>: revisamos tu operativa y te
            decimos qué tareas puedes automatizar y qué retorno esperar. También puedes escribirnos
            simplemente para consultar dudas o hablar con un consultor, sin compromiso.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 px-5 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ice transition-colors"
                maxLength={255}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !acceptedPrivacy}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-ice text-background font-medium hover:bg-ice/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Enviando..." : (
                  <>
                    Solicitar Auditoría Gratuita
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center justify-center gap-3">
              <Checkbox
                id="privacy-lead"
                checked={acceptedPrivacy}
                onCheckedChange={(checked) => setAcceptedPrivacy(checked === true)}
                className="h-5 w-5 border-2 border-muted-foreground data-[state=checked]:bg-ice data-[state=checked]:border-ice"
              />
              <label
                htmlFor="privacy-lead"
                className="text-sm text-muted-foreground cursor-pointer"
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

            <p className="text-xs text-muted-foreground">
              Sin spam. Solo inteligencia estratégica para tu negocio.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;