import React, { useRef, useEffect, useState } from 'react';
import { ImageList, ImageListItem, Box, Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Carousel } from 'react-carousel-minimal';


import img from '../images/wedding1/01.jpg'
import img1 from '../images/wedding1/02.jpg'
import img2 from '../images/wedding1/03.jpg'
import img3 from '../images/wedding1/04.jpg'
import img4 from '../images/wedding1/05.jpg'
import img5 from '../images/wedding1/06.jpg'


  const data = [
    {
      image: img,
      caption: "L&A",
      tag: 'w1'
    },
    {
        image: img1,
        caption: "V&O",
        tag: 'w2'
      },
      {
        image: img2,
        caption: "V&A",
        tag: 'w3'
      },
      {
        image: img3,
        caption: "A&V"
      },
      {
        image: img4,
        caption: "L&A"
      },
      {
        image: img5,
        caption: "L&A"
      },
  ];

  const captionStyle = {
    fontSize: "5em",
    fontWeight: "bold",
    opacity: "0.4"
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    opacity: '0.5'
  };


const Gallery = ({ name, setSelectedImg }) => {
  const [tag, setTag] = useState('w2')

  const containerRef = useRef(null);
  useEffect(() => {
    if(window && containerRef.current) {
      window.cloudinary.galleryWidget({
        container: containerRef.current,
        cloudName: 'dq9kynjaj',
        aspectRatio: '16:9',
        mediaAssets: [{ tag }],
        carouselStyle: 'indicators',
        cariuselLocation: 'bottom'
      })
      .render()
    }
  }, [tag]);


  return (
    <Container>
        <Box>
        <ImageList variant="masonry" cols={3} gap={8} p={20}>
            {data && data.map(item => (
                <ImageListItem key={item.caption} tag={item.tag} style={{position: "relative"}} onClick={() => setTag(item.tag)}>
                    <img
                        src={item.image}
                        alt={item.caption}
                        tag={item.tag}
                        loading="lazy"
                        onClick={() => setTag(item.tag)}
                    />
                    <Typography style={{
                        position: "absolute", 
                        top: "50%", 
                        left: "50%", 
                        transform: "translate(-50%, -50%)",
                        opacity: "0.3",
                        fontSize: "50px"
                        }}>{item.caption}</Typography>
                </ImageListItem>
            ))}
        </ImageList>


    {/* <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div> */}

          <div ref={containerRef} style={{ width: '1200px', margin: 'auto' }}></div>
    </Box>
    </Container>
    
  )
}

export default Gallery
