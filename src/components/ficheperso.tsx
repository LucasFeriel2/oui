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
      <div className='absolute left-0 top-0 w-full h-full overflow-x-auto pl-5 pr-5 ' style={{background:"#D9D9D9"}}>
        <form>
        
          <div className='absolute top-[160px] xl:left-[100px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Informations personnage</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Nom'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Surnom'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Âge'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Archetype'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Haut-fait'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Meta-armure'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Section'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Blason'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[510px] xl:left-[100px] w-[600px] border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Motivation Majeure</div>
            <textarea className='w-[590px]'></textarea>
          </div>
          <div className='absolute top-[590px] xl:left-[100px] w-[600px] border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Motivations mineures</div>
            <input className='bg-white w-full border-2 border-black h-10'></input><br></br>
            <input className='bg-white w-full border-2 border-black h-10'></input><br></br>
            <input className='bg-white w-full border-2 border-black h-10'></input><br></br>
          </div>
          <div className='absolute top-[160px] xl:left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Chair</div>
              <div className='flex justify-between bg-sky-100'>
                <div>
                  <input className='h-[120px] w-28 text-center text-2xl'></input>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Déplacement'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Force'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Endurance'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
            </div>
          </div>
          <div className='absolute top-[340px] xl:left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Bête</div>
              <div className='flex justify-between bg-sky-100'>
                <div>
                  <input className='h-[120px] w-28 text-center text-2xl'></input>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Hargne'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Combat'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Instinct'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
            </div>
          </div> 
          <div className='absolute top-[520px] xl:left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Machine</div>
              <div className='flex justify-between bg-sky-100'>
                <div>
                  <input className='h-[120px] w-28 text-center text-2xl'></input>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Tir'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Savoir'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Technique'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
            </div>
          </div>   
          <div className='absolute top-[700px] xl:left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Dame</div>
              <div className='flex justify-between bg-sky-100'>
                <div>
                  <input className='h-[120px] w-28 text-center text-2xl'></input>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Aura'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Parole'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Sang-Froid'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                  <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                </div>
                <div>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                  <input className='bg-white w-20 border-2 border-black h-10 text-center '></input><br></br>
                </div>
            </div>
          </div>      
          <div className='absolute top-[160px] xl:left-[1450px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Statistiques</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={''}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/7634/7634606.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Armure'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/8030/8030382.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Énergie'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1388/1388574.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Champ de force'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/535/535285.png'   className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Santé'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5861/5861070.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Gloire'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5542/5542204.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Expérience'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1477/1477264.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Héroïsme'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1250/1250592.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Contact'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5156/5156564.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Espoir'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Actuel'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Max'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[620px] xl:left-[1450px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Slot</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 text-center bg-sky-100 text-center' value={''}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Bras gauche'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Jambe gauche'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Tête'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Bras droit'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Jambe droite'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Torse'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Actuel'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Total'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[770px] xl:left-[100px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>IA</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Code fabrication'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Surnom'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Caractère'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Atout'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Handicap'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[1050px] xl:left-[100px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Capacités méta-armure</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Nom'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Dégâts'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Violence'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Portée'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Énergie'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Activation'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Durée'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Évolution'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Effets'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <textarea className='h-10 w-96 resize-none'></textarea>
              </div>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Nom'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Dégâts'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Violence'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Portée'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Énergie'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Activation'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Durée'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Évolution'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Effets'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'></input><br></br>
                <textarea className='h-10 w-96 resize-none'></textarea>
              </div>
            </div>
          </div>
          <div className='absolute top-[1050px] xl:left-[1450px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Nods et grenades</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 text-center bg-sky-100 text-center' value={''}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Armure +3D6 PA'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Énergie +3D6 PE'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Santé +3D6 PS'}></input><br></br>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Grenade (shrap/flash/iem)'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Actuel'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Total'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10'></input><br></br>

              </div>
            </div>
          </div>
          <div className='absolute top-[1500px] xl:left-[30px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Modules</div>
             <div className='flex flex-col justify-between bg-sky-100'>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className=' text-black'>Activation</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Durée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Évolution</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
             </div>
          </div>
          <div className='absolute top-[1500px] xl:left-[1000px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Équipement</div>
             <div className='flex flex-col justify-between bg-sky-100'>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
              <div>
                <label className=' text-black'>Nom</label><input className='top-10 w-44 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Dégâts</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Violence</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className='text-black'>Portée</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input>
                <label className=' text-black'>Énergie</label><input className='top-10 w-24 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br>
                <label className='text-black'>Effet</label><input className='top-10 w-3/4 bg-transparent border-transparent border-b-black border-4  text-center'></input><br></br><br></br>
                <hr className='border-4 border-black'></hr>
              </div>
             </div>
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





