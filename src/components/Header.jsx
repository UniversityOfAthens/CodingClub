import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main',padding: 0, margin: 0 }} elevation={0}>
      <Toolbar sx={{padding: 0.75, margin: 0}} disableGutters>
        <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
                height: 75,
                width: 75,
            }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
