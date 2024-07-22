import React from 'react';
  import { Typography, Container } from '@mui/material';
  
  const About = () => {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1" paragraph>
          Hello! My name is Meena and I am passionate about blog writing. Writing has always been a creative outlet for me, and blogging allows me to share my thoughts, experiences, and expertise with a wider audience.
        </Typography>
        <Typography variant="body1" paragraph>
          I started my blogging journey , and since then, I have been dedicated to creating engaging and informative content on topics that interest me. Whether it's sharing tips and tricks, discussing current events, or delving into personal experiences, I strive to create content that resonates with my readers.
        </Typography>
        <Typography variant="body1" paragraph>
          As a blog writer, I believe in the power of storytelling and the impact it can have on others. Through my writing, I aim to inspire, educate, and entertain my audience while fostering a sense of community and connection.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for visiting my blog and joining me on this journey. I look forward to sharing more content with you in the future!
        </Typography>
      </Container>
    );
  }
  
  
  


export default About
