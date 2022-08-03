import './App.css';
import Register from './components/signUp';
import Campagne from './components/campagne';
import Login from './components/login';
import Personnage from './components/personnage'
import Profil from './components/profil';
import Fiche from './components/ficheperso'
import Fichednd from './components/fichepersodnd'
import Perso_DND from './components/perso_dnd'
import  Perso_Knight from './components/perso_knight'
import KnightDash from './components/knightdash';
import DnDDash from './components/dnddash';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import Navbar from "./components/navbar";
import WithoutNav from "./components/withoutNav";
import WithNav from "./components/withNav";
import CreatePerso from "./components/CreatePerso";



function App() {

  return (
    //@ts-ignore
    <Router>
      <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Login />} />
            <Route path='/signup' element={<Register />} />
          </Route>
        <Route element={<WithNav />}>
          <Route path='/campagne' element={<Campagne />} />
          {/*@ts-ignore*/}
          <Route path='/profil' element={<Profil />} />
          <Route path='/knightdash' element={<KnightDash />} />
          <Route path='/dnddash' element={<DnDDash />} />
          <Route path='/personnagek/:id' element={<Perso_Knight />} />
          <Route path="/createperso/:id" element={<CreatePerso />} />
          <Route path='/fichepersodnd' element={<Fichednd />} />
          <Route path='/personnage/:id' element={<Perso_DND />} />
          <Route path='/ficheperso' element={<Fiche />} />
         </Route> 
      </Routes>
    </Router>
  );
}
export default App;


