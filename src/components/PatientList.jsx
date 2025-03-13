import { deletePaciente } from "../services/api";

const PatientList = ({ pacientes, fetchPacientes, setEditingPaciente }) => {
  const handleDelete = async (id) => {
    await deletePaciente(id);
    fetchPacientes();
  };

  return (
    <div className="card mt-6">
      <h2 className="text-xl font-bold">Lista de Pacientes</h2>
      <table className="mt-4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Historial</th>
            <th>Medicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr key={p._id}>
              <td>{p.nombre}</td>
              <td>{p.edad}</td>
              <td>{p.historialGlucosa?.join(", ")}</td>
              <td>{p.medicacion}</td>
              <td className="space-x-2">
                <button onClick={() => setEditingPaciente(p)} className="secondary">Editar</button>
                <button onClick={() => handleDelete(p._id)} className="danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
