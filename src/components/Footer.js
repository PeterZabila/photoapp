import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Created for educational purposes
            </Typography>

            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://3d-portfolio-three-jade.vercel.app/">
                My web portfolio website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
          </Box>
    );
  }

export default Footer;