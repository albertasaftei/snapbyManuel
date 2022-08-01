import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./containers/Portfolio";
import GalleryDetails from "./containers/GalleryDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/galleryDetails" element={<GalleryDetails />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
