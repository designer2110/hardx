import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
}});

export default function Appbar() {

    return (
<ThemeProvider theme={theme}>
<AppBar position="static">
<Container maxWidth="xl">
  <Toolbar disableGutters>
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#42f554',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>   
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>             
                  <Link to="/"><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#42f554',
        textDecoration: 'none' }}>
                  Products
    </Typography></Link>
              
                  <Link to="/aboutus"><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#42f554',
        textDecoration: 'none' }}>About Us</Typography></Link>
             
                  <Link to="/contactus"><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#42f554',
        textDecoration: 'none' }}>Contact Us</Typography></Link>
        </Box>  
    <Button color="inherit">Login</Button>
    
  </Toolbar>
</Container>
</AppBar>
</ThemeProvider>
    )
}
