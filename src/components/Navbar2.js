import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Certifique-se de que o TailwindCSS esteja configurado
import ConectaProLogo from '../ConecataPro.webp';
const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-600 px-4 py-2">
      <div className="flex items-center justify-between h-16">
        <div className="text-white text-2xl font-bold">
            <img src={ConectaProLogo} alt="ConectaPro Logo" className="h-12 rounded-sm" />
            </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-yellow-300"
              activeClassName="text-yellow-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cadastro"
              className="text-white hover:text-yellow-300"
              activeClassName="text-yellow-300"
            >
              Cadastro
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usuarios"
              className="text-white hover:text-yellow-300"
              activeClassName="text-yellow-300"
            >
              Usuários
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
