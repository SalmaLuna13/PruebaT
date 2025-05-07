import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Icono de ubicación
import reseña1 from "../assets/reseña1.jpeg";
import lugar2 from "../assets/lugar2.jpeg";
import hotel3 from "../assets/hotel3.jpeg";
import comida1 from "../assets/comida1.jpeg";
import tienda1 from "../assets/tienda1.jpeg";

const Mapa = () => {
  // Estado para manejar el contenido mostrado
  const [contenido, setContenido] = useState('verTodo');
  const [busqueda, setBusqueda] = useState('');

  // Funciones para cambiar el contenido
  const verTodo = () => setContenido('verTodo');
  const mostrarLugares = () => setContenido('Turismo');
  const mostrarRestaurantes = () => setContenido('Restaurantes');
  const mostrarHoteles = () => setContenido('Hoteles');
  const mostrarTiendas = () => setContenido('Tiendas');

  // Manejar cambio de la búsqueda
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Función para abrir la nueva pestaña del pasaporte virtual
  const generarPasaporte = () => {
    window.open('/pasaporte', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  // Función para generar la ruta (puedes agregar la funcionalidad que desees aquí)
  const generarRuta = () => {
    console.log("Generando ruta...");  // Esto es solo un ejemplo
    alert("Ruta generada con éxito.");
  };

  return (
    <div className='md:rounded-x1 bg-[#f9f8e0] flex-1 py-1'>
      <Navbar />
      <div className='mt-20 flex flex-col lg:flex-row'> {/* Se ajusta el margen superior */}
        {/* Mapa en la parte izquierda */}
        <div className='flex-1 lg:w-2/3'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59193.39938758901!2d-99.0566930152881!3d21.98879075709503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d612aa8cfda92f%3A0x3338605912bc2688!2sCdad.%20Valles%2C%20S.L.P.!5e0!3m2!1ses!2smx!4v1742783502880!5m2!1ses!2smx"
            className="w-full h-[300px] lg:h-[550px] rounded-md"
            loading="lazy"
          ></iframe>
        </div>

        {/* Barra de navegación y contenido a la derecha */}
        <div className='flex-1 lg:w-1/3 mt-5 lg:mt-0 lg:ml-5'>
          <div className="border p-5 rounded-lg shadow-md flex flex-col h-full bg-white">
            {/* Título */}
            <h2 className='text-2xl text-center mb-4'>Lugares populares cerca</h2>

            {/* Barra de navegación con botones */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={verTodo}
                className="flex-1 p-2 bg-[#208A89] text-white rounded-md hover:bg-gray-300"
              >
                Ver todo
              </button>
              <button
                onClick={mostrarLugares}
                className="flex-1 p-2 bg-[#208A89] text-white rounded-md hover:bg-gray-300"
              >
                Turismo
              </button>
              <button
                onClick={mostrarRestaurantes}
                className="flex-1 p-2 bg-[#208A89] text-white rounded-md hover:bg-gray-300"
              >
                Restaurantes
              </button>
              <button
                onClick={mostrarHoteles}
                className="flex-1 p-2 bg-[#208A89] text-white rounded-md hover:bg-gray-300"
              >
                Hoteles
              </button>
              <button
                onClick={mostrarTiendas}
                className="flex-1 p-2 bg-[#208A89] text-white rounded-md hover:bg-gray-300"
              >
                Tiendas
              </button>
            </div>

            {/* Barra de búsqueda */}
            <div className="mb-4">
              <input
                type="text"
                value={busqueda}
                onChange={manejarBusqueda}
                placeholder="¿Qué estás buscando?"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Contenido dinámico */}
            <div className="flex-1 overflow-y-auto">
              {contenido === 'verTodo' && (
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-bold">Ver todos los lugares</h3>
                  <img
                    src=""
                    alt="Lugar que vayas agregando"
                    className="w-full h-[150px] object-cover rounded-md mt-2"
                  />
                  <div className="flex items-center mt-4">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <p>.....</p>
                  </div>
                  <button
                    onClick={generarRuta}
                    className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Generar ruta
                  </button>
                </div>
              )}
              {contenido === 'Turismo' && (
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-bold">Lugares populares</h3>
                  <img
                    src={lugar2}
                    alt=""
                    className="w-full h-[150px] object-cover rounded-md mt-2"
                  />
                  <div className="flex items-center mt-4">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <p>Cascadas de Tamasopo- Zona Centro, C.P. 79700 70km</p>
                  </div>
                  <button
                    onClick={generarRuta}
                    className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Generar ruta
                  </button>
                </div>
              )}
              {contenido === 'Hoteles' && (
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-bold">Hoteles populares</h3>
                  <img
                    src={hotel3}
                    alt=""
                    className="w-full h-[150px] object-cover rounded-md mt-2"
                  />
                  <div className="flex items-center mt-4">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <p>Hotel San José - Damian Carmona s/n, 79760, Aquismón 40km</p>
                  </div>
                  <button
                    onClick={generarRuta}
                    className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Generar ruta
                  </button>
                </div>
              )}
              {contenido === 'Restaurantes' && (
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-bold">Restaurantes populares</h3>
                  <img
                    src={comida1}
                    alt=""
                    className="w-full h-[150px] object-cover rounded-md mt-2"
                  />
                  <div className="flex items-center mt-4">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <p>El Huastequito - Blvd. Montebello 294, San Luis Potosí. 47 km</p>
                  </div>
                  <button
                    onClick={generarRuta}
                    className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Generar ruta
                  </button>
                </div>
              )}
              {contenido === 'Tiendas' && (
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-bold">Tiendas populares</h3>
                  <img
                    src={tienda1}
                    alt=""
                    className="w-full h-[150px] object-cover rounded-md mt-2"
                  />
                  <div className="flex items-center mt-4">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <p>Taller artesanal náhuatl - Laredo os, 79880 La Pimienta 10 km</p>
                  </div>
                  <button
                    onClick={generarRuta}
                    className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Generar ruta
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Botón flotante para generar pasaporte */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={generarPasaporte}
          className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
        >
          Generar pasaporte virtual
        </button>
      </div>
    </div>
  );
};

export default Mapa;










