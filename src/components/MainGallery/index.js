import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "./styles";

const rowCommonStyle = "my-1 gx-1";
const colCommonStyle = "text-center";

function MainGallery({ images }) {
  return (
    <Container fluid className="p-1">
      <Row className={rowCommonStyle} style={{ height: "100vh" }}>
        {images.map((image, index) => (
          <Col key={index} className={`${colCommonStyle}`}>
            <Image src={image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainGallery;
