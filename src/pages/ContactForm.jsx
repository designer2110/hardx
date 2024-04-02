import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import image from "../image/images-contacto.jpg";

const config = {
    REACT_APP_SERVICE_ID: "service_zdh8gpa",
    REACT_APP_TEMPLATE_ID: "contact_form",
    REACT_APP_PUBLIC_KEY: "_ETh1PZZlWKFupVJ2",
  };



const ContactForm = () => {

    const theme = createTheme({
        palette: {
          primary: {
            main: '#000000',
          }
      }});

      
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          config.REACT_APP_SERVICE_ID,
          config.REACT_APP_TEMPLATE_ID,
          e.target,
          config.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };
    return (
    <div className="root">
    <ThemeProvider theme={theme}>
      <Grid container spacing={12}>
      <Grid item xs={4} md={12}>
    <div className='top'>
      <form onSubmit={sendEmail}>
        <table>
        <tr className='fila1'>
            <td><Card className='card' variant="outlined" sx={{ maxWidth: 700, backgroundColor: "black", border: '4px solid green'}}><CardMedia
        sx={{ height: 268.5, width: 288 }}
        image={image}
        title="Person 1"
      /></Card></td>
      </tr>
      <tr>
            <td><p>Por favor sírvase escribirnos, le responderemos en la brevedad:</p></td>
            
        </tr>
            <tr className='fila0'>
                <td><label>Name</label></td>
                <td><input type="text" name="user_name" /></td>
        </tr>
            <tr className='fila1'>
            <td><label>Email</label></td>
            <td><input type="email" name="user_email" /></td>
        </tr>
            <tr>
            <td><label>Message</label></td> 
            <td><textarea name="message" className='input'/></td></tr>
        <tr>
            <td></td>
            <td><input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}</td>
     </tr>
     </table>
     </form>
       
        
        
       
        
      </div>
      </Grid>
      </Grid>
      </ThemeProvider>
    </div> 
    );
  };
  export default ContactForm;