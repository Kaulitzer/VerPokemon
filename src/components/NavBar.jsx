import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/pokemons" activeClassName="active">
        Pokemons
      </NavLink>
    </nav>
  );
}

export default Navbar;
