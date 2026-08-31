import api from "../api/client";
import { CAREGIVERS } from "../shared";

export const searchProfessionals = async () => {
  try {
    const responseC = await api.get("/v1/cuidadores");
    const caregivers = responseC.data.map(c => ({
      ...c,
      id: c.id || c.idCuidador,
      name: c.nombre || "Cuidador Profesional",
      rating: c.calificacionPromedio || 4.5,
      reviews: c.totalResenas || 10,
      hourlyRate: c.tarifaHora || 3000,
      location: c.zonaPrincipal || "Argentina",
      specialties: c.especialidadesIds || [],
      description: c.descripcion || "",
      verified: c.visible || true,
      tipo: "cuidador",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=60"
    }));

    let nurses = [];
    try {
      const responseN = await api.get("/v1/enfermeros");
      nurses = responseN.data.map(n => ({
        ...n,
        id: n.id || n.idEnfermero,
        name: n.nombre || "Enfermero Matriculado",
        rating: n.calificacionPromedio || 4.9,
        reviews: n.totalResenas || 15,
        hourlyRate: n.tarifaHora || 4500,
        location: n.zonaPrincipal || "Argentina",
        specialties: n.especialidadesIds || ["Enfermería"],
        description: n.descripcion || "",
        verified: n.visible || true,
        tipo: "enfermero",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=60"
      }));
    } catch (e) {
      console.warn("No se pudieron obtener enfermeros:", e);
    }

    const merged = [...caregivers, ...nurses];
    if (merged.length > 0) {
      return merged;
    }
    return CAREGIVERS;
  } catch (err) {
    console.warn("Error al buscar profesionales. Usando fallback local:", err);
    return CAREGIVERS;
  }
};
