import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navbar } from "./components/Navbar";
import { Top } from "./sections/Top";
import { Girl } from "./sections/Girl";
import { Text } from "./sections/Text";

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <main className="min-h-screen container max-w-300 w-full mx-auto md:p-4">
      <div className="blur -mx-4" />
      <Navbar/>
      <Top />
      <Girl />
      <Text />
    </main>
  );
}

export default App