import { Carousel } from "./Carousel";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useScreenBoxSettings, useScreenSettings } from "../../constants/responsive";
import { SkinIssue } from "./SkinIssue";

export const ScreenInner = ({steps, setSteps}) => {
  const {from, to} = useScreenSettings()
  const boxCoords = useScreenBoxSettings()
  useGSAP(
  () => {
    if (steps !== 1) return

    const tl = gsap.timeline()

    tl.set(".scan", { y: from })

    tl.to(".scan", {
      y: to,
      duration: 1,
      repeat: 2,
      yoyo: true,
      ease: "power1.inOut",
      onComplete: () => setSteps(2),
    })
  },
  { dependencies: [steps] }
  )

  useGSAP(
  () => {
    if (steps !== 2) return

    gsap.from(".box", {
      opacity: 0,
      y: 20,
      duration: 2.2,
      stagger: 0.15,
      ease: "power1.out",
      onComplete: () => setSteps(3),
    })
  },
  { dependencies: [steps] }
  )

  return (
    <div className={`screen-inner screen-inner-${steps}`}>
      {steps == 1 && (
        <>
        <h2 className='text-xl md:text-3xl text-white/80 font-rebound leading-tight '>
        Face scan <br />
        in progress.....
      </h2>
        <div className="scan"></div>
        </>
      )}
      {
        steps == 2 && (
          <>
            <h2 className='text-xl md:text-3xl text-white/80 font-rebound leading-tight '>
            Your SkinID <br />
            is ready!
            </h2>
            <div className="box">
            <SkinIssue {...boxCoords[0]} heading={"Oily"} para={"Your skin type"} />
            </div>
            <div className="box">
            <SkinIssue {...boxCoords[1]} heading={"Pigmentation"} para={"Your focus"} />
            </div>
            <div className="box">
            <SkinIssue {...boxCoords[2]} heading={"Wrinkles"} para={"Flawless"} />
            </div>
          </>
        )
      }
      {
        steps === 3 && (
          <>
          <h2 className='text-xl md:text-3xl text-white/80 font-rebound leading-tight '>
            Here’s a set of <br />
            tailored skincare:
          </h2>
          <Carousel />
          </>
        )
      }
    </div>
  );
};
