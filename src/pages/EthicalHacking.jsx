import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import Announcement from "../components/Announcement";
export default function EthicalHacking()
{
    const [markdownFiles, setMarkdownFiles] = useState([]);

    useEffect(() => {
      const files = import.meta.glob('../assets/announcements/ethical-hacking/*.md', { as: 'raw' });
      const loadFiles = async () => {
        const loadedFiles = await Promise.all(
          Object.keys(files).map(async (filePath) => {
            const content = await files[filePath]();
            return {
              name: filePath.split('/').pop(),
              content,
            };
          })
        );
        setMarkdownFiles(loadedFiles);
      };

      loadFiles();
    }, []);

    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
        <Typography variant="h1" component={"h1"} textAlign={"center"} marginY={"1rem"}S  sx={{ fontSize: '3rem' }}>
        Ethical Hacking
        </Typography>
        <Typography variant="h1" component={"h1"} textAlign={"center"} marginY={"3rem"}  sx={{ fontSize: '3rem' }}>
            Announcements
        </Typography>
        <Box sx={{alignSelf: "center", width: { xs: '100%', sm: "80%", lg: '45%' }}}>
            {markdownFiles.map((file, index) => (
                <Announcement title={file.name} description={file.content} key={index}/>
            ))}
        </Box>
    </Box>
}