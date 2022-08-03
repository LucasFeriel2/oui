import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "@firebase/auth";
import Cards from "./cards"
import { useState } from 'react';
import ModalCampaignForm from './modalCampaignForm';
import ModalUpdateCampaignForm from './modalUpdateCampaignForm';


function Campagne() {
  const [idMj, setIdMj] = useState("")
  const [campaign, setCampaign] = useState([])
  const [nameCampaign, setNameCampaign] = useState('');
  const [destCampaign, setdestCampaign] = useState('');
  const [nameUpdateCampaign, setUpdateNameCampaign] = useState('');
  const [destUpdateCampaign, setUpdatedestCampaign] = useState('');
  const [nbPlayer, setNbPlayer] = useState('');
  const [motorGame, setMotorGame] = useState('');
  const [showModal, setShowModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateCampaignInfo, setUpdateCampaignInfo] = useState({})
  const [currentCampaignId, setCurrentCampaignId] = useState('')
  let navigate = useNavigate();

  useEffect(() => {
    var auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid)
        setIdMj(user.uid)
        const getCampaign = async () => {
          const data = await axios(`http://localhost:3000/api/campaign/${user.uid}`)
          setCampaign(data.data)
        }
        getCampaign().catch(console.error)
        // User is signed in.
      } else {
        window.alert("Vous n'êtes pas connecté, accès refusé");
        let path = `/`;
        navigate(path);
      }
    })
    console.log(campaign)
  }, []);

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

  //@ts-ignore
  const createCampaign = async (campaignForm) => {
    let createdCampaign = {
      name: campaignForm.nameCampaign,
      idMj: idMj,
      description: campaignForm.destCampaign,
      type: campaignForm.motorGame,
      image: 'test',
      personnages: nbPlayer
    }
    try {
      axios.post('http://localhost:3000/api/campaign',
        { name: campaignForm.nameCampaign, idMj: idMj, description: campaignForm.destCampaign, type: campaignForm.motorGame, image: 'test', personnages: nbPlayer })
        .then(res => {
          console.log(res);
          //@ts-ignore
          setCampaign([...campaign, createdCampaign])
        })
    }
    catch (error) {
      console.log('error', error);
    }
  }

  const deleteCampaign = async (id: String) => {
    console.log("ID to delete", id)
    try {
      axios.delete(`http://localhost:3000/api/campaign/${id}`)
        .then(res => {
          const indexOfObject = campaign.findIndex(object => {
            // @ts-ignore
            return object.id === id;
          })
          campaign.splice(indexOfObject, 1)
          console.log("after slice", campaign)
          //@ts-ignore
          setCampaign(current => current.filter(campaign => { return campaign.id !== id }))
        })
    } catch (error) {
      console.log("error when delete", error)
    }
  }

  const handleUpdate = (campaignInfo: any) => {
    console.log("CAMPAIGNINFO", campaignInfo)
    let info = {
      name: campaignInfo.campagne.nameUpdateCampaign,
      idMj: idMj,
      id: campaignInfo.campagne.id,
      description: campaignInfo.campagne.destUpdateCampaign,
    }
    setUpdateCampaignInfo(info)
    setShowUpdateModal(true)
    setUpdateNameCampaign(info.name)
    setUpdatedestCampaign(info.description)
    setCurrentCampaignId(info.id)

  }

  const updateCampaign = async (id: String, updateForm: any) => {
    console.log("RES", updateForm)
    let updateCampaign = {
      name: updateForm.nameUpdateCampaign,
      idMj: idMj,
      description: updateForm.destUpdateCampaign,
      image: 'test',
    }
    try {
      axios.post(`http://localhost:3000/api/campaign/${id}`, { name: updateCampaign.name, description: updateCampaign.description, idMj: idMj })
        .then(res => {
          const indexOfObject = campaign.findIndex(object => {
            // @ts-ignore
            return object.id === id;
          })
          console.log("RES", indexOfObject)
          console.log("UPD", res)

          const savedCampaign = [...campaign]
          //@ts-ignore
          savedCampaign[indexOfObject].name = updateCampaign.name
          //@ts-ignore
          campaign[indexOfObject].description = updateCampaign.description
          console.log(campaign[indexOfObject])
          console.log("all cmp", campaign)
          setCampaign(savedCampaign)
        })
    }
    catch (error) {
      console.log("error to update", error)
    }
  }

  //@ts-ignore
  const handleSubmit = (event) => {
    const campaign = { nameCampaign, destCampaign, motorGame }
    createCampaign(campaign)
    event.preventDefault();
    setNameCampaign('');
    setdestCampaign('');
    setNbPlayer('');
    setMotorGame('');
    // setImg('');
    event.target.reset();
    console.log('nameCampaign', nameCampaign);

    setShowModal(false);
  }

  //@ts-ignore
  const handleSubmitUpdate = (event) => {
    const campaign = { nameUpdateCampaign, destUpdateCampaign }
    console.log(currentCampaignId)
    updateCampaign(currentCampaignId, campaign)
    closeUpdateModal()
  }

  const closeUpdateModal = () => {
    setShowUpdateModal(false)
    setUpdatedestCampaign("")
    setUpdateNameCampaign("")
  }
  return (
    <div className="App">
      <h1 className='absolute w-11/12 h-92 top-32 font-normal text-6xl leading-10 text-center text-black'>Vos campagnes</h1>
      <button className='button' onClick={() => setShowModal(true)}>Créer une nouvelle campagne</button>
      {
        showModal ?
          <ModalCampaignForm
            //@ts-ignore
            setShowModal={setShowModal}
            handleSubmit={handleSubmit}
            nameCampaign={nameCampaign}
            setNameCampaign={setNameCampaign}
            setdestCampaign={setdestCampaign}
            destCampaign={destCampaign}
            setMotorGame={setMotorGame}
            motorGame={motorGame}
            setNbPlayer={setNbPlayer}
            nbPlayer={nbPlayer}
          /> : null
      }
      {
        showUpdateModal ?
          <ModalUpdateCampaignForm
            //@ts-ignore
            setShowModal={setShowUpdateModal}
            handleSubmitUpdate={handleSubmitUpdate}
            updateCampaign={updateCampaign}
            updateCampaignInfo={updateCampaignInfo}
            nameUpdateCampaign={nameUpdateCampaign}
            setUpdateNameCampaign={setUpdateNameCampaign}
            destUpdateCampaign={destUpdateCampaign}
            setUpdatedestCampaign={setUpdatedestCampaign}
            closeUpdateModal={closeUpdateModal}

          /> : null
      }
      <div className='grid grid-cols-5 gap-5 px-5 py-10'>
        {/* @ts-ignore */}
        {campaign && campaign.map((item) => {
          return (
            <div className='mt-10 bg-gray-200 rounded-2xl m-auto'>
              {/*@ts-ignore */}
              {/* <Link to={`/Personnage/${item.id}`}> */}
              <Cards
                // @ts-ignore
                campagne={item}
                handleDelete={deleteCampaign}
                handleUpdate={handleUpdate}
                setCurrentCampaignId={setCurrentCampaignId}
              />
              {/* </Link> */}
              <br />
            </div>
          )
        })}
      </div>

    </div>
  );
}
export default Campagne;
