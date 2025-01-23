import { About } from "./components/About";
import { Projects } from "./components/Projects.tsx";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Skills } from "./components/Skills";
import {Certifications} from "./components/Certifications";
import {Gameboy} from "./components/Gameboy";
import './scss/snes.scss';
import "./App.css";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gameboy />
        <Certifications />
        <Footer />
        <ScrollToTop />
    </>
  );
}

export default App;
