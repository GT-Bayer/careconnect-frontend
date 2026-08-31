import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoutes';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Directory from './pages/Directory';

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas Públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas para cualquier usuario autenticado */}
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/directory" element={<Directory />} />
            </Route>

            {/* Ruta exclusiva de Administrador */}
            <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'ADMINISTRADOR']} />}>
                <Route path="/admin" element={<AdminDashboard />} />
            </Route>

            {/* Fallback general */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};