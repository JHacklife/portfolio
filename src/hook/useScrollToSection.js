import React, { useRef, useEffect } from 'react';

function useScrollToSection(sections) {
  const sectionRefs = useRef({});

  useEffect(() => {
    // Crea referencias para cada sección
    sections.forEach((section) => {
      sectionRefs.current[section] = React.createRef();
    });
  }, [sections]);

  const scrollToSection = (section) => {
    // Utiliza la referencia para desplazarte a la sección
    sectionRefs.current[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return { sectionRefs, scrollToSection };
}

export default useScrollToSection;
