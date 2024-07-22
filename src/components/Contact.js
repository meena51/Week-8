import React from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <form>
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}




export default Contact;
