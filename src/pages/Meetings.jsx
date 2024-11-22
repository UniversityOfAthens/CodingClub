import { Box, Typography } from "@mui/material";

export default function Meetings()
{
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '4em',marginTop: "2rem" }}>
            Meetings
        </Typography>
        <Typography variant="h2" component={"h2"} textAlign={"center"}  sx={{ fontSize: '3em',marginTop: "2rem" }}>
            Competitive Programming
        </Typography>
        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα <span style={{ color: '#cfff00' }}>Β</span>
        </Typography>
        <Typography variant="h2" component={"h2"}  textAlign={"center"}  sx={{ fontSize: '3em',marginTop: "2rem" }}>
            Game Development
        </Typography>
        <Typography>
            Κάθε Πέμπτη 11:00 - 13:00 στην αίθουσα <span style={{ color: '#006eff' }}>Γ</span>
        </Typography>
        <Typography variant="h2" component={"h2"}  textAlign={"center"}  sx={{ fontSize: '3em',marginTop: "2rem" }}>
            Hackathons
        </Typography>
        <Typography>
            Κάθε Παρασκευή 17:00 - 19:00 στην αίθουσα <span style={{ color: '#61ff57' }}>ΣΤ</span>
        </Typography>
        <Typography variant="h1" component={"h1"} textAlign={"center"}  sx={{ fontSize: '4em',marginTop: "2rem" }}>
            Χάρτης Σχολής
        </Typography>
        <Box
            component="img"
            src="/map.png"
            alt="Logo"
            sx={{
                height: "45vh",
                width: { xs: '100%', sm: "65%", md: '40%' },
                marginY: "2rem",
                alignSelf: "center"
            }}
        />
    </Box>
}