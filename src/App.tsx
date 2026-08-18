import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import Cookies from "./pages/Cookies";
import Blog from "./pages/Blog";
import Labs from "./pages/Labs";
import BlogPost from "./pages/BlogPost";
import ChatKowalski from "./components/ChatKowalski";
import GlobalParticles from "./components/GlobalParticles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <GlobalParticles />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ChatKowalski />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
