import styled from "styled-components";
import { motion } from "framer-motion";
import { HEADER_HEIGHT } from "./../../utils";

export const Wrapper = styled(motion.div)`
  margin-top: ${HEADER_HEIGHT};
  height: calc(100vh - ${HEADER_HEIGHT});
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white !important;
  }

  @media (max-width: 576px) {
    margin-top: calc(${HEADER_HEIGHT} + 50px);
  }
`;

export const Gallery = styled.div``;
export const GalleryTitle = styled.div`
  text-transform: capitalize;
  margin: 20px 0;
  font-size: 1.5rem;
`;
export const Image = styled.div`
  height: 300px;
  background-color: black;
`;
