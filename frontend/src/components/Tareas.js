import React from 'react';
import  { useState, useEffect } from 'react';
import '../tareas.css'
//import axios from 'axios';



function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [mensajeCompletada, setMensajeCompletada] = useState('');

  // Función para cargar las tareas desde el servidor
  const cargarTareas = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/tareas'); // Cambiar la URL según corresponda
      const data = await response.json();
      setTareas(data);
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  };

  // Función para agregar una nueva tarea
  const agregarTarea = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/tareas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Tarea: nuevaTarea }), // Agregar otros campos si es necesario
      });
      const data = await response.json();
      console.log(data);
      setNuevaTarea('');
      cargarTareas(); // Actualizar la lista de tareas
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  // Función para marcar una tarea como completada
  const marcarCompletada = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/tareas/${id}`, {
        method: 'PATCH',
      });
      cargarTareas(); // Actualizar la lista de tareas
    } catch (error) {
      console.error('Error al marcar la tarea como completada:', error);
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/tareas/${id}`, {
        method: 'DELETE',
      });
      cargarTareas(); // Actualizar la lista de tareas
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);
  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Tareas</h1>
      <div className="task-list-container">
        <ul className="lista-tareas">
          {tareas.map((tarea) => (
            <li key={tarea._id} className={`task-item ${tarea.Estado?.includes('Completa') ? 'completed' : 'in-progress'}`}>
              <span className="task-name">{tarea.Tarea}</span>
             
              <div className="task-actions">
                <button
                  className="action-button"
                  onClick={() => {
                    marcarCompletada(tarea._id);
                    setMensajeCompletada(`Tarea  de "${tarea.Tarea}" completada`);
                  }}
                  
                >
                  Marcar como Completada
                </button>
                <button className="action-button" onClick={() => eliminarTarea(tarea._id)}>
                  Eliminar
                </button>
              </div>
              
            </li>
          ))}
         
        </ul>

        {/* Formulario para agregar nuevas tareas */}
        <form className="add-task-form" onSubmit={agregarTarea}>
          <input
            className="add-task-input"
            type="text"
            placeholder="Nueva tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <button className="add-task-button" type="submit">
            Agregar
          </button>
        </form>
        
          {/* Mensaje de tarea completada */}
          {mensajeCompletada && <p className="completed-message">{mensajeCompletada}</p>}

      </div>
    </div>
  );
}



export default Tareas;
