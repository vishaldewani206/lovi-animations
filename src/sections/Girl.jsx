import { useGSAP } from "@gsap/react"
import { ScreenInner } from "../components/ScreenInner"
import {  useState } from "react"
import gsap from "gsap"
export const Girl = () => {
  const [steps, setSteps] = useState(1)

  const url = ()=>{
    if(steps == 1){
      return "/videos/first.mp4"
    }else if(steps == 2){
      return "/videos/before.mp4"
    }else{
      return "/videos/main.mp4"
    }
  }

  useGSAP(()=>{
    gsap.from(".girl", {
      opacity: 0,
      scale: 0.8,
      delay: 0.3,
      ease: 'sine.out'
    })
  },[])

  return (
    <div className="girl">
      <div className="w-full h-full relative">
        <video  src={url()} autoPlay muted loop preload="auto" playsInline poster="/images/poster.avif"></video>
        <div className="overlay" />
        <div className="screen">
          <img src="/images/screen.png" alt="screen"  />
          <ScreenInner setSteps={setSteps} steps={steps} />
        </div>
      </div>
    </div>
  )
}