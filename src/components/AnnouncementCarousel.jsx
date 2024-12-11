import React from "react";
import { Card,CardHeader,CardMedia, Box, CardContent, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const AnnouncementCarousel = ({ title, description, date, imageUrls }) => {
  return (
    <Card sx={{ marginBottom: "1.5rem", boxShadow: 3, height: "100%", display: "flex" }}>
        {imageUrls?.map((imageUrl, index) => (
            <CardMedia
            key={index}
            component="img"
            height="400px"
            image={imageUrl}
            sx={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
            }}
            />
        ))}
        <Box sx={{width:"100%"}}>
            <CardHeader
            title={title}
            subheader={date}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="body1"
                    color="text.secondary"
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
                      p: ({ node, children, ...props }) => <Typography {...props}>{children}</Typography>,
                    }}
                >
                    {description}
                </ReactMarkdown>
                </Typography>
            </CardContent>
        </Box>


        
    </Card>
  );
};

export default AnnouncementCarousel;
