import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Very subtle radial glow - transparent so global particles show through */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_center,_rgba(168,192,216,0.03)_0%,_transparent_70%)]' : 'bg-[radial-gradient(ellipse_at_center,_rgba(100,120,150,0.08)_0%,_transparent_70%)]'}`} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={`text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-8 ${isDark ? 'text-[#a8c0d8]' : 'text-[#4a6fa5]'}`}
        >
          Antarctic Lab · Ciberseguridad Ofensiva
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`text-[clamp(2.2rem,6vw,4.5rem)] font-light tracking-[-0.02em] leading-[1.05] mb-8 transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1a1a2e]'}`}
        >
          Blindaje Digital y Ciberseguridad Ofensiva para{" "}
          <span className="font-medium">Pymes y Centros Médicos.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed max-w-3xl mx-auto mb-12 transition-colors duration-500 ${isDark ? 'text-[#8a9aaa]' : 'text-[#5a6a7a]'}`}
        >
          Evita multas de la AEPD, brechas de datos y ataques de suplantación antes de que ocurran.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className={`group relative inline-flex items-center px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase border transition-all duration-500 overflow-hidden ${
              isDark 
                ? 'text-white border-white/20 hover:border-white/40' 
                : 'text-[#1a1a2e] border-[#1a1a2e]/20 hover:border-[#1a1a2e]/40'
            }`}
          >
            <span className="relative z-10">Solicitar Auditoría de Superficie Gratuita</span>
            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${isDark ? 'bg-white/5' : 'bg-[#1a1a2e]/5'}`} />
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center text-sm font-light tracking-[0.12em] uppercase transition-colors duration-500 ${
              isDark 
                ? 'text-[#6a7a8a] hover:text-white' 
                : 'text-[#7a8a9a] hover:text-[#1a1a2e]'
            }`}
          >
            Hablar con un Experto
            <svg
              className="ml-3 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Value bullets */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className={`mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm font-light ${isDark ? 'text-[#7a8a9a]' : 'text-[#6a7a8a]'}`}
        >
          <li>Detección proactiva de vulnerabilidades</li>
          <li>Cumplimiento normativo AEPD</li>
          <li>Protección contra suplantación</li>
        </motion.ul>
      </div>



      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`w-[1px] h-16 bg-gradient-to-b ${isDark ? 'from-transparent via-white/30 to-transparent' : 'from-transparent via-[#1a1a2e]/30 to-transparent'}`}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
