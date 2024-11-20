import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
        sx={{
            backgroundColor: 'primary.main',
            textAlign: 'center',
            py: 2,
            marginTop: "5rem"
        }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
