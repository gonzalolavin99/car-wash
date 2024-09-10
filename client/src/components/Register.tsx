import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register: React.FC = () => {
  // Estado local para los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviar solicitud de registro al servidor
      const response = await axios.post('http://localhost:3000/auth/register', {
        name,
        email,
        password
      });
      
      // Mostrar notificación de éxito
      toast.success('Registro exitoso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { background: '#0077be', color: 'white' } // Color azul de la página
      });
      
      console.log(response.data);
      // Aquí puedes redirigir al usuario o realizar otras acciones post-registro
    } catch (err) {
      // Mostrar notificación de error
      toast.error('Error al registrar. Por favor, inténtalo de nuevo.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { background: '#ff0000', color: 'white' } // Color rojo para errores
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      {/* Campo de entrada para el nombre */}
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      {/* Campo de entrada para el email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* Campo de entrada para la contraseña */}
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {/* Botón de envío del formulario */}
      <button type="submit">Registrarse</button>

      {/* Contenedor para las notificaciones de Toastify */}
      <ToastContainer />
    </form>
  );
};

export default Register;