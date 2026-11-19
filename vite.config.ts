import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { askKowalski } from "./api/chat";

// En desarrollo servimos /api/chat desde Vite reutilizando askKowalski con Groq.
function devApiChat(): Plugin {
  return {
    name: "dev-api-chat",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          return res.end();
        }
        res.setHeader("Content-Type", "application/json");
        let raw = "";
        for await (const chunk of req) raw += chunk;
        try {
          const body = JSON.parse(raw || "{}");
          const text = await askKowalski(Array.isArray(body.history) ? body.history : []);
          res.end(JSON.stringify({ text }));
        } catch (err) {
          console.error("[dev-api-chat]", err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "El laboratorio no responde." }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (env.GROQ_API_KEY) process.env.GROQ_API_KEY = env.GROQ_API_KEY;
  if (env.GROQ_API_KEY_FALLBACK) process.env.GROQ_API_KEY_FALLBACK = env.GROQ_API_KEY_FALLBACK;

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      mode === "development" && devApiChat(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
