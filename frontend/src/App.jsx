import { HERO_CONTENT, ABOUT_CONTENT, SKILLS, PROJECTS, CONTACT_INFO } from "./constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary min-h-screen text-textMain">
      <Navbar />
      <main>
        <Hero content={HERO_CONTENT} />
        <About content={ABOUT_CONTENT} />
        <Skills skills={SKILLS} />
        <Projects projects={PROJECTS} />
        <Contact contactInfo={CONTACT_INFO} />
      </main>
      <Footer />
    </div>
  );
}

export default App;