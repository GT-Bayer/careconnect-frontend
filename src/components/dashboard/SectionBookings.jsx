import { P, formatARS } from "../../shared";

export function SectionBookings({ navigate, bookings = [] }) {
    return (<div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: "#f8fbfd" }}>
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6" style={{ color: P.dark }}>Historial de Reservas</h1>
            <div className="bg-white rounded-3xl border overflow-hidden" style={{ borderColor: P.baseNeutral }}>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b text-xs font-bold uppercase tracking-wider" style={{ borderColor: P.baseNeutral, color: P.neutralDark, backgroundColor: P.neutralLight }}>
                            <th className="p-4">ID Reserva</th>
                            <th className="p-4">Cuidador</th>
                            <th className="p-4">Servicio</th>
                            <th className="p-4">Fechas</th>
                            <th className="p-4">Monto</th>
                            <th className="p-4">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y text-sm" style={{ divideColor: P.baseNeutral }}>
                        {bookings.map(b => (
                            <tr key={b.id} className="hover:bg-neutral-50/50">
                                <td className="p-4 font-bold" style={{ color: P.dark }}>{b.id}</td>
                                <td className="p-4 flex items-center gap-3">
                                    <img src={b.caregiver.image} className="w-8 h-8 rounded-full object-cover" alt="" />
                                    <span className="font-semibold" style={{ color: P.dark }}>{b.caregiver.name}</span>
                                </td>
                                <td className="p-4" style={{ color: P.dark }}>{b.type}</td>
                                <td className="p-4" style={{ color: P.neutralDark }}>{b.dateStart}</td>
                                <td className="p-4 font-bold" style={{ color: P.dark }}>{formatARS(b.amount)}</td>
                                <td className="p-4">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{
                                        backgroundColor: b.status === 'confirmed' ? '#e8f6ee' : b.status === 'completed' ? '#f0f4f6' : b.status === 'pending' ? '#fef0e6' : '#fde8e8',
                                        color: b.status === 'confirmed' ? '#16a34a' : b.status === 'completed' ? P.neutralDark : b.status === 'pending' ? P.accent : '#dc2626',
                                    }}>
                                        {b.status === 'confirmed' ? 'Confirmada' : b.status === 'completed' ? 'Completada' : b.status === 'pending' ? 'Pendiente' : 'Cancelada'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}
