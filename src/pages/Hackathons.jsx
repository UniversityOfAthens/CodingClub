import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import formatFileName from "../general/formatFileName";

export default function Hackathons() {
  const [markdownFiles, setMarkdownFiles] = useState([]);

  useEffect(() => {
    const files = import.meta.glob("../assets/announcements/hackathons/*.md", {
      as: "raw",
    });
    const loadFiles = async () => {
      const loadedFiles = await Promise.all(
        Object.keys(files).map(async (filePath) => {
          const content = await files[filePath]();
          return {
            name: filePath.split("/").pop(),
            content,
          };
        })
      );
      setMarkdownFiles(loadedFiles);
    };

    loadFiles();
  }, []);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        component="img"
        src="/h-logo.png"
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
        Hackathons
      </Typography>
      <Typography>Κάθε Παρασκευή 17:00 - 19:00 στην αίθουσα ΣΤ</Typography>
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
        {markdownFiles.map((file, index) => (
          <Announcement
            title={formatFileName(file.name)}
            description={file.content}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
