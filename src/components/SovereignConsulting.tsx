import { motion } from "framer-motion";
import { Shield, Eye, Lock, Activity, TrendingUp, Brain, Target, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Blindaje de Activos",
    description:
      "Migración de capital a arquitecturas de frío (Cold Storage) y gestión de UTXOs.",
  },
  {
    icon: Eye,
    title: "Privacidad de Flujo",
    description:
      "Implementación de protocolos Monero-Bridge para anonimizar transacciones legítimas.",
  },
  {
    icon: Lock,
    title: "Higiene Digital Pro",
    description:
      "Configuración de entornos de trabajo (VPN, OS, Comunicaciones) resistentes a la vigilancia corporativa.",
  },
];

const linceFeatures = [
  { icon: Activity, label: "Análisis cada hora", desc: "Señales en tiempo real con score de confianza y Fear & Greed Index" },
  { icon: TrendingUp, label: "Detección de tendencias", desc: "Estructura de mercado (BOS), CVD, Order Book y régimen de precio" },
  { icon: Target, label: "Niveles operativos", desc: "Entrada, Stop Loss y Take Profit calculados automáticamente con ratio R:R" },
  { icon: Brain, label: "Contexto inteligente", desc: "Resúmenes en lenguaje natural con sentencias claras de acción" },
];

const SovereignConsulting = () => {
  const handleScrollToLeadMagnet = () => {
    const leadMagnet = document.querySelector("#lead-magnet");
    if (leadMagnet) {
      leadMagnet.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#lead-magnet";
    }
  };

  return (
    <section id="sovereign" className="section-padding bg-background border-y border-border/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-mono">
              // classified
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Sovereign Digital{" "}
              <span className="text-ice">Consulting</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto mb-6">
              Proteja su capital, asegure su libertad.
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-mono border border-ice/30 text-ice bg-ice/5 rounded-full">
              🪙 Crypto Friendly
            </span>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group border border-border/40 bg-card/30 p-8 hover:border-ice/40 transition-colors"
              >
                <service.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-ice mb-5"
                />
                <h3 className="text-lg font-medium tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Agente Lince Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-ice/30 bg-gradient-to-b from-ice/5 to-transparent mb-14 overflow-hidden"
          >
            {/* Product Header */}
            <div className="border-b border-ice/20 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-ice tracking-[0.3em]">PRODUCTO ACTIVO</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider">v11.1</span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Left: Product Info */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-3xl">🦁</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        Agente <span className="text-ice">Lince</span>
                      </h3>
                      <p className="text-[10px] font-mono text-muted-foreground tracking-[0.2em]">
                        SISTEMA DE INTELIGENCIA DE MERCADO
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Tu analista de mercado con IA que trabaja 24/7. Cada hora recibe señales calculadas 
                    con datos macro, sentimiento, derivados y microestructura. Toma mejores decisiones 
                    de inversión respaldadas por matemáticas, no por emociones.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {linceFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <feat.icon size={16} className="text-ice mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{feat.label}</p>
                          <p className="text-xs text-muted-foreground">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleScrollToLeadMagnet}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ice text-background font-medium hover:bg-ice/90 transition-colors tracking-wide text-sm"
                  >
                    <BarChart3 size={16} />
                    Solicitar Acceso a Agente Lince
                  </button>
                </div>

                {/* Right: Live Signal Preview */}
                <div className="md:w-80 flex-shrink-0">
                  <div className="border border-border/60 bg-background/80 font-mono text-xs p-5 space-y-2.5">
                    <div className="text-ice font-bold text-sm mb-3">📊 SEÑAL EN VIVO (demo)</div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Score:</span>
                      <span className="text-foreground">12/21 · 57%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estado:</span>
                      <span className="text-green-400">TENDENCIA ALCISTA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Acción:</span>
                      <span className="text-yellow-400">ESPERAR CONFIRM.</span>
                    </div>
                    <div className="border-t border-border/40 pt-2.5 mt-1">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precio:</span>
                        <span>$74,413</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">F&G:</span>
                        <span className="text-red-400">21 (Extreme Fear)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">P/C Ratio:</span>
                        <span>0.69</span>
                      </div>
                    </div>
                    <div className="border-t border-border/40 pt-2.5 mt-1">
                      <div className="text-[10px] text-muted-foreground mb-1.5">NIVELES SUGERIDOS</div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entrada:</span>
                        <span>$74,413</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SL:</span>
                        <span className="text-red-400">$70,317</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">TP:</span>
                        <span className="text-green-400">$80,557</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ratio:</span>
                        <span>1:1.5</span>
                      </div>
                    </div>
                    <div className="text-[9px] text-muted-foreground/60 pt-1">
                      Estructura: BULLISH (HH/HL) · BOS BULLISH
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <button
              onClick={handleScrollToLeadMagnet}
              className="inline-flex items-center gap-2 px-8 py-4 border border-ice/60 text-ice font-medium hover:bg-ice hover:text-background transition-colors tracking-wide text-sm"
            >
              Solicitar Auditoría de Privacidad
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SovereignConsulting;
