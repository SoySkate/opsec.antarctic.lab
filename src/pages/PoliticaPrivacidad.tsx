import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-ice transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Volver al inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              Política de Privacidad
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Responsable del Tratamiento
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Responsable:</strong> Andreu Martín</li>
                  <li><strong className="text-foreground">Marca comercial:</strong> AntarcTIC Lab</li>
                  <li><strong className="text-foreground">Email de contacto:</strong> antarctic.lab26@gmail.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Finalidad del Tratamiento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Los datos personales recabados a través del formulario de contacto de este sitio web 
                  (Nombre, Email, Empresa y Mensaje) se utilizan exclusivamente para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Gestionar y responder las consultas recibidas</li>
                  <li>Ofrecer información personalizada sobre nuestros servicios</li>
                  <li>Elaborar presupuestos y propuestas comerciales a petición del usuario</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Base Legal del Tratamiento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La base legal para el tratamiento de tus datos es el <strong className="text-foreground">consentimiento expreso</strong> que 
                  nos otorgas al marcar la casilla de aceptación de esta política de privacidad 
                  antes de enviar el formulario de contacto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Almacenamiento y Seguridad de los Datos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Los datos personales se almacenan de forma segura utilizando la infraestructura 
                  de <strong className="text-foreground">Supabase</strong>, que implementa medidas de seguridad técnicas y organizativas 
                  adecuadas para proteger los datos contra el acceso no autorizado, la pérdida o 
                  la destrucción.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Los datos se conservarán mientras sea necesario para la finalidad para la que 
                  fueron recogidos o hasta que el usuario solicite su eliminación.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Cesión de Datos a Terceros
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">No cedemos ni compartimos tus datos personales con terceros</strong>, 
                  salvo obligación legal o cuando sea estrictamente necesario para la prestación 
                  del servicio contratado (por ejemplo, proveedores de hosting).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Derechos del Usuario
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En cualquier momento, puedes ejercer los siguientes derechos respecto a tus datos personales:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li><strong className="text-foreground">Acceso:</strong> Solicitar información sobre qué datos tenemos sobre ti</li>
                  <li><strong className="text-foreground">Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de tus datos</li>
                  <li><strong className="text-foreground">Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                  <li><strong className="text-foreground">Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para ejercer cualquiera de estos derechos, puedes escribirnos a{" "}
                  <a 
                    href="mailto:antarctic.lab26@gmail.com" 
                    className="text-ice hover:underline"
                  >
                    antarctic.lab26@gmail.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Cambios en la Política de Privacidad
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar esta política de privacidad para adaptarla 
                  a novedades legislativas o jurisprudenciales. En caso de cambios significativos, 
                  se notificará a través del sitio web.
                </p>
              </section>

              <p className="text-sm text-muted-foreground border-t border-border pt-8 mt-12">
                Última actualización: Febrero 2026
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
