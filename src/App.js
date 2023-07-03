import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Modal from "./components/Modal";
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import SharedLayout from './components/SharedLayout';


function App() {

  const [open, setOpen] = useState(false);
  const [mark, setMark] = useState("");

  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (mark) => {
    setMark(mark)
    setOpen(true)
  }

  const handleMark = (item) => {
    setMark(item)
  }

  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<SharedLayout open={open} handleOpen={handleOpen} mark={mark} />}>
            <Route index element={<Home />}/>
            <Route path="gallery" element={<Gallery setSelectedImg={setSelectedImg}/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            {/* </Route> */}
          </Route>
        </Routes>
        <Modal open={open} onClose={() => setOpen(false)} mark={mark}/>
      
    </BrowserRouter>
    
  );
}

export default App;