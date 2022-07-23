import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "./styles";

const rowCommonStyle = "my-1 gx-1";
const colCommonStyle = "text-center";

function MainGallery() {
  return (
    <Container fluid className="p-1">
      <Row className={rowCommonStyle} style={{ height: "100vh" }}>
        <Col className={`${colCommonStyle} col-5`}>
          <Image src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Col>
        <Col className={colCommonStyle}>
          <Image src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Col>
      </Row>
      <Row className={rowCommonStyle} style={{ height: "100vh" }}>
        <Col className={`${colCommonStyle} col-8`}>
          <Image src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Col>
        <Col className={colCommonStyle}>
          <Image src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Col>
      </Row>
    </Container>
  );
}

export default MainGallery;
