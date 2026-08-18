import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | AntarcticLab — Inteligencia digital para tu negocio</title>
        <meta name="description" content="Artículos, guías y análisis sobre ciberseguridad, desarrollo web y estrategia digital. Aprende a proteger tu negocio online." />
        <link rel="canonical" href="https://antarcticlab.dev/blog" />
      </Helmet>
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-ice text-sm font-mono tracking-widest uppercase">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Inteligencia digital para tu negocio
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Artículos, guías y análisis sobre tecnología, desarrollo web y estrategia digital.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-ice/40 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-ice bg-ice/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-ice transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-ice mt-4 font-medium">
                      Leer más <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
