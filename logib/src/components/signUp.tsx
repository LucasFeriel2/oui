import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { useState } from 'react';

function Register() {

  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState('');
  let navigate = useNavigate(); 
  // const registerUser = async () =>{
  //   try {
  //     axios.post('https://api.jdashracademy.com/signup', {displayName: user, email: email, password: password})
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  //   }
  //   catch (error) {
  //     console.log('error ', error)
  //   }
  //     let path = `/`;
  //     navigate(path);
  //   } 

    const registerUser = async () =>{
    try {

      // const connect = await axios('https://api.jdashracademy.com/signup', {
        const connect = await axios('http://localhost:3000/api/signup', {
          method: 'POST',
          headers: {
              'Accept': 'application/json', 
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          },
          data: { "displayName": user, "email": email, "password": password }
      });
      let path = `/`;
        navigate(path);
  } catch (e) {
      console.log("ERROR CONECTION", e)
  }
}

  return (
    <div className="App">
      <div className="flex flex-row lg h-screen">
        <div className="basis-3/5">
          <img className='absolute left-0 top-0 h-full'  src="https://i.goopics.net/7izkjw.png"></img>
        </div>
          <img className='absolute w-/4 h-96 right-64' src="https://i.goopics.net/c2girn.png"></img>
          <div className='absolute right-64 top-1/3 w-1/2 h-2/3'>
              <label className='absolute w-80 h-8 right-56 top-12'>Email</label>
              <input className='border border-black absolute w-96 h-16 pl-12 right-12 top-20'  onChange={e => setEmail(e.target.value)} name="email" type="text" style={{background: "#FFFFFF", borderRadius: "12px"}}></input>
              <svg className='absolute h-10 w-10 right-96 top-24' style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              <label className='absolute w-80 h-8 right-52 top-44' >Utilisateur</label>
              <input className='border border-black absolute w-96 h-16 pl-12 right-12 top-52'  onChange={e => setUser(e.target.value)} name="user" type="text" style={{background: "#FFFFFF", borderRadius: "12px"}}></input>          
              <svg className='absolute h-10 w-10 right-96 top-56' style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
              <label className='absolute w-80 h-8 right-48 top-80  '>Mot de passe</label>
              <input className='border border-black absolute w-96 h-16 pl-12 right-12 top-[350px]'  onChange={e => setPassword(e.target.value)} name="mdp" type="password" style={{background: "#FFFFFF", borderRadius: "12px"}}></input>
              <svg className='absolute h-10 w-10 right-96 top-[360px]' style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
              <button className='absolute w-80 h-14 right-20 top-[500px]'  type="submit" style={{background: "rgb(255, 0, 0)", borderRadius: "20px"}} onClick={registerUser}>S'inscrire</button>
              <Link to="/"><p className='absolute w-80 h-8 right-20 top-[450px] ' style={{textDecorationLine: "underline"}}>Je possède déjà un compte</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Register;






