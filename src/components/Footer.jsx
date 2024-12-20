import React from 'react';
import { Box, Typography, Link } from '@mui/material';

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
        &copy; {new Date().getFullYear()} Dit Coding Club
      </Typography>
      <Typography>
        Θες να βοηθήσεις στο development του site? Δες <Link target="_blank" href="https://github.com/UniversityOfAthens/CodingClub" sx={{color:"#43C5E7"}}>εδώ</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
