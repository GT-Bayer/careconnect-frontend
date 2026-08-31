import { Star } from "lucide-react";
import { P } from "../../shared";

export function SectionCaregivers({ navigate, savedCaregivers = [] }) {
    return (<div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: "#f8fbfd" }}>
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6" style={{ color: P.dark }}>Mis Cuidadores Guardados</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {savedCaregivers.map(c => (
                    <div key={c.id} className="bg-white rounded-2xl p-5 border flex gap-4" style={{ borderColor: P.baseNeutral }}>
                        <img src={c.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-sm truncate" style={{ color: P.dark }}>{c.name}</h3>
                            <div className="flex items-center gap-1 mt-1 text-xs" style={{ color: P.neutralDark }}>
                                <Star className="w-3.5 h-3.5 fill-current" style={{ color: P.accent }} />
                                <span className="font-bold" style={{ color: P.dark }}>{c.rating}</span>
                                <span>({c.reviews} reseñas)</span>
                            </div>
                            <div className="flex gap-1.5 flex-wrap mt-2.5">
                                {c.specialties.slice(0, 2).map(s => (
                                    <span key={s} className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ backgroundColor: '#e8f4f8', color: P.primary }}>{s}</span>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-4 pt-4 border-t" style={{ borderColor: P.baseNeutral }}>
                                <button onClick={() => navigate(`/cuidador/${c.id}`)} className="flex-1 py-1.5 rounded-xl text-xs font-semibold border" style={{ borderColor: P.baseNeutral, color: P.dark }}>Ver perfil</button>
                                <button onClick={() => navigate(`/cuidador/${c.id}`)} className="flex-1 py-1.5 rounded-xl text-xs font-bold text-white" style={{ backgroundColor: P.primary }}>Reservar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}
