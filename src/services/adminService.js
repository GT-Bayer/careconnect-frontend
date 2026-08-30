import client from "../api/client";

export const adminService = {
    getMetricas: async () => {
        const response = await client.get("/admin/metricas");
        return response.data;
    },

    getUsuarios: async () => {
        const response = await client.get("/admin/usuarios");
        return response.data;
    },

    aprobarUsuario: async (id) => {
        const response = await client.patch(`/admin/usuarios/${id}/aprobar`);
        return response.data;
    },

    suspenderUsuario: async (id) => {
        const response = await client.patch(`/admin/usuarios/${id}/suspender`);
        return response.data;
    },
};