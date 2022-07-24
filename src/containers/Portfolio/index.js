import React from "react";
import { Wrapper, Gallery, Image, GalleryTitle } from "./styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const portfolioVarants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Portfolio() {
  return (
    <Wrapper
      variants={portfolioVarants}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
    >
      <Container fluid>
        <Row md={2} lg={3} xs={1}>
          <Col>
            <Gallery>
              <Image></Image>
              <GalleryTitle>Gallery #1</GalleryTitle>
            </Gallery>
          </Col>
          <Col>
            <Gallery>
              <Image></Image>
              <GalleryTitle>Gallery #2</GalleryTitle>
            </Gallery>
          </Col>
          <Col>
            <Gallery>
              <Image></Image>
              <GalleryTitle>Gallery #3</GalleryTitle>
            </Gallery>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Portfolio;
