import React, { useState } from 'react';
import axios from 'axios'; // Importar axios para hacer peticiones HTTP
import { useNavigate } from 'react-router-dom'; // Importar el hook para la navegación
import { FaArrowLeft } from 'react-icons/fa'; // Importar el icono de flecha

const Login = () => {
    const [email, setEmail] = useState(''); // Estado para el email
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const navigate = useNavigate(); // Hook para redirigir a otra página

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://127.0.0.1:5000/auth/login', {
                usuario: email,
                contraseña: password,
            });

            if (response.status === 200) {
                console.log('Inicio de sesión exitoso:', response.data);
                alert('Inicio de sesión exitoso');
                navigate('/'); // Redirigir a la página principal después de iniciar sesión
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error.response?.data || error.message);
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                {/* Botón para regresar */}
                <button
                    onClick={() => navigate('/Presentacion')} // Redirige a la pantalla de presentación
                    className="flex items-center text-gray-700 hover:text-gray-900 mb-4"
                >
                    <FaArrowLeft className="mr-2" /> 
                </button>

                <h2 className="text-2xl text-center mb-6 text-black">
                    Iniciar sesión en TamakásExplor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Nombre de usuario</label>
                        <input
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-gray-100"
                            placeholder="Escribe tu nombre de usuario"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-gray-100"
                            placeholder="Escribe tu contraseña"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#208A89] text-white font-semibold rounded-lg hover:bg-gray-700"
                    >
                        Ingresar sesión
                    </button>
                </form>

                {/* Enlace debajo del botón de login */}
                <div className="mt-4 text-center">
                    <a
                        href="/recuperar-contraseña" // Ruta de la página de recuperación de contraseña
                        className="text-black hover:text-gray-700 text-sm"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                {/* Línea divisoria */}
                <div className="my-6">
                    <hr className="border-t border-gray-300" />
                </div>

                {/* Botón para crear cuenta nueva */}
                <div className="text-center">
                    <button
                        onClick={() => navigate('/crear-cuenta')} // Redirige a la página de creación de cuenta
                        className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
                    >
                        Crear cuenta nueva
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;



