import React from 'react'
import ProjectInfo from '../../data/content/ProjectContent.js'
import Project from './Project/Project'


const Projects = () => (

ProjectInfo.map( (project) => {
    
    return <Project 
    projectTitle = {project.projectTitle}
    date = {project.date} 
    tech = {project.tech} 
    projectDescription = {project.projectDescription}
    img = {project.image}
    />
})

);

export default Projects;