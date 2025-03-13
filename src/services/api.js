import axios from "axios";

const API_URL = "http://localhost:5000/api/pacientes";

export const getPacientes = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error("Error obteniendo pacientes:", error);
    return [];
  }
};

export const createPaciente = async (paciente) => {
  try {
    const { data } = await axios.post(API_URL, paciente);
    return data;
  } catch (error) {
    console.error("Error creando paciente:", error);
  }
};

export const updatePaciente = async (id, paciente) => {
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, paciente);
    return data;
  } catch (error) {
    console.error("Error actualizando paciente:", error);
  }
};

export const deletePaciente = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error eliminando paciente:", error);
  }
};
