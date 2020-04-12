import React from 'react';
import classes from "./App.module.css"
import Landing from "./components/Landing/Landing"
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Experience from "./components/Experience/Experience"
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

function App() {
  return (
    <div className={classes.App}>
      
    <div className={classes.landing}>
      <Landing />
    </div>

      <div className={classes.aboutMe}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <h1 className={classes.title}>About Me</h1>
      </ScrollAnimation>
        <AboutMe />
      </div>

      <div className= {classes.projectDiv}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h1 className= {classes.title}> My Projects </h1>
        </ScrollAnimation>
      <Projects />
      </div>

      <div className= {classes.experienceDiv}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h1 className= {classes.title}> Experience </h1>
        </ScrollAnimation>
      <Experience />
      </div>

    </div>
  );
}

export default App;
