import React, { useEffect, useState } from "react";
import { Wrapper, Gallery, Image, GalleryTitle } from "./styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listAll } from "firebase/storage";
import { rootRef } from "../../base";

const portfolioVariants = {
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
  const [show, setShow] = useState(false);
  const [folders, setFolders] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    listAll(rootRef)
      .then((res) => {
        Promise.all(res.prefixes.map((folder) => folder.name)).then(
          (folderName) => setFolders(folderName)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper
      variants={portfolioVariants}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
    >
      <Container fluid>
        <Row lg={3} md={2} xs={1}>
          {folders.map((folderName) => {
            if (folderName !== "Landing")
              return (
                <Col>
                  <Link to="/galleryDetails" state={{ gallery: folderName }}>
                    <Gallery>
                      <Image></Image>
                      <GalleryTitle>{folderName}</GalleryTitle>
                    </Gallery>
                  </Link>
                </Col>
              );
          })}
        </Row>
      </Container>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal centered show={show} fullscreen onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Wrapper>
  );
}

export default Portfolio;
