import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page(){
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Clients />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
