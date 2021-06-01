import React from "react";
import { Container } from "react-bootstrap";
import ExperienceInfo from "../../data/content/ExperienceContent.js";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () =>
  ExperienceInfo.map((experience) => {
    return (
      <>
        <Container fluid>
          <ExperienceItem
            experienceTitle={experience.experienceTitle}
            experienceDescription={experience.experienceDescription}
            date={experience.date}
            img={experience.image}
          />
        </Container>
      </>
    );
  });

export default Experience;
