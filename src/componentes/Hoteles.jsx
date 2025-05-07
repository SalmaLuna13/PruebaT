import React, { useState } from 'react';
import axios from 'axios'; // Importar axios para realizar solicitudes HTTP
import Navbar from './Navbar';
import hoteles from "../assets/hoteles.jpeg";
import hotel1 from "../assets/hotel1.jpeg"; // Reemplazar con tus imágenes
import hotel2 from "../assets/hotel2.jpeg"; // Reemplazar con tus imágenes
import hotel3 from "../assets/hotel3.jpeg"; // Reemplazar con tus imágenes
import hotel4 from "../assets/hotel4.jpeg"; // Reemplazar con tus imágenes
import { FaStar, FaHeart } from 'react-icons/fa';

const Hoteles = () => {
    const [liked, setLiked] = useState({
        hotel1: false,
        hotel2: false,
        hotel3: false,
        hotel4: false,
    });

    const [stars, setStars] = useState({
        hotel1: 0,
        hotel2: 0,
        hotel3: 0,
        hotel4: 0,
    });

    const toggleLike = async (hotel, idInformacion) => {
        const newLikedState = !liked[hotel];
        setLiked({
            ...liked,
            [hotel]: newLikedState,
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

    const handleStarClick = (hotel, starCount) => {
        setStars({
            ...stars,
            [hotel]: starCount,
        });
    };

    return (
        <div className='md:rounded-x1 bg-[#f9f8e0] flex-1 py-1'>
            <Navbar />
            <div className='rounded-x1 flex flex-col items-center justify-center w-full mt-20'>
                <img 
                    src={hoteles} 
                    alt="Hoteles" 
                    className='w-full h-auto max-h-[300px] object-cover' 
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
                {/* Cuadro 1 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.hotel1 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('hotel1', 1)}
                            />
                        </div>
                        <img src={hotel1} alt="hotel 1" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Hotel Cascada Huasteca</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Una experiencia única de convivencia.</p>
                            <p className='text-justify'>Dirección: Ubicado en un pintoresco pueblo de la Sierra Huasteca.</p>
                            <p className='text-justify'>Teléfono: (482) 368 0300</p>
                            <p className='text-justify'>Red Social: No disponible</p>
                            <p className='text-justify'>Sitio Web: Expedia.mx</p>
                            <p className='text-justify'>Costo: $1,040</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${stars.hotel1 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleStarClick('hotel1', star)}
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
                                className={`text-2xl cursor-pointer ${liked.hotel2 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('hotel2', 2)}
                            />
                        </div>
                        <img src={hotel2} alt="hotel 2" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Hotel Sierra Huasteca</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Satisfacer sus necesidades en un viaje de trabajo.</p>
                            <p className='text-justify'>Dirección: Se localiza a 700 metros del Centro Cultural de La Huasteca.</p>
                            <p className='text-justify'>Teléfono: (481) 382 8300</p>
                            <p className='text-justify'>Red Social: No disponible</p>
                            <p className='text-justify'>Sitio Web: sierrahuasteca.com</p>
                            <p className='text-justify'>Costo: $1,319</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${stars.hotel2 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleStarClick('hotel2', star)}
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
                                className={`text-2xl cursor-pointer ${liked.hotel3 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('hotel3', 3)}
                            />
                        </div>
                        <img src={hotel3} alt="hotel 3" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Hotel San José</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Es un hotel que ofrece a los huéspedes habitaciones confortables durante su estadía.</p>
                            <p className='text-justify'>Dirección: Damian Carmona s/n, 79760.</p>
                            <p className='text-justify'>Teléfono: (481) 109 5617</p>
                            <p className='text-justify'>Red Social: Facebook: Hotel San José</p>
                            <p className='text-justify'>Sitio Web: No disponible</p>
                            <p className='text-justify'>Costo: $880</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${stars.hotel3 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleStarClick('hotel3', star)}
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
                                className={`text-2xl cursor-pointer ${liked.hotel4 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('hotel4', 4)}
                            />
                        </div>
                        <img src={hotel4} alt="hotel 4" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>Hotel Paraíso Encantado</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Es cómodo para los huéspedes con el ruido de los pájaros.</p>
                            <p className='text-justify'>Dirección: Camino La Conchita -Las Pozas Núm 10 Las Pozas.</p>
                            <p className='text-justify'>Teléfono: (489) 388 0020</p>
                            <p className='text-justify'>Red Social: No disponible</p>
                            <p className='text-justify'>Sitio Web: Booking.com</p>
                            <p className='text-justify'>Costo: $1,815</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${stars.hotel4 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleStarClick('hotel4', star)}
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

export default Hoteles;
