import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FoodPictures = (props) => {
  console.log(props);
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        className="col-12"
      >
        <Container
          fluid
          className="col-12 my-3 py-3 px-3"
          style={{ border: "3px solid #2B4162" }}
        >
          <Col className="justify-content-center align-items-center">
            <Row className="justify-content-center align-items-center my-2">
              <p className="text-center h1 font-weight-bold">Cooking!</p>
            </Row>
            <Row className="col-12 justify-content-center align-items-center">
              <p className="text-center h5">
                I can't say that whether I like to cook or if I just like to eat
                instead, but it's always a pleasure seeing how my dishes turned
                out!
              </p>
            </Row>
          </Col>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className="my-3"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3,
              },
              tablet: {
                breakpoint: { max: 1024, min: 576 },
                items: 1,
                slidesToSlide: 1,
              },
              mobile: {
                breakpoint: { max: 576, min: 0 },
                items: 1,
                slidesToSlide: 1,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {props.data.map((food) => (
              <OverlayTrigger
                placement="auto"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Title as="h3">{food.name}</Popover.Title>
                    <Popover.Content>{food.notes}</Popover.Content>
                  </Popover>
                }
              >
                <Container className="mx-3">
                  <Image src={food.image} fluid />
                </Container>
              </OverlayTrigger>
            ))}
          </Carousel>
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default FoodPictures;
