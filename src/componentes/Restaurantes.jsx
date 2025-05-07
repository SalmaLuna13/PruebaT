import React, { useState } from 'react';
import axios from 'axios'; // Importar axios para realizar solicitudes HTTP
import Navbar from './Navbar';
import restaurantes from "../assets/restaurantes.jpeg";
import comida1 from "../assets/comida1.jpeg"; // Reemplazar con tus imágenes
import comida2 from "../assets/comida2.jpeg"; // Reemplazar con tus imágenes
import comida3 from "../assets/comida3.jpeg"; // Reemplazar con tus imágenes
import comida4 from "../assets/comida4.jpeg"; // Reemplazar con tus imágenes
import { FaStar, FaHeart } from 'react-icons/fa';

const Restaurantes = () => {
    const [liked, setLiked] = useState({
        comida1: false,
        comida2: false,
        comida3: false,
        comida4: false,
    });

    const [ratings, setRatings] = useState({
        comida1: 0,
        comida2: 0,
        comida3: 0,
        comida4: 0,
    });

    const toggleLike = async (comida, idInformacion) => {
        const newLikedState = !liked[comida];
        setLiked({
            ...liked,
            [comida]: newLikedState,
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

    const handleRating = (comida, rating) => {
        setRatings({
            ...ratings,
            [comida]: rating,
        });
    };

    return (
        <div className='md:rounded-x1 bg-[#f9f8e0] flex-1 py-1'>
            <Navbar />
            <div className='rounded-x1 flex flex-col items-center justify-center w-full mt-20'>
                <img 
                    src={restaurantes} 
                    alt="Restaurantes" 
                    className='w-full h-auto max-h-[300px] object-cover' 
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
                {/* Cuadro 1 */}
                <div className='bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full'>
                    <div>
                        <div className="flex justify-center mb-2">
                            <FaHeart
                                className={`text-2xl cursor-pointer ${liked.comida1 ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => toggleLike('comida1', 1)}
                            />
                        </div>
                        <img src={comida1} alt="comida 1" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                        <h1 className='text-center text-xl font-bold mt-3'>El huastequito</h1>
                        <div className="mt-3 text-left min-h-[150px]">
                            <p className='text-justify'>Reseña: Este restaurante es famoso por sus platillos que representan la cultura.</p>
                            <p className='text-justify'>Dirección: El huastequito, Blvd. Montebello 294</p>
                            <p className='text-justify'>Teléfono: (444) 890 1234.</p>
                            <p className='text-justify'>Red Social: https://facebook/elhuastequito.</p>
                            <p className='text-justify'>Sitio Web: No disponible.</p>
                            <p className='text-justify'>Costo: Hasta $200.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-3 flex justify-center text-yellow-500 text-xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`cursor-pointer ${ratings.comida1 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                    onClick={() => handleRating('comida1', star)}
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
                <div className='bg-white p-5 rounded-lg shadow-md'>
                    <div className="flex justify-center mb-2">
                        <FaHeart
                            className={`text-2xl cursor-pointer ${liked.comida2 ? 'text-red-500' : 'text-gray-400'}`}
                            onClick={() => toggleLike('comida2', 2)}
                        />
                    </div>
                    <img src={comida2} alt="comida 2" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                    <h1 className='text-center text-xl font-bold mt-3'>Los abuelos</h1>
                    <div className='text-left mt-3'>
                        <p>Reseña: El lugar ofrece una experiencia auténtica de la comida tradicional </p>
                        <p>Dirección: Lerdo de Tejada & Blas Escontria</p>
                        <p>Teléfono: (444) 901 2345.</p>
                        <p>RedSocial: https://instagram/losabuelo</p>
                        <p>Sitio Web: No disponible.</p>
                        <p>Costo: Hasta $300.</p>
                    </div>
                    <div className="mt-9 flex justify-center items-center text-yellow-500 text-2xl">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer ${ratings.comida2 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                onClick={() => handleRating('comida2', star)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-3">
                        <button
                            onClick={() => handleAdd(2)}
                            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                        >
                            Agregar
                        </button>
                    </div>
                </div>

                {/* Cuadro 3 */}
                <div className='bg-white p-5 rounded-lg shadow-md'>
                    <div className="flex justify-center mb-2">
                        <FaHeart
                            className={`text-2xl cursor-pointer ${liked.comida3 ? 'text-red-500' : 'text-gray-400'}`}
                            onClick={() => toggleLike('comida3', 3)}
                        />
                    </div>
                    <img src={comida3} alt="comida 3" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                    <h1 className='text-center text-xl font-bold mt-3'>El rincón huasteco</h1>
                    <div className='text-left mt-3'>
                        <p>Reseña: Este sitio se distingue por la calidad de sus platillos</p>
                        <p>Dirección: Lerdo de Tejada & Blas Escontria</p>
                        <p>Teléfono: (444) 901 2345.</p>
                        <p>RedSocial: https://instagram/losabuelo</p>
                        <p>Sitio Web: No disponible.</p>
                        <p>Costo: Hasta $300.</p>
                    </div>
                    <div className="mt-9 flex justify-center items-center text-yellow-500 text-2xl">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer ${ratings.comida3 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                onClick={() => handleRating('comida3', star)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-3">
                        <button
                            onClick={() => handleAdd(3)}
                            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                        >
                            Agregar
                        </button>
                    </div>
                </div>

                {/* Cuadro 4 */}
                <div className='bg-white p-5 rounded-lg shadow-md'>
                    <div className="flex justify-center mb-2">
                        <FaHeart
                            className={`text-2xl cursor-pointer ${liked.comida4 ? 'text-red-500' : 'text-gray-400'}`}
                            onClick={() => toggleLike('comida4', 4)}
                        />
                    </div>
                    <img src={comida4} alt="comida 4" className='w-[200px] h-[200px] object-cover rounded-lg mx-auto' />
                    <h1 className='text-center text-xl font-bold mt-3'>La cabaña de Tamasopo</h1>
                    <div className='text-left mt-3'>
                        <p>Reseña: Ofrece una experiencia gastronómica que combina sabores tradicionales </p>
                        <p>Dirección: Boulevard Lázaro Cárdenas 309</p>
                        <p>Teléfono: (481) 382 0368</p>
                        <p>RedSocial: No disponible.</p>
                        <p>Sitio Web: rinconhuasteco.com</p>
                        <p>Costo: Hasta $448.</p>
                    </div>
                    <div className="mt-9 flex justify-center items-center text-yellow-500 text-2xl">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer ${ratings.comida4 >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                onClick={() => handleRating('comida4', star)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-3">
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
    );
};

export default Restaurantes;
