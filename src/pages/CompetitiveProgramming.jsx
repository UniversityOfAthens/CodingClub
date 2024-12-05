import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import formatFileName from "../general/formatFileName";

export default function CompetitiveProgramming() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch('/announcements/competitive programming.md')
    .then((response) => response.text())
    .then((data) => {
    setAnnouncements(data.split("---").splice(0, 1))
    });
  
  })
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        component="img"
        src="/cp-logo.png"
        alt="Logo"
        sx={{
          height: "20vh",
          width: "20vh",
          marginY: "2rem",
          alignSelf: "center",
        }}
      />
      <Typography
        variant="h1"
        component={"h1"}
        textAlign={"center"}
        marginY={"1rem"}
        sx={{ fontSize: "3rem" }}
      >
        Competitive Programming
      </Typography>
      <Typography
        variant="h1"
        component={"h1"}
        textAlign={"center"}
        marginY={"3rem"}
        sx={{ fontSize: "3rem" }}
      >
        Announcements
      </Typography>
      <Box
        sx={{
          alignSelf: "center",
          width: { xs: "100%", sm: "80%", lg: "45%" },
        }}
      >
        {announcements.map((announcement, index) => (
          <Announcement
            title={""}
            description={announcement}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
