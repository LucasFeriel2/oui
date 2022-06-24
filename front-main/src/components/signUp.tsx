import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";



function Register() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState('');
  let navigate = useNavigate(); 

const registerUser = async () =>{

  try {
    axios.post('http://localhost:3000/api/signup', {displayName: user, email: email, password: password})
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
  
  }
  catch (error) {
    console.log('error ', error)

  }

    let path = `/`;
    navigate(path);
}

  return (
    <div className="App">
      <div className="flex flex-row lg">
        <div className="basis-3/5">
          <img src="https://i.goopics.net/7izkjw.png" style={{position: "absolute", left: "0px", top: "0px"}}></img>
        </div>
        <div className="basis-2/5">
          <img src="https://i.goopics.net/c2girn.png" style={{position: "absolute", width: "491px", height: "372px", left: "60%", top: "2px"}}></img>
          {/* <form onSubmit={registerUser}> */}
          <label style={{position: "absolute", width: "302px", height: "33px", left: "58%", top: "40%"}}>Email</label>
            <input  onChange={e => setEmail(e.target.value)} name="email" type="text" style={{position: "absolute", width: "402px", height: "74px", left: "63%", top: "43%", background: "#FFFFFF", borderRadius: "20px"}} className="pl-12"></input>
            <svg style={{position: "absolute", width: "4%", height: "4%", left: "62.5%", top: "44.5%", color:"black"}}  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <label style={{position: "absolute", width: "302px", height: "33px", left: "59.5%", top: "52%"}}>Utilisateur</label>
            <input  onChange={e => setUser(e.target.value)} name="user" type="text" style={{position: "absolute", width: "402px", height: "74px", left: "63%", top: "55%", background: "#FFFFFF", borderRadius: "20px"}} className="pl-12"></input>          
            <svg style={{position: "absolute", width: "4%", height: "4%", left: "62.5%", top: "56.5%", color:"black"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
          <label style={{position: "absolute", width: "302px", height: "33px", left: "60%", top: "65%"}}>Mot de passe</label>
            <input  onChange={e => setPassword(e.target.value)} name="mdp" type="password" style={{position: "absolute", width: "402px", height: "74px", left: "63%", top: "68%", background: "#FFFFFF", borderRadius: "20px"}} className="pl-12"></input>
            <svg style={{position: "absolute", width: "4%", height: "4%", left: "62.5%", top: "69.5%", color:"black"}}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
          <button type="submit" style={{position: "absolute", width: "302px", height: "55px", left: "65%", top: "85%", background: "#393939", borderRadius: "20px"}} onClick={registerUser}>S'inscrire</button>
          {/* </form> */}
        </div>
      </div>
    </div>

    
  );
}

export default Register;





function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

