import { Box, Typography } from "@mui/material";

export default function Hackathons()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '3rem' }}>
            Hackathons
        </Typography>
        <Typography>
            Κάθε Παρασκευή 17:00 - 19:00 στην αίθουσα ΣΤ
        </Typography>
    </Box>
}