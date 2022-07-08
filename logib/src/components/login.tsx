import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { auth } from '../firebase';
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

function Login() {
  let navigate = useNavigate(); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const signin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      let path = `/campagne`;
      navigate(path);
    }
    catch (error) {
      console.log('error ', error)
      window.alert("Email ou mot de passe incorrect !")
    }
  }
  const LogWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        let path = `/campagne`;
      navigate(path);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div className="flex flex-row lg">
        <div className="basis-3/5">
          <img  className='absolute left-0 top-0 h-full'src="https://i.goopics.net/7izkjw.png" ></img>
        </div>
        <img className='absolute w-/4 h-96 right-64 top-0.5' src="https://i.goopics.net/c2girn.png"></img>
          <div className='absolute right-64 top-1/3 w-1/2 h-2/3'>

              <label className='absolute w-80 h-8 right-56 top-8'>Email</label>
              <input className='absolute w-96 h-20 pl-12 right-12 top-16'  onChange={e => setEmail(e.target.value)} name="email" type="text" style={{background: "#FFFFFF", borderRadius: "20px"}}></input>
              <svg className='absolute h-10 w-10 right-96 top-20' style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              <label className='absolute w-80 h-8 right-48 top-44'>Mot de passe</label>
              <input className='absolute w-96 h-20 pl-12 right-12 top-52'  onChange={e => setPassword(e.target.value)} name="mdp" type="password" style={{background: "#FFFFFF", borderRadius: "20px"}}></input>
              <svg className='absolute h-10 w-10 right-96 top-56' style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
          <Link to="/signup"><p className='absolute w-80 h-8 right-20 top-80' style={{textDecorationLine: "underline"}}>Créer son compte</p></Link>
          <button className='absolute w-80 h-14 right-20 bottom-60' style={{background: "#393939", borderRadius: "20px"}}  onClick={() => signin()}>Connexion</button>
          <button className='absolute w-80 h-14 right-20 bottom-40' style={{background: "#393939", borderRadius: "20px"}}  onClick={() => LogWithGoogle()}>Se connecter avec Google</button>
        </div>
      </div>
    </div>    
  );
}

export default Login;







