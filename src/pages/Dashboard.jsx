import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <h1 className="text-xl font-bold">Panel Principal - CareConnect</h1>
                <div className="flex items-center gap-4">
                    <span>{user?.email || 'Usuario'}</span>
                    <button
                        onClick={logout}
                        className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}