import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getImagesFromFirebase } from "../../utils";
import { galleryDetailsVariants } from "./constants";
import { Image, Wrapper } from "./styles";

const GalleryDetails = () => {
  const location = useLocation();
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    !galleryImages.length &&
      getImagesFromFirebase({
        path: `${location?.state?.gallery}/`,
        setImages: setGalleryImages,
      });
  }, []);

  return (
    <Wrapper
      variants={galleryDetailsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container fluid>
        <Row md={2} lg={3} xs={1} className=" gx-1" style={{ height: "100vh" }}>
          {galleryImages.map((image, index) => (
            <Col key={index} className="my-1">
              <Image loading="lazy" src={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default GalleryDetails;
