import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/work";
import Projects from "./Components/Projects/project";
import Services from "./Components/Services/service";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { useState, useEffect } from "react";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
