"use client";
import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import { UIStore } from "@/store/ui.store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Page() {
  const { setActiveSection } = UIStore();
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (contactInView) setActiveSection("Contact");
    else if (homeInView) setActiveSection("Home");
    else if (experienceInView) setActiveSection("Experience");
    else if (skillsInView) setActiveSection("Skills");
    else if (aboutInView) setActiveSection("About");
  }, [homeInView, contactInView, experienceInView, aboutInView, skillsInView]);

  return (
    <div className="overflow-x-hidden">
      <section id="Home" ref={homeRef}>
        <Home />
      </section>
      <section id="About" ref={aboutRef}>
        <About />
      </section>
      <section id="Experience" ref={experienceRef}>
        <Experience />
      </section>
      <section id="Skills" ref={skillsRef}>
        <Skills />
      </section>
      <section id="Contact" ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
