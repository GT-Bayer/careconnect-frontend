import { useState } from "react";
import { Edit } from "lucide-react";
import { P } from "../../shared";
import { PROVINCIAS_ARGENTINA } from "../../shared/locations";

export function ProfileTab({ onProfileUpdate }) {
    // Cargar datos reales desde localStorage
    const storedName = localStorage.getItem("user_name") || "";
    const storedEmail = localStorage.getItem("user_email") || "";
    const nameParts = storedName.split(" ");

    const [nombre] = useState(nameParts[0] || "");
    const [apellido] = useState(nameParts.slice(1).join(" ") || "");
    const [email] = useState(storedEmail);
    const [telefono, setTelefono] = useState(localStorage.getItem("user_phone") || "");
    const [direccion, setDireccion] = useState(localStorage.getItem("user_address") || "");
    const [provincia, setProvincia] = useState(localStorage.getItem("user_province") || "");
    const [ciudad, setCiudad] = useState(localStorage.getItem("user_city") || "");
    const [cp, setCp] = useState(localStorage.getItem("user_cp") || "");
    const [notas, setNotas] = useState(localStorage.getItem("user_notes") || "");

    const [saveState, setSaveState] = useState("normal");

    const handleSaveProfile = () => {
        setSaveState("saving");
        const fullName = `${nombre} ${apellido}`.trim();
        localStorage.setItem("user_name", fullName);
        localStorage.setItem("user_email", email);
        localStorage.setItem("user_phone", telefono);
        localStorage.setItem("user_address", direccion);
        localStorage.setItem("user_province", provincia);
        localStorage.setItem("user_city", ciudad);
        localStorage.setItem("user_cp", cp);
        localStorage.setItem("user_notes", notas);

        if (onProfileUpdate) {
            onProfileUpdate(fullName);
        }

        setTimeout(() => {
            setSaveState("saved");
            setTimeout(() => {
                setSaveState("normal");
            }, 2000);
        }, 800);
    };

    return (
        <div className="rounded-2xl p-6 bg-white border" style={{ borderColor: P.baseNeutral }}>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b" style={{ borderColor: P.baseNeutral }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0" style={{ backgroundColor: P.secondary }}>
                    {nombre ? nombre[0].toUpperCase() : "-"}
                </div>
                <div className="text-left">
                    <p className="font-bold text-slate-800">{nombre || apellido ? `${nombre} ${apellido}` : "Sin Nombre Definido"}</p>
                    <p className="text-sm text-slate-500">{email || "sin-email@email.com"}</p>
                </div>
                <button className="ml-auto flex items-center gap-1.5 px-4 py-2 border rounded-xl text-sm font-semibold hover:opacity-80 cursor-pointer" style={{ border: `1px solid ${P.baseNeutral}`, color: P.dark }}>
                    <Edit className="w-3.5 h-3.5" /> Editar foto
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {/* Nombre */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Nombre</label>
                    <input type="text" value={nombre} disabled className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed border" style={{ borderColor: P.baseNeutral, color: "#94a3b8", backgroundColor: "#f8fafc" }} />
                </div>
                {/* Apellido */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Apellido</label>
                    <input type="text" value={apellido} disabled className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed border" style={{ borderColor: P.baseNeutral, color: "#94a3b8", backgroundColor: "#f8fafc" }} />
                </div>
                {/* Correo */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Correo electrónico</label>
                    <input type="email" value={email} disabled className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed border" style={{ borderColor: P.baseNeutral, color: "#94a3b8", backgroundColor: "#f8fafc" }} />
                </div>
                {/* Teléfono */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Teléfono</label>
                    <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all bg-white border" style={{ borderColor: P.baseNeutral, color: P.dark }} />
                </div>
                {/* Dirección */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Dirección</label>
                    <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all bg-white border" style={{ borderColor: P.baseNeutral, color: P.dark }} />
                </div>
                {/* Provincia */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Provincia</label>
                    <select 
                        value={provincia} 
                        onChange={e => {
                            setProvincia(e.target.value);
                        }} 
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all bg-white border cursor-pointer" 
                        style={{ borderColor: P.baseNeutral, color: P.dark }}
                    >
                        <option value="">Selecciona una provincia</option>
                        {Object.keys(PROVINCIAS_ARGENTINA).map(p => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </div>
                {/* Ciudad */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Ciudad / Barrio</label>
                    <select 
                        value={ciudad} 
                        onChange={e => setCiudad(e.target.value)} 
                        disabled={!provincia}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all bg-white disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed border cursor-pointer" 
                        style={{ borderColor: P.baseNeutral, color: P.dark }}
                    >
                        <option value="">Selecciona una ciudad</option>
                        {(PROVINCIAS_ARGENTINA[provincia] || []).map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                {/* CP */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Código postal</label>
                    <input type="text" value={cp} onChange={e => setCp(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all bg-white border" style={{ borderColor: P.baseNeutral, color: P.dark }} />
                </div>
            </div>
            <div className="mt-4 text-left">
                <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>Notas adicionales para cuidadores</label>
                <textarea rows={3} value={notas} onChange={e => setNotas(e.target.value)} placeholder="Ej. Mi padre tiene 78 años. Camina con bastón. Toma medicación a las 8hs y 20hs..." className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none resize-none border" style={{ borderColor: P.baseNeutral, color: P.dark }} />
            </div>
            <div className="flex justify-end mt-5">
                <button 
                    onClick={handleSaveProfile} 
                    disabled={saveState === "saving"}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 active:scale-[0.98] disabled:opacity-85 cursor-pointer" 
                    style={{ 
                        backgroundColor: saveState === "saved" ? "#10b981" : (saveState === "saving" ? P.neutralDark : P.primary) 
                    }}
                >
                    {saveState === "saving" ? "Guardando..." : (saveState === "saved" ? "¡Guardado con éxito! ✓" : "Guardar cambios")}
                </button>
            </div>
        </div>
    );
}
