import React from 'react';
import classes from "./App.module.css"
import Person from './Person/Person';
import Project from './Project/Project';
import ProjectInfo from './data/content/ProjectContent.js'

function App() {
  return (
    <div className="App">
      <div className={classes.aboutMe}>
        <Person/>
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
