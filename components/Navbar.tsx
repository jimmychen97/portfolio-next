import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

const pages = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <IconButton size="large" edge="start" color="inherit">
            <WbSunnyRoundedIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Jimmy C.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link href="/projects">
            <Button color="inherit">Projects</Button>
          </Link>
          <Link href="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
