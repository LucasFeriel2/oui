import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";
import Cards from "./cards"
import { useState } from 'react';


function Campagne() {
  const [showForm, setShowForm] = useState(false);
  let navigate = useNavigate(); 
  useEffect(() => {
    var user = getAuth().currentUser;
    if (user) {
    // User is signed in.
  } else {
    window.alert("Vous n'êtes pas connecté, accès refusé");
    let path = `/`;
    navigate(path);
  }
  }, []);

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

  const [showCard, setShowCard] = useState(false);

  const [nameCampaign, setNameCampaign] = useState('');
  const [destCampaign, setdestCampaign] = useState('');
  const [nbPlayer, setNbPlayer] = useState('');
  const [motorGame, setMotorGame] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    console.log('nameCampaign', nameCampaign);
    console.log('destCampaign', destCampaign);
    console.log('nbplayer', nbPlayer);
    console.log('motorGame', motorGame);

    setNameCampaign('');
    setdestCampaign('');
    setNbPlayer('');
    setMotorGame('');
  }
  return (
    <div className="App">
      <div className='absolute w-full h-24 left-11/12 top-0' style={{background: "#00487C"}}>
        <img className='basis-1/5 absolute w-50 h-full  left-0 top-0' src="https://i.goopics.net/c2girn.png"></img>
        <Link to="/profil"><p className='basis-2/5 absolute w-2/12 h-10 left-32 top-6 text-3xl'>Profil</p></Link>
        <button onClick={Signout}><p className='basis-5/5 absolute w-2/12 h-10 left-3/4 top-6 text-3xl'>Déconnexion</p></button>
      </div>
      <h1 className='absolute w-11/12 h-92 top-32 font-normal text-6xl leading-10 text-center text-black'>Vos campagnes</h1>
      <button className='button' onClick={() => setShowForm(true)}>Créer une nouvelle campagne</button>
      {showForm ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold">Création d'une campagne</h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowForm(false)}
                >
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit}>
                  <div className="block text-black text-sm font-bold mb-1">
                    Nom de la campagne
                  </div>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='nameCampaign' name='nameCampaign'
                    onChange={event => setNameCampaign(event.target.value)} value={nameCampaign}
                  />
                  <div className="block text-black text-sm font-bold mb-1">
                    Description de la campagne
                  </div>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='nameCampaign' name='nameCampaign'
                    onChange={event => setdestCampaign(event.target.value)} value={destCampaign}
                  />
                  <div className="block text-black text-sm font-bold mb-1">
                    Nombre de joueurs
                  </div>
                  {/* <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='nameCampaign' name='nameCampaign'
                    onChange={event => setNbPlayer(event.target.value)} value={nbPlayer}
                  /> */}
                  <select className='text-sm shadow appearance-none border rounded w-full py-2 px-1 text-black text-center'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <div className="block text-black text-sm font-bold mb-1">
                    Moteur de jeu
                  </div>
                  {/* <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='nameCampaign' name='nameCampaign'
                    onChange={event => setMotorGame(event.target.value)} value={motorGame}
                  /> */}
                  <select className='text-sm shadow appearance-none border rounded w-full py-2 px-1 text-black text-center'>
                    <option>Knight</option>
                    <option>D&D</option>
                  </select>
                  <div className="block text-black text-sm font-bold mb-1">
                    Image de la campagne
                  </div>
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='nameCampaign' name='nameCampaign'
                    onChange={event => setNameCampaign(event.target.value)} value={nameCampaign}
                  />
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowForm(false)}
                    >
                      Fermer
                    </button>
                    <button
                      className="text-white bg-yellow-300 active:bg-yellow-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      onClick={() => { setShowCard(true); setShowForm(false) }}
                    >
                      Créer une nouvelle campagne
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showCard ? (
        <div className='grid gap-15 grid-cols-3 grid-rows-3 mt-10'>
          <button>
            <Cards></Cards>
          </button>
        </div>
      ) : null}

    </div>
  );
}
export default Campagne;



