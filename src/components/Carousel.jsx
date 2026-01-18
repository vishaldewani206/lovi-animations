import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { getImages } from "../../constants/data"

export const Carousel = () => {
  const allImages = getImages()

  useGSAP(()=>{
    gsap.to('.grouped', {
      translateX: "-100%",
      duration:7,
      repeat: -1,
      ease: 'linear'
    })
  },[])

  return (
    <div className="mb-6 md:mb-4 w-[95%] md:p-4 p-2 overflow-hidden flex mx-auto my-20 overflow-x-auto scrollbar-hide">
      <div className="grouped flex gap-3 pl-3">
      {
        allImages.map((e,i)=>(
          <div key={i} className="w-24 h-28 p-1 bg-white rounded-xl">
            <img src={e} alt="products" className="w-full" />
          </div>
        ))
      }
      </div>
      <div className="grouped flex gap-3 pl-3">
        {
        allImages.map((e,i)=>(
          <div aria-hidden key={i+1} className="w-24 h-28 p-1 bg-white rounded-xl">
            <img src={e} alt="products" className="w-full" />
          </div>
        ))
      }
      </div>
    </div>
  )
}
