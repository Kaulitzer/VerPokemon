import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  const redirectToPokemons = () => {
    // Redirecciona programáticamente a la ruta '/pokemons'
    navigate('/pokemons');
  };

  return (
    <div className='principal'>
      <h1>Bienvenido Maestro Pokémon</h1>
      <button onClick={redirectToPokemons}>Ir a Pokemons</button>
    </div>
  );
}

export default Home;
