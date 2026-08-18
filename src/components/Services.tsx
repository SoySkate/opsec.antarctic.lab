import { motion } from "framer-motion";
import { Palette, Terminal, Zap, Brain, Snowflake, Rocket, Building2, Megaphone, Workflow, Briefcase } from "lucide-react";
import React, { useState } from "react";

const services = [
  {
    option: "01",
    icon: Workflow,
    title: "Automatización de Procesos y Agentes de IA",
    codename: "SERVICIO PRINCIPAL",
    description:
      "Eliminamos las tareas repetitivas de tu equipo: reservas, presupuestos, facturas, seguimiento de clientes y atención 24/7 con agentes de IA. Menos horas administrativas, más margen.",
    status: "DISPONIBLE",
  },
  {
    option: "02",
    icon: Briefcase,
    title: "Consultoría Técnica B2B",
    codename: "ESTRATEGIA Y ROI",
    description:
      "Analizamos tu operativa, detectamos dónde pierdes tiempo y dinero, y diseñamos un plan de eficiencia con prioridades claras, costes y retorno de inversión estimado.",
    status: "DISPONIBLE",
  },
  {
    option: "03",
    icon: Palette,
    title: "Diseño Web y Contenido Dinámico",
    codename: "SERVICIOS COMPLEMENTARIOS",
    description:
      "El soporte técnico de todo lo anterior: webs rápidas y profesionales, cartas y catálogos actualizables por ti mismo, y presencia digital que convierte visitas en clientes.",
    status: "COMPLEMENTARIO",
  },
];

const plans = [
  {
    icon: Snowflake,
    name: "Plan Diagnóstico",
    type: "Punto de partida",
    description: "Para saber exactamente dónde estás perdiendo horas. Auditoría de procesos y hoja de ruta priorizada.",
    features: ["Auditoría operativa", "Mapa de tareas automatizables", "Estimación de horas ahorradas", "Informe con ROI previsto"],
    highlight: false,
  },
  {
    icon: Rocket,
    name: "Plan Eficiencia",
    type: "Automatización aplicada",
    description: "Nuestro plan más contratado. Implantamos las automatizaciones de mayor impacto en tu día a día.",
    features: ["Todo del Plan Diagnóstico", "Automatización de 3-5 procesos", "Agente de IA de atención al cliente", "Integración con tus herramientas", "Formación al equipo"],
    highlight: true,
  },
  {
    icon: Building2,
    name: "Plan Escalado",
    type: "Software a medida",
    description: "Para negocios con operativa compleja que necesitan una solución propia y acompañamiento continuo.",
    features: ["Desarrollo full-stack a medida", "Integraciones API y CRM", "Panel de métricas operativas", "Mantenimiento y mejora continua", "Consultor asignado"],
    highlight: false,
  },
];

const marketingPlans = [
  {
    icon: Megaphone,
    name: "Plan Visibilidad",
    type: "Presencia local",
    description: "Para negocios que necesitan que les encuentren en la Cerdanya. Posicionamiento local y contenido constante.",
    features: ["Gestión de 2 redes sociales", "SEO local (Google Maps)", "Contenido asistido por IA", "Informe mensual de resultados"],
    highlight: false,
  },
  {
    icon: Brain,
    name: "Plan Captación",
    type: "Generación de clientes",
    description: "Tu motor de ventas: campañas de publicidad medidas y páginas diseñadas para convertir.",
    features: ["Todo del Plan Visibilidad", "Campañas Meta y Google Ads", "Landing page de conversión", "Chatbot de atención 24/7", "Test A/B de anuncios"],
    highlight: true,
  },
  {
    icon: Terminal,
    name: "Plan Liderazgo",
    type: "IA aplicada al crecimiento",
    description: "Para empresas que quieren ser la referencia de su sector apoyándose en la tecnología más actual.",
    features: ["Todo del Plan Captación", "Modelo de IA personalizado", "Automatización del CRM", "GEO (visibilidad en ChatGPT)", "Consultoría estratégica periódica"],
    highlight: false,
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('tech'); // 'tech' o 'marketing'
  
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--ice) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--ice) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-narrow relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-ice mb-4">
            <Zap size={16} />
            <span>Servicios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Cómo te ayudamos a ganar tiempo y margen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Primero entendemos tu operativa, después automatizamos lo que te
            frena. Todo con objetivos medibles: horas ahorradas, costes
            reducidos y retorno de inversión.
          </p>

        </motion.div>

        {/* Services Grid - Tactical Dashboard Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card/50 backdrop-blur-sm border border-border hover:border-ice/50 transition-all duration-500 overflow-hidden"
            >
              {/* Order Badge */}
              <div className="absolute top-0 right-0 bg-ice text-background text-xs font-semibold px-3 py-1 tracking-wider">
                {service.option}
              </div>

              {/* Status Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-ice rounded-full" />
                <span className="text-[10px] text-ice tracking-[0.15em] uppercase">
                  {service.status}
                </span>
              </div>

              <div className="p-8 pt-14">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 border border-border group-hover:border-ice group-hover:text-ice transition-colors duration-500">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Category */}
                <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-2">
                  {service.codename}
                </div>


                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ice/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Toggle Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-card border border-border rounded-none">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
                activeTab === 'tech' ? 'bg-ice text-background' : 'hover:text-ice'
              }`}
            >
              Automatización y Tecnología
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-6 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
                activeTab === 'marketing' ? 'bg-ice text-background' : 'hover:text-ice'
              }`}
            >
              Crecimiento y Captación
            </button>
          </div>
        </motion.div>

        {/* Dynamic Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[10px] text-ice tracking-[0.3em] uppercase mb-3">
            {activeTab === 'tech' ? 'Niveles de servicio' : 'Niveles de crecimiento'}
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {activeTab === 'tech' ? 'Elige tu plan de eficiencia' : 'Elige tu plan de crecimiento'}
          </h3>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {(activeTab === 'tech' ? plans : marketingPlans).map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-card/50 backdrop-blur-sm border transition-all duration-500 overflow-hidden ${
                plan.highlight 
                  ? "border-ice shadow-lg shadow-ice/10" 
                  : "border-border hover:border-ice/50"
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-ice text-background font-mono text-xs font-bold py-1 text-center tracking-wider">
                  RECOMENDADO
                </div>
              )}

              <div className={`p-8 ${plan.highlight ? "pt-12" : ""}`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 border transition-colors duration-500 ${
                  plan.highlight 
                    ? "border-ice text-ice" 
                    : "border-border group-hover:border-ice group-hover:text-ice"
                }`}>
                  <plan.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Plan Name */}
                <h4 className="text-xl font-semibold tracking-tight mb-1">
                  {plan.name}
                </h4>

                {/* Type Badge */}
                <div className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mb-4">
                  {plan.type}
                </div>


                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1 h-1 rounded-full ${plan.highlight ? "bg-ice" : "bg-muted-foreground"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ice/50 to-transparent transition-opacity duration-500 ${
                  plan.highlight ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Working philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="border border-border bg-card/30 backdrop-blur-sm p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left: Icon/Visual */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 border border-ice/50 flex items-center justify-center relative">
                <Zap size={32} className="text-ice" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-ice" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1">
              <div className="text-[10px] text-ice tracking-[0.3em] uppercase mb-3">
                Nuestra forma de trabajar
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Análisis primero, tecnología después
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">Empezamos por los números:</span> cuántas
                  horas dedica tu equipo a cada tarea, qué cuesta cada proceso y dónde se pierde
                  dinero. Sin ese diagnóstico, automatizar es gastar sin saber por qué.
                </p>
                <p>
                  <span className="text-foreground font-medium">Implantamos por fases:</span> primero
                  lo que da retorno rápido, después lo estructural. Tú siempre sabes qué se está
                  haciendo, cuánto cuesta y qué vas a recuperar.
                </p>
                <p className="text-ice text-sm pt-2 font-medium">
                  El resultado: menos horas administrativas, decisiones con datos y un negocio que
                  funciona sin depender de ti para todo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
