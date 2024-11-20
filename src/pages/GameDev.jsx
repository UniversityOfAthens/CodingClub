import { Box, Typography } from "@mui/material";

export default function GameDev()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '3rem' }}>
            Game Development
        </Typography>
        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα Γ
        </Typography>
    </Box>
}