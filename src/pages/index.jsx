import useScrollToSection from "../hook/useScrollToSection";
import About from "./About/About";
import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import LangsAndTools from "./LangsAndTools/LangsAndTools"
import Projects from "./Projects/Projects"

export default function Page() {
  
  const { currentSection, sectionRefs } = useScrollToSection(["home", "about", "langsAndTools", "projects", "certificates", "contact"]);
  return (
    <>
      <Home ref={sectionRefs.current.home} />
      <About ref={sectionRefs.current.about} />
      <LangsAndTools ref={sectionRefs.current.langsAndTools} />
      <Projects ref={sectionRefs.current.projects} />
      <Certificates ref={sectionRefs.current.certificates} />
      <Contact ref={sectionRefs.current.contact} />
    </>
  )
}