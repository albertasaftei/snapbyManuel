import { motion } from "framer-motion";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../utils";

export const Wrapper = styled(motion.div)`
  margin-top: ${HEADER_HEIGHT};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
