import { MapPin } from "lucide-react";
import { P, formatARS } from "../../shared";

export function ProfessionalCard({ caregiver, onSelect }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border transition-all hover:-translate-y-1.5 shadow-sm hover:shadow-md" style={{ borderColor: P.baseNeutral }}>
      {/* Card image */}
      <div className="relative h-44 bg-slate-100">
        <img src={caregiver.image} alt={caregiver.name} className="w-full h-full object-cover"/>
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span />
          {!caregiver.available && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              No disponible
            </span>
          )}
        </div>
      </div>

      <div className="p-4 text-left">
        {/* Name + Rating */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-extrabold text-base text-slate-800" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{caregiver.name}</h3>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
              <span className="text-xs text-slate-500">{caregiver.location}</span>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="flex items-center gap-1 justify-end">
              <span className="text-xs font-extrabold text-slate-800">{caregiver.rating}</span>
            </div>
            <span className="text-[10px] text-slate-400">({caregiver.reviews} reseñas)</span>
          </div>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {caregiver.specialties.slice(0, 2).map((s) => (
            <span key={s} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-100">
              {s}
            </span>
          ))}
          {caregiver.specialties.length > 2 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-500">
              +{caregiver.specialties.length - 2}
            </span>
          )}
        </div>

        {/* Hourly rate */}
        <div className="flex items-center justify-between py-2.5 px-4 rounded-xl mb-3.5" style={{ backgroundColor: "#f8fbfd" }}>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Tarifa por hora</p>
            <p className="font-extrabold text-base" style={{ color: P.primary, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Desde {formatARS(caregiver.hourlyRate)}<span className="text-xs font-medium ml-0.5">/h</span>
            </p>
          </div>
          <span className="text-[10px] px-2 py-1 rounded-full font-bold bg-sky-50 text-sky-700">ARS</span>
        </div>

        <button onClick={() => onSelect(caregiver)} className="w-full py-2 rounded-xl text-xs font-bold border transition-all hover:bg-slate-50" style={{ borderColor: P.primary, color: P.primary }}>
          Ver Perfil
        </button>
      </div>
    </div>
  );
}
