import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SovereignConsulting from "@/components/SovereignConsulting";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const Labs = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-ice mb-4">
              AntarcTIC LAB · I+D
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Proyectos de I+D (Labs)
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aquí publicamos los desarrollos experimentales del laboratorio:
              investigación en inteligencia artificial aplicada, análisis de
              datos y consultoría sobre activos digitales. No forman parte de
              nuestros servicios de consultoría de automatización para empresas,
              pero alimentan la tecnología que usamos en ellos.
            </p>
          </motion.div>
        </div>
      </section>

      <SovereignConsulting />

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Labs;
