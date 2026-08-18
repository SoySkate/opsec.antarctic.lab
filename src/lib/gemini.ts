import Groq from "groq-sdk";

// Configuración con la nueva SDK
const groq = new Groq({ 
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Solo para desarrollo
});

export async function sendMessageToGemini(mensaje: string): Promise<string> {
  try {
    // Usamos llama-3.3-70b-versatile que es el modelo más reciente
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "Eres Kowalski, estratega jefe de Antartic Lab. Tus respuestas deben ser MUY concisas (máximo 3 frases). Si el usuario pregunta por contacto, diles que escriban al WhatsApp +34 654 101 013 o al email antarctic.lab26@gmail.com . Sé analítico, profesional y un poco sarcástico."
        },
        {
          role: "user",
          content: mensaje
        }
      ]
    });

    // La nueva librería devuelve el texto directamente en .choices[0]?.message?.content
    return response.choices[0]?.message?.content || "Informe incompleto.";
  } catch (error: any) {
    console.error("ERROR:", error.message);
    // Si da error aquí, prueba con otro modelo
    throw new Error("El laboratorio no responde.");
  }
}