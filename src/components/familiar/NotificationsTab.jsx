import { useState } from "react";
import { P } from "../../shared";

export function NotificationsTab() {
    const [notifs, setNotifs] = useState({ reservas: true, mensajes: true, recordatorios: true, marketing: false, email: true, sms: false });
    const toggle = (key) => setNotifs(prev => ({ ...prev, [key]: !prev[key] }));

    const Toggle = ({ on, onClick }) => (
        <button onClick={onClick} className="w-10 h-6 rounded-full p-0.5 transition-colors focus:outline-none cursor-pointer" style={{ backgroundColor: on ? P.primary : P.baseNeutral }}>
            <div className="w-5 h-5 rounded-full bg-white transition-transform" style={{ transform: on ? "translateX(16px)" : "translateX(0)" }} />
        </button>
    );

    return (
        <div className="rounded-2xl overflow-hidden bg-white border" style={{ borderColor: P.baseNeutral }}>
            <div className="px-6 py-4 border-b text-left" style={{ borderColor: P.baseNeutral }}>
                <p className="font-bold text-sm" style={{ color: P.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Alertas de actividad</p>
            </div>
            {[
                { key: "reservas", label: "Confirmaciones de reserva", desc: "Cuando una reserva es confirmada o cancelada" },
                { key: "mensajes", label: "Nuevos mensajes", desc: "Cuando un cuidador te envía un mensaje" },
                { key: "recordatorios", label: "Recordatorios de servicio", desc: "24 horas antes de cada servicio programado" },
                { key: "marketing", label: "Novedades y promociones", desc: "Ofertas especiales y nuevas funcionalidades" },
            ].map(({ key, label, desc }, i, arr) => (
                <div key={key} className="flex items-center justify-between px-6 py-4 border-b text-left" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${P.baseNeutral}` : "none" }}>
                    <div>
                        <p className="text-sm font-semibold" style={{ color: P.dark }}>{label}</p>
                        <p className="text-xs mt-0.5" style={{ color: P.neutralDark }}>{desc}</p>
                    </div>
                    <Toggle on={notifs[key]} onClick={() => toggle(key)} />
                </div>
            ))}
            <div className="px-6 py-4 border-t text-left" style={{ borderColor: P.baseNeutral }}>
                <p className="font-bold text-sm mb-3" style={{ color: P.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Canales de notificación</p>
                {[
                    { key: "email", label: "Correo electrónico", desc: "familia.garcia@email.com" },
                    { key: "sms", label: "SMS", desc: "+54 11 4567-8901" },
                ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between py-3">
                        <div>
                            <p className="text-sm font-semibold" style={{ color: P.dark }}>{label}</p>
                            <p className="text-xs" style={{ color: P.neutralDark }}>{desc}</p>
                        </div>
                        <Toggle on={notifs[key]} onClick={() => toggle(key)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
