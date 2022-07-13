import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";
import { useState } from 'react';
import Personnage from './personnage';



function Fichednd() {

    // useEffect(() => {
    //     var user = getAuth().currentUser;
    //     if (user) {
    //     // User is signed in.
    //   } else {
    //     window.alert("Vous n'êtes pas connecté, accès refusé");
    //     let path = `/`;
    //     navigate(path);
    //   }
    //   }, []);

 
  let navigate = useNavigate(); 
  const Signout =  () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log(auth)
      let path = `/`;
        navigate(path);
    }).catch((error) => {
      console.log(error)
    });
    
  }
  return (
    <div className="App">
      <div className='absolute left-0 top-0 w-full h-full overflow-x-auto ' style={{background:"#D9D9D9"}}>
        <div className='rounded-l-lg absolute border-double border-black border-4 left-10 top-44 w-1/4 h-24'>
            <label className=''>Nom du Personnage</label><br></br>
            <input type="text" className='bg-transparent w-full h-16 text-2xl'></input>
        </div>
      </div>

      <div className='absolute w-full h-24 left-11/12 top-0' style={{background: "#00487C"}}>
        <img className='basis-1/5 absolute w-50 h-full  left-0 top-0' src="https://i.goopics.net/c2girn.png"></img>
        <Link to="/profil"><p className='basis-2/5 absolute w-2/12 h-10 left-32 top-6 text-3xl'>Profil</p></Link>
        <Link to="/campagne"><p className='basis-3/5 absolute w-2/12 h-10 left-1/4 top-6 text-3xl'>Campagnes</p></Link>
        <Link to="/personnage"><p className='basis-3/5 absolute w-2/12 h-10 left-2/4 top-6 text-3xl'>Personnages</p></Link>
        <button onClick={Signout}><p className='basis-5/5 absolute w-2/12 h-10 left-3/4 top-6 text-3xl'>Déconnexion</p></button>
      </div>
    </div>
    
  );
}

export default Fichednd;





