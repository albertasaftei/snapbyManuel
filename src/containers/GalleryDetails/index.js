import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { storage } from "../../base";
import { Image, Wrapper } from "./styles";

function GalleryDetails() {
  let location = useLocation();
  const { gallery } = location.state;
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    function getGalleryImages() {
      const landingPageRef = ref(storage, `${gallery}/`);

      listAll(landingPageRef)
        .then((res) => {
          Promise.all(res.items.map((item) => getDownloadURL(item))).then(
            (images) => setGalleryImages(images)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
    !galleryImages.length && getGalleryImages();
  }, []);

  return (
    <Wrapper>
      <Container fluid>
        <Row md={2} lg={3} xs={1} className=" gx-1" style={{ height: "100vh" }}>
          {galleryImages.map((image, index) => (
            <Col key={index} className="my-1">
              <Image src={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default GalleryDetails;
