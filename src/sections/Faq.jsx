import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useImageSettings } from "../../constants/responsive"

export const Faq = () => {
  const {first, second, from} = useImageSettings()
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ".upper-wrapper",
        endTrigger: '.upper-wrapper',
        start: `top+=${first}% center`,
        end: `bottom center-=${second}%`,
        scrub:true,
        pin:true,
        pinSpacing: true,
        anticipatePin: 1,
      }
    }).from(".upper",{
      y: from
    })

  },[])
  return (
    <section className="w-[80%]  mx-auto relative upper-wrapper -md:mt-40 ">
      <div className="w-full upper  z-20 flex flex-col">
        <div className="bg-white rounded-3xl p-8 flex md:flex-row flex-col shadow-lg">
        <h1 className="text-primary md:text-5xl text-2xl flex-1 font-rebound mb-4 md:mb-0">FAQ</h1>
        <div className="flex-3 questions">
          <p>What is Lovi?</p>
          <p>Is it safe & secure?</p>
          <p>Are you brand-affiliated?</p>
          <p>How are you science-backed exactly?</p>
        </div>
        </div>
        <div className="w-full relative overflow-hidden rounded-3xl ">
          <img className=" w-full md:h-175 h-100 object-cover " src="/images/woman.avif" alt="woman" />
          <img className="absolute top-0 left-60" src="/images/glitter.png" alt="" />
        </div>
      </div>
      <div className="md:my-12 my-6 -z-10">
        <p className="md:text-5xl text-3xl mb-4 leading-14 text-primary font-rebound ">
          Read our articles on <br />
          Medium, and follow us on <br />
          Instagram, Tiktok <br />
          and Linkedin
        </p>
      </div>
    </section>
  )
}
