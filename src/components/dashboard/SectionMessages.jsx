import { useState, useEffect, useRef } from "react";
import { Search, MessageSquare, Phone, Send } from "lucide-react";
import { P } from "../../shared";

import { INITIAL_MESSAGES } from "../../shared";

export function SectionMessages() {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: "María González",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&auto=format",
            time: "09:33",
            lastMessage: "Excelente! Prepararé una rutina personalizada..."
        }
    ]);
    const [selectedChatId, setSelectedChatId] = useState(1);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [text, setText] = useState("");
    const chatRef = useRef(null);

    const handleSend = () => {
        if (!text.trim()) return;
        setMessages(prev => [...prev, { id: prev.length + 1, sender: "user", text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setText("");
    };

    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    const activeChat = chats.find(c => c.id === selectedChatId);

    return (
        <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-80 border-r flex flex-col" style={{ borderColor: P.baseNeutral, backgroundColor: "white" }}>
                <div className="p-4 border-b flex items-center gap-2" style={{ borderColor: P.baseNeutral }}>
                    <Search className="w-4 h-4" style={{ color: P.neutralDark }} />
                    <input placeholder="Buscar chat..." className="text-sm outline-none w-full" />
                </div>
                <div className="flex-1 overflow-y-auto">
                    {chats.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-5">
                            <MessageSquare className="w-8 h-8 text-slate-300 mb-2" style={{ color: P.neutralDark }} />
                            <p className="text-xs font-semibold" style={{ color: P.neutralDark }}>No hay conversaciones activas</p>
                        </div>
                    ) : (
                        chats.map(c => (
                            <div key={c.id} onClick={() => setSelectedChatId(c.id)} className="flex items-center gap-3 p-4 cursor-pointer hover:bg-neutral-50 transition-colors" style={{ backgroundColor: selectedChatId === c.id ? "#e8f4f8" : "transparent" }}>
                                <img src={c.image} className="w-10 h-10 rounded-full object-cover" alt="" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline">
                                        <p className="text-sm font-semibold truncate" style={{ color: P.dark }}>{c.name}</p>
                                        <span className="text-[10px]" style={{ color: P.neutralDark }}>{c.time}</span>
                                    </div>
                                    <p className="text-xs truncate" style={{ color: P.neutralDark }}>{c.lastMessage}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Chat Area */}
            {!activeChat ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-slate-50/50">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                        <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="font-extrabold text-sm" style={{ color: P.dark }}>Bandeja de Entrada</h3>
                    <p className="text-xs mt-1.5 max-w-xs" style={{ color: P.neutralDark }}>Selecciona una conversación del listado o inicia un nuevo contacto desde el directorio público para coordinar el servicio.</p>
                </div>
            ) : (
                <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: "#f8fbfd" }}>
                    <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: P.baseNeutral, backgroundColor: "white" }}>
                        <div className="flex items-center gap-3">
                            <img src={activeChat.image} className="w-10 h-10 rounded-full object-cover" alt="" />
                            <div>
                                <p className="text-sm font-bold" style={{ color: P.dark }}>{activeChat.name}</p>
                                <p className="text-xs text-green-600 font-semibold">En línea ahora</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold hover:bg-slate-50 transition-colors" style={{ borderColor: P.baseNeutral, color: P.dark }}>
                            <Phone className="w-3.5 h-3.5" /> Llamar
                        </button>
                    </div>

                    <div ref={chatRef} className="flex-1 overflow-y-auto p-6 space-y-4">
                        {messages.map(m => (
                            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className="max-w-[70%] p-3.5 rounded-2xl text-sm shadow-sm" style={{
                                    backgroundColor: m.sender === 'user' ? P.primary : 'white',
                                    color: m.sender === 'user' ? 'white' : P.dark,
                                    borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                }}>
                                    <p>{m.text}</p>
                                    <span className="text-[9px] block text-right mt-1 opacity-70">{m.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t" style={{ borderColor: P.baseNeutral, backgroundColor: "white" }}>
                        <div className="flex gap-2 items-center">
                            <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Escribe un mensaje..." className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: P.baseNeutral }} />
                            <button onClick={handleSend} className="p-3 rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: P.primary }}>
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
