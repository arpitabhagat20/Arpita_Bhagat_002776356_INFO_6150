import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export default function ContactForm() {

  const handleClick= () => {
    document.getElementById('contact-form').submit();
    alert("You message has been submitted. We will be in touch soon!");
  }

  return (
    <React.Fragment>
      <Box alignItems="center" sx={{  flexGrow: 1, maxWidth: 752, backgroundColor:'#F3FFFF', marginTop: '50px' }}>
        <br/>
        <Typography variant='body1'>Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.</Typography>
        <form id="contact-form">
          <TextField
            label="Name"
            required
            variant="outlined"
            placeholder='Enter your Name'
            color="primary"
            type="name"
            sx={{mb: 3}}
            fullWidth
          />
          <TextField
            label="Email"
            required
            placeholder='Enter your Email'
            variant="outlined"
            color="primary"
            type="email"
            sx={{mb: 3}}
            fullWidth
          />
          <TextField
            label="Subject"
            variant="outlined"
            color="primary"
            placeholder='Enter your Subject'
            type="email"
            sx={{mb: 3}}
            fullWidth
          />
          <TextField
            label="Message"
            variant="outlined"
            color="primary"
            type="email"
            sx={{mb: 3}}
            multiline
            placeholder='Enter your Message'
            rows={4}
            fullWidth
          />
          <Button 
            variant="outlined" 
            style={{ color:'black', borderBlockColor: 'black' }}
            onClick={() => handleClick()}
          >Send</Button>
        </form>
      </Box>
    </React.Fragment>
  );
}
