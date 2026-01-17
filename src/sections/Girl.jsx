import { useGSAP } from "@gsap/react"

export const Girl = () => {
  useGSAP(()=>{

  },[])

  return (
    <div className="girl">
      <div className="w-full h-full relative">
        <video src="/videos/before.mp4" autoPlay muted loop preload="auto" playsInline ></video>
        <div class="overlay" />
        <div className="screen">
          <img src="/images/screen.png" alt="screen"  />
          <div className="screen-inner">
            <h2 className="text-2xl text-white">
              Here’s a set of <br/>
              tailored skincare:
            </h2>
            <div className="mb-4 w-full p-4 overflow-hidden ">
              <div className="w-24 h-28 bg-amber-500 rounded-xl"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
