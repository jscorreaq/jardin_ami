import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    identificacion: '',
    edad: '',
    grupo: ''
  });

  const [estudiantes, setEstudiantes] = useState([]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Obtener todos los estudiantes al cargar el componente
  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const fetchEstudiantes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/estudiantes');
      setEstudiantes(response.data);
    } catch (error) {
      console.error('Error al obtener estudiantes:', error);
    }
  };

  // Enviar los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/estudiantes', formData);
      alert('Estudiante creado con éxito');
      setFormData({ nombre: '', identificacion: '', edad: '', grupo: '' });
      fetchEstudiantes(); // Actualiza la lista
    } catch (error) {
      console.error('Error al crear estudiante:', error);
      alert('Ocurrió un error al crear el estudiante');
    }
  };

  return (
    <>  
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Registrar Estudiante</h1>
        </div>

        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="nombre">Nombre del Estudiante</label>
                <input type="text" id="nombre" className="form-control" value={formData.nombre} onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="identificacion">Identificación</label>
                <input type="text" id="identificacion" className="form-control" value={formData.identificacion} onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="edad">Edad</label>
                <input type="number" id="edad" className="form-control" value={formData.edad} onChange={handleChange} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="grupo">Grupo</label>
                <input type="text" id="grupo" className="form-control" value={formData.grupo} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Crear Estudiante
              </button>
            </form>
          </div>

          <div className="col-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
              className="img-fluid"
              alt="Estudiante"
            />
          </div>
        </div>

        <hr />
        <h3 className="mt-4">Listado de Estudiantes</h3>
        <ul className="list-group">
          {estudiantes.map((est) => (
            <li key={est.id} className="list-group-item">
              {est.nombre} - ID: {est.identificacion} - Edad: {est.edad} - Grupo: {est.grupo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
