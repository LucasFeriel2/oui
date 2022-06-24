import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";



function Campagne() {


  return (
    <div className="App">
      <div style={{position: "absolute", width: "100%", height: "8%", left: "0px", top: "0px", background: "#00487C"}}>
        <img className='basis-1/5' src="https://i.goopics.net/c2girn.png" style={{position: "absolute", width: "7%", height: "100%", left: "0px", top: "4px"}}></img>
        <p className='basis-2/5' style={{position: "absolute", width: "10%", height: "5%", left: "15%", top: "30%", fontSize: "32px"}}>Profil</p>
        <p className='basis-5/5' style={{position: "absolute", width: "10%", height: "5%", left: "85%", top: "30%", fontSize: "32px"}}>Déconnexion</p>
      </div>
      <h1 style={{position: "absolute", width: "501px", height: "145px", left: "35%", top: "10%", fontWeight: "400", fontSize: "64px", lineHeight: "74px", textAlign: "center", color: "#FFFFFF"}}>Vos campagnes</h1>
    </div>

    
  );
}

export default Campagne;





function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

