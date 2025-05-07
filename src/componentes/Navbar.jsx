import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Cambia esto con la ubicación de tu logo

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa de navegación
    const [userMenuOpen, setUserMenuOpen] = useState(false); // Estado para el menú de usuario
    const [showLogoutWarning, setShowLogoutWarning] = useState(false); // Estado para mostrar la advertencia
    const menuRef = useRef(null); // Referencia para el menú de navegación
    const userMenuRef = useRef(null); // Referencia para el menú de usuario

    // Cerrar los menús si se hace clic fuera de ellos
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (menuRef.current && !menuRef.current.contains(event.target)) &&
                (userMenuRef.current && !userMenuRef.current.contains(event.target))
            ) {
                setMenuOpen(false); // Cerrar menú de navegación
                setUserMenuOpen(false); // Cerrar menú de usuario
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado del menú hamburguesa de navegación
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen); // Cambia el estado del menú de usuario
    };

    const handleLogoutClick = () => {
        setShowLogoutWarning(true); // Mostrar advertencia de cierre de sesión
    };

    const handleConfirmLogout = () => {
        alert("Sesión cerrada.");
        setShowLogoutWarning(false); // Cerrar la advertencia
    };

    const handleCancelLogout = () => {
        setShowLogoutWarning(false); // Cerrar la advertencia
    };

    return (
        <div className="bg-white">
            <nav className="flex bg-white justify-between w-full items-center py-3 px-5 fixed top-0 left-0 z-50 shadow-md">
                {/* Logo y texto a la izquierda */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
                    <span className="text-[#208A89] text-xl font-bold">TamakásExplor</span>
                </div>

                {/* Menú horizontal para pantallas grandes */}
                <div className="hidden md:flex items-center gap-8 ml-auto">
                    <ul className="flex gap-8 text-black text-lg font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? "text-yellow-600" : "text-black"} cursor-pointer`}
                        >
                            <li>Inicio</li>
                        </NavLink>
                        <NavLink
                            to="/turismo"
                            className={({ isActive }) => `${isActive ? "text-yellow-600" : "text-black"} cursor-pointer`}
                        >
                            <li>Turismo</li>
                        </NavLink>
                        <NavLink
                            to="/hoteles"
                            className={({ isActive }) => `${isActive ? "text-yellow-600" : "text-black"} cursor-pointer`}
                        >
                            <li>Hoteles</li>
                        </NavLink>
                        <NavLink
                            to="/restaurantes"
                            className={({ isActive }) => `${isActive ? "text-yellow-600" : "text-black"} cursor-pointer`}
                        >
                            <li>Restaurantes</li>
                        </NavLink>
                        <NavLink
                            to="/tiendas"
                            className={({ isActive }) => `${isActive ? "text-yellow-600" : "text-black"} cursor-pointer`}
                        >
                            <li>Tiendas</li>
                        </NavLink>
                        <NavLink
                            to="/mapa"
                            className={({ isActive }) => `${isActive ? "text-yellow-600" : "text-black"} cursor-pointer`}
                        >
                            <li>Mapa</li>
                        </NavLink>
                    </ul>

                    {/* Ícono de usuario para el menú de perfil */}
                    <button onClick={toggleUserMenu} className="text-black ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Íconos de hamburguesa para pantallas pequeñas */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Menú de navegación */}
                    <button onClick={toggleMenu} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {/* Menú de usuario */}
                    <button onClick={toggleUserMenu} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Menú desplegable de navegación para pantallas pequeñas */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden bg-[#208A89] text-white p-5 mt-16 shadow-md"
                >
                    <NavLink
                        to="/"
                        className="block py-2 text-lg font-bold hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/turismo"
                        className="block py-2 text-lg font-bold hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Turismo
                    </NavLink>
                    <NavLink
                        to="/hoteles"
                        className="block py-2 text-lg font-bold hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Hoteles
                    </NavLink>
                    <NavLink
                        to="/restaurantes"
                        className="block py-2 text-lg font-bold hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Restaurantes
                    </NavLink>
                    <NavLink
                        to="/tiendas"
                        className="block py-2 text-lg font-bold hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Tiendas
                    </NavLink>
                    <NavLink
                        to="/mapa"
                        className="block py-2 text-lg font-bold hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Mapa
                    </NavLink>
                </div>
            )}

            {/* Menú de usuario (escritorio y móvil) */}
            {userMenuOpen && (
                <div ref={userMenuRef} className="absolute right-10 top-16 bg-[#208A89] text-white p-4 mt-10 shadow-lg rounded">
                    <NavLink to="/login" className="block py-2 font-bold underline">
                        Iniciar sesión
                    </NavLink>
                    <NavLink to="/favoritos" className="block py-2 font-bold underline">
                        Favoritos
                    </NavLink>
                    <NavLink to="/perfil" className="block py-2 font-bold underline">
                        Perfil
                    </NavLink>
                    <button onClick={handleLogoutClick} className="block py-2 text-yellow-500 font-bold underline">
                        Cerrar sesión
                    </button>
                </div>
            )}

            {/* Modal de advertencia para cerrar sesión */}
            {showLogoutWarning && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded shadow-lg text-center">
                        <p>¿Estás seguro de que deseas cerrar sesión?</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <button
                                onClick={handleConfirmLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Sí
                            </button>
                            <button
                                onClick={handleCancelLogout}
                                className="bg-gray-300 text-black px-4 py-2 rounded-md"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;