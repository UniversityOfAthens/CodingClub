import { Box, Typography } from "@mui/material";

export default function OpenSource()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Box
        component="img"
        src="/os-logo.png"
        alt="Logo"
        sx={{
          height: "20vh",
          width: "20vh",
          marginY: "2rem",
          alignSelf: "center",
        }}
        />
        <Typography variant="h1" component={"h1"} textAlign={"center"} marginY={"1rem"}  sx={{ fontSize: '3rem' }}>
        Open Source
        </Typography>
    </Box>
}