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
        <div className='rounded-l-lg absolute border-double border-black border-4 left-[20px] xl:left-[640px] top-28 w-80 h-24 '>
            <label className=''>Nom du Personnage</label><br></br>
            <input type="text" className='bg-transparent w-full h-16 text-2xl'></input>
        </div>
        <div className='rounded-l-lg absolute border-double border-black border-4  left-[350px]   xl:left-[960px] top-28 w-auto h-48 flex justify-between'>
          <div>
            <label className=''>Classe</label><br></br>
            <input type="text" className='bg-transparent w-full h-12 text-2xl border-transparent border-b-black border-4 '></input><br></br>
            <label className=''>Race</label><br></br>
            <input type="text" className='bg-transparent w-full h-12 text-2xl border-transparent border-b-black border-4 '></input><br></br>
        </div>
        <div>
            <label className=''>Historique</label><br></br>
            <input type="text" className='bg-transparent w-full h-12 text-2xl border-transparent border-b-black border-4 '></input><br></br>
            <label className=''>Alignement</label><br></br>
            <input type="text" className='bg-transparent w-full h-12 text-2xl border-transparent border-b-black border-4 '></input><br></br>
        </div>
        <div>
            <label className=''>Niveau</label><br></br>
            <input type="text" className='bg-transparent w-full h-12 text-2xl border-transparent border-b-black border-4 '></input><br></br>
            <label className=''>XP</label><br></br>
            <input type="text" className='bg-transparent w-full h-12 text-2xl border-transparent border-b-black border-4 '></input><br></br>
        </div>
        </div>
        <div className='rounded-lg absolute border-double bg-gray-400 border-black border-4 left-[12px] xl:left-[96px] top-56 xl:top-52 w-40 h-auto pt-3 flex flex-col justify-between'>
          <div>
            <label className=''>Force</label><br></br>
            <input className='  top-10 w-20 h-20  rounded-t-lg border-black border-2 text-center '></input><br></br><br></br>
          </div>
          <div>
            <label className=''>Dextérité</label><br></br>
            <input className='  top-10 w-20 h-20 rounded-t-lg  border-black border-2 text-center '></input><br></br><br></br>
          </div>
          <div>
            <label className=''>Constitution</label><br></br>
            <input className='  top-10 w-20 h-20 rounded-t-lg border-black border-2 text-center '></input><br></br><br></br>
          </div>
          <div>
            <label className=''>Intelligence</label><br></br>
            <input className='  top-10 w-20 h-20 rounded-t-lg border-black border-2 text-center '></input><br></br><br></br>
          </div>
          <div>
            <label className=''>Sagesse</label><br></br>
            <input className='  top-10 w-20 h-20 rounded-t-lg border-black border-2 text-center '></input><br></br><br></br>
          </div>
          <div>
            <label className=''>Charisme</label><br></br>
            <input className='  top-10 w-20 h-20 rounded-t-lg border-black border-2 text-center '></input><br></br><br></br>
          </div>
        </div>
        <div className=' rounded-lg absolute border-solid border-black border-4 left-[200px] xl:left-[640px] top-56 w-36 xl:w-72 h-16'>
            <input className='rounded-full border-black border-4 border-solid w-20 h-20 -left-4 absolute -top-3 text-center '></input>
            <label className='xl:top-3 w-10 xl:w-44 absolute xl:left-16 xl:text-xl text-sm'>Bonus de maîtrise</label>
        </div>
        <div className=' rounded-lg absolute border-solid border-black border-4 left-[200px] xl:left-[640px] top-[310px]  w-36 xl:w-72 h-16'>
            <input className='rounded-full border-black border-4 border-solid w-20 h-20 -left-4 absolute -top-3 text-center '></input>
            <label className='xl:top-3 w-10 xl:w-44 absolute xl:left-16 xl:text-xl sm:text-sm'>Perception Passive</label>
        </div>
        <div className=' rounded-lg absolute border-solid border-black border-4 left-[200px] xl:left-[282px] top-[400px] xl:top-52 w-72 h-auto pt-3 pb-3 pl-3 pr-3 flex flex-col justify-between text-left'>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Force</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Dextérité</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Constitution</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Intelligence</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Sagesse</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Charisme</label>
            </div><br></br>
            <div className='text-center'>
              <p>Jets de sauvegardes</p>
            </div>
        </div>
        <div className=' rounded-lg absolute border-solid border-black border-4 left-[200px] xl:left-[282px] top-[700px] xl:top-[500px] w-72 h-auto pt-3 pb-3 pl-3 pr-3 flex flex-col justify-between text-left'>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Acrobaties (DEX)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Arcanes (INT)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Athlétisme (FOR)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Discrétion (DEX)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Dressage (SAG)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Escamotage (DEX)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Histoire (INT)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Intimidation (CHA)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Investigation (INT)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Médecine (SAG)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Nature (INT)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Perception (SAG)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Perspicacité (DEX)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Persuasion (SAG)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Religion (INT)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Représentation (CHA)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Survie (SAG)</label>
            </div>
            <div>
              <input type="text" className='bg-transparent w-12 h-8 text-2xl border-transparent border-b-black border-4 text-center text-center '></input>
              <label>   Tromperie (CHA)</label>
            </div><br></br><br></br>
            <div className='text-center'>
              <p>Compétences</p>
            </div>
        </div>
        <div className='rounded-lg absolute border-double bg-gray-400 border-black border-4 left-[500px] top-[400px] xl:left-[640px] xl:top-[400px] w-auto h-96 pt-3 pl-5 pr-5 '>
          <div className='flex justify-between '>
            <div>
              <label>CA</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-20 text-center'></input>
            </div>
            <div>
              <label>Initiative</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-20 text-center'></input>
            </div>
            <div>
              <label>Vitesse</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-20 text-center'></input>
            </div>
            <div>
              <label>Dé de vie</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-20 text-center'></input>
            </div>
          </div><br></br>
          <div className='rounded-t-lg bg-white border-solid border-4 h-auto w-full'>
            <label className='text-sm text-left'>Point de vie max : </label>
            <input className='bg-transparent w-24 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-full h-12 text-2xl border-transparent text-center '></input>
            <label className='text-center'>Point de vie</label>
          </div><br></br>
          <div className='rounded-b-lg bg-white border-solid border-4 h-auto w-full'>
            <input className='bg-transparent w-full h-12 text-2xl border-transparent text-center '></input>
            <label className='text-center'>Point de vie temporaire</label>
          </div>
        </div>
        <div className='rounded-lg absolute border-double bg-gray-400 border-black border-4 left-[500px] top-[800px] xl:left-[1200px] xl:top-[400px] w-auto h-auto pt-3 pl-5 pr-5 '>
          <div className='rounded-t-lg bg-white border-solid border-4 h-auto w-full'>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Traits de personnalité</label>
          </div><br></br>
          <div className='bg-white border-solid border-4 h-auto w-full'>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Idéaux</label>
          </div><br></br>
          <div className='bg-white border-solid border-4 h-auto w-full'>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Liens</label>
          </div><br></br>
          <div className='rounded-b-lg bg-white border-solid border-4 h-auto w-full'>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Défauts</label>
          </div><br></br>
        </div>
        <div className='absolute border-black border-4 left-[250px] top-[1500px] xl:left-[640px] xl:top-[800px] w-auto h-96 pt-3 pl-5 pr-5  '>
          <div className='flex justify-between'>
            <div>
              <label className='top-4 text-black'>Nom</label><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>

              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Bonus ATT</label><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Dégâts</label><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
            <div>
              <label className='top-4 text-black'>Type</label><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
              <input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
            </div>
          </div><br></br>
          <label>Attaques et sorts d'attaques</label>
        </div>
        <div className='rounded-lg absolute border-double border-black border-4 left-[280px] top-[2000px] xl:left-[1200px] xl:top-[1100px] w-auto h-auto pt-3 pl-5 pr-5 '>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Capacité</label>
        </div>
        <div className='rounded-lg absolute border-double border-black border-4 left-[250px] top-[2800px] xl:left-[96px] xl:top-[1200px] w-[480px] h-[650px] pt-3 pl-5 pr-5 '>
            <label>Maîtrise :</label><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label>Langue :</label><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Maîtrises et languages</label>
        </div>
        <div className='rounded-lg absolute border-double border-black border-4 left-[250px] top-[3500px] xl:left-[640px] xl:top-[1200px] w-[515px] h-[650px] pt-3 pl-5 pr-5 '>
            <div className=' flex justify-between'>
              <div>
                <label>PC</label><br></br>
                <input className='rounded-full border-black border-4 border-solid w-16 h-16  text-center '></input>
              </div>
              <div>
                <label>PA</label><br></br>
                <input className='rounded-full border-black border-4 border-solid w-16 h-16  text-center '></input>
              </div>
              <div>
                <label>PE</label><br></br>
                <input className='rounded-full border-black border-4 border-solid w-16 h-16  text-center '></input>
              </div>
              <div>
                <label>PO</label><br></br>
                <input className='rounded-full border-black border-4 border-solid w-16 h-16  text-center '></input>
              </div>
              <div>
                <label>PE</label><br></br>
                <input className='rounded-full border-black border-4 border-solid w-16 h-16  text-center '></input>
              </div>
            </div>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <label className='text-center'>Équipements</label><br></br><br></br>
        </div>
        <div className='rounded-lg absolute border-double bg-gray-400 border-black border-4 left-[150px] top-[4200px] xl:left-[500px] xl:top-[1900px] w-auto h-auto pt-3 pl-5 pr-5 flex justify-between '>
          
            <div>
              <label>Caractéristiques de sort</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-44 text-center'></input>
            </div>
            <div>
              <label>DD de sauvegarde</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-44 text-center'></input>
            </div>
            <div>
              <label>Bonus d'attaque du sort</label><br></br>
              <input className='rounded-b-lg border-solid border-4 border-black h-20 w-44 text-center'></input>
            </div>
     
        </div>
        <div className='rounded-lg absolute border-double border-black border-4 left-[250px] top-[4400px] xl:left-[96px] xl:top-[2100px] w-auto h-auto pt-3 pl-5 pr-5 '>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts mineures</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 1</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 2</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
        </div>
        <div className='rounded-lg absolute border-double border-black border-4 left-[250px] top-[5700px] xl:left-[650px] xl:top-[2100px] w-auto h-auto pt-3 pl-5 pr-5 '>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 3</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 4</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 5</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
        </div>
        <div className='rounded-lg absolute border-double border-black border-4 left-[250px] top-[7000px] xl:left-[1200px] xl:top-[2100px] w-auto h-auto pt-3 pl-5 pr-5 '>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 6</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 7</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 8</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
            <div className='-left-0 rounded-lg absolute border-solid border-black border-4 bg-gray-400   w-full h-12'>
                <label>Sorts niveau 9</label>
            </div><br></br><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br>
            <input className='bg-transparent w-96 h-8 text-2xl border-transparent border-b-black border-2  '></input><br></br><br></br>
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





