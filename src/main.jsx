import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {darkTheme, lightTheme} from './theme';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from "./pages/Home"
import "./main.css"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  return  <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    <RouterProvider router={router}/>
  </ThemeProvider>
}

root.render(
  <App/>
);