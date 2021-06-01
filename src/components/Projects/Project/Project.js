import React from "react";
import classes from "./Project.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const Project = (props) => {
  if (props.link === null) {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Container
          fluid
          className="my-3 py-3 px-3"
          style={{ border: "3px solid #2B4162" }}
        >
          {/* <div className={classes.Project}> */}
          <Col className="justify-content-center align-items-center">
            <Row className="justify-content-center align-items-center my-2">
              <p className="text-center h1 font-weight-bold">
                {props.projectTitle}
              </p>
            </Row>
            <Row className="justify-content-center align-items-center">
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

              <Col className="col-lg-6 col-12 justify-content-center align-items-center my-2 px-3">
                <Row className="col-12">
                  <p className={classes.date}>{props.date}</p>
                </Row>
                <Row className="col-12">
                  {" "}
                  <p className={classes.techText}>
                    Created using: <b>{props.tech.join(", ")}</b>
                  </p>
                </Row>
                <Row className="col-12">
                  <p className={classes.projectDescription}>
                    {props.projectDescription}
                  </p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </ScrollAnimation>
    );
  } else {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Container
          fluid
          className="my-3 py-3 px-3"
          style={{ border: "3px solid #2B4162" }}
        >
          {/* <div className={classes.Project}> */}
          <Col className="justify-content-center align-items-center">
            <Row className="justify-content-center align-items-center my-2">
              <p className="text-center h1 font-weight-bold">
                {props.projectTitle}
              </p>
            </Row>
            <Row className="justify-content-center align-items-center">
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

              <Col className="col-lg-6 col-12 justify-content-center align-items-center my-2 px-3">
                <Row className="col-12">
                  <p className={classes.date}>{props.date}</p>
                </Row>
                <Row className="col-12">
                  {" "}
                  <p className={classes.techText}>
                    Created using: <b>{props.tech.join(", ")}</b>
                  </p>
                </Row>
                <Row className="col-12">
                  <p className={classes.projectDescription}>
                    {props.projectDescription}
                  </p>
                </Row>
              </Col>
            </Row>
            <Row className="col-12 justify-content-center align-items-center my-3">
              <Col className="col-lg-4 col-2"></Col>
              <Col className="col-lg-4 col-8 justify-content-center align-items-center">
                <Button target="_blank" href={props.link} block size="lg">
                  Click here to view the Project!
                </Button>
              </Col>
              <Col className="col-lg-4 col-2"></Col>
            </Row>
          </Col>
        </Container>
      </ScrollAnimation>
    );
  }
};

export default Project;
