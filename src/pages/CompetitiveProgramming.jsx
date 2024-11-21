import { Box, Typography } from "@mui/material";

export default function CompetitiveProgramming()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
        <Typography variant="h1" component={"h1"} textAlign={"center"} marginY={"1rem"}  sx={{ fontSize: '3rem' }}>
            Competitive Programming
        </Typography>

        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα Β
        </Typography>
    </Box>
}