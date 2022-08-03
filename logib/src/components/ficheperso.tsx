import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, signOut, onAuthStateChanged} from "@firebase/auth";
import { useState } from 'react';



function Fiche() {

  useEffect(() => {
    var auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      }
      // User is signed in.
      else {
        window.alert("Vous n'êtes pas connecté, accès refusé");
        let path = `/`;
        navigate(path);
      }
    })
  }, []);

  let navigate = useNavigate();
  const Signout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log(auth)
      let path = `/`;
      navigate(path);
    }).catch((error) => {
      console.log(error)
    });

  }

  const [archetype, setArchetype] = useState([])
  const [nom, setNom] = useState([])
  const [age, setAge] = useState([])

  const [surnom, setSurnom] = useState([])
  const [hautfait, setHautFait] = useState([])
  const [blason, setBlason] = useState([])
  const [section, setSection] = useState([])
  const [avantage1, setAvantage1] = useState([])
  const [avantage2, setAvantage2] = useState([])
  const [incovenients1, setInconvenient1] = useState([])
  const [incovenients2, setInconvenient2] = useState([])
  const [motimaj, setMotiMaj] = useState([])
  const [motimin, setMotiMin] = useState([])
  const [pamax, setPaMax] = useState([])
  const [pamin, setPaMin] = useState([])
  const [pemax, setPeMax] = useState([])
  const [pemin, setPeMin] = useState([])
  const [cdfmax, setCDFMax] = useState([])
  const [cdfmin, setCDFMin] = useState([])
  const [psmax, setPsMax] = useState([])
  const [psmin, setPsMin] = useState([])
  const [pg, setPG] = useState([])
  const [px, setPX] = useState([])
  const [pointhero, setPointHero] = useState([])
  const [pointesp, setPointEspoir] = useState([])
  const [defensestat, setDefStat] = useState([])
  const [defensebonus, setDefBon] = useState([])
  const [reactstat, setReactStat] = useState([])
  const [reactbonus, setReactBon] = useState([])
  const [inistat, setIniStat] = useState([])
  const [inibonus, setIniBon] = useState([])
  const [chairstat, setChairStat] = useState([])
  const [forcestat, setForceStat] = useState([])
  const [forcebonus, setForceBon] = useState([])
  const [endustat, setEnduStat] = useState([])
  const [endubonus, setEnduBon] = useState([])
  const [betestat, setBeteStat] = useState([])
  const [deplastat, setDeplaStat] = useState([])
  const [deplabonus, setDeplaBon] = useState([])
  const [combatstat, setCombatStat] = useState([])
  const [combatbonus, setCombatBon] = useState([])
  const [instinctstat, setInstinctStat] = useState([])
  const [insctintbonus, setInstinctBon] = useState([])
  const [hargnestat, setHargneStat] = useState([])
  const [hargnebonus, setHargneBon] = useState([])
  const [machinestat, setMachineStat] = useState([])
  const [Tirstat, setTirStat] = useState([])
  const [Tirbonus, setTirBon] = useState([])
  const [savoirstat, setSavoirStat] = useState([])
  const [savoirbonus, setSavoirBon] = useState([])
  const [techniquestat, setTechniqueStat] = useState([])
  const [techniquebonus, setTechniqueBon] = useState([])
  const [damestat, setDameStat] = useState([])
  const [parolestat, setParoleStat] = useState([])
  const [parolebonus, setParoleBon] = useState([])
  const [aurastat, setAuraStat] = useState([])
  const [aurabonus, setAuraBon] = useState([])
  const [sangstat, setSangStat] = useState([])
  const [sabgbonus, setSangBon] = useState([])
  const [masquestat, setMasqueStat] = useState([])
  const [discstat, setDiscStat] = useState([])
  const [discbonus, setDiscBon] = useState([])
  const [dextstat, setDextStat] = useState([])
  const [dextbonus, setDextBon] = useState([])
  const [percstat, setPercStat] = useState([])
  const [percbonus, setPercBon] = useState([])
  const [meta, setMeta] = useState([])
  const [iacode, setIACode] = useState([])
  const [iasurnom, setIASurnom] = useState([])
  const [iacaractere, setIACaractere] = useState([])
  const [iaatout, setIAAtout] = useState([])
  const [iahandicap, setIAHandicap] = useState([])
  const [modnom, setModNom] = useState([])
  const [modniv, setModNiv] = useState([])
  const [moddegat, setModDegat] = useState([])
  const [modviolence, setModViolence] = useState([])
  const [modportee, setModPortee] = useState([])
  const [modenergie, setModEnergie] = useState([])
  const [modacti, setModActi] = useState([])
  const [modduree, setModDuree] = useState([])
  const [modevo, setModEvo] = useState([])
  const [armnom, setArmNom] = useState([])
  const [armdegat, setArmDegat] = useState([])
  const [armviolence, setArmViolence] = useState([])
  const [armportee, setArmPortee] = useState([])
  const [armenergie, setArmEnergie] = useState([])
  const [armacti, setArmActi] = useState([])
  const [armduree, setArmDuree] = useState([])
  const [armevo, setArmEvo] = useState([])
  const [equinom, setEquiNom] = useState([])
  const [equidegat, setEquiDegat] = useState([])
  const [equiviolence, setEquiViolence] = useState([])
  const [equiportee, setEquiPortee] = useState([])
  const [equienergie, setEquiEnergie] = useState([])
  const [equieffet, setEquiEffet] = useState([])
  const [equinodarm, setEquiNodArm] = useState([])
  const [equinodener, setEquiNodEner] = useState([])
  const [equisoin, setEquiSoin] = useState([])
  const [equigre, setEquiGre] = useState([])
  const [slotbdroit, setSlotBDroit] = useState([])
  const [slotbgauche, setSlotBGauche] = useState([])
  const [slotjdroit, setSlotJDroit] = useState([])
  const [slotjgauche, setSlotJGauche] = useState([])
  const [slottete, setSlotTete] = useState([])
  const [slottorse, setSlotTorse] = useState([])




  useEffect(() => {
    // axios.get(`https://api.jdashracademy.com/personage/`)  
    
    const retrievePerso = async () =>{
    await axios.get(`http://localhost:3000/api/personage/l6rw7uGmsDpYpsgyVkpn`)
      .then(res => {
        console.log(res.data[0])
       setArchetype(res.data[0].archetype)
       setHautFait(res.data[0].hautfait)
       setBlason(res.data[0].blason)
       setSection(res.data[0].section)
       setAvantage1(res.data[0].avantage[0])
       setAvantage2(res.data[0].avantage[1])
       setInconvenient1(res.data[0].incovenients)
       setInconvenient2(res.data[0].incovenients)
       setMotiMaj(res.data[0].motivationMajeures)
       setMotiMin(res.data[0].motivationMineures)
       setPaMax(res.data[0].paMax)
       setPaMin(res.data[0].paMin)
       setPeMax(res.data[0].peMax)
       setPeMin(res.data[0].peMin)
       setCDFMax(res.data[0].cdfMax)
       setCDFMin(res.data[0].cdfMin)
       setPeMax(res.data[0].peMax)
       setPeMin(res.data[0].peMin)
       setPG(res.data[0].pg)
       setPX(res.data[0].px)
       setPointHero(res.data[0].pointHeroisme)
       setPointEspoir(res.data[0].pointEspoir)
       setDefStat(res.data[0].defense[0])
       setDefBon(res.data[0].defense[1])
       setReactStat(res.data[0].reaction[0])
       setReactBon(res.data[0].reaction[1])
       setIniStat(res.data[0].initiative[0])
       setIniBon(res.data[0].initiative[1])
       setChairStat(res.data[0].chair)
       setDeplaStat(res.data[0].deplacement[0])
       setDeplaBon(res.data[0].deplacement[1])
       setForceStat(res.data[0].force[0])
       setForceBon(res.data[0].force[1])
       setEnduStat(res.data[0].endurance[0])
       setEnduBon(res.data[0].endurance[1])
       setBeteStat(res.data[0].bete)
       setHargneStat(res.data[0].hargne[0])
       setHargneBon(res.data[0].hargne[1])
       setCombatStat(res.data[0].combat[0])
       setCombatBon(res.data[0].combat[1])
       setInstinctStat(res.data[0].instinct[0])
       setInstinctBon(res.data[0].instinct[1])
       setMachineStat(res.data[0].machine)
       setTirStat(res.data[0].tir[0])
       setTirBon(res.data[0].tir[1])
       setSavoirStat(res.data[0].savoir[0])
       setSavoirBon(res.data[0].savoir[1])
       setTechniqueStat(res.data[0].technique[0])
       setTechniqueBon(res.data[0].technique[1])
       setDameStat(res.data[0].dame)
       setParoleStat(res.data[0].parole[0])
       setParoleBon(res.data[0].parole[1])
       setAuraStat(res.data[0].aura[0])
       setAuraBon(res.data[0].aura[1])
       setSangStat(res.data[0].sang[0])
       setSangBon(res.data[0].sang[1])
       setMasqueStat(res.data[0].masque)
       setDiscStat(res.data[0].discretion[0])
       setDiscBon(res.data[0].discretion[1])
       setDextStat(res.data[0].dexterite[0])
       setDextBon(res.data[0].dexterite[1])
       setPercStat(res.data[0].perception[0])
       setPercBon(res.data[0].perception[1])
       setMeta(res.data[0].meta)
       setIACode(res.data[0].IA[0])
       setIASurnom(res.data[0].IA[1])
       setIACaractere(res.data[0].IA[2])
       setIAAtout(res.data[0].IA[3])
       setIAHandicap(res.data[0].IA[4])
       setModNom(res.data[0].modules[0])
       setModNiv(res.data[0].modules[1])
       setModDegat(res.data[0].modules[2])
       setModViolence(res.data[0].modules[3])
       setModPortee(res.data[0].modules[4])
       setModEnergie(res.data[0].modules[5])
       setModActi(res.data[0].modules[6])
       setModDuree(res.data[0].modules[7])
       setModEvo(res.data[0].modules[8])
       setArmNom(res.data[0].capaciteMetaArmure[0])
       setArmDegat(res.data[0].capaciteMetaArmure[1])
       setArmViolence(res.data[0].capaciteMetaArmure[2])
       setArmPortee(res.data[0].capaciteMetaArmure[3])
       setArmEnergie(res.data[0].mocapaciteMetaArmuredules[4])
       setArmActi(res.data[0].capaciteMetaArmure[5])
       setArmDuree(res.data[0].capaciteMetaArmure[6])
       setArmEvo(res.data[0].capaciteMetaArmure[7])
       setEquiNom(res.data[0].equipement[0])
       setEquiDegat(res.data[0].equipement[1])
       setEquiViolence(res.data[0].equipement[2])
       setEquiPortee(res.data[0].equipement[3])
       setEquiEnergie(res.data[0].equipement[4])
       setEquiEffet(res.data[0].equipement[5])
       setEquiNodArm(res.data[0].equipement[6])
       setEquiNodEner(res.data[0].equipement[7])
       setEquiSoin(res.data[0].equipement[8])
       setEquiGre(res.data[0].equipement[9])
       setSlotJDroit(res.data[0].slot)
       setSlotJGauche(res.data[0].slot[2])
       setSlotBDroit(res.data[0].slot[0])
       setSlotBGauche(res.data[0].slot[1])
       setSlotTete(res.data[0].slot[3])
       setSlotTorse(res.data[0].slot[4])
      })
    }
    retrievePerso()
    }
  , []);




  return (
    <div className="App">
      <div className='absolute left-0 top-0 w-full h-full overflow-x-auto pl-5 pr-5 ' style={{ background: "#D9D9D9" }}>
        <form>  

          <div className='absolute top-[160px] left-[100px] w-auto border-4 border-black h-auto'>
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
                <input className='bg-white w-96 border-2 border-black h-10' value={archetype} ></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'value={hautfait}></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'value={meta}></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'value={section}></input><br></br>
                <input className='bg-white w-96 border-2 border-black h-10'value={blason}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[510px] left-[100px] w-[600px] border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Motivation Majeure</div>
            <textarea className='w-[590px]' value={motimaj}></textarea>
          </div>
          <div className='absolute top-[590px] left-[100px] w-[600px] border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Motivations mineures</div>
            <input className='bg-white w-full border-2 border-black h-10' value={motimin}></input><br></br>
            <input className='bg-white w-full border-2 border-black h-10'></input><br></br>
            <input className='bg-white w-full border-2 border-black h-10'></input><br></br>
          </div>
          <div className='absolute top-[160px] left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Chair</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='h-[120px] w-28 text-center text-2xl' value={chairstat}></input>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Déplacement'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Force'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Endurance'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={deplastat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={forcestat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center 'value={endustat}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={deplabonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={forcebonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={endubonus}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[340px] left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Bête</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='h-[120px] w-28 text-center text-2xl' value={betestat}></input>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Hargne'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Combat'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Instinct'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={hargnestat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={combatstat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={instinctstat}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={hargnebonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={combatbonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={insctintbonus}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[520px] left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Machine</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='h-[120px] w-28 text-center text-2xl' value={machinestat}></input>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Tir'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Savoir'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Technique'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={Tirstat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={savoirstat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={techniquestat}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={Tirbonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={savoirbonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={techniquebonus}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[700px] left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Dame</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='h-[120px] w-28 text-center text-2xl' value={damestat}></input>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Aura'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Parole'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Sang-Froid'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={aurastat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={parolestat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={sangstat}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={aurabonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center 'value={parolebonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={sabgbonus}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[880px] left-[750px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-6 text-white'>Masque</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='h-[120px] w-28 text-center text-2xl' value={masquestat}></input>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Discrétion'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Dextérité'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'Perception'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={discstat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={dextstat}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={percstat}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
                <input className='bg-white w-44 border-2 border-black h-10 bg-sky-100' value={'OD'}></input><br></br>
              </div>
              <div>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={discbonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={dextbonus}></input><br></br>
                <input className='bg-white w-20 border-2 border-black h-10 text-center ' value={percbonus}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[160px] left-[1450px] w-auto border-4 border-black h-auto'>
            <div className='bg-sky-700 w-full h-auto text-white'>Statistiques</div>
            <div className='flex justify-between bg-sky-100'>
              <div>
                <input className='bg-white w-52 border-2 border-black h-10 bg-sky-100' value={''}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/7634/7634606.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Armure'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/8030/8030382.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Énergie'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1388/1388574.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Champ de force'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/535/535285.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Santé'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5861/5861070.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Gloire'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5542/5542204.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Expérience'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1477/1477264.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Héroïsme'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1250/1250592.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Contact'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5156/5156564.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Espoir'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/861/861377.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Défense'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/5073/5073994.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Réaction'}></input><br></br>
                <img src='https://cdn-icons-png.flaticon.com/512/1584/1584892.png' className='w-8 absolute pt-1'></img><input className='pl-10 bg-white w-52 border-2 border-black h-10 bg-sky-100' value={'Initiative'}></input><br></br>

              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Actuel'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pamin}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pemin}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={cdfmin}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={psmin}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pg}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={px}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pointhero}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pointesp}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={defensestat}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={reactstat}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={inistat} ></input><br></br>
              </div>
              <div>
                <input className='bg-white w-24 border-2 border-black h-10 text-center bg-sky-100 text-center' value={'Max'}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pamax}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={pemax}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={cdfmax}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={psmax}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' ></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={"6"}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center'></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={"60"}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={defensebonus}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={reactbonus}></input><br></br>
                <input className='bg-white w-24 border-2 border-black h-10 text-center' value={inibonus}></input><br></br>
              </div>
            </div>
          </div>
          <div className='absolute top-[750px] left-[1450px] w-auto border-4 border-black h-auto'>
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
          <div className='absolute top-[770px] left-[100px] w-auto border-4 border-black h-auto'>
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
          <div className='absolute top-[1050px] left-[100px] w-auto border-4 border-black h-auto'>
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
          <div className='absolute top-[1200px] left-[1450px] w-auto border-4 border-black h-auto'>
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
          <div className='absolute top-[1500px] left-[30px] w-auto border-4 border-black h-auto'>
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
          <div className='absolute top-[1500px] left-[1000px] w-auto border-4 border-black h-auto'>
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
    </div>

  );
}

export default Fiche;





