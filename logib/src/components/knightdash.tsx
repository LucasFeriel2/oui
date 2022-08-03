export default function KnightDash(props: any) {
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
            <input className="absolute top-[60px] left-[10px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Surnom"></input>
            <input className="absolute top-[10px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Prénom"></input>
            <input className="absolute top-[60px] left-[220px] w-[200px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Méta-armure"></input>
            <div className="absolute left-0 top-[120px] h-[100px] w-[442px] border-r-2 border-l-2 border-4 border-solid border-black">
                    <img src='https://cdn-icons-png.flaticon.com/512/535/535285.png' className='w-10 absolute pt-1 left-1'></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-1 text-center bg-transparent border-2 " placeholder="PS"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/7634/7634606.png' className='w-10 absolute pt-1 left-[60px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[60px] text-center bg-transparent border-2 " placeholder="PA"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/8030/8030382.png' className='w-10 absolute pt-1 left-[115px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[115px] text-center bg-transparent border-2 "placeholder="PE"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/1388/1388574.png' className='w-10 absolute pt-1 left-[170px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[170px] text-center bg-transparent border-2 "placeholder="CDF"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/1584/1584892.png' className='w-10 absolute pt-1 left-[225px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[225px] text-center bg-transparent border-2 "placeholder="INI"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/5156/5156564.png' className='w-10 absolute pt-1 left-[280px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[280px] text-center bg-transparent border-2 "placeholder="ESP"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/861/861377.png' className='w-10 absolute pt-1 left-[335px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[335px] text-center bg-transparent border-2 "placeholder="DEF"></input>
                    <img src='https://cdn-icons-png.flaticon.com/512/5073/5073994.png' className='w-10 absolute pt-1 left-[390px]' ></img>
                    <input className="w-[40px] h-[40px] absolute top-[45px] left-[390px] text-center bg-transparent border-2 "placeholder="RÉA"></input>
            </div>
            <div className='absolute left-0 top-[240px] w-full '>
                <label className="absolute left-[180px] -top-[10px] text-sm  text-black">OD</label>
                <label className="absolute left-[290px] -top-[10px] text-sm  text-black">OD</label>
                <label className="absolute left-[390px] -top-[10px] text-sm  text-black">OD</label>
                <label className=' absolute left-3  text-black '>CHAIR</label><br></br>
                <input className=' absolute  top-5 w-12 h-12 left-[20px] absolute bg-transparent border-black border-4  text-center'></input>
                <label className=' top-2 text-black  absolute left-[100px]  text-sm'>Déplacement</label><br></br>
                <input className=' absolute left-[120px] top-[25px]  w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[170px] top-[30px]  w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-2 text-black absolute left-[230px]  text-sm'>Force</label><br></br>
                <input className=' absolute left-[230px] top-[25px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[280px] top-[30px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-2 absolute left-[320px] text-black text-sm'>Endurance</label><br></br>
                <input className='absolute left-[330px] top-[25px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className='absolute left-[380px] top-[30px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' absolute left-5 top-[80px]  text-black '>BÊTE</label><br></br>
                <input className=' absolute  top-[100px] w-12 h-12 left-[20px] absolute bg-transparent border-black border-4  text-center'></input>
                <label className=' top-[80px] text-black  absolute left-[120px]  text-sm'>Hargne</label><br></br>
                <input className=' absolute left-[120px] top-[100px]  w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[170px] top-[105px]  w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[80px] text-black absolute left-[230px]  text-sm'>Combat</label><br></br>
                <input className=' absolute left-[230px] top-[100px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[280px] top-[105px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[80px] absolute left-[325px] text-black text-sm'>Instinct</label><br></br>
                <input className='absolute left-[330px] top-[100px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className='absolute left-[380px] top-[105px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' absolute left-1 top-[155px]  text-black '>MACHINE</label><br></br>
                <input className=' absolute  top-[175px] w-12 h-12 left-[20px] absolute bg-transparent border-black border-4  text-center'></input>
                <label className=' top-[155px] text-black  absolute left-[130px]  text-sm'>Tir</label><br></br>
                <input className=' absolute left-[120px] top-[175px]  w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[170px] top-[180px]  w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[155px] text-black absolute left-[230px]  text-sm'>Savoir</label><br></br>
                <input className=' absolute left-[230px] top-[175px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[280px] top-[180px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[155px] absolute left-[320px] text-black text-sm'>Technologie</label><br></br>
                <input className='absolute left-[330px] top-[175px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className='absolute left-[380px] top-[180px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' absolute left-3 top-[230px]  text-black '>DAME</label><br></br>
                <input className=' absolute  top-[250px] w-12 h-12 left-[20px] absolute bg-transparent border-black border-4  text-center'></input>
                <label className=' top-[230px] text-black  absolute left-[120px]  text-sm'>Parole</label><br></br>
                <input className=' absolute left-[120px] top-[250px]  w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[170px] top-[255px]  w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[230px] text-black absolute left-[235px]  text-sm'>Aura</label><br></br>
                <input className=' absolute left-[230px] top-[250px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[280px] top-[255px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[230px] absolute left-[320px] text-black text-sm'>Sang-Froid</label><br></br>
                <input className='absolute left-[330px] top-[250px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className='absolute left-[380px] top-[255px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' absolute left-1 top-[305px]  text-black '>MASQUE</label><br></br>
                <input className=' absolute  top-[325px] w-12 h-12 left-[20px] absolute bg-transparent border-black border-4  text-center'></input>
                <label className=' top-[305px] text-black  absolute left-[110px]  text-sm'>Discrétion</label><br></br>
                <input className=' absolute left-[120px] top-[325px]  w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[170px] top-[330px]  w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[305px] text-black absolute left-[220px]  text-sm'>Dextérité</label><br></br>
                <input className=' absolute left-[230px] top-[325px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className=' absolute left-[280px] top-[330px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
                <label className=' top-[305px] absolute left-[320px] text-black text-sm'>Perception</label><br></br>
                <input className='absolute left-[330px] top-[325px] w-10 h-10 bg-transparent border-black border-2  text-center'></input>
                <input className='absolute left-[380px] top-[330px] w-8 h-8 bg-transparent border-black border-2  text-center'></input>
            </div>
            <div className="absolute left-0 top-[625px] h-[160px] w-[221px] border-r-2 border-l-2 border-4 border-solid border-black">
                <label className="absolute left-[60px] ">Avantages :</label><br></br><br></br>
                <textarea className="resize-none w-[215px]"></textarea><br></br>
                <textarea className="resize-none w-[215px]"></textarea>
            </div>
            <div className="absolute  top-[625px] h-[160px] w-[221px] left-[221px] border-r-2 border-l-2 border-4 border-solid border-black">
                <label className="absolute left-[50px] ">Inconvénients :</label><br></br><br></br>
                <textarea className="resize-none w-[215px]"></textarea><br></br>
                <textarea className="resize-none w-[215px]"></textarea>
            </div>
            <div className="absolute left-0 top-[790px]  w-full ">
                <label className="absolute left-[210px]">IA</label>
                <input className="absolute top-[5px] left-[10px] w-[150px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Code fabrication"></input>
                <input className="absolute top-[5px] left-[270px] w-[150px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Surnom"></input>
                <input className="absolute top-[40px] left-[140px] w-[150px] border-black border-solid border-b-4 rounded-b-lg bg-transparent text-center " placeholder="Caractère"></input>
                <label className="absolute left-[50px] top-[50px]  ">Atout :</label>
                <textarea className="resize-none w-[150px] absolute left-[10px] top-[80px] h-[65px] text-sm "></textarea>
                <label className="absolute left-[320px] top-[50px]  ">Atout :</label>
                <textarea className="resize-none w-[150px] absolute left-[270px] top-[80px] h-[65px] text-sm "></textarea>
            </div>
        </div>
          
        </div>
    )
}