import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "../../components/Landing";
import MainGallery from "../../components/MainGallery";
import About from "../../components/About";
import Footer from "../../components/Footer";
import { getImagesFromFirebase } from "../../utils";
import { homeVariants } from "./constants";

function Home() {
  const [landingPageImages, setLandingPageImages] = useState([]);
  const localStorageImages = JSON.parse(localStorage.getItem("homeImages"));

  useEffect(() => {
    //set images from local storage if available
    localStorageImages.length && setLandingPageImages(localStorageImages);

    //get images from Firebase if not available in local storage
    !localStorageImages.length &&
      getImagesFromFirebase({
        path: "Landing/",
        setImages: setLandingPageImages,
      });

    //set Firebase images to local storage
    landingPageImages.length &&
      localStorage.setItem("homeImages", JSON.stringify(landingPageImages));
  }, []);

  return (
    <motion.div variants={homeVariants} exit={"exit"}>
      <Landing />
      <MainGallery images={landingPageImages} />
      <About />
      <Footer />
    </motion.div>
  );
}

export default Home;
