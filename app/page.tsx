"use client";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import { UIStore } from "@/store/ui.store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Page() {
  const {setActiveSection} = UIStore();
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (contactInView) setActiveSection("Contact");
    else if (homeInView) setActiveSection("Home");
  }, [homeInView, contactInView]);
  return (
    <div className="overflow-x-hidden">
      <section id="Home" ref={homeRef}>
        <Home />
      </section>
      <section id="Contact" ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
