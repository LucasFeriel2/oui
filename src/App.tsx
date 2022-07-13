import React from 'react';
import './App.css';
import Register from './components/signUp';
import Campagne from './components/campagne';
import Login from './components/login';
import Personnage from './components/personnage'
import Profil from './components/profil';
import Fiche from './components/ficheperso'
import Fichednd from './components/fichepersodnd'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

function App() {
  return (   
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/campagne' element={<Campagne/>} />
        <Route path='/profil' element={<Profil/>} />
        <Route path='/personnage' element={<Personnage/>} />
        <Route path='/ficheperso' element={<Fiche/>} />
        <Route path='/fichepersodnd' element={<Fichednd/>} />
      </Routes>
    </Router>
  );
}
export default App;


