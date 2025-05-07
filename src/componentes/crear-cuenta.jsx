import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir
import axios from 'axios'; // Importar axios para realizar solicitudes HTTP

const Crear_Cuenta = () => {
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(''); // Estado para confirmar la contraseña
  const [usuario, setUsuario] = useState(''); // Estado para el nombre
  
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/register', {
        usuario: `${usuario}`, // Combina nombre y apellido como usuario
        correo: email,
        contraseña: password,
      });

      if (response.status === 201){
        alert('Cuenta creada exitosamente.');
        navigate('/encuesta'); // Redirige a la página de encuesta
      }
    } catch (error) {
      console.error('Error al crear la cuenta:', error.response?.data || error.message);
      alert('Error al crear la cuenta. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      {/* Formulario para crear cuenta */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-center mb-6 text-black">Crea una nueva cuenta</h2>
        <hr className="border-t-2 mb-6" /> {/* Línea divisoria */}

        <form onSubmit={handleSubmit}>
          {/* Campo para el nombre */}
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-sm font-bold text-gray-700">Usuario</label>
            <input
              type="text"
              id="usuario"
              usuario="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Escribe tu nombre"
              required
            />
          </div>

        

          {/* Campo para el correo electrónico */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Escribe tu correo electrónico"
              required
            />
          </div>

          {/* Campo para la contraseña */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Escribe tu contraseña"
              required
            />
          </div>

          {/* Campo para confirmar la contraseña */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full py-3 bg-[#208A89] text-white font-semibold rounded-lg hover:bg-gray-700"
          >
            Registrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Crear_Cuenta;


