import React, { useEffect, useState } from "react";
import { Wrapper, Gallery, Image, GalleryTitle } from "./styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirstImageFromFolder, getFoldersFromFirebase } from "../../utils";
import { portfolioVariants } from "./constants";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../base";

function Portfolio() {
  const [show, setShow] = useState(false);
  const [folders, setFolders] = useState([]);
  const [firstImage, setFirstImage] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getImages = (folder) => {
    const pageRef = ref(storage, `${folder}/`);
    const state = [...firstImage];
    listAll(pageRef).then((res) => {
      Promise.resolve(getDownloadURL(res.items[0])).then((image) => {
        const result = [...state, image];
        console.log(result);
        setFirstImage(result);
      });
    });
  };

  useEffect(() => {
    !folders.length && getFoldersFromFirebase({ setFolders });
    if (folders.length) {
      folders.forEach((folder) => {
        getImages(folder);
      });
    }
  }, [folders]);

  return (
    <Wrapper
      variants={portfolioVariants}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
    >
      <Container fluid>
        <Row lg={3} md={2} xs={1}>
          {folders.length &&
            folders.map((folderName) => {
              if (folderName !== "Landing")
                return (
                  <Col>
                    <Link to="/galleryDetails" state={{ gallery: folderName }}>
                      <Gallery>
                        <Image src={firstImage} />
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
