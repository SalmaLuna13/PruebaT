import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import turismo from "../assets/turismo.jpeg";
import lugar1 from "../assets/lugar1.jpeg"; // Reemplazar con tus imágenes
import lugar2 from "../assets/lugar2.jpeg"; // Reemplazar con tus imágenes
import lugar3 from "../assets/lugar3.jpeg"; // Reemplazar con tus imágenes
import lugar4 from "../assets/lugar4.jpeg"; // Reemplazar con tus imágenes
import { FaStar, FaHeart } from 'react-icons/fa';

const Turismo = () => {
    const [liked, setLiked] = useState({
        lugar1: false,
        lugar2: false,
        lugar3: false,
        lugar4: false,
    });

    const [ratings, setRatings] = useState({
        lugar1: 0,
        lugar2: 0,
        lugar3: 0,
        lugar4: 0,
    });

    const toggleLike = async (lugar, idInformacion) => {
        const newLikedState = !liked[lugar];
        setLiked({
            ...liked,
            [lugar]: newLikedState,
        });

        if (newLikedState) {
            try {
                await axios.post('http://127.0.0.1:5000/auth/favoritos', {
                    id_usuario: 7,
                    id_informacion: idInformacion,
                });
                alert('Añadido a favoritos');
            } catch (error) {
                console.error('Error al añadir a favoritos:', error.response?.data || error.message);
                alert('Error al añadir a favoritos.');
            }
        }
    };

    const handleRating = async (lugar, rating) => {
        setRatings({
            ...ratings,
            [lugar]: rating,
        });

        try {
            await axios.post('http://127.0.0.1:5000/auth/calificar', {
                id_usuario: 7,
                id_informacion: lugar,
                calificacion: rating,
            });
            alert('Calificación enviada');
        } catch (error) {
            console.error('Error al enviar la calificación:', error.response?.data || error.message);
            alert('Error al enviar la calificación.');
        }
    };

    const handleAdd = (idInformacion) => {
        alert(`Lugar con ID ${idInformacion} agregado.`);
    };

    return (
        <div className='md:rounded-x1 bg-[#f9f8e0] flex-1 py-1'>
            <Navbar />
            <div className='rounded-x1 flex flex-col items-center justify-center w-full mt-20'>
                <img 
                    src={turismo} 
                    alt="Turismo" 
                    className='w-full h-auto max-h-[300px] object-cover' 
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
                {/* Cuadro 1 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.lugar1 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('lugar1', 1)}
                            />
                        </div>
                        <img src={lugar1} alt="lugar 1" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>El Naranjo</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Una experiencia única de convivencia familiar.</p>
                            <p className='text-justify'>Dirección: Calle Independencia No. 101, Zona Centro, C.P. 79310</p>
                            <p className='text-justify'>Teléfono: (482) 368 0300</p>
                            <p className='text-justify'>Red Social: No disponible.</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: Gratuito.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.lugar1 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('lugar1', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(1)}
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
                                className={`text-2xl cursor-pointer ${liked.lugar2 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('lugar2', 2)}
                            />
                        </div>
                        <img src={lugar2} alt="lugar 2" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Tamasopo</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Reconocido por sus paisajes naturales.</p>
                            <p className='text-justify'>Dirección: Hidalgo S/N, Zona Centro, C.P. 79700</p>
                            <p className='text-justify'>Teléfono: (482) 387 0120.</p>
                            <p className='text-justify'>Red Social: No disponible.</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: Gratuito.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.lugar2 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('lugar2', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(2)}
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
                                className={`text-2xl cursor-pointer ${liked.lugar3 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('lugar3', 3)}
                            />
                        </div>
                        <img src={lugar3} alt="lugar 3" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Aquismón</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Conocido por su riqueza cultural y natural.</p>
                            <p className='text-justify'>Dirección: Plaza Principal, Zona Centro, C.P. 79760</p>
                            <p className='text-justify'>Teléfono: (482) 361 0030.</p>
                            <p className='text-justify'>Red Social: No disponible.</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: Gratuito.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.lugar3 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('lugar3', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(3)}
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
                                className={`text-2xl cursor-pointer ${liked.lugar4 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('lugar4', 4)}
                            />
                        </div>
                        <img src={lugar4} alt="lugar 4" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Tamuín</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Reconocido por su importancia arqueológica.</p>
                            <p className='text-justify'>Dirección: Calle Hidalgo, Zona Centro, C.P. 79200</p>
                            <p className='text-justify'>Teléfono: (489) 388 0020.</p>
                            <p className='text-justify'>Red Social: No disponible.</p>
                            <p className='text-justify'>Sitio Web: Tamuln.gob.mx</p>
                            <p className='text-justify'>Costo: Gratuito.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.lugar4 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('lugar4', star)}
                                />
                            ))}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => handleAdd(4)}
                                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Turismo;