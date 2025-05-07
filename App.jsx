import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentacion from './componentes/Presentacion';
import Favoritos from './componentes/Favoritos';
import Tiendas from './componentes/Tiendas';
import Restaurantes from './componentes/Restaurantes';
import Hoteles from './componentes/Hoteles';
import Login from './componentes/login';
import Crear_Cuenta from './componentes/crear-cuenta';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Presentacion />} /> {/* Ruta principal */}
                <Route path="/presentacion" element={<Presentacion />} /> {/* Ruta para Presentacion */}
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/tiendas" element={<Tiendas />} />
                <Route path="/restaurantes" element={<Restaurantes />} />
                <Route path="/hoteles" element={<Hoteles />} />
                <Route path="/login" element={<Login />} />
                <Route path="/crear-cuenta" element={<Crear_Cuenta />} />
            </Routes>
        </Router>
    );
};

export default App;