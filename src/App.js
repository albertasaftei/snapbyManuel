import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { app } from "./base";
import Header from "./components/Header";
import Home from "./containers/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./containers/Portfolio";

function App() {
  const location = useLocation();
  // const [fileUrl, setFileUrl] = useState()
  // const onChange = async (e) => {
  //   const file = e.target.files[0]
  //   const storageRef = app.storage().ref()
  //   const fileRef = storageRef.child(file.name)
  //   try{
  //     await fileRef.put(file)
  //     setFileUrl(await fileRef.getDownloadURL())
  //     console.log(fileUrl);
  //   }catch(e) {
  //     console.error(e);
  //   }
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
      {/* <form onSubmit={onSubmit}>
      <input type={'file'} onChange={onChange}/>
      <button>Submit</button>
    </form> 
    {fileUrl && (<img width='100' height='100' src={fileUrl} alt='img' />)} */}
    </>
  );
}

export default App;
