import React from 'react';
import mexico from "../assets/mexico.jpg";
import usuario from "../assets/usuario.webp";

const Pasaporte = () => {
  const handlePrint = () => {
    window.print(); // Llama al método de impresión del navegador
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title} className='items-center'>Pasaporte Virtual</h1>

      <div style={styles.cardsContainer}>
        {/* Cuadro 1: Simulación del pasaporte con el logo de México */}
        <div style={styles.passportCard} className='items-center'>
          <div style={styles.logoContainer}>
            <img
              src={mexico}
              alt="Logo de México"
              style={styles.logo} // Aquí aplicamos los estilos circulares
            />
          </div>
          <h3 style={styles.cardTitle}>Pasaporte de TamakásExplor</h3>
        </div>

        {/* Cuadro 2: Información del usuario */}
        <div style={styles.userCard}>
          <img
            src={usuario}
            alt="Foto de Usuario"
            style={styles.userPhoto}
          />
          <div style={styles.userInfo}>
            <p className='text-left'><strong>Nombre:</strong> </p>
            <p className='text-left'><strong>Apellido:</strong> </p>
          </div>
          <div style={styles.touristSpots}>
            <h3><strong>Lugares Visitados:</strong></h3>
            <ul>
              <li>Xilitla:</li>
              <li>Aquismón:</li>
              <li>Ciudad Valles:</li>
              <li>Tamasopo:</li>
            </ul>
            <p><strong>Firma:</strong> _________________</p>
          </div>
        </div>
      </div>


    </div>
  );
};

// Estilos en línea para los diferentes elementos
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '20px',
    color: '#333',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  passportCard: {
    width: '45%',
    backgroundColor: '#1d9a98', // Cambiado a azul
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Necesario para posicionar el texto abajo
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centra los elementos dentro del cuadro
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center', // Centra la imagen horizontalmente
    alignItems: 'center', // Centra la imagen verticalmente
    height: '150px', // Establece un tamaño para el área del logo
  },
  userCard: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '150px', // Asegúrate de que la imagen tenga un tamaño cuadrado
    height: '150px',
    borderRadius: '50%', // Hace que la imagen sea circular
    objectFit: 'cover', // Esto asegura que la imagen se ajuste bien dentro del círculo
  },
  cardTitle: {
    marginTop: '15px',
    fontSize: '18px',
    color: '#fff', // Texto blanco para contraste
    position: 'absolute', // Coloca el texto en la parte inferior
    bottom: '20px', // Ajusta la distancia desde la parte inferior
  },
  userPhoto: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '15px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  userInfo: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  touristSpots: {
    marginTop: '10px',
  },
  printContainer: {
    textAlign: 'right', // Alinea el enlace a la derecha
    marginTop: '20px', // Da un poco de espacio arriba
  },
  printLink: {
    backgroundColor: 'gray', // Color del enlace
    color: 'black',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
};

export default Pasaporte;


