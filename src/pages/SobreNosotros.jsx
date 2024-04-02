import React from "react";
import './sobrenosotros.css';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { fade, makeStyles } from "@material-ui/core/styles";
import  AppBar  from '../components/navbar';
import { ThemeProvider } from '@emotion/react';
import Grid from "@material-ui/core/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import image from "../image/pcrepair.jpg";
import image2 from "../image/business.avif";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
}});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    border: '4px solid green',
    backgroundColor: 'black'
  },

}));

function SobreNosotros() {
  const classes = useStyles();
  return (
    <div className="root">
      <ThemeProvider theme={theme}>
      <div className='top'>
      
     
      <Grid className='show' container spacing={16}>
      <Grid item xs={6} md={16}>
      <><Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <table>
      <tr>     
      <h1>Sobre Nosotros</h1>
      </tr>
      <tr className="image">
      <td sx={{width: 675}} className="imagetd">
      <Card className='card' variant="outlined" sx={{ maxWidth: 700, backgroundColor: "black", border: '4px solid green'}}><CardMedia
        sx={{ height: 268.5, width: 288 }}
        image={image2}
        title="Person 1"
      /></Card>
      </td>
      </tr>
      <tr>
          <br></br>
        </tr>
      <tr>
      <td sx={{width: 675}}>      <p>Hardx nace en Buenos Aires en 1969. Somos una empresa dedicada integramente
        a la venta de hardware de computación, por lo que contamos con los mejores expertos
        en la materia. No sólo te vas a llevar el mejor hard, y a un buen precio, sino que
        podés contactarnos en cualquier momento para que te asesoremos sobre cualquier duda que tengas.
        <tr>
          <br></br>
        </tr>
        Nuestras oficinas están en Capital Federal, zona Microcentro, de modo que hay múltiples formas de
        transporte que te acercan a nosotros (subte, colectivo, tren). Tenemos en vidriera y stock a disposición
        múltiples modelos tanto de PC como de impresoras, faxes, equipos de ethernet, insumos como papel de impresión, etc.
        para que puedas verlos presencialmente, consultarnos y ver las características propias de cada equiposen en
        detalle.
        <tr>
          <br></br>
        </tr>
        <tr>
        Además podés traer tu equipo para revisar o dejárnoslo para que lo veamos ya que ofrecemos servicio de reparación.
        Si hay algo que no funciona no lo tires! Quizás podamos arreglarlo...
        </tr>
      </p>
      </td>
      </tr>
      </table>
      </Box>
      </>
      </Grid>
      </Grid>
    

    </div>
    </ThemeProvider>
    </div>
  );
}

export default SobreNosotros;