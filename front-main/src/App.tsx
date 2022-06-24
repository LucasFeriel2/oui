import React from 'react';
import './App.css';
import axios from 'axios';
import Register from './components/signUp';
import Campagne from './components/campagne';
import Login from './components/login';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/campagne' element={<Campagne/>} />
      </Routes>
    </Router>

    
  );
}

export default App;





function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

