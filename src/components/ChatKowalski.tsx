import React, { useEffect, useRef, useState } from 'react';
import pinguKowalski from '../assets/pinguKowalski.jpg';

type Msg = { role: 'user' | 'ai'; text: string };

const PHONE_DISPLAY = '654 101 013';
const PHONE_TEL = 'tel:+34654101013';
const WHATSAPP_BASE = 'https://wa.me/34654101013';
const MAX_HISTORY = 8;

const WELCOME: Msg = {
  role: 'ai',
  text: `Soy Kowalski, consultor de ciberseguridad en Antarctic Lab OPSEC. ¿Qué infraestructura o sistema deseas auditar o proteger?`,
};

export default function ChatKowalski() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (textToSend?: string) => {
    const userMsg = (textToSend || input).trim();
    if (!userMsg || loading) return;
    setInput('');
    const next: Msg[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: next.slice(1).slice(-MAX_HISTORY) }),
      });
      const data = await res.json();
      if (!res.ok || !data?.text) throw new Error(data?.error || `HTTP ${res.status}`);
      setMessages((prev) => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Estamos recibiendo muchas peticiones. Llámanos o escríbenos directamente al ${PHONE_DISPLAY} y Andreu revisará tu caso al instante.`,
        },
      ]);
    }
    setLoading(false);
  };

  // Genera el enlace dinámico a WhatsApp con los últimos mensajes del usuario como contexto
  const getWhatsAppContextLink = () => {
    const userTexts = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.text)
      .slice(-2)
      .join(' | ');
    const text = userTexts
      ? `Hola Andreu, estuve hablando con Kowalski en la web de OPSEC sobre: "${userTexts}". Me gustaría coordinar una auditoría/llamada.`
      : 'Hola Andreu, te contacto desde la web de Antarctic Lab OPSEC para consultar una auditoría de ciberseguridad.';
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen ? (
        <div className="bg-slate-950 border border-emerald-500/30 w-84 sm:w-96 h-[30rem] rounded-xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Header */}
          <div className="bg-slate-900 border-b border-slate-800 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <img
                src={pinguKowalski}
                alt="Kowalski"
                className="w-8 h-8 rounded-full border border-emerald-400/50 object-cover"
              />
              <div>
                <span className="font-semibold text-sm flex items-center gap-1.5 text-slate-100">
                  Kowalski AI
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <p className="text-[11px] text-emerald-400/80 font-mono">OPSEC & Pentesting</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
              className="text-slate-400 hover:text-white text-lg px-2 py-0.5 rounded transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5 text-sm bg-slate-950/90">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-lg max-w-[88%] text-[13px] leading-relaxed ${
                  m.role === 'ai'
                    ? 'bg-slate-900/90 text-slate-200 border border-slate-800 self-start'
                    : 'bg-emerald-600/90 text-white font-medium ml-auto self-end'
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-pulse">
                <span>🐧</span> Analizando infraestructura...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Botones de acción rápida: WhatsApp y Llamada */}
          <div className="grid grid-cols-2 gap-1.5 p-2 bg-slate-900/95 border-t border-slate-800">
            <a
              href={getWhatsAppContextLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-2 rounded transition-colors text-center"
            >
              <span>💬</span> WhatsApp Directo
            </a>
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold py-2 px-2 rounded transition-colors text-center border border-slate-700"
            >
              <span>📞</span> {PHONE_DISPLAY}
            </a>
          </div>

          {/* Input */}
          <div className="p-2.5 bg-slate-950 border-t border-slate-800 flex items-center gap-1.5">
            <input
              className="flex-1 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Describe tu sistema o consulta..."
              maxLength={500}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-colors uppercase tracking-wide"
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat con Kowalski"
          className="relative bg-slate-900 border-2 border-emerald-500/40 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all overflow-hidden group"
        >
          <img
            src={pinguKowalski}
            alt="Kowalski"
            className="w-full h-full object-cover group-hover:opacity-90"
          />
          <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-ping" />
          <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
        </button>
      )}
    </div>
  );
}
