// Función serverless de Vercel: POST /api/chat
// Recibe { history: ChatTurn[] } y devuelve { text: string }.
// La API key de Gemini vive en la variable de entorno GEMINI_API_KEY (Vercel → Settings → Environment Variables).
import { askKowalski, type ChatTurn } from "./_lib/kowalski";

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "GEMINI_API_KEY no configurada." }, { status: 500 });
  }

  let history: ChatTurn[];
  try {
    const body = await request.json();
    history = Array.isArray(body?.history) ? body.history : [];
  } catch {
    return Response.json({ error: "Body inválido." }, { status: 400 });
  }

  try {
    const text = await askKowalski(history, apiKey);
    return Response.json({ text });
  } catch (err) {
    console.error("chat error:", err);
    return Response.json({ error: "El laboratorio no responde." }, { status: 500 });
  }
}
