import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
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
              Aviso Legal
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Datos Identificativos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, 
                  de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
                  a continuación se reflejan los siguientes datos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li><strong className="text-foreground">Titular:</strong> Andreu Martín</li>
                  <li><strong className="text-foreground">Email de contacto:</strong> antarctic.lab26@gmail.com</li>
                  <li><strong className="text-foreground">Actividad:</strong> Servicios de desarrollo web y consultoría tecnológica</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong className="text-foreground">AntarcTIC Lab</strong> es la marca comercial bajo la cual opera el titular 
                  para ofrecer sus servicios profesionales de desarrollo web, software a medida y consultoría tecnológica.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Objeto
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  El presente sitio web tiene como finalidad informar sobre los servicios de desarrollo web, 
                  diseño digital y consultoría tecnológica ofrecidos por AntarcTIC Lab, así como facilitar 
                  el contacto con potenciales clientes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Propiedad Intelectual
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todos los contenidos del sitio web, incluyendo textos, imágenes, diseños gráficos, 
                  código fuente y logotipos, son propiedad de Andreu Martín o cuenta con los derechos 
                  de uso correspondientes, y están protegidos por las leyes de propiedad intelectual e industrial.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Queda prohibida su reproducción, distribución, comunicación pública o transformación 
                  sin autorización expresa del titular.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Responsabilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  El titular no se hace responsable de los posibles errores de seguridad que se pudieran 
                  producir por el uso de ordenadores infectados con virus informáticos, ni de las 
                  consecuencias que pudieran derivarse del mal uso de la web por parte de los usuarios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Legislación Aplicable
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las presentes condiciones se rigen por la legislación española. Para cualquier 
                  controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales 
                  del domicilio del titular.
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

export default AvisoLegal;
