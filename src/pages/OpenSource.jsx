import { Box, Typography } from "@mui/material";

export default function OpenSource()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" component={"h1"} textAlign={"center"} marginY={"2rem"}  sx={{ fontSize: '3rem' }}>
        Open Source
        </Typography>
    </Box>
}