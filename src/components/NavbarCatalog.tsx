import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../../public/logo_completa.png'


export const NavbarCatalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white z-50 w-full fixed text-gray-900 px-6 py-2 h-24 flex items-center justify-between shadow-lg">
            <div className="flex items-center p-3 sm:pl-20">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="w-40" />
                </Link>
            </div>
            <div className="md:hidden"> 
                <button onClick={toggleMenu} className="text-orange-600 focus:outline-none">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            <ul className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block font-semibold`}>
                <li>
                    <Link to="/" className="cursor-pointer hover:text-orange-600 transition-colors">Home</Link>
                </li>
                <li>
                    <Link to="/" className="cursor-pointer hover:text-orange-600 transition-colors">Quem Somos</Link>
                </li>
                <li>
                    <Link to="/" className="cursor-pointer hover:text-orange-600 transition-colors">Catálogos</Link>
                </li>
                <li>
                    <Link to="/" className="cursor-pointer hover:text-orange-600 transition-colors">Contato</Link>
                </li>
            </ul>
        </nav>
    );
};
