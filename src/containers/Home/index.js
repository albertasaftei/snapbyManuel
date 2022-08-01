import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "../../components/Landing";
import MainGallery from "../../components/MainGallery";
import About from "../../components/About";
import Footer from "../../components/Footer";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../base";

const homeVarants = {
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Home() {
  const [landingPageImages, setLandingPageImages] = useState([]);

  useEffect(() => {
    function getLandingImagesFromStorage() {
      const landingPageRef = ref(storage, "Landing/");

      listAll(landingPageRef)
        .then((res) => {
          Promise.all(res.items.map((item) => getDownloadURL(item))).then(
            (images) => setLandingPageImages(images)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getLandingImagesFromStorage();
  }, []);

  return (
    <motion.div variants={homeVarants} exit={"exit"}>
      <Landing />
      <MainGallery images={landingPageImages} />
      <About />
      <Footer />
    </motion.div>
  );
}

export default Home;
