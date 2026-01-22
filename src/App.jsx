import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { Navbar } from "./components/Navbar";
import { Top } from "./sections/Top";
import { Girl } from "./sections/Girl";
import { Text } from "./sections/Text";
import { Faq } from "./sections/Faq";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: '#main',
  content: '#wrapper',
  smooth: 1.2,
  effects:true,
  smoothTouch: 0.1
})

function App() {
  
  return (
    <main id="main" className="min-h-screen  max-w-300 w-full mx-auto">
      <div id="wrapper" className="w-full h-full md:p-4 container">
        {/* <div className="blur -mx-4" /> */}
        <Navbar/>
        <Top />
        <Girl />
        <Text />
        <Faq />
      </div>
    </main>
  );
}

export default App