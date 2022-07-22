import React from "react";
import { motion } from "framer-motion";
import { Wrapper, TitleContainer, Title } from "./styles";

const wrapperVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

function Home() {
  return (
    <motion.div initial={"hidden"} animate={"visible"}>
      <Wrapper variants={wrapperVariants}>
        <TitleContainer variants={textVariants}>
          <Title>Snap by</Title>
          <Title>Manuel</Title>
        </TitleContainer>
      </Wrapper>
    </motion.div>
  );
}

export default Home;
