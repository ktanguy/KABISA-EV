import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


const App = () => {
  let heroData = [
    {text1:"Ibira",text2:"mu byo Ukunda"},
    {text1:"Emeza",text2:"Ibyifuzo byawe"},
    {text1:"Rinda Ibidukikije  ",text2:"Hamwe na KABISA-EV"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);


  useEffect (()=>{
  setInterval(() => {
    setHeroCount((count)=>{return count===2?0:count+1})
  }, 3000);
  },[])


  return (
    <div>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>
     <Hero
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     />
    </div>
  )
}


export default App