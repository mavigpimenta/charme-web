import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '/logo_completa.png'
import { Link } from 'react-router-dom';

interface NavbarProps {
    scrollToSection: (id: string) => void;
    isOpen: boolean;
    toggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection, isOpen, toggleMenu }) => {
    return (
        <nav className="bg-white z-50 w-full fixed text-gray-900 px-6 py-2 flex items-center justify-between shadow-lg">
            <div className="flex items-center p-3 sm:pl-20">
                <a href="#home">
                    <img src={Logo} alt="Logo" className="w-40" />
                </a>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-orange-600 focus:outline-none">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            <ul className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block font-semibold`}>
                <li>
                    <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-orange-600 transition-colors">Home</a>
                </li>
                <li>
                    <a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-orange-600 transition-colors">Quem Somos</a>
                </li>
                <li>
                    <Link to="/catalog" className="cursor-pointer hover:text-orange-600 transition-colors">Catálogos</Link>
                </li>
                <li>
                    <a onClick={() => scrollToSection('contato')} className="cursor-pointer hover:text-orange-600 transition-colors">Contato</a>
                </li>
            </ul>
        </nav>
    );
};
