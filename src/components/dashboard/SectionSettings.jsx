import { useState } from "react";
import { P } from "../../shared";
import { ProfileTab } from "../familiar/ProfileTab";
import { NotificationsTab } from "../familiar/NotificationsTab";
import { PaymentTab } from "../familiar/PaymentTab";
import { SecurityTab } from "../familiar/SecurityTab";

export function SectionSettings({ onProfileUpdate }) {
    const [tab, setTab] = useState("profile");

    return (
        <div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: "#f8fbfd" }}>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-left">
                    <h1 className="text-2xl font-bold" style={{ color: P.dark }}>Configuración</h1>
                    <p className="text-sm mt-0.5" style={{ color: P.neutralDark }}>Administrá tu cuenta y preferencias</p>
                </div>

                <div className="flex gap-1 p-1 rounded-xl mb-6 bg-white border" style={{ borderColor: P.baseNeutral }}>
                    {[
                        ["profile", "Perfil"],
                        ["notifications", "Notificaciones"],
                        ["payment", "Pagos"],
                        ["security", "Seguridad"],
                    ].map(([id, label]) => (
                        <button 
                            key={id} 
                            onClick={() => setTab(id)} 
                            className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer" 
                            style={{ 
                                backgroundColor: tab === id ? P.primary : "transparent", 
                                color: tab === id ? "white" : P.neutralDark 
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {tab === "profile" && <ProfileTab onProfileUpdate={onProfileUpdate} />}
                {tab === "notifications" && <NotificationsTab />}
                {tab === "payment" && <PaymentTab />}
                {tab === "security" && <SecurityTab />}
            </div>
        </div>
    );
}
