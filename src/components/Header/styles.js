import styled from "styled-components";
import { motion } from "framer-motion";
import { HEADER_HEIGHT } from "../../utils";

export const HeaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ffcc00;
  height: ${HEADER_HEIGHT};
  z-index: 10;
`;

export const LogoContainer = styled.div`
  height: 100%;
  padding: 0 5%;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  padding: 0 5%;
`;

export const Option = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:last-of-type) {
    padding-right: 30px;
  }
`;
