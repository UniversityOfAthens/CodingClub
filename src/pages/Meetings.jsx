import { Box, Typography } from "@mui/material";

export default function Meetings()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '3rem',marginTop: "5vh" }}>
            Meetings
        </Typography>
        <Typography variant="h2" component={"h2"} textAlign={"center"}  sx={{ fontSize: '3rem',marginTop: "5vh" }}>
            Competitive Programming
        </Typography>
        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα Β
        </Typography>
        <Typography variant="h2" component={"h2"}  textAlign={"center"}  sx={{ fontSize: '3rem',marginTop: "5vh" }}>
            Game Development
        </Typography>
        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα Γ
        </Typography>
        <Typography variant="h2" component={"h2"}  textAlign={"center"}  sx={{ fontSize: '3rem',marginTop: "5vh" }}>
            Hackathons
        </Typography>
        <Typography>
            Κάθε Παρασκευή 17:00 - 19:00 στην αίθουσα ΣΤ
        </Typography>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '3rem',marginTop: "5vh" }}>
            Χάρτης Σχολής
        </Typography>
        <Box
            component="img"
            src="/map.png"
            alt="Logo"
            sx={{
                height: "45vh",
                width: { xs: '100%', sm: "65%", md: '40%' },
                marginY: "1vh",
                alignSelf: "center"
            }}
        />
    </Box>
}