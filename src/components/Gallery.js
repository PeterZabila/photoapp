import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import img from '../images/wedding1/01.jpg'

const images = [
    {
        id: uuidv4(),
        image: '../images/wedding1/06.jpg'
    },
    {
        id: uuidv4(),
        image: '../images/wedding1/01.jpg'
    },
    {
        id: uuidv4(),
        image: '../images/wedding1/02.jpg'
    },
    {
        id: uuidv4(),
        image: '../images/wedding1/03.jpg'
    },
    {
        id: uuidv4(),
        image: '../images/wedding1/04.jpg'
    },
    {
        id: uuidv4(),
        image: '../images/wedding1/05.jpg'
    },
]

const Gallery = () => {
  return (

    <ImageList variant="masonry" cols={3} gap={8}>
        <img src={img} />
        {images.map((item) => (
            <ImageListItem key={item.id}>
            <img
                src={item.image}
                alt={item.id}
                loading="lazy"
            />
            </ImageListItem>
        ))}
    </ImageList>
  )
}

export default Gallery
