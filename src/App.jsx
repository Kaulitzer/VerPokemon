import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from "./components/NavBar";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import PokemonDetails from "./views/PokemonDetails"; 
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<PokemonDetails />} />
      </Routes>
    </Router> 
  );
}

export default App;
