import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Modal from "./components/Modal";
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import SharedLayout from './components/SharedLayout';
import { gapi } from 'gapi-script';
import About from './components/About';

const clientId = process.env.CLIENT_ID;

function App() {

  const localMark = localStorage.getItem("mark");
  const [open, setOpen] = useState(false);
  const [mark, setMark] = useState(localMark ? localMark : "");
  const [selectedImg, setSelectedImg] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const grantAccess = () => {
    setLoggedIn(true)
  }

  const denyAccess = () => {
    setLoggedIn(false)
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })

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
            <Route index element={<Home handleMark={handleMark}/>}/>
            <Route path="gallery" element={<Gallery setSelectedImg={setSelectedImg} mark={mark}/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="about" element={<About/>}/>
            {/* </Route> */}
          </Route>
        </Routes>
        <Modal open={open} onClose={() => setOpen(false)} mark={mark} loggedIn={loggedIn} grantAccess={grantAccess} denyAccess={denyAccess}/>
      
    </BrowserRouter>
    
  );
}

export default App;