import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Modal from "./components/Modal";
import Gallery from './components/Gallery';


function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home open={open} handleOpen={handleOpen}/>}>
            <Route path="gallery" element={<Gallery/>}/>
          </Route>
        </Routes>
        <Modal open={open} onClose={() => setOpen(false)}/>
    </BrowserRouter>
    
  );
}

export default App;