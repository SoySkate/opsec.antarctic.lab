import { useTheme } from "next-themes";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import LogoBlancNoFonfo from "@/assets/LogoBlancNoFonfo.png";

import LogoNegreNoFondo from "@/assets/LogoNegreNoFondo.png";



const navLinks = [

  { href: "/#portfolio", label: "Portfolio" },

  { href: "/#services", label: "Servicios" },

  { href: "/#about", label: "Nosotros" },

  { href: "/#contact", label: "Contacto" },

  { href: "/labs", label: "Proyectos de I+D (Labs)" },

];



const legalLinks = [

  { to: "/aviso-legal", label: "Aviso Legal" },

  { to: "/politica-de-privacidad", label: "Política de Privacidad" },

  { to: "/cookies", label: "Política de Cookies" },

];



const Footer = () => {

  const currentYear = new Date().getFullYear();

  const { theme } = useTheme();

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

        const header = document.querySelector('header');

        const headerHeight = header ? header.offsetHeight : 100;

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

        const offsetPosition = elementPosition - headerHeight - 5; // Solo -5px de espacio



        window.scrollTo({

          top: offsetPosition,

          behavior: 'smooth'

        });

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



  return (

    <motion.footer

      initial={{ opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, margin: "-50px" }}

      transition={{ duration: 0.5 }}

      className="py-12 md:py-16 border-t border-border"

    >

      <div className="container-narrow">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}

          <motion.a

            href="/#"

            className="flex items-center gap-3"

            initial={{ opacity: 0, scale: 0.9 }}

            whileInView={{ opacity: 1, scale: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 0.4, delay: 0.1 }}

          >

            <img 

              src={mounted && theme === "dark" ? LogoBlancNoFonfo : LogoNegreNoFondo} 

              alt="Antarctic Lab" 

              className="h-10 w-auto transition-opacity duration-300" 

            />

          </motion.a>



          {/* Links */}

          <nav className="flex flex-wrap items-center justify-center gap-8">

            {navLinks.map((link, index) => (

              <motion.a

                key={link.href}

                href={link.href}

                className="text-sm text-muted-foreground hover:text-ice transition-colors link-underline"

                initial={{ opacity: 0, y: 10 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}

              >

                {link.label}

              </motion.a>

            ))}

          </nav>



          {/* Legal Links */}

          <motion.nav

            className="flex flex-wrap items-center justify-center gap-6"

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 0.4, delay: 0.35 }}

          >

            {legalLinks.map((link) => (

              <Link

                key={link.to}

                to={link.to}

                className="text-xs text-muted-foreground/70 hover:text-ice transition-colors"

              >

                {link.label}

              </Link>

            ))}

          </motion.nav>



          {/* Copyright */}

          <motion.p

            className="text-sm text-muted-foreground"

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 0.4, delay: 0.4 }}

          >

            © {currentYear} Antarctic Lab

          </motion.p>

        </div>

      </div>

    </motion.footer>

  );

};



export default Footer;

