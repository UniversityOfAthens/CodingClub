import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import formatFileName from "../general/formatFileName";

export default function EthicalHacking() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fileUrl = "https://codingclub-4bvs.onrender.com/announcements/security.md";  
    fetch(fileUrl)
      .then((response) => {
        // Error loading file or file does not exist
        if (!response.ok) {
          return "";
        }
        return response.text();
      })
      .then((data) => {
        setAnnouncements((announcements) => [...announcements, ...data.split("---").splice(0, 1)]);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  // Fetch announcements from files
  const loadFile = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl); 
      if (!response.ok) {
        throw new Error(`Failed to fetch ${fileUrl}`);
      }
      const content = await response.text();  
      return { content }; 
    } catch (error) {
      console.error("Error loading file:", error);
    }
  };
  
  useEffect(() => {
    const fileUrl = '/assets/announcements/security.md'; 
    loadFile(fileUrl).then((file) => {
      if (file  && file.content) {
        setAnnouncements((prevAnnouncements) => [
          ...prevAnnouncements,
          ...file.content.split("---").splice(0, 1),
        ]);
      }
    });
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        component="img"
        src="/eh-logo.png"
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
        Security
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
            description={announcement.replace(/<@&\d+>/g, "")}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
