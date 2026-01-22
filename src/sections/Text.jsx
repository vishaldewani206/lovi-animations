import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMobileSettings } from "../../constants/responsive";

gsap.registerPlugin(SplitText);

export const Text = () => {
  const {x} = useMobileSettings()
  useGSAP(() => {

document.fonts.ready.then(() => {
  gsap.set(".text", { opacity: 1 });
  let split = SplitText.create(".animate-me", { type: "chars", aria: "hidden" });

  gsap.from(split.chars, {
    opacity: 0,
    duration: 3,
    ease: "sine.out",
    stagger: 0.2,
    scrollTrigger:{
      trigger: '.text',
      start: 'top 80%',
      end: 'center 90%',
      scrub: true
    }
  });

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: '.mobile',
      start: 'top 80%',
      end: '150% 70%',
      toggleActions: "play reverse play reverse",
      
    }
  })
  tl.fromTo('.img-1', {
    scale: 0.8,
    x: 0,
    rotateZ:0
  },{
    x: x,
    rotateZ: 3,
    scale: 1,
    ease: 'power1.out'
  })
  .fromTo(".img-2",{
    scale: 0.8,
    x: 0,
    rotateZ:0
  }, {
    x: -x,
    rotateZ: -3,
    scale: 1,
    ease: 'power1.out'
  }, "<")
});
})
  return (
    <section className='md:my-12 my-6 text '>
      <div className="my-28">
        <p className="animate-me ">
          Lóvi is a comprehensive <br/>
          approach to your skin health. 
        </p>
        <p className="animate-me">
          Set your goals and build a best <br />
          fit skincare routine, track <br />
          changes with face scanner, <br />
          check cosmetics safety
        </p>
        <p className="animate-me">
          Get all your questions answered  <br/>
          with science- backed AI.
        </p>
      </div>

      <div className="flex mobile">
        <img className="img-1" src="/images/mobile-1.avif" alt="face scan" />
        <video src="/videos/face-scan.mp4" autoPlay muted loop ></video>
        <img className="img-2" src="/images/mobile-2.avif" alt="face scan" />
      </div>
      <p className="text-primary mt-12 md:mt-20 font-rebound text-center text-xl md:text-2xl leading-5 md:leading-6">
        Scan your face to see <br />
        it in its full glory
      </p>
    </section>
  );
};
