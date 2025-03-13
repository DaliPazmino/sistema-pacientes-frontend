import { useState, useEffect } from "react";
import { createPaciente, updatePaciente } from "../services/api";

const PatientForm = ({ fetchPacientes, editingPaciente, setEditingPaciente }) => {
  const [form, setForm] = useState({ nombre: "", edad: "", historialGlucosa: "", medicacion: "" });

  useEffect(() => {
    if (editingPaciente) {
      setForm(editingPaciente);
    } else {
      setForm({ nombre: "", edad: "", historialGlucosa: "", medicacion: "" });
    }
  }, [editingPaciente]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.edad || !form.medicacion) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      if (editingPaciente) {
        await updatePaciente(editingPaciente._id, form);
      } else {
        await createPaciente(form);
      }
      setForm({ nombre: "", edad: "", historialGlucosa: "", medicacion: "" });
      setEditingPaciente(null);
      fetchPacientes();
    } catch (error) {
      console.error("Error al guardar el paciente:", error);
      alert("Error en el registro del paciente.");
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold">{editingPaciente ? "Editar Paciente" : "Registrar Paciente"}</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input type="number" name="edad" value={form.edad} onChange={handleChange} placeholder="Edad" required />
        <input type="text" name="historialGlucosa" value={form.historialGlucosa} onChange={handleChange} placeholder="Historial Glucosa (ej. 90,100,110)" />
        <input type="text" name="medicacion" value={form.medicacion} onChange={handleChange} placeholder="Medicación" required />
        <button type="submit" className="primary w-full">
          {editingPaciente ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
