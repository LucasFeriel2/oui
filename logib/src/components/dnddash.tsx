export default function DnDDash(props: any) {
    return (
        <div className="App">
        <div className='absolute w-full h-24 left-11/12 top-0' style={{ background: "#00487C" }}>
          <img className='basis-1/5 absolute w-50 h-full  left-0 top-0' src="https://i.goopics.net/c2girn.png"></img>
          <p className='basis-2/5 absolute w-2/12 h-10 left-32 top-6 text-3xl'>Profil</p>
          <p className='basis-3/5 absolute w-2/12 h-10 left-1/4 top-6 text-3xl'>Campagnes</p>
          <button ><p className='basis-5/5 absolute w-2/12 h-10 left-3/4 top-6 text-3xl'>Déconnexion</p></button>
        </div>
        <div className="rounded-lg absolute border-solid border-black border-4 w-[450px] h-[950px] top-28 left-2">
        <input className="absolute top-[10px] left-[10px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Nom"></input>
            <input className="absolute top-[60px] left-[10px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Race"></input>
            <input className="absolute top-[10px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Classe"></input>
            <input className="absolute top-[60px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Alignement"></input>
            <input className="absolute top-[110px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Historique"></input>
            <input className="absolute top-[110px] left-[10px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Niveau et XP"></input>
            <input className="absolute top-[160px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Trait de personnalité"></input>
            <input className="absolute top-[160px] left-[10px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Défaut"></input>
            <input className="absolute top-[210px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Lien"></input>
            <input className="absolute top-[210px] left-[10px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Idéal"></input>

            <div className="absolute left-0 top-[260px] h-[100px] w-[442px] border-r-2 border-l-2 border-4 border-solid border-black">
                    <img src='https://cdn-icons-png.flaticon.com/512/535/535285.png' className='w-10 absolute pt-1 left-1'></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-1 text-center bg-transparent border-2 " placeholder="PV"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/861/861377.png' className='w-10 absolute pt-1 left-[60px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[60px] text-center bg-transparent border-2 " placeholder="CA"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/1584/1584892.png' className='w-10 absolute pt-1 left-[115px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[115px] text-center bg-transparent border-2 "placeholder="INI"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/1108/1108869.png' className='w-10 absolute pt-1 left-[170px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[170px] text-center bg-transparent border-2 "placeholder="VIT"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/587/587342.png' className='w-10 absolute pt-1 left-[225px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[225px] text-center bg-transparent border-2 "placeholder="PP"></input>
                    <label className='absolute pt-1 left-[280px] top-[30px]' >Maîtrise : </label> 
                    <input className="w-[40px] h-[40px] absolute top-[28px] left-[370px] text-center bg-transparent border-2 "placeholder="Prof"></input>
            </div>
            <div className="absolute left-0 top-[365px] h-[130px] w-[442px] border-r-2 border-l-2 border-4 border-solid border-black">
                <label className="absolute top-1 left-[170px]">Statistiques</label>
                <div className=" top-[30px] absolute left-0 w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-red-500 absolute left-[15px] top-[7px] text-sm ">Force</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[73px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="absolute left-[1px] top-[10px] text-xs ">Constitution</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[146px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-green-500 absolute left-[5px] top-[7px] text-sm ">Dextérité</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[219px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-blue-500 absolute left-[2px] top-[10px] text-xs ">Intelligence</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[292px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-yellow-500 absolute left-[4px] top-[7px] text-sm ">Charisme</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[365px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-purple-500 absolute left-[12px] top-[7px] text-sm ">Sagesse</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
            </div>
            <div className="absolute left-0 top-[492px] h-[130px] w-[442px] border-r-2 border-l-2 border-4 border-solid border-black">
                <label className="absolute top-1 left-[130px]">Jets de sauvegardes</label>
                <div className=" top-[30px] absolute left-0 w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-red-500 absolute left-[15px] top-[7px] text-sm ">Force</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[73px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="absolute left-[1px] top-[10px] text-xs ">Constitution</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[146px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-green-500 absolute left-[5px] top-[7px] text-sm ">Dextérité</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[219px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-blue-500 absolute left-[2px] top-[10px] text-xs ">Intelligence</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[292px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-yellow-500 absolute left-[4px] top-[7px] text-sm ">Charisme</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[365px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-purple-500 absolute left-[12px] top-[7px] text-sm ">Sagesse</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
            </div>
            <div className="absolute left-0 top-[622px] h-[320px] w-[442px] border-r-2 border-l-2 border-4 border-solid border-black">
                <label className="absolute top-1 left-[150px]">Compétences</label>
                <div className=" top-[30px] absolute left-0 w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-red-500 absolute left-[20px] top-[7px] text-sm ">ATH</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[73px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                <label className="text-green-500 absolute left-[15px] top-[7px] text-sm ">ACRO</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[146px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-green-500 absolute left-[15px] top-[7px] text-sm ">DISC</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[219px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-green-500 absolute left-[15px] top-[7px] text-sm ">ESCA</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[292px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-blue-500 absolute left-[15px] top-[7px] text-sm ">ARCA</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[30px] absolute left-[365px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-blue-500 absolute left-[15px] top-[7px] text-sm ">HIST</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className=" top-[125px] absolute left-0 w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-red-500 absolute left-[20px] top-[7px] text-sm ">NATU</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[125px] absolute left-[73px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                <label className="text-green-500 absolute left-[15px] top-[7px] text-sm ">RELI</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[125px] absolute left-[146px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-green-500 absolute left-[15px] top-[7px] text-sm ">INVE</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[125px] absolute left-[219px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-purple-500 absolute left-[15px] top-[7px] text-sm ">DRES</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[125px] absolute left-[292px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-purple-500 absolute left-[15px] top-[7px] text-sm ">MEDE</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[125px] absolute left-[365px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-purple-500 absolute left-[15px] top-[7px] text-sm ">PERP</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>

                <div className=" top-[220px] absolute left-0 w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-purple-500 absolute left-[20px] top-[7px] text-sm ">PERC</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[220px] absolute left-[73px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                <label className="text-purple-500 absolute left-[15px] top-[7px] text-sm ">SURV</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[220px] absolute left-[146px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-yellow-500 absolute left-[15px] top-[7px] text-sm ">INTI</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[220px] absolute left-[219px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-yellow-500 absolute left-[15px] top-[7px] text-sm ">PERS</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[220px] absolute left-[292px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-yellow-500 absolute left-[15px] top-[7px] text-sm ">REPR</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
                <div className="top-[220px] absolute left-[365px] w-[73px] border-l-2 border-2 h-[95px] border-black border-solid">
                    <label className="text-yellow-500 absolute left-[15px] top-[7px] text-sm ">TROM</label>
                    <input type="checkbox" className="absolute top-0 left-[55px]"></input>
                    <input className="w-[40px] h-[40px] absolute top-[30px] left-[15px] text-center bg-transparent border-2 border-black border-solid rounded-full "></input>
                </div>
            </div>
        </div>
          
        </div>
    )
}