import { motion } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Análisis de Superficie",
    description: "Escaneamos tu infraestructura digital para identificar vulnerabilidades visibles y puntos de entrada potenciales.",
    icon: Search,
  },
  {
    number: "02",
    title: "Blindaje y Remediación",
    description: "Aplicamos parches de seguridad, configuramos protecciones y cerramos las vulnerabilidades detectadas.",
    icon: Code,
  },
  {
    number: "03",
    title: "Monitorización Continua",
    description: "Implementamos alertas 24/7, verificamos el cumplimiento normativo y ajustamos las defensas ante nuevas amenazas.",
    icon: Rocket,
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-ice mb-4">
            Nuestra Metodología
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
            Tres pasos, protección garantizada
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center p-8 border border-border bg-background hover:border-ice/50 transition-colors duration-300">
                {/* Number */}
                <span className="text-6xl font-extralight text-ice/20 mb-4">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center border border-border mb-6 group-hover:border-ice group-hover:bg-ice/10 transition-colors duration-300">
                  <step.icon size={24} strokeWidth={1.5} className="text-foreground group-hover:text-ice transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-medium tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
