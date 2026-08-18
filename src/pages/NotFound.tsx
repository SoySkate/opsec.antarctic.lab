import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import LogoBlancNoFonfo from "@/assets/LogoBlancNoFonfo.png";
import LogoNegreNoFondo from "@/assets/LogoNegreNoFondo.png";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Logo grande */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={mounted && theme === "dark" ? LogoBlancNoFonfo : LogoNegreNoFondo}
          alt="AntarcTIC Lab"
          className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto mb-8"
        />

        {/* Código 404 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-8xl md:text-9xl font-extralight text-ice/30 mb-4"
        >
          404
        </motion.h1>

        {/* Mensaje divertido */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-light text-foreground mb-2"
        >
          Agente, te has salido del mapa.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mb-10"
        >
          Esta zona no está explorada.
        </motion.p>

        {/* Botón grande */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          href="/"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium bg-primary text-primary-foreground hover:bg-ice hover:text-background transition-colors"
        >
          Volver a la Base
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
