import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoutes';

// Páginas
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Ruta Pública Principal: Landing Page */}
            <Route path="/" element={<Landing />} />

            {/* Rutas de Autenticación */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas Privadas (Requieren Auth) */}
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Redirección por defecto a la Landing */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};