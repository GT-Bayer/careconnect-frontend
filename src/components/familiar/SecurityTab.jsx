import { Lock } from "lucide-react";
import { P } from "../../shared";

export function SecurityTab() {
    return (
        <div className="flex flex-col gap-4 text-left">
            <div className="rounded-2xl p-5 bg-white border" style={{ borderColor: P.baseNeutral }}>
                <p className="font-bold text-sm mb-4" style={{ color: P.dark }}>Cambiar contraseña</p>
                <div className="flex flex-col gap-3">
                    {["Contraseña actual", "Nueva contraseña", "Confirmar nueva contraseña"].map(label => (
                        <div key={label}>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color: P.neutralDark }}>{label}</label>
                            <input type="password" placeholder="••••••••" className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none border bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral, color: P.dark }} />
                        </div>
                    ))}
                    <button className="self-start px-6 py-2.5 rounded-xl text-sm font-bold text-white mt-1 hover:opacity-90 cursor-pointer" style={{ backgroundColor: P.primary }}>Actualizar contraseña</button>
                </div>
            </div>
            <div className="rounded-2xl p-5 bg-white border" style={{ borderColor: P.baseNeutral }}>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="font-bold text-sm" style={{ color: P.dark }}>Verificación en dos pasos</p>
                        <p className="text-xs mt-0.5" style={{ color: P.neutralDark }}>Agrega una capa extra de seguridad a tu cuenta</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#fef0e6", color: P.accent }}>No activada</span>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 cursor-pointer" style={{ backgroundColor: P.secondary }}>
                    <Lock className="w-4 h-4" />Activar 2FA
                </button>
            </div>
        </div>
    );
}
