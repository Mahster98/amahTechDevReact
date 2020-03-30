import React from 'react';
import classes from "./App.module.css"
import AboutMe from './AboutMe/AboutMe';
import Project from './Project/Project';
import ProjectInfo from './data/content/ProjectContent.js'
import AboutMeContent from './data/content/AboutMeContent.js'

function App() {
  return (
    <div className="App">
      <div className={classes.aboutMe}>
        <AboutMe 
        bio={AboutMeContent[0].bio}
        image={AboutMeContent[0].image}
        linkedin={AboutMeContent[0].linkedin}
        github={AboutMeContent[0].github}
        resume={AboutMeContent[0].resume}
        />
      </div>

      <div className= {classes.projectDiv}>
      <Project 
      projectTitle = {ProjectInfo[0].projectTitle} 
      tech = {ProjectInfo[0].tech} 
      projectDescription = {ProjectInfo[0].projectDescription}
      img = {ProjectInfo[0].image}
      />
      </div>

    </div>
  );
}

export default App;
