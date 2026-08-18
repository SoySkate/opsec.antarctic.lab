import { motion } from "framer-motion";

const values = [
  {
    title: "Resultados medibles",
    description:
      "Cada proyecto arranca con una cifra: horas que ahorras, costes que reduces, clientes que dejas de perder.",
  },
  {
    title: "Cercanía",
    description:
      "Consultoría en la Cerdanya, con trato directo. Hablamos tu idioma, no el de los tecnicismos.",
  },
  {
    title: "Elegancia y claridad",
    description:
      "Soluciones simples de usar y fáciles de mantener. Si tu equipo no lo entiende, no sirve.",
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
              Consultoría técnica{" "}
              <span className="text-ice">con los pies en el suelo</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Antarctic Lab es una consultora de automatización e inteligencia
              artificial para negocios locales: inmobiliarias, clínicas, hoteles
              boutique y restauración de la Cerdanya y alrededores.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Nuestro trabajo es sencillo de explicar: identificamos las tareas
              que consumen el tiempo de tu equipo, las automatizamos y te
              devolvemos horas cada semana. Con un plan claro, un coste cerrado
              y un retorno de inversión que puedes calcular desde el primer día.
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
