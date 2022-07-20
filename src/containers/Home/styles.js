import styled from "styled-components";
import background from "../../../src/icons/background.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #111111;
  background-image: url(${background});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const TitleContainer = styled.div`
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
  word-spacing: -35px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  background-color: #111111;
  width: 100%;
  height: 100vh;
  opacity: 0.7;
`;
