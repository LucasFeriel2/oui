import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";
import { useState } from 'react';



function Profil() {

    useEffect(() => {
        var u = getAuth().currentUser;
        console.log(u?.email)
        if (u) {
          //@ts-ignores
          setEmail(u.email)
          console.log("email", email)
        // User is signed in.
      } else {
        window.alert("Vous n'êtes pas connecté, accès refusé");
        let path = `/`;
        navigate(path);
      }
      }, []);


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState('');
    const [userInfo, setUserInfo] = React.useState('');


    let navigate = useNavigate(); 
    const deleteUser = async () =>{
      try {
        axios.post('https://api.jdashracademy.com/delete')
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      }
      catch (error) {
        console.log('error ', error)
      }
        let path = `/campagne`;
        navigate(path);
      } 
  
      const updateUser = async () =>{
        try {
          axios.post('https://api.jdashracademy.com/emailpdate', {displayName: user, email: email, password: password})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        }
        catch (error) {
          console.log('error ', error)
        }
          let path = `/campagne`;
          navigate(path);
        } 
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
      <div className='absolute w-full h-24 left-11/12 top-0' style={{background: "#00487C"}}>
        <img className='basis-1/5 absolute w-50 h-full  left-0 top-0' src="https://i.goopics.net/c2girn.png"></img>
        <Link to="/profil"><p className='basis-2/5 absolute w-2/12 h-10 left-32 top-6 text-3xl'>Profil</p></Link>
        <Link to="/campagne"><p className='basis-3/5 absolute w-2/12 h-10 left-1/4 top-6 text-3xl'>Campagnes</p></Link>
        <button onClick={Signout}><p className='basis-5/5 absolute w-2/12 h-10 left-3/4 top-6 text-3xl'>Déconnexion</p></button>
      </div>
      <h1 className='absolute w-11/12 h-92 top-32 font-normal text-6xl leading-10 text-center text-black'>Modifier votre profil</h1>
      <div className='absolute left-1/4 top-1/4 w-1/2 h-1/2'>
        <form onSubmit={updateUser}>
            <label className='absolute w-80 h-8 left-1/3 top-4 '>Email</label>
            {/* @ts-ignores */}
            <input className=' border border-black absolute w-96 h-16 pl-12 left-72 top-12' value={user?.email}  onChange={e => setEmail(e.target.value)} name="email" type="text" style={{background: "#FFFFFF", borderRadius: "12px"}}></input>
            <svg className='absolute h-10 w-10 left-72 top-16' style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <label className='absolute w-80 h-8 left-1/3 top-40' >Utilisateur</label>
            <input className='border border-black absolute w-96 h-16 pl-12 left-72 top-48'  onChange={e => setUser(e.target.value)} name="user" type="text" style={{background: "#FFFFFF", borderRadius: "12px"}}></input>          
            <svg className='absolute h-10 w-10 left-72 top-52' style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
             <label className='absolute w-80 h-8 left-1/3 bottom-40 '>Mot de passe</label>
            <input className='border border-black absolute w-96 h-16 pl-12 left-72 bottom-20'  onChange={e => setPassword(e.target.value)} name="mdp" type="password" style={{background: "#FFFFFF", borderRadius: "12px"}}></input>
            <svg className='absolute h-10 w-10 left-72 bottom-24' style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
          <button className='absolute w-96 h-20 left-72 -bottom-20' type="submit" style={{background: "#FF0000", borderRadius: "20px"}}>Modifier</button>
          <button className='absolute w-96 h-20 left-72 -bottom-44' style={{background: "rgb(255, 0, 0)", borderRadius: "20px"}} onClick={deleteUser}>Supprimer compte</button>
        </form>
      </div>
    </div>
  );
}

export default Profil;





