import { useState } from "react";
import { P } from "../../shared";

export function NeedsPanel({ selectedSenior, onAddNeed, onDeleteNeed }) {
    const [newNeedName, setNewNeedName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newNeedName) return;

        onAddNeed({ necesidad: newNeedName });
        setNewNeedName("");
    };

    return (
        <div className="bg-white rounded-3xl p-6 border shadow-sm space-y-4" style={{ borderColor: P.baseNeutral }}>
            <h3 className="font-bold text-sm border-b pb-2 text-left" style={{ color: P.dark }}>Necesidades Diarias (Clase Necesidad)</h3>

            <div className="flex flex-wrap gap-2 text-left">
                {(selectedSenior.necesidades || []).map(n => (
                    <div key={n.id} className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border" style={{ backgroundColor: `${P.secondary}12`, borderColor: P.secondary, color: P.secondary }}>
                        <span>{n.necesidad}</span>
                        <button onClick={() => onDeleteNeed(n.id)} className="text-red-500 hover:text-red-700 ml-1 font-extrabold focus:outline-none">×</button>
                    </div>
                ))}
                {(selectedSenior.necesidades || []).length === 0 && (
                    <p className="text-xs italic text-center w-full py-2" style={{ color: P.neutralDark }}>Sin necesidades asignadas.</p>
                )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 pt-2 border-t text-left" style={{ borderColor: P.baseNeutral }}>
                <input type="text" required value={newNeedName} onChange={e => setNewNeedName(e.target.value)} placeholder="Ej. Paseo diario" className="flex-1 px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                <button type="submit" className="px-3 py-2 rounded-xl text-white font-bold text-xs hover:opacity-95 transition-opacity" style={{ backgroundColor: P.primary }}>+</button>
            </form>
        </div>
    );
}
