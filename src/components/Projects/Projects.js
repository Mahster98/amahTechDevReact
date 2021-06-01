import React from "react";
import { Container } from "react-bootstrap";
import ProjectInfo from "../../data/content/ProjectContent.js";
import Project from "./Project/Project";

const Projects = () =>
  ProjectInfo.map((project) => {
    return (
      <>
        <Container fluid>
          <Project
            projectTitle={project.projectTitle}
            date={project.date}
            tech={project.tech}
            projectDescription={project.projectDescription}
            img={project.image}
            link={project.link}
          />
        </Container>
      </>
    );
  });

export default Projects;
