import { useState, useEffect } from "react";
import { getPacientes } from "../services/api";
import PatientForm from "../components/PatientForm";
import PatientList from "../components/PatientList";

const Home = () => {
  const [pacientes, setPacientes] = useState([]);
  const [editingPaciente, setEditingPaciente] = useState(null);

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async () => {
    const data = await getPacientes();
    setPacientes(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">Gestión de Pacientes</h1>
      <PatientForm fetchPacientes={fetchPacientes} editingPaciente={editingPaciente} setEditingPaciente={setEditingPaciente} />
      <PatientList pacientes={pacientes} fetchPacientes={fetchPacientes} setEditingPaciente={setEditingPaciente} />
    </div>
  );
};

export default Home;
