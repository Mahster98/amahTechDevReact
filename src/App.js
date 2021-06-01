import React from "react";
import classes from "./App.module.css";
import Landing from "./components/Landing/Landing";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Hobbies from "./components/Hobbies/Hobbies";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <div className={classes.landing}>
        <Landing />
      </div>

      <div className={classes.aboutMe} name="About-Me">
        <ScrollAnimation offset={100} animateIn="fadeIn" animateOut="fadeOut">
          <h1 className={classes.title}>About Me</h1>
        </ScrollAnimation>
        <AboutMe />
      </div>
      <div className={classes.projectDiv} id="Projects">
        <ScrollAnimation offset={100} animateIn="fadeIn" animateOut="fadeOut">
          <h1 className={classes.title}> My Projects </h1>
        </ScrollAnimation>
        <Projects />
      </div>

      <div className={classes.experienceDiv} id="Experience">
        <ScrollAnimation offset={100} animateIn="fadeIn" animateOut="fadeOut">
          <h1 className={classes.title}> Experience </h1>
        </ScrollAnimation>
        <Experience />
      </div>

      <div className={classes.hobbiesDiv} id="Hobbies">
        <ScrollAnimation offset={100} animateIn="fadeIn" animateOut="fadeOut">
          <h1 className={classes.title}> Hobbies </h1>
        </ScrollAnimation>
        <Hobbies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
