import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';


const SharedLayout = ({ open, handleOpen, mark }) => {
  return (
    <div style={{position: "relative"}}>
      <Header open={open} handleOpen={handleOpen}/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default SharedLayout
