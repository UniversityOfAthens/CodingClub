import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Announcement = ({ title, description }) => {
  return (
    <Card sx={{ marginBottom: "1.5rem", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ReactMarkdown
            components={{
                img: ({ node, ...props }) => (
                <img
                    {...props}
                    style={{
                    maxWidth: "100%", // Make it responsive
                    height: "auto", // Maintain aspect ratio
                    objectFit: "cover", // Ensure the image fits the container
                    borderRadius: "8px", // Optional styling
                    }}
                    alt={props.alt}
                />
                ),
                a: ({ node, ...props }) => (
                    <a {...props} target="_blank" rel="noopener noreferrer">
                      {props.children}
                    </a>
                ),
            }}
            >{description}
          </ReactMarkdown>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Announcement;
