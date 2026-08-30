import React, { useEffect, useState } from "react";
import { Users, UserCheck, Clock, Ban, RefreshCw, Eye, CheckCircle } from "lucide-react";
import { adminService } from "../../services/adminService";
import UserModerationTable from "../../components/admin/UserModerationTable";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { P } from "../../components/shared";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("inicio_admin");
    const [metricas, setMetricas] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cargarDatos = async () => {
        try {
            setLoading(true);
            setError(null);
            const [resMetricas, resUsuarios] = await Promise.all([
                adminService.getMetricas(),
                adminService.getUsuarios(),
            ]);
            setMetricas(resMetricas);
            setUsuarios(resUsuarios);
        } catch (err) {
            console.error(err);
            setError("No se pudo cargar la información del panel administrativo.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarDatos();
    }, []);

    const handleApprove = async (id, nombreCompleto) => {
        if (!window.confirm(`¿Aprobar y habilitar a ${nombreCompleto}?`)) return;
        try {
            await adminService.aprobarUsuario(id);
            await cargarDatos();
        } catch (err) {
            alert("Error al aprobar usuario");
        }
    };

    const handleSuspend = async (id, nombreCompleto) => {
        if (!window.confirm(`¿Seguro que deseas suspender a ${nombreCompleto}?`)) return;
        try {
            await adminService.suspenderUsuario(id);
            await cargarDatos();
        } catch (err) {
            alert("Error al suspender usuario");
        }
    };

    const cards = [
        { label: "Total Registrados", val: metricas?.totalUsuarios ?? 0, icon: Users, color: P?.primary || "#0284c7", bg: "#e0f2fe" },
        { label: "Usuarios Activos", val: metricas?.usuariosActivos ?? 0, icon: UserCheck, color: "#16a34a", bg: "#dcfce7" },
        { label: "Pendientes", val: metricas?.pendientesVerificacion ?? 0, icon: Clock, color: P?.accent || "#ea580c", bg: "#ffedd5" },
        { label: "Suspendidos", val: metricas?.usuariosSuspendidos ?? 0, icon: Ban, color: "#dc2626", bg: "#fee2e2" },
    ];

    const cuidadoresPendientes = usuarios.filter(u => (u.rol || u.role) === "CUIDADOR" && (u.estado || u.status) !== "ACTIVO");

    return (
        <div className="flex h-screen overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 overflow-y-auto" style={{ backgroundColor: "#f8fbfd" }}>
                <div className="p-8 max-w-7xl mx-auto space-y-6">
                    {/* Header común */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold" style={{ color: P?.dark || "#0f172a" }}>
                                {activeTab === "inicio_admin" && "Panel de Métricas"}
                                {activeTab === "moderacion" && "Verificaciones Profesionales"}
                                {activeTab === "gestion_usuarios" && "Gestión de Usuarios"}
                            </h1>
                            <p className="text-sm mt-0.5" style={{ color: P?.neutralDark || "#64748b" }}>
                                Supervisión en tiempo real y moderación del sistema
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={cargarDatos}
                            disabled={loading}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold border transition-all hover:bg-slate-50 cursor-pointer disabled:opacity-50"
                            style={{ borderColor: P?.baseNeutral || "#e2e8f0", color: P?.dark || "#0f172a" }}
                        >
                            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                            Actualizar
                        </button>
                    </div>

                    {error && (
                        <div className="p-4 rounded-2xl text-xs font-bold text-red-700 bg-red-100 border border-red-200">
                            {error}
                        </div>
                    )}

                    {/* VISTA 1: MÉTRICAS */}
                    {activeTab === "inicio_admin" && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {cards.map((c, i) => {
                                    const Icon = c.icon;
                                    return (
                                        <div key={i} className="p-5 rounded-3xl bg-white border flex items-center gap-4 shadow-xs" style={{ borderColor: P?.baseNeutral || "#e2e8f0" }}>
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.bg }}>
                                                <Icon className="w-6 h-6" style={{ color: c.color }} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold" style={{ color: P?.neutralDark || "#64748b" }}>{c.label}</p>
                                                <p className="text-2xl font-black mt-0.5" style={{ color: P?.dark || "#0f172a" }}>{loading ? "..." : c.val}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-white rounded-3xl p-6 border shadow-xs" style={{ borderColor: P?.baseNeutral || "#e2e8f0" }}>
                                <h3 className="font-bold text-sm mb-4" style={{ color: P?.dark || "#0f172a" }}>Actividad global del sistema</h3>
                                <div className="h-64 relative pt-4 flex items-center justify-center">
                                    <svg className="w-full h-full" viewBox="0 0 600 200">
                                        <defs>
                                            <linearGradient id="gradAdmin" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor={P?.primary || "#0284c7"} stopOpacity="0.25" />
                                                <stop offset="100%" stopColor={P?.primary || "#0284c7"} stopOpacity="0.0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M50 150 Q 150 80, 250 120 T 450 40 T 550 60" fill="none" stroke={P?.primary || "#0284c7"} strokeWidth="3" />
                                        <path d="M50 150 Q 150 80, 250 120 T 450 40 T 550 60 L 550 200 L 50 200 Z" fill="url(#gradAdmin)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* VISTA 2: VERIFICACIONES */}
                    {activeTab === "moderacion" && (
                        <div className="space-y-4">
                            {cuidadoresPendientes.length === 0 ? (
                                <div className="bg-white rounded-3xl p-12 text-center border" style={{ borderColor: P?.baseNeutral || "#e2e8f0" }}>
                                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                                    <p className="text-base font-bold" style={{ color: P?.dark || "#0f172a" }}>Todos los perfiles están al día</p>
                                    <p className="text-xs text-slate-500 mt-1">No hay cuidadores pendientes de validación o con certificados por revisar.</p>
                                </div>
                            ) : (
                                cuidadoresPendientes.map((c) => (
                                    <div key={c.id} className="bg-white rounded-2xl p-5 border flex justify-between items-center" style={{ borderColor: P?.baseNeutral || "#e2e8f0" }}>
                                        <div>
                                            <h3 className="font-bold text-sm" style={{ color: P?.dark || "#0f172a" }}>{c.nombre || c.name}</h3>
                                            <p className="text-xs text-slate-500">{c.email}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleSuspend(c.id, c.nombre || c.name)} className="px-3 py-1.5 border rounded-xl text-xs font-bold text-red-600 hover:bg-red-50">
                                                Rechazar
                                            </button>
                                            <button onClick={() => handleApprove(c.id, c.nombre || c.name)} className="px-4 py-1.5 rounded-xl text-xs font-bold text-white" style={{ backgroundColor: P?.primary || "#0284c7" }}>
                                                Aprobar Perfil
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* VISTA 3: USUARIOS */}
                    {activeTab === "gestion_usuarios" && (
                        <div className="space-y-3">
                            <UserModerationTable
                                users={usuarios}
                                onApprove={handleApprove}
                                onSuspend={handleSuspend}
                                loading={loading}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}