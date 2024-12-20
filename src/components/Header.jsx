import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popper,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  
  // We'll store a separate ref for each section so we know exactly which element to anchor
  const anchorRefs = useRef([]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const sections = [
    {
      text: "Πρόγραμμα",
      path: "/meetings",
    },
    {
      text: "Ανακοινώσεις",
      path: "/general",
    },
    {
      text: "Ομιλίες",
      path: "/talks",
    },
    {
      text: "Πεδία",
      subItems: [
        { text: "Security", path: "/security" },
        { text: "Game Development", path: "/gamedev" },
        { text: "Competitive Programming", path: "/cp" },
        { text: "Hackathons", path: "/hackathons" },
        { text: "Open Source", path: "/opensource" },
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    if (!isMobile && sections[index].subItems) {
      setOpenIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenIndex(null);
    }
  };

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
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
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
              {sections.map((section, i) => {
                const hasSubItems = section.subItems && section.subItems.length > 0;
                return (
                  <Box
                    key={i}
                    sx={{ position: "relative" }}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasSubItems ? (
                      <Box
                        ref={(el) => (anchorRefs.current[i] = el)}
                        sx={{
                          color: "inherit",
                          textDecoration: "none",
                          fontWeight: "bold",
                          paddingX: "1rem",
                          paddingTop: "0rem",
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                        }}
                      >
                        {section.text}
                        <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                      </Box>
                    ) : (
                      <Box
                        component={Link}
                        to={section.path}
                        sx={{
                          color: "inherit",
                          textDecoration: "none",
                          fontWeight: "bold",
                          paddingX: "1rem",
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                        }}
                      >
                        {section.text}
                      </Box>
                    )}

                    {hasSubItems && (
                      <Popper
                        open={openIndex === i}
                        anchorEl={anchorRefs.current[i]}
                        placement="bottom-start"
                        modifiers={[
                          {
                            name: 'offset',
                            options: {
                              offset: [0, 0], // Adjust the second value to move vertically
                            },
                          },
                        ]}
                        style={{ zIndex: 9999 }}
                      >
                        <Paper
                          sx={{
                            boxShadow: 3,
                            minWidth: 150,
                          }}
                        >
                          {section.subItems.map((item, idx) => (
                            <Box
                              key={idx}
                              component={Link}
                              to={item.path}
                              sx={{
                                display: "block",
                                color: "inherit",
                                textDecoration: "none",
                                padding: "0.5rem 1rem",
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
                              }}
                              onClick={() => setOpenIndex(null)}
                            >
                              {item.text}
                            </Box>
                          ))}
                        </Paper>
                      </Popper>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
        <List>
          {sections.map((section, i) => (
            <React.Fragment key={i}>
              {section.subItems && section.subItems.length > 0 ? (
                <>
                  {/* Use a ListItem with bold text to indicate a section heading */}
                  <ListItem>
                    <ListItemText
                      primary={
                        <Box sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                          {section.text}
                          <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                        </Box>
                      }
                    />
                  </ListItem>
                  {section.subItems.map((item, idx) => (
                    <ListItemButton
                      key={idx}
                      component={Link}
                      to={item.path}
                      onClick={toggleDrawer(false)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  ))}
                </>
              ) : (
                <ListItemButton
                  component={Link}
                  to={section.path}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={section.text} />
                </ListItemButton>
              )}
            </React.Fragment>
          ))}
        </List>

        </Box>
      </Drawer>
    </>
  );
};

export default Header;
