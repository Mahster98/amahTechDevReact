import React from "react";
import classes from "./ExperienceItem.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, Row, Col, Image } from "react-bootstrap";

const ExperienceItem = (props) => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Container
        fluid
        className="my-3 py-3 px-3"
        style={{ border: "3px solid #2B4162" }}
      >
        <Col className="justify-content-center align-items-center">
          <Row className="justify-content-center align-items-center my-2">
            <p className="text-center h1 font-weight-bold">
              {props.experienceTitle}
            </p>
          </Row>
          <Row className="justify-content-center align-items-center flex-column-reverse flex-lg-row">
            <Col className="col-lg-6 col-12 justify-content-center align-items-center my-2 px-3">
              <Row className="col-12">
                <p className={classes.date}>{props.date.join(" to ")}</p>
              </Row>
              <Row className="col-12">
                <p className="text-left">{props.experienceDescription}</p>
              </Row>
            </Col>
            <Col className="col-lg-6 col-12 my-2">
              <Row className="col-12 justify-content-center align-items-center">
                <Image
                  className="col-12"
                  src={props.img}
                  alt="ProjectPicture"
                  fluid
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </ScrollAnimation>
  );
};

export default ExperienceItem;
