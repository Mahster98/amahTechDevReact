import React from 'react';
import './App.css';
import Person from './Person/Person';
import Project from './Project/Project';

function App() {
  return (
    <div className="App">
      <Person />
      <Project 
      projectTitle = "My Project" tech = "React" projectDescription = "Description Here"
      />

    </div>
  );
}

export default App;
