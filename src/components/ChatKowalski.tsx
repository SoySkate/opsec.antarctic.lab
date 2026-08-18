import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import pinguKowalski from '../assets/pinguKowalski.jpg';

export default function ChatKowalski() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Informe de situación. Soy Kowalski. ¿Qué opciones necesitas para tu negocio?' }]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { mensaje: userMsg }
      });

      if (error) throw error;

      setMessages(prev => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Error en el laboratorio. Inténtalo de nuevo.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen ? (
        <div className="bg-white border-2 border-slate-900 w-80 h-96 rounded-lg flex flex-col shadow-2xl overflow-hidden">
          <div className="bg-slate-900 text-white p-3 flex justify-between items-center">
            <span>🐧 Puesto de Mando - Antartic Lab</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'ai' ? 'bg-blue-100 text-slate-800' : 'bg-slate-800 text-white'} p-2 rounded-lg`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-xs italic text-slate-500 animate-pulse">Kowalski analizando opciones...</div>}
          </div>
          <div className="p-2 border-t flex">
            <input 
              className="flex-1 border p-1 text-sm outline-none" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={sendMessage} className="bg-slate-900 text-white px-3 py-1 ml-1 text-xs uppercase font-bold">Enviar</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
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
