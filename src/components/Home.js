import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import pic10 from '../images/wedding1/10.jpg';
import pic11 from '../images/wedding1/13.jpeg';
import pic12 from '../images/wedding1/15.jpeg';

const cards = [
  {
    id: 1,
    name: "Wedding",
    src: pic10,
    description: "Найщасливіщий день у вашому житті обов'язково має бути на фото. Дозвольте супроволдувати вас у цей день",

  },
  {
    id: 2,
    name: "Portrait",
    src: pic12,
    description: "Пор",

  },
  {
    id: 3,
    name: "Family",
    src: pic11,
    description: "",

  }
];

const defaultTheme = createTheme();

const Home = ({open, handleOpen, handleMark}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {/* <Header open={open} handleOpen={handleOpen}/> */}
          <main>
            <Box
              sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  My photography portfolio
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Something to say about me. My passion to photography and the process of making photos makes me to go on and develop my skills in this field.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained">Book a wedding</Button>
                  <Button variant="outlined">Write me</Button>
                </Stack>
              </Container>
            </Box>

            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="div" sx={{ pt: '56.25%' }}
                        image={card.src}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Link to="/gallery" >
                        <Typography gutterBottom variant="h5" component="h2" onClick={() => handleMark(card.name)}>
                          {card.name}
                        </Typography>
                        </Link>
                        <Typography>
                          This is a media card.
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Link to="/gallery">
                        <Button size="small">View</Button>
                      </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
      );
}

export default Home