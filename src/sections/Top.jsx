import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const Top = () => {
  useGSAP(()=>{
    gsap.from(".top", {
      opacity: 0,
      scale: 0.8,
      ease: 'sine.out'
    })
  },[])
  return (
    <section className='top'>
      <div className='max-w-96 flex flex-col items-center md:mt-4'>
        <button className='award'>
          <img src="/images/award.avif" alt="award" />
          <p>Lovi won Beauty Innovation Award!</p>
        </button>

        <h1 className='md:text-5xl text-3xl text-primary mt-4 text-center font-rebound '>
          Science-backed <br/>
          AI Cosmetologist <br/>
          you can trust
        </h1>
        <p className='mt-4 text-primary hidden md:block '>Focused around you and your beauty</p>
        <button className='download-btn mt-3 flex md:hidden justify-center items-center gap-2 '>
          <img src="/images/apple-logo.png" alt="apple logo" />
          <div>
            <p className='md:text-xs text-[10px] -mb-1'>Download on the</p>
            <h2 className='md:text-xl text-md font-bold'>App Store</h2>
          </div>
        </button>
      </div>
    </section>
  )
}
