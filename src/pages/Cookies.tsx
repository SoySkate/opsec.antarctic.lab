import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
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
              Política de Cookies
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. ¿Qué son las Cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en tu 
                  navegador cuando los visitas. Sirven para recordar información sobre tu visita, 
                  como tus preferencias de idioma o configuración, lo que facilita tu próxima 
                  visita y hace que el sitio sea más útil para ti.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Tipos de Cookies que Utilizamos
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 border border-border bg-secondary/30">
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      🔧 Cookies Técnicas (Necesarias)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Son esenciales para el funcionamiento básico del sitio web. Permiten navegar 
                      por la página y utilizar sus funciones básicas, como recordar tu preferencia 
                      de tema (claro/oscuro) o mantener tu sesión activa.
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong className="text-foreground">Duración:</strong> Sesión / Persistentes (hasta 1 año)
                    </p>
                  </div>

                  <div className="p-6 border border-border bg-secondary/30">
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      📊 Cookies Analíticas
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos ayudan a entender cómo los visitantes interactúan con el sitio web, 
                      proporcionando información sobre las áreas visitadas, el tiempo de visita 
                      y cualquier problema encontrado. Esta información nos ayuda a mejorar el 
                      rendimiento y la experiencia de usuario del sitio.
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong className="text-foreground">Duración:</strong> Hasta 2 años
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Gestión de Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes configurar tu navegador para rechazar todas las cookies o para que te 
                  avise cuando se envía una cookie. Sin embargo, si desactivas las cookies, 
                  es posible que algunas funciones del sitio no funcionen correctamente.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  A continuación te indicamos cómo gestionar las cookies en los principales navegadores:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ice hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ice hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ice hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ice hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Actualización de la Política
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Esta política de cookies puede actualizarse en cualquier momento para adaptarse 
                  a cambios normativos o a las prácticas del sitio web. Te recomendamos revisarla 
                  periódicamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Contacto
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos en{" "}
                  <a 
                    href="mailto:antarctic.lab26@gmail.com" 
                    className="text-ice hover:underline"
                  >
                    antarctic.lab26@gmail.com
                  </a>
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

export default Cookies;
