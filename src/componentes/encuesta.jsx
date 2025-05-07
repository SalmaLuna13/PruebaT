import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para redirigir

const Encuesta = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: ''
    }); // Estado para almacenar las respuestas
    const navigate = useNavigate(); // Hook para redirigir a otra página

    // Función para manejar el cambio de respuesta
    const handleAnswerChange = (question, answer) => {
        setAnswers({
            ...answers,
            [question]: answer
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer alguna lógica para procesar las respuestas, si es necesario

        // Después de procesar, redirigir a la página de presentación
        navigate('/'); // Redirige a la página de presentación
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 w-screen">
            {/* Cuadro de encuesta */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-300">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">
                    Encuesta de Opinión
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Pregunta 1 */}
                    <div className="mb-4">
                        <p className="font-semibold">1. ¿Qué tipo de destinos turísticos prefieres visitar?</p>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Aventuras"
                                    checked={answers.question1 === 'Aventuras'}
                                    onChange={() => handleAnswerChange('question1', 'Aventuras')}
                                    className="mr-2"
                                />
                                Aventuras
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Montaña"
                                    checked={answers.question1 === 'Montaña'}
                                    onChange={() => handleAnswerChange('question1', 'Montaña')}
                                    className="mr-2"
                                />
                                Montaña
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Ciudades culturales"
                                    checked={answers.question1 === 'Ciudades culturales'}
                                    onChange={() => handleAnswerChange('question1', 'Ciudades culturales')}
                                    className="mr-2"
                                />
                                Ciudades culturales
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Ecoturismo/Naturaleza"
                                    checked={answers.question1 === 'Ecoturismo/Naturaleza'}
                                    onChange={() => handleAnswerChange('question1', 'Ecoturismo/Naturaleza')}
                                    className="mr-2"
                                />
                                Ecoturismo/Naturaleza
                            </label>
                        </div>
                    </div>

                    {/* Pregunta 2 */}
                    <div className="mb-4">
                        <p className="font-semibold">2. ¿Qué tipo de alojamiento prefieres?</p>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Hotel"
                                    checked={answers.question2 === 'Hotel'}
                                    onChange={() => handleAnswerChange('question2', 'Hotel')}
                                    className="mr-2"
                                />
                                Hotel
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Airbnb"
                                    checked={answers.question2 === 'Airbnb'}
                                    onChange={() => handleAnswerChange('question2', 'Airbnb')}
                                    className="mr-2"
                                />
                                Airbnb
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Camping"
                                    checked={answers.question2 === 'Camping'}
                                    onChange={() => handleAnswerChange('question2', 'Camping')}
                                    className="mr-2"
                                />
                                Camping
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Resort"
                                    checked={answers.question2 === 'Resort'}
                                    onChange={() => handleAnswerChange('question2', 'Resort')}
                                    className="mr-2"
                                />
                                Resort
                            </label>
                        </div>
                    </div>

                    {/* Pregunta 3 */}
                    <div className="mb-4">
                        <p className="font-semibold">3. ¿Qué tipo de contenido te gustaría ver más en nuestra web?</p>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Recomendaciones gastronómicas"
                                    checked={answers.question3 === 'Recomendaciones gastronómicas'}
                                    onChange={() => handleAnswerChange('question3', 'Recomendaciones gastronómicas')}
                                    className="mr-2"
                                />
                                Recomendaciones gastronómicas
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Experiencias de otros viajeros"
                                    checked={answers.question3 === 'Experiencias de otros viajeros'}
                                    onChange={() => handleAnswerChange('question3', 'Experiencias de otros viajeros')}
                                    className="mr-2"
                                />
                                Experiencias de otros viajeros
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Lugares turísticos"
                                    checked={answers.question3 === 'Lugares turísticos'}
                                    onChange={() => handleAnswerChange('question3', 'Lugares turísticos')}
                                    className="mr-2"
                                />
                                Lugares turísticos
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Tiendas turísticas"
                                    checked={answers.question3 === 'Tiendas turísticas'}
                                    onChange={() => handleAnswerChange('question3', 'Tiendas turísticas')}
                                    className="mr-2"
                                />
                                Tiendas turísticas
                            </label>
                        </div>
                    </div>

                    {/* Pregunta 4 */}
                    <div className="mb-4">
                        <p className="font-semibold">4. ¿Qué presupuesto promedio destinas a un viaje?</p>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question4"
                                    value="Menos de $500"
                                    checked={answers.question4 === 'Menos de $500'}
                                    onChange={() => handleAnswerChange('question4', 'Menos de $500')}
                                    className="mr-2"
                                />
                                Menos de $500
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question4"
                                    value="Entre $500 y $1,000"
                                    checked={answers.question4 === 'Entre $500 y $1,000'}
                                    onChange={() => handleAnswerChange('question4', 'Entre $500 y $1,000')}
                                    className="mr-2"
                                />
                                Entre $500 y $1,000
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question4"
                                    value="Entre $1,000 y $3,000"
                                    checked={answers.question4 === 'Entre $1,000 y $3,000'}
                                    onChange={() => handleAnswerChange('question4', 'Entre $1,000 y $3,000')}
                                    className="mr-2"
                                />
                                Entre $1,000 y $3,000
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question4"
                                    value="Más de $3,000"
                                    checked={answers.question4 === 'Más de $3,000'}
                                    onChange={() => handleAnswerChange('question4', 'Más de $3,000')}
                                    className="mr-2"
                                />
                                Más de $3,000
                            </label>
                        </div>
                    </div>

                    {/* Pregunta 5 */}
                    <div className="mb-4">
                        <p className="font-semibold">5. ¿Qué actividades disfrutas más en un destino turístico?</p>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question5"
                                    value="Turismo gastronómico"
                                    checked={answers.question5 === 'Turismo gastronómico'}
                                    onChange={() => handleAnswerChange('question5', 'Turismo gastronómico')}
                                    className="mr-2"
                                />
                                Turismo gastronómico
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question5"
                                    value="Historia y cultura"
                                    checked={answers.question5 === 'Historia y cultura'}
                                    onChange={() => handleAnswerChange('question5', 'Historia y cultura')}
                                    className="mr-2"
                                />
                                Historia y cultura
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question5"
                                    value="Naturaleza y senderismo"
                                    checked={answers.question5 === 'Naturaleza y senderismo'}
                                    onChange={() => handleAnswerChange('question5', 'Naturaleza y senderismo')}
                                    className="mr-2"
                                />
                                Naturaleza y senderismo
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question5"
                                    value="Compras"
                                    checked={answers.question5 === 'Compras'}
                                    onChange={() => handleAnswerChange('question5', 'Compras')}
                                    className="mr-2"
                                />
                                Compras
                            </label>
                        </div>
                    </div>

                    {/* Pregunta 6 */}
                    <div className="mb-4">
                        <p className="font-semibold">6. ¿Al momento de hospedarte en el hotel prefieres que incluya servicio a restaurante y paquetes turísticos?</p>
                        <div className="flex space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question6"
                                    value="Sí"
                                    checked={answers.question6 === 'Sí'}
                                    onChange={() => handleAnswerChange('question6', 'Sí')}
                                    className="mr-2"
                                />
                                Sí
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question6"
                                    value="No"
                                    checked={answers.question6 === 'No'}
                                    onChange={() => handleAnswerChange('question6', 'No')}
                                    className="mr-2"
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Botón de envío */}
                    <div className="mt-6 text-end">
                        <button
                            type="submit"
                            className="w-50 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-gray-700"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Encuesta;


