import React, { useRef, useEffect, useState } from 'react';
import { ImageList, ImageListItem, Box, Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import "react-image-gallery/styles/css/image-gallery.css";
import img from '../images/wedding1/01.jpg'
import img1 from '../images/wedding1/02.jpg'
import img2 from '../images/wedding1/03.jpg'
import img3 from '../images/wedding1/04.jpg'
import img4 from '../images/wedding1/05.jpg'
import img5 from '../images/wedding1/06.jpg'

import mod1 from '../images/portrait/mod1.jpg';
import mod2 from '../images/portrait/mod2.jpg';
import mod3 from '../images/portrait/mod3.jpg';

  // const captionStyle = {
  //   fontSize: "5em",
  //   fontWeight: "bold",
  //   opacity: "0.4"
  // };
  // const slideNumberStyle = {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  //   opacity: '0.5'
  // };
 
  const data = [
    {
      id: 1,
      image: img,
      caption: "S&A",
      tag: 'w1'
    },
    {
        id: 2,
        image: img1,
        caption: "L&A",
        tag: 'w2'
      },
      {
        id: 3,
        image: img2,
        caption: "O&Z",
        tag: 'w3'
      },
      {
        id: 4,
        image: img3,
        caption: "T&A",
        tag: 'w4'
      },
      {
        id: 5,
        image: img4,
        caption: "L&R",
        tag: 'w5'
      },
      {
        id: 6,
        image: img5,
        caption: "O&V",
        tag: 'w6'
      },
  ];

  const portraitData = [
    {
      id: 1,
      image: mod1,
      caption: "Olena",
      tag: 'k'
    },
    {
      id: 2,
      image: mod2,
      caption: "Anna",
      tag: 'l'
    },
    {
      id: 3,
      image: mod3,
      caption: "Anastasia",
      tag: 'c'
    },
  ]

  const familyData = [
    {
      id: 1,
      image: img,
      caption: "Zolotonosha",
      tag: 'Olena'
    },
    {
      id: 2,
      image: img,
      caption: "Oblast",
      tag: 'Anna'
    },
    {
      id: 3,
      image: img,
      caption: "Cherkasy",
      tag: 'Anastasia'
    },
  ]

const Gallery = ({ mark }) => {
  const [tag, setTag] = useState("num1");
  console.log(mark)
  const containerRef = useRef(null);

  const executeScroll = () => containerRef.current.scrollIntoView()

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

  // return (
  //   <Box>
  //     <Container>
  //       { 
        if (mark === "Wedding") {
          return (
              <Container style={{  marginTop: "20px" }}>
                <ImageList variant="masonry" cols={3} gap={8} px={20}>
                {data.map(item => (
                  <ImageListItem key={item.id} tag={item.tag} style={{position: "relative", borderRadius: "5px"}} onClick={() => {
                    setTag(item.tag);
                    console.log(tag)
                    }}>
                      <img
                          src={item.image}
                          alt={item.caption}
                          tag={item.tag}
                          loading="lazy"
                          onClick={() => { 
                            setTag(item.tag);
                            executeScroll();
                          }}
                          style={{borderRadius: 15}}
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
                <div ref={containerRef} style={{ width: '1200px', marginTop: '20px',  }}></div>
            </Container>
          ) }
          if (mark === "Portrait") {
            return (
              <Container style={{  marginTop: "20px" }}>
                <ImageList variant="masonry" cols={3} gap={8} px={20}>
                        {portraitData && portraitData.map(item => (
                            <ImageListItem key={item.caption} tag={item.tag} style={{position: "relative", borderRadius: "5px"}} onClick={() => setTag(item.tag)}>
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    tag={item.tag}
                                    loading="lazy"
                                    onClick={() => { 
                                      setTag(item.tag);
                                      executeScroll();
                                    }}
                                    style={{borderRadius: 15}}
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
                <div ref={containerRef} style={{ width: '1200px', marginTop: '20px',  }}></div>
              </Container>   
            )
          } if (mark === "Family") {
            return (
              <Container style={{  marginTop: "20px" }}>
                <ImageList variant="masonry" cols={3} gap={8} px={20}>
                {familyData && familyData.map(item => (
                    <ImageListItem key={item.caption} tag={item.tag} style={{position: "relative"}} onClick={() => setTag(item.tag)}>
                        <img
                            src={item.image}
                            alt={item.caption}
                            tag={item.tag}
                            loading="lazy"
                            onClick={() => { 
                              setTag(item.tag);
                              executeScroll();
                            }}
                            style={{borderRadius: 15}}
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
                <div ref={containerRef} style={{ width: '1200px', marginTop: '20px',  }}></div>
            </Container>  
            )
          }       
}

export default Gallery
