import React from "react";
//import classes from "./AboutMe.module.css";
import gitPic from "../../data/img/GitHub-Mark.jpg";
import linkedinPic from "../../data/img/linkedin-logo-icon-3.jpg";
import AboutMeContent from "../../data/content/AboutMeContent.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import resume from "../../data/content/Alexander_Mah_Resume.pdf";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Col className="text-center justify-content-center align-items-center">
        <Row className="text-center justify-content-center align-items-center flex-column-reverse flex-lg-row my-3">
          <Col className="col-lg-6 col-10 justify-content-center my-1">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p className="h5 text-left" style={{ "line-height": 30 }}>
                {AboutMeContent[0].bio}
              </p>
            </ScrollAnimation>
          </Col>
          <Col className="col-lg-6 col-10 justify-content-center align-items-center my-3">
            <Row>
              <Col className="col-2"></Col>
              <ScrollAnimation
                className="col-8 justify-content-center align-items-center"
                animateIn="fadeIn"
                animateOut="fadeOut"
              >
                <Image src={AboutMeContent[0].image} alt="Alex Mah" fluid />
              </ScrollAnimation>
              <Col className="col-2"></Col>
            </Row>
          </Col>
        </Row>
        <Row className="col-12 justify-content-center align-items-center">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p className="h2">
              <b>Want to know more?</b>
            </p>
          </ScrollAnimation>
        </Row>
        <Row className="col-12 justify-content-center align-items-center my-3">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Row className="col-12 justify-content-between align-items-center">
              <Col className="col-4">
                <Row>
                  <Col className="col-2"></Col>
                  <a
                    className="col-12 col-lg-8"
                    href={AboutMeContent[0].linkedin}
                  >
                    <Image src={linkedinPic} alt="Link" fluid />
                  </a>
                  <Col className="col-2"></Col>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <Col className="col-lg-2"></Col>
                  <a
                    className="col-12 col-lg-8"
                    href={AboutMeContent[0].github}
                  >
                    <Image src={gitPic} alt="Link" fluid />
                  </a>
                  <Col className="col-2"></Col>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <Col className="col-2"></Col>
                  <a className="col-12 col-lg-8" href={resume} download>
                    <Button variant="primary" size="lg" block>
                      Resume
                    </Button>
                  </a>
                  <Col className="col-2"></Col>
                </Row>
              </Col>
            </Row>
          </ScrollAnimation>
        </Row>
      </Col>
    </Container>
  );

  // return (
  // <div className={classes.AboutMe}>
  // <div className={classes.contentFlex}>
  // <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  // <p className={classes.bio}>{AboutMeContent[0].bio}</p>
  // </ScrollAnimation>
  // <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  // <img className={classes.profilePic} src={AboutMeContent[0].image} alt="Alex Mah"/>
  // </ScrollAnimation>
  // </div>

  // <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  // <p className={classes.subtitle}><b>Want to know more?</b></p>
  // </ScrollAnimation>
  // <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  // <div className={classes.moreMe}>
  // <a href={AboutMeContent[0].linkedin} className={classes.profileLink}><img className={classes.linkPic} src={linkedinPic} alt="Link"/></a>
  // <a href={AboutMeContent[0].github} className={classes.profileLink}><img className={classes.linkPic} src={gitPic} alt="Link"/></a>
  // <a href={resume} download ><Button variant='primary' size="lg" className={classes.resumeButton}>Resume</Button></a>
  // </div>
  // </ScrollAnimation>

  // </div>
  // );
};

export default AboutMe;
