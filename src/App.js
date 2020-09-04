import React from "react";

import "./Navbar/Navbar";
import Navbar from "./Navbar/Navbar";
import Showcase from "./Showcase/Showcase";
import About from "./About/About";
import Misc from "./Misc/Misc";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    document.querySelector(".navbar").style.background =
      "rgba(51, 51, 51, 0.9)";
  } else {
    document.querySelector(".navbar").style.background = "rgba(51, 51, 51, 0)";
  }
});

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Showcase />
      <Misc />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* skills */}
      {/* projects */}
      {/* contact */}
    </div>
  );
}

export default App;
