// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Certifique-se de que o TailwindCSS esteja configurado

const Navbar = () => {
  return (
    <nav className="bg-blue-500 px-4 py-2 h-16">
      <ul className="flex w-full justify-around decorate-none">
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
    </nav>
  );
};

export default Navbar;
