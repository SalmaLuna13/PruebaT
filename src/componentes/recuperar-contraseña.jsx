import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook para la navegación

const Recuperar_Contraseña = () => {
    const [email, setEmail] = useState(''); // Estado para el correo electrónico
    const [newPassword, setNewPassword] = useState(''); // Estado para la nueva contraseña
    const navigate = useNavigate(); // Hook para redirigir a otra página

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para recuperar la contraseña y hacer una solicitud a la API

        // Simulamos que la recuperación de la contraseña fue exitosa
        alert('Contraseña recuperada exitosamente.');

        // Redirige a la página de presentación (por ejemplo, '/')
        navigate('/'); // Redirige a la página de inicio (presentación)
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
            {/* Cuadro de recuperar contraseña */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl text-center mb-6 text-black">
                    Recuperar Contraseña
                </h2>
                <hr className="border-t-2 mb-6 " /> {/* Línea divisoria */}

                <form onSubmit={handleSubmit}>
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

                    {/* Campo para la nueva contraseña */}
                    <div className="mb-6">
                        <label htmlFor="newPassword" className="block text-sm font-bold text-gray-700">Nueva Contraseña</label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                            placeholder="Escribe tu nueva contraseña"
                            required
                        />
                    </div>

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#208A89] text-white font-semibold rounded-lg hover:bg-gray-700"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Recuperar_Contraseña;
