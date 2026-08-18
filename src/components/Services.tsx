import { motion } from "framer-motion";
import { Palette, Terminal, Zap, Brain, Snowflake, Rocket, Building2, Megaphone, Workflow, Briefcase } from "lucide-react";
import React, { useState } from "react";

const services = [
  {
    option: "01",
    icon: Workflow,
    title: "Auditoría Táctica B2B",
    codename: "DIAGNÓSTICO ÚNICO",
    description:
      "Análisis exhaustivo de infraestructura, fugas de datos y cumplimiento normativo. Identificamos vulnerabilidades antes de que los atacantes las exploten.",
    status: "DISPONIBLE",
  },
  {
    option: "02",
    icon: Briefcase,
    title: "Blindaje y Mantenimiento Continuo",
    codename: "CUOTA MENSUAL",
    description:
      "Parcheo de seguridad, monitorización 24/7 y copias de seguridad aisladas. Protección activa contra brechas y ataques de suplantación.",
    status: "DISPONIBLE",
  },
  {
    option: "03",
    icon: Palette,
    title: "Consultoría de Cumplimiento AEPD",
    codename: "SERVICIOS COMPLEMENTARIOS",
    description:
      "Adaptación de infraestructura y procesos a la normativa de protección de datos. Documentación, auditorías y planes de acción para evitar multas.",
    status: "COMPLEMENTARIO",
  },
];

const plans = [
  {
    icon: Snowflake,
    name: "Auditoría de Superficie",
    type: "Punto de partida",
    description: "Análisis rápido de tu exposición digital. Identificamos vulnerabilidades visibles y puntos de entrada potenciales.",
    features: ["Escaneo de puertos y servicios", "Análisis de fugas de datos", "Verificación de configuraciones", "Informe ejecutivo"],
    highlight: false,
  },
  {
    icon: Rocket,
    name: "Auditoría Completa",
    type: "Diagnóstico profundo",
    description: "Nuestro servicio más completo. Análisis exhaustivo de toda tu infraestructura y plan de remediación priorizado.",
    features: ["Todo del Auditoría de Superficie", "Pentesting interno y externo", "Análisis de cumplimiento AEPD", "Plan de acción detallado", "Reunión de presentación"],
    highlight: true,
  },
  {
    icon: Building2,
    name: "Blindaje Continuo",
    type: "Protección 24/7",
    description: "Mantenimiento y parcheo continuo. Monitorización activa y respuesta ante incidentes.",
    features: ["Parcheo de seguridad mensual", "Monitorización 24/7", "Copias de seguridad aisladas", "Respuesta a incidentes", "Informe trimestral"],
    highlight: false,
  },
];

const marketingPlans = [
  {
    icon: Megaphone,
    name: "Plan Básico",
    type: "Protección esencial",
    description: "Para pymes que necesitan cumplir con la normativa básica de protección de datos.",
    features: ["Adaptación a AEPD", "Política de privacidad", "Registro de actividades", "Formación básica"],
    highlight: false,
  },
  {
    icon: Brain,
    name: "Plan Avanzado",
    type: "Ciberseguridad activa",
    description: "Protección completa para empresas con datos sensibles. Monitorización y respuesta.",
    features: ["Todo del Plan Básico", "Monitorización 24/7", "Análisis de vulnerabilidades", "Plan de respuesta", "Soporte prioritario"],
    highlight: true,
  },
  {
    icon: Terminal,
    name: "Plan Enterprise",
    type: "Protección integral",
    description: "Para centros médicos y empresas con requisitos de seguridad críticos.",
    features: ["Todo del Plan Avanzado", "Pentesting trimestral", "Auditoría ISO 27001", "Consultor dedicado", "SLA garantizado"],
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
            Cómo protegemos tu negocio digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Primero analizamos tu exposición, después blindamos tus puntos críticos. Todo con objetivos medibles: vulnerabilidades cerradas, cumplimiento normativo y reducción de riesgo.
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
              Auditoría y Blindaje
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-6 py-2 text-xs tracking-[0.15em] uppercase transition-all ${
                activeTab === 'marketing' ? 'bg-ice text-background' : 'hover:text-ice'
              }`}
            >
              Planes de Protección
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
            {activeTab === 'tech' ? 'Niveles de auditoría' : 'Niveles de protección'}
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {activeTab === 'tech' ? 'Elige tu nivel de análisis' : 'Elige tu plan de protección'}
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
                Enfoque proactivo, no reactivo
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">Detectamos antes que remediamos:</span> analizamos tu superficie de ataque continuamente para encontrar fallos antes de que los ciberdelincuentes los exploten.
                </p>
                <p>
                  <span className="text-foreground font-medium">Blindaje por capas:</span> seguridad perimetral, protección de endpoints, cifrado de datos y formación del equipo. Cada capa reduce el riesgo.
                </p>
                <p className="text-ice text-sm pt-2 font-medium">
                  El resultado: cumplimiento normativo garantizado, reducción drástica del riesgo de brecha y tranquilidad operativa.
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
