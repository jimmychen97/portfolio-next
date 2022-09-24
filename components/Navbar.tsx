import React from 'react';
import Link from 'next/link';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const pages = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Typography variant="h6">{pages[0]}</Typography>
        <Typography variant="h6">{pages[1]}</Typography>
        <Typography variant="h6">{pages[2]}</Typography>
        <Typography variant="h6">{pages[3]}</Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;
