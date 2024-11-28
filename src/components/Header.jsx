import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Πρόγραμμα", path: "/meetings" },
    { text: "Game Development", path: "/gamedev" },
    { text: "Ethical Hacking", path: "/ethicalhacking" },
    { text: "Hackathons", path: "/hackathons" },
    { text: "Competitive Programming", path: "/competitiveprogramming" },
    { text: "Open Source", path: "/opensource" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.main", padding: 0, margin: 0 }}
        elevation={0}
      >
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              height: 75,
              width: 75,
              margin: "0.75rem",
              cursor: "pointer", // Indicates it's clickable
            }}
            onClick={() => navigate("/")} // Navigate to the home page
          />
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ marginLeft: "auto", marginRight: "1rem" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ marginLeft: "auto", display: "flex" }}>
              {menuItems.map((item, index) => (
                <Box
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: "bold",
                    alignContent: "center",
                    textAlign: "center",
                    padding: "0.5rem 1rem",
                    marginRight: index === menuItems.length - 1 ? "2rem" : "0",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {item.text}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
