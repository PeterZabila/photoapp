import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link'
import back from '../images/backdrop.jpeg';
import me from '../images/me.png';

import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from '@material-ui/icons';

const About = () => {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${back})`
        }
    };

  return (
  
    <Container >
        <Box component="div"
            sx={{
    
                    height: "100%",
                    backgroundImage: `url(${back})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                    paddingBottom: "20px"
                }}

                // style={{ paddingTop: "20px" }}
        >
            {/* <img src={back} alt={back}/> */}
            <Avatar src={me} style={{ width: 150, height: 150}}/>
            <Typography style={{ fontSize: 30, fontWeight: 700 }}> 
                Про мене
            </Typography>
            {/* <Divider/> */}
            <Typography sx={{ paddingRight: "200px", paddingBottom: "20px", width: "750px" }}>
            
Привіт! Радий тебе/вас бачити у себе на сторінці. Я ще над нею працюю у перервах між роботою та обробкою фото, тому ще буде багато цікавого
Рубрика ж «Про мене», тому розповім трішки про свій шлях та ставлення до фотографії. Взагалі у мене, мабуть як і в більшості українців, декілька дипломів про вищу освіту (європейські та східні мови, право і т.д.), але зупинився на тому, чим захоплюватися почав ще зі студентських років. До речі, захоплення триває, можливо в іншій формі. 
Для мене фотографія - це перш за все процес, що включає підготовку (технічну, підбір референсів, нові ідеї, спілкування з замовником), саме фотографування і постобробку. Процес цілісний, інтегрований і нероздільний. Під час підготовки люблю черпати натхнення з музики, фільмів, серіалів, поезії, людей.
Найближчі мені LoveStory фотосесії, сімейні фото та портрет. Репортажне фото на ширік – то OneLove.
Переходьте у галерею – там є приклади моїх робіт. Буду вдячний за фідбек у месенджерах та соціальних мережах.
І звичайно ж, чекаю до себе на фотосесії!
            </Typography>
            <Stack direction="row" alignItems="center" spacing={4}>
                <Link href="https://www.instagram.com/petro_zabila/">
                    <InstagramIcon fontSize="large" sx={{ color: "#E1306C" }} />
                </Link>
                <Link href="https://www.facebook.com/petro.zabila/">
                    <FacebookIcon color="primary" fontSize="large" />
                </Link>
                <Link href="https://www.pinterest.com/petrozabila/">
                    <PinterestIcon fontSize="large" sx={{ color: "#E60023" }} />
                </Link>
                <Link href="https://www.linkedin.com/in/petro-zabila-685052257/">
                    <LinkedInIcon fontSize="large" color="primary" />
                </Link>
            </Stack>
        </Box>
    </Container>
  )
}

export default About
