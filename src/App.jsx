import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Presentacion from './componentes/Presentacion';
import Turismo from './componentes/Turismo';
import Hoteles from './componentes/Hoteles';
import Restaurantes from './componentes/Restaurantes';
import Tiendas from './componentes/Tiendas';
import Mapa from './componentes/Mapa';
import Pasaporte from './componentes/pasaporte';
import Login from './componentes/login';
import Encuesta from './componentes/encuesta';
import Recuperar_Contraseña from './componentes/recuperar-contraseña';
import Favoritos from './componentes/Favoritos';
import Perfil from './componentes/Perfil';
import Logout from './componentes/logout';
import Crear_Cuenta from './componentes/crear-cuenta';

import { LogOut, Sidebar } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Presentacion />
  },
  {
    path: "/presentacion",
    element: <Presentacion />
  },
  {
    path: "/turismo",
    element: <Turismo />
  },
  {
    path: "/hoteles",
    element: <Hoteles />
  },
  {
    path: "/restaurantes",
    element: <Restaurantes />
  },
  {
    path: "/tiendas",
    element: <Tiendas />
  },
  {
    path: "/mapa",
    element: <Mapa />
  },
  {
    path: "/pasaporte",
    element: <Pasaporte />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/encuesta",
    element: <Encuesta />
  },
  {
    path: "/recuperar-contraseña",
    element: <Recuperar_Contraseña />
  },
  {
    path: "/favoritos",
    element: <Favoritos />
  },
  {
    path: "/perfil",
    element: <Perfil />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/crear-cuenta",
    element: <Crear_Cuenta />
  }
]);

const App = () => {
  return (
    <div className='flex'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
