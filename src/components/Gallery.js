import React from 'react';
import { ImageList, ImageListItem, Box } from '@material-ui/core';
import Container from '@mui/material/Container';
import { v4 as uuidv4 } from 'uuid';
import img from '../images/wedding1/01.jpg'
import img1 from '../images/wedding1/02.jpg'
import img2 from '../images/wedding1/03.jpg'
import img3 from '../images/wedding1/04.jpg'
import img4 from '../images/wedding1/05.jpg'
import img5 from '../images/wedding1/06.jpg'

const images = [
    {
        id: uuidv4(),
        loc: img
    },
    {
        id: uuidv4(),
        loc: img1
    },
    {
        id: uuidv4(),
        loc: img2
    },
    {
        id: uuidv4(),
        loc: img3
    },
    {
        id: uuidv4(),
        loc: img4
    },
    {
        id: uuidv4(),
        loc: img5
    },
]

const Gallery = ({ name }) => {
  return (
    <Container>
        <Box>
        <ImageList variant="masonry" cols={3} gap={8}>
            {images.map(item => (
                <ImageListItem key={item.id}>
                    <img
                        src={item.loc}
                        alt={item.id}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </Box>
    </Container>
    
  )
}

export default Gallery
