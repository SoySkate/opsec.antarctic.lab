import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const renderMarkdown = (md: string) => {
  const lines = md.split("\n");
  const elements: JSX.Element[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 text-muted-foreground my-4 ml-2">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const inlineFormat = (text: string) => {
    return text
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-ice underline hover:text-ice/80 transition-colors">$1</a>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm text-ice font-mono">$1</code>');
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-foreground mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
    } else if (trimmed === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="text-muted-foreground leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }}
        />
      );
    }
  }
  flushList();
  return elements;
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-36 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Artículo no encontrado</h1>
          <Link to="/blog" className="text-ice mt-4 inline-block hover:underline">
            Volver al Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const canonicalUrl = `https://antarcticlab.dev/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle,
    description: post.seoDescription,
    image: typeof post.image === "string" ? post.image : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "AntarcticLab",
      url: "https://antarcticlab.dev",
    },
    publisher: {
      "@type": "Organization",
      name: "AntarcticLab",
      url: "https://antarcticlab.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.seoDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />

      <article className="pt-36 pb-20">
        <div className="container-narrow max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ice transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Volver al Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-ice bg-ice/10 px-2 py-1 rounded flex items-center gap-1">
                <Tag size={12} /> {post.category}
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

            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="rounded-xl overflow-hidden mb-10 border border-border">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="prose-custom">{renderMarkdown(post.content)}</div>

            {/* CTAs */}
            <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-border text-foreground hover:bg-ice hover:text-background hover:border-ice transition-colors rounded-md"
              >
                <ArrowLeft size={16} /> Volver al Blog
              </button>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-ice hover:text-background transition-colors rounded-md"
              >
                Contacta con nosotros
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
