import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import Container from '@material-ui/core/Container'
import { Outlet } from 'react-router-dom';


const SharedLayout = ({ open, handleOpen, mark }) => {
  return (
    <div>
      <Header open={open} handleOpen={handleOpen}/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default SharedLayout
