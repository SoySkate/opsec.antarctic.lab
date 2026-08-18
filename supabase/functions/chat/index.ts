import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Groq from "https://esm.sh/groq-sdk@0.7.0"

const groq = new Groq({ 
  apiKey: Deno.env.get('GROQ_API_KEY')!
})

serve(async (req) => {
  // Habilitar CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
  }

  try {
    const { mensaje } = await req.json()
    
    if (!mensaje) {
      return new Response(
        JSON.stringify({ error: "Mensaje requerido" }),
        { 
          status: 400,
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          } 
        }
      )
    }
    
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
    })

    const reply = response.choices[0]?.message?.content || "Informe incompleto."

    return new Response(
      JSON.stringify({ text: reply }),
      { 
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        } 
      }
    )
  } catch (error) {
    console.error("Error en chat function:", error)
    return new Response(
      JSON.stringify({ error: "El laboratorio no responde." }),
      { 
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        } 
      }
    )
  }
})
