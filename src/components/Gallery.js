import React, { useRef, useEffect } from 'react';
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

// const pics = [
//     {
//       original: img,
//       thumbnail: img
//     },
//     {
//         original: img1,
//         thumbnail: img1
//       },
//       {
//         original: img2,
//         thumbnail: img2
//       },
//       {
//         original: img3,
//         thumbnail: img3
//       },
//       {
//         original: img4,
//         thumbnail: img4
//       },
//       {
//         original: img5,
//         thumbnail: img5
//       },
//   ];

  const data = [
    {
      image: img,
      caption: "L&A"
    },
    {
        image: img1,
        caption: "V&O"
      },
      {
        image: img2,
        caption: "V&A"
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

// const images = [
//     {
//         id: uuidv4(),
//         loc: img,
//         name: "L&A"
//     },
//     {
//         id: uuidv4(),
//         loc: img1,
//         name: "V&O"
//     },
//     {
//         id: uuidv4(),
//         loc: img2,
//         name: "V&A"
//     },
//     {
//         id: uuidv4(),
//         loc: img3,
//         name: "A&V"
//     },
//     {
//         id: uuidv4(),
//         loc: img4,
//         name: "L&A"
//     },
//     {
//         id: uuidv4(),
//         loc: img5,
//         name: "L&A"
//     },
// ]

const Gallery = ({ name, setSelectedImg }) => {

  const containerRef = useRef(null);
  useEffect(() => {
    if(window && containerRef.current) {
      window.cloudinary.galleryWidget({
        container: containerRef.current,
        cloudName: 'dq9kynjaj',
        aspectRatio: '16:9',
        mediaAssets: [{ tag: 'w1' }],
        carouselStyle: 'indicators',
        cariuselLocation: 'bottom'
      })
      .render()
    }
  }, []);


  return (
    <Container>
        <Box>
        {/* <ImageList variant="masonry" cols={3} gap={8}>
            {images && images.map(item => (
                <ImageListItem key={item.id} style={{position: "relative"}}>
                    <img
                        src={item.loc}
                        alt={item.id}
                        loading="lazy"
                    />
                    <Typography style={{
                        position: "absolute", 
                        top: "50%", 
                        left: "50%", 
                        transform: "translate(-50%, -50%)",
                        opacity: "0.3",
                        fontSize: "50px"
                        }}>{item.name}</Typography>
                </ImageListItem>
            ))}
        </ImageList>

        <ImageGallery
            items={pics}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={1000}
            slideOnThumbnailOver={true}
            showIndex={true}
            onPlay={() => {
           
        }} */}
      {/* /> */}

    <div
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
        </div>

          <div ref={containerRef} style={{ width: '1200px', margin: 'auto' }}></div>
    </Box>
    </Container>
    
  )
}

export default Gallery
