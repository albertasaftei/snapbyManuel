import styled from "styled-components";
import { motion } from "framer-motion";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./../../utils";

export const Wrapper = styled(motion.div)`
  margin-top: ${HEADER_HEIGHT};
  margin-bottom: -${FOOTER_HEIGHT};
  height: calc(100vh - ${HEADER_HEIGHT});
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Gallery = styled.div``;
export const GalleryTitle = styled.div`
  text-transform: capitalize;
  margin-top: 20px;
  font-size: 1.5rem;
`;
export const Image = styled.div`
  height: 300px;
  background-color: black;
`;
