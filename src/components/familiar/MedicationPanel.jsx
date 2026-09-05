import { useState } from "react";
import { Trash2 } from "lucide-react";
import { P } from "../../shared";

export function MedicationPanel({ selectedSenior, onAddMedication, onDeleteMedication, estaVigente }) {
    const [newMedName, setNewMedName] = useState("");
    const [newMedMono, setNewMedMono] = useState("");
    const [newMedDose, setNewMedDose] = useState("");
    const [newMedFreq, setNewMedFreq] = useState("");
    const [newMedTime, setNewMedTime] = useState("");
    const [newMedStart, setNewMedStart] = useState("");
    const [newMedEnd, setNewMedEnd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMedName || !newMedMono) return;

        onAddMedication({
            nombreMedicamento: newMedName,
            monodroga: newMedMono,
            dosis: newMedDose || "1 comprimido",
            frecuencia: newMedFreq || "Diaria",
            horario: newMedTime || "08:00",
            inicio: newMedStart || new Date().toISOString().split('T')[0],
            fin: newMedEnd || "2026-12-31"
        });

        setNewMedName("");
        setNewMedMono("");
        setNewMedDose("");
        setNewMedFreq("");
        setNewMedTime("");
        setNewMedStart("");
        setNewMedEnd("");
    };

    return (
        <div className="bg-white rounded-3xl p-6 border shadow-sm space-y-5" style={{ borderColor: P.baseNeutral }}>
            <h3 className="font-bold text-base border-b pb-2.5 text-left" style={{ color: P.dark }}>Medicamentos Recetados (Clase Medicamento)</h3>

            <div className="space-y-3">
                {(selectedSenior.medicamentos || []).map(m => {
                    const active = estaVigente(m.inicio, m.fin);
                    return (
                        <div key={m.idMedicamento} className="flex justify-between items-center p-3.5 rounded-xl border bg-neutral-50/50" style={{ borderColor: P.baseNeutral }}>
                            <div className="text-left">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold" style={{ color: P.dark }}>{m.nombreMedicamento}</span>
                                    <span className="text-[10px]" style={{ color: P.neutralDark }}>({m.monodroga})</span>
                                </div>
                                <p className="text-xs mt-1" style={{ color: P.neutralDark }}>
                                    Dosis: {m.dosis} · Frecuencia: {m.frecuencia} · Toma: <strong>{m.horario} hs</strong>
                                </p>
                                <p className="text-[10px] mt-0.5" style={{ color: P.neutralDark }}>
                                    Periodo: {m.inicio} al {m.fin}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${active ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {active ? "Vigente ✓" : "Vencido / Inactivo ⚠️"}
                                </span>
                                <button onClick={() => onDeleteMedication(m.idMedicamento)} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 focus:outline-none">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    );
                })}
                {(selectedSenior.medicamentos || []).length === 0 && (
                    <p className="text-xs italic text-center py-4" style={{ color: P.neutralDark }}>No hay medicamentos recetados.</p>
                )}
            </div>

            {/* Add Medication form */}
            <form onSubmit={handleSubmit} className="p-4 rounded-2xl bg-neutral-50 border space-y-3" style={{ borderColor: P.baseNeutral }}>
                <p className="text-xs font-bold text-left" style={{ color: P.dark }}>Añadir Medicamento / Receta</p>
                <div className="grid grid-cols-2 gap-3 text-left">
                    <input type="text" required value={newMedName} onChange={e => setNewMedName(e.target.value)} placeholder="Nombre comercial (Ej. Lotrial)" className="w-full px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    <input type="text" required value={newMedMono} onChange={e => setNewMedMono(e.target.value)} placeholder="Monodroga (Ej. Enalapril 10mg)" className="w-full px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                </div>
                <div className="grid grid-cols-3 gap-3 text-left">
                    <input type="text" value={newMedDose} onChange={e => setNewMedDose(e.target.value)} placeholder="Dosis (Ej. 1 comp)" className="w-full px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    <input type="text" value={newMedFreq} onChange={e => setNewMedFreq(e.target.value)} placeholder="Frecuencia (Ej. Cada 12h)" className="w-full px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    <input type="time" value={newMedTime} onChange={e => setNewMedTime(e.target.value)} className="w-full px-3 py-2 text-xs border rounded-xl outline-none bg-white focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                </div>
                <div className="flex gap-3 flex-wrap items-center text-left">
                    <div className="flex-1 min-w-32 flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-500">Inicio:</span>
                        <input type="date" value={newMedStart} onChange={e => setNewMedStart(e.target.value)} className="px-3 py-1.5 text-xs border rounded-xl outline-none bg-white flex-1 cursor-pointer focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    </div>
                    <div className="flex-1 min-w-32 flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-500">Fin:</span>
                        <input type="date" value={newMedEnd} onChange={e => setNewMedEnd(e.target.value)} className="px-3 py-1.5 text-xs border rounded-xl outline-none bg-white flex-1 cursor-pointer focus:border-slate-400" style={{ borderColor: P.baseNeutral }} />
                    </div>
                    <button type="submit" className="px-4 py-2 rounded-xl text-white font-bold text-xs hover:opacity-95 transition-opacity" style={{ backgroundColor: P.primary }}>Añadir Receta</button>
                </div>
            </form>
        </div>
    );
}
