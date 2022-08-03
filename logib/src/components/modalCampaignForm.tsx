import React from "react";

function ModalCampaignForm(props: any) {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Crée votre campagne
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => props.setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={props.handleSubmit}>
                                <div className="block text-black text-sm font-bold mb-1">
                                    Nom de la campagne
                                </div>
                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='nameCampaign' name='nameCampaign'
                                    onChange={event => props.setNameCampaign(event.target.value)} value={props.nameCampaign}
                                />
                                <div className="block text-black text-sm font-bold mb-1">
                                    Description de la campagne
                                </div>

                                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1 text-center" type="text" id='destCampaign' name='destCampaign'

                                    onChange={event => props.setdestCampaign(event.target.value)} value={props.destCampaign}
                                />
                                
                                <div className="block text-black text-sm font-bold mb-1">
                                    Moteur de jeu
                                </div>
                                <select className='text-sm shadow appearance-none border rounded w-full py-2 px-1 text-black text-center' onChange={event => props.setMotorGame(event.target.value)} value={props.motorGame}>
                                    <option value={''}></option>

                                    <option>Knight</option>
                                    <option>D&D</option>
                                </select>
                                <div className="block text-black text-sm font-bold mb-1">
                                    Image de la campagne
                                </div>
                                {/* 
                  <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-sm font-bold mb-1" type="text" id='nameCampaign' name='nameCampaign'
                    onChange={event => setImg(event.target.value)} value={img}
                  /> */}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => props.setShowModal(false)}
                                    >
                                        Fermer
                                    </button>
                                    <button
                                        className="text-white bg-yellow-300 active:bg-yellow-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="submit"
                                    >
                                        Créer une nouvelle campagne
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalCampaignForm