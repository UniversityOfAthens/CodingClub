import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import GameDev from "./pages/GameDev";
import EthicalHacking from "./pages/EthicalHacking";
import "./main.css";
import Hackathons from "./pages/Hackathons";
import CompetitiveProgramming from "./pages/CompetitiveProgramming";
import OpenSource from "./pages/OpenSource";
import Meetings from "./pages/Meetings";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/meetings",
        element: <Meetings />,
      },
      {
        path: "/gamedev",
        element: <GameDev />,
      },
      {
        path: "/ethicalhacking",
        element: <EthicalHacking />,
      },
      {
        path: "/hackathons",
        element: <Hackathons />,
      },
      {
        path: "/competitiveprogramming",
        element: <CompetitiveProgramming />,
      },
      {
        path: "/opensource",
        element: <OpenSource />,
      },
    ],
  },
]);

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

root.render(<App />);
