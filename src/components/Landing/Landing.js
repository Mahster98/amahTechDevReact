import React from "react";
import classes from "./Landing.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import name from "../../data/img/LandingName.png";
import { Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => {
  return (
    <div className={classes.Landing} id="Home">
      <Container>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Row className="flex-lg-row flex-column text-center justify-content-center align-items-center">
            <Col className="col-lg-1 col-12" />
            <Col>
              <Image className="col-lg-10 col-12" src={name} fluid />
            </Col>
            <Col className="col-lg-1 col-12" />
          </Row>

          {/* <h1 className={classes.intro}>Hello! I'm</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h2 className={classes.name}>Alexander Mah</h2> */}
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Landing;
