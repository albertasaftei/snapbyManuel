import { motion } from "framer-motion";
import styled from "styled-components";
import background from "../../../src/icons/background.jpg";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  background-image: url(${background});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-left: 5%;
`;

export const Title = styled.span`
  font-size: 10rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;
