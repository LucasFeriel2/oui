import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Cards from "./cards";


function Perso_DND() {

  const [personnages, setPersonnages] = useState([])
  const { id } = useParams();
  let navigate = useNavigate();

  const createPerso = async () => {
    const objs = {
      nom: nom, race: race, classe: classe, historique: historique, liens: liens, alignement: alignement, trait: trait, ideaux: ideaux, defauts: defauts, niveau: niveau, initiative: initiative,
      vitesse: vitesse, pvMax: pvMax, CA: CA, bonusMaitrise: bonusMaitrise, force: force, dexterite: dexterite, intelligence: intelligence, sagesse: sagesse, charisme: charisme, constitution: constitution,
      investigation: investigation, acrobatie: acrobatie, dressage: dressage, religion: religion, athletisme: athletisme, histoire: histoire, perception: perception, survie: survie, arcanes: arcanes,
      escamotage: escamotage, medecine: medecine, representation: representation, discretion: discretion, intimidation: intimidation, persuasion: persuasion, tromperie: tromperie, campaingId: id
    }
    try {
      axios.post('http://localhost:3000/api/personage',
        objs
      )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    var auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        console.log("id Campaign", id)
        const getPersonnages = async () => {
          // personage/:campaignId
          const data = await axios(`http://localhost:3000/api/personage/${id}`)
          console.log("data :", data)
          setPersonnages(data.data)
        }
        getPersonnages().catch(console.error)
        // User is signed in.
      } else {
        window.alert("Vous n'êtes pas connecté, accès refusé");
        let path = `/`;
        navigate(path);
      }
    })
  }, []);

  const [showForm, setShowForm] = useState(false);

  const [nom, setNom] = useState('');
  const [race, setRace] = useState('');
  const [classe, setClasse] = useState('');
  const [historique, setHistorique] = useState('');
  const [liens, setLiens] = useState('');
  const [alignement, setAlignement] = useState('');
  const [trait, setTrait] = useState('');
  const [ideaux, setIdeaux] = useState('');
  const [defauts, setDefauts] = useState('');
  const [niveau, setNiveau] = useState('');
  const [initiative, setInitiative] = useState('');
  const [vitesse, setVitesse] = useState('');
  const [pvMax, setpvMax] = useState('');
  const [CA, setCA] = useState('');
  const [bonusMaitrise, setbonusMaitrise] = useState('');
  const [force, setForce] = useState('');
  const [dexterite, setDexterite] = useState('');
  const [intelligence, setIntelligence] = useState('');
  const [sagesse, setSagesse] = useState('');
  const [charisme, setCharisme] = useState('');
  const [constitution, setConstitution] = useState('');
  const [investigation, setInvestigation] = useState('');
  const [acrobatie, setAcrobatie] = useState('');
  const [dressage, setDressage] = useState('');
  const [religion, setReligion] = useState('');
  const [athletisme, setAthletisme] = useState('');
  const [histoire, setHistoire] = useState('');
  const [perception, setPerception] = useState('');
  const [survie, setSurvie] = useState('');
  const [arcanes, setArcanes] = useState('');
  const [escamotage, setEscamotage] = useState('');
  const [medecine, setMedecine] = useState('');
  const [representation, setRepresentation] = useState('');
  const [discretion, setDiscretion] = useState('');
  const [intimidation, setIntimidation] = useState('');
  const [persuasion, setPersuasion] = useState('');
  const [tromperie, setTromperie] = useState('');
  const [showCard, setShowCard] = useState(false);

  //@ts-ignore
  const handleSubmit = (event) => {
    // const perso_dnd = {nom}
    // createPerso(perso_dnd)
    event.preventDefault();
    event.target.reset();
    console.log('name', nom);

    setNom('');
    setShowCard(true);
    setShowForm(false);
  }

  return (
    <div className="App">
      <h1 style={{ position: "absolute", width: "501px", height: "145px", left: "35%", top: "10%", fontWeight: "400", fontSize: "64px", lineHeight: "74px", textAlign: "center", color: "#FFFFFF" }}>Vos campagnes</h1>
      <button className='button' onClick={() => setShowForm(true)}>Créer un personnage D&D</button>
      {showForm ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-6xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-3xl font=semibold">Création d'un personnage DND</h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowForm(false)}
                >
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 inline-grid grid-cols-2 overflow-y-scroll max-h-96" onSubmit={handleSubmit}>

                  <div className="block text-black text-sm font-bold mb-1">
                    Nom du personnage
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='nom' name='nom'
                      onChange={event => setNom(event.target.value)} value={nom}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Race
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='race' name='race'
                      onChange={event => setRace(event.target.value)} value={race}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Classe
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='classe' name='classe'
                      onChange={event => setClasse(event.target.value)} value={classe}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Alignement
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='alignement' name='alignement'
                      onChange={event => setAlignement(event.target.value)} value={alignement}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Historique
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='historique' name='historique'
                      onChange={event => setHistorique(event.target.value)} value={historique}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Trait de personnalité
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='trait' name='trait'
                      onChange={event => setTrait(event.target.value)} value={trait}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Lien
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='liens' name='liens'
                      onChange={event => setLiens(event.target.value)} value={liens}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Idéal
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='ideaux' name='ideaux'
                      onChange={event => setIdeaux(event.target.value)} value={ideaux}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Défaut
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='defaut' name='defaut'
                      onChange={event => setDefauts(event.target.value)} value={defauts}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Niveau
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='niveau' name='niveau'
                      onChange={event => setNiveau(event.target.value)} value={niveau}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Vitesse
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='vitesse' name='vitesse'
                      onChange={event => setVitesse(event.target.value)} value={vitesse}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Initiative
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='initiative' name='initiative'
                      onChange={event => setInitiative(event.target.value)} value={initiative}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    PV max
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='pvMax' name='pvMax'
                      onChange={event => setpvMax(event.target.value)} value={pvMax}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Capacité d'armure
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='CA' name='CA'
                      onChange={event => setCA(event.target.value)} value={CA}
                    />
                  </div>
                  <div className="block text-black text-sm font-bold mb-1">
                    Bonus de maîtrise actuel
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='bonusMaitrise' name='bonusMaitrise'
                      onChange={event => setbonusMaitrise(event.target.value)} value={bonusMaitrise}
                    />
                  </div>
                  <br />
                  <div>
                    Statistiques
                    <div className='grid grid-cols-2 gap-3' >
                      <div className="block text-black text-sm font-bold mb-1">
                        Force
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='force' name='force'
                          onChange={event => setForce(event.target.value)} value={force}
                        />
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Dextérité
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='dexterite' name='dexterite'
                          onChange={event => setDexterite(event.target.value)} value={dexterite}
                        />
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Intelligence
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='intelligence' name='intelligence'
                          onChange={event => setIntelligence(event.target.value)} value={intelligence}
                        />
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Sagesse
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='sagesse' name='sagesse'
                          onChange={event => setSagesse(event.target.value)} value={sagesse}
                        />
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Charisme
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='charisme' name='charisme'
                          onChange={event => setCharisme(event.target.value)} value={charisme}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    Compétences
                    <div className='grid grid-cols-4 gap-3'>
                      <div className="block text-black text-sm font-bold mb-1">
                        Acrobatie
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='acrobatie' name='acrobatie'
                          onChange={event => setAcrobatie(event.target.value)} value={acrobatie}
                        />
                        <div className="block text-black text-sm font-bold mb-1">
                          Dressage
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='dressage' name='dressage'
                            onChange={event => setDressage(event.target.value)} value={dressage}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Investigation
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='investigation' name='investigation'
                            onChange={event => setInvestigation(event.target.value)} value={investigation}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Religion
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='religion' name='religion'
                            onChange={event => setReligion(event.target.value)} value={religion}
                          />
                        </div>
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Arcanes
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='arcanes' name='arcanes'
                          onChange={event => setArcanes(event.target.value)} value={arcanes}
                        />
                        <div className="block text-black text-sm font-bold mb-1">
                          Escamotage
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='escamotage' name='escamotage'
                            onChange={event => setEscamotage(event.target.value)} value={escamotage}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Médecine
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='medecine' name='medecine'
                            onChange={event => setMedecine(event.target.value)} value={medecine}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Représentation
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='representation' name='representation'
                            onChange={event => setRepresentation(event.target.value)} value={representation}
                          />
                        </div>
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Athlétisme
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='athletisme' name='athletisme'
                          onChange={event => setAthletisme(event.target.value)} value={athletisme}
                        />
                        <div className="block text-black text-sm font-bold mb-1">
                          Histoire
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='histoire' name='histoire'
                            onChange={event => setHistoire(event.target.value)} value={histoire}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Perception
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='perception' name='perception'
                            onChange={event => setPerception(event.target.value)} value={perception}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Survie
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='survie' name='survie'
                            onChange={event => setSurvie(event.target.value)} value={survie}
                          />
                        </div>
                      </div>
                      <div className="block text-black text-sm font-bold mb-1">
                        Discrétion
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='discretion' name='discretion'
                          onChange={event => setDiscretion(event.target.value)} value={discretion}
                        />
                        <div className="block text-black text-sm font-bold mb-1">
                          Intimidation
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='intimidation' name='intimidation'
                            onChange={event => setIntimidation(event.target.value)} value={intimidation}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Persuasion
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='persuasion' name='persuasion'
                            onChange={event => setPersuasion(event.target.value)} value={persuasion}
                          />
                        </div>
                        <div className="block text-black text-sm font-bold mb-1">
                          Tromperie
                          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='tromperie' name='tromperie'
                            onChange={event => setTromperie(event.target.value)} value={tromperie}
                          />
                        </div>
                      </div>
                      <div>
                        Jet de sauvegardes
                        <div className='grid gap-3'>
                          <div className="block text-black text-sm font-bold mb-1">
                            Force
                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='force' name='force'
                              onChange={event => setForce(event.target.value)} value={force}
                            />
                            <div className="block text-black text-sm font-bold mb-1">
                              Dextérité
                              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='dexterite' name='dexterite'
                                onChange={event => setDexterite(event.target.value)} value={dexterite}
                              />
                            </div>
                            <div className="block text-black text-sm font-bold mb-1">
                              Constitution
                              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='constitution' name='constitution'
                                onChange={event => setConstitution(event.target.value)} value={constitution}
                              />
                            </div>
                            <div className="block text-black text-sm font-bold mb-1">
                              Intelligence
                              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='constitution' name='constitution'
                                onChange={event => setIntelligence(event.target.value)} value={constitution}
                              />
                            </div>
                            <div className="block text-black text-sm font-bold mb-1">
                              Sagesse
                              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='sagesse' name='sagesse'
                                onChange={event => setSagesse(event.target.value)} value={sagesse}
                              />
                            </div>
                            <div className="block text-black text-sm font-bold mb-1">
                              Charisme
                              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='charisme' name='charisme'
                                onChange={event => setCharisme(event.target.value)} value={charisme}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-6 border-t border-solid border-blueGray-200 rounded-b justify-center" >
                    <button
                      className="text-white bg-yellow-300 active:bg-yellow-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      onClick={() => {
                        // setShowForm(false);
                        // createPerso()
                      }}
                    >
                      Créer mon personnage
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* @ts-ignore */}
      {personnages && personnages.map((item) => {
        return (
          <div className='grid'>
            <div className='mt-10 bg-gray-500'>
              <button>
                {/*@ts-ignore */}
                  <Cards
                    // @ts-ignore
                    personnages={item}

                  />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
}
export default Perso_DND;