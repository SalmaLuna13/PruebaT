import React from 'react';
import { FaHeart, FaArrowLeft } from 'react-icons/fa'; // Agregamos FaArrowLeft
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import lugar1 from '../assets/lugar1.jpeg';
import hotel1 from '../assets/hotel1.jpeg';
import lugar4 from '../assets/lugar4.jpeg';
import hotel4 from '../assets/hotel4.jpeg';
import lugar2 from '../assets/lugar2.jpeg';
import hotel2 from '../assets/hotel2.jpeg';
import lugar3 from '../assets/lugar3.jpeg';
import hotel3 from '../assets/hotel3.jpeg';

const Favoritos = () => {
    const navigate = useNavigate(); // Hook para navegar

    return (
        <div className="flex flex-col items-center p-8 bg-yellow-100 w-screen min-h-screen relative">
            {/* Flecha para regresar */}
            <button
                onClick={() => navigate('/presentacion')} // Redirige a la pantalla de presentación
                className="absolute top-4 left-4 text-black hover:text-gray-700 text-xl flex items-center"
            >
                <FaArrowLeft className="mr-2" /> 
            </button>

            <h2 className="text-3xl font-medium text-center mb-8 text-black mt-12">
                Guardado en Favoritos
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {[  
                    { src: lugar1, titulo: "El Naranjo, SLP" },
                    { src: hotel1, titulo: "Tanchanchín, SLP" },
                    { src: lugar4, titulo: "Tamuín, SLP" },
                    { src: hotel4, titulo: "Xilitla, SLP" },
                    { src: lugar2, titulo: "Tamasopo, SLP" },
                    { src: hotel2, titulo: "Ciudad Valles, SLP" },
                    { src: lugar3, titulo: "Axtla de Terrazas, SLP" },
                    { src: hotel3, titulo: "Aquismón, SLP" },
                ].map((item, index) => (
                    <div key={index} className="relative w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="absolute top-2 right-2 text-red-500">
                            <FaHeart className="w-8 h-8" />
                        </div>
                        <img src={item.src} alt={item.titulo} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-center">{item.titulo}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favoritos;
