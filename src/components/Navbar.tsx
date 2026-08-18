import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, FlaskConical } from "lucide-react";
import { useTheme } from "next-themes";
import LogoBlancNoFonfo from "@/assets/LogoBlancNoFonfo.png";
import LogoNegreNoFondo from "@/assets/LogoNegreNoFondo.png";

const navLinks = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#services", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "Nosotros" },
  { href: "/labs", label: "Labs (I+D)", icon: FlaskConical },
  { href: "/#contact", label: "Contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle hash navigation for legal pages
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToElement = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return true; // Element found and scrolled
      }
      return false; // Element not found yet
    };

    // Try immediately
    if (scrollToElement()) return;

    // If not found, wait for DOM to be ready
    const checkInterval = setInterval(() => {
      if (scrollToElement()) {
        clearInterval(checkInterval);
      }
    }, 50);

    // Cleanup after 5 seconds max
    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
    }, 5000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between h-24 md:h-28">
        {/* Logo */}
        <a href="/#" className="flex items-center gap-3">
          <img 
            src={mounted && theme === "dark" ? LogoBlancNoFonfo : LogoNegreNoFondo} 
            alt="Antarctic Lab" 
            className="h-16 md:h-20 w-auto transition-opacity duration-300" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-ice transition-colors link-underline flex items-center gap-1.5"
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border hover:bg-ice hover:text-background hover:border-ice transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === "dark" ? (
                <Sun size={18} className="text-foreground" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )
            )}
          </button>

          {/* CTA Button */}
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-ice hover:text-background transition-colors"
          >
            Solicitar Auditoría Gratuita
          </a>
        </div>

        {/* Mobile: Theme toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:bg-ice hover:text-background hover:border-ice transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === "dark" ? (
                <Sun size={20} className="text-foreground" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container-narrow py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-ice transition-colors py-2 flex items-center gap-2"
                >
                  {link.icon && <link.icon size={20} />}
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-medium bg-primary text-primary-foreground hover:bg-ice hover:text-background transition-colors"
              >
                Solicitar Auditoría Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
