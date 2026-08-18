import React, { useEffect, useRef, useState } from 'react';
import pinguKowalski from '../assets/pinguKowalski.jpg';

type Msg = { role: 'user' | 'ai'; text: string };

const PHONE_DISPLAY = '654 101 013';
const PHONE_TEL = 'tel:+34654101013';
// Ventana de contexto corta: solo se envían los últimos turnos al servidor.
const MAX_HISTORY = 6;

const WELCOME: Msg = {
  role: 'ai',
  text: `Soy Kowalski, de Antarctic Lab. Cuéntame qué te preocupa de la seguridad de tu empresa o llámanos directamente al ${PHONE_DISPLAY}.`,
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

  const sendMessage = async () => {
    const userMsg = input.trim();
    if (!userMsg || loading) return;
    setInput('');
    const next: Msg[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Solo los últimos turnos (sin el saludo inicial) para mantener el contexto breve.
        body: JSON.stringify({ history: next.slice(1).slice(-MAX_HISTORY) }),
      });
      const data = await res.json();
      if (!res.ok || !data?.text) throw new Error(data?.error || `HTTP ${res.status}`);
      setMessages(prev => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'ai', text: `Ahora mismo no puedo responder. Llámanos al ${PHONE_DISPLAY} y lo vemos en un minuto.` },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen ? (
        <div className="bg-white border-2 border-slate-900 w-80 h-[26rem] rounded-lg flex flex-col shadow-2xl overflow-hidden">
          <div className="bg-slate-900 text-white p-3 flex justify-between items-center">
            <span>🐧 Kowalski - Antarctic Lab</span>
            <button onClick={() => setIsOpen(false)} aria-label="Cerrar chat">×</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'ai' ? 'bg-blue-100 text-slate-800' : 'bg-slate-800 text-white'} p-2 rounded-lg`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-xs italic text-slate-500 animate-pulse">Kowalski escribiendo...</div>}
            <div ref={bottomRef} />
          </div>
          <a
            href={PHONE_TEL}
            className="block bg-emerald-600 hover:bg-emerald-700 text-white text-center text-sm font-bold py-2 transition-colors"
          >
            📞 Llamar ahora: {PHONE_DISPLAY}
          </a>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 border p-1 text-sm outline-none text-slate-900"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe tu mensaje..."
              maxLength={500}
            />
            <button onClick={sendMessage} disabled={loading} className="bg-slate-900 text-white px-3 py-1 ml-1 text-xs uppercase font-bold disabled:opacity-50">Enviar</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat con Kowalski"
          className="bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform overflow-hidden"
        >
          <img
            src={pinguKowalski}
            alt="Kowalski"
            className="w-full h-full object-cover"
          />
        </button>
      )}
    </div>
  );
}
