import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("antarctic_cookie_consent");
    if (!consent) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("antarctic_cookie_consent", "all");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("antarctic_cookie_consent", "essential_only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-ice/10 text-ice border border-ice/20 shrink-0 mt-0.5">
            <ShieldCheck size={20} className="text-primary" />
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Aviso de Privacidad y Cookies:</span>{" "}
            En Antarctic Lab utilizamos cookies técnicas estrictamente necesarias para garantizar el funcionamiento seguro del sitio web y, opcionalmente, de análisis anónimo para mejorar la plataforma conforme a la directiva de la AEPD y el Art. 22.2 de la LSSI. Consulta nuestra{" "}
            <Link to="/cookies" className="text-foreground underline hover:text-ice transition-colors">
              Política de Cookies
            </Link>.
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={handleReject}
            className="flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-medium border border-border bg-secondary/50 hover:bg-secondary text-foreground rounded-md transition-colors"
          >
            Rechazar no esenciales
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-4 py-2 text-xs sm:text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors shadow-sm"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
