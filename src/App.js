import React from 'react';
import classes from "./App.module.css"
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Experience from "./components/Experience/Experience"


function App() {
  return (
    <div className="App">
      <div className={classes.aboutMe}>
      <h1 className={classes.title}>About Me</h1>
        <AboutMe />
      </div>

      <div className= {classes.projectDiv}>
        <h1 className= {classes.title}> My Projects </h1>
      <Projects />
      </div>

      <div className= {classes.experienceDiv}>
        <h1 className= {classes.title}> Experience </h1>
      <Experience />
      </div>

    </div>
  );
}

export default App;
