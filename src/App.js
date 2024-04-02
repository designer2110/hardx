import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
/*Barra de navegación*/
// import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme } from '@mui/material/styles';
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from '@mui/material/Toolbar';
import Grid from "@material-ui/core/Grid";
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
/*--------- ---------*/
/*paginas*/
import SobreNosotros from "./pages/SobreNosotros.jsx";
/*Carousel*/
import Carousel from 'react-material-ui-carousel';
/*imagenes*/
import image1 from "./image/disco_1.jpg";
import image2 from "./image/disco_2.jpg";
import image3 from "./image/disco_3.jpg";
import image4 from "./image/pc1.jpg";
import image5 from "./image/pc2.jpg";
import image6 from "./image/pc3.jpg";
/*Appbar*/
import  AppBar  from './components/navbar';
import HomePage from './pages/homepage';
import ContactForm from './pages/ContactForm';

const pages = ['Products', 'About us', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
}});


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1
  },
  container: {
    border: '4px solid green',
    backgroundColor: 'black'
  },

}));



function App() {

  const images = [
    image1,
    image2,
    image3
  ]

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();

  return (
//     <div className="App">
//     <BrowserRouter>
//     <Routes>
//     <Route path="/aboutus" element={<SobreNosotros />} />
//     </Routes>
//     <div className="root">
//       <ThemeProvider theme={theme}>
//       {/* <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#42f554',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>   
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>             
//                         <Link to="/"><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#42f554',
//               textDecoration: 'none' }}>
//                         Products
//           </Typography></Link>
                    
//                         <Link to="/aboutus"><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#42f554',
//               textDecoration: 'none' }}>About Us</Typography></Link>
                   
//                         <Link to="/contactus"><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#42f554',
//               textDecoration: 'none' }}>Contact Us</Typography></Link>
//               </Box>  
//           <Button color="inherit">Login</Button>
          
//         </Toolbar>
//       </Container>
//       </AppBar> */}
//       <AppBar position="static"/>
      
//     <div className='top'>
      
//     <Carousel className="crsl" autoPlay infiniteLoop centerMode interval={4000} indicators={true}>
//                 {
//                   images.map(
//                     image=> <img src={image} />)
//                 }

//     </Carousel>            
//     </div>
//     <div className='middle'>
//     <Grid className='show' container spacing={16}>
//         <Grid item xs={4} md={6}>
//             <div className='card1'><Box sx={{ maxWidth: 600, marginRight: 10 }}>
//       <Card className='card' variant="outlined" sx={{ maxWidth: 700, backgroundColor: "black", border: '4px solid green'}}><CardMedia
//         sx={{ height: 179, width: 192 }}
//         image={image4}
//         title="Person 1"
//       /><CardContent>
//       <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white'}}>
//         PC full Intel Core i7
//       </Typography>
//       <Typography variant="body2" color="text.secondary" sx={{ width: 450, color: 'white' }}>
//       Computadora completa lista para usar – Intel Core i7 con Monitor Hikvision 22 pulgadas.
//       Características principales:

// Procesador:
// Intel Core i7 2600 de 4 núcleos y 3.8 GHz.
// Memoria RAM:
// 16 GB DDR3.
// Almacenamiento:
// Disco rígido de 240 GB SSD.
// Sistema operativo:
// Descubre nuestras computadoras con Linux y programas básicos preinstalados.
// Gráficos:
// Placa de video onboard Intel HD 2000. Proporciona gráficos nítidos y fluidos para todas las tareas diarias.
// Conectividad:
// Salida de video VGA y HDMI.
// Gabinete:
// Kelix / Sentey con una fuente de 500W.
//       </Typography>
//     </CardContent></Card>
//     </Box></div>
//     </Grid>
//     <Grid item xs={4} md={6}>
//     <div className='card1'><Box sx={{ maxWidth: 600, marginRight: 10 }}>
//       <Card className='card' variant="outlined" sx={{ maxWidth: 700, backgroundColor: "black", border: '4px solid green'}}><CardMedia
//         sx={{ height: 179, width: 192 }}
//         image={image5}
//         title="Person 1"
//       /><CardContent>
//       <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white'}}>
//         PC Intel Core i7 12700
//       </Typography>
//       <Typography variant="body2" color="text.secondary" sx={{ width: 450, color: 'white'}}>
//       Computadora completa lista para usar – Intel Core i7.
//       Características principales:

// Procesador:
// Intel Core i7 12700 4.4 GhZ Alder Lake 1700
// Memoria RAM:
// 16 GB DDR3.
// Almacenamiento:
// Disco rígido de 480 GB SSD.
// Sistema operativo:
// Descubre nuestras computadoras con Linux y programas básicos preinstalados.
// Gráficos:
// Placa de video onboard Intel HD 2000. Proporciona gráficos nítidos y fluidos para todas las tareas diarias.
// Conectividad:
// Salida de video VGA y HDMI.
// Gabinete:
// Kelix / Sentey con una fuente de 750W.
//       </Typography>
//     </CardContent></Card>
//     </Box></div>
//     </Grid>
//     <Grid item xs={4} md={6} className='grid1'>
//     <div className='card1'><Box sx={{ maxWidth: 600, marginRight: 10 }}>
//       <Card className='card' variant="outlined" sx={{ maxWidth: 700, backgroundColor: "black", border: '4px solid green'}}><CardMedia
//         sx={{ height: 179, width: 192 }}
//         image={image6}
//         title="Person 1"
//       /><CardContent>
//       <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white'}}>
//         PC full Intel Core i7
//       </Typography>
//       <Typography variant="body2" color="text.secondary" sx={{ width: 450, color: 'white'}}>
//       Computadora completa lista para usar – Intel Core i7
//       Características principales:

// Procesador:
// Intel Core i7 2600 de 4 núcleos y 3.4 GHz.
// Memoria RAM:
// 16 GB DDR3.
// Almacenamiento:
// Disco rígido de 1TB
// Sistema operativo:
// Descubre nuestras computadoras con Linux y programas básicos preinstalados.
// Gráficos:
// Placa de video onboard Intel HD 2000. Proporciona gráficos nítidos y fluidos para todas las tareas diarias.
// Conectividad:
// Salida de video VGA y HDMI.
// Gabinete:
// ATX on una fuente de 500W.
//       </Typography>
//     </CardContent></Card>
//     </Box></div>
//     </Grid>
//     </Grid>
//     </div>  
//     </ThemeProvider>
//     </div>
//     </BrowserRouter>
//     </div>

<div className="App">
   <BrowserRouter>
     <AppBar position="static"/>
     <Routes>
     <Route path="/" element={
      <>
        <HomePage />
      </>
    }
    />
       <Route path="/products" element={<HomePage />} />
       <Route path="/aboutus" element={<SobreNosotros />} />
       <Route path="/contactus" element={<ContactForm />} />
     </Routes>
   </BrowserRouter>
   <ThemeProvider theme={theme}>
    
   </ThemeProvider>
</div>
  );
}

export default App;
