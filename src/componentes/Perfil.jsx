import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Importar el icono de flecha
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir

const Perfil = () => {
    const [image, setImage] = useState(null); // Estado para la imagen
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const navigate = useNavigate(); // Hook para navegar

    // Cargar la imagen y el nombre de usuario desde localStorage al cargar el componente
    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        const savedUsername = localStorage.getItem('username'); // Recuperar el nombre de usuario
        if (savedImage) {
            setImage(savedImage);
        }
        if (savedUsername) {
            setUsername(savedUsername); // Establecer el nombre de usuario
        }
    }, []);

    // Función para manejar el cambio de foto
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl); // Actualizar el estado con la nueva imagen
            localStorage.setItem('profileImage', imageUrl); // Guardar la imagen en localStorage
        }
    };

    // Función para manejar el cambio del nombre de usuario
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        localStorage.setItem('username', e.target.value); // Guardar el nuevo nombre de usuario en localStorage
    };

    // Función para manejar la actualización del perfil
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        alert('Perfil actualizado');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 w-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                {/* Flecha para regresar */}
                <button
                    onClick={() => navigate('/presentacion')} // Redirige a la pantalla de presentación
                    className="flex items-center text-gray-700 hover:text-gray-900 mb-4"
                >
                    <FaArrowLeft className="mr-2" /> 
                </button>

                <h2 className="text-2xl font-medium text-center mb-6 text-black">Editar perfil</h2>

                {/* Foto de perfil */}
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <img
                            src={image || 'https://via.placeholder.com/150'} // Foto por defecto si no se ha seleccionado una
                            alt="Perfil"
                            className="w-32 h-32 rounded-full object-cover border rounded"
                        />
                        <label
                            htmlFor="image-upload"
                            className="absolute bottom-0 right-0 bg-[#208A89] text-white p-2 rounded-full cursor-pointer"
                        >
                            +
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                </div>

                {/* Formulario para cambiar el nombre de usuario */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-bold text-gray-700 text-center">
                        {username || 'Nombre de usuario no definido'} <br />
                        <br />
                    </label>

                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Nombre de usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                        placeholder="Escribe tu nuevo nombre de usuario"
                    />
                </div>

                {/* Botón para actualizar el perfil */}
                <button
                    onClick={handleUpdateProfile}
                    className="w-full py-3 bg-[#208A89] text-white font-semibold rounded-lg hover:bg-gray-700"
                >
                    Actualizar perfil
                </button>
            </div>
        </div>
    );
};

export default Perfil;
