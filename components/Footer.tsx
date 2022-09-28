import React from 'react';
import { Container, Grid, Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Link href="https://www.linkedin.com/in/haoyan-chen/">
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com/jimmychen97">
              <GitHubIcon />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
