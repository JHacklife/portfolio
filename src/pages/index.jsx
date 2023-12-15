import About from "./About/About";
import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import LangsAndTools from "./LangsAndTools/LangsAndTools"
import Projects from "./Projects/Projects"

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <LangsAndTools />
      <Projects />
      <Certificates />
      <Contact />
    </>
  )
}