import api from "../api/client";

export const getAdultosMayores = async (familiarId) => {
  const response = await api.get("/adultos-mayores");

  return response.data.filter(
    (adultoMayor) =>
      Number(adultoMayor.familiarId) === Number(familiarId)
  );
};

export const getAdultoMayorById = async (id) => {
  const response = await api.get(`/adultos-mayores/${id}`);

  return response.data;
};

export const createAdultoMayor = async (payload) => {
  const response = await api.post("/adultos-mayores", payload);

  return response.data;
};

export const updateAdultoMayor = async (id, payload) => {
  const response = await api.put(`/adultos-mayores/${id}`, payload);

  return response.data;
};

export const deleteAdultoMayor = async (id) => {
  await api.delete(`/adultos-mayores/${id}`);
};