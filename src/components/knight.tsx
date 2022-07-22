import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";
import { useState } from 'react';



function Fiche() {

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

  useEffect(() => {
    axios.get(`https://api.jdashracademy.com/personage/`)
  .then(res => {
    
  })

  }, []);
  

  return (
    <div className="App">
      <div className='absolute left-0 top-0 w-full h-full overflow-x-auto ' style={{background:"#D9D9D9"}}>
        <form>
        <div className='absolute left-0 top-28 w-full h-24 flex justify-between pl-12 pr-12'>
          <div>
            <label className='top-4 text-black'>Nom</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Surnom</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Archétype</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Haut-fait</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Section</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Blason</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input>
          </div>
        </div>
        <div className='absolute left-0 top-48 w-full h-32 flex justify-between pl-12 pr-12'>
            <div>
              <label className='top-4 text-black'>Avantages</label><br></br>
              <input className='top-10 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-20 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Inconvénients</label><br></br>
              <input className='top-10 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-20 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Motivations majeures</label><br></br>
              <input className='top-10 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-20 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Motivations mineures</label><br></br>
              <input className='top-10 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-20 w-50 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
        </div>

        <div className='absolute left-0 top-80 w-full h-44 flex justify-between pl-12 pr-12'>
          <div>
            {/* <label className=' top-2 text-black'>PA</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/7634/7634606.png' className='w-16 '></img>
            <label className=' top-4 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>PE</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/8030/8030382.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className='top-2 text-black'>CDF</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/1388/1388574.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'> max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>PS</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/535/535285.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'> max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>PG </label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/5861/5861070.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>PX</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/5542/5542204.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>P.héro</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/1477/1477264.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>P.contact</label><br></br><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/1250/1250592.png' className='w-16 '></img>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>P.espoir</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/5156/5156564.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>max</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>Défense</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/861/861377.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>OD</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>Réaction</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/5073/5073994.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>OD</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div>
            {/* <label className=' top-2 text-black'>Initiative</label><br></br> */}
            <img src='https://cdn-icons-png.flaticon.com/512/2088/2088617.png' className='w-16 '></img>
            <label className=' top-2 text-black'>actuel</label><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input><br></br>
            <label className=' top-20 text-black'>OD</label><br></br>
            <input className=' top-28 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
        </div>
        <div className='absolute left-0 top-[550px] w-full h-44 bg-black h-8 '>
        <label className='text-center text-white'>Aspects, caractéristiques et overdrives</label>
        </div>
        <div className='absolute left-0 top-[600px] w-full flex justify-between pl-12 pr-12  '>
          <div className='w-44'>
            <label className=' top-2 text-black'>CHAIR</label><br></br><br></br>
            <input className=' top-10 w-16 h-16 bg-transparent border-black border-4  text-center'></input>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Déplacement</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col  '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : Depl portée courte gratuite</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Ignore petits obstacles</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Depl portée moyenne gratuite</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ignore grands obstacles</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Ignore dgts chute supérieur 50m</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Force</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : + 3 dégâts / 500Kg</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : + 6 dégâts / 2t</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : + 9 dégâts / 10t</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : + 12 dégâts / 30t</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : + 15 dégâts / 80t</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Endurance</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Ignore choc 1</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : +6 PS</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ignore choc 2</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : - Endu au débordement</label>
          </div>
        </div>
        <div className='absolute left-0 top-[800px] w-full flex justify-between pl-12 pr-12 '>
          <div className='w-44'>
            <label className=' top-2 text-black'>BETE</label><br></br><br></br>
            <input className=' top-10 w-16 h-16 bg-transparent border-black border-4  text-center'></input>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Hargne</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Agit quand même à 0 PS</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Pas de blessure grave à 0 PS</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Ignore capacité Anathème</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Combat</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Au contact +2 réaction</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Akimbo, 1 seul dé malus</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ambidextre, 1 seul dé malus</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Bande aussi touchée</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Instinct</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Lance 2 fois initiative</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : +3 initiative</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ignore attaque surprise</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Ignore embuscade</label>
          </div>
        </div>
        <div className='absolute left-0 top-[1000px] w-full flex justify-between pl-12 pr-12 '>
          <div className='w-44'>
            <label className=' top-2 text-black'>MACHINE</label><br></br><br></br>
            <input className=' top-10 w-16 h-16 bg-transparent border-black border-4  text-center'></input>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Tir</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Ignore 1er malus de portée</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Akimbo, 1 seul dé malus</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ambidextre, 1 seul dé malus</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Bande aussi touchée</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Savoir</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : Accès base d'infos</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Accès aux infos locales</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : +1D6 aux soins donnés</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Accès toutes bases de données</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Ignore échec critique</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Technique</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : Connexion machine au contact</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Connaît toutes machines</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Connexion à portée lointaine</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Réparation d'urgence : 6PA</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Programmes instantanés</label>
          </div>
        </div>
        <div className='absolute left-0 top-[1200px] w-full flex justify-between pl-12 pr-12 '>
          <div className='w-44'>
            <label className=' top-2 text-black'>DAME</label><br></br><br></br>
            <input className=' top-10 w-16 h-16 bg-transparent border-black border-4  text-center'></input>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Aura</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Ciblé en dernier par les humains</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Créer 2 nouveaux contact</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Attire l'attention 1 tour</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Ajoute Aura à la défense</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Parole</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : Parler maintient en vie</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : 1D6 PES 1 fois par allié</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Imite voix déjà entendue</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Hypnotise les humains</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : +2D6 PES 1 fois par allié</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Sang-froid</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Ignore malus lié au stress</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ignore capacité peur</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Ignore capacité domination</label>
          </div>
        </div>
        <div className='absolute left-0 top-[1400px] w-full flex justify-between pl-12 pr-12 '>
          <div className='w-44'>
            <label className=' top-2 text-black'>MASQUE</label><br></br><br></br>
            <input className=' top-10 w-16 h-16 bg-transparent border-black border-4  text-center'></input>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Discrétion</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : + Discr au dgts sans OD</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Marche en silence</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Invisible si immobile</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : + Discr au dgts avec OD</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Dextérité</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : ------</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Jamais désarmé</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Ignore lourd</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Réaction = score défense</label>
          </div>
          <div className='w-44'>
            <label className=' top-2 text-black'>Perception</label><br></br><br></br>
            <input className=' top-10 w-12 h-12 bg-transparent border-black border-2  text-center'></input>
          </div>
          <div className='grid grid-rows-5 grid-flow-col '>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <input type="checkbox" className='w-10 h-5'></input>
            <label className='text-black  text-sm text-left w-72'>Niv 1 : Zoom X400</label>
            <label className='text-black  text-sm text-left w-72'>Niv 2 : Zoom audio</label>
            <label className='text-black  text-sm text-left w-72'>Niv 3 : Zoom olfactif</label>
            <label className='text-black  text-sm text-left w-72'>Niv 4 : Infos précises via RA</label>
            <label className='text-black  text-sm text-left w-72'>Niv 5 : Sonar</label>
          </div>
        </div>
        <div className='absolute left-0 top-[1600px] w-full h-44 bg-black h-8 '>
        <label className='text-center text-white'>IA</label>
        </div>
        <div className='absolute left-0 top-[1650px] w-full'>
          <div className='absolute left-0  w-full h-24 flex justify-between pl-12 pr-12'>
            <div>
              <label className='top-4 text-black'>Code de fabrication</label><br></br>
              <input className='top-10 w-52 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Surnom</label><br></br>
              <input className='top-10 w-52 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Caractère</label><br></br>
              <input className='top-10 w-52 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Atout</label><br></br>
              <input className='top-10 w-52 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'>Handicap</label><br></br>
              <input className='top-10 w-52 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
          </div>
        </div>
        <div className='absolute left-0 top-[1800px] w-full h-44 bg-black h-8 '>
        <label className='text-center text-white'>Slot</label>
        </div>
        <div className='absolute left-0 top-[1850px] w-full'>
          <div className='absolute left-0  w-full h-24 flex justify-between pl-12 pr-12'>
            <div>
              <label className='top-4 text-black'>Méta-armure</label><br></br>
              <input className='top-10 w-52 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            </div>
            <div>
              <label className='top-4 text-black'></label><br></br>
              <label className='top-4 text-black'>Actuel</label><br></br>
              <label className='top-4 text-black'>Total</label>
            </div>
            <div>
              <label className='top-4 text-black'>Bras gauche</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Bras droit</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Torse</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Tête</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Jambe gauche</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Jambe droite</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
          </div>
        </div>
        <div className='absolute left-0 top-[2000px] w-full h-44 bg-black h-8 '>
        <label className='text-center text-white'>Capacités de méta-armure</label>
        </div>
        <div className='absolute left-0 top-[2050px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-1/2 top-[2050px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-0 top-[2200px] w-full h-44 bg-black h-8 '>
        <label className='text-center text-white'>Équipement</label>
        </div>
        <div className='absolute left-0 top-[2250px] w-full h-24 flex justify-between pl-12 pr-12'>
          <div>
            <label className='top-4 text-black'>Nod d'armure</label><br></br>
            <label className='top-4 text-black'>+3D6 PA</label><br></br>
          </div>
          <div>
          <input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>/<input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Nod d'énergie</label><br></br>
            <label className='top-4 text-black'>+3D6 PE</label><br></br>
          </div>
          <div>
          <input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>/<input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Nod de soin</label><br></br>
            <label className='top-4 text-black'>+3D6 PS</label><br></br>
          </div>
          <div>
          <input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>/<input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>
          </div>
          <div>
            <label className='top-4 text-black'>Grenade</label><br></br>
            <label className='top-4 text-black'>Shrapnel/flash/IEM</label><br></br>
          </div>
          <div>
          <input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>/<input className=' top-10 w-8 h-8 bg-transparent  text-center'></input>
          </div>
        </div>
        <div className='absolute left-0 top-[2350px] w-full h-24 flex justify-between pl-12 pr-12'>
          <div>
            <label className='top-4 text-black'>Rack</label><br></br>
            <input className='top-10 w-64 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-64 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-64 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-64 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-64 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-64 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
          </div>
          <div>
            <label className='top-4 text-black'>Dégâts</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
          </div>
          <div>
            <label className='top-4 text-black'>Violence</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
          </div>
          <div>
            <label className='top-4 text-black'>Portée</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
          </div>
          <div>
            <label className='top-4 text-black'>Énergie</label><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-40 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
          </div>
          <div>
            <label className='top-4 text-black'>Effets</label><br></br>
            <input className='top-10 w-96 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-96 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-96 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-96 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-96 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <input className='top-10 w-96 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
          </div>
        </div>
        <div className='absolute left-0 top-[2650px] w-full h-44 bg-black h-8 '>
        <label className='text-center text-white'>Modules</label>
        </div>
         <div className='absolute left-0 top-[2700px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-1/2 top-[2700px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-0 top-[2850px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-1/2 top-[2850px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-0 top-[3000px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        <div className='absolute left-1/2 top-[3000px] w-1/2 h-24'>
            <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
            <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input>
        </div>
        </form>
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

export default Fiche;





