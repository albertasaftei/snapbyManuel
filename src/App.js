import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { app } from "./base";
import Header from "./components/Header";
import Home from "./containers/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
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
