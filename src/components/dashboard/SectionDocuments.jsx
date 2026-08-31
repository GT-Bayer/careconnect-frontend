import { Download } from "lucide-react";
import { P } from "../../shared";

export function SectionDocuments({ documents = [] }) {
    return (<div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: "#f8fbfd" }}>
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6" style={{ color: P.dark }}>Mis Documentos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {documents.map(d => (
                    <div key={d.id} className="bg-white rounded-2xl p-4 border flex flex-col justify-between" style={{ borderColor: P.baseNeutral }}>
                        <div>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{
                                backgroundColor: d.type === 'contract' ? '#e8f4f8' : d.type === 'invoice' ? '#e8f6ee' : '#f0f4f6',
                                color: d.type === 'contract' ? P.primary : d.type === 'invoice' ? '#16a34a' : P.neutralDark,
                            }}>
                                {d.type === 'contract' ? 'Contrato' : d.type === 'invoice' ? 'Factura' : 'Otros'}
                            </span>
                            <h4 className="font-semibold text-sm mt-3 text-ellipsis line-clamp-2" style={{ color: P.dark }}>{d.name}</h4>
                            <p className="text-xs mt-1" style={{ color: P.neutralDark }}>{d.date} · {d.size}</p>
                        </div>
                        <button className="w-full mt-4 py-2 border rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors hover:bg-neutral-50" style={{ borderColor: P.baseNeutral, color: P.dark }}>
                            <Download className="w-3.5 h-3.5" /> Descargar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}
