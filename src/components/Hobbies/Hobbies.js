import React from "react";
import { Container } from "react-bootstrap";
import FoodPictureInfo from "../../data/content/FoodPicturesContent.js";
import FoodPictures from "./FoodPictures/FoodPictures";

const Hobbies = () => {
  return (
    <>
      <Container fluid>
        <FoodPictures className="col-12" data={FoodPictureInfo} />
      </Container>
    </>
  );
};

export default Hobbies;
