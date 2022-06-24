import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';

function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log('user ', user)
    }
    catch (error) {
      console.log('error ', error)

    }
  }
  return (
    <div className="App">
      <div className="flex flex-row lg">
        <div className="basis-3/5">
          <img src="https://i.goopics.net/7izkjw.png" style={{position: "absolute", left: "0px", top: "0px"}}></img>
        </div>
        <div className="basis-2/5">
          <img src="https://i.goopics.net/c2girn.png" style={{position: "absolute", width: "491px", height: "372px", left: "60%", top: "2px"}}></img>
          <label style={{position: "absolute", width: "302px", height: "33px", left: "58%", top: "40%"}}>Email</label>
            <input  onChange={e => setEmail(e.target.value)} name="email" type="text" style={{position: "absolute", width: "402px", height: "74px", left: "63%", top: "43%", background: "#FFFFFF", borderRadius: "20px"}} className="pl-12"></input>
            <svg style={{position: "absolute", width: "4%", height: "4%", left: "62.5%", top: "44.5%", color:"black"}}  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          <label style={{position: "absolute", width: "302px", height: "33px", left: "60%", top: "55%"}}>Mot de passe</label>
            <input  onChange={e => setPassword(e.target.value)} name="mdp" type="password" style={{position: "absolute", width: "402px", height: "74px", left: "63%", top: "58%", background: "#FFFFFF", borderRadius: "20px"}} className="pl-12"></input>
            <svg style={{position: "absolute", width: "4%", height: "4%", left: "62.5%", top: "59.5%", color:"black"}}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
          <Link to="/signup"><p style={{position: "absolute", width: "302px", height: "33px", left: "65%", top: "70%", textDecorationLine: "underline"}}>Créer son compte</p></Link>
          <button style={{position: "absolute", width: "302px", height: "55px", left: "65%", top: "78%", background: "#393939", borderRadius: "20px"}}  onClick={() => signin()}>Connexion</button>
        </div>
      </div>
    </div>

    
  );
}

export default Login;





function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

