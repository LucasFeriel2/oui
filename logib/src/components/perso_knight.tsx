import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";

function Perso_Knight() {

    const createPerso = async () => {
        const objs = {
            nom: nom, prenom: prenom, archetype: archetype, blason: blason, avantages: {avantages, avantages1}, hautfait: hautfait, section: section,
            inconvenients: { inconvenients, inconvenients1 }, motivationMineures: motivationMineures, motivationMineures1: motivationMineures1, motivationMineures2: motivationMineures2,
            motivationMajeures: motivationMajeures, deplacement: deplacement, capaciteMetaArmure: capaciteMetaArmure, paMax: paMax, peMax: peMax, psMax: psMax, cdfMax: cdfMax, initiative: initiative,
            defense: defense, reaction: reaction, chair: chair, move: move, force: force, endurance: endurance, machine: machine, tir: tir, savoir: savoir, technique: technique, bete: bete,
            hargne: hargne, combat: combat, instinct: instinct, dame: dame, aura: aura, parole: parole, sang: sang, masque: masque, discretion: discretion, dexterite: dexterite, perception: perception
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

    const [showForm, setShowForm] = useState(false);

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [archetype, setArchetype] = useState('');
    const [blason, setBlason] = useState('');
    const [avantages, setAvantage] = useState('');
    const [avantages1, setAvantage1] = useState('');
    const [hautfait, setHautfait] = useState('');
    const [section, setSection] = useState('');
    const [inconvenients, setInconvenients] = useState('');
    const [inconvenients1, setInconvenients1] = useState('');
    const [motivationMineures, setmotivationMineures] = useState('');
    const [motivationMineures1, setmotivationMineures1] = useState('');
    const [motivationMineures2, setmotivationMineures2] = useState('');
    const [motivationMajeures, setmotivationMajeurs] = useState('');
    const [deplacement, setDeplacement] = useState('');


    //armor
    const [capaciteMetaArmure, setcapaciteMetaArmure] = useState('');
    const [paMax, setpaMax] = useState('');
    const [peMax, setpeMax] = useState('');
    const [psMax, setpsMax] = useState('');
    const [cdfMax, setcdfMax] = useState('');
    const [initiative, setInitiative] = useState('');
    const [defense, setDefense] = useState('');
    const [reaction, setReaction] = useState('');

    //stats
    const [chair, setChair] = useState('');
    const [move, setMove] = useState('');
    const [force, setForce] = useState('');
    const [endurance, setEndurance] = useState('');
    const [machine, setMachine] = useState('');
    const [tir, setTire] = useState('');
    const [savoir, setSavoir] = useState('');
    const [technique, setTechnique] = useState('');
    const [bete, setBete] = useState('');
    const [hargne, setHargne] = useState('');
    const [combat, setCombat] = useState('');
    const [instinct, setInstinct] = useState('');
    const [dame, setDame] = useState('');
    const [aura, setAura] = useState('');
    const [parole, setParole] = useState('');
    const [sang, setSang] = useState('');
    const [masque, setMasque] = useState('');
    const [discretion, setDiscretion] = useState('');
    const [dexterite, setDexterite] = useState('');
    const [perception, setPerception] = useState('');

    //@ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('name', nom);
        // console.log('destCampaign', destCampaign);
        // console.log('nbplayer', nbPlayer);
        // console.log('motorGame', motorGame);

        setNom('');
        // setdestCampaign('');
        // setNbPlayer('');
        // setMotorGame('');
        setShowForm(false);
    }


    return (
        <div className="App">
            <h1 style={{ position: "absolute", width: "501px", height: "145px", left: "35%", top: "10%", fontWeight: "400", fontSize: "64px", lineHeight: "74px", textAlign: "center", color: "#FFFFFF" }}>Vos campagnes</h1>
            <button className='button' onClick={() => setShowForm(true)}>Créer un personnage Knight</button>
            {showForm ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-3xl font=semibold">Création d'un personnage Knight</h3>
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
                                        Prénom
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='prenom' name='prenom'
                                            onChange={event => setPrenom(event.target.value)} value={prenom}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Archétype
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='archetype' name='archetype'
                                            onChange={event => setArchetype(event.target.value)} value={archetype}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Haut-fait
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='hautfait' name='hautfait'
                                            onChange={event => setHautfait(event.target.value)} value={hautfait}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Blason
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='blason' name='blason'
                                            onChange={event => setBlason(event.target.value)} value={blason}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Section
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='section' name='section'
                                            onChange={event => setSection(event.target.value)} value={section}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Avantages
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='avantages' name='avantages'
                                            onChange={event => setAvantage(event.target.value)} value={avantages}
                                        />
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='avantages1' name='avantages1'
                                            onChange={event => setAvantage1(event.target.value)} value={avantages1}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Inconvénients
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='inconvenients' name='inconvenients'
                                            onChange={event => setInconvenients(event.target.value)} value={inconvenients}
                                        />
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='inconvenients1' name='inconvenients1'
                                            onChange={event => setInconvenients1(event.target.value)} value={inconvenients1}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Motivations mineurs
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='motivationMineures' name='motivationMineures'
                                            onChange={event => setmotivationMineures(event.target.value)} value={motivationMineures}
                                        />
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='motivationMineures1' name='motivationMineures1'
                                            onChange={event => setmotivationMineures1(event.target.value)} value={motivationMineures1}
                                        />
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='motivationMineures2' name='motivationMineures2'
                                            onChange={event => setmotivationMineures2(event.target.value)} value={motivationMineures2}
                                        />
                                    </div>
                                    <div className="block text-black text-sm font-bold mb-1">
                                        Motivations majeur
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='motivationMajeures' name='motivationMajeures'
                                            onChange={event => setmotivationMajeurs(event.target.value)} value={motivationMajeures}
                                        />
                                    </div>
                                    <div>
                                        Armure
                                        <div className='grid grid-cols-2 gap-3' >
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Méta-armure
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='capaciteMetaArmure' name='capaciteMetaArmure'
                                                    onChange={event => setcapaciteMetaArmure(event.target.value)} value={capaciteMetaArmure}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Initiative
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='initiative' name='initiative'
                                                    onChange={event => setInitiative(event.target.value)} value={initiative}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Point d'armure max
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='paMax' name='paMax'
                                                    onChange={event => setpaMax(event.target.value)} value={paMax}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Point de santé max
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='psMax' name='psMax'
                                                    onChange={event => setpsMax(event.target.value)} value={psMax}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Défense
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='defense' name='defense'
                                                    onChange={event => setDefense(event.target.value)} value={defense}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Point d'énergie max
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='peMax' name='peMax'
                                                    onChange={event => setpeMax(event.target.value)} value={peMax}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Champ de force max
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='cdfMax' name='cdfMax'
                                                    onChange={event => setcdfMax(event.target.value)} value={cdfMax}
                                                />
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Réaction
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='reaction' name='reaction'
                                                    onChange={event => setReaction(event.target.value)} value={reaction}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Statistiques
                                        <div className='grid grid-cols-3 gap-3'>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Chair
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='chair' name='chair'
                                                    onChange={event => setChair(event.target.value)} value={chair}
                                                />
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Déplacement
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='deplacement' name='deplacement'
                                                        onChange={event => setDeplacement(event.target.value)} value={deplacement}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Force
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='force' name='force'
                                                        onChange={event => setForce(event.target.value)} value={force}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Endurance
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='endurance' name='endurance'
                                                        onChange={event => setEndurance(event.target.value)} value={endurance}
                                                    />
                                                </div>
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Bête
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='bete' name='bete'
                                                    onChange={event => setBete(event.target.value)} value={bete}
                                                />
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Hargne
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='hargne' name='hargne'
                                                        onChange={event => setHargne(event.target.value)} value={hargne}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Combat
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='combat' name='combat'
                                                        onChange={event => setCombat(event.target.value)} value={combat}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Instinct
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='instinct' name='instinct'
                                                        onChange={event => setInstinct(event.target.value)} value={instinct}
                                                    />
                                                </div>
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Machine
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='machine' name='machine'
                                                    onChange={event => setMachine(event.target.value)} value={machine}
                                                />
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Tir
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='tir' name='tir'
                                                        onChange={event => setTire(event.target.value)} value={tir}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Savoir
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='savoir' name='savoir'
                                                        onChange={event => setSavoir(event.target.value)} value={savoir}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Technique
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='technique' name='technique'
                                                        onChange={event => setTechnique(event.target.value)} value={technique}
                                                    />
                                                </div>
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Dame
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='dame' name='dame'
                                                    onChange={event => setDame(event.target.value)} value={dame}
                                                />
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Aura
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='aura' name='aura'
                                                        onChange={event => setAura(event.target.value)} value={aura}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Parole
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='parole' name='parole'
                                                        onChange={event => setParole(event.target.value)} value={parole}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Sang-froid
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='sang' name='sang'
                                                        onChange={event => setSang(event.target.value)} value={sang}
                                                    />
                                                </div>
                                            </div>
                                            <div className="block text-black text-sm font-bold mb-1">
                                                Masque
                                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='masque' name='masque'
                                                    onChange={event => setMasque(event.target.value)} value={masque}
                                                />
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Discrétion
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='discretion' name='discretion'
                                                        onChange={event => setDiscretion(event.target.value)} value={discretion}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Dextérité
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='dexterite' name='dexterite'
                                                        onChange={event => setDexterite(event.target.value)} value={dexterite}
                                                    />
                                                </div>
                                                <div className="block text-black text-sm font-bold mb-1">
                                                    Perception
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='perception' name='perception'
                                                        onChange={event => setPerception(event.target.value)} value={perception}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-6 border-t border-solid border-blueGray-200 rounded-b justify-center" >
                                        <button
                                            className="text-white bg-yellow-300 active:bg-yellow-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit"
                                            onClick={() => {
                                                setShowForm(false);
                                                createPerso()
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
        </div>
    );
}
export default Perso_Knight;