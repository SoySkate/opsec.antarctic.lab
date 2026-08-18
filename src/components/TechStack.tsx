import { motion } from "framer-motion";

const technologies = [
  { name: "Nmap", logo: "🔍" },
  { name: "Burp Suite", logo: "🛡️" },
  { name: "Metasploit", logo: "⚔️" },
  { name: "Wireshark", logo: "📡" },
  { name: "OpenVAS", logo: "🔒" },
  { name: "OSINT", logo: "🌐" },
];

const TechStack = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Herramientas de ciberseguridad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-2xl md:text-3xl font-mono font-light tracking-wider text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
