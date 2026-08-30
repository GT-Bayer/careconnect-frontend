import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ allowedRoles = [] }) => {
    const { user, loading, isAuthenticated } = useAuth();

    console.log('--- CHECK PROTECTED ROUTE ---', { 
        user, 
        loading, 
        isAuthenticated, 
        allowedRoles 
    });

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-sm text-slate-500">
                Verificando credenciales...
            </div>
        );
    }

    // 1. Sin sesión activa -> Redirección a login
    if (!isAuthenticated || !user) {
        console.warn('Rebotado por: !isAuthenticated o !user');
        return <Navigate to="/login" replace />;
    }

    // 2. Con rol no autorizado -> Redirección a dashboard general
    if (allowedRoles.length > 0) {
        const userRole = (user.rol || user.role || '').toUpperCase();
        const hasPermission = allowedRoles.some(r => r.toUpperCase() === userRole);

        if (!hasPermission) {
            console.warn('Rebotado por falta de permisos. Rol actual:', userRole, 'Requeridos:', allowedRoles);
            return <Navigate to="/dashboard" replace />;
        }
    }

    return <Outlet />;
};

export default ProtectedRoute;