import { useState } from "react";
import { Plus, CreditCard, Trash2 } from "lucide-react";
import { P, formatARS } from "../../shared";

export function PaymentTab() {
    const [paymentMethods] = useState([]);
    const [paymentHistory] = useState([]);

    return (
        <div className="flex flex-col gap-4 text-left">
            <div className="rounded-2xl p-5 bg-white border" style={{ borderColor: P.baseNeutral }}>
                <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-sm" style={{ color: P.dark, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Métodos de pago</p>
                    <button className="flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 cursor-pointer" style={{ color: P.primary }}>
                        <Plus className="w-3.5 h-3.5" />Agregar
                    </button>
                </div>
                {paymentMethods.length === 0 ? (
                    <p className="text-xs italic py-4 text-center text-slate-500">No hay métodos de pago registrados</p>
                ) : (
                    paymentMethods.map(({ type, last4, expiry, primary }) => (
                        <div key={last4} className="flex items-center gap-4 p-4 rounded-xl mb-3 border bg-white" style={{ borderColor: primary ? P.primary : P.baseNeutral, backgroundColor: primary ? "#e8f4f8" : "white" }}>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: P.secondary }}>
                                <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold" style={{ color: P.dark }}>{type} •••• {last4}</p>
                                <p className="text-xs" style={{ color: P.neutralDark }}>Vence {expiry}</p>
                            </div>
                            {primary && <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: P.primary, color: "white" }}>Principal</span>}
                            <button className="p-1.5 rounded-lg hover:opacity-70 cursor-pointer" style={{ color: P.neutralDark }}>
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="rounded-2xl p-5 bg-white border" style={{ borderColor: P.baseNeutral }}>
                <p className="font-bold text-sm mb-4" style={{ color: P.dark }}>Historial de pagos</p>
                {paymentHistory.length === 0 ? (
                    <p className="text-xs italic py-4 text-center text-slate-500">No hay transacciones registradas</p>
                ) : (
                    paymentHistory.map(({ desc, date, amount, status }, i) => (
                        <div key={i} className="flex items-center justify-between py-3" style={{ borderBottom: i < paymentHistory.length - 1 ? `1px solid ${P.baseNeutral}` : "none" }}>
                            <div>
                                <p className="text-sm font-medium" style={{ color: P.dark }}>{desc}</p>
                                <p className="text-xs" style={{ color: P.neutralDark }}>{date}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold" style={{ color: P.dark }}>{formatARS(amount)}</p>
                                <span className="text-xs font-medium" style={{ color: "#16a34a" }}>{status}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
