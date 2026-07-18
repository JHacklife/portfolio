import { Stack, Box } from "@mui/material";
import useScrollToSection from "../hook/useScrollToSection";
import About from "./About/AboutMe";
import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import LangsAndTools from "./LangsAndTools/LangsAndTools"
import Projects from "./Projects/Projects"
import TechBackground from "../components/TechBackground";
import Footer from "../components/Footer";

/**
 * Main Portfolio Page
 * 
 * Vibrant Cyberpunk Design - Clean and immersive layout
 * No sidebar widgets (System Status removed for cleaner UX)
 */

export default function Page() {
  const { currentSection, sectionRefs } = useScrollToSection([
    "home",
    "about",
    "langsAndTools",
    "projects",
    "contact"
  ]);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#0a0a0f',
      }}
    >
      <TechBackground />

      <Stack
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Home ref={sectionRefs.current.home} />
        <About ref={sectionRefs.current.about} />
        <LangsAndTools ref={sectionRefs.current.langsAndTools} />
        <Projects ref={sectionRefs.current.projects} />
        <Contact ref={sectionRefs.current.contact} />
        <Footer />
      </Stack>
    </Box>
  )
}
