import React from 'react';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Certifique-se de que o TailwindCSS esteja configurado
import ConectaProLogo from '../ConecataPro.webp';
const Navbar3 = () => {
  return (
    <nav className="bg-blue-500 px-4 py-2 h-16">
      <ul className="flex w-full justify-around decorate-none">
      <img src={ConectaProLogo} alt="ConectaPro Logo" className="h-12 rounded-sm" />
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cadastro"
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}
          >
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/usuarios"
            className={({ isActive }) => isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}
          >
            Usuários
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar3;
