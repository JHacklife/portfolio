import { Stack, Box } from "@mui/material";
import useScrollToSection from "../hook/useScrollToSection";
import About from "./About/AboutMe";
import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import LangsAndTools from "./LangsAndTools/LangsAndTools"
import Projects from "./Projects/Projects"
import TechBackground from "../components/TechBackground";
import CyberStatusBar from "../components/CyberStatusBar";

export default function Page() {

  const { currentSection, sectionRefs } = useScrollToSection(["home", "about", "langsAndTools", "projects", "certificates", "contact"]);
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <TechBackground />
      <Stack>
        <Home ref={sectionRefs.current.home} />
        <About ref={sectionRefs.current.about} />
        <LangsAndTools ref={sectionRefs.current.langsAndTools} />
        <Projects ref={sectionRefs.current.projects} />
        {/* <Certificates ref={sectionRefs.current.certificates} /> */}
        <Contact ref={sectionRefs.current.contact} />
      </Stack>
      <CyberStatusBar />
    </Box>
  )
}