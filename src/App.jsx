import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navbar } from "./sections/Navbar";
import { Top } from "./sections/Top";
import { Girl } from "./sections/Girl";

gsap.registerPlugin(ScrollTrigger)

function App() {



  return (
    <main className="min-h-screen container max-w-300 w-full mx-auto p-4">
      <div class="blur" />
      <Navbar/>
      <Top />
      <Girl />
    </main>
  );
}

export default App