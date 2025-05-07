import React, { useState } from 'react';
import axios from 'axios'; // Importar axios para realizar solicitudes HTTP
import Navbar from './Navbar';
import tiendas from "../assets/tiendas.jpeg";
import tienda1 from "../assets/tienda1.jpeg"; // Reemplazar con tus imágenes
import tienda2 from "../assets/tienda2.jpeg"; // Reemplazar con tus imágenes
import tienda3 from "../assets/tienda3.jpeg"; // Reemplazar con tus imágenes
import tienda4 from "../assets/tienda4.jpeg"; // Reemplazar con tus imágenes
import { FaStar, FaHeart } from 'react-icons/fa';

const Tiendas = () => {
    const [liked, setLiked] = useState({
        tienda1: false,
        tienda2: false,
        tienda3: false,
        tienda4: false,
    });

    const [ratings, setRatings] = useState({
        tienda1: 0,
        tienda2: 0,
        tienda3: 0,
        tienda4: 0,
    });

    const toggleLike = async (tienda, idInformacion) => {
        const newLikedState = !liked[tienda];
        setLiked({
            ...liked,
            [tienda]: newLikedState,
        });

        if (newLikedState) {
            try {
                await axios.post('http://127.0.0.1:5000/auth/favoritos', {
                    id_usuario: 7, // ID de usuario fijo
                    id_informacion: idInformacion, // ID de información correspondiente
                });
                alert('Añadido a favoritos');
            } catch (error) {
                console.error('Error al añadir a favoritos:', error.response?.data || error.message);
                alert('Error al añadir a favoritos.');
            }
        }
    };

    const handleRating = async (tienda, rating) => {
        setRatings({
            ...ratings,
            [tienda]: rating,
        });

        try {
            await axios.post('http://127.0.0.1:5000/auth/calificar', {
                id_usuario: 7, // ID de usuario fijo
                id_informacion: tienda, // ID de información correspondiente
                calificacion: rating, // Calificación seleccionada
            });
            alert('Calificación enviada');
        } catch (error) {
            console.error('Error al enviar la calificación:', error.response?.data || error.message);
            alert('Error al enviar la calificación.');
        }
    };

    const handleAdd = async (idInformacion) => {
        try {
            await axios.post('http://127.0.0.1:5000/auth/agregar', {
                id_usuario: 7, // ID de usuario fijo
                id_informacion: idInformacion, // ID de información correspondiente
            });
            alert('Elemento agregado exitosamente');
        } catch (error) {
            console.error('Error al agregar el elemento:', error.response?.data || error.message);
            alert('Error al agregar el elemento.');
        }
    };

    return (
        <div className='md:rounded-x1 bg-[#f9f8e0] flex-1 py-1'>
            <Navbar />
            <div className='rounded-x1 flex flex-col items-center justify-center w-full mt-20'>
                <img 
                    src={tiendas} 
                    alt="Tiendas" 
                    className='w-full h-auto max-h-[300px] object-cover' 
                />
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
                {/* Cuadro 1 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.tienda1 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('tienda1', 1)}
                            />
                        </div>
                        <img src={tienda1} alt="tienda 1" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Taller artesanal náhuatl</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Tradicionales Bordados y hechos por textiles mujeres.</p>
                            <p className='text-justify'>Dirección: Mpi. de Huehuetlán S.L.P MX</p>
                            <p className='text-justify'>Teléfono: (444) 123 6789.</p>
                            <p className='text-justify'>RedSocial: https://facebook/artesaniasnahuatl</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: Hasta $600.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.tienda1 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('tienda1', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(1)} // ID de información correspondiente
                                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
                {/* Cuadro 2 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.tienda2 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('tienda2', 2)}
                            />
                        </div>
                        <img src={tienda2} alt="tienda 2" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Café de la sierra</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Café orgánico de la sierra de Xilitla.</p>
                            <p className='text-justify'>Dirección: Jardín Miguel Hidalgo 102, centro, 79900</p>
                            <p className='text-justify'>Teléfono: (444) 234 7890</p>
                            <p className='text-justify'>RedSocial: https://facebook./cafedelasierra</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: $180</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.tienda2 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('tienda2', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(2)} // ID de información correspondiente
                                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
                {/* Cuadro 3 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.tienda3 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('tienda3', 3)}
                            />
                        </div>
                        <img src={tienda3} alt="tienda 3" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Esculturas de Madera</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Esculturas y máscaras talladas a mano artesanales.</p>
                            <p className='text-justify'>Dirección: La escalera S.L.P. Matlapa 78893.</p>
                            <p className='text-justify'>Teléfono: (444) 901 2345.</p>
                            <p className='text-justify'>RedSocial: https://instagram/losabuelo</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: $800</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.tienda3 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('tienda3', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(3)} // ID de información correspondiente
                                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
                {/* Cuadro 4 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.tienda4 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('tienda4', 4)}
                            />
                        </div>
                        <img src={tienda4} alt="tienda 4" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Epatar eco arte</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Combinando moda con un enfoque ecológico y amigable con el medio ambiente.</p>
                            <p className='text-justify'>Dirección: Calle Fray José de Arlegui 2305, Plaza Carranza local 19</p>
                            <p className='text-justify'>Teléfono: (444) 833 6919.</p>
                            <p className='text-justify'>RedSocial: con@epatar.com.mx.</p>
                            <p className='text-justify'>Sitio Web: www.epatar.com.mx.</p>
                            <p className='text-justify'>Costo: Hasta $990.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.tienda4 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('tienda4', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(4)} // ID de información correspondiente
                                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiendas;



