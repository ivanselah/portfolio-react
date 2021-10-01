import React, { useEffect, useRef } from "react";
import { mainBody, about, skills } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Navigation from "./components/Navbar";
import AboutMe from "./components/home/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/home/Skills";
import Project from "./components/home/Project";

let home;
let homeHeight;
let arrowUp;

function App() {
  const titleRef = useRef();

  useEffect(() => {
    home = document.querySelector("#home");
    homeHeight = home.getBoundingClientRect().height;
    arrowUp = document.querySelector(".arrow-up");
    document.addEventListener("scroll", arrowVisible);
    arrowUp.addEventListener("click", arrowClick);
  }, []);

  const arrowVisible = () => {
    if (window.scrollY > homeHeight / 2) {
      arrowUp.classList.add("visible");
    } else {
      arrowUp.classList.remove("visible");
    }
  };

  const arrowClick = () => {
    home.scrollIntoView(true);
  };

  return (
    <>
      <Navigation ref={titleRef} />
      <MainBody
        gradient={mainBody.gradientColors}
        title={`{ ${mainBody.firstName}:${mainBody.lastName} }`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={titleRef}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
        />
      )}
      {skills.show && (
        <Skills heading={skills.heading} hardSkills={skills.hardSkills} />
      )}
      <Project />
      <Footer />
      <button className="arrow-up">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
