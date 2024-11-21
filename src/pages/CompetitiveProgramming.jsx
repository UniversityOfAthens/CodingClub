import { Box, Typography } from "@mui/material";

export default function CompetitiveProgramming()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" component={"h1"} textAlign={"center"} marginY={"2rem"}  sx={{ fontSize: '3rem' }}>
            Competitive Programming
        </Typography>
        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα Β
        </Typography>
    </Box>
}