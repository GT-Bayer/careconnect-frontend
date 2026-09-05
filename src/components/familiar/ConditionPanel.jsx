import { useState } from "react";
import { Trash2 } from "lucide-react";
import { P } from "../../shared";

export function ConditionPanel({ selectedSenior, onAddCondition, onDeleteCondition }) {
    const [newCondName, setNewCondName] = useState("");
    const [newCondDate, setNewCondDate] = useState("");
    const [newCondNotes, setNewCondNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newCondName) return;

        onAddCondition({
            condicion: newCondName,
            diagnosticoFecha: newCondDate,
            notas: newCondNotes
        });

        setNewCondName("");
        setNewCondDate("");
        setNewCondNotes("");
    };

    return (
        <div className="bg-white rounded-3xl p-6 border shadow-sm space-y-5" style={{ borderColor: P.baseNeutral }}>
            <h3 className="font-bold text-base border-b pb-2.5 text-left" style={{ color: P.dark }}>Condiciones Médicas (Clase CondicionMedica)</h3>

            <div className="space-y-3">
                {(selectedSenior.condiciones || []).map(c => (
                    <div key={c.idCondicion} className="flex justify-between items-start p-4 rounded-xl border bg-neutral-50/50" style={{ borderColor: P.baseNeutral }}>
                        <div className="space-y-1 text-left">
                            <p className="text-sm font-bold text-slate-700">{c.condicion}</p>
                            <p className="text-xs" style={{ color: P.neutralDark }}>Fecha diagnóstico: {c.diagnosticoFecha}</p>
                            {c.notas && <p className="text-xs text-slate-500 italic mt-1">Notas: {c.notas}</p>}
                        </div>
                        <button onClick={() => onDeleteCondition(c.idCondicion)} className="p-1 rounded-lg text-red-500 hover:bg-red-50 focus:outline-none">
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ))}
                {(selectedSenior.condiciones || []).length === 0 && (
                    <p className="text-xs italic text-center py-4" style={{ color: P.neutralDark }}>No hay condiciones médicas registradas.</p>
                )}
            </div>

            {/* Add Condition form */}
            <form onSubmit={handleSubmit} className="p-4 rounded-2xl bg-neutral-50 border space-y-3" style={{ borderColor: P.baseNeutral }}>
                <p className="text-xs font-bold text-left" style={{ color: P.dark }}>Añadir Condición Médica</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <input type="text" required value={newCondName} onChange={e => setNewCondName(e.target.value)} placeholder="Condición (Ej. Artrosis)" className="px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    <input type="date" value={newCondDate} onChange={e => setNewCondDate(e.target.value)} className="px-3 py-2 text-xs border rounded-xl outline-none bg-white cursor-pointer focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                </div>
                <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap text-left">
                    <input type="text" value={newCondNotes} onChange={e => setNewCondNotes(e.target.value)} placeholder="Notas adicionales del diagnóstico" className="flex-1 px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    <button type="submit" className="px-4 py-2 rounded-xl text-white font-bold text-xs hover:opacity-95 transition-opacity" style={{ backgroundColor: P.primary }}>Añadir</button>
                </div>
            </form>
        </div>
    );
}
