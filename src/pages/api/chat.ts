import Groq from "groq-sdk";

// Configuración con Groq SDK
const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY });

// Para Vite, necesitamos crear un endpoint que funcione con el servidor de desarrollo
export async function POST(request: Request) {
  const { mensaje } = await request.json();

  try {
    // Usamos llama-3.3-70b-versatile que es el modelo más reciente
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "Eres Kowalski, estratega de Antartic Lab. Responde analíticamente."
        },
        {
          role: "user",
          content: mensaje
        }
      ]
    });

    // La librería devuelve el texto en .choices[0]?.message?.content
    return new Response(JSON.stringify({ 
      text: response.choices[0]?.message?.content || "Informe incompleto." 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error("ERROR:", error.message);
    return new Response(JSON.stringify({ error: "El laboratorio no responde." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
