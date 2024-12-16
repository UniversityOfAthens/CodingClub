import React from "react";
import { Card,CardHeader,CardMedia, Box, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const Announcement = ({ title, description, date, imagesUrl }) => {
  return (
    <Card sx={{ marginBottom: "1.5rem", boxShadow: 3, height: "100%" }}>
      <CardHeader
          title={title}
          subheader={date}
      />
      {imagesUrl?.map((imageUrl, index) => (
        <CardMedia
          key={index}
          component="img"
          height="400px"
          image={imageUrl}
          sx={{
            height: "auto",
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      ))}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{ wordWrap: "break-word" }}
          >
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  alt={props.alt}
                />
              ),
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer">
                  {props.children}
                </a>
              ),
              p: ({ node, ...props }) => (
                <Typography {...props} sx={{margin: "0px",padding:"0px"}}>
                  {props.children}
                </Typography>
              ),
              code: ({ node, ...props }) => (
                <Typography {...props} sx={{margin: "0px",padding:"0px"}}>
                  {props.children}
                </Typography>
              ),
              pre: ({ node, ...props }) => (
                <Typography {...props} sx={{margin: "0px",padding:"0px"}}>
                  {props.children}
                </Typography>
              ),
              ul: ({ node, ...props }) => (
                <Typography {...props} sx={{margin: "0px",padding:"0px"}}>
                  {props.children}
                </Typography>
              ),
              ol: ({ node, ...props }) => (
                <Typography {...props} sx={{margin: "0px",padding:"0px"}}>
                  {props.children}
                </Typography>
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Announcement;
