import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: '#34053D',
    },
    secondary: {
      main: '#947C9C',
    },
    special: {
        main: "#43C5E7"
    },
    error: {
      main: red.A400,
    },
  },
});

export const darkTheme = createTheme({
    cssVariables: true,
    palette: {
      mode: "dark",
      primary: {
        main: '#30003B',
      },
      secondary: {
        main: '#43C5E7',
      },
      error: {
        main: red.A400,
      },
    },
  });