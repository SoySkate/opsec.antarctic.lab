import { motion } from "framer-motion";

const values = [
  {
    title: "Enfoque proactivo",
    description:
      "Detectamos los fallos antes de que los ciberdelincuentes los usen en vuestra contra. No esperamos al incidente.",
  },
  {
    title: "Cercanía",
    description:
      "Consultoría en la Cerdanya, con trato directo. Hablamos tu idioma, no el de los tecnicismos.",
  },
  {
    title: "Transparencia total",
    description:
      "Informes claros, sin sorpresas. Sabes exactamente qué protegemos, cómo y por qué.",
  },
];


const About = () => {
  return (
    <section id="about" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
              Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
              Ciberseguridad{" "}
              <span className="text-ice">con enfoque ofensivo</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Antarctic Lab es una consultora de ciberseguridad ofensiva para pymes y centros médicos de la Cerdanya y alrededores.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Nuestro trabajo es sencillo de explicar: analizamos tu superficie de ataque, identificamos vulnerabilidades antes de que los atacantes las encuentren, y blindamos tu infraestructura. Con un plan claro, un coste cerrado y tranquilidad garantizada.
            </p>

          </motion.div>

          {/* Right Column - Values */}
          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-l-2 border-ice pl-6 py-2"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
