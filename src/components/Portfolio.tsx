import { motion } from "framer-motion";
import { ArrowUpRight, FileSpreadsheet, Bot, Workflow } from "lucide-react";
import fotoHeroPintor from "@/assets/fotoHeroPintor.png";
import fotoHeroPC from "@/assets/fotoHeroPC.png";
import fotoHeroDelgado from "@/assets/fotoHeroDelgado.png";
import fotoHeroPlatsForts from "@/assets/fotoHeroPlatsForts.png";
import fotoHeroLaTasketa from "@/assets/fotoHeroLaTasketa.png";
import fotoHeroChaletPizzas from "@/assets/fotoHeroChaletPizzas.png";
import fotoHeroMehranKebab from "@/assets/fotoHeroMehranKebab.png";
import fotoHeroCasaJovellar from "@/assets/fotoHeroCasaJovellar.jpg";

const projects = [
  {
    id: 1,
    title: "Pintures Cerdanya",
    category: "Servicios",
    description: "Web profesional para empresa de pintura en la Cerdanya",
    image: fotoHeroPintor,
    url: "https://pintures-cerdanya.vercel.app/",
    outcome: "Presupuestos online: 40% menos de llamadas y gestión administrativa",
  },
  {
    id: 2,
    title: "Perez Care",
    category: "Salud",
    description: "Plataforma de servicios de cuidado personal y bienestar",
    image: fotoHeroPC,
    url: "https://perezcare-cerdanya.vercel.app/",
    outcome: "Solicitudes de servicio centralizadas: respuesta al cliente 3x más rápida",
  },
  {
    id: 3,
    title: "Plats Forts",
    category: "Restauración",
    description: "Web gastronómica con sistema de carta dinámica integrado",
    image: fotoHeroPlatsForts,
    url: "https://plats-forts-539.vercel.app/",
    outcome: "Carta actualizable por el propio equipo: 0 € y 0 esperas por cada cambio",
    hasDynamicMenu: true,
  },
  {
    id: 4,
    title: "La Tasqueta de Llívia",
    category: "Restauración",
    description: "Cuina de muntanya a Llívia amb carta dinámica i sistema de reserves",
    image: fotoHeroLaTasketa,
    url: "https://www.latasquetadellivia.es/",
    outcome: "Reservas y carta automatizadas: varias horas semanales liberadas en sala",
    hasDynamicMenu: true,
  },
  {
    id: 5,
    title: "Delgado",
    category: "Servicios",
    description: "Plataforma con secciones dinámicas gestionables desde Excel",
    image: fotoHeroDelgado,
    url: "https://delgado-ferro-i-foc.vercel.app/",
    outcome: "Catálogo gestionado desde Excel: autonomía total sin depender de terceros",
    hasDynamicSections: true,
  },
  {
    id: 6,
    title: "Le Chalet des Pizzas",
    category: "Restauración",
    description: "Pizzería artesanal con dos locales en Saillagouse y Bolquère, Francia",
    image: fotoHeroChaletPizzas,
    url: "https://le-chalet-des-pizzas.vercel.app/",
    outcome: "Dos locales con una sola carta digital: gestión unificada y sin duplicidades",
    hasDynamicMenu: true,
  },
  {
    id: 7,
    title: "Mehran Kebab",
    category: "Restauración",
    description: "Kebab, pizzería y tapas en Puigcerdà con carta digital integrada",
    image: fotoHeroMehranKebab,
    url: "https://mehran-kebab-digital.vercel.app/",
    outcome: "Carta digital siempre al día: menos errores de pedido y consultas repetidas",
    hasDynamicMenu: true,
  },
  {
    id: 8,
    title: "Casa Jovellar",
    category: "Turismo Rural",
    description: "Web para alojamiento rural con diseño cálido y enfoque en la experiencia del visitante",
    image: fotoHeroCasaJovellar,
    url: "https://casa-jovellar.vercel.app/",
    outcome: "Consultas de reserva canalizadas desde la web: menos mensajes dispersos",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Proyectos destacados
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`image-zoom card-premium ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain max-h-[400px] rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium tracking-wider uppercase text-ice">
                    {project.category}
                  </span>
                  {project.hasDynamicMenu && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-muted-foreground bg-card/50 border border-border px-2 py-1">
                      <FileSpreadsheet size={12} className="text-ice" />
                      Carta Dinámica
                    </span>
                  )}
                  {project.hasDynamicSections && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-muted-foreground bg-card/50 border border-border px-2 py-1">
                      <FileSpreadsheet size={12} className="text-ice" />
                      Secciones Dinámicas
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {project.description}
                </p>
                {project.outcome && (
                  <div className="border-l-2 border-ice/60 pl-4 py-1">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-ice mb-1">
                      Cómo ayudamos a este cliente
                    </div>
                    <p className="text-sm text-foreground/80">{project.outcome}</p>
                  </div>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-ice transition-colors mt-2 group/link"
                >
                  Ver proyecto
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Automation Product Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 border border-ice/50 flex items-center justify-center relative">
                <Workflow size={32} className="text-ice" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-ice" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-mono text-ice tracking-[0.3em] mb-3">
                PRODUCTO DESTACADO
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Automatización de Procesos y Flujos de Trabajo
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">Automatizamos flujos de Google Drive</span> — Sheets, Gmail, 
                  Google Docs y más. Conectamos tus herramientas para que trabajen solas, ahorrando horas 
                  de trabajo manual repetitivo cada semana.
                </p>
                <p>
                  <span className="text-foreground font-medium flex items-center gap-2"><Bot size={16} className="text-ice inline" /> Bots con IA y Agentes Inteligentes:</span> Creamos 
                  bots personalizados y agentes de IA que automatizan tareas complejas, responden clientes, 
                  procesan datos y toman decisiones inteligentes para tu negocio.
                </p>
                <p className="text-ice font-mono text-sm pt-2">
                  // Menos trabajo manual, más resultados automáticos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Menu Product Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 border border-ice/50 flex items-center justify-center relative">
                <FileSpreadsheet size={32} className="text-ice" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-ice" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-mono text-ice tracking-[0.3em] mb-3">
                PRODUCTO DESTACADO
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Sistema de Contenido Dinámico
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">Cartas de restaurante, galerías, catálogos de productos...</span> Todo 
                  actualizable desde un simple Excel. El empresario modifica el archivo y su web 
                  se actualiza automáticamente. Sin depender de nadie, sin esperas, sin costes adicionales.
                </p>
                <p>
                  Ideal para restaurantes, tiendas, galerías de arte, o cualquier negocio 
                  que necesite actualizar contenido frecuentemente con total autonomía.
                </p>
                <p className="text-ice font-mono text-sm pt-2">
                  // Tu contenido, tu control, tu ritmo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
