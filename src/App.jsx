import "./App.css";
import { useState } from "react";

import Navbar from "./components/NavBar";
import Hero from "./pages/Home";
import About from "./pages/About";
import PropertyServices from "./pages/Services";
import WhyChoose from "./pages/WhyChoose";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ConsultationModal from "./components/ConsultationModal";
import Insights from "./pages/Insights";
import Footer from "./pages/Footer";

function App(){
  const [showModal, setShowModal] = useState(false);
  return(
    <>
    <Navbar onConsult={() => setShowModal(true)}/>
    <Hero onConsult={() => setShowModal(true)}/>
    <About/>
    <PropertyServices onConsult={() => setShowModal(true)}/>
    <WhyChoose/>
    <Projects onConsult={() => setShowModal(true)}/>
    <Contact />
    <Insights/>
    <Footer onConsult={() => setShowModal(true)}/>
    <ConsultationModal show={showModal} onClose={() => setShowModal(false)}/>
    </>
  )
}
export default App;