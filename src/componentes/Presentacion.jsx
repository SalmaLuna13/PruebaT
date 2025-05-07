import React, { useState } from 'react';
import Navbar from './Navbar';
import bienvenidos from "../assets/bienvenidos.jpeg";
import reseña1 from "../assets/reseña1.jpeg";
import reseña2 from "../assets/reseña2.jpeg";
import reseña3 from "../assets/reseña3.jpeg";
import reseña4 from "../assets/reseña4.jpeg";
import { FaStar } from 'react-icons/fa'; // Importamos el icono de estrella
import usuario from "../assets/usuario.webp"; // Imagen de usuario de ejemplo
import axios from 'axios'; // Importar axios para realizar solicitudes HTTP

const Presentacion = () => {
  const [comments, setComments] = useState({
    reseña1: '',
    reseña2: '',
    reseña3: '',
    reseña4: '',
  });

  // Función para manejar el cambio en el comentario de cada reseña
  const handleCommentChange = (e, reseña) => {
    setComments({
      ...comments,
      [reseña]: e.target.value,
    });
  };

  // Función para manejar el envío del comentario
  const handleCommentSubmit = async (reseña) => {
    if (comments[reseña].trim()) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/auth/reseñas', {
          id_informacion: 1, // ID de información fijo (puedes ajustarlo según sea necesario)
          id_usuarios: 3, // ID de usuario fijo (puedes ajustarlo según sea necesario)
          cali: 5, // Calificación fija (puedes ajustarlo según sea necesario)
          comentarios: comments[reseña],
          URL_Foto: "https://miapp.com/uploads/foto123.jpg", // URL de foto fija
        });

        if (response.status === 201) {
          alert("Comentario enviado para " + reseña + ": " + comments[reseña]);
          setComments({
            ...comments,
            [reseña]: '', // Limpiar el comentario de la reseña después de enviarlo
          });
        }
      } catch (error) {
        console.error('Error al enviar el comentario:', error.response?.data || error.message);
        alert('Error al enviar el comentario. Por favor, intenta nuevamente.');
      }
    } else {
      alert("Por favor, escribe un comentario para " + reseña + " antes de enviarlo.");
    }
  };

  return (
    <div className='md:rounded-x1 bg-[#f9f8e0] flex-1 py-1'>
      <Navbar />
      <div className='rounded-x1 flex flex-col items-center justify-center w-full'>
        <img 
          src={bienvenidos} 
          alt="Bienvenidos" 
          className='w-full h-auto max-h-[600px] object-cover' 
        />
      </div>

      <div className='mt-1 px-1 space-y-1'>
        <div className='md:rounded-x2 bg-[#208A89] md:m-7 flex-1 p-2'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* Contenedor centrado para el video */}
            <div className="md:w-1/2 p-3 flex justify-center">
              <video autoPlay muted loop controls className="w-[300px] h-full rounded-md">
                <source src="src/assets/video.mp4" type="video/mp4" />
              </video>
            </div>
            {/* "Sobre nosotros" Section */}
            <div className="p-1">
              <div style={{ fontSize: '60px', color: 'white', fontWeight: 'bold' }}>Sobre nosotros</div>
              <div className='mt-5'>
                <p className='justify-left' style={{ fontSize: '21px', color: 'white', textAlign: 'justify' }}>Nos especializamos en ofrecer experiencias únicas y auténticas en toda la Huasteca Potosina.</p>
                <div className='mt-2'>
                  <p className='justify-center' style={{ fontSize: '21px', color: 'white', textAlign: 'justify' }}>Ya sea que estés buscando un viaje de aventura, una escapada romántica o simplemente unas vacaciones relajantes, estamos aquí para ayudarte a planificar el viaje perfecto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 px-10 space-y-7'>
          <div className='text-white bg-[#208A89] py-2 text-center rounded-md font-bold' style={{ fontSize: '32px' }}>Reseñas</div>

          {/* Contenedor para los cuadros de reseñas */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Cuadro 1 */}
            <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col items-stretch min-h-[450px]'>
              <div className="flex items-center">
                <img src={usuario} alt="Usuario" className="w-12 h-12 object-cover rounded-full mr-3" />
                <p className="text-xl font-semibold">Usuario 1</p>
              </div>
              <img src={reseña1} alt="" className="w-full h-32 object-cover rounded-md mt-3" />
              <p className="mt-3 text-lg text-left flex-grow">"Una experiencia increíble en la Huasteca Potosina, todo fue perfecto!"</p>
              <div className="mt-3 flex justify-center text-yellow-500 text-2xl">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <textarea
                value={comments.reseña1}
                onChange={(e) => handleCommentChange(e, 'reseña1')}
                rows="3"
                placeholder="Escribe tu comentario..."
                className="mt-3 w-full p-2 border rounded-md"
              />
              <button
                onClick={() => handleCommentSubmit('reseña1')}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Enviar comentario
              </button>
            </div>

            {/* Cuadro 2 */}
            <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col items-stretch min-h-[450px]'>
              <div className="flex items-center">
                <img src={usuario} alt="Usuario" className="w-12 h-12 object-cover rounded-full mr-3" />
                <p className="text-xl font-semibold">Usuario 2</p>
              </div>
              <img src={reseña4} alt="" className="w-full h-32 object-cover rounded-md mt-3" />
              <p className="mt-3 text-lg text-left flex-grow">"Una experiencia inolvidable, muy recomendados para todo tipo de turistas."</p>
              <div className="mt-3 flex justify-center text-yellow-500 text-2xl">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <textarea
                value={comments.reseña4}
                onChange={(e) => handleCommentChange(e, 'reseña4')}
                rows="3"
                placeholder="Escribe tu comentario..."
                className="mt-3 w-full p-2 border rounded-md"
              />
              <button
                onClick={() => handleCommentSubmit('reseña4')}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Enviar comentario
              </button>
            </div>

            {/* Cuadro 3 */}
            <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col items-stretch min-h-[450px]'>
              <div className="flex items-center">
                <img src={usuario} alt="Usuario" className="w-12 h-12 object-cover rounded-full mr-3" />
                <p className="text-xl font-semibold">Usuario 3</p>
              </div>
              <img src={reseña3} alt="" className="w-full h-32 object-cover rounded-md mt-3" />
              <p className="mt-3 text-lg text-left flex-grow">"¡La mejor experiencia de viaje que he tenido! Todo fue perfecto."</p>
              <div className="mt-3 flex justify-center text-yellow-500 text-2xl">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <textarea
                value={comments.reseña3}
                onChange={(e) => handleCommentChange(e, 'reseña3')}
                rows="3"
                placeholder="Escribe tu comentario..."
                className="mt-3 w-full p-2 border rounded-md"
              />
              <button
                onClick={() => handleCommentSubmit('reseña3')}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Enviar comentario
              </button>
            </div>

            {/* Cuadro 4 */}
            <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col items-stretch min-h-[450px]'>
              <div className="flex items-center">
                <img src={usuario} alt="Usuario" className="w-12 h-12 object-cover rounded-full mr-3" />
                <p className="text-xl font-semibold">Usuario 4</p>
              </div>
              <img src={reseña2} alt="" className="w-full h-32 object-cover rounded-md mt-3" />
              <p className="mt-3 text-lg text-left flex-grow">"Excelente atención y los paisajes son impresionantes. ¡Lo recomiendo totalmente!"</p>
              <div className="mt-3 flex justify-center text-yellow-500 text-2xl">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <textarea
                value={comments.reseña2}
                onChange={(e) => handleCommentChange(e, 'reseña2')}
                rows="3"
                placeholder="Escribe tu comentario..."
                className="mt-3 w-full p-2 border rounded-md"
              />
              <button
                onClick={() => handleCommentSubmit('reseña2')}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Enviar comentario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
