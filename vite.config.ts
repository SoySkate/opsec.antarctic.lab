import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { askKowalski } from "./api/_lib/kowalski";

// En desarrollo no existe Vercel, así que servimos /api/chat desde el propio
// servidor de Vite reutilizando la misma lógica que la función serverless.
function devApiChat(geminiKey: string | undefined): Plugin {
  return {
    name: "dev-api-chat",
    configureServer(server) {
      server.middlewares.use("/api/chat", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          return res.end();
        }
        res.setHeader("Content-Type", "application/json");
        if (!geminiKey) {
          res.statusCode = 500;
          return res.end(JSON.stringify({ error: "GEMINI_API_KEY no configurada en .env" }));
        }
        let raw = "";
        for await (const chunk of req) raw += chunk;
        try {
          const body = JSON.parse(raw || "{}");
          const text = await askKowalski(Array.isArray(body.history) ? body.history : [], geminiKey);
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
  // Prefijo "" para poder leer variables sin VITE_ (la key nunca llega al bundle).
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      mode === "development" && devApiChat(env.GEMINI_API_KEY),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
