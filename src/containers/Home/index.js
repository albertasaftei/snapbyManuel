import React from "react";
import { motion } from "framer-motion";
import Landing from "../../components/Landing";
import MainGallery from "../../components/MainGallery";
import About from "../../components/About";
import Footer from "../../components/Footer";

const homeVarants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Home() {
  return (
    <motion.div variants={homeVarants} exit={"exit"}>
      <Landing />
      <MainGallery />
      <About />
      <Footer />
    </motion.div>
  );
}

export default Home;
